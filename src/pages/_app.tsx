import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import { AppShell } from "@/App";
import { ContentPreviewBanner } from "@/components/cms/ContentPreviewBanner";
import { GoogleAnalytics } from "@/components/seo/GoogleAnalytics";
import type { ContentMeta } from "@/lib/cms/types";
import "@/index.css";

type AppPageProps = {
  contentMeta?: ContentMeta;
};

export default function MyApp({ Component, pageProps }: AppProps<AppPageProps>) {
  const router = useRouter();
  const renderWithoutShell = router.pathname === "/404" || router.pathname === "/not-found";
  const previewBanner = <ContentPreviewBanner contentMeta={pageProps.contentMeta} />;

  if (renderWithoutShell) {
    return (
      <>
        <GoogleAnalytics />
        {previewBanner}
        <Component {...pageProps} />
      </>
    );
  }

  return (
    <>
      <GoogleAnalytics />
      <AppShell>
        {previewBanner}
        <Component {...pageProps} />
      </AppShell>
    </>
  );
}
