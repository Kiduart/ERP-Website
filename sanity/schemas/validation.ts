/** Shared Sanity field validation helpers for KIDUART marketing content. */

type Rule = {
  required: () => Rule;
  min: (n: number) => Rule;
  max: (n: number) => Rule;
  length: (n: number) => Rule;
  minLength: (n: number) => Rule;
  maxLength: (n: number) => Rule;
  email: () => Rule;
  uri: (options?: { scheme?: string[] }) => Rule;
  regex: (pattern: RegExp, message: string) => Rule;
  custom: (fn: (value: unknown) => true | string) => Rule;
};

export const limits = {
  title: 120,
  slug: 96,
  author: 80,
  category: 60,
  readTime: 24,
  excerpt: 320,
  displayDate: 40,
  schoolName: 100,
  initial: 1,
  location: 80,
  schoolType: 60,
  headline: 160,
  summary: 500,
  impact: 120,
  gradient: 80,
  kicker: 60,
  heroHeading: 200,
  heroBody: 600,
  imageAlt: 160,
  cardTitle: 80,
  cardDesc: 280,
  sectionHeading: 100,
  sectionBody: 800,
  ctaLabel: 60,
  ctaHref: 200,
  stepTitle: 60,
  stepDesc: 120,
  roleCategory: 60,
  markdownMin: 120,
} as const;

export const requiredString = (Rule: Rule, max: number) => Rule.required().max(max);

export const requiredText = (Rule: Rule, min: number, max: number) =>
  Rule.required().min(min).max(max);

export const requiredSlug = (Rule: Rule) => Rule.required();

export const requiredArray = (Rule: Rule, min: number, max: number) =>
  Rule.required().min(min).max(max);

export const optionalArray = (Rule: Rule, max: number) => Rule.max(max);

export const requiredUrl = (Rule: Rule) =>
  Rule.required().uri({ scheme: ["http", "https", "mailto"] });

export const requiredIcon = (Rule: Rule) => Rule.required();

export const requiredNumber = (Rule: Rule) => Rule.required().min(0).max(999);
