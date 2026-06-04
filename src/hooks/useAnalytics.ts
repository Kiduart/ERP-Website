declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

export function useAnalytics() {
  const trackEvent = (
    category: string,
    action: string,
    label?: string
  ) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', action, {
        event_category: category,
        event_label: label ?? '',
      });
    }
  };

  return { trackEvent };
}

