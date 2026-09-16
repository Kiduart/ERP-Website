const BLOG_SLUGS = [
  "ai-in-education-2026",
  "school-erp-benefits",
  "digital-transformation-schools",
  "parent-teacher-communication",
  "student-data-management",
  "kiduorbit-predictive-analytics",
  "top-10-school-erp-india-2026",
  "top-10-school-management-software-india-2026",
  "top-10-school-mobile-apps-india-2026",
  "top-10-elearning-software-schools-india-2026",
  "multi-campus-school-erp-india",
  "attendance-parent-alerts",
  "fee-collection-upi-kiduart",
  "role-based-panels-school-erp",
  "school-software-security-checklist",
];

function priorityFor(path) {
  if (path === "/") return 1;
  if (
    path === "/demo" ||
    path === "/pricing" ||
    path === "/features" ||
    path === "/founding-50" ||
    path === "/contact" ||
    path === "/platform" ||
    path === "/blog/multi-campus-school-erp-india" ||
    path === "/blog/top-10-school-management-software-india-2026" ||
    path === "/integrations/whatsapp-business" ||
    path === "/features/hr-and-staff-management/payroll"
  ) {
    return 0.9;
  }
  if (path.startsWith("/blog/")) return 0.8;
  if (path.startsWith("/features/") || path.startsWith("/solutions/")) return 0.7;
  return 0.6;
}

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: "https://www.kiduart.com",
  generateRobotsTxt: true,
  // One urlset at /sitemap.xml. An index that only points at sitemap-0.xml
  // is what Search Console was reading, and it looks broken in a browser.
  generateIndexSitemap: false,
  exclude: ["/404", "/not-found", "/login", "/home"],
  additionalPaths: async () =>
    BLOG_SLUGS.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: "weekly",
      priority: priorityFor(`/blog/${slug}`),
      lastmod: new Date().toISOString(),
    })),
  transform: async (_config, path) => ({
    loc: path,
    changefreq: path === "/" || path.startsWith("/blog") ? "weekly" : "monthly",
    priority: priorityFor(path),
    lastmod: new Date().toISOString(),
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/login"],
      },
    ],
  },
};
