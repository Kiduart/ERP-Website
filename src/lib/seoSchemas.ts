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

export type InternJobPostingInput = {
  title: string;
  description: string;
  applyUrl: string;
};

export function buildInternJobPostingSchema({
  title,
  description,
  applyUrl,
}: InternJobPostingInput): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "JobPosting",
    title,
    description,
    datePosted: new Date().toISOString().split("T")[0],
    hiringOrganization: {
      "@type": "Organization",
      name: "KIDUART",
      sameAs: SITE_URL,
      logo: LOGO_URL,
    },
    jobLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Noida",
        addressRegion: "Uttar Pradesh",
        addressCountry: "IN",
      },
    },
    employmentType: "INTERN",
    applicantLocationRequirements: {
      "@type": "Country",
      name: "India",
    },
    directApply: true,
    url: applyUrl,
  };
}

export function buildCareersFaqSchema(items: Array<{ q: string; a: string }>): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
