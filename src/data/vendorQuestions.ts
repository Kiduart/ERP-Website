/**
 * The due-diligence list a school should take into any ERP demo.
 *
 * Each answer maps to something implemented: per-school gateway credentials
 * stored encrypted, tenant-scoped data access, role permissions, TOTP + geo
 * controls, hash-chained audit records, and the published feature matrix.
 */

export type VendorQuestion = {
  id: string;
  question: string;
  /** What tends to go wrong in this market */
  risk: string;
  /** What KIDUART does, phrased so it can be checked */
  answer: string;
  verify: { label: string; href: string };
};

export const VENDOR_QUESTIONS: VendorQuestion[] = [
  {
    id: "money",
    question: "Where does parent fee money actually land?",
    risk: "Some vendors collect fees into their own payment account and settle to the school later. Your money sits with them, and your reconciliation depends on a statement they prepare.",
    answer:
      "You connect your own Razorpay or Stripe account, so parent payments settle into the school's account and never pass through ours. Your gateway keys are encrypted before they are stored.",
    verify: { label: "See payment integrations", href: "/integrations" },
  },
  {
    id: "isolation",
    question: "Can another school's login ever reach my records?",
    risk: "Cheaper systems keep every school in one shared set of tables and separate them with a school ID on each query. One forgotten filter is all it takes for another school to read your data.",
    answer:
      "KIDUART is multi-tenant by design: the tenant is resolved before any query runs, so the boundary is structural rather than a condition a developer has to remember.",
    verify: { label: "Read the isolation layer", href: "/security" },
  },
  {
    id: "exit",
    question: "On the day we leave, can we take everything with us?",
    risk: "Export is where lock-in hides. Some contracts allow only PDFs, some charge a migration fee, and some simply stop responding once you give notice.",
    answer:
      "Student records, fee ledgers, attendance and academic data export in CSV, Excel and PDF whenever you ask — including on the way out — and we remove your data after the agreed wind-down window.",
    verify: { label: "Read the data terms", href: "/privacy-policy" },
  },
  {
    id: "data-use",
    question: "Is student data sold, shared or used to train models?",
    risk: "Student data is valuable and rarely discussed in the sales meeting. Coaching tie-ups, book vendors and ad platforms are all buyers, and a vague privacy policy leaves the door open.",
    answer:
      "We do not sell school, student or parent data, and we do not use student records to train models. The predictive features run on your own records inside your own instance.",
    verify: { label: "Read the privacy policy", href: "/privacy-policy" },
  },
  {
    id: "permissions",
    question: "Who can open marks, fee ledgers and staff salaries?",
    risk: "Many school systems ship one all-powerful admin login that the whole office ends up sharing, so salary and exam data are one click away from anyone at the front desk.",
    answer:
      "Access is decided by role, not by trust. Permissions are explicit per role, can only be delegated downward, and each role gets its own panel — an accountant never lands on exam marks.",
    verify: { label: "See the role panels", href: "/platform" },
  },
  {
    id: "login-risk",
    question: "What happens if someone signs in at 2am from another country?",
    risk: "Shared staff passwords and no second factor are the norm, and most systems will happily accept that login from anywhere in the world.",
    answer:
      "Passwords are hashed with bcrypt, failed attempts lock the account, staff can add an authenticator app with backup codes, and schools that want it can fence admin access by IP or location.",
    verify: { label: "See the login controls", href: "/security" },
  },
  {
    id: "audit",
    question: "Can someone quietly change a mark or waive a fee?",
    risk: "Without a real audit trail, a disputed mark or a written-off fee becomes one person's word against another's — and logs that can be edited prove nothing.",
    answer:
      "Logins, permission changes and financial events are written to an audit log, and audit records are chained to the record before them so tampering is detectable rather than silent.",
    verify: { label: "See the audit layer", href: "/security" },
  },
  {
    id: "real-features",
    question: "Is that demo screen real, or is it a roadmap?",
    risk: "Demos are often stitched from screens that only exist for the demo. The gap shows up months later, renamed as customisation and quoted separately.",
    answer:
      "The 16 areas, 90 modules and 1,368 capabilities listed on this site are what exists. Anything still being built is labelled in development on the page itself and is not billed.",
    verify: { label: "Browse the module areas", href: "/features" },
  },
  {
    id: "india-fit",
    question: "Does it work the way an Indian school actually runs?",
    risk: "Software built for another market forces your school to fit its shape — no session-wise structure, no fee concessions, no transfer certificate, and parent updates on channels families do not use.",
    answer:
      "Academic sessions, classes and sections, fee heads with concessions, transfer certificates, transport routes, hostel and library all ship as first-class modules, and parents hear from the school over WhatsApp, SMS and email.",
    verify: { label: "See the academic modules", href: "/features/academic" },
  },
];
