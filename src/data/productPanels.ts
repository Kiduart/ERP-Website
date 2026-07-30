/**
 * The role-based panels the product actually ships, in the order a school group
 * would set them up: platform console → organisation → leadership → school desk
 * → academic → classroom → finance → HR → family → student.
 *
 * `keyModules` reference real module names from feature-matrix.json, so panel
 * pages can render live feature counts instead of invented capability lists.
 */

export type PanelLayout = "console" | "network" | "insight" | "operations" | "planner" | "classroom" | "ledger" | "people" | "family" | "learner";

export type PanelModuleRef = {
  /** Category slug in feature-matrix.json */
  area: string;
  /** Module name exactly as it appears in the matrix */
  module: string;
};

export type ProductPanel = {
  slug: string;
  order: number;
  label: string;
  shortLabel: string;
  audience: string[];
  stage: string;
  headline: string;
  summary: string;
  intro: string;
  /** Concrete things the panel shows — traceable to shipped modules */
  whatYouSee: string[];
  /** Typical first hour in this panel */
  firstHour: string[];
  keyModules: PanelModuleRef[];
  /** Areas of the feature matrix this panel opens into */
  areas: string[];
  image: string;
  imageAlt: string;
  layout: PanelLayout;
  accent: "navy" | "teal" | "orange" | "yellow" | "bronze";
  icon: string;
};

export const PRODUCT_PANELS: ProductPanel[] = [
  {
    slug: "system-admin",
    order: 1,
    label: "System Admin Console",
    shortLabel: "System Admin",
    audience: ["Platform administrator", "System admin"],
    stage: "Layer 01 — Platform control",
    headline: "The console that provisions schools, roles and subscriptions",
    summary:
      "Module and permission definitions, organisation provisioning, subscription plans, payment settings, invoices, audit logs and system health.",
    intro:
      "Before a single student is added, someone decides which modules exist, what each role may do, and how billing works. The system console is that layer: modules, roles, permissions and actions are defined here, organisations are provisioned with their multi-school configuration, subscription plans and payment settings are maintained, and audit logs plus system health keep the platform accountable.",
    whatYouSee: [
      "Module, role, permission and action definitions",
      "Organisation provisioning with multi-school configuration",
      "Subscription plans, add-ons and payment settings",
      "Invoices, transactions and cash payment requests",
      "Support and helpdesk queue across tenants",
      "Audit logs, system health and integration settings",
    ],
    firstHour: [
      "Create the organisation and set its multi-school configuration",
      "Attach a subscription plan and payment method",
      "Define which roles the group may delegate",
      "Invite the first organisation admin",
    ],
    keyModules: [
      { area: "security-and-authentication", module: "Roles & Permissions" },
      { area: "security-and-authentication", module: "API Access" },
      { area: "organization-management", module: "Subscription" },
      { area: "organization-management", module: "School Management" },
    ],
    areas: ["security-and-authentication", "organization-management", "support"],
    image: "/images/panels/system-admin.png",
    imageAlt: "System administrator console showing tenants, roles and subscription controls",
    layout: "console",
    accent: "navy",
    icon: "ServerCog",
  },
  {
    slug: "organization",
    order: 2,
    label: "Organisation Panel",
    shortLabel: "Organisation",
    audience: ["Organisation owner", "Organisation admin", "Group manager"],
    stage: "Layer 02 — Multi-campus HQ",
    headline: "One HQ view across every campus in the group",
    summary:
      "Organisation dashboard and health analytics, school administration, member management, consolidated cross-school reports and group billing.",
    intro:
      "A trust running four campuses needs numbers on the same definitions, not four spreadsheets. The organisation panel adds schools, delegates school admins, compares campuses on attendance, academics, enrolment and finance, and keeps one subscription with its invoices at group level. Data stays isolated per school while reporting rolls up.",
    whatYouSee: [
      "Organisation dashboard with health score analytics",
      "School list with comparison, students and staff counts",
      "School admin account management and member roles",
      "Consolidated and custom cross-school reports",
      "Group subscription, add-ons, invoices and billing portal",
      "Organisation-level support tickets",
    ],
    firstHour: [
      "Add each campus and confirm its data boundary",
      "Assign a school admin per campus",
      "Set the reporting scope for the group",
      "Open the first consolidated report",
    ],
    keyModules: [
      { area: "organization-management", module: "Dashboard" },
      { area: "organization-management", module: "Cross-School Reports" },
      { area: "organization-management", module: "School Admin Management" },
      { area: "organization-management", module: "Subscription & Billing" },
    ],
    areas: ["organization-management", "reports-and-analytics", "support"],
    image: "/images/panels/organization.png",
    imageAlt: "Organisation panel comparing multiple school campuses in one dashboard",
    layout: "network",
    accent: "teal",
    icon: "Network",
  },
  {
    slug: "director",
    order: 3,
    label: "Director & Leadership View",
    shortLabel: "Director",
    audience: ["Director", "Principal", "Vice principal", "Trustee"],
    stage: "Layer 03 — Leadership",
    headline: "The weekly picture: academics, attendance and money together",
    summary:
      "School-wide analytics with academic performance, attendance trends, financial reporting and a custom report builder for board packs.",
    intro:
      "Leadership does not need every screen — it needs the same four answers every week: are students attending, are results moving, are fees collected, and is the staff position stable. This view pulls school analytics, academic performance reports, attendance analytics and financial reporting into one place, with a custom report builder for board and trustee formats.",
    whatYouSee: [
      "School-wide analytics dashboard",
      "Academic performance and result trends",
      "Attendance analytics by class and section",
      "Fee collection, dues and expense summaries",
      "Staff position from HR records",
      "Custom report builder for board packs",
    ],
    firstHour: [
      "Review the school analytics dashboard",
      "Open attendance analytics for the current term",
      "Check collection against outstanding dues",
      "Save a custom report for the next board meeting",
    ],
    keyModules: [
      { area: "reports-and-analytics", module: "School Analytics" },
      { area: "reports-and-analytics", module: "Academic Reports" },
      { area: "reports-and-analytics", module: "Financial Reports" },
      { area: "reports-and-analytics", module: "Custom Reports" },
    ],
    areas: ["reports-and-analytics", "dashboard-and-insights", "organization-management"],
    image: "/images/panels/director.png",
    imageAlt: "Leadership dashboard with academic, attendance and financial trend charts",
    layout: "insight",
    accent: "navy",
    icon: "Compass",
  },
  {
    slug: "school-admin",
    order: 4,
    label: "School Admin Desk",
    shortLabel: "School Admin",
    audience: ["School admin", "Admin staff", "Front office"],
    stage: "Layer 04 — The school desk",
    headline: "The operational desk where the school day is actually run",
    summary:
      "Admissions, student and parent records, classes and sections, staff, fees, communication, library, transport, hostel and facilities in one workspace.",
    intro:
      "This is the busiest panel in the product. Admission enquiries arrive, students are enrolled, sections are balanced, guardians are linked, fees are allocated, notices go out, and transport, hostel and library desks all need supervision. The admin desk keeps those modules in one workspace with dashboard widgets that surface what needs attention today.",
    whatYouSee: [
      "Admin dashboard widgets for attendance, fees and academics",
      "Admission pipeline from enquiry to registration",
      "Student, parent and staff directories",
      "Class, section and timetable administration",
      "Fee allocation, collection status and dues",
      "Communication, library, transport, hostel and facilities desks",
    ],
    firstHour: [
      "Set the academic session, terms and working days",
      "Import or create classes and sections",
      "Enroll students and link guardians",
      "Allocate the fee structure for the session",
    ],
    keyModules: [
      { area: "student-management", module: "Student Directory" },
      { area: "academic", module: "Classes & Sections" },
      { area: "finance-and-fee-management", module: "Fee Structure" },
      { area: "communication", module: "Notices" },
    ],
    areas: [
      "admission",
      "student-management",
      "parent-management",
      "academic",
      "communication",
      "facilities-and-inventory",
    ],
    image: "/images/panels/school-admin.png",
    imageAlt: "School administration workspace with students, fees and communication modules",
    layout: "operations",
    accent: "orange",
    icon: "Building",
  },
  {
    slug: "academic",
    order: 5,
    label: "Academic Coordinator Panel",
    shortLabel: "Academic",
    audience: ["Academic coordinator", "Head of department", "Senior teacher"],
    stage: "Layer 05 — Academic planning",
    headline: "Curriculum, timetable and examinations planned in one panel",
    summary:
      "Academic calendar and terms, curriculum with syllabus and lesson plans, subject-teacher allocation, timetable and the full examination cycle.",
    intro:
      "Coordinators hold the plan: which syllabus is being covered, who teaches what, whether the timetable survives a staff absence, and how the exam cycle is configured. This panel keeps academic terms and calendar, curriculum, syllabus and lesson plans, subject and teacher allocation, timetable management, and examination setup from weightage to result publishing.",
    whatYouSee: [
      "Academic terms, calendar, holidays and working days",
      "Curriculum, syllabus and lesson plan progress",
      "Subject categories and subject-teacher allocation",
      "Timetable management and class teacher assignment",
      "Exam scheduling, weightage and grading systems",
      "Result processing, publishing and PTM scheduling",
    ],
    firstHour: [
      "Configure terms, holidays and working days",
      "Map subjects to classes and teachers",
      "Publish the timetable for the section",
      "Set the grading system and exam weightage",
    ],
    keyModules: [
      { area: "academic", module: "Curriculum" },
      { area: "academic", module: "Subjects" },
      { area: "academic", module: "Examination" },
      { area: "academic", module: "Academic Calendar" },
    ],
    areas: ["academic", "reports-and-analytics"],
    image: "/images/panels/academic.png",
    imageAlt: "Academic coordinator panel with curriculum, timetable and exam planning",
    layout: "planner",
    accent: "teal",
    icon: "CalendarRange",
  },
  {
    slug: "teacher",
    order: 6,
    label: "Teacher Workspace",
    shortLabel: "Teacher",
    audience: ["Teacher", "Class teacher", "Substitute teacher", "Teaching assistant"],
    stage: "Layer 06 — The classroom",
    headline: "Attendance, marks, diary and assignments in a few taps",
    summary:
      "A deliberately narrow workspace: class attendance, marks entry, class diary, assignments, discipline notes, teacher reports and self-service leave.",
    intro:
      "Teachers should not need training to use school software. The teacher workspace shows only the classes they own: attendance marking for the period, marks entry for their subjects, class diary and homework log, assignments with submissions, discipline notes, PTM slots, and their own leave and profile through the teacher portal.",
    whatYouSee: [
      "Teacher dashboard for today's classes",
      "One-tap student attendance marking",
      "Marks entry for allocated subjects",
      "Class diary and homework log entries",
      "Assignment creation and submission tracking",
      "Own leave requests, profile and teacher reports",
    ],
    firstHour: [
      "Open today's timetable and mark attendance",
      "Post the class diary entry",
      "Create an assignment for the section",
      "Enter marks for a completed assessment",
    ],
    keyModules: [
      { area: "academic", module: "Attendance" },
      { area: "academic", module: "Class Diary" },
      { area: "academic", module: "Assignments" },
      { area: "hr-and-staff-management", module: "Teacher Portal" },
    ],
    areas: ["academic", "hr-and-staff-management", "communication"],
    image: "/images/panels/teacher.png",
    imageAlt: "Teacher workspace showing attendance marking and class diary",
    layout: "classroom",
    accent: "yellow",
    icon: "ClipboardCheck",
  },
  {
    slug: "finance",
    order: 7,
    label: "Finance & Accounts Panel",
    shortLabel: "Finance",
    audience: ["Accountant", "Finance officer", "Clerk"],
    stage: "Layer 07 — Money",
    headline: "The fee book, the counter and the dues list in one panel",
    summary:
      "Fee heads, structures and templates, concessions, collection with receipts, refunds, online payments, due tracking, expenses and finance reports.",
    intro:
      "Accounts teams work two lists: who has paid and who has not. This panel keeps the fee book that generates both — heads and categories, structures and templates, class or student level allocation, concessions, counter and online collection with receipts, refunds, due tracking with reminders, expenses, and reporting that reconciles the month.",
    whatYouSee: [
      "Fee heads, structures, templates and allocations",
      "Concession and discount records per student",
      "Collection counter with receipts and refunds",
      "Online payment status with gateway webhooks",
      "Due tracker with reminder history",
      "Expense records and finance reports",
    ],
    firstHour: [
      "Create fee heads and the structure for a class",
      "Allocate the structure to enrolled students",
      "Record a payment and issue the receipt",
      "Review the dues list and send reminders",
    ],
    keyModules: [
      { area: "finance-and-fee-management", module: "Fee Structure" },
      { area: "finance-and-fee-management", module: "Fee Collection" },
      { area: "finance-and-fee-management", module: "Due Management" },
      { area: "finance-and-fee-management", module: "Finance Reports" },
    ],
    areas: ["finance-and-fee-management", "reports-and-analytics"],
    image: "/images/panels/finance.png",
    imageAlt: "Finance panel with fee collection, receipts and dues tracking",
    layout: "ledger",
    accent: "orange",
    icon: "Wallet",
  },
  {
    slug: "hr",
    order: 8,
    label: "HR & Staff Panel",
    shortLabel: "HR & Staff",
    audience: ["HR staff", "Principal", "Head of department"],
    stage: "Layer 08 — The team",
    headline: "Staff records, attendance, leave and payroll in one cycle",
    summary:
      "Teaching and non-teaching directories, departments and designations, staff attendance, leave approvals, payroll processing and performance appraisal.",
    intro:
      "HR in a school is not just hiring — it is substitutions, leave balances, salary cycles and appraisal records. This panel holds staff and teacher directories, departments and designations, staff attendance, leave requests with approval trails, payroll processing with components and deductions, and performance appraisal history.",
    whatYouSee: [
      "Teaching and non-teaching staff directories",
      "Departments, designations and reporting structure",
      "Staff attendance tracking",
      "Leave requests with approval trail",
      "Payroll runs with components and deductions",
      "Performance appraisal records",
    ],
    firstHour: [
      "Set up departments and designations",
      "Add teaching and non-teaching staff records",
      "Configure the leave policy",
      "Run a trial payroll cycle",
    ],
    keyModules: [
      { area: "hr-and-staff-management", module: "Staff Directory" },
      { area: "hr-and-staff-management", module: "Leave Management" },
      { area: "hr-and-staff-management", module: "Payroll" },
      { area: "hr-and-staff-management", module: "Performance" },
    ],
    areas: ["hr-and-staff-management", "reports-and-analytics"],
    image: "/images/panels/hr.png",
    imageAlt: "HR panel with staff directory, leave approvals and payroll",
    layout: "people",
    accent: "bronze",
    icon: "BriefcaseBusiness",
  },
  {
    slug: "parent",
    order: 9,
    label: "Parent Portal",
    shortLabel: "Parent",
    audience: ["Parent", "Guardian"],
    stage: "Layer 09 — The family",
    headline: "Attendance, fees, results and notices without calling the office",
    summary:
      "A self-service portal covering attendance, fee dues and payments, results, circulars, PTM and transport information for each linked child.",
    intro:
      "Most parent calls ask three questions: was my child marked present, what is pending on fees, and when are results out. The parent portal answers them for every linked child, shows circulars and events, exposes PTM slots, and lets families pay online instead of standing at a counter.",
    whatYouSee: [
      "Each linked child's attendance record",
      "Fee dues, payment history and receipts",
      "Results and report cards when published",
      "Notices, announcements and school events",
      "PTM schedule and communication history",
      "Transport route and stop information",
    ],
    firstHour: [
      "Sign in and verify linked children",
      "Check attendance for the current month",
      "Review pending dues and pay online",
      "Open the latest circular",
    ],
    keyModules: [
      { area: "parent-management", module: "Parent Portal" },
      { area: "finance-and-fee-management", module: "Fee Collection" },
      { area: "academic", module: "Attendance" },
      { area: "communication", module: "Notices" },
    ],
    areas: ["parent-management", "communication", "finance-and-fee-management"],
    image: "/images/panels/parent.png",
    imageAlt: "Parent portal showing attendance, fees and school notices",
    layout: "family",
    accent: "yellow",
    icon: "HeartHandshake",
  },
  {
    slug: "student",
    order: 10,
    label: "Student Portal",
    shortLabel: "Student",
    audience: ["Student", "Prefect", "Head boy or girl"],
    stage: "Layer 10 — The learner",
    headline: "Timetable, assignments, attendance and results in one login",
    summary:
      "Student self-service with timetable, assignment submission, attendance record, results, library borrowings and school notices.",
    intro:
      "Students need a small, clear surface: what is on today, what is due, what was scored, and what is borrowed. The student portal covers timetable and calendar, assignment submission, attendance history, published results, library borrowings and notices — nothing more, so it stays usable on a shared phone.",
    whatYouSee: [
      "Personal timetable and academic calendar",
      "Assignments with submission status",
      "Own attendance record and leave requests",
      "Published results and report cards",
      "Library borrowings, dues and reservations",
      "School notices and events",
    ],
    firstHour: [
      "Sign in and check today's timetable",
      "Open pending assignments",
      "Review attendance for the term",
      "Check library borrowings",
    ],
    keyModules: [
      { area: "student-management", module: "Student Portal" },
      { area: "academic", module: "Assignments" },
      { area: "library-management", module: "Borrowing" },
      { area: "dashboard-and-insights", module: "Dashboard" },
    ],
    areas: ["student-management", "academic", "library-management"],
    image: "/images/panels/student.png",
    imageAlt: "Student portal with timetable, assignments and results",
    layout: "learner",
    accent: "teal",
    icon: "BookMarked",
  },
];

export const PANEL_BY_SLUG: Record<string, ProductPanel> = Object.fromEntries(
  PRODUCT_PANELS.map((panel) => [panel.slug, panel]),
);

export const PANEL_SLUGS = PRODUCT_PANELS.map((panel) => panel.slug);

export function getPanel(slug: string): ProductPanel | undefined {
  return PANEL_BY_SLUG[slug];
}
