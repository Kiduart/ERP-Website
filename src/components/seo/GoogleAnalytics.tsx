import Script from "next/script";

const GA4_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA4_ID;

function isAnalyticsEnabled() {
  return process.env.NODE_ENV === "production" && Boolean(GA4_MEASUREMENT_ID);
}

export function GoogleAnalytics() {
  if (!isAnalyticsEnabled()) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
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
