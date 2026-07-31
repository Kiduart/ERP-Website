/**
 * High-intent school ERP keywords used by top Indian competitors
 * (EduNext, EduCloud, Vidyalaya, RexoCampus, Entab-class pages) and
 * buyer search patterns in India (2025–2026).
 *
 * Ranking note: Google largely ignores meta keywords. These strings are for
 * titles, descriptions, H1/H2 copy, and internal linking  not stuffing.
 */

export const CORE_SCHOOL_ERP_KEYWORDS = [
  "school ERP software",
  "school ERP",
  "school management software",
  "school management system",
  "best school ERP in India",
  "cloud-based school ERP",
  "school automation software",
  "education ERP system",
] as const;

export const FEATURE_INTENT_KEYWORDS = [
  "online fee management system",
  "school fee management software",
  "school attendance tracking software",
  "school report card generator",
  "school admission CRM",
  "parent portal for schools",
  "school mobile app for parents",
  "WhatsApp school parent communication",
  "biometric attendance school software",
  "school bus GPS tracking",
  "multi campus school software",
  "CBSE school ERP",
] as const;

export const BUYER_INTENT_KEYWORDS = [
  "best school ERP software in India",
  "free school ERP demo",
  "school ERP pricing India",
  "paperless school management",
  "school ERP with UPI fee collection",
  "NEP 2020 school management software",
] as const;

/** Comma-joined meta keywords for homepage / primary marketing pages */
export const HOME_META_KEYWORDS = [
  ...CORE_SCHOOL_ERP_KEYWORDS,
  "online fee management system",
  "school attendance tracking software",
  "parent portal for schools",
  "school admission software",
  "school ERP India",
  "KIDUART",
].join(", ");

export const FEATURES_META_KEYWORDS = [
  "school ERP features",
  "school management software modules",
  "school ERP India",
  "school attendance system",
  "school fee management software",
  "school report card software",
  "admission management software for schools",
  "school transport management software",
  "hostel management software for schools",
  "library management school ERP",
].join(", ");

export const PRICING_META_KEYWORDS = [
  "school ERP pricing India",
  "school management software cost",
  "per student school ERP pricing",
  "affordable school ERP",
  "KIDUART pricing",
  "best school ERP software in India",
].join(", ");

export const PLATFORM_META_KEYWORDS = [
  "school ERP platform",
  "role based school management software",
  "teacher dashboard school ERP",
  "parent portal school software",
  "principal dashboard school ERP",
  "finance dashboard school fees",
].join(", ");

export const DEMO_META_KEYWORDS = [
  "free school ERP demo",
  "school ERP demo India",
  "book school management software demo",
  "KIDUART demo",
  "school fee software demo",
  "best school ERP software in India demo",
].join(", ");
