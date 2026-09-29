<?php
/**
 * Упрощённая версия API для планов этажей
 * Работает БЕЗ зависимостей, только с файловой системой
 */

// Настройки PHP
error_reporting(E_ALL);
ini_set('display_errors', 0);
ini_set('log_errors', 1);

// CORS заголовки
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Timezone');

// Preflight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Путь к файлу данных
$dataDir = __DIR__ . '/../../data';
$dataFile = $dataDir . '/floor-plans.json';

// Путь к директории для изображений
$uploadsDir = __DIR__ . '/../../uploads/floor-plans';

// Базовый URL для доступа к изображениям
// Используем путь относительно корня сайта (с /backend/)
$baseUrl = '/backend/uploads/floor-plans/';

// Функция для создания директории
function ensureDataDir($dir) {
    if (!file_exists($dir)) {
        @mkdir($dir, 0777, true);
    }
    if (!is_writable($dir)) {
        @chmod($dir, 0777);
    }
}

// Функция для сохранения изображения из base64
function saveImageFromBase64($base64Data, $planId, $uploadsDir) {
    if (empty($base64Data)) {
        return null;
    }
    
    // Проверяем, является ли это data URL
    if (preg_match('/^data:image\/(\w+);base64,(.+)$/', $base64Data, $matches)) {
        $imageType = $matches[1]; // jpeg, png, etc.
        $imageData = $matches[2];
    } else {
        // Если это просто base64 без префикса, пробуем декодировать
        $imageData = $base64Data;
        $imageType = 'jpeg'; // По умолчанию
    }
    
    // Декодируем base64
    $decodedData = base64_decode($imageData, true);
    if ($decodedData === false) {
        error_log("Ошибка декодирования base64 изображения для плана $planId");
        return null;
    }
    
    // Создаём директорию для изображений
    ensureDataDir($uploadsDir);
    
    // Генерируем имя файла
    $filename = 'plan_' . $planId . '_' . time() . '.' . $imageType;
    $filepath = $uploadsDir . '/' . $filename;
    
    // Сохраняем файл
    if (file_put_contents($filepath, $decodedData) === false) {
        error_log("Ошибка сохранения изображения для плана $planId в $filepath");
        return null;
    }
    
    // Устанавливаем права доступа
    @chmod($filepath, 0644);
    
    return $filename;
}

// Функция для удаления файла изображения
function deleteImageFile($imageUrl, $uploadsDir) {
    if (empty($imageUrl)) {
        return;
    }
    
    // Если это URL к файлу, извлекаем имя файла
    if (strpos($imageUrl, '/uploads/floor-plans/') !== false || strpos($imageUrl, '/backend/uploads/floor-plans/') !== false) {
        $filename = basename($imageUrl);
        $filepath = $uploadsDir . '/' . $filename;
        if (file_exists($filepath)) {
            @unlink($filepath);
        }
    }
    // Если это старый base64 data URL, ничего не делаем
}

// Функция для чтения данных
function readData($file) {
    if (!file_exists($file)) {
        return [];
    }
    $content = @file_get_contents($file);
    if ($content === false) {
        return [];
    }
    $data = json_decode($content, true);
    return is_array($data) ? $data : [];
}

// Функция для записи данных
function writeData($file, $data) {
    $json = json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    return @file_put_contents($file, $json) !== false;
}

// Обёртка для ответа
function sendResponse($status, $success, $message, $data = null, $extra = []) {
    http_response_code($status);
    $response = array_merge([
        'status' => $status,
        'success' => $success,
        'message' => $message,
        'data' => $data,
        'source' => 'demo_data',
        'timestamp' => date('Y-m-d H:i:s')
    ], $extra);
    echo json_encode($response, JSON_UNESCAPED_UNICODE);
    exit();
}

try {
    // Создаём директорию для данных
    ensureDataDir($dataDir);
    
    $method = $_SERVER['REQUEST_METHOD'];
    
    // GET - Получение планов
    if ($method === 'GET') {
        $userId = isset($_GET['user_id']) ? intval($_GET['user_id']) : 0;
        $plans = readData($dataFile);
        
        // Фильтруем по user_id если указан
        if ($userId > 0) {
            $plans = array_values(array_filter($plans, function($plan) use ($userId) {
                return isset($plan['user_id']) && $plan['user_id'] == $userId;
            }));
        }
        
        sendResponse(200, true, 'Планы этажей получены успешно', $plans);
    }
    
    // POST - Сохранение плана
    elseif ($method === 'POST') {
        $input = @file_get_contents('php://input');
        if (!$input) {
            sendResponse(400, false, 'Нет данных для сохранения', null, ['error' => 'Empty request body']);
        }
        
        $data = json_decode($input, true);
        if (!$data) {
            sendResponse(400, false, 'Некорректный JSON', null, ['error' => 'Invalid JSON']);
        }
        
        $userId = isset($data['user_id']) ? intval($data['user_id']) : 1;
        $planId = isset($data['id']) ? intval($data['id']) : time();
        $imageUrlInput = isset($data['image_url']) ? $data['image_url'] : null;
        $sensors = isset($data['sensors']) ? $data['sensors'] : [];
        $fontSize = isset($data['font_size']) ? intval($data['font_size']) : 14;
        
        // Логирование для отладки
        error_log("💾 Сохранение плана (index-simple): " . json_encode([
            'user_id' => $userId,
            'plan_id' => $planId,
            'sensorsCount' => count($sensors),
            'sensors' => $sensors,
            'hasImage' => !empty($imageUrlInput)
        ]));
        
        // Читаем существующие планы
        $plans = readData($dataFile);
        
        // Ищем существующий план для удаления старого изображения
        $oldImageUrl = null;
        $oldCreatedAt = null;
        $found = false;
        foreach ($plans as $index => $plan) {
            if (isset($plan['id']) && $plan['id'] == $planId) {
                $oldImageUrl = isset($plan['image_url']) ? $plan['image_url'] : null;
                $oldCreatedAt = isset($plan['created_at']) ? $plan['created_at'] : null;
                $found = true;
                break;
            }
        }
        
        // Обрабатываем изображение
        $imageUrl = null;
        if (!empty($imageUrlInput)) {
            // Если это base64 data URL, сохраняем как файл
            if (strpos($imageUrlInput, 'data:image/') === 0 || strlen($imageUrlInput) > 1000) {
                $filename = saveImageFromBase64($imageUrlInput, $planId, $uploadsDir);
                if ($filename) {
                    $imageUrl = $baseUrl . $filename;
                    // Удаляем старое изображение, если оно было
                    if ($oldImageUrl) {
                        deleteImageFile($oldImageUrl, $uploadsDir);
                    }
                } else {
                    // Если не удалось сохранить, используем старое изображение
                    $imageUrl = $oldImageUrl;
                }
            } else {
                // Если это уже URL к файлу, просто используем его
                $imageUrl = $imageUrlInput;
            }
        } else {
            // Если изображение не передано, используем старое
            $imageUrl = $oldImageUrl;
        }
        
        // Создаём новый план
        $newPlan = [
            'id' => $planId,
            'user_id' => $userId,
            'image_url' => $imageUrl,
            'sensors' => $sensors, // Датчики сохраняются как массив
            'font_size' => $fontSize,
            'created_at' => $oldCreatedAt ?: date('Y-m-d H:i:s'),
            'updated_at' => date('Y-m-d H:i:s')
        ];
        
        // Логирование для отладки
        error_log("💾 Создан новый план: " . json_encode([
            'id' => $newPlan['id'],
            'user_id' => $newPlan['user_id'],
            'sensorsCount' => count($newPlan['sensors']),
            'sensors' => $newPlan['sensors']
        ]));
        
        // Обновляем или добавляем план
        if ($found) {
            foreach ($plans as $index => $plan) {
                if (isset($plan['id']) && $plan['id'] == $planId) {
                    $newPlan['created_at'] = isset($plan['created_at']) ? $plan['created_at'] : $newPlan['created_at'];
                    $plans[$index] = $newPlan;
                    break;
                }
            }
        } else {
            $plans[] = $newPlan;
        }
        
        // Сохраняем
        if (!writeData($dataFile, $plans)) {
            sendResponse(500, false, 'Ошибка записи данных', null, [
                'error' => 'Cannot write to file',
                'file' => $dataFile,
                'writable' => is_writable($dataDir),
                'exists' => file_exists($dataDir)
            ]);
        }
        
        sendResponse(200, true, 'План этажа успешно сохранен', $newPlan);
    }
    
    // DELETE - Удаление плана
    elseif ($method === 'DELETE') {
        $planId = isset($_GET['id']) ? intval($_GET['id']) : 0;
        
        if ($planId === 0) {
            sendResponse(400, false, 'Не указан ID плана');
        }
        
        $plans = readData($dataFile);
        
        // Находим план и удаляем его изображение
        foreach ($plans as $plan) {
            if (isset($plan['id']) && $plan['id'] == $planId) {
                if (isset($plan['image_url']) && !empty($plan['image_url'])) {
                    deleteImageFile($plan['image_url'], $uploadsDir);
                }
                break;
            }
        }
        
        // Удаляем план из массива
        $plans = array_values(array_filter($plans, function($plan) use ($planId) {
            return !isset($plan['id']) || $plan['id'] != $planId;
        }));
        
        writeData($dataFile, $plans);
        sendResponse(200, true, 'План этажа успешно удален', null);
    }
    
    // Неподдерживаемый метод
    else {
        sendResponse(405, false, 'Метод не поддерживается', null, [
            'allowed_methods' => ['GET', 'POST', 'DELETE']
        ]);
    }
    
} catch (Exception $e) {
    sendResponse(500, false, 'Ошибка сервера', null, [
        'error' => $e->getMessage(),
        'file' => basename($e->getFile()),
        'line' => $e->getLine()
    ]);
} catch (Error $e) {
    sendResponse(500, false, 'Критическая ошибка PHP', null, [
        'error' => $e->getMessage(),
        'file' => basename($e->getFile()),
        'line' => $e->getLine()
    ]);
}
