import type { JsonLd } from "@/components/seo/SchemaMarkup";

const SITE_URL = "https://www.kiduart.com";
const LOGO_URL = `${SITE_URL}/logo.png`;

export const organizationSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KIDUART",
  url: SITE_URL,
  logo: LOGO_URL,
  description: "School ERP software for Indian schools — admissions, fees, attendance, and parent communication",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    availableLanguage: ["English", "Hindi"],
  },
};

export const softwareApplicationSchema: JsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "KIDUART School ERP",
  applicationCategory: "EducationalApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
  },
};

export type FaqItem = { q: string; a: string };
export type FaqData = Record<string, FaqItem[]>;

export function buildFaqPageSchema(faqData: FaqData): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Object.values(faqData)
      .flat()
      .map((item) => ({
        "@type": "Question",
        name: item.q,
        acceptedAnswer: {
          "@type": "Answer",
          text: item.a,
        },
      })),
  };
}

const kiduartPublisher = {
  "@type": "Organization",
  name: "KIDUART",
  logo: {
    "@type": "ImageObject",
    url: LOGO_URL,
  },
};

function formatSchemaDate(dateLabel: string): string {
  const parsed = new Date(dateLabel);
  if (!Number.isNaN(parsed.getTime())) {
    return parsed.toISOString().split("T")[0]!;
  }
  return dateLabel;
}

export type ArticleSchemaInput = {
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
};

export function buildArticleSchema({
  slug,
  title,
  excerpt,
  author,
  date,
}: ArticleSchemaInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: excerpt,
    author: {
      "@type": "Organization",
      name: author,
    },
    datePublished: formatSchemaDate(date),
    publisher: kiduartPublisher,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/blog/${slug}`,
    },
  };
}
