// src/lib/gtag.ts
declare global {
    interface Window {
      dataLayer: any[];
      gtag: (...args: any[]) => void;
    }
  }
  
  export const GA_ID = 'G-QPTGFSY56P';
  
  // Evita enviar en dev o si gtag no está disponible
  const canSend = () =>
    typeof window !== 'undefined' &&
    'gtag' in window &&
    import.meta.env.PROD;
  
  export function pageView(path: string) {
    if (!canSend()) return;
    window.gtag('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
  
  export function gaEvent(action: string, params?: Record<string, any>) {
    if (!canSend()) return;
    window.gtag('event', action, params || {});
  }
  