import Head from "next/head";
import { PageTransition } from "@/components/ui/PageTransition";
import { LegalPolicyPage, type LegalSection } from "@/components/legal/LegalPolicyPage";

const sections: LegalSection[] = [
  {
    title: "Introduction and Acceptance",
    intro: [
      "These Terms & Conditions form a legally binding agreement between you and KIDUART governing your access to and use of our website, school ERP platform, related applications, support services, and associated products or services made available by us.",
      "By accessing, browsing, registering for, requesting a demo of, or using KIDUART, you agree to be bound by these Terms. If you do not agree, you should not access or use KIDUART.",
    ],
  },
  {
    title: "Definitions",
    bullets: [
      "KIDUART, we, our, and us mean the KIDUART business operating the website and school ERP services.",
      "Services means the KIDUART website, school ERP platform, software, tools, modules, support services, content, and related offerings.",
      "Customer means any school, educational institution, organization, or person that subscribes to or uses the Services.",
      "Authorized User means a person permitted by a Customer to access or use the Services, such as an administrator, teacher, staff member, parent, or student.",
      "Customer Data means data, records, files, communications, and other information submitted to or processed through the Services by or on behalf of a Customer.",
    ],
  },
  {
    title: "Eligibility and Authority",
    bullets: [
      "You are legally competent to enter into a binding agreement.",
      "If you are acting on behalf of a school, institution, or other entity, you have authority to bind that entity to these Terms.",
      "Any registration, onboarding, or account information provided by you is accurate and complete.",
      "You will comply with applicable laws, school policies, contractual obligations, and regulatory requirements relevant to your use of the Services.",
    ],
  },
  {
    title: "Scope of Services",
    intro: [
      "KIDUART provides digital tools and services intended to support school administration, academic workflows, communication, reporting, attendance management, fee-related workflows, and related institutional operations.",
      "The exact features, modules, integrations, service levels, and onboarding scope available to a Customer may depend on the selected plan, proposal, order form, implementation arrangement, or other written commercial agreement.",
    ],
  },
  {
    title: "Plans, Modules, and What Is Enabled",
    intro: [
      "KIDUART is organised into module areas, and each area contains functional modules and features. What a Customer can access depends on the plan and the module areas enabled for that Customer, as recorded in the applicable proposal, order form, or invoice.",
      "Subscription charges are calculated on active student count for the billing period unless a different basis is agreed in writing. Staff, teacher, student, and parent logins are included within the enabled scope and are not charged per user.",
    ],
    bullets: [
      "Module areas may be added during a term; charges for additions apply on a prorated basis from the date of activation.",
      "Removing a module area does not delete historical records already created through it unless the Customer requests deletion in writing.",
      "Features described on our website as roadmap items are not part of the Services until released, and no plan grants a right to unreleased functionality.",
      "Feature counts published on our website describe the product's overall scope and are not a commitment that every listed feature is enabled for a given Customer's plan.",
    ],
  },
  {
    title: "Integrations and Customer-Provided Accounts",
    intro: [
      "Several integrations operate on accounts held by the Customer — a payment gateway, an SMS provider, an email delivery service, or a school identity provider, for example. In those cases KIDUART transmits data to that provider on the Customer's instruction, and the provider's own terms, pricing, and privacy practices apply to that data.",
    ],
    bullets: [
      "The Customer is responsible for maintaining valid credentials, sender registrations, and regulatory approvals required by its providers.",
      "Payment settlement occurs between the Customer and its payment gateway under the Customer's own merchant agreement; KIDUART records transactions and issues receipts but is not a party to the settlement.",
      "Where API access is granted, the Customer is responsible for safeguarding issued API keys and for the actions performed using them, and must request revocation promptly if a key is exposed.",
      "Integration availability may change if a third-party provider alters or withdraws its interfaces.",
    ],
  },
  {
    title: "Website Use",
    bullets: [
      "You may use the website only for lawful, informational, and business purposes related to evaluating, learning about, or engaging with KIDUART.",
      "You must not misrepresent your identity or institution.",
      "You must not submit false, misleading, abusive, or unlawful information through forms or communications.",
      "You must not interfere with website security, availability, or normal functioning.",
      "You must not copy, scrape, crawl, harvest, or systematically extract content, data, or materials without written permission.",
    ],
  },
  {
    title: "Account Registration and Security",
    intro: [
      "Where account-based access is provided, you are responsible for maintaining the confidentiality of usernames, passwords, OTPs, and other access credentials associated with your account.",
    ],
    bullets: [
      "Use only authorized accounts and access methods.",
      "Keep login credentials secure and do not share them except as expressly permitted under institutional workflows.",
      "Notify KIDUART or your institution promptly if you suspect unauthorized use or a security breach.",
      "Ensure departing staff, role changes, or user access updates are promptly handled by the institution's administrators.",
    ],
  },
  {
    title: "Customer Data and Institutional Responsibility",
    highlight:
      "The Customer is responsible for the legality, accuracy, quality, integrity, and appropriateness of Customer Data submitted to or processed through KIDUART, including personal data relating to students, parents, teachers, staff, or other individuals.",
    bullets: [
      "The Customer must have all required rights, permissions, notices, authorizations, and legal basis to collect, upload, share, and instruct KIDUART to process Customer Data.",
      "The Customer is responsible for assigning appropriate user roles and permissions.",
      "The Customer is responsible for reviewing records, outputs, communications, reports, and workflows generated through the Services.",
      "The Customer is responsible for internal compliance with school rules, parental notice obligations, and applicable laws.",
    ],
  },
  {
    title: "Acceptable Use Restrictions",
    bullets: [
      "Do not use the Services for unlawful, harmful, deceptive, fraudulent, or unauthorized purposes.",
      "Do not upload malicious code, viruses, ransomware, or harmful scripts.",
      "Do not attempt unauthorized access to accounts, systems, data, APIs, or infrastructure.",
      "Do not circumvent security controls, access restrictions, or usage limitations.",
      "Do not reverse engineer, decompile, disassemble, copy, or create derivative works from the Services except where non-waivable law permits otherwise.",
      "Do not resell access, share credentials beyond permitted internal use, or disrupt school operations or platform stability.",
    ],
  },
  {
    title: "Fees, Billing, and Payment",
    intro: [
      "Fees, subscription charges, setup costs, implementation charges, training fees, renewal fees, payment timelines, taxes, and billing terms for KIDUART Services shall be as specified in the applicable proposal, quotation, invoice, subscription plan, order form, or other written commercial communication.",
    ],
    bullets: [
      "All fees are due in accordance with the invoice or billing schedule communicated by us.",
      "Fees are exclusive of applicable taxes unless expressly stated otherwise.",
      "Delayed payments may result in service restrictions, suspension, or additional charges where permitted.",
      "Paid fees are non-refundable except where required by law or expressly stated in a separate refund or cancellation policy.",
    ],
  },
  {
    title: "Intellectual Property",
    intro: [
      "KIDUART and its licensors retain all rights, title, and interest in and to the Services, including software, code, workflows, designs, text, graphics, trademarks, service marks, documentation, and platform materials.",
      "Customers retain ownership of Customer Data, subject to the rights granted to KIDUART to host, process, transmit, display, secure, and support that data for providing the Services.",
    ],
  },
  {
    title: "Confidentiality",
    intro: [
      "Each party may receive non-public information from the other party in connection with demos, onboarding, support, implementation, or service use. The receiving party should protect such information using reasonable care and use it only for the purpose for which it was disclosed.",
    ],
  },
  {
    title: "Third-Party Services and Integrations",
    intro: [
      "KIDUART may work with third-party hosting, analytics, payment, communication, support, or integration providers. Third-party services may be subject to their own terms, privacy policies, fees, uptime, and technical limitations.",
    ],
  },
  {
    title: "Availability, Support, and Changes",
    intro: [
      "We aim to keep KIDUART reliable and useful, but service availability may be affected by maintenance, updates, internet issues, third-party failures, security events, or circumstances beyond our reasonable control.",
      "We may improve, modify, replace, suspend, or discontinue features, modules, or parts of the Services, subject to applicable contractual commitments.",
    ],
  },
  {
    title: "Disclaimers and Limitation of Liability",
    intro: [
      "The Services are provided on an as-is and as-available basis except to the extent expressly stated in a signed agreement. KIDUART does not guarantee that the Services will be uninterrupted, error-free, or suitable for every specific institutional requirement.",
      "To the maximum extent permitted by law, KIDUART will not be liable for indirect, incidental, special, consequential, punitive, or exemplary damages. Any liability cap will be governed by the applicable signed agreement or, where no such agreement exists, by applicable law.",
    ],
  },
  {
    title: "Suspension and Termination",
    bullets: [
      "We may suspend or restrict access if there is non-payment, security risk, misuse, suspected unauthorized access, violation of these Terms, or legal requirement.",
      "Customers may stop using the Services or request cancellation according to the applicable agreement and refund or cancellation policy.",
      "Termination does not remove payment obligations, confidentiality duties, intellectual property protections, or other clauses that are intended to survive.",
    ],
  },
  {
    title: "Governing Law and Jurisdiction",
    intro: [
      "These Terms are governed by the laws of India. Subject to any separate written agreement, courts having jurisdiction over Noida, Uttar Pradesh, India shall have jurisdiction for disputes arising from these Terms or the Services.",
    ],
  },
  {
    title: "Changes to These Terms",
    intro: [
      "We may update these Terms from time to time. Updated Terms will be posted on this page with a revised effective date. Continued use of KIDUART after changes become effective means you accept the updated Terms.",
    ],
  },
];

export default function TermsConditions() {
  return (
    <PageTransition className="pt-0 pb-0">
      <Head>
        <title>Terms & Conditions | KIDUART School ERP Terms of Use</title>
        <meta
          name="description"
          content="Read the KIDUART Terms & Conditions for website use, school ERP access, accounts, customer data, payments, acceptable use, intellectual property, liability, and jurisdiction."
        />
        <link rel="canonical" href="https://www.kiduart.com/terms-conditions" />
        <meta property="og:title" content="Terms & Conditions | KIDUART School ERP Terms of Use" />
        <meta property="og:description" content="Terms governing access to and use of the KIDUART website, school ERP platform, products, and related services." />
        <meta property="og:url" content="https://www.kiduart.com/terms-conditions" />
        <meta property="og:type" content="website" />
      </Head>
      <LegalPolicyPage
        eyebrow="Legal Agreement"
        title="Terms & Conditions"
        subtitle="These Terms & Conditions govern access to and use of the KIDUART website, platform, products, and related services."
        effectiveLabel="Effective date: 29 July 2026"
        summary={[
          "Access depends on the plan and module areas enabled for your school; billing is on active student count, not per user.",
          "Schools are responsible for authorized account use and the lawfulness of data they submit.",
          "Separate commercial agreements, proposals, order forms, SLAs, or DPAs may override specific service-level terms where expressly stated.",
          "Misuse, unauthorized access, credential sharing, scraping, or unlawful data use may lead to suspension or termination.",
        ]}
        sections={sections}
      />
    </PageTransition>
  );
}
