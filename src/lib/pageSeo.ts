import { SITE_ORIGIN } from "@/components/seo/PageSeoHead";
import type { PageSeoHeadProps } from "@/components/seo/PageSeoHead";
import {
  DEMO_META_KEYWORDS,
  FEATURES_META_KEYWORDS,
  HOME_META_KEYWORDS,
  PLATFORM_META_KEYWORDS,
  PRICING_META_KEYWORDS,
} from "@/data/seoKeywords";

export const pageSeo = {
  home: {
    title:
      "School ERP Software & School Management System for Indian Schools | KIDUART",
    description:
      "Cloud-based school ERP software for Indian schools: admissions, online fee management, attendance tracking, exams, report cards, and parent portal  one school management system. Book a free demo.",
    path: "/",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    keywords: HOME_META_KEYWORDS,
  },
  pricing: {
    title: "School ERP Pricing India | Transparent Per-Student Plans | KIDUART",
    description:
      "School ERP pricing for Indian schools with per-active-student billing. Teachers, staff, and parent portal access included. Compare KIDUART school management software plans.",
    path: "/pricing",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    keywords: PRICING_META_KEYWORDS,
  },
  features: {
    title:
      "School ERP Features & Modules | School Management Software India | KIDUART",
    description:
      "Explore school ERP features: student information system, fee management, attendance tracking, exams, report cards, parent communication, transport, library, and HR  built for Indian schools.",
    path: "/features",
    ogImage: `${SITE_ORIGIN}/images/banner/features-hero.jpg`,
    keywords: FEATURES_META_KEYWORDS,
  },
  platform: {
    title:
      "School ERP Platform with Role Dashboards | School Management Software | KIDUART",
    description:
      "Role-based school ERP platform for admins, teachers, finance, HR, students, parents, and directors. One school management system tailored to every role.",
    path: "/platform",
    ogImage: `${SITE_ORIGIN}/images/banner/platform-hero.jpg`,
    keywords: PLATFORM_META_KEYWORDS,
  },
  blog: {
    title: "School ERP Blog: Guides & Comparisons for Indian Schools | KIDUART",
    description:
      "School ERP and school management software guides for India  fee collection with UPI, attendance alerts, parent communication, security checklists, and KIDUORBIT AI notes for school admins.",
    path: "/blog",
    ogImage: `${SITE_ORIGIN}/images/banner/blog-hero.avif`,
    keywords:
      "school ERP blog, school management software guide India, best school ERP software in India, online fee management tips, parent teacher communication school",
  },
  contact: {
    title: "Contact KIDUART | School ERP Sales & Support in Noida, India",
    description:
      "Contact KIDUART in Noida for school ERP demos, pricing, and support. Talk to sales about admissions, fees, attendance tracking, and parent communication walkthroughs.",
    path: "/contact",
    ogImage: `${SITE_ORIGIN}/images/banner/help-center-hero-1.jpg`,
    keywords:
      "contact KIDUART, school ERP demo India, school management software support Noida, KIDUART sales, school ERP pricing enquiry, best school ERP in India contact",
  },
  about: {
    title:
      "About KIDUART | School ERP Company Building School Management Software",
    description:
      "KIDUART is a Noida-based school ERP company building role-based school management software for Indian schools  fees, attendance, academics, parent updates, with an honest KIDUORBIT AI roadmap.",
    path: "/about",
    ogImage: `${SITE_ORIGIN}/about.jpg`,
    keywords:
      "about KIDUART, school ERP company India, school management software Noida, KIDUART founding team, Indian school ERP, cloud-based school ERP company",
  },
  demo: {
    title:
      "Free School ERP Demo India | Book KIDUART School Management Walkthrough",
    description:
      "Book a free live school ERP demo for Indian schools. See admissions CRM, online fee management, attendance tracking, exams, and parent portal on your school structure. No card required.",
    path: "/demo",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    keywords: DEMO_META_KEYWORDS,
  },
  login: {
    title: "KIDUART Login | School Admin, Teacher, Parent & Student Portals",
    description:
      "Sign in to your KIDUART school ERP portal. Choose your role  school admin, teacher, finance, HR, parent, student  and continue to your school management dashboard.",
    path: "/login",
    ogImage: `${SITE_ORIGIN}/images/banner/platform-hero.jpg`,
    keywords:
      "KIDUART login, school ERP login India, parent portal login, student portal login, school admin login, teacher login KIDUART, school management system login",
  },
  security: {
    title: "School Data Security & Privacy for School ERP | KIDUART",
    description:
      "School ERP security for Indian schools: encryption controls, role-based access, audit logging, and school-level data isolation to protect student, fee, and staff data.",
    path: "/security",
    ogImage: `${SITE_ORIGIN}/images/banner/security-hero.jpg`,
    keywords:
      "school ERP security, school data privacy India, student data protection ERP, role based access school software, KIDUART security",
  },
  kiduorbit: {
    title: "KIDUORBIT AI | Next-Phase School Analytics (Coming Soon) | KIDUART",
    description:
      "KIDUORBIT is KIDUART's next-phase AI layer for Indian schools  predictive review lists on attendance, fees, and academics for staff follow-up. Not launched yet; preview the roadmap.",
    path: "/kiduorbit",
    ogImage: `${SITE_ORIGIN}/images/blog/blog-kiduorbit-soon.png`,
    keywords:
      "KIDUORBIT AI, school ERP AI India, predictive analytics for schools, attendance risk forecast, fee default scoring, AI school management software",
  },
  help: {
    title:
      "KIDUART Help Center | School ERP Guides & School Management Support",
    description:
      "School ERP help guides for setup, students, fees, attendance tracking, and integrations. Find answers or contact KIDUART support from Noida, India.",
    path: "/help",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    keywords:
      "school ERP help, school management software support, KIDUART help center, fee setup guide school ERP, attendance tracking guide",
  },
  apiDocs: {
    title: "KIDUART API Documentation | School ERP Integrations & REST API",
    description:
      "School ERP API docs: REST endpoints and webhooks for LMS, payments, and internal systems. Bearer authentication and sandbox testing for school management integrations.",
    path: "/integrations/api-docs",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    keywords:
      "school ERP API, school management REST API, student data API, attendance API integration, school API key scopes",
  },
  careers: {
    title: "KIDUART Internships & Careers | Python, UI/UX & BD Jobs in Noida",
    description:
      "Apply for founding intern roles at KIDUART EdTech in Noida: Python intern, UI/UX design intern, and business development intern. Freshers welcome. Official application form on this page.",
    path: "/careers",
    ogImage: `${SITE_ORIGIN}/images/careers/founding-interns-hiring.png`,
    keywords:
      "KIDUART careers, KIDUART internship, EdTech jobs Noida, Python intern Noida, UI UX internship India, business development intern, school ERP jobs, fresher internship EdTech, startup internship Noida",
  },
  faq: {
    title:
      "School ERP FAQ | Modules, Pricing, Security & Integrations | KIDUART",
    description:
      "FAQ on school ERP software and school management system: modules, per-student pricing, live integrations, student data security, and what KIDUART has not built yet.",
    path: "/faq",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    keywords:
      "school ERP FAQ, school management software questions, school ERP pricing FAQ India, school data security FAQ, KIDUART FAQ",
  },
  stories: {
    title:
      "School ERP Customer Stories | School Management Scenarios | KIDUART",
    description:
      "How Indian schools plan fees, attendance tracking, and parent communication on school ERP software. Illustrative KIDUART scenarios; verified case studies publish as schools go live.",
    path: "/stories",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    keywords:
      "school ERP customer stories, school management software case study India, KIDUART school scenarios, multi branch school ERP",
  },
  workplace: {
    title: "Workplace Policy | Hybrid Work at KIDUART Noida",
    description:
      "KIDUART hybrid workplace policy: Noida base, flexible on-site time, remote-friendly roles where possible, and clear expectations for candidates and teammates.",
    path: "/workplace-policy",
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    keywords:
      "KIDUART workplace policy, hybrid work Noida, remote friendly EdTech jobs, KIDUART careers hybrid",
  },
  founding50: {
    title:
      "Founding 50 Schools | Zero Cost School ERP for Current Session | KIDUART",
    description:
      "Join KIDUART Founding 50 Schools: premium school ERP software at zero software cost for the current academic session in India. Book a free demo — limited seats, clear T&Cs.",
    path: "/founding-50",
    ogImage: `${SITE_ORIGIN}/images/campaign/founding-50-poster.png`,
    keywords:
      "Founding 50 Schools, zero cost school ERP, free school ERP India current session, KIDUART founding offer, school management software free trial founding, school ERP demo India",
  },
} as const;

export function featurePageSeo(
  slug: string,
  title: string,
  description: string,
): PageSeoHeadProps {
  const trimmed =
    description.length > 155 ? `${description.slice(0, 152)}...` : description;
  return {
    title: `${title} | School ERP Features | KIDUART`,
    description: trimmed,
    path: `/features/${slug}`,
    ogImage: `${SITE_ORIGIN}/images/banner/features-hero.jpg`,
    keywords: `${title.toLowerCase()}, school ERP features, school management software, KIDUART`,
  };
}

function clampDescription(description: string): string {
  return description.length > 155
    ? `${description.slice(0, 152)}...`
    : description;
}

/** Module-area page, e.g. /features/finance-and-fee-management */
export function areaPageSeo(area: {
  slug: string;
  label: string;
  headline: string;
  featureCount: number;
  moduleCount: number;
  summary: string;
}): PageSeoHeadProps {
  const labelLower = area.label.toLowerCase();
  return {
    title: `${area.label} Module | School ERP Software India | KIDUART`,
    description: clampDescription(area.summary),
    path: `/features/${area.slug}`,
    ogImage: `${SITE_ORIGIN}/images/banner/features-hero.jpg`,
    keywords: `${labelLower} school ERP, ${labelLower} module, school management software ${labelLower}, school ERP India, KIDUART ${labelLower}`,
  };
}

/** Single module page, e.g. /features/academic/examination */
export function moduleFeaturePageSeo(params: {
  areaSlug: string;
  areaLabel: string;
  moduleSlug: string;
  moduleName: string;
  featureCount: number;
  subModuleCount: number;
}): PageSeoHeadProps {
  const nameLower = params.moduleName.toLowerCase();
  return {
    title: `${params.moduleName} Software for Schools | School ERP | KIDUART`,
    description: clampDescription(
      `${params.moduleName} in KIDUART school ERP is part of ${params.areaLabel}  the workflows Indian schools ask about most, with a full capability sheet on request.`,
    ),
    path: `/features/${params.areaSlug}/${params.moduleSlug}`,
    ogImage: `${SITE_ORIGIN}/images/banner/features-hero.jpg`,
    keywords: `${nameLower} school ERP, ${nameLower} school management software, ${params.areaLabel.toLowerCase()} school software, KIDUART ${nameLower}`,
  };
}

export function integrationPageSeo(
  slug: string,
  name: string,
  description: string,
  keywords?: string,
): PageSeoHeadProps {
  const trimmed =
    description.length > 155 ? `${description.slice(0, 152)}...` : description;
  return {
    title: `${name} Integration for School ERP | KIDUART`,
    description: trimmed,
    path: `/integrations/${slug}`,
    ogImage: `${SITE_ORIGIN}/images/banner/home-hero.jpeg`,
    ...(keywords ? { keywords } : {}),
  };
}

export function blogPostPageSeo(
  slug: string,
  title: string,
  excerpt: string,
): PageSeoHeadProps {
  const trimmed =
    excerpt.length > 155 ? `${excerpt.slice(0, 152)}...` : excerpt;
  return {
    title: `${title} | School ERP Blog | KIDUART`,
    description: trimmed,
    path: `/blog/${slug}`,
    ogImage: `${SITE_ORIGIN}/images/banner/blog-hero.avif`,
    ogType: "article",
    keywords: `school ERP, school management software India, ${title.toLowerCase()}, KIDUART blog`,
  };
}
