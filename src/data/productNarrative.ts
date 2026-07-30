/**
 * Curated marketing copy for each module area in the feature matrix.
 *
 * The counts, module names and feature lists come from `feature-matrix.json`
 * (generated from the product sheet). This file only adds the narrative: what
 * the area is for, how the daily flow runs, and who lives inside it. Keep every
 * claim traceable to a real module — no invented metrics.
 */

export type NarrativeStep = {
  title: string;
  detail: string;
};

export type AreaNarrative = {
  /** Matches the slug in feature-matrix.json */
  slug: string;
  /** Short label used in navigation and cards */
  label: string;
  stage: string;
  headline: string;
  summary: string;
  /** Longer intro paragraph for the area page */
  intro: string;
  dailyFlow: NarrativeStep[];
  outcomes: string[];
  /** Role names as they exist in the product */
  roles: string[];
  /** Panel slugs from productPanels.ts */
  panels: string[];
  icon: string;
  accent: "navy" | "teal" | "orange" | "yellow" | "bronze";
};

export const AREA_NARRATIVES: AreaNarrative[] = [
  {
    slug: "admission",
    label: "Admissions",
    stage: "Where a new family starts",
    headline: "Every enquiry tracked from first call to enrolled student",
    summary:
      "Enquiries, applications, interviews and registration run as one pipeline instead of a diary and a stack of forms.",
    intro:
      "Admission season is where most schools lose information: a parent calls, someone notes it in a register, the form goes to another desk, and nobody can say how many enquiries actually converted. KIDUART runs the whole admission workflow as a single pipeline — enquiry capture, application review, interview scheduling with evaluation, and final registration that creates the student record automatically.",
    dailyFlow: [
      {
        title: "Capture the enquiry",
        detail:
          "Walk-in, phone and referral enquiries are logged with source, class applied for and follow-up owner, so no lead sits untouched.",
      },
      {
        title: "Move the application forward",
        detail:
          "Applications carry documents and status, and the office can see exactly which stage each family is waiting on.",
      },
      {
        title: "Schedule and score interviews",
        detail:
          "Interview slots are scheduled and evaluations recorded against the application instead of on loose sheets.",
      },
      {
        title: "Register and hand off",
        detail:
          "Approved applications become registered students, so admission data flows straight into class allocation and fees.",
      },
    ],
    outcomes: [
      "One pipeline view of every enquiry and application",
      "Interview outcomes attached to the applicant record",
      "Registration that seeds the student profile — no re-typing",
    ],
    roles: ["Admission staff", "School admin", "Principal"],
    panels: ["school-admin", "director"],
    icon: "UserPlus",
    accent: "orange",
  },
  {
    slug: "student-management",
    label: "Student Records",
    stage: "The record everything else reads from",
    headline: "One student profile that carries the whole school year",
    summary:
      "Directory, documents, enrollment, promotion, transfer certificates and a student self-service portal in one place.",
    intro:
      "A student record is not one screen — it is admission details, documents, class and section history, promotions, transfers and the student's own portal access. KIDUART keeps all of it on a single profile, so attendance, fees, exams and communication all read the same source instead of three different registers.",
    dailyFlow: [
      {
        title: "Create the profile once",
        detail:
          "Admission data, guardian details and documents live on one record, with bulk import for existing student data.",
      },
      {
        title: "Enroll into class and section",
        detail:
          "Enrollment ties the student to a class, section and session, which is what attendance and fee allocation use.",
      },
      {
        title: "Promote at year end",
        detail:
          "Class progression runs as a controlled promotion process instead of a manual re-entry exercise.",
      },
      {
        title: "Transfer cleanly",
        detail:
          "Transfer certificate management keeps leaving records, documents and history intact for future verification.",
      },
    ],
    outcomes: [
      "Documents and history on the profile, not in a cupboard",
      "Bulk operations for data cleanup and new sessions",
      "A student portal for assignments and self-service",
    ],
    roles: ["School admin", "Class teacher", "Admin staff", "Student"],
    panels: ["school-admin", "teacher", "student"],
    icon: "Users",
    accent: "navy",
  },
  {
    slug: "academic",
    label: "Academics",
    stage: "The daily teaching engine",
    headline: "Classes, timetable, attendance, curriculum and exams in one academic core",
    summary:
      "The largest area in the platform: calendar, classes and sections, subjects, curriculum, attendance, examinations, diary, discipline and PTM.",
    intro:
      "Academics is where a school actually runs, and it is also where most software stops at a timetable. This area covers the full teaching cycle: academic terms and calendar, classes and sections with class-teacher assignment, subject allocation, curriculum with syllabus and lesson plans, attendance for students and staff, examinations from scheduling to published results, plus class diary, discipline records, houses and parent-teacher meetings.",
    dailyFlow: [
      {
        title: "Set up the session",
        detail:
          "Academic terms, working days, holidays and the school calendar define the year everything else hangs on.",
      },
      {
        title: "Structure classes and subjects",
        detail:
          "Classes, sections, class teachers, subject categories and subject-teacher allocation build the timetable.",
      },
      {
        title: "Run the day",
        detail:
          "Attendance marking, leave requests, class diary entries, assignments and discipline notes happen in the flow of teaching.",
      },
      {
        title: "Assess and publish",
        detail:
          "Exam scheduling, weightage configuration, grading systems, marks entry and result processing lead to published results and report cards.",
      },
    ],
    outcomes: [
      "Attendance and leave handled in one place for students and staff",
      "Exams from schedule to result without parallel spreadsheets",
      "Curriculum, syllabus and lesson plans visible to coordinators",
    ],
    roles: ["Teacher", "Academic coordinator", "Head of department", "Principal"],
    panels: ["academic", "teacher", "school-admin"],
    icon: "GraduationCap",
    accent: "teal",
  },
  {
    slug: "parent-management",
    label: "Parents",
    stage: "The family side of the school",
    headline: "Parents linked to the right children, with their own portal",
    summary:
      "Parent directory, parent-student linking, a communication log and a self-service parent portal.",
    intro:
      "Parents are not a mailing list — each guardian is linked to specific children, sometimes across classes and sometimes across campuses. KIDUART keeps a parent directory with verified links to students, logs what was communicated and when, and gives families a portal where attendance, fees, results and notices are visible without a phone call to the office.",
    dailyFlow: [
      {
        title: "Register the guardian",
        detail:
          "Parent records hold contact details and relationship type, ready to be linked to one or more students.",
      },
      {
        title: "Link to students",
        detail:
          "Parent-student linking controls exactly which children a guardian can see in the portal.",
      },
      {
        title: "Communicate and log it",
        detail:
          "Calls, meetings and messages are recorded in a communication log, so follow-ups have history.",
      },
      {
        title: "Let families self-serve",
        detail:
          "The parent portal answers the routine questions — attendance, dues, results, circulars — on its own.",
      },
    ],
    outcomes: [
      "One guardian record for siblings across classes",
      "Communication history the office can rely on",
      "Fewer walk-in queries for routine information",
    ],
    roles: ["Parent", "Guardian", "Front office", "Class teacher"],
    panels: ["parent", "school-admin", "teacher"],
    icon: "HeartHandshake",
    accent: "yellow",
  },
  {
    slug: "finance-and-fee-management",
    label: "Fees & Finance",
    stage: "Money, without the chase",
    headline: "Fee structures, collection, dues and expenses in one ledger",
    summary:
      "Fee heads, structures and templates, concessions, collection with receipts and refunds, online payments, due tracking and finance reports.",
    intro:
      "Fee work fails when the structure lives in one file, collections in another and reminders in a chat group. Here the fee book itself is the system: fee heads and categories, structures and reusable templates, class and student level allocation, concessions and discounts, collection with receipts, refunds, online payment processing with gateway webhooks, due tracking with reminders, expenses and finance reporting.",
    dailyFlow: [
      {
        title: "Define the fee book",
        detail:
          "Fee heads, structures and templates are configured once per class and session, then allocated to students.",
      },
      {
        title: "Apply concessions correctly",
        detail:
          "Discounts and concessions are recorded against the student, so the payable amount is defensible.",
      },
      {
        title: "Collect and receipt",
        detail:
          "Counter and online payments both produce receipts tied to the student ledger, including refunds when needed.",
      },
      {
        title: "Track dues and report",
        detail:
          "Due tracking drives reminders, while finance reports and expense records close the loop for management.",
      },
    ],
    outcomes: [
      "One dues list instead of scattered follow-ups",
      "Receipts and refunds traceable per student",
      "Collection and expense reporting for leadership",
    ],
    roles: ["Accountant", "Finance staff", "School admin", "Parent"],
    panels: ["finance", "school-admin", "parent"],
    icon: "Wallet",
    accent: "orange",
  },
  {
    slug: "hr-and-staff-management",
    label: "HR & Staff",
    stage: "The team behind the classes",
    headline: "Staff records, attendance, leave, payroll and appraisals together",
    summary:
      "Teacher and staff directories, departments and designations, staff attendance, leave workflow, payroll processing, performance reviews and a teacher portal.",
    intro:
      "Schools usually run HR in three places: a staff list, an attendance register and a salary sheet. This area keeps them in one flow — teaching and non-teaching staff directories, departments and designations, staff attendance, leave requests with approval trails, payroll processing with components and deductions, performance appraisal, and a teacher portal for self-service.",
    dailyFlow: [
      {
        title: "Build the staff structure",
        detail:
          "Departments and designations frame the organisation, then teaching and non-teaching records fill it in.",
      },
      {
        title: "Track attendance and leave",
        detail:
          "Staff attendance and leave requests move through approval instead of paper slips.",
      },
      {
        title: "Run payroll from real data",
        detail:
          "Payroll processing uses the same attendance and leave records, so the salary cycle reconciles itself.",
      },
      {
        title: "Review performance",
        detail:
          "Appraisal records give department heads a documented basis for reviews.",
      },
    ],
    outcomes: [
      "One directory for teaching and non-teaching staff",
      "Leave and attendance feeding payroll directly",
      "Teacher self-service instead of office requests",
    ],
    roles: ["HR staff", "Principal", "Head of department", "Teacher"],
    panels: ["hr", "school-admin", "teacher"],
    icon: "BriefcaseBusiness",
    accent: "bronze",
  },
  {
    slug: "communication",
    label: "Communication",
    stage: "One voice to the school",
    headline: "Announcements, notices, events and messaging that reach the right people",
    summary:
      "Notice board, announcements, event management and messaging over in-app, email and SMS channels.",
    intro:
      "Broadcasting to everyone is easy; reaching exactly one section's parents is what schools actually need. This area covers announcements and notice board management, school event management, and messaging across in-app, email and SMS — targeted at the right classes, sections or staff groups, with a record of what went out.",
    dailyFlow: [
      {
        title: "Choose the audience",
        detail:
          "Notices and announcements are targeted to classes, sections, staff groups or the whole school.",
      },
      {
        title: "Pick the channel",
        detail:
          "In-app messages, email and SMS cover families who check apps and families who only read texts.",
      },
      {
        title: "Publish events",
        detail:
          "Event management keeps the school calendar and circulars aligned instead of contradicting each other.",
      },
      {
        title: "Keep the record",
        detail:
          "Message logs give the office something to check when a parent says they were never informed.",
      },
    ],
    outcomes: [
      "Targeted notices instead of blanket broadcasts",
      "One place to see what the school has communicated",
      "Events and circulars from the same calendar",
    ],
    roles: ["School admin", "Front office", "Teacher", "Parent"],
    panels: ["school-admin", "teacher", "parent"],
    icon: "Megaphone",
    accent: "teal",
  },
  {
    slug: "library-management",
    label: "Library",
    stage: "Circulation without registers",
    headline: "Catalog, membership, issue-return, reservations and fines",
    summary:
      "Book catalog and inventory, library memberships, issuing and borrowing, reservations, fines and library reports.",
    intro:
      "A library register cannot answer simple questions: who has this title, which books never circulate, how much is outstanding in fines. KIDUART gives the librarian a catalog with inventory, member management, issue and return history, reservations for titles in demand, fine handling, and reports that show what the collection is actually doing.",
    dailyFlow: [
      {
        title: "Catalog the collection",
        detail: "Books are cataloged with inventory detail, so copies and availability are known.",
      },
      {
        title: "Enroll members",
        detail: "Students and staff become library members with their own borrowing history.",
      },
      {
        title: "Issue, return, reserve",
        detail: "Circulation and reservations run through one workflow instead of a ledger book.",
      },
      {
        title: "Handle fines and review usage",
        detail: "Fines are tracked automatically and library reports show usage patterns.",
      },
    ],
    outcomes: [
      "Instant answer to “who has this book”",
      "Fines and dues without manual tallying",
      "Usage reports to guide new purchases",
    ],
    roles: ["Librarian", "Student", "Teacher"],
    panels: ["school-admin", "student", "teacher"],
    icon: "BookOpen",
    accent: "bronze",
  },
  {
    slug: "transport-management",
    label: "Transport",
    stage: "Every route accounted for",
    headline: "Routes, vehicles, drivers, tracking and maintenance",
    summary:
      "Transport route management with stops, vehicle fleet records, driver management, live vehicle tracking and maintenance logs.",
    intro:
      "Transport is the area parents ask about most and schools document least. Here routes and stops are planned with students mapped to them, vehicles and drivers have proper records, live tracking shows where a bus is, and maintenance logs keep the fleet compliant instead of reactive.",
    dailyFlow: [
      {
        title: "Plan routes and stops",
        detail: "Routes are defined with stops and assigned vehicles, then students are mapped to stops.",
      },
      {
        title: "Assign drivers and vehicles",
        detail: "Driver and fleet records keep licence, vehicle and route assignments together.",
      },
      {
        title: "Track the trip",
        detail: "Live vehicle tracking answers where-is-the-bus questions with data, not guesswork.",
      },
      {
        title: "Maintain the fleet",
        detail: "Maintenance records make servicing planned work rather than an emergency.",
      },
    ],
    outcomes: [
      "Route, stop and student mapping in one view",
      "Driver and vehicle records ready for inspection",
      "Maintenance history per vehicle",
    ],
    roles: ["Transport manager", "Driver", "School admin", "Parent"],
    panels: ["school-admin", "parent"],
    icon: "Bus",
    accent: "yellow",
  },
  {
    slug: "hostel-management",
    label: "Hostel",
    stage: "Residential care, documented",
    headline: "Rooms, allocation, hostel attendance, mess and visitors",
    summary:
      "Hostel room management, room and bed allocation, hostel attendance, mess or meal management and a visitor log.",
    intro:
      "Boarding operations carry real duty of care, and that means records. This area covers hostel rooms and bed level allocation, hostel attendance separate from class attendance, mess and meal management with preferences, and a visitor log so the warden can answer who came, for whom and when.",
    dailyFlow: [
      {
        title: "Set up rooms",
        detail: "Hostel rooms are configured with capacity, so allocation reflects reality.",
      },
      {
        title: "Allocate beds",
        detail: "Room and bed allocation ties each resident student to a specific place.",
      },
      {
        title: "Take hostel attendance",
        detail: "Residential attendance is tracked independently of classroom attendance.",
      },
      {
        title: "Run mess and visitors",
        detail: "Meal planning and the visitor log complete the daily hostel record.",
      },
    ],
    outcomes: [
      "Bed-level occupancy at a glance",
      "Hostel attendance separate from class attendance",
      "Visitor and mess records for accountability",
    ],
    roles: ["Hostel warden", "School admin", "Parent"],
    panels: ["school-admin", "parent"],
    icon: "Building2",
    accent: "navy",
  },
  {
    slug: "facilities-and-inventory",
    label: "Facilities & Assets",
    stage: "The campus itself",
    headline: "Buildings, floors, wings, rooms and assets on record",
    summary:
      "Campus infrastructure modelled as buildings, floors, wings and rooms, with facilities and asset management.",
    intro:
      "Timetables assume rooms exist, audits assume assets are listed. This area models the campus properly — buildings, floors, wings and rooms — and keeps facilities and asset records against them, so room allocation, maintenance and inventory questions have one answer.",
    dailyFlow: [
      {
        title: "Model the campus",
        detail: "Buildings, floors and wings create the physical structure of the school.",
      },
      {
        title: "Define rooms",
        detail: "Rooms are recorded with purpose and capacity, ready for academic and hostel use.",
      },
      {
        title: "Register assets",
        detail: "Facilities and assets are tracked against the spaces they belong to.",
      },
      {
        title: "Plan upkeep",
        detail: "Records make maintenance and audits a lookup instead of a walkaround.",
      },
    ],
    outcomes: [
      "A single campus map in data form",
      "Assets tied to real rooms",
      "Cleaner audits and room planning",
    ],
    roles: ["School admin", "Maintenance staff", "Principal"],
    panels: ["school-admin", "director"],
    icon: "Warehouse",
    accent: "bronze",
  },
  {
    slug: "reports-and-analytics",
    label: "Reports & Analytics",
    stage: "Decisions, not data entry",
    headline: "Academic, attendance and financial reporting with a custom report builder",
    summary:
      "Academic performance reports, attendance analytics, financial reporting, student report cards, teacher-facing reports, school-wide analytics and a custom report builder.",
    intro:
      "Reporting is where schools spend their evenings. Because attendance, fees, exams and staff data already live in one system, reports come out of the same records: academic performance, attendance analytics, financial reporting, report cards, teacher-facing reports, school-wide analytics, and a custom report builder for the questions no template covers.",
    dailyFlow: [
      {
        title: "Start from live data",
        detail: "Reports read the same records staff already maintain, so there is no export-and-clean step.",
      },
      {
        title: "Use ready templates",
        detail: "Academic, attendance, financial and student reports cover the recurring requests.",
      },
      {
        title: "Build the unusual one",
        detail: "The custom report builder handles board, trustee and management specific formats.",
      },
      {
        title: "Share the view",
        detail: "School analytics gives leadership a rollup while teachers keep their own focused reports.",
      },
    ],
    outcomes: [
      "Report cards from live academic data",
      "Attendance and fee trends without spreadsheets",
      "Custom formats for management and boards",
    ],
    roles: ["Principal", "Academic coordinator", "Accountant", "Teacher"],
    panels: ["director", "school-admin", "academic", "finance"],
    icon: "BarChart3",
    accent: "teal",
  },
  {
    slug: "dashboard-and-insights",
    label: "Dashboards",
    stage: "Everyone's first screen",
    headline: "Role-based dashboards and a sidebar that adapts to permissions",
    summary:
      "Admin dashboard widgets plus focused teacher, parent and student dashboards, with dynamic role-based navigation.",
    intro:
      "The same system has to look different to a principal, a teacher, a parent and a student. Dashboard widgets give admins the operational picture, while teacher, parent and student dashboards stay deliberately narrow. Navigation is generated from roles and permissions, so people only see the modules they are entitled to.",
    dailyFlow: [
      {
        title: "Sign in to your view",
        detail: "Each role lands on a dashboard built for its job, not a generic home screen.",
      },
      {
        title: "See what needs action",
        detail: "Admin widgets surface attendance, fee and academic signals for the day.",
      },
      {
        title: "Navigate by permission",
        detail: "The dynamic sidebar shows only the modules a role is allowed to open.",
      },
      {
        title: "Drill into the module",
        detail: "Every widget is a route into the underlying record, not a dead tile.",
      },
    ],
    outcomes: [
      "No training on “where do I click”",
      "Permissions reflected in navigation itself",
      "Focused portals for families and students",
    ],
    roles: ["School admin", "Teacher", "Parent", "Student"],
    panels: ["school-admin", "teacher", "parent", "student"],
    icon: "LayoutDashboard",
    accent: "navy",
  },
  {
    slug: "security-and-authentication",
    label: "Security & Access",
    stage: "Trust the boring part",
    headline: "Authentication, MFA, sessions, roles, IP and geo controls",
    summary:
      "Login and password security, multi-factor authentication, OAuth, verification, session and token management, role delegation, IP allow and block lists, geo restriction and API keys.",
    intro:
      "School data is student data, so access control is not an add-on. This is the second largest area in the platform: login and password security with MFA, email and phone verification, OAuth sign-in, password reset flows, session and token management, role and permission delegation, IP allow or block lists, geo-restriction and API key management for integrations.",
    dailyFlow: [
      {
        title: "Verify the person",
        detail: "Password policy, email and phone verification and MFA establish who is signing in.",
      },
      {
        title: "Control the session",
        detail: "Session listing, revocation and token handling keep access current, not permanent.",
      },
      {
        title: "Scope the permissions",
        detail: "Roles and delegation decide which modules and actions each person can reach.",
      },
      {
        title: "Restrict the surface",
        detail: "IP lists, geo-restriction and API keys limit where and how the system can be accessed.",
      },
    ],
    outcomes: [
      "MFA and session control for staff accounts",
      "Role-based access instead of shared logins",
      "Network-level restrictions for sensitive panels",
    ],
    roles: ["System admin", "School admin", "Principal"],
    panels: ["system-admin", "school-admin"],
    icon: "ShieldCheck",
    accent: "navy",
  },
  {
    slug: "organization-management",
    label: "Multi-Campus HQ",
    stage: "When one school becomes a group",
    headline: "Run several campuses from one organisation layer",
    summary:
      "Organisation dashboard and analytics, multi-school administration, school admin accounts, cross-school reports, org settings, subscription and billing, and org-level support.",
    intro:
      "Groups and trusts need a layer above the school: which campus is behind on fees, who has admin rights where, and one subscription instead of five. Organisation management provides an org dashboard with health analytics, multi-school administration, school admin account control, consolidated and custom cross-school reports, organisation settings and branding, org-level subscription and billing, and a support desk at group level.",
    dailyFlow: [
      {
        title: "Set up the organisation",
        detail: "Profile, branding, preferences and academic session are configured once for the group.",
      },
      {
        title: "Add campuses",
        detail: "Multi-school administration brings each campus in with its own data boundary.",
      },
      {
        title: "Delegate school admins",
        detail: "School admin account management controls who runs which campus.",
      },
      {
        title: "Compare and consolidate",
        detail: "Cross-school reports and org analytics compare campuses on the same definitions.",
      },
    ],
    outcomes: [
      "One HQ view across campuses",
      "Consolidated reporting on shared definitions",
      "Group-level subscription and billing",
    ],
    roles: ["Organisation owner", "Organisation admin", "Director", "Group finance"],
    panels: ["organization", "director", "system-admin"],
    icon: "Network",
    accent: "teal",
  },
  {
    slug: "support",
    label: "Support Desk",
    stage: "When something needs a human",
    headline: "Support tickets that stay attached to your school",
    summary: "Support ticket management for schools and organisations, with replies and status tracking.",
    intro:
      "Questions do not stop after onboarding. Support ticket management lets school and organisation users raise issues in the product, track status, and keep the conversation attached to their own account instead of scattered across personal inboxes.",
    dailyFlow: [
      {
        title: "Raise the ticket",
        detail: "Staff open a ticket from inside the product with the context already attached.",
      },
      {
        title: "Track the status",
        detail: "Ticket status shows what is being worked on and what is waiting on the school.",
      },
      {
        title: "Reply in thread",
        detail: "Replies stay on the ticket, so history is preserved for the next person who asks.",
      },
      {
        title: "Escalate at org level",
        detail: "Organisations can see and manage tickets across their campuses.",
      },
    ],
    outcomes: [
      "In-product support instead of chasing email threads",
      "Status visibility for the school",
      "Org-level view for multi-campus groups",
    ],
    roles: ["School admin", "Organisation admin", "Support staff"],
    panels: ["school-admin", "organization"],
    icon: "LifeBuoy",
    accent: "orange",
  },
];

export const AREA_NARRATIVE_BY_SLUG: Record<string, AreaNarrative> = Object.fromEntries(
  AREA_NARRATIVES.map((area) => [area.slug, area]),
);

export function getAreaNarrative(slug: string): AreaNarrative | undefined {
  return AREA_NARRATIVE_BY_SLUG[slug];
}
