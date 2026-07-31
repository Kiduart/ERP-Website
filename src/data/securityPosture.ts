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
  /** One-word label for compact diagrams */
  short: string;
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
    short: "Identity",
    promise:
      "Every login is a verified person, not a shared password on a staffroom notice",
    detail:
      "Login is the widest door in any school system, so it carries the most controls. Accounts verify email and phone, passwords are stored hashed with bcrypt, failed attempts lock an account, and staff can add an authenticator app as a second factor. Google and Microsoft sign-in are supported where a school already runs those accounts.",
    controls: [
      "Universal login for staff, teachers, students and parents",
      "Password hashing with bcrypt  no plain-text password is ever stored",
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
    short: "Roles",
    promise:
      "A class teacher never sees the fee ledger, and an accountant never sees exam marks",
    detail:
      "Access is decided by role, not by trust. Roles carry explicit permissions, and permissions can be delegated downward  an organisation can restrict what a school admin is allowed to grant, but never expand it. Each role also gets its own sidebar, so people only navigate to what they can actually open.",
    controls: [
      "Role-based permissions across every module area",
      "Role and permission delegation from organisation to school",
      "A 'my roles and permissions' view so staff can see their own access",
      "Unified role-based sidebar  menus reflect real permissions",
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
    short: "Isolation",
    promise:
      "One school's records cannot be queried from another school's login",
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
    short: "Sessions",
    promise:
      "A forgotten login on a shared computer can be ended from anywhere",
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
    short: "Perimeter",
    promise:
      "Admin access can be fenced to your campus network when you want it",
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
    short: "Audit trail",
    promise:
      "When someone asks who changed a mark or a fee entry, there is an answer",
    detail:
      "Sensitive actions  logins, MFA changes, password resets, permission changes and financial events  are written to an audit log. Where a school needs to connect another system, access goes through managed API keys rather than sharing a staff account password.",
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

export type SecurityScenario = {
  id: string;
  /** Short label used on the selector */
  question: string;
  /** What actually happens in a school when this goes wrong */
  attempt: string;
  /** Layer id in SECURITY_LAYERS that answers it  validated by check:content */
  stoppedBy: string;
  /** What the product does about it */
  response: string;
  /** Controls involved, phrased as they exist in the product */
  controls: string[];
};

/**
 * Threat-first framing for the homepage: the things that actually go wrong in a
 * school, and which layer answers each one. Every response maps to a control
 * already listed on the matching SECURITY_LAYERS entry.
 */
export const SECURITY_SCENARIOS: SecurityScenario[] = [
  {
    id: "leaked-password",
    question: "A parent reuses a password that leaks somewhere else",
    attempt:
      "Someone takes an email and password from an unrelated breach and tries it on your parent portal, hoping the family reused it.",
    stoppedBy: "identity",
    response:
      "Passwords are stored hashed with bcrypt, so a KIDUART database dump would not hand anyone a usable password in the first place. Repeated failed attempts lock the account, and staff accounts that handle money or marks can be required to pass an authenticator-app code before the login completes.",
    controls: [
      "Password hashing with bcrypt  no plain-text password is ever stored",
      "Account lockout after repeated failed login attempts",
      "Authenticator-app (TOTP) multi-factor with recovery backup codes",
    ],
  },
  {
    id: "staff-exit",
    question: "A teacher resigns in the middle of the term",
    attempt:
      "Their last day passes, but their login still exists  and in most schools nobody remembers to check what it can still open.",
    stoppedBy: "sessions",
    response:
      "Deactivating the user ends access rather than just hiding a menu. Their sessions can be revoked from the admin side, refresh tokens are invalidated instead of quietly living on, and if they signed in with a school Google or Microsoft account, disabling that account closes the second route too.",
    controls: [
      "Revoke a single session, all other sessions, or everything",
      "Refresh-token rotation with revocation support",
      "Token invalidation on logout",
    ],
  },
  {
    id: "brute-force",
    question: "Someone hammers your login page with guesses",
    attempt:
      "An automated script runs thousands of password attempts against the school login, usually at night when nobody is watching.",
    stoppedBy: "perimeter",
    response:
      "Authentication routes carry stricter rate limits than the rest of the API, so the script is throttled before it gets anywhere, and the account it is targeting locks itself. Schools that want a harder boundary can restrict admin access to campus IP ranges or an approved region.",
    controls: [
      "Rate limiting on the API, with stricter limits on authentication",
      "IP allow list and block list",
      "Geo-restriction for location-based access rules",
    ],
  },
  {
    id: "shared-computer",
    question: "A staff login is left open on a shared computer",
    attempt:
      "Someone checks marks from the staff room, a cyber café or a home laptop, and walks away without signing out.",
    stoppedBy: "sessions",
    response:
      "Sessions are tracked, not just issued. Staff can see every device they are signed in on with its last-used detail and end the ones they do not recognise, and concurrent session limits per role stop one account being used in five places at once.",
    controls: [
      "Active session list with device and last-used detail",
      "Revoke a single session, all other sessions, or everything",
      "Concurrent session limits per role",
    ],
  },
  {
    id: "cross-school",
    question: "Another school on the platform tries to reach your records",
    attempt:
      "The classic multi-tenant worry: one customer's admin finds a way to query another customer's students because everything sits in one shared table.",
    stoppedBy: "isolation",
    response:
      "Each school's data lives in its own tenant database rather than sharing rows with everyone else, and the tenant is resolved before any query runs. The boundary is structural, so it does not depend on a developer remembering to add a filter.",
    controls: [
      "Tenant-per-school database separation",
      "Tenant resolved on every request before data access",
      "Campus-wise reporting without merging campus data",
    ],
  },
  {
    id: "curious-staff",
    question: "A staff member goes looking outside their job",
    attempt:
      "An accountant opens exam marks. A class teacher browses the fee ledger. Not malicious, usually  just possible, in most school software.",
    stoppedBy: "roles",
    response:
      "Access is decided by role, not by trust. Each role carries explicit permissions and gets its own sidebar, so people do not navigate to screens they cannot open. An organisation can restrict what a school admin is allowed to grant, but never let them expand their own access.",
    controls: [
      "Role-based permissions across every module area",
      "Role and permission delegation from organisation to school",
      "Unified role-based sidebar  menus reflect real permissions",
    ],
  },
  {
    id: "quiet-edit",
    question: "A mark or a fee entry changes quietly",
    attempt:
      "A parent disputes a receipt, or a student's grade does not match the answer sheet, and the office has no way to prove who touched it.",
    stoppedBy: "accountability",
    response:
      "Sensitive actions  logins, MFA changes, password resets, permission changes and financial events  are written to an audit log. When the question comes months later, there is a record to answer it with instead of a memory of who was on duty.",
    controls: [
      "Audit logging for authentication and sensitive record changes",
      "Payment gateway webhooks verified before they are processed",
      "Encrypted storage for third-party integration credentials",
    ],
  },
  {
    id: "vendor-access",
    question: "A vendor asks for a login to connect their system",
    attempt:
      "Your website developer or reporting vendor asks for 'an admin account'  and now a third party holds a staff password with full access.",
    stoppedBy: "accountability",
    response:
      "They get a scoped API key instead, limited to what that integration genuinely needs and revocable on its own. Nobody has to share a staff password, and when the contract ends you revoke a key rather than changing everyone's login.",
    controls: [
      "Managed API keys with scoped access instead of shared credentials",
      "Audit logging for authentication and sensitive record changes",
      "Encrypted storage for third-party integration credentials",
    ],
  },
];

/** Stated plainly so a school's IT reviewer knows exactly where we stand. */
export const SECURITY_HONESTY: { title: string; detail: string }[] = [
  {
    title: "We do not claim certifications we have not completed",
    detail:
      "KIDUART is a growing product. We describe the controls that exist in the platform today and are happy to walk your IT reviewer through them on a call. When formal audits and certifications are completed, they will be published here with dates  not implied earlier.",
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
      "Academic and financial history is retained because schools are required to keep it  transfer certificates and fee records are the obvious example. Operational logs are kept for a limited window for troubleshooting and review.",
  },
  {
    title: "Removed when you ask",
    detail:
      "On termination, we export your records for you and then remove school data from our active systems, keeping only what the law requires us to keep.",
  },
];
