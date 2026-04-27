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
    desc: "Essential tools for small schools",
    price: "$2",
    unit: "/student/month",
    features: [
      "Student Info System",
      "Attendance Tracking",
      "Basic Timetable",
      "Parent SMS Alerts",
      "Standard Email Support",
    ],
    isPopular: false,
  },
  {
    name: "Professional",
    desc: "Complete ERP for growing institutions",
    price: "$4",
    unit: "/student/month",
    features: [
      "Everything in Basic",
      "Fee Management & Gateway",
      "Gradebook & Report Cards",
      "Parent Mobile App",
      "HR & Payroll Module",
      "Priority Support",
    ],
    isPopular: true,
  },
  {
    name: "Enterprise",
    desc: "Advanced features for large districts",
    price: "Custom",
    unit: "pricing",
    features: [
      "Everything in Professional",
      "Multi-branch Management",
      "AI Predictive Analytics",
      "Custom API Integrations",
      "Dedicated Account Manager",
      "On-premise deployment option",
    ],
    isPopular: false,
  },
];
