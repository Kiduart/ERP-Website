import { SITE_ORIGIN } from "@/components/seo/PageSeoHead";
import type { PageSeoHeadProps } from "@/components/seo/PageSeoHead";

export const pageSeo = {
  home: {
    title: "School ERP Software for Indian Schools | KIDUART",
    description:
      "Manage admissions, fees, attendance, exams, and parent updates in one school ERP. Built for Indian schools. Book a free KIDUART demo.",
    path: "/",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
  },
  pricing: {
    title: "School ERP Pricing Plans for Indian Schools | KIDUART",
    description:
      "Pay per active student with teachers, staff, and parent access included. Compare KIDUART school ERP plans for Indian schools with transparent pricing.",
    path: "/pricing",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
  },
  features: {
    title: "School ERP Features & Modules for Indian Schools | KIDUART",
    description:
      "Student records, fees, attendance, exams, parent portal, and staff tools in one school ERP. Explore KIDUART modules built for Indian school teams.",
    path: "/features",
    ogImage: `${SITE_ORIGIN}/images/banner/features-hero.jpg`,
    keywords:
      "school ERP features, school management software modules, school ERP India, school attendance system, school fee management software",
  },
  platform: {
    title: "School ERP Platform with Role Dashboards | KIDUART",
    description:
      "Dashboards for admins, teachers, finance, HR, students, parents, and directors. One KIDUART platform tailored to every role in your school.",
    path: "/platform",
    ogImage: `${SITE_ORIGIN}/images/banner/platform-hero.jpg`,
  },
  blog: {
    title: "School ERP Blog: EdTech & Operations Insights | KIDUART",
    description:
      "Articles on school ERP, EdTech, admissions, fees, and daily operations for Indian school administrators. Read practical insights from KIDUART.",
    path: "/blog",
    ogImage: `${SITE_ORIGIN}/images/banner/blog-hero.avif`,
  },
  contact: {
    title: "Contact KIDUART | School ERP Sales & Support in India",
    description:
      "Book a demo, ask product questions, or request support. KIDUART is based in Noida, Uttar Pradesh and provides guided support for school teams.",
    path: "/contact",
    ogImage: `${SITE_ORIGIN}/images/banner/contact-post-1.jpg`,
  },
  demo: {
    title: "Book a Free KIDUART School ERP Demo for Your School",
    description:
      "Book a free live demo. See admissions, fees, attendance, and reporting workflows in a real school context. No commitment required.",
    path: "/demo",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
  },
  security: {
    title: "School Data Security & Privacy for ERP | KIDUART",
    description:
      "KIDUART uses encryption controls, role-based access, audit logging, and school-level data isolation to protect student, fee, and staff data.",
    path: "/security",
    ogImage: `${SITE_ORIGIN}/images/banner/security-hero.jpg`,
  },
  kiduorbit: {
    title: "KIDUORBIT for School ERP | Early support signals",
    description:
      "KIDUORBIT surfaces attendance and grade patterns for staff review. The analytics layer inside KIDUART — built for counsellors and teachers, not surveillance.",
    path: "/kiduorbit",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
  },
  help: {
    title: "KIDUART Help Center | School ERP Guides & Support",
    description:
      "Search guides for setup, students, fees, attendance, and integrations. Find answers or contact KIDUART support from Noida, India.",
    path: "/help",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
  },
  apiDocs: {
    title: "KIDUART API Documentation | School ERP Integrations",
    description:
      "REST endpoints and webhooks for connecting your LMS, payments, and internal systems to KIDUART. Bearer authentication and sandbox testing.",
    path: "/integrations/api-docs",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
  },
} as const;

export function featurePageSeo(slug: string, title: string, description: string): PageSeoHeadProps {
  const trimmed = description.length > 155 ? `${description.slice(0, 152)}...` : description;
  return {
    title: `${title} | KIDUART School ERP`,
    description: trimmed,
    path: `/features/${slug}`,
    ogImage: `${SITE_ORIGIN}/images/banner/features-hero.jpg`,
  };
}

export function integrationPageSeo(slug: string, name: string, description: string): PageSeoHeadProps {
  const trimmed = description.length > 155 ? `${description.slice(0, 152)}...` : description;
  return {
    title: `${name} Integration for KIDUART School ERP`,
    description: trimmed,
    path: `/integrations/${slug}`,
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
  };
}

export function blogPostPageSeo(slug: string, title: string, excerpt: string): PageSeoHeadProps {
  const trimmed = excerpt.length > 155 ? `${excerpt.slice(0, 152)}...` : excerpt;
  return {
    title: `${title} | KIDUART Blog`,
    description: trimmed,
    path: `/blog/${slug}`,
    ogImage: `${SITE_ORIGIN}/images/banner/blog-hero.avif`,
    ogType: "article",
  };
}
