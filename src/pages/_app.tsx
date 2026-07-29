import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppShell } from "@/App";
import { ContentPreviewBanner } from "@/components/cms/ContentPreviewBanner";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import { dmSerifDisplay, inter } from "@/lib/fonts";
import type { ContentMeta } from "@/lib/cms/types";
import "@/index.css";

type AppPageProps = {
  contentMeta?: ContentMeta;
};

export default function MyApp({ Component, pageProps }: AppProps<AppPageProps>) {
  const router = useRouter();
  const renderWithoutShell = router.pathname === "/404" || router.pathname === "/not-found";
  const previewBanner = <ContentPreviewBanner contentMeta={pageProps.contentMeta} />;
  const fontClassName = `${inter.variable} ${dmSerifDisplay.variable}`;

  if (renderWithoutShell) {
    return (
      <div className={fontClassName}>
        <GoogleAnalytics />
        {previewBanner}
        <Component {...pageProps} />
      </div>
    );
  }

  return (
    <div className={fontClassName}>
      <GoogleAnalytics />
      <AppShell>
        {previewBanner}
        <Component {...pageProps} />
      </AppShell>
    </div>
  );
}
