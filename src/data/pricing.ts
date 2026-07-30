/**
 * Plans are described using the real module areas in feature-matrix.json.
 * `areas` holds area slugs so the pricing page can link straight to the
 * module list a school is paying for, and `npm run check:content` verifies them.
 */

export type PricingPlan = {
  name: string;
  desc: string;
  price: string;
  unit: string;
  /** One-line summary of who the plan fits */
  bestFor: string;
  /** Module area slugs included in this plan */
  areas: string[];
  features: string[];
  isPopular: boolean;
};

export const pricingPlans: PricingPlan[] = [
  {
    name: "Core",
    desc: "The records, attendance and fee book a school needs running from day one",
    price: "Contact for pricing",
    unit: "per student per month",
    bestFor: "Single-campus schools moving off registers and spreadsheets",
    areas: [
      "organization-management",
      "admission",
      "student-management",
      "academic",
      "finance-and-fee-management",
      "communication",
      "security-and-authentication",
      "support",
    ],
    features: [
      "Organisation setup: sessions, classes, sections, subjects",
      "Admissions pipeline from enquiry to registration",
      "Student records with documents, promotion and transfer certificates",
      "Attendance, timetable, exams, marks and report cards",
      "Fee heads, structures, collection, receipts and due tracking",
      "Notices, events and parent messaging over in-app, email and SMS",
      "Role-based logins for staff, teachers, students and parents",
    ],
    isPopular: false,
  },
  {
    name: "Complete",
    desc: "Every module area in the product, including HR, payroll and campus operations",
    price: "Contact for pricing",
    unit: "per student per month",
    bestFor: "Schools running transport, hostel, library and payroll in-house",
    areas: [
      "organization-management",
      "academic",
      "admission",
      "student-management",
      "parent-management",
      "hr-and-staff-management",
      "finance-and-fee-management",
      "communication",
      "library-management",
      "transport-management",
      "hostel-management",
      "facilities-and-inventory",
      "reports-and-analytics",
      "dashboard-and-insights",
      "security-and-authentication",
      "support",
    ],
    features: [
      "Everything in Core",
      "HR and payroll: staff directory, leave approvals, salary cycles, appraisal",
      "Library catalog, circulation, reservations and fines",
      "Transport routes, vehicles, drivers and live tracking",
      "Hostel rooms, bed allocation, mess and visitor log",
      "Facilities, rooms and inventory records",
      "Reports, analytics and role dashboards for every panel",
    ],
    isPopular: true,
  },
  {
    name: "Group",
    desc: "Multi-campus setup for trusts and school groups under one organisation",
    price: "Custom",
    unit: "pricing",
    bestFor: "Trusts and groups comparing several campuses from one login",
    areas: [
      "organization-management",
      "reports-and-analytics",
      "dashboard-and-insights",
      "security-and-authentication",
    ],
    features: [
      "Everything in Complete, for every campus",
      "Multi-campus organisation panel with campus-wise comparison",
      "Consolidated fee collection and attendance reporting",
      "Custom report builder for board and trustee packs",
      "Central role, permission and session policy control",
      "Dedicated onboarding and account manager",
    ],
    isPopular: false,
  },
];
