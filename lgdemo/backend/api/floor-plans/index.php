<?php
/**
 * API для управления планами этажей
 * Поддерживает GET, POST, DELETE запросы
 */

// Включаем отображение ошибок для отладки (только для разработки!)
error_reporting(E_ALL);
ini_set('display_errors', 0); // Не показываем ошибки в выводе
ini_set('log_errors', 1); // Логируем ошибки

// Настройка заголовков для CORS и JSON
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type, Authorization, X-Timezone');
header('Access-Control-Max-Age: 3600');

// Обработка preflight запросов
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Обработчик ошибок - оборачиваем весь код
try {

// Получение метода запроса
$method = $_SERVER['REQUEST_METHOD'];

// Проверка режима работы (демо или реальная БД)
// Пытаемся подключить конфиг БД, но если его нет - работаем в демо-режиме
$isDemoMode = true;
$configPath = __DIR__ . '/../../config/database.php';
if (file_exists($configPath)) {
    require_once $configPath;
    $isDemoMode = !defined('DB_HOST') || DB_HOST === 'localhost_demo';
}

// Путь к директории для изображений
$uploadsDir = __DIR__ . '/../../uploads/floor-plans';

// Базовый URL для доступа к изображениям
// Используем путь относительно корня сайта (с /backend/)
$baseUrl = '/backend/uploads/floor-plans/';

// Функция для сохранения изображения из base64
function saveImageFromBase64($base64Data, $planId, $uploadsDir) {
    if (empty($base64Data)) {
        return null;
    }
    
    // Проверяем, является ли это data URL
    if (preg_match('/^data:image\/(\w+);base64,(.+)$/', $base64Data, $matches)) {
        $imageType = $matches[1];
        $imageData = $matches[2];
    } else {
        $imageData = $base64Data;
        $imageType = 'jpeg';
    }
    
    // Декодируем base64
    $decodedData = base64_decode($imageData, true);
    if ($decodedData === false) {
        error_log("Ошибка декодирования base64 изображения для плана $planId");
        return null;
    }
    
    // Создаём директорию для изображений
    if (!file_exists($uploadsDir)) {
        @mkdir($uploadsDir, 0777, true);
    }
    if (!is_writable($uploadsDir)) {
        @chmod($uploadsDir, 0777);
    }
    
    // Генерируем имя файла
    $filename = 'plan_' . $planId . '_' . time() . '.' . $imageType;
    $filepath = $uploadsDir . '/' . $filename;
    
    // Сохраняем файл
    if (file_put_contents($filepath, $decodedData) === false) {
        error_log("Ошибка сохранения изображения для плана $planId в $filepath");
        return null;
    }
    
    @chmod($filepath, 0644);
    return $filename;
}

// Функция для удаления файла изображения
function deleteImageFile($imageUrl, $uploadsDir) {
    if (empty($imageUrl)) {
        return;
    }
    
    if (strpos($imageUrl, '/uploads/floor-plans/') !== false || strpos($imageUrl, '/backend/uploads/floor-plans/') !== false) {
        $filename = basename($imageUrl);
        $filepath = $uploadsDir . '/' . $filename;
        if (file_exists($filepath)) {
            @unlink($filepath);
        }
    }
}

/**
 * Демо-хранилище для планов этажей (в памяти)
 * В реальном режиме используется база данных
 */
class FloorPlanStorage {
    private static $floorPlansFile = __DIR__ . '/../../data/floor-plans.json';
    
    public static function init() {
        $dir = dirname(self::$floorPlansFile);
        if (!file_exists($dir)) {
            mkdir($dir, 0777, true);
        }
        if (!file_exists(self::$floorPlansFile)) {
            file_put_contents(self::$floorPlansFile, json_encode([]));
        }
    }
    
    public static function getAll() {
        self::init();
        $data = file_get_contents(self::$floorPlansFile);
        return json_decode($data, true) ?: [];
    }
    
    public static function save($floorPlan) {
        self::init();
        $plans = self::getAll();
        
        // Генерируем ID, если его нет
        if (!isset($floorPlan['id'])) {
            $floorPlan['id'] = time();
        }
        
        // Проверяем, существует ли план с таким ID
        $found = false;
        foreach ($plans as $index => $plan) {
            if ($plan['id'] == $floorPlan['id']) {
                $plans[$index] = $floorPlan;
                $found = true;
                break;
            }
        }
        
        // Если не найден, добавляем новый
        if (!$found) {
            $plans[] = $floorPlan;
        }
        
        file_put_contents(self::$floorPlansFile, json_encode($plans, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        return $floorPlan;
    }
    
    public static function delete($id) {
        self::init();
        $plans = self::getAll();
        
        $plans = array_filter($plans, function($plan) use ($id) {
            return $plan['id'] != $id;
        });
        
        file_put_contents(self::$floorPlansFile, json_encode(array_values($plans), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT));
        return true;
    }
}

// Обработка GET запроса - получение планов этажей
if ($method === 'GET') {
    try {
        if ($isDemoMode) {
            // Демо-режим: возвращаем данные из файла
            $plans = FloorPlanStorage::getAll();
            
            echo json_encode([
                'status' => 200,
                'success' => true,
                'message' => 'Планы этажей получены успешно',
                'data' => $plans,
                'source' => 'demo_data',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
        } else {
            // Реальная база данных
            $conn = Database::getConnection();
            
            // Получаем user_id из параметров запроса
            $userId = isset($_GET['user_id']) ? intval($_GET['user_id']) : null;
            
            $sql = "SELECT * FROM floor_plans";
            if ($userId) {
                $sql .= " WHERE user_id = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("i", $userId);
            } else {
                $stmt = $conn->prepare($sql);
            }
            
            $stmt->execute();
            $result = $stmt->get_result();
            
            $plans = [];
            while ($row = $result->fetch_assoc()) {
                // Декодируем JSON-поля
                if (isset($row['sensors']) && is_string($row['sensors'])) {
                    $row['sensors'] = json_decode($row['sensors'], true);
                }
                $plans[] = $row;
            }
            
            echo json_encode([
                'status' => 200,
                'success' => true,
                'message' => 'Планы этажей получены успешно',
                'data' => $plans,
                'source' => 'database',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
            
            $stmt->close();
            $conn->close();
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'status' => 500,
            'success' => false,
            'message' => 'Ошибка при получении планов этажей',
            'error' => $e->getMessage(),
            'timestamp' => date('Y-m-d H:i:s')
        ], JSON_UNESCAPED_UNICODE);
    }
}

// Обработка POST запроса - сохранение плана этажа
elseif ($method === 'POST') {
    try {
        // Получаем данные из тела запроса
        $input = json_decode(file_get_contents('php://input'), true);
        
        if (!$input) {
            http_response_code(400);
            echo json_encode([
                'status' => 400,
                'success' => false,
                'message' => 'Некорректные данные запроса',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }
        
        $imageUrlInput = isset($input['image_url']) ? $input['image_url'] : null;
        $sensors = isset($input['sensors']) ? $input['sensors'] : [];
        $fontSize = isset($input['font_size']) ? intval($input['font_size']) : 14;
        $userId = isset($input['user_id']) ? intval($input['user_id']) : 1;
        $planId = isset($input['id']) ? intval($input['id']) : null;
        
        // Получаем старое изображение для удаления
        $oldImageUrl = null;
        if ($planId) {
            if ($isDemoMode) {
                $plans = FloorPlanStorage::getAll();
                foreach ($plans as $plan) {
                    if (isset($plan['id']) && $plan['id'] == $planId) {
                        $oldImageUrl = isset($plan['image_url']) ? $plan['image_url'] : null;
                        break;
                    }
                }
            } else {
                try {
                    $conn = Database::getConnection();
                    $stmt = $conn->prepare("SELECT image_url FROM floor_plans WHERE id = ?");
                    $stmt->bind_param("i", $planId);
                    $stmt->execute();
                    $result = $stmt->get_result();
                    if ($row = $result->fetch_assoc()) {
                        $oldImageUrl = $row['image_url'];
                    }
                    $stmt->close();
                    $conn->close();
                } catch (Exception $e) {
                    // Игнорируем ошибку получения старого изображения
                }
            }
        }
        
        // Обрабатываем изображение
        $imageUrl = null;
        if (!empty($imageUrlInput)) {
            // Если это base64 data URL, сохраняем как файл
            if (strpos($imageUrlInput, 'data:image/') === 0 || strlen($imageUrlInput) > 1000) {
                $filename = saveImageFromBase64($imageUrlInput, $planId ?: time(), $uploadsDir);
                if ($filename) {
                    $imageUrl = $baseUrl . $filename;
                    // Удаляем старое изображение
                    if ($oldImageUrl) {
                        deleteImageFile($oldImageUrl, $uploadsDir);
                    }
                } else {
                    $imageUrl = $oldImageUrl;
                }
            } else {
                $imageUrl = $imageUrlInput;
            }
        } else {
            $imageUrl = $oldImageUrl;
        }
        
        // Логирование для отладки
        error_log("💾 Сохранение плана этажа: " . json_encode([
            'user_id' => $userId,
            'plan_id' => $planId,
            'hasImage' => !empty($imageUrl),
            'imageUrl' => $imageUrl ? (strlen($imageUrl) > 50 ? substr($imageUrl, 0, 50) . '...' : $imageUrl) : null,
            'sensorsCount' => count($sensors),
            'fontSize' => $fontSize
        ]));
        
        if ($isDemoMode) {
            // Демо-режим: сохраняем в файл
            // Получаем существующий план для сохранения created_at
            $existingPlan = null;
            if ($planId) {
                $allPlans = FloorPlanStorage::getAll();
                foreach ($allPlans as $plan) {
                    if (isset($plan['id']) && $plan['id'] == $planId) {
                        $existingPlan = $plan;
                        break;
                    }
                }
            }
            
            $floorPlan = [
                'id' => $planId ?: time(),
                'user_id' => $userId,
                'image_url' => $imageUrl,
                'sensors' => $sensors, // Датчики сохраняются как массив
                'font_size' => $fontSize,
                'created_at' => $existingPlan && isset($existingPlan['created_at']) ? $existingPlan['created_at'] : date('Y-m-d H:i:s'),
                'updated_at' => date('Y-m-d H:i:s')
            ];
            
            // Логирование для отладки
            error_log("💾 Сохраняем план в демо-режиме: " . json_encode([
                'id' => $floorPlan['id'],
                'user_id' => $floorPlan['user_id'],
                'sensorsCount' => count($sensors),
                'sensors' => $sensors
            ]));
            
            $savedPlan = FloorPlanStorage::save($floorPlan);
            
            echo json_encode([
                'status' => 200,
                'success' => true,
                'message' => 'План этажа успешно сохранен',
                'data' => $savedPlan,
                'source' => 'demo_data',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
        } else {
            // Реальная база данных
            $conn = Database::getConnection();
            
            $sensorsJson = json_encode($sensors, JSON_UNESCAPED_UNICODE);
            
            if ($planId) {
                // Обновление существующего плана
                $sql = "UPDATE floor_plans SET 
                        image_url = ?, 
                        sensors = ?, 
                        font_size = ?, 
                        updated_at = NOW() 
                        WHERE id = ? AND user_id = ?";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("ssiii", $imageUrl, $sensorsJson, $fontSize, $planId, $userId);
            } else {
                // Создание нового плана
                $sql = "INSERT INTO floor_plans (user_id, image_url, sensors, font_size, created_at, updated_at) 
                        VALUES (?, ?, ?, ?, NOW(), NOW())";
                $stmt = $conn->prepare($sql);
                $stmt->bind_param("issi", $userId, $imageUrl, $sensorsJson, $fontSize);
            }
            
            if ($stmt->execute()) {
                $savedId = $planId ?: $stmt->insert_id;
                
                echo json_encode([
                    'status' => 200,
                    'success' => true,
                    'message' => 'План этажа успешно сохранен',
                    'data' => [
                        'id' => $savedId,
                        'user_id' => $userId,
                        'image_url' => $imageUrl,
                        'sensors' => $sensors,
                        'font_size' => $fontSize,
                        'updated_at' => date('Y-m-d H:i:s')
                    ],
                    'source' => 'database',
                    'timestamp' => date('Y-m-d H:i:s')
                ], JSON_UNESCAPED_UNICODE);
            } else {
                throw new Exception("Ошибка при сохранении плана: " . $stmt->error);
            }
            
            $stmt->close();
            $conn->close();
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'status' => 500,
            'success' => false,
            'message' => 'Ошибка при сохранении плана этажа',
            'error' => $e->getMessage(),
            'timestamp' => date('Y-m-d H:i:s')
        ], JSON_UNESCAPED_UNICODE);
    }
}

// Обработка DELETE запроса - удаление плана этажа
elseif ($method === 'DELETE') {
    try {
        $planId = isset($_GET['id']) ? intval($_GET['id']) : null;
        
        if (!$planId) {
            http_response_code(400);
            echo json_encode([
                'status' => 400,
                'success' => false,
                'message' => 'Не указан ID плана для удаления',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
            exit;
        }
        
        // Получаем план для удаления изображения
        $planImageUrl = null;
        if ($isDemoMode) {
            $plans = FloorPlanStorage::getAll();
            foreach ($plans as $plan) {
                if (isset($plan['id']) && $plan['id'] == $planId) {
                    $planImageUrl = isset($plan['image_url']) ? $plan['image_url'] : null;
                    break;
                }
            }
        } else {
            try {
                $conn = Database::getConnection();
                $stmt = $conn->prepare("SELECT image_url FROM floor_plans WHERE id = ?");
                $stmt->bind_param("i", $planId);
                $stmt->execute();
                $result = $stmt->get_result();
                if ($row = $result->fetch_assoc()) {
                    $planImageUrl = $row['image_url'];
                }
                $stmt->close();
                $conn->close();
            } catch (Exception $e) {
                // Игнорируем ошибку
            }
        }
        
        // Удаляем файл изображения
        if ($planImageUrl) {
            deleteImageFile($planImageUrl, $uploadsDir);
        }
        
        if ($isDemoMode) {
            // Демо-режим: удаляем из файла
            FloorPlanStorage::delete($planId);
            
            echo json_encode([
                'status' => 200,
                'success' => true,
                'message' => 'План этажа успешно удален',
                'data' => null,
                'source' => 'demo_data',
                'timestamp' => date('Y-m-d H:i:s')
            ], JSON_UNESCAPED_UNICODE);
        } else {
            // Реальная база данных
            $conn = Database::getConnection();
            
            $sql = "DELETE FROM floor_plans WHERE id = ?";
            $stmt = $conn->prepare($sql);
            $stmt->bind_param("i", $planId);
            
            if ($stmt->execute()) {
                echo json_encode([
                    'status' => 200,
                    'success' => true,
                    'message' => 'План этажа успешно удален',
                    'data' => null,
                    'source' => 'database',
                    'timestamp' => date('Y-m-d H:i:s')
                ], JSON_UNESCAPED_UNICODE);
            } else {
                throw new Exception("Ошибка при удалении плана: " . $stmt->error);
            }
            
            $stmt->close();
            $conn->close();
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            'status' => 500,
            'success' => false,
            'message' => 'Ошибка при удалении плана этажа',
            'error' => $e->getMessage(),
            'timestamp' => date('Y-m-d H:i:s')
        ], JSON_UNESCAPED_UNICODE);
    }
}

// Неподдерживаемый метод
else {
    http_response_code(405);
    echo json_encode([
        'status' => 405,
        'success' => false,
        'message' => 'Метод не поддерживается',
        'allowed_methods' => ['GET', 'POST', 'DELETE'],
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}

} catch (Exception $e) {
    // Глобальный обработчик ошибок
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'message' => 'Внутренняя ошибка сервера',
        'error' => $e->getMessage(),
        'file' => basename($e->getFile()),
        'line' => $e->getLine(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
} catch (Error $e) {
    // Обработчик фатальных ошибок PHP
    http_response_code(500);
    echo json_encode([
        'status' => 500,
        'success' => false,
        'message' => 'Критическая ошибка PHP',
        'error' => $e->getMessage(),
        'file' => basename($e->getFile()),
        'line' => $e->getLine(),
        'timestamp' => date('Y-m-d H:i:s')
    ], JSON_UNESCAPED_UNICODE);
}
