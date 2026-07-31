const BLOG_SLUGS = [
  "ai-in-education-2026",
  "school-erp-benefits",
  "digital-transformation-schools",
  "parent-teacher-communication",
  "student-data-management",
  "kiduorbit-predictive-analytics",
];

/** @type {import('next-sitemap').IConfig} */
export default {
  siteUrl: "https://www.kiduart.com",
  generateRobotsTxt: true,
  exclude: ["/404", "/not-found", "/login", "/home"],
  additionalPaths: async () =>
    BLOG_SLUGS.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: "weekly",
      priority: 0.6,
      lastmod: new Date().toISOString(),
    })),
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
