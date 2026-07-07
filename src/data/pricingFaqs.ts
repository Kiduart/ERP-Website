export type PricingFaqItem = {
  q: string;
  a: string;
};

export const pricingFaqs: PricingFaqItem[] = [
  {
    q: "How is pricing calculated?",
    a: "Pricing is based on the number of active students enrolled in your institution each month. Teacher accounts, staff logins and parent access are all included at no extra cost. You only pay for students. We price in INR for Indian schools. Visit the pricing page or book a demo to get a figure for your school's size.",
  },
  {
    q: "Are there setup or onboarding fees?",
    a: "Professional and Enterprise plans include full onboarding support and data migration from your existing system at no extra cost. For the Basic plan, a one-time setup fee applies. We confirm the exact amount during your demo so there are no surprises later.",
  },
  {
    q: "Can we add modules after signing up?",
    a: "Yes. You can upgrade your plan or add specific modules at any time. Billing adjusts on a prorated basis so you only pay for what you use from the day you add it.",
  },
  {
    q: "Do you offer discounts for large school groups?",
    a: "Yes. School groups with larger student counts or multiple campuses can opt for volume pricing. Contact our team for a custom quote.",
  },
  {
    q: "What happens to our data if we choose to leave?",
    a: "Your data belongs to your school. If you decide to move on, you can export all records in standard formats, CSV, Excel, and PDF, at no cost and with no data retention by us.",
  },
  {
    q: "Is parent access included in all plans?",
    a: "Parent portal access on web is available in paid plans. The native parent app is currently in development and will be announced separately.",
  },
];
