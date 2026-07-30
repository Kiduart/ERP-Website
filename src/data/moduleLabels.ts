/**
 * Buyer-facing names for modules whose sheet names read as internal jargon, or repeat
 * across areas ("Navigation", "Dashboard"). Slugs and URLs stay untouched, so nothing
 * that already earns search traffic moves.
 */
const MODULE_LABEL_OVERRIDES: Record<string, Record<string, string>> = {
  "security-and-authentication": {
    "Core Authentication": "Login & Sign-in",
    "Access Security": "Login Protection",
    "Session & Tokens": "Session Control",
    "Authentication Communications": "Security Alerts",
    "Access Control": "Access Rules",
    Navigation: "Role-Based Menus",
  },
  "organization-management": {
    Navigation: "Group Navigation",
    "Member Management": "Group Users",
    Subscription: "Subscription Overview",
    "Subscription & Billing": "Billing & Payments",
  },
  "dashboard-and-insights": {
    Navigation: "Menus & Shortcuts",
    Dashboard: "Role Dashboards",
  },
  "facilities-and-inventory": {
    Infrastructure: "Rooms & Assets",
  },
  "hr-and-staff-management": {
    "Organization Structure": "Departments & Reporting",
  },
  "student-management": {
    "Bulk Operations": "Bulk Student Updates",
  },
};

export function moduleDisplayName(areaSlug: string, moduleName: string): string {
  return MODULE_LABEL_OVERRIDES[areaSlug]?.[moduleName] ?? moduleName;
}
