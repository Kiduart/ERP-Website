import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppShell } from "@/App";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import "@/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const renderWithoutShell = router.pathname === "/404" || router.pathname === "/not-found";

  if (renderWithoutShell) {
    return (
      <>
        <GoogleAnalytics />
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <GoogleAnalytics />
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
