import Head from "next/head";

export const SITE_ORIGIN = "https://www.kiduart.com";
export const DEFAULT_OG_IMAGE = `${SITE_ORIGIN}/images/banner/home-hero.jpeg`;

export type PageSeoHeadProps = {
  title: string;
  description: string;
  /** Path only, e.g. `/pricing` or `/` for homepage */
  path: string;
  ogImage?: string;
  ogType?: "website" | "article";
  keywords?: string;
};

function canonicalUrl(path: string): string {
  if (path === "/" || path === "") {
    return `${SITE_ORIGIN}/`;
  }
  return `${SITE_ORIGIN}${path.startsWith("/") ? path : `/${path}`}`;
}

export function PageSeoHead({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = "website",
  keywords,
}: PageSeoHeadProps) {
  const canonical = canonicalUrl(path);

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywords ? <meta name="keywords" content={keywords} /> : null}
      <link rel="canonical" href={canonical} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="KIDUART" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {/* Google Search Console verification: googlebf20b8df51f2ae53 (global meta in src/pages/_document.tsx) */}
    </Head>
  );
}
