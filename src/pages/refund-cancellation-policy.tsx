import Head from "next/head";
import { PageTransition } from "@/components/ui/PageTransition";
import { LegalPolicyPage, type LegalSection } from "@/components/legal/LegalPolicyPage";

const sections: LegalSection[] = [
  {
    title: "Introduction",
    intro: [
      "At KIDUART, we aim to maintain transparent and fair billing practices for schools, institutions, and other customers using our website, platform, and related services.",
      "This Refund / Cancellation Policy explains when cancellations are allowed, when refunds may or may not be available, and how refund requests should be submitted and reviewed.",
    ],
  },
  {
    title: "Scope of This Policy",
    bullets: [
      "Software subscription plans, annual or monthly platform access fees, and other paid KIDUART services.",
      "Setup, onboarding, implementation, training, migration, customization, or professional service charges where invoiced by KIDUART.",
      "This policy does not apply to free demo requests, unpaid evaluation access, or third-party fees charged directly by another vendor.",
      "This policy should be read together with any applicable order form, invoice, proposal, subscription plan, or service agreement.",
    ],
  },
  {
    title: "Cancellation Policy",
    intro: [
      "Customers may request cancellation of subscription-based services at any time by contacting KIDUART through the designated billing, support, or account management channel.",
    ],
    bullets: [
      "Monthly or annual subscriptions generally remain active until the end of the current paid term.",
      "Cancellation stops automatic renewal for the next billing cycle, if auto-renewal applies.",
      "No prorated refund will be issued for unused time within the current billing cycle unless expressly approved by KIDUART or required by law.",
      "If implementation, onboarding, migration, or training work has already begun, cancellation may not reverse applicable charges.",
    ],
  },
  {
    title: "Refund Eligibility",
    table: {
      headers: ["Scenario", "Refund status", "Notes"],
      rows: [
        { cells: ["Duplicate payment or accidental double charge", "Usually eligible", "Subject to payment verification and absence of offsetting dues."] },
        { cells: ["Paid service materially different from the accepted proposal, invoice, or plan", "May be eligible", "Subject to review of documents, communications, and delivery status."] },
        { cells: ["Major unresolved technical issue that substantially prevents service use", "May be eligible", "The customer should first report the issue and allow reasonable time for investigation and remediation."] },
        { cells: ["Subscription cancellation during active billing period without platform failure", "Generally not eligible", "Access may continue until the end of the paid term."] },
        { cells: ["Change of mind after purchase", "Generally not eligible", "Especially where digital services have already been provisioned."] },
        { cells: ["Setup, onboarding, migration, training, or one-time service fees after work begins", "Generally not eligible", "These are professional service charges and resources may already be assigned."] },
      ],
    },
  },
  {
    title: "Non-Refundable Charges",
    bullets: [
      "Setup and activation fees once initiated.",
      "Implementation, onboarding, migration, and training charges once work has started or resources have been allocated.",
      "Custom development, integration, configuration, consulting, or professional service charges once work has started.",
      "Subscription charges for the current billing period already made available to the customer, except in limited approved cases.",
      "Taxes, payment gateway charges, banking charges, or third-party processing costs where non-recoverable.",
      "Charges linked to misuse, delayed customer response, unavailable customer-side teams, or customer infrastructure issues.",
    ],
  },
  {
    title: "Conditions for Refund Review",
    bullets: [
      "Submit the request by email or through the designated billing or support channel.",
      "Include name, institution name, invoice number, order reference, transaction reference, payment date, and payment amount.",
      "Clearly explain the reason for the refund request.",
      "Provide supporting screenshots, logs, issue descriptions, or other relevant documentation where applicable.",
      "Allow KIDUART a reasonable opportunity to investigate and attempt to resolve reported technical or service issues before refund review is finalized.",
      "Refund requests should be raised within 7 days of the relevant charge or issue discovery wherever practical.",
    ],
  },
  {
    title: "Refund Review and Approval",
    intro: [
      "All refund requests are reviewed on a case-by-case basis after considering the nature of the service purchased, the stage of delivery, the issue reported, the efforts made to resolve the issue, and the documents submitted by the customer.",
    ],
    bullets: [
      "We may reject requests that are incomplete, unsupported, or inconsistent with the agreed commercial terms.",
      "We may reject requests where the services were delivered substantially as described.",
      "We may reject requests arising from user error, unsupported use, misuse, or customer-side systems.",
      "Approval of a refund request is at KIDUART's discretion unless otherwise required by law or contract.",
    ],
  },
  {
    title: "Refund Processing Timeline",
    bullets: [
      "KIDUART may notify the customer of approval within 5 to 7 business days after receiving complete information and completing basic review.",
      "Approved refund amounts are generally processed to the original payment method, or another lawful method determined by KIDUART, within 7 to 15 working days after approval.",
      "Bank, card network, UPI, or payment gateway processing times may vary and are outside KIDUART's direct control.",
    ],
  },
  {
    title: "Chargebacks and Payment Disputes",
    intro: [
      "If you believe a charge is incorrect, please contact KIDUART before initiating a chargeback or payment dispute so that we can verify the transaction and attempt a prompt resolution.",
      "Unjustified chargebacks after valid service delivery may result in suspension of access, recovery action, or restriction of future services, subject to applicable law and contractual rights.",
    ],
  },
  {
    title: "Separate Agreements",
    highlight:
      "If KIDUART has entered into a separate signed agreement, master service agreement, service order, statement of work, enterprise proposal, SLA, or other written commercial arrangement with a customer, the refund and cancellation terms in that document will prevail to the extent of any inconsistency with this page.",
  },
  {
    title: "Policy Updates",
    intro: [
      "KIDUART may update this Refund / Cancellation Policy from time to time. Updated terms will be posted on this page with a revised effective date.",
    ],
  },
];

export default function RefundCancellationPolicy() {
  return (
    <PageTransition className="pt-0 pb-0">
      <Head>
        <title>Refund / Cancellation Policy | KIDUART School ERP Billing</title>
        <meta
          name="description"
          content="Review KIDUART's Refund / Cancellation Policy for school ERP subscriptions, renewals, setup fees, onboarding, implementation, training, and approved refund timelines."
        />
        <link rel="canonical" href="https://www.kiduart.com/refund-cancellation-policy" />
        <meta property="og:title" content="Refund / Cancellation Policy | KIDUART School ERP Billing" />
        <meta property="og:description" content="Understand cancellation rules, refund eligibility, non-refundable charges, refund review conditions, and processing timelines for KIDUART services." />
        <meta property="og:url" content="https://www.kiduart.com/refund-cancellation-policy" />
        <meta property="og:type" content="website" />
      </Head>
      <LegalPolicyPage
        eyebrow="Billing Policy"
        title="Refund / Cancellation Policy"
        subtitle="This policy explains how KIDUART handles subscription cancellations, service cancellations, refund requests, and payment-related queries."
        effectiveLabel="Effective date: 28 May 2026"
        summary={[
          "Certain KIDUART services may be subscription-based, implementation-based, or one-time paid services.",
          "Cancellations may stop future renewals, but refunds are available only in limited cases described below.",
          "Setup, onboarding, migration, training, and professional service charges are generally non-refundable once initiated.",
          "Approved refunds are usually processed back to the original payment method within the stated timeline.",
        ]}
        sections={sections}
      />
    </PageTransition>
  );
}
