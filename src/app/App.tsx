import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { BackToTop } from './components/BackToTop'
import { QuizModal } from './components/QuizModal'
import { Router, useRoute } from '@/lib/router'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { EquipmentPage } from './pages/EquipmentPage'
import { ServicesPage } from './pages/ServicesPage'
import { ValidationPage } from './pages/ValidationPage'
import { PlatformPage } from './pages/PlatformPage'
import { CasesPage } from './pages/CasesPage'
import { CertificationsPage } from './pages/CertificationsPage'
import { QuizPage } from './pages/QuizPage'
import { ContactsPage } from './pages/ContactsPage'
import { PharmaPage } from './pages/PharmaPage'
import { PharmacyPage } from './pages/PharmacyPage'
import { FoodPage } from './pages/FoodPage'
import { LogisticsPage } from './pages/LogisticsPage'
import { NotFoundPage } from './pages/NotFoundPage'

const TITLES: Record<string, string> = {
  '/': 'Система мониторинга температуры и влажности для GMP / GDP / FDA — Lora Gate',
  '/equipment': 'Оборудование: датчики и шлюзы LoRaWAN — Lora Gate',
  '/services': 'Услуги: внедрение и поддержка — Lora Gate',
  '/validation': 'Валидация IQ / OQ / PQ — Lora Gate',
  '/platform': 'Облачная платформа мониторинга — Lora Gate',
  '/cases': 'Кейсы внедрений — Lora Gate',
  '/certifications': 'Сертификаты и соответствие — Lora Gate',
  '/quiz': 'Бесплатный аудит GxP: экспресс-тест — Lora Gate',
  '/contacts': 'Контакты — Lora Gate',
  '/about': 'О компании — Lora Gate',
  '/pharma': 'Мониторинг для фармацевтических складов — Lora Gate',
  '/pharmacy': 'Мониторинг для аптек — Lora Gate',
  '/food': 'Мониторинг для пищевых производств — Lora Gate',
  '/logistics': 'Контроль холодовой цепи в логистике — Lora Gate',
}

function Shell() {
  const { path } = useRoute()
  const [quizOpen, setQuizOpen] = useState(false)
  const openQuiz = () => setQuizOpen(true)

  useEffect(() => {
    document.title = TITLES[path] || 'Страница не найдена — Lora Gate'
  }, [path])

  return (
    <div className="min-h-screen">
      <Header onOpenQuiz={openQuiz} />
      <main>
        {path === '/' && <HomePage onOpenQuiz={openQuiz} />}
        {path === '/equipment' && <EquipmentPage />}
        {path === '/services' && <ServicesPage />}
        {path === '/validation' && <ValidationPage />}
        {path === '/platform' && <PlatformPage />}
        {path === '/cases' && <CasesPage />}
        {path === '/certifications' && <CertificationsPage />}
        {path === '/quiz' && <QuizPage />}
        {path === '/contacts' && <ContactsPage />}
        {path === '/about' && <AboutPage />}
        {path === '/pharma' && <PharmaPage />}
        {path === '/pharmacy' && <PharmacyPage />}
        {path === '/food' && <FoodPage />}
        {path === '/logistics' && <LogisticsPage />}
        {!TITLES[path] && <NotFoundPage />}
      </main>
      <Footer />
      <BackToTop />
      <QuizModal open={quizOpen} onClose={() => setQuizOpen(false)} />
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <Shell />
    </Router>
  )
}
