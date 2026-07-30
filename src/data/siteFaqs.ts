import { pricingFaqs } from "@/data/pricingFaqs";

export type SiteFaqItem = { q: string; a: string };

export type SiteFaqGroup = {
  id: string;
  title: string;
  blurb: string;
  icon: string;
  items: SiteFaqItem[];
};

/**
 * Answers are written against the shipped product: 16 module areas, 90 modules,
 * 1368 features, 10 role panels. Where something is not built yet, the answer
 * says so instead of hedging.
 */
export const SITE_FAQ_GROUPS: SiteFaqGroup[] = [
  {
    id: "modules",
    title: "Modules and features",
    blurb: "What the product actually covers, and how deep each area goes.",
    icon: "Layers",
    items: [
      {
        q: "How many modules does KIDUART actually have?",
        a: "The product is organised into 16 module areas containing 90 functional modules, 137 sub-modules and 1,368 individual features. Areas include Organisation Management, Academic, Admission, Student Management, Parent Management, HR & Staff, Finance & Fee Management, Communication, Library, Transport, Hostel, Facilities & Inventory, Reports & Analytics, Dashboard & Insights, Security & Authentication, and Support. Every one of those areas has its own page on this site with the full module list.",
      },
      {
        q: "Which area is the deepest?",
        a: "Academic, with 338 features across 11 modules — attendance, timetable, examinations, assignments, curriculum, class diary, discipline, houses and parent-teacher meetings all live there. HR & Staff Management is next at 176 features, then Security & Authentication at 163 and Finance & Fee Management at 105.",
      },
      {
        q: "Do we have to take all 16 areas?",
        a: "No. A day school with no boarding does not need Hostel Management, and a school that outsources buses does not need Transport. We enable the areas you run and price accordingly, and you can add areas later in the session.",
      },
      {
        q: "How does information move between modules?",
        a: "One student record feeds everything. The admission record becomes the student profile; attendance, fees, exams, transport and hostel all read from that same profile rather than keeping their own copy. That is why reporting is reading rather than collecting at the end of a term.",
      },
      {
        q: "Can we customise forms, reports and workflows?",
        a: "Fee structures, grading systems, exam weightage, report formats, roles and permissions, and school and session settings are all configurable. There is also a custom report builder for board and trustee formats. Deeper custom development is scoped separately as a project.",
      },
      {
        q: "Is there a mobile app?",
        a: "The platform works in any modern phone browser today, and the parent and student portals are built for that. A native parent app is in development and will be announced when it ships — we do not list it as available now.",
      },
      {
        q: "Does the platform work offline?",
        a: "No. KIDUART needs a connection to record attendance, collect a fee or publish a result, because those actions write to the shared record other people are reading. Plan for basic connectivity in the front office and staff room.",
      },
    ],
  },
  {
    id: "roles",
    title: "Roles and panels",
    blurb: "Who logs in, what they see, and how ten panels stay one system.",
    icon: "LayoutDashboard",
    items: [
      {
        q: "Who gets a login?",
        a: "Ten role panels ship with the product: system admin, organisation, director and leadership, school admin, academic coordinator, teacher, finance and accounts, HR and staff, parent, and student. Every panel reads from the same database — a panel is a view, not a separate product.",
      },
      {
        q: "Are logins charged per user?",
        a: "No. Pricing is per active student. Staff, teacher, student and parent logins are included, so a large teaching team does not change your bill.",
      },
      {
        q: "Can a class teacher see the fee ledger?",
        a: "Not unless you give them that permission. Access is decided by role, and the sidebar itself reflects those permissions, so people do not navigate to screens they cannot open.",
      },
      {
        q: "What do parents see?",
        a: "A parent sees each linked child: attendance, fee dues and receipts, results and report cards, notices, and transport or hostel details where those modules are in use. They see their own children only.",
      },
      {
        q: "Does it support multiple campuses?",
        a: "Yes. Trusts and school groups run an organisation panel above the individual schools, with campus-wise reporting, consolidated fee collection views, and central control over roles and session policy. That is the Group plan.",
      },
    ],
  },
  {
    id: "pricing",
    title: "Pricing and plans",
    blurb: "How the bill is calculated and what changes it.",
    icon: "Wallet",
    items: pricingFaqs,
  },
  {
    id: "onboarding",
    title: "Onboarding and setup",
    blurb: "What the first few weeks look like.",
    icon: "Compass",
    items: [
      {
        q: "In what order is the school set up?",
        a: "The same order the product is built in: organisation and academic session first, then classes, sections and subjects, then student records, then the fee book, then staff accounts and roles. Setting it up in this order means each step has the data the next one needs.",
      },
      {
        q: "How long does implementation take?",
        a: "Most single-campus schools are running attendance and fee collection within a few weeks. The variable is data quality — clean class lists and a settled fee structure move fast; a decade of inconsistent spreadsheets takes longer to map.",
      },
      {
        q: "Do you migrate our existing data?",
        a: "Yes. Student records, guardian contacts, fee structures and staff data can be imported in bulk, whether they are currently in spreadsheets, another ERP, or both. We map your existing structure before importing anything.",
      },
      {
        q: "Is training included?",
        a: "Yes, and it is run per role rather than as one long session. Front office, teachers, accounts and leadership each learn their own panel, which is the whole point of role-based panels — the training is short because the screen matches the job.",
      },
      {
        q: "What happens mid-session if we join late?",
        a: "Schools do join mid-session. We start with the modules that give immediate relief — usually student records, attendance and fees — and bring the rest in over the following weeks rather than pausing the school year.",
      },
    ],
  },
  {
    id: "security",
    title: "Security and privacy",
    blurb: "What protects the records, and what we do not claim.",
    icon: "ShieldCheck",
    items: [
      {
        q: "How is student data protected?",
        a: "Six layers: verified logins with hashed passwords and optional authenticator-app MFA, role-based permissions, tenant-level separation so each school's data sits in its own database, session and token control you can revoke, optional IP and location restrictions, and audit logging of sensitive actions. Our security page walks through each one.",
      },
      {
        q: "Is KIDUART certified under ISO or GDPR?",
        a: "No, and we will not imply otherwise. We describe the controls implemented in the product today. When formal audits are completed, they will be published with dates.",
      },
      {
        q: "Can one school see another school's data?",
        a: "No. Each school runs in its own tenant database and every request is resolved to a tenant before any query executes, so the boundary is structural rather than a filter someone could forget.",
      },
      {
        q: "What kind of multi-factor authentication is supported?",
        a: "Authenticator-app based (TOTP) with backup recovery codes. SMS-based second factor is on the roadmap and is not available today.",
      },
      {
        q: "Who can see a student's documents?",
        a: "Only roles with permission on that record. A class teacher does not automatically get a student's identity or financial documents.",
      },
      {
        q: "What happens to our data if we leave?",
        a: "You export student records, fee ledgers, attendance and academic data in standard formats at no cost, and we remove school data from our active systems after the agreed wind-down. We do not sell school data or train models on student records.",
      },
    ],
  },
  {
    id: "integrations",
    title: "Integrations and API",
    blurb: "What connects today, and what is honestly still a roadmap item.",
    icon: "Network",
    items: [
      {
        q: "Which fee payment gateways work today?",
        a: "Razorpay and Stripe are live. Parents pay from the portal, the gateway confirms through a signed webhook, and KIDUART writes the payment against the student's fee record with a receipt. Settlement goes to your own bank account under your own merchant agreement. PayPal is a roadmap item.",
      },
      {
        q: "Can we send parent notifications on WhatsApp?",
        a: "Yes, through the WhatsApp Business API using approved template messages from the school's own number. SMS and email delivery are also supported, which matters because not every guardian uses WhatsApp.",
      },
      {
        q: "Can staff sign in with school Google or Microsoft accounts?",
        a: "Yes. Google Workspace and Microsoft 365 sign-in are both supported. Identity comes from the account your IT team manages; permissions still come from the KIDUART role.",
      },
      {
        q: "What about Google Classroom, Moodle or Canvas?",
        a: "Those are roadmap items, not live integrations, and our integrations page labels them that way. Google Meet, Zoom and Microsoft Teams meeting creation are available today for online classes.",
      },
      {
        q: "Is there an API?",
        a: "Yes — versioned REST endpoints with managed, scoped API keys rather than a shared staff login, plus webhooks for live events such as a confirmed payment. Documentation is at /integrations/api-docs.",
      },
      {
        q: "Which browsers are supported?",
        a: "Current versions of Chrome, Firefox, Safari and Edge on desktop and mobile. There is nothing to install.",
      },
    ],
  },
  {
    id: "support",
    title: "Support",
    blurb: "How to reach a human when something breaks.",
    icon: "LifeBuoy",
    items: [
      {
        q: "What support channels are available?",
        a: "Email and the in-product support ticket module, plus the guided help centre on this site. Schools on Complete and Group also get a named contact for escalation.",
      },
      {
        q: "Is support built into the product?",
        a: "Yes. Support Ticket Management is a module, so a raised issue carries context — which school, which module, which user — instead of arriving as an ambiguous email. Organisations can also raise tickets at group level.",
      },
      {
        q: "What are your support hours?",
        a: "Working-day coverage over email and tickets, with the exact window confirmed during onboarding so it is written down rather than assumed. Fee-collection and exam periods get priority attention because that is when a delay actually hurts.",
      },
      {
        q: "How do we report a bug?",
        a: "Raise a support ticket in the product or email support@kiduart.com. Include the module and what you expected — with role-based panels, the same action can look different depending on who performed it.",
      },
    ],
  },
];

/** Shape expected by buildFaqPageSchema */
export const SITE_FAQ_SCHEMA_DATA = Object.fromEntries(
  SITE_FAQ_GROUPS.map((group) => [group.title, group.items]),
);
