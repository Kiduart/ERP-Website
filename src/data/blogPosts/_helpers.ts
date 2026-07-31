export type BlogPost = {
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  relatedSlugs: string[];
  color: string;
  badgeColor: string;
  /** SEO / browse tags shown on cards and article */
  tags?: string[];
  /** Optional dedicated cover under /images/blog/ */
  coverImage?: string;
  /** True when the topic is roadmap / next-phase (e.g. KIDUORBIT) */
  upcoming?: boolean;
};

/** Shared helpers for long-form SEO posts */
export const AUTHOR_EDITORIAL = "KIDUART Editorial Team";
export const AUTHOR_PRODUCT = "KIDUART Product Team";

export const STYLE = {
  teal: { color: "from-brand-teal/20 to-brand-navy/20", badgeColor: "bg-brand-teal text-white" },
  orange: { color: "from-brand-orange/20 to-brand-yellow/20", badgeColor: "bg-brand-orange text-white" },
  navy: { color: "from-brand-navy/20 to-brand-teal/20", badgeColor: "bg-brand-navy text-white" },
  yellow: { color: "from-brand-yellow/30 to-brand-orange/20", badgeColor: "bg-brand-yellow text-brand-navy" },
} as const;

export type BlogPostEntry = BlogPost & { slug: string };

export function post(slug: string, data: BlogPost): BlogPostEntry {
  return { slug, ...data };
}
