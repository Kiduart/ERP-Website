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
      "KIDUART uses access controls, encryption, backups, monitoring, and administrative safeguards designed to protect data against unauthorized access, loss, misuse, alteration, or disclosure.",
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
        effectiveLabel="Last updated: 28 May 2026"
        summary={[
          "We collect information needed to run our website, respond to demo requests, onboard schools, and operate KIDUART services.",
          "We may process school, staff, parent, student, finance, attendance, communication, and device-related data depending on modules used.",
          "Schools using KIDUART are responsible for ensuring they are authorized to share personal data with us.",
          "You may contact us to exercise privacy rights, withdraw consent where applicable, or raise grievances.",
        ]}
        sections={sections}
      />
    </PageTransition>
  );
}
