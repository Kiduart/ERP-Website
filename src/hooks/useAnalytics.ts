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
    if (typeof window !== "undefined" && typeof window.gtag === "function") {
      window.gtag("event", action, {
        event_category: category,
        event_label: label ?? "",
      });
    }
  };

  const trackDemoRequest = () => {
    if (typeof window === "undefined") return;
    window.dataLayer = window.dataLayer || [];
    if (typeof window.gtag !== "function") {
      window.gtag = function gtag() {
        window.dataLayer.push(arguments);
      } as Window["gtag"];
    }
    window.gtag("event", "generate_lead", {
      event_category: "demo",
      event_label: "demo_form_success",
      form_id: "demo",
      method: "demo_form",
    });
  };

  return { trackEvent, trackDemoRequest };
}
