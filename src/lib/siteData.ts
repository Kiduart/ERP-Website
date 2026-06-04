import { CONTACT_EMAIL, CONTACT_LOCATION, CONTACT_PHONE_DISPLAY } from "@/lib/contact";

export const COMPANY = {
  name: "KIDUART",
  email: CONTACT_EMAIL,
  phone: CONTACT_PHONE_DISPLAY,
  location: CONTACT_LOCATION,
} as const;

export const CTA_SCHOOLS_SUBTITLE = `Book a walkthrough with our team and see how admissions, fees, attendance, and parent updates work when they live in one system.`;

export type HomeImpactHighlight = {
  area: string;
  headline: string;
  label: string;
};

/** Qualitative highlights — no unverified deployment statistics */
export const HOME_IMPACT_HIGHLIGHTS: HomeImpactHighlight[] = [
  {
    area: "Records",
    headline: "One profile",
    label: "Admissions, documents, and class history in one student record",
  },
  {
    area: "Fees",
    headline: "One ledger",
    label: "Invoices, reminders, and receipts tied to your fee book",
  },
  {
    area: "Communication",
    headline: "One channel",
    label: "Attendance, fees, and notices to families from the same system",
  },
  {
    area: "Security",
    headline: "Role-based access",
    label: "Encryption, backups, and permissions aligned with our security page",
  },
];
