import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY } from "@/lib/contact";

export const COMPANY = {
  name: "KIDUART",
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE_DISPLAY,
  location: CONTACT_LOCATION,
} as const;

export const CTA_SCHOOLS_SUBTITLE = `Book a walkthrough with our team and see how admissions, fees, attendance, and parent updates work when they live in one system.`;

export type SystemSwitchItem = {
  id: string;
  /** Short area name shown on the card */
  area: string;
  /** Lucide icon name resolved by ProductIcon */
  icon: string;
  /** Where the same work lives today, before one system */
  scattered: { headline: string; detail: string; tools: string[] };
  /** What the same work looks like inside KIDUART */
  connected: { headline: string; detail: string; signals: string[] };
  href: string;
};

/**
 * Homepage "flip the switch" block — the same six jobs, shown the way most schools
 * run them today and the way they run inside one system.
 */
export const SYSTEM_SWITCH_ITEMS: SystemSwitchItem[] = [
  {
    id: "records",
    area: "Student records",
    icon: "Users",
    scattered: {
      headline: "One student, four registers",
      detail:
        "Admission form in a file, documents in a drawer, class history in last year's register, contact number in someone's phone. Every question needs a search.",
      tools: ["Paper files", "Excel sheets", "Old registers"],
    },
    connected: {
      headline: "One student, one profile",
      detail:
        "Admission, documents, class and section history, guardians and contact details sit on a single record that follows the student through every session.",
      signals: ["Admission to alumni", "Documents attached", "Session-wise history"],
    },
    href: "/features/student-management",
  },
  {
    id: "fees",
    area: "Fees & finance",
    icon: "CreditCard",
    scattered: {
      headline: "The ledger never quite matches",
      detail:
        "Fee structures in one sheet, collections in another, receipts written by hand, and a separate list of who still has to pay. Month-end becomes reconciliation week.",
      tools: ["Manual receipts", "Bank statement", "Due list"],
    },
    connected: {
      headline: "Structure, collection and dues in one ledger",
      detail:
        "Fee heads, concessions, instalments, online and counter payments, receipts and outstanding dues stay on one ledger that closes itself as payments land.",
      signals: ["Online + counter", "Auto receipts", "Live outstanding"],
    },
    href: "/features/finance-and-fee-management",
  },
  {
    id: "attendance",
    area: "Attendance",
    icon: "CalendarCheck",
    scattered: {
      headline: "Marked twice, seen too late",
      detail:
        "Class registers get marked in the morning and typed again later. By the time a pattern is visible, the term is half over and the parent was never told.",
      tools: ["Class register", "Re-entry in Excel"],
    },
    connected: {
      headline: "Marked once, visible the same hour",
      detail:
        "Teachers mark attendance on their own screen. Parents get the update, the coordinator sees the pattern, and the report is already built when you need it.",
      signals: ["Same-day parent alert", "Pattern flags", "Ready reports"],
    },
    href: "/features/academic",
  },
  {
    id: "communication",
    area: "Parent communication",
    icon: "MessageSquare",
    scattered: {
      headline: "Five groups, no record",
      detail:
        "Notices go out on WhatsApp groups, SMS for some classes, printed circulars for others. Nobody can prove later who was actually informed.",
      tools: ["WhatsApp groups", "Printed circulars", "Phone calls"],
    },
    connected: {
      headline: "One outbox with a delivery trail",
      detail:
        "Circulars, fee reminders and attendance alerts go from one place to the right class, section or parent group, with a record of what was sent and to whom.",
      signals: ["Targeted by class", "Delivery record", "Templates"],
    },
    href: "/features/communication",
  },
  {
    id: "reports",
    area: "Reports & insight",
    icon: "PieChart",
    scattered: {
      headline: "Numbers arrive after the decision",
      detail:
        "A report means asking three people for three sheets, then merging them by hand. Leadership ends up deciding on last term's picture.",
      tools: ["Manual compilation", "Emailed sheets"],
    },
    connected: {
      headline: "The report is a screen, not a project",
      detail:
        "Collection, attendance, academic and staff data feed dashboards that are current, so a governing body question gets answered in the same meeting.",
      signals: ["Live dashboards", "Exportable", "Multi-campus rollup"],
    },
    href: "/features/reports-and-analytics",
  },
  {
    id: "access",
    area: "Access & security",
    icon: "ShieldCheck",
    scattered: {
      headline: "Shared logins, unclear trail",
      detail:
        "One office computer, one shared password, files on personal drives. When something changes in a record, nobody can say who changed it.",
      tools: ["Shared password", "Personal drives"],
    },
    connected: {
      headline: "Each role sees only its own work",
      detail:
        "Role-based permissions, encrypted storage, session control and audit logging decide who can open what, and keep a record of the changes that matter.",
      signals: ["Role permissions", "Audit log", "Encrypted storage"],
    },
    href: "/features/security-and-authentication",
  },
];

export type SchoolJourneyStep = {
  id: string;
  label: string;
  href: string;
  blurb: string;
  stage: string;
  detail: string;
  points: string[];
  /** Lucide icon name resolved by ProductIcon */
  icon: string;
  /** Who works in this step day to day */
  roles: string[];
  /** Where the numbers come from in feature-matrix.json */
  source: { area: string; module?: string };
  /** Feature count for the source above — validated by npm run check:content */
  featureCount: number;
};

/** Homepage lifecycle path — every step maps to a real module area in feature-matrix.json */
export const SCHOOL_OPERATIONS_JOURNEY: SchoolJourneyStep[] = [
  {
    id: "admissions",
    label: "Admissions",
    href: "/features/admission",
    blurb: "Enquiry to registered student",
    stage: "Step 01 — A family walks in",
    detail:
      "The year starts with an enquiry, not a student. Enquiries, applications, interview evaluations and registration run as one pipeline, so nothing is lost between the phone call and the form.",
    points: [
      "Enquiry capture with source and follow-up owner",
      "Application review with documents attached",
      "Interview scheduling with recorded evaluation",
      "Registration that creates the student record",
    ],
    icon: "UserPlus",
    roles: ["Admission staff", "Front office", "Principal"],
    source: { area: "admission" },
    featureCount: 27,
  },
  {
    id: "student-records",
    label: "Student Records",
    href: "/features/student-management",
    blurb: "One profile the whole school reads",
    stage: "Step 02 — The record everything reads from",
    detail:
      "Admission details, documents, guardians, enrollment, promotions and transfers live on one student profile. Attendance, fees and exams all read from it instead of keeping their own copies.",
    points: [
      "Documents and history on the profile",
      "Bulk import for existing student data",
      "Promotion at year end instead of re-entry",
      "Transfer certificates with complete records",
    ],
    icon: "Users",
    roles: ["School admin", "Class teacher", "Admin staff"],
    source: { area: "student-management" },
    featureCount: 89,
  },
  {
    id: "classes-timetable",
    label: "Classes & Timetable",
    href: "/features/academic/classes-and-sections",
    blurb: "Sections, class teachers, periods",
    stage: "Step 03 — The structure of the year",
    detail:
      "Classes and sections are created for the session, class teachers assigned, subjects allocated to staff, and the timetable published — the frame everything else hangs on.",
    points: [
      "Class and section management per session",
      "Class teacher assignment",
      "Timetable management with period allocation",
      "Subject-teacher mapping",
    ],
    icon: "CalendarRange",
    roles: ["Academic coordinator", "School admin"],
    source: { area: "academic", module: "Classes & Sections" },
    featureCount: 35,
  },
  {
    id: "attendance",
    label: "Attendance & Leave",
    href: "/features/academic/attendance",
    blurb: "Mark fast, inform parents same day",
    stage: "Step 04 — The daily heartbeat",
    detail:
      "Teachers mark a class in a few taps, student leave requests move through approval, staff attendance is tracked alongside, and attendance reports surface patterns while the term is still running.",
    points: [
      "One-tap student attendance marking",
      "Student leave management with approvals",
      "Teacher and staff class attendance",
      "Attendance configuration and reports",
    ],
    icon: "ClipboardCheck",
    roles: ["Teacher", "Class teacher", "Academic coordinator"],
    source: { area: "academic", module: "Attendance" },
    featureCount: 86,
  },
  {
    id: "examinations",
    label: "Exams & Results",
    href: "/features/academic/examination",
    blurb: "Schedule, marks, grades, report cards",
    stage: "Step 05 — Assessment without rework",
    detail:
      "Exam schedules, weightage rules and grading systems are configured once. Teachers enter marks, results are processed and published, and report cards come out of the same data.",
    points: [
      "Exam scheduling and weightage configuration",
      "Grading systems per class or board",
      "Marks entry against allocated subjects",
      "Result processing, publishing and report cards",
    ],
    icon: "GraduationCap",
    roles: ["Teacher", "Academic coordinator", "Principal"],
    source: { area: "academic", module: "Examination" },
    featureCount: 109,
  },
  {
    id: "fees",
    label: "Fees & Finance",
    href: "/features/finance-and-fee-management",
    blurb: "Structure, collection, dues, receipts",
    stage: "Step 06 — Money without the chase",
    detail:
      "The fee book drives everything: heads and structures set once, concessions on the record, counter and online collection with receipts, refunds, and one dues list that reminders work from.",
    points: [
      "Fee heads, structures and reusable templates",
      "Concessions and discounts per student",
      "Counter and online collection with receipts",
      "Due tracking, reminders and finance reports",
    ],
    icon: "Wallet",
    roles: ["Accountant", "Finance staff", "Parent"],
    source: { area: "finance-and-fee-management" },
    featureCount: 105,
  },
  {
    id: "communication",
    label: "Parent Communication",
    href: "/features/communication",
    blurb: "Targeted notices with a record",
    stage: "Step 07 — One voice to families",
    detail:
      "Notices, announcements and events go to the right classes or staff groups over in-app, email and SMS — with a log the office can check when a parent says they were never told.",
    points: [
      "Notice board and announcement management",
      "Event management tied to the school calendar",
      "In-app, email and SMS messaging",
      "Message records for follow-up",
    ],
    icon: "Megaphone",
    roles: ["School admin", "Front office", "Teacher"],
    source: { area: "communication" },
    featureCount: 56,
  },
  {
    id: "transport",
    label: "Transport",
    href: "/features/transport-management",
    blurb: "Routes, drivers, vehicles, tracking",
    stage: "Step 08 — Every route accounted for",
    detail:
      "Routes and stops are planned with students mapped to them, drivers and vehicles have proper records, live tracking answers where-is-the-bus, and maintenance stays scheduled.",
    points: [
      "Route management with stops",
      "Vehicle fleet and driver records",
      "Live vehicle tracking",
      "Maintenance logs per vehicle",
    ],
    icon: "Bus",
    roles: ["Transport manager", "School admin", "Parent"],
    source: { area: "transport-management" },
    featureCount: 39,
  },
  {
    id: "hostel",
    label: "Hostel & Campus",
    href: "/features/hostel-management",
    blurb: "Rooms, beds, mess, visitors",
    stage: "Step 09 — Residential care on record",
    detail:
      "Boarding operations get bed-level allocation, hostel attendance separate from class attendance, mess planning, and a visitor log — alongside campus buildings, rooms and assets.",
    points: [
      "Hostel rooms with bed-level allocation",
      "Hostel attendance tracking",
      "Mess and meal management",
      "Visitor log for accountability",
    ],
    icon: "Building2",
    roles: ["Hostel warden", "School admin", "Parent"],
    source: { area: "hostel-management" },
    featureCount: 34,
  },
  {
    id: "library",
    label: "Library",
    href: "/features/library-management",
    blurb: "Catalog, circulation, fines",
    stage: "Step 10 — Circulation without registers",
    detail:
      "The catalog knows what exists and who has it. Members, issue and return, reservations and fines run through one workflow, with reports showing what the collection is actually doing.",
    points: [
      "Book catalog and inventory",
      "Membership and borrowing history",
      "Issue, return and reservations",
      "Fines and library reports",
    ],
    icon: "BookOpen",
    roles: ["Librarian", "Student", "Teacher"],
    source: { area: "library-management" },
    featureCount: 65,
  },
  {
    id: "staff",
    label: "HR & Payroll",
    href: "/features/hr-and-staff-management",
    blurb: "Staff, leave, salary, appraisal",
    stage: "Step 11 — The team behind the classes",
    detail:
      "Teaching and non-teaching directories, departments and designations, staff attendance and leave approvals feed payroll directly, with appraisal records kept alongside.",
    points: [
      "Teaching and non-teaching staff directories",
      "Departments, designations and structure",
      "Leave requests with approval trail",
      "Payroll cycles and performance appraisal",
    ],
    icon: "BriefcaseBusiness",
    roles: ["HR staff", "Principal", "Head of department"],
    source: { area: "hr-and-staff-management" },
    featureCount: 176,
  },
  {
    id: "reports",
    label: "Reports & Leadership",
    href: "/features/reports-and-analytics",
    blurb: "Decisions from live records",
    stage: "Step 12 — The picture leadership needs",
    detail:
      "Because every step above writes to one system, reporting is reading rather than collecting: academic, attendance and financial reports, school analytics, and a builder for board formats.",
    points: [
      "Academic performance and attendance analytics",
      "Financial reporting and collection views",
      "Student report cards and teacher reports",
      "Custom report builder for board packs",
    ],
    icon: "BarChart3",
    roles: ["Principal", "Director", "Trustee", "Accountant"],
    source: { area: "reports-and-analytics" },
    featureCount: 50,
  },
];
