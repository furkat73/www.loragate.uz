declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(action: string, category: string, label?: string) {
  if (typeof window.gtag === 'function') {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
    })
  }
}

export function useAnalytics() {
  return {
    trackClick: (label: string, category = 'engagement') => trackEvent('click', category, label),
    trackForm: (label: string) => trackEvent('form_submit', 'form', label),
    trackPhone: () => trackEvent('click', 'contact', 'phone'),
    trackEmail: () => trackEvent('click', 'contact', 'email'),
    trackLink: (label: string) => trackEvent('click', 'outbound', label),
    trackFileDownload: (label: string) => trackEvent('file_download', 'download', label),
  }
}

export const SITE = {
  demoUrl: 'http://lgdemo.loragate.uz/',
  contactEndpoint: '/api/send-email.php',
  phones: ['+998916767567', '+998998681973'],
  emails: ['info@loragate.uz', 'support@loragate.uz'],
  social: {
    telegram: 'https://t.me/LoRa_Gate',
    instagram: 'https://www.instagram.com/loragate_gxp_monitoring/',
    facebook: 'https://www.facebook.com/loragateuz',
  },
  pdf: '/images/%D0%9A%D0%BE%D0%BC%D0%BC%D0%B5%D1%80%D1%87%D0%B5%D1%81%D0%BA%D0%BE%D0%B5%20%D0%BF%D1%80%D0%B5%D0%B4%D0%BB%D0%BE%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5%20LORAGATE.pdf',
  mapWidget:
    'https://yandex.ru/map-widget/v1/?text=%D0%A3%D0%B7%D0%B1%D0%B5%D0%BA%D0%B8%D1%81%D1%82%D0%B0%D0%BD%2C%20%D0%B3.%20%D0%A2%D0%B0%D1%88%D0%BA%D0%B5%D0%BD%D1%82%20%D0%9C%D0%B8%D1%80%D0%B7%D0%BE-%D0%A3%D0%BB%D1%83%D0%B3%D0%B1%D0%B5%D0%BA%D1%81%D0%BA%D0%B8%D0%B9%20%D1%80-%D0%BD.%20%D1%83%D0%BB.%20%D0%AF%D0%BB%D0%B0%D0%BD%D0%B3%D0%B0%D1%87%20-15&z=16',
} as const
