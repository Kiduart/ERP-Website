export type PricingPlan = {
  name: string;
  desc: string;
  price: string;
  unit: string;
  features: string[];
  isPopular: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Basic",
    desc: "Core tools for schools getting started with digital management",
    price: "Contact for pricing",
    unit: "per student per month",
    features: [
      "Student Information System",
      "Attendance Tracking",
      "Basic Timetable",
      "Parent SMS Alerts",
      "Email Support",
    ],
    isPopular: false,
  },
  {
    name: "Professional",
    desc: "Complete ERP for growing institutions",
    price: "Contact for pricing",
    unit: "per student per month",
    features: [
      "Everything in Basic",
      "Fee Management and Payment Gateway",
      "Exam Management and Report Cards",
      "Parent Communication Portal",
      "AI Attendance and Fee Alerts",
      "Priority Support",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    desc: "Custom setup for school groups and large institutions",
    price: "Custom",
    unit: "pricing",
    features: [
      "Everything in Professional",
      "Multi-campus Management",
      "Advanced Analytics Dashboard",
      "Custom API Access",
      "Dedicated Account Manager",
      "White-labelled Parent Portal",
    ],
    isPopular: false,
  },
];
