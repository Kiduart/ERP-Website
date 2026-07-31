import type { BlogPost, BlogPostEntry } from "@/data/blogPosts/_helpers";
import top10Erp from "@/data/blogPosts/top-10-school-erp-india-2026";
import top10Sms from "@/data/blogPosts/top-10-school-management-software-india-2026";
import top10Mobile from "@/data/blogPosts/top-10-school-mobile-apps-india-2026";
import top10Elearn from "@/data/blogPosts/top-10-elearning-software-schools-india-2026";
import parentComm from "@/data/blogPosts/parent-teacher-communication";
import studentData from "@/data/blogPosts/student-data-management";
import feeUpi from "@/data/blogPosts/fee-collection-upi-kiduart";
import digitalTx from "@/data/blogPosts/digital-transformation-schools";
import rolePanels from "@/data/blogPosts/role-based-panels-school-erp";
import erpBenefits from "@/data/blogPosts/school-erp-benefits";
import securityChecklist from "@/data/blogPosts/school-software-security-checklist";
import multiCampus from "@/data/blogPosts/multi-campus-school-erp-india";
import aiEdu from "@/data/blogPosts/ai-in-education-2026";
import kiduorbit from "@/data/blogPosts/kiduorbit-predictive-analytics";
import attendanceAlerts from "@/data/blogPosts/attendance-parent-alerts";

export type { BlogPost, BlogPostEntry };
export type BlogListingPost = BlogPost & { slug: string };

const posts: BlogPostEntry[] = [
  top10Erp,
  top10Sms,
  top10Mobile,
  top10Elearn,
  parentComm,
  studentData,
  feeUpi,
  digitalTx,
  rolePanels,
  erpBenefits,
  securityChecklist,
  multiCampus,
  aiEdu,
  kiduorbit,
  attendanceAlerts,
];

/** Parse display dates like "January 8, 2026" for sorting (newest first). */
function dateSortKey(displayDate: string): number {
  const parsed = Date.parse(displayDate);
  return Number.isNaN(parsed) ? 0 : parsed;
}

const blogData: Record<string, BlogPost> = Object.fromEntries(
  posts.map(({ slug, ...rest }) => [slug, rest]),
);

export const BLOG_POST_IMAGES = [
  "/images/blog/blog-top10-erp.png",
  "/images/blog/blog-role-panels.png",
  "/images/blog/blog-fee-upi.png",
  "/images/blog/blog-attendance.png",
  "/images/blog/blog-mobile-parent.png",
  "/images/blog/blog-digitise.png",
  "/images/blog/blog-security.png",
  "/images/blog/blog-multi-campus.png",
  "/images/blog/blog-elearning.png",
  "/images/blog/blog-student-data.png",
  "/images/blog/blog-parent-comm.png",
  "/images/blog/blog-kiduorbit-soon.png",
];

/** Dedicated cover art per slug (AI editorial stills). */
export const BLOG_COVER_BY_SLUG: Record<string, string> = {
  "top-10-school-erp-india-2026": "/images/blog/blog-top10-erp.png",
  "top-10-school-management-software-india-2026":
    "/images/blog/blog-top10-erp.png",
  "top-10-school-mobile-apps-india-2026": "/images/blog/blog-mobile-parent.png",
  "top-10-elearning-software-schools-india-2026":
    "/images/blog/blog-elearning.png",
  "parent-teacher-communication": "/images/blog/blog-parent-comm.png",
  "student-data-management": "/images/blog/blog-student-data.png",
  "fee-collection-upi-kiduart": "/images/blog/blog-fee-upi.png",
  "digital-transformation-schools": "/images/blog/blog-digitise.png",
  "role-based-panels-school-erp": "/images/blog/blog-role-panels.png",
  "school-erp-benefits": "/images/blog/blog-digitise.png",
  "school-software-security-checklist": "/images/blog/blog-security.png",
  "multi-campus-school-erp-india": "/images/blog/blog-multi-campus.png",
  "ai-in-education-2026": "/images/blog/blog-kiduorbit-soon.png",
  "kiduorbit-predictive-analytics": "/images/blog/blog-kiduorbit-soon.png",
  "attendance-parent-alerts": "/images/blog/blog-attendance.png",
};

/** Browse tags per slug  shown on cards, filters, and article chrome. */
export const BLOG_TAGS_BY_SLUG: Record<string, string[]> = {
  "top-10-school-erp-india-2026": [
    "School ERP",
    "Comparison",
    "India 2026",
    "Buyer's Guide",
  ],
  "top-10-school-management-software-india-2026": [
    "SMS",
    "Comparison",
    "Admin",
    "India 2026",
  ],
  "top-10-school-mobile-apps-india-2026": [
    "Mobile",
    "Parent App",
    "Comparison",
    "Portal",
  ],
  "top-10-elearning-software-schools-india-2026": [
    "e-Learning",
    "Classroom",
    "Comparison",
    "LMS",
  ],
  "parent-teacher-communication": ["Parents", "WhatsApp", "SMS", "PTM"],
  "student-data-management": ["Student Records", "Admissions", "Data", "TC"],
  "fee-collection-upi-kiduart": ["Fees", "UPI", "Razorpay", "Finance"],
  "digital-transformation-schools": [
    "Digitisation",
    "Rollout",
    "Playbook",
    "Ops",
  ],
  "role-based-panels-school-erp": ["Role Panels", "Access", "Platform", "RBAC"],
  "school-erp-benefits": ["Productivity", "Admin Time", "ROI", "Operations"],
  "school-software-security-checklist": [
    "Security",
    "Privacy",
    "MFA",
    "Checklist",
  ],
  "multi-campus-school-erp-india": [
    "Multi-campus",
    "Trusts",
    "Groups",
    "Reports",
  ],
  "ai-in-education-2026": ["AI", "EdTech", "Soon", "KIDUORBIT"],
  "kiduorbit-predictive-analytics": [
    "KIDUORBIT",
    "Soon",
    "Analytics",
    "Next Phase",
  ],
  "attendance-parent-alerts": ["Attendance", "Alerts", "Parents", "Same Day"],
};

function enrich(entry: BlogPostEntry): BlogListingPost {
  return {
    ...entry,
    coverImage: entry.coverImage ?? BLOG_COVER_BY_SLUG[entry.slug],
    tags: entry.tags?.length
      ? entry.tags
      : (BLOG_TAGS_BY_SLUG[entry.slug] ?? [entry.category]),
  };
}

export function getBlogListingPosts(): BlogListingPost[] {
  return posts
    .slice()
    .sort((a, b) => dateSortKey(b.date) - dateSortKey(a.date))
    .map(enrich);
}

export function getBlogPost(slug: string): BlogListingPost | null {
  const entry = posts.find((item) => item.slug === slug);
  if (!entry) return null;
  return enrich(entry);
}

export { blogData };
