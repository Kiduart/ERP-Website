import Head from "next/head";
import { PageTransition } from "@/components/ui/PageTransition";
import { LegalPolicyPage, type LegalSection } from "@/components/legal/LegalPolicyPage";

const sections: LegalSection[] = [
  {
    title: "Introduction",
    intro: [
      "At KIDUART, we value the privacy of schools, administrators, teachers, parents, students, staff members, website visitors, and every individual who interacts with our website, platform, and services.",
      "This Privacy Policy explains what information we collect, how we use it, when we share it, how long we keep it, and what choices or rights may be available to you.",
    ],
  },
  {
    title: "Who We Are",
    intro: [
      "KIDUART is a school ERP and education technology platform designed to support school administration, academic workflows, attendance, fee management, reporting, communication, and operational efficiency for educational institutions.",
      "Our primary contact email is support@kiduart.com and our current business location is Noida, Uttar Pradesh, India.",
    ],
  },
  {
    title: "Scope of This Policy",
    bullets: [
      "Visitors to our public website and landing pages.",
      "Individuals submitting contact, enquiry, support, newsletter, or demo request forms.",
      "Schools and institutions evaluating, onboarding, or using KIDUART services.",
      "Authorized users such as administrators, teachers, finance staff, HR staff, parents, and students using KIDUART-enabled services.",
      "This policy does not apply to third-party websites, integrations, or services that maintain their own privacy practices.",
    ],
  },
  {
    title: "Information We Collect",
    intro: [
      "The exact categories of data we process depend on how KIDUART is used, which modules are enabled by a school, and what information a school or user chooses to submit.",
    ],
    table: {
      headers: ["Category", "Examples", "Why it may be collected"],
      rows: [
        { cells: ["Identity and contact data", "Name, email address, phone number, job title, institution name", "Demo requests, onboarding, communication, and support"] },
        { cells: ["Institution data", "School name, branch details, address, board or affiliation, class structure", "Account setup, service configuration, and reporting"] },
        { cells: ["User account data", "Login identifiers, roles, permissions, profile details", "Access control, authentication, and administration"] },
        { cells: ["Student and parent-related data", "Student name, class, roll number, guardian contact details, attendance, academic records, communication history, fee-related records", "Delivering ERP services requested by the school"] },
        { cells: ["Employee and staff data", "Staff profile, department, attendance, payroll-related or role-related details where applicable", "HR, administration, and school operations"] },
        { cells: ["Technical and usage data", "IP address, browser type, pages viewed, device type, logs, timestamps, referral URLs", "Security, diagnostics, analytics, and performance improvement"] },
      ],
    },
  },
  {
    title: "Module-Wise Data We Process",
    intro: [
      "KIDUART ships 16 module areas, and a school switches on only the ones it uses. Because the modules decide what data exists in the system, this table maps each area to the data it processes — so you can see exactly what turning a module on means for personal data.",
      "If your school does not use Transport, no route or vehicle allocation data exists for your students. The same is true for Hostel, Library, and every other area.",
    ],
    table: {
      headers: ["Module area", "Personal data processed", "Purpose"],
      rows: [
        { cells: ["Admission", "Enquiry details, applicant and guardian names, contact numbers, application documents, interview evaluations", "Running the admission pipeline from enquiry to registration"] },
        { cells: ["Student Management", "Student profile, enrolment, class and section history, documents, promotion and transfer records", "Maintaining the student record every other module reads from"] },
        { cells: ["Parent Management", "Guardian records, parent-student linking, portal accounts, communication log", "Giving parents access to their own children's information"] },
        { cells: ["Academic", "Attendance, timetable allocation, assignments, class diary, exam marks, grades, report cards, discipline and PTM records", "Delivering day-to-day teaching and assessment workflows"] },
        { cells: ["Finance & Fee Management", "Fee structures assigned to a student, concessions, payments, receipts, dues, refunds", "Fee collection, reconciliation and financial reporting"] },
        { cells: ["HR & Staff Management", "Staff profiles, department and designation, attendance, leave records, payroll and appraisal data", "School HR administration and salary processing"] },
        { cells: ["Communication", "Notices and announcements sent, recipient groups, message delivery records", "Sending and evidencing school communication"] },
        { cells: ["Library Management", "Membership, borrowing history, reservations, fines", "Running circulation without paper registers"] },
        { cells: ["Transport Management", "Route and stop allocation for a student, vehicle and driver records, tracking data", "Operating school transport safely (only if the module is enabled)"] },
        { cells: ["Hostel Management", "Room and bed allocation, hostel attendance, mess records, visitor log", "Residential care and accountability (only if the module is enabled)"] },
        { cells: ["Security & Authentication", "Login identifiers, hashed passwords, MFA enrolment, session and device records, IP address, audit entries", "Authenticating users, protecting accounts and evidencing sensitive actions"] },
        { cells: ["Reports, Dashboards & Analytics", "Aggregated academic, attendance and financial data derived from the records above", "Reporting to school leadership and statutory bodies"] },
      ],
    },
  },
  {
    title: "How We Collect Information",
    bullets: [
      "Directly from you when you fill forms, request a demo, contact us, subscribe, or communicate with us.",
      "From schools or authorized institutional representatives during onboarding and service use.",
      "From user activity within the platform, including logins, actions, and administrative workflows.",
      "Automatically through cookies, server logs, analytics tools, device data, and similar technologies.",
      "From integrations or third-party tools enabled by the school or required for service delivery.",
    ],
  },
  {
    title: "Why We Use Information",
    bullets: [
      "To provide, maintain, configure, and improve our website and school ERP services.",
      "To create and manage school accounts, authorized user access, roles, and permissions.",
      "To operate attendance, fee tracking, student records, timetable, communication, and reporting features.",
      "To respond to enquiries, schedule demos, provide onboarding, and offer customer support.",
      "To authenticate users, monitor misuse, prevent fraud, and protect platform security.",
      "To comply with contractual, regulatory, legal, accounting, and audit-related obligations.",
    ],
  },
  {
    title: "School and Institution Responsibility",
    highlight:
      "In many cases, schools decide what information is uploaded to KIDUART, which modules are used, and which users are authorized to access the system. The school is responsible for ensuring that it has the required authority, notices, consents, permissions, or other lawful basis to share personal data with us for service delivery.",
  },
  {
    title: "Children's and Student Data",
    intro: [
      "KIDUART may process information relating to students, including minors, where such data is provided and managed by a school or institution for legitimate educational and administrative purposes.",
      "We do not intend for children to independently create public consumer accounts on our website unless specifically supported and authorized through a school-managed workflow.",
    ],
  },
  {
    title: "Sharing and Disclosure",
    bullets: [
      "With authorized school administrators and users according to assigned roles and permissions.",
      "With service providers who help us host, secure, support, analyse, or operate the platform.",
      "With payment, communication, analytics, or integration providers where required for selected services.",
      "With legal, regulatory, or government authorities when required by law or necessary to protect rights and security.",
      "With successors in connection with a merger, acquisition, restructuring, or business transfer, subject to appropriate safeguards.",
    ],
  },
  {
    title: "Service Providers We Rely On",
    intro: [
      "Some parts of the service require a third party, and those choices are yours to make with us during onboarding. Where a school brings its own account — a payment gateway or SMS provider, for example — that provider's own terms and privacy policy also apply to the data it handles.",
    ],
    table: {
      headers: ["Provider category", "What it handles", "Data involved"],
      rows: [
        { cells: ["Payment gateway (for example Razorpay or Stripe)", "Online fee payments made by parents", "Payer name and contact, amount, transaction reference. Card and bank credentials are handled by the gateway, not by KIDUART"] },
        { cells: ["SMS provider", "Attendance alerts, fee reminders, OTP messages", "Recipient mobile number and message content"] },
        { cells: ["WhatsApp Business API", "Template notices and reminders to parents", "Recipient number and template message content"] },
        { cells: ["Email delivery provider", "Circulars, receipts, verification and reset emails", "Recipient email address and message content"] },
        { cells: ["Cloud hosting and storage", "Running the platform and storing uploaded documents", "All school data held in the platform, within the tenant separation described in our security page"] },
        { cells: ["Identity providers (Google, Microsoft)", "Optional school-account sign-in", "The account identifier used to sign in, where a school enables it"] },
      ],
    },
  },
  {
    title: "Cookies and Analytics",
    intro: [
      "Our website may use cookies, server logs, pixels, and analytics technologies to understand usage, improve page performance, secure the website, and remember user preferences.",
      "You can control cookies through your browser settings, but disabling certain cookies may affect website functionality.",
    ],
  },
  {
    title: "Data Retention and Security",
    intro: [
      "We retain information only for as long as reasonably necessary for service delivery, school account administration, legal compliance, billing, security, audit, dispute resolution, and legitimate operational needs.",
      "Academic and financial history is retained while a school needs it, because schools are required to keep it — a transfer certificate needs the enrolment history and a fee dispute needs the ledger. Operational and diagnostic logs are kept for a limited window and then removed.",
      "Security controls include role-based permissions, password hashing, optional authenticator-app multi-factor authentication, session and token management, tenant-level separation of each school's data, optional IP and location restrictions, and audit logging of sensitive actions. These are described in plain language, including what we do not yet claim, on our security page.",
    ],
  },
  {
    title: "Ending Your Service",
    bullets: [
      "On termination, your school can export student records, fee ledgers, attendance and academic data in standard formats such as CSV, Excel and PDF.",
      "After the agreed export and wind-down window, we remove school data from our active systems, retaining only what applicable law requires us to keep.",
      "We do not sell school, student or parent data, and we do not use student records to train models.",
      "Backup copies are cycled out on our normal backup schedule rather than being retained indefinitely.",
    ],
  },
  {
    title: "Your Rights and Choices",
    bullets: [
      "You may contact us to request access, correction, update, deletion, or review of personal data, subject to applicable law and institutional control.",
      "Where processing is based on consent, you may request withdrawal of consent where applicable.",
      "For school-controlled student or parent records, we may direct requests to the relevant school administrator for verification and action.",
      "You may raise privacy concerns or grievances using the contact details provided on this page.",
    ],
  },
  {
    title: "Changes to This Policy",
    intro: [
      "We may update this Privacy Policy from time to time to reflect product, legal, operational, or security changes. The updated version will be posted on this page with a revised effective date.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <PageTransition className="pt-0 pb-0">
      <Head>
        <title>Privacy Policy | KIDUART School ERP Data Protection</title>
        <meta
          name="description"
          content="Read the KIDUART Privacy Policy to understand how our school ERP platform collects, uses, stores, shares, and protects school, student, parent, staff, and website data."
        />
        <link rel="canonical" href="https://www.kiduart.com/privacy-policy" />
        <meta property="og:title" content="Privacy Policy | KIDUART School ERP Data Protection" />
        <meta property="og:description" content="Understand how KIDUART handles personal data, student data, school records, cookies, retention, security, and privacy rights." />
        <meta property="og:url" content="https://www.kiduart.com/privacy-policy" />
        <meta property="og:type" content="website" />
      </Head>
      <LegalPolicyPage
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="How KIDUART collects, uses, stores, shares, and protects personal data across its website, school ERP platform, demo requests, and related services."
        effectiveLabel="Last updated: 29 July 2026"
        summary={[
          "The modules your school switches on decide what data exists — section 5 maps each of the 16 module areas to the data it processes.",
          "Access follows role: a parent sees their own children, a teacher their classes, an accountant the fee book.",
          "Schools using KIDUART are responsible for ensuring they are authorized to share personal data with us.",
          "You can export everything and ask us to remove it; we do not sell school data or train models on student records.",
        ]}
        sections={sections}
      />
    </PageTransition>
  );
}
