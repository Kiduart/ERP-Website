import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppShell } from "@/App";
import "@/index.css";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const renderWithoutShell = router.pathname === "/404" || router.pathname === "/not-found";

  if (renderWithoutShell) {
    return <Component {...pageProps} />;
  }

  return (
    <AppShell>
      <Component {...pageProps} />
    </AppShell>
  );
}
