export type PricingFaqItem = {
  q: string;
  a: string;
};

export const pricingFaqs: PricingFaqItem[] = [
  {
    q: "How is pricing calculated?",
    a: "Pricing is per active student per month, in INR. Staff, teacher, student and parent logins are included  there is no per-user charge, so a large teaching team does not change your bill. Which plan you need depends on which functional areas you switch on. Book a demo and we will price it against your actual student count and area list.",
  },
  {
    q: "What is the difference between Core, Complete and Group?",
    a: "Core covers the areas every school runs daily: organisation setup, admissions, student records, academics (attendance, timetable, exams, report cards), fees, communication and role-based security. Complete adds HR and payroll, library, transport, hostel, facilities and the full reporting and dashboard layer. Group is for trusts running several campuses under one organisation with consolidated reporting.",
  },
  {
    q: "Do we have to buy modules we will not use?",
    a: "No. A day school with no boarding does not need Hostel Management, and a school that outsources buses does not need Transport. We switch on the areas you use and price accordingly. Modules can be added later in the session and billing adjusts on a prorated basis.",
  },
  {
    q: "Are there setup or onboarding fees?",
    a: "Onboarding and data migration from your existing system are included on Complete and Group. On Core, a one-time setup fee may apply depending on how much historical data needs importing. We confirm the exact figure during the demo, before you commit.",
  },
  {
    q: "How long does implementation take?",
    a: "Setup follows the same order as the product: organisation and session structure first, then classes, sections and subjects, then student records, then the fee book and staff accounts. Most single-campus schools are running attendance and fee collection within a few weeks; timelines depend on how clean the existing data is.",
  },
  {
    q: "Do you offer discounts for large school groups?",
    a: "Yes. Groups with multiple campuses or high student counts move to volume pricing under a single organisation account, with one invoice and campus-wise reporting. Contact our team for a quote.",
  },
  {
    q: "What happens to our data if we choose to leave?",
    a: "Your school's data belongs to your school. You can export student records, fee ledgers, attendance and exam data in standard formats (CSV, Excel, PDF) at no cost, and we remove it from our systems on request.",
  },
  {
    q: "Is parent access included in all plans?",
    a: "Yes, the parent portal on web is included in every paid plan, with attendance, fees, results and notices for each linked child. The native parent app is in development and will be announced separately.",
  },
];
