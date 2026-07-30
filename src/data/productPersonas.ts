/**
 * Role-first solution pages. Each challenge names the manual problem, then points
 * at the module that removes it — so the copy stays checkable against
 * feature-matrix.json and the backend rather than being aspirational.
 */

import type { AccentName } from "@/components/product/ProductPrimitives";

export type PersonaChallenge = {
  problem: string;
  cost: string;
  solution: string;
  /** Module references — { area: category slug, module: module name } */
  modules: { area: string; module: string }[];
};

export type PersonaFaq = { q: string; a: string };

export type ProductPersona = {
  slug: string;
  order: number;
  /** Navigation label, e.g. "Teachers" */
  label: string;
  /** Page label, e.g. "For teachers" */
  pageLabel: string;
  roleNames: string[];
  stage: string;
  headline: string;
  summary: string;
  intro: string;
  challenges: PersonaChallenge[];
  dayInLife: { when: string; what: string }[];
  toolsYouGet: string[];
  /** Panel slugs from productPanels.ts */
  panels: string[];
  /** Category slugs from feature-matrix.json */
  areas: string[];
  faqs: PersonaFaq[];
  image: string;
  imageAlt: string;
  icon: string;
  accent: AccentName;
};

export const PRODUCT_PERSONAS: ProductPersona[] = [
  {
    slug: "organizations",
    order: 1,
    label: "School Groups",
    pageLabel: "For school groups and trusts",
    roleNames: ["Organisation owner", "Organisation admin", "Group manager", "Trustee"],
    stage: "Multi-campus leadership",
    headline: "Run four campuses without four versions of the truth",
    summary:
      "Group leadership gets one organisation layer: campus comparison on shared definitions, delegated school admins, consolidated reports and a single subscription.",
    intro:
      "The hardest part of running a group is not any single campus — it is that every campus reports differently. One school counts attendance monthly, another weekly; one sends fee summaries in a spreadsheet, another on WhatsApp. KIDUART puts an organisation layer above the schools so definitions are shared, each campus keeps its own data boundary, and the group sees a rollup it can actually act on.",
    challenges: [
      {
        problem: "Each campus reports in its own format",
        cost: "Board meetings start with reconciling numbers instead of deciding anything.",
        solution:
          "Consolidated and custom cross-school reports read the same fields from every campus, so comparisons are structural rather than negotiated.",
        modules: [
          { area: "organization-management", module: "Cross-School Reports" },
          { area: "organization-management", module: "Analytics" },
        ],
      },
      {
        problem: "No clear record of who can do what, where",
        cost: "Access spreads through informal permissions and leftover logins.",
        solution:
          "School admin account management delegates each campus explicitly, and org member roles control the group layer itself.",
        modules: [
          { area: "organization-management", module: "School Admin Management" },
          { area: "organization-management", module: "Member Management" },
        ],
      },
      {
        problem: "Separate software bills and renewal dates per campus",
        cost: "Finance chases invoices instead of planning the year.",
        solution:
          "Org-level subscription and billing keeps plans, add-ons, invoices and payment methods in one place for the whole group.",
        modules: [
          { area: "organization-management", module: "Subscription" },
          { area: "organization-management", module: "Subscription & Billing" },
        ],
      },
      {
        problem: "New campuses take a term to set up",
        cost: "Growth is limited by admin capacity, not demand.",
        solution:
          "Multi-school administration adds a campus with the group's session, branding and preferences already defined.",
        modules: [
          { area: "organization-management", module: "School Management" },
          { area: "organization-management", module: "Academic Session" },
        ],
      },
    ],
    dayInLife: [
      { when: "Monday morning", what: "Open the organisation dashboard and read the health score per campus." },
      { when: "Midweek", what: "Compare attendance and collection across campuses on the same definitions." },
      { when: "Month end", what: "Generate a consolidated report for the board from live data." },
      { when: "Quarter end", what: "Review subscription usage, invoices and add-ons at group level." },
    ],
    toolsYouGet: [
      "Organisation dashboard with campus health analytics",
      "School list with comparison and headcounts",
      "Delegated school admin accounts per campus",
      "Consolidated and custom cross-school reports",
      "Group subscription, invoices and billing portal",
      "Organisation-level support tickets",
    ],
    panels: ["organization", "system-admin", "director"],
    areas: ["organization-management", "reports-and-analytics", "support"],
    faqs: [
      {
        q: "Does each campus see the other campuses' data?",
        a: "No. Data is isolated per school, and the organisation layer only reads what it is entitled to for reporting. School staff continue to work inside their own campus.",
      },
      {
        q: "Can campuses keep different fee structures and sessions?",
        a: "Yes. Fee structures, classes and sections are configured per school, while the organisation defines shared preferences such as branding, reporting scope and subscription.",
      },
      {
        q: "How is billing handled for a group?",
        a: "Subscription and billing can be managed at organisation level with one plan, add-ons and consolidated invoices instead of separate agreements per campus.",
      },
    ],
    image: "/images/panels/organization.png",
    imageAlt: "Multi-campus organisation dashboard comparing schools",
    icon: "Network",
    accent: "teal",
  },
  {
    slug: "school-administration",
    order: 2,
    label: "School Leadership",
    pageLabel: "For principals and school leadership",
    roleNames: ["Principal", "Vice principal", "School owner", "Director"],
    stage: "Running one school well",
    headline: "Stop asking three departments for the same answer",
    summary:
      "Leadership sees attendance, academics, fees and staff from one place, with reports that come from the records staff already maintain.",
    intro:
      "A principal's week is spent chasing information that already exists somewhere in the building: the attendance register, the fee counter, the exam sheets, the leave file. When those live in one platform, the weekly review becomes reading instead of collecting. KIDUART gives leadership school-wide analytics on top of the same records teachers and accountants work in daily, plus the report builder for formats a board or inspection asks for.",
    challenges: [
      {
        problem: "Information arrives late and pre-filtered",
        cost: "Decisions are made on last month's picture.",
        solution:
          "School-wide analytics and role dashboards read live records, so leadership sees the same day's data as the staff entering it.",
        modules: [
          { area: "reports-and-analytics", module: "School Analytics" },
          { area: "dashboard-and-insights", module: "Dashboard" },
        ],
      },
      {
        problem: "Exam results take weeks to consolidate",
        cost: "Interventions happen after the term, not during it.",
        solution:
          "Exam scheduling, marks entry, result processing and report cards run in one cycle, with academic performance reports on top.",
        modules: [
          { area: "academic", module: "Examination" },
          { area: "reports-and-analytics", module: "Academic Reports" },
        ],
      },
      {
        problem: "Staff position is unclear at any given moment",
        cost: "Substitutions and appraisals are handled from memory.",
        solution:
          "Staff directories, attendance, leave approvals and appraisal records give one view of the team.",
        modules: [
          { area: "hr-and-staff-management", module: "Staff Directory" },
          { area: "hr-and-staff-management", module: "Leave Management" },
        ],
      },
      {
        problem: "Board and inspection formats need manual assembly",
        cost: "Days lost to formatting the same underlying numbers.",
        solution:
          "The custom report builder saves the formats leadership needs, ready to regenerate each cycle.",
        modules: [
          { area: "reports-and-analytics", module: "Custom Reports" },
          { area: "reports-and-analytics", module: "Financial Reports" },
        ],
      },
    ],
    dayInLife: [
      { when: "Before assembly", what: "Check today's attendance and staff availability on the dashboard." },
      { when: "Mid-morning", what: "Review the fee dues list and any escalations from the front office." },
      { when: "Afternoon", what: "Open academic performance reports for the sections under review." },
      { when: "Friday", what: "Regenerate the weekly leadership report — no manual collation." },
    ],
    toolsYouGet: [
      "School-wide analytics dashboard",
      "Attendance analytics by class and section",
      "Academic performance and result trends",
      "Fee collection, dues and expense summaries",
      "Staff attendance, leave and appraisal records",
      "Custom report builder for board formats",
    ],
    panels: ["director", "school-admin", "academic"],
    areas: ["reports-and-analytics", "academic", "hr-and-staff-management", "finance-and-fee-management"],
    faqs: [
      {
        q: "Do I need to learn every module to use the leadership view?",
        a: "No. The leadership view is a reporting and analytics surface. It reads from the modules staff operate, and each widget links into the underlying record if you want the detail.",
      },
      {
        q: "Can I restrict what other staff see?",
        a: "Yes. Roles and permissions decide which modules and actions each person can reach, and navigation is generated from those entitlements.",
      },
      {
        q: "What if our school already has fee data in spreadsheets?",
        a: "Fee structures, students and staff can be imported, and bulk operations exist for student data specifically so you do not start from an empty system.",
      },
    ],
    image: "/images/panels/director.png",
    imageAlt: "Principal reviewing school performance analytics",
    icon: "Compass",
    accent: "navy",
  },
  {
    slug: "administrators",
    order: 3,
    label: "Admin Staff",
    pageLabel: "For school admin and front-office staff",
    roleNames: ["School admin", "Admin staff", "Receptionist", "Clerk"],
    stage: "The busiest desk in the school",
    headline: "The desk everyone walks up to, finally with one system behind it",
    summary:
      "Admissions, student and parent records, class allocation, notices, transport, hostel and library supervision from one workspace instead of six registers.",
    intro:
      "The front office absorbs everything: a parent asking about a bus stop, a teacher needing a section list, an enquiry walking in, a certificate to be issued before lunch. Those requests only feel chaotic because the answers live in different places. KIDUART puts them on one desk — admission pipeline, student and parent records, class and section administration, communication, and the transport, hostel and library desks in the same workspace.",
    challenges: [
      {
        problem: "Enquiries are noted in a register and forgotten",
        cost: "Admissions leak between the first call and the form.",
        solution:
          "The admission workflow tracks enquiry, application, interview and registration with an owner at each stage.",
        modules: [{ area: "admission", module: "Admission Workflow" }],
      },
      {
        problem: "Student information is spread across files",
        cost: "Every request becomes a search through cupboards.",
        solution:
          "One student profile holds admission data, documents, enrollment history, promotions and transfers.",
        modules: [
          { area: "student-management", module: "Student Directory" },
          { area: "student-management", module: "Documents" },
        ],
      },
      {
        problem: "Parents call for information the school already sent",
        cost: "Hours a week answering the same four questions.",
        solution:
          "Targeted notices with delivery records, plus a parent portal that answers attendance, fees and results on its own.",
        modules: [
          { area: "communication", module: "Notices" },
          { area: "parent-management", module: "Parent Portal" },
        ],
      },
      {
        problem: "Certificates and transfers are manual paperwork",
        cost: "Requests pile up around session change.",
        solution:
          "Transfer certificate management and document handling keep leaving records complete and repeatable.",
        modules: [
          { area: "student-management", module: "Transfer" },
          { area: "student-management", module: "Bulk Operations" },
        ],
      },
    ],
    dayInLife: [
      { when: "Before first bell", what: "Check the admin dashboard for absences, dues and pending approvals." },
      { when: "Morning", what: "Log new enquiries and move applications to the interview stage." },
      { when: "Afternoon", what: "Issue documents, update parent links, publish a class notice." },
      { when: "End of day", what: "Review transport and hostel entries flagged by staff." },
    ],
    toolsYouGet: [
      "Admin dashboard widgets for the day's exceptions",
      "Admission pipeline from enquiry to registration",
      "Student, parent and staff directories",
      "Class, section and timetable administration",
      "Targeted notices with delivery records",
      "Transport, hostel, library and facilities desks",
    ],
    panels: ["school-admin", "academic", "finance"],
    areas: ["admission", "student-management", "parent-management", "communication"],
    faqs: [
      {
        q: "How many registers does this replace?",
        a: "Admission, student, parent, attendance, library circulation, transport and hostel records all live in the platform, so the parallel paper registers stop being the source of truth.",
      },
      {
        q: "Can we bulk import our existing student list?",
        a: "Yes. Bulk student data operations exist specifically for imports and clean-up when a school moves onto the platform.",
      },
      {
        q: "Is training needed for front-office staff?",
        a: "Navigation is generated from the role, so the desk sees its own modules only. We walk your team through their actual workflows during onboarding.",
      },
    ],
    image: "/images/panels/school-admin.png",
    imageAlt: "School front office staff working with student records",
    icon: "Building",
    accent: "orange",
  },
  {
    slug: "academic-coordinators",
    order: 4,
    label: "Academic Coordinators",
    pageLabel: "For academic coordinators and heads of department",
    roleNames: ["Academic coordinator", "Head of department", "Senior teacher"],
    stage: "Holding the academic plan",
    headline: "Curriculum, timetable and exams that stay in sync all term",
    summary:
      "Terms and calendar, curriculum with syllabus and lesson plans, subject-teacher allocation, timetable and the full examination configuration in one panel.",
    intro:
      "Coordinators are the people who notice when the plan and the reality drift apart: a syllabus behind schedule, a teacher double-booked, an exam weightage that does not match the grading system. KIDUART keeps the academic plan in one place — calendar and terms, curriculum with lesson plans, subject and teacher allocation, timetable, and the examination cycle from weightage to published results.",
    challenges: [
      {
        problem: "Syllabus progress is only known by asking teachers",
        cost: "Gaps surface at revision time, too late to fix.",
        solution:
          "Curriculum, syllabus and lesson planning make coverage visible while the term is still running.",
        modules: [{ area: "academic", module: "Curriculum" }],
      },
      {
        problem: "Timetable changes break silently",
        cost: "Clashes are discovered by teachers standing in corridors.",
        solution:
          "Timetable management with class teacher assignment and subject allocation keeps the schedule consistent.",
        modules: [
          { area: "academic", module: "Classes & Sections" },
          { area: "academic", module: "Subjects" },
        ],
      },
      {
        problem: "Exam configuration lives in one person's head",
        cost: "Every assessment cycle is rebuilt from scratch.",
        solution:
          "Exam scheduling, weightage configuration and grading systems are set once and reused across cycles.",
        modules: [{ area: "academic", module: "Examination" }],
      },
      {
        problem: "Calendar, holidays and PTM dates contradict circulars",
        cost: "Parents receive two versions of the same date.",
        solution:
          "Academic terms, holidays, working days and PTM scheduling come from one calendar that communication reads from.",
        modules: [
          { area: "academic", module: "Academic Calendar" },
          { area: "academic", module: "Parent-Teacher Meetings" },
        ],
      },
    ],
    dayInLife: [
      { when: "Start of term", what: "Set terms, working days and holidays; publish the timetable." },
      { when: "Weekly", what: "Review lesson plan and syllabus coverage per subject." },
      { when: "Before exams", what: "Confirm weightage, grading system and the exam schedule." },
      { when: "After results", what: "Read academic performance reports and plan interventions." },
    ],
    toolsYouGet: [
      "Academic terms, calendar, holidays and working days",
      "Curriculum, syllabus and lesson plan tracking",
      "Subject categories and subject-teacher allocation",
      "Timetable management and class teacher assignment",
      "Exam scheduling, weightage and grading systems",
      "Result processing, report cards and PTM scheduling",
    ],
    panels: ["academic", "teacher", "director"],
    areas: ["academic", "reports-and-analytics"],
    faqs: [
      {
        q: "Can different classes use different grading systems?",
        a: "Grading systems and exam weightage are configurable, so senior and junior sections can follow different assessment rules.",
      },
      {
        q: "Does the timetable handle teacher absences?",
        a: "Timetable and class teacher assignment give you the structure to reassign periods; substitute teacher roles exist so cover is recorded rather than informal.",
      },
      {
        q: "Where do lesson plans live?",
        a: "Lesson planning sits inside the curriculum module alongside syllabus management, so plans stay attached to the subject and class they belong to.",
      },
    ],
    image: "/images/panels/academic.png",
    imageAlt: "Academic coordinator planning timetable and curriculum",
    icon: "CalendarRange",
    accent: "teal",
  },
  {
    slug: "teachers",
    order: 5,
    label: "Teachers",
    pageLabel: "For teachers",
    roleNames: ["Teacher", "Class teacher", "Substitute teacher", "Teaching assistant"],
    stage: "The classroom",
    headline: "Software that gets out of the way before the second bell",
    summary:
      "Attendance in a few taps, marks entry for your own subjects, class diary, assignments and your own leave — nothing else on screen.",
    intro:
      "Teachers do not need a school ERP; they need four things to take less time. Marking attendance, recording marks, posting the diary and setting assignments should be the fastest part of the day, not homework after school. The teacher workspace shows only the classes you own, and everything you enter flows onward automatically — parents see the absence, leadership sees the trend, report cards read your marks.",
    challenges: [
      {
        problem: "Attendance is marked on paper, then typed again",
        cost: "The same information handled twice, every day.",
        solution:
          "One-tap class attendance marking, with absence information reaching parents without a second step.",
        modules: [{ area: "academic", module: "Attendance" }],
      },
      {
        problem: "Marks live in personal spreadsheets",
        cost: "Report card season becomes a data-entry marathon.",
        solution:
          "Marks entry against allocated subjects feeds result processing and report cards directly.",
        modules: [{ area: "academic", module: "Examination" }],
      },
      {
        problem: "Homework and diary notes are inconsistent",
        cost: "Parents ask teachers individually what was assigned.",
        solution:
          "Class diary and assignments are posted once and visible to students and parents in their portals.",
        modules: [
          { area: "academic", module: "Class Diary" },
          { area: "academic", module: "Assignments" },
        ],
      },
      {
        problem: "Leave and personal records go through the office",
        cost: "Simple requests take days and paper.",
        solution:
          "The teacher portal handles leave requests, profile details and teacher-facing reports directly.",
        modules: [
          { area: "hr-and-staff-management", module: "Teacher Portal" },
          { area: "hr-and-staff-management", module: "Leave Management" },
        ],
      },
    ],
    dayInLife: [
      { when: "First period", what: "Open today's timetable and mark attendance in a few taps." },
      { when: "Between classes", what: "Post the class diary entry and any homework." },
      { when: "Free period", what: "Enter marks for the last assessment; check submissions." },
      { when: "Before leaving", what: "Raise a leave request or review your own reports." },
    ],
    toolsYouGet: [
      "Teacher dashboard for today's classes",
      "One-tap attendance marking",
      "Marks entry for your allocated subjects",
      "Class diary and homework log",
      "Assignments with submission tracking",
      "Own leave requests, profile and reports",
    ],
    panels: ["teacher", "academic"],
    areas: ["academic", "hr-and-staff-management", "communication"],
    faqs: [
      {
        q: "Will I see other teachers' classes?",
        a: "No. The workspace is scoped to the classes and subjects allocated to you, which is also what keeps it fast to use.",
      },
      {
        q: "Can I mark attendance without internet in class?",
        a: "The platform is web-based and needs a connection to save. Where connectivity is unreliable, schools typically mark from the staff room or a device on school Wi-Fi.",
      },
      {
        q: "Do parents see my diary entries immediately?",
        a: "Class diary and assignment entries appear in the parent and student portals once posted, which is what removes the individual follow-up messages.",
      },
    ],
    image: "/images/panels/teacher.png",
    imageAlt: "Teacher marking attendance on a tablet",
    icon: "ClipboardCheck",
    accent: "yellow",
  },
  {
    slug: "accountants",
    order: 6,
    label: "Accountants",
    pageLabel: "For accountants and finance teams",
    roleNames: ["Accountant", "Finance officer", "Clerk"],
    stage: "Fees and finance",
    headline: "One fee book, one dues list, one version of every receipt",
    summary:
      "Fee heads, structures and templates, concessions, counter and online collection, receipts, refunds, due reminders, expenses and finance reports.",
    intro:
      "Fee collection breaks when the structure, the payments and the follow-ups live in three places. Accounts then spends the month reconciling instead of collecting. In KIDUART the fee book is the system: define heads and structures once, allocate to classes or students, apply concessions on the record, collect at the counter or online, and let due tracking drive reminders. Every receipt and refund stays attached to the student ledger.",
    challenges: [
      {
        problem: "Fee structures are rebuilt every session",
        cost: "Errors carry into invoices and parent disputes.",
        solution:
          "Fee heads, structures and reusable templates are configured once and allocated per class or student.",
        modules: [{ area: "finance-and-fee-management", module: "Fee Structure" }],
      },
      {
        problem: "Concessions are informal and hard to defend",
        cost: "Payable amounts differ depending on who is asked.",
        solution:
          "Concessions and discounts are recorded against the student so the payable figure is traceable.",
        modules: [{ area: "finance-and-fee-management", module: "Fee Structure" }],
      },
      {
        problem: "Follow-ups happen through chats and memory",
        cost: "The same families are chased twice while others are missed.",
        solution:
          "Due tracking produces one dues list with reminder history, so follow-up is systematic.",
        modules: [{ area: "finance-and-fee-management", module: "Due Management" }],
      },
      {
        problem: "Online payments and counter receipts do not reconcile",
        cost: "Month-end closes late, every month.",
        solution:
          "Counter collection, online payment processing with gateway webhooks, receipts and refunds all post to the same ledger, with finance reports on top.",
        modules: [
          { area: "finance-and-fee-management", module: "Fee Collection" },
          { area: "finance-and-fee-management", module: "Finance Reports" },
        ],
      },
    ],
    dayInLife: [
      { when: "Morning", what: "Reconcile yesterday's online payments against the ledger." },
      { when: "Counter hours", what: "Collect payments and issue receipts tied to the student record." },
      { when: "Afternoon", what: "Work the dues list and send reminders to pending families." },
      { when: "Month end", what: "Run collection, expense and outstanding reports." },
    ],
    toolsYouGet: [
      "Fee heads, structures, templates and allocations",
      "Concession and discount records per student",
      "Counter and online collection with receipts",
      "Refund handling on the student ledger",
      "Due tracker with reminder history",
      "Expense records and finance reports",
    ],
    panels: ["finance", "school-admin", "director"],
    areas: ["finance-and-fee-management", "reports-and-analytics"],
    faqs: [
      {
        q: "Which payment methods are supported?",
        a: "Counter collection is recorded directly, and online payments are processed through supported gateways with webhooks so status updates post back automatically.",
      },
      {
        q: "Can parents pay partially or in instalments?",
        a: "Fee structures support instalment-style allocation, and due tracking shows what remains outstanding per student after each payment.",
      },
      {
        q: "Do refunds stay on record?",
        a: "Yes. Refund management sits inside fee collection so refunds are part of the same ledger rather than an offline adjustment.",
      },
    ],
    image: "/images/panels/finance.png",
    imageAlt: "Fee receipts, online payment and accounts view",
    icon: "Wallet",
    accent: "orange",
  },
  {
    slug: "parents",
    order: 7,
    label: "Parents",
    pageLabel: "For parents",
    roleNames: ["Parent", "Guardian"],
    stage: "The family view",
    headline: "Attendance, fees and results without calling the school office",
    summary:
      "One portal per family: every linked child's attendance, dues and payments, results, circulars, PTM slots and transport details.",
    intro:
      "Most parent frustration is not about the school — it is about not knowing. Was my child marked present today, what is still pending on fees, when are results out, which bus stop was changed. The parent portal answers those questions for each linked child, keeps circulars in one place, and lets you pay online instead of visiting a counter during work hours.",
    challenges: [
      {
        problem: "Information arrives through forwarded messages",
        cost: "Important notices get lost in group chats.",
        solution:
          "Notices, announcements and events are delivered to the portal and to your channel, with the school able to confirm delivery.",
        modules: [
          { area: "communication", module: "Notices" },
          { area: "communication", module: "Announcements" },
        ],
      },
      {
        problem: "Absences are known days later",
        cost: "Conversations at home happen too late.",
        solution:
          "Attendance records are visible per child, with same-day absence information rather than a monthly summary.",
        modules: [{ area: "academic", module: "Attendance" }],
      },
      {
        problem: "Fee status is unclear until a reminder arrives",
        cost: "Late fees and awkward conversations at the counter.",
        solution:
          "Dues, payment history and receipts are visible in the portal, with online payment available.",
        modules: [
          { area: "finance-and-fee-management", module: "Due Management" },
          { area: "finance-and-fee-management", module: "Fee Collection" },
        ],
      },
      {
        problem: "Siblings mean separate conversations",
        cost: "The same parent tracks two classes in two ways.",
        solution:
          "Parent-student linking puts every linked child under one login, including across classes.",
        modules: [{ area: "parent-management", module: "Parent Linking" }],
      },
    ],
    dayInLife: [
      { when: "Morning", what: "See whether your child was marked present." },
      { when: "Anytime", what: "Check dues and pay online with a receipt on record." },
      { when: "Exam season", what: "Open published results and report cards." },
      { when: "As needed", what: "Read circulars, check PTM slots and transport details." },
    ],
    toolsYouGet: [
      "Attendance record for each linked child",
      "Fee dues, payment history and receipts",
      "Results and report cards when published",
      "Notices, announcements and school events",
      "PTM schedule and communication history",
      "Transport route and stop information",
    ],
    panels: ["parent"],
    areas: ["parent-management", "communication", "finance-and-fee-management"],
    faqs: [
      {
        q: "Is there a mobile app for parents?",
        a: "The parent portal works on mobile web today. A native parent app is in development — we will announce it when it is ready rather than promise a date.",
      },
      {
        q: "Can both parents have access?",
        a: "Yes. Guardians are separate records linked to the student, so more than one guardian can have their own login.",
      },
      {
        q: "What if my child changes class or campus?",
        a: "Enrollment, promotion and transfer are handled on the student record, so the portal follows the child rather than the class.",
      },
    ],
    image: "/images/panels/parent.png",
    imageAlt: "Parent checking attendance and fees on a phone",
    icon: "HeartHandshake",
    accent: "yellow",
  },
  {
    slug: "students",
    order: 8,
    label: "Students",
    pageLabel: "For students",
    roleNames: ["Student", "Prefect", "Head boy or girl"],
    stage: "The learner view",
    headline: "Timetable, assignments, attendance and results in one login",
    summary:
      "A small, focused portal: what is on today, what is due, what was scored, and what is borrowed from the library.",
    intro:
      "Students should not need to learn an ERP. The student portal keeps the surface deliberately small — personal timetable, assignments with submission, attendance history, published results, library borrowings and school notices. It works on a shared phone, and everything shown is the same record the school works from, so there is no version confusion before an exam.",
    challenges: [
      {
        problem: "Assignment details spread across notebooks and chats",
        cost: "Work is missed because the brief was unclear.",
        solution:
          "Assignments with submission status keep the task, deadline and upload in one place.",
        modules: [
          { area: "academic", module: "Assignments" },
          { area: "student-management", module: "Student Portal" },
        ],
      },
      {
        problem: "Timetable changes are announced verbally",
        cost: "Students arrive prepared for the wrong period.",
        solution:
          "Personal timetable and the academic calendar update from the same schedule staff maintain.",
        modules: [
          { area: "academic", module: "Classes & Sections" },
          { area: "academic", module: "Academic Calendar" },
        ],
      },
      {
        problem: "Attendance shortfall is discovered too late",
        cost: "No chance to correct before it affects eligibility.",
        solution: "Own attendance record and leave requests are visible through the term.",
        modules: [{ area: "academic", module: "Attendance" }],
      },
      {
        problem: "Library dues are a surprise",
        cost: "Fines accumulate quietly.",
        solution: "Borrowings, reservations and dues are visible in the portal.",
        modules: [
          { area: "library-management", module: "Borrowing" },
          { area: "library-management", module: "Fines" },
        ],
      },
    ],
    dayInLife: [
      { when: "Morning", what: "Check today's timetable and any notices." },
      { when: "After class", what: "Open pending assignments and submit work." },
      { when: "Weekly", what: "Review attendance and library borrowings." },
      { when: "Result day", what: "Read published results and report cards." },
    ],
    toolsYouGet: [
      "Personal timetable and academic calendar",
      "Assignments with submission status",
      "Own attendance record and leave requests",
      "Published results and report cards",
      "Library borrowings, dues and reservations",
      "School notices and events",
    ],
    panels: ["student"],
    areas: ["student-management", "academic", "library-management"],
    faqs: [
      {
        q: "Can students see other students' marks?",
        a: "No. The student portal is scoped to the signed-in student's own records.",
      },
      {
        q: "How are assignments submitted?",
        a: "Through the student assignment submission portal, so the teacher sees submission status against the assignment rather than collecting files separately.",
      },
      {
        q: "Does the portal work on a phone?",
        a: "Yes, it is web-based and designed to stay usable on a shared or low-end phone.",
      },
    ],
    image: "/images/panels/student.png",
    imageAlt: "Student portal with timetable and assignments",
    icon: "BookMarked",
    accent: "teal",
  },
];

export const PERSONA_BY_SLUG: Record<string, ProductPersona> = Object.fromEntries(
  PRODUCT_PERSONAS.map((persona) => [persona.slug, persona]),
);

export const PERSONA_SLUGS = PRODUCT_PERSONAS.map((persona) => persona.slug);

export function getPersona(slug: string): ProductPersona | undefined {
  return PERSONA_BY_SLUG[slug];
}
