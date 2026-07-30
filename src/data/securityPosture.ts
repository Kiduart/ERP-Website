/**
 * Security content is written against what the platform actually implements
 * (see the Security & Authentication area in feature-matrix.json). Nothing here
 * claims a certification we do not hold or a control that is not in the product.
 */

export type SecurityLayer = {
  id: string;
  /** Layer number shown on the stack */
  order: number;
  title: string;
  /** One-line promise for the layer */
  promise: string;
  detail: string;
  /** Concrete controls, phrased the way they exist in the product */
  controls: string[];
  /** Matching module in the Security & Authentication area */
  module: string;
  icon: string;
  accent: "navy" | "teal" | "orange" | "yellow" | "bronze";
};

export const SECURITY_LAYERS: SecurityLayer[] = [
  {
    id: "identity",
    order: 1,
    title: "Identity and login",
    promise: "Every login is a verified person, not a shared password on a staffroom notice",
    detail:
      "Login is the widest door in any school system, so it carries the most controls. Accounts verify email and phone, passwords are stored hashed with bcrypt, failed attempts lock an account, and staff can add an authenticator app as a second factor. Google and Microsoft sign-in are supported where a school already runs those accounts.",
    controls: [
      "Universal login for staff, teachers, students and parents",
      "Password hashing with bcrypt — no plain-text password is ever stored",
      "Authenticator-app (TOTP) multi-factor with recovery backup codes",
      "Account lockout after repeated failed login attempts",
      "Password reset and recovery with expiring links",
      "Google and Microsoft sign-in for schools already on those accounts",
    ],
    module: "Core Authentication",
    icon: "KeyRound",
    accent: "teal",
  },
  {
    id: "roles",
    order: 2,
    title: "Roles and permissions",
    promise: "A class teacher never sees the fee ledger, and an accountant never sees exam marks",
    detail:
      "Access is decided by role, not by trust. Roles carry explicit permissions, and permissions can be delegated downward — an organisation can restrict what a school admin is allowed to grant, but never expand it. Each role also gets its own sidebar, so people only navigate to what they can actually open.",
    controls: [
      "Role-based permissions across every module area",
      "Role and permission delegation from organisation to school",
      "A 'my roles and permissions' view so staff can see their own access",
      "Unified role-based sidebar — menus reflect real permissions",
      "Separate panels for organisation, school, teaching, finance, parent and student roles",
    ],
    module: "Roles & Permissions",
    icon: "ShieldCheck",
    accent: "navy",
  },
  {
    id: "isolation",
    order: 3,
    title: "School data isolation",
    promise: "One school's records cannot be queried from another school's login",
    detail:
      "KIDUART is multi-tenant by design: each school's data lives in its own tenant database rather than sharing rows in one common table. Requests are resolved to a tenant before any query runs, which keeps the boundary structural instead of relying on a filter someone might forget.",
    controls: [
      "Tenant-per-school database separation",
      "Tenant resolved on every request before data access",
      "Organisation-level grouping for trusts running multiple campuses",
      "Campus-wise reporting without merging campus data",
    ],
    module: "Access Control",
    icon: "Database",
    accent: "bronze",
  },
  {
    id: "sessions",
    order: 4,
    title: "Sessions and devices",
    promise: "A forgotten login on a shared computer can be ended from anywhere",
    detail:
      "Sessions are tracked, not just issued. Staff can see where they are signed in and end other sessions; tokens can be refreshed and revoked, and logging out invalidates the token rather than only clearing the browser. Concurrent session limits apply per role.",
    controls: [
      "Active session list with device and last-used detail",
      "Revoke a single session, all other sessions, or everything",
      "Refresh-token rotation with revocation support",
      "Token invalidation on logout",
      "Concurrent session limits per role",
    ],
    module: "Session & Tokens",
    icon: "MonitorSmartphone",
    accent: "orange",
  },
  {
    id: "perimeter",
    order: 5,
    title: "Access perimeter",
    promise: "Admin access can be fenced to your campus network when you want it",
    detail:
      "For schools that want tighter control, access can be restricted by IP or by location, so sensitive panels are only reachable from the campus network or an approved region. Request rate limits and standard hardening sit in front of the API for every school, whether or not those optional restrictions are switched on.",
    controls: [
      "IP allow list and block list",
      "Geo-restriction for location-based access rules",
      "Rate limiting on the API, with stricter limits on authentication",
      "Standard HTTP hardening and input sanitisation",
      "OTP and authentication message templates managed in-product",
    ],
    module: "Access Security",
    icon: "Network",
    accent: "yellow",
  },
  {
    id: "accountability",
    order: 6,
    title: "Audit trail and API access",
    promise: "When someone asks who changed a mark or a fee entry, there is an answer",
    detail:
      "Sensitive actions — logins, MFA changes, password resets, permission changes and financial events — are written to an audit log. Where a school needs to connect another system, access goes through managed API keys rather than sharing a staff account password.",
    controls: [
      "Audit logging for authentication and sensitive record changes",
      "Managed API keys with scoped access instead of shared credentials",
      "Payment gateway webhooks verified before they are processed",
      "Encrypted storage for third-party integration credentials",
    ],
    module: "API Access",
    icon: "ScrollText",
    accent: "teal",
  },
];

/** Stated plainly so a school's IT reviewer knows exactly where we stand. */
export const SECURITY_HONESTY: { title: string; detail: string }[] = [
  {
    title: "We do not claim certifications we have not completed",
    detail:
      "KIDUART is a growing product. We describe the controls that exist in the platform today and are happy to walk your IT reviewer through them on a call. When formal audits and certifications are completed, they will be published here with dates — not implied earlier.",
  },
  {
    title: "Some controls are optional by design",
    detail:
      "IP allow lists and geo-restriction are powerful but disruptive if misconfigured, so they stay off until your school asks for them. We enable and test them with you rather than switching them on silently.",
  },
  {
    title: "Multi-factor is authenticator-app based today",
    detail:
      "Second-factor login uses an authenticator app (TOTP) with backup recovery codes. SMS-based second factor is on the roadmap and will be announced when it ships, rather than listed as available now.",
  },
  {
    title: "Your data stays yours",
    detail:
      "Student records, fee ledgers, attendance and exam data can be exported in standard formats whenever you ask, including if you decide to leave. We do not sell school data or use student records to train anything.",
  },
];

export type PrivacyCommitment = {
  title: string;
  detail: string;
};

/** Used on the security page and referenced from the privacy policy. */
export const DATA_HANDLING_PRINCIPLES: PrivacyCommitment[] = [
  {
    title: "Collected because a school workflow needs it",
    detail:
      "We store the data the modules you switch on actually require: admission and student records, guardian contacts, attendance, marks, fee transactions, staff records, and transport or hostel allocation where those areas are in use.",
  },
  {
    title: "Visible to the roles that need it",
    detail:
      "A parent sees their own children. A class teacher sees their classes. An accountant sees the fee book. Access follows the same role and permission rules the rest of the product uses.",
  },
  {
    title: "Retained while your school needs the record",
    detail:
      "Academic and financial history is retained because schools are required to keep it — transfer certificates and fee records are the obvious example. Operational logs are kept for a limited window for troubleshooting and review.",
  },
  {
    title: "Removed when you ask",
    detail:
      "On termination, we export your records for you and then remove school data from our active systems, keeping only what the law requires us to keep.",
  },
];
