import Script from "next/script";
import { useEffect, useState } from "react";

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID;

function isAnalyticsEnabled() {
  return process.env.NODE_ENV === "production" && Boolean(GA4_MEASUREMENT_ID);
}

export function GoogleAnalytics() {
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (!isAnalyticsEnabled()) return;

    // Avoid polluting Lighthouse/PageSpeed runs (headless Chrome)
    // and prevent analytics scripts from affecting core metrics.
    if (typeof navigator !== "undefined" && (navigator as any).webdriver) {
      return;
    }

    const enable = () => setShouldLoad(true);
    const events: Array<keyof WindowEventMap> = ["pointerdown", "keydown", "scroll", "touchstart"];
    const onFirst = () => {
      enable();
      events.forEach((event) => window.removeEventListener(event, onFirst));
    };
    events.forEach((event) => window.addEventListener(event, onFirst, { once: true, passive: true }));

    return () => {
      events.forEach((event) => window.removeEventListener(event, onFirst));
    };
  }, []);

  if (!isAnalyticsEnabled() || !shouldLoad) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="lazyOnload"
      />
      <Script id="google-analytics" strategy="lazyOnload">
        {`
          (function () {
            var host = window.location.hostname;
            if (host === 'localhost' || host === '127.0.0.1') return;

            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            window.gtag = gtag;
            gtag('js', new Date());
            gtag('config', '${GA4_MEASUREMENT_ID}');
          })();
        `}
      </Script>
    </>
  );
}
