import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { pageSeo } from "@/lib/pageSeo";
import { PageTransition } from "@/components/ui/PageTransition";
import {
  LegalPolicyPage,
  type LegalSection,
} from "@/components/legal/LegalPolicyPage";

const sections: LegalSection[] = [
  {
    title: "Purpose",
    intro: [
      "This Workplace Policy explains how KIDUART teammates work together across our Noida base and remote-friendly arrangements. It is written for candidates, interns, employees, and anyone evaluating KIDUART as a workplace.",
      "It complements our Careers page and should be read with any offer letter, internship agreement, or employment contract, which always control if there is a conflict.",
    ],
  },
  {
    title: "Hybrid Workplace Model",
    intro: [
      "KIDUART operates a hybrid workplace. We maintain a primary base in Noida, Uttar Pradesh, India, and support flexible remote work where the role and project allow it.",
    ],
    bullets: [
      "Some days are collaborative in person (planning, demos, pairing, onboarding).",
      "Other days may be remote when deep work or schedule flexibility is needed.",
      "We care about clear outcomes and reliable communication more than a fixed desk schedule.",
      "Role-specific expectations (office-first, remote-friendly, or hybrid) are confirmed during hiring.",
    ],
  },
  {
    title: "Typical Time On-Site",
    intro: [
      "On-site time is flexible by default. There is no single mandatory days-per-week rule for every role.",
    ],
    bullets: [
      "Teams agree on collaboration rhythms (stand-ups, reviews, customer calls) in advance.",
      "Interns and early-career teammates may be asked to spend more time in Noida for mentoring and ramp-up.",
      "Customer-facing demos, school visits, or team gatherings may require in-person presence with reasonable notice.",
      "Managers communicate expected on-site moments before they become urgent.",
    ],
  },
  {
    title: "What Hybrid Means Day to Day",
    bullets: [
      "Core collaboration hours are agreed per team so remote and office teammates can overlap.",
      "Work tools (chat, docs, issue tracking, video calls) are the source of truth for decisions and handoffs.",
      "People are trusted to manage focus time; responsiveness expectations are set by role, not by surveillance.",
      "Travel between home and the Noida office is not reimbursed as commuting unless stated in a written agreement.",
    ],
  },
  {
    title: "Workplace Benefits We Highlight",
    intro: [
      "Benefits can vary by role, employment type (full-time vs internship), and tenure. Details in an offer letter take priority.",
    ],
    bullets: [
      "Flexible location: Noida office presence with remote-friendly options where the role allows.",
      "Learning support: time and budget for courses, books, or conferences where approved for the role.",
      "Team time: planned in-person collaboration so a hybrid team still builds shared context.",
      "Other benefits listed on our Careers page (such as health coverage or equity) apply only when included in a written offer.",
    ],
  },
  {
    title: "Eligibility and Fair Application",
    bullets: [
      "Hybrid flexibility is not a guarantee for every role at every stage; product, sales, and operations needs can differ.",
      "We do not use workplace location to reduce pay without a clear written policy shared at offer time. Today we do not publish location-based pay adjustments on LinkedIn.",
      "Requests for schedule or location changes should go through your manager or hiring contact.",
      "Discrimination based on protected characteristics is not tolerated in workplace decisions.",
    ],
  },
  {
    title: "Health and Safety",
    intro: [
      "KIDUART does not currently publish a company-wide COVID-19 vaccine mandate on recruiting platforms. We follow applicable Indian public-health guidance and any building or venue rules for in-person events.",
    ],
    bullets: [
      "If you feel unwell, stay home and inform your manager; do not attend the office or school visits while contagious.",
      "We may adjust in-person plans during local health advisories.",
      "Any future health requirement that affects employment will be communicated in writing.",
    ],
  },
  {
    title: "Updates and Contact",
    intro: [
      "We may update this Workplace Policy as the company grows. The effective date on this page shows the latest version.",
      "Questions about workplace arrangements for a role: careers@kiduart.com or the contact details on our Careers and Contact pages.",
    ],
    bullets: [
      "Careers and open roles: https://www.kiduart.com/careers",
      "Privacy practices for applicants and website visitors: https://www.kiduart.com/privacy-policy",
      "General contact: https://www.kiduart.com/contact",
    ],
  },
];

export default function WorkplacePolicy() {
  return (
    <PageTransition className="pt-0 pb-0">
      <PageSeoHead {...pageSeo.workplace} />

      <LegalPolicyPage
        eyebrow="Company workplace"
        title="Workplace Policy"
        subtitle="How KIDUART runs hybrid work from Noida — flexible on-site time, remote-friendly roles where possible, and clear expectations for candidates and teammates."
        effectiveLabel="Effective 2 August 2026"
        summary={[
          "Primary model: Hybrid",
          "Typical on-site time: Flexible",
          "Base: Noida, Uttar Pradesh",
          "Details confirmed per role at hiring",
        ]}
        sections={sections}
      />
    </PageTransition>
  );
}
