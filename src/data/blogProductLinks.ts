/** Pages Google already ranks should point at the product URLs it has not crawled yet. */
export const BLOG_PRODUCT_LINKS: Record<string, { href: string; label: string }[]> = {
  "attendance-parent-alerts": [
    { href: "/features/academic/attendance", label: "Attendance" },
    { href: "/features/communication", label: "Parent communication" },
  ],
  "fee-collection-upi-kiduart": [
    { href: "/features/finance-and-fee-management", label: "Fee management" },
    { href: "/integrations/razorpay", label: "Razorpay" },
  ],
  "student-data-management": [
    { href: "/features/student-management", label: "Student management" },
    { href: "/features/admission", label: "Admissions" },
  ],
  "parent-teacher-communication": [
    { href: "/features/communication", label: "Communication" },
    { href: "/features/academic/parent-teacher-meetings", label: "Parent-teacher meetings" },
  ],
  "multi-campus-school-erp-india": [
    { href: "/features/organization-management", label: "Organisation management" },
    { href: "/integrations/whatsapp-business", label: "WhatsApp integration" },
    { href: "/demo", label: "Free demo" },
  ],
  "role-based-panels-school-erp": [
    { href: "/platform", label: "Role panels" },
    { href: "/features/security-and-authentication", label: "Access control" },
  ],
  "school-software-security-checklist": [
    { href: "/security", label: "Security" },
    { href: "/features/security-and-authentication", label: "Authentication" },
  ],
  "kiduorbit-predictive-analytics": [
    { href: "/kiduorbit", label: "KIDUORBIT" },
    { href: "/features/reports-and-analytics", label: "Reports" },
  ],
  "top-10-school-erp-india-2026": [
    { href: "/features", label: "Feature map" },
    { href: "/pricing", label: "Pricing" },
  ],
  "top-10-school-management-software-india-2026": [
    { href: "/blog/multi-campus-school-erp-india", label: "Multi-campus school ERP" },
    { href: "/integrations/whatsapp-business", label: "WhatsApp integration" },
    { href: "/demo", label: "Free demo" },
  ],
  "top-10-school-mobile-apps-india-2026": [
    { href: "/platform/parent", label: "Parent panel" },
    { href: "/features/communication", label: "Communication" },
  ],
  "top-10-elearning-software-schools-india-2026": [
    { href: "/integrations", label: "Integrations" },
    { href: "/features/academic", label: "Academics" },
  ],
};

const DEFAULT_LINKS = [
  { href: "/features", label: "Feature map" },
  { href: "/pricing", label: "Pricing" },
];

export function productLinksFor(slug: string) {
  return BLOG_PRODUCT_LINKS[slug] ?? DEFAULT_LINKS;
}
