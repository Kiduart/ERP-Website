/**
 * The homepage contact block is built around what a school actually wants fixed.
 * Every intent points at real module areas so the brief a visitor assembles maps
 * to pages that exist.
 */
export type ContactIntent = {
  id: string;
  label: string;
  icon: string;
  /** What we would open in a walkthrough if this is picked */
  shows: string;
  /** Seeds the message box so nobody stares at an empty field */
  prompt: string;
  areas: { label: string; href: string }[];
};

export const CONTACT_INTENTS: ContactIntent[] = [
  {
    id: "fees",
    label: "Fee collection and dues chasing",
    icon: "Wallet",
    shows: "Fee heads, instalments, receipts, and the pending list your office chases every month",
    prompt: "Our fee structure has ",
    areas: [
      { label: "Fees & Finance", href: "/features/finance-and-fee-management" },
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
    ],
  },
  {
    id: "attendance",
    label: "Attendance and daily parent updates",
    icon: "CalendarCheck",
    shows: "Class-wise attendance, absentee alerts, and what a parent sees on their phone",
    prompt: "Attendance today is marked using ",
    areas: [
      { label: "Academics", href: "/features/academic" },
      { label: "Communication", href: "/features/communication" },
    ],
  },
  {
    id: "admissions",
    label: "Admission enquiries and follow-ups",
    icon: "UserPlus",
    shows: "Enquiry capture, follow-up stages, and admission to student record without retyping",
    prompt: "We handle admission enquiries through ",
    areas: [
      { label: "Admissions", href: "/features/admission" },
      { label: "Student Records", href: "/features/student-management" },
    ],
  },
  {
    id: "exams",
    label: "Exams, marks and report cards",
    icon: "ClipboardCheck",
    shows: "Mark entry, grading rules, and report cards published without a week of formatting",
    prompt: "Our exam pattern and grading works like ",
    areas: [
      { label: "Academics", href: "/features/academic" },
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
    ],
  },
  {
    id: "staff",
    label: "Staff records, payroll and leave",
    icon: "Users",
    shows: "Staff profiles, leave approvals, and salary runs tied to real attendance",
    prompt: "We have staff members and currently manage payroll using ",
    areas: [{ label: "HR & Staff", href: "/features/hr-and-staff-management" }],
  },
  {
    id: "campuses",
    label: "Several campuses, one clean report",
    icon: "Building2",
    shows: "Campus-wise numbers rolled up for the trust without merging each school's data",
    prompt: "We run campuses across ",
    areas: [
      { label: "Multi-Campus HQ", href: "/features/organization-management" },
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
    ],
  },
  {
    id: "migration",
    label: "Moving off spreadsheets or another ERP",
    icon: "Database",
    shows: "How your existing student, fee and staff data comes across, and who checks it",
    prompt: "Right now our data sits in ",
    areas: [
      { label: "Student Records", href: "/features/student-management" },
      { label: "Security & Access", href: "/features/security-and-authentication" },
    ],
  },
];
