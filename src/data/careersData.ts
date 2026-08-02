import {
  type LucideIcon,
  Laptop,
  Heart,
  BookOpen,
  Rocket,
  Briefcase,
  Smile,
} from "lucide-react";

export type CareersIconName =
  | "Laptop"
  | "Heart"
  | "BookOpen"
  | "Rocket"
  | "Briefcase"
  | "Smile";

export type CareersBenefit = {
  icon: CareersIconName;
  title: string;
  desc: string;
};

export type CareersValueCard = {
  icon: CareersIconName;
  title: string;
  desc: string;
};

export type HiringStep = {
  step: string;
  title: string;
  desc: string;
};

export type InternRole = {
  id: string;
  title: string;
  type: string;
  summary: string;
  details: string[];
};

export const foundingInternCampaign = {
  teaserImage: "/images/careers/founding-interns-announcement.png",
  teaserAlt: "KIDUART internship applications open announcement for founding interns batch",
  hiringImage: "/images/careers/founding-interns-hiring.png",
  hiringAlt:
    "KIDUART hiring founding interns for Python, UI/UX design, and business development in Noida India",
  badge: "Applications open",
  title: "Founding Interns",
  subtitle: "Hands-on roles on school ERP software in Noida.",
  intro:
    "Our first internship batch is now open. Freshers may apply and work on product used by Indian schools.",
};

export const foundingInternRoles: InternRole[] = [
  {
    id: "python-intern",
    title: "Python Intern",
    type: "Engineering",
    summary:
      "Work on backend APIs, integrations, and data workflows behind admissions, fees, attendance, and reporting.",
    details: [
      "Build and maintain Python APIs used by school admin teams",
      "Work with databases, queues, and third-party integrations",
      "Ideal for CS students or freshers comfortable with Python basics",
    ],
  },
  {
    id: "ui-ux-intern",
    title: "UI/UX Design Intern",
    type: "Design",
    summary:
      "Shape dashboards, parent portals, and admin flows that school teams and families use every day.",
    details: [
      "Design screens for fees, attendance, communication, and reporting",
      "Create wireframes and polished UI for web-based school workflows",
      "Portfolio or sample work is welcome. Freshers may apply.",
    ],
  },
  {
    id: "business-development-intern",
    title: "Business Development Intern",
    type: "Growth",
    summary:
      "Support outreach to schools, demo preparation, and conversations across India's EdTech ecosystem.",
    details: [
      "Research schools and help prepare outreach for KIDUART demos",
      "Support founders on calls, follow-ups, and market conversations",
      "Strong communication skills matter more than prior sales experience",
    ],
  },
];

export type CareersFaqItem = {
  q: string;
  a: string;
};

export const careersFaqs: CareersFaqItem[] = [
  {
    q: "Can freshers apply for KIDUART internships?",
    a: "Yes. Our founding intern batch is open to freshers. If you are early in your career and want hands-on work on school ERP software, you can apply through the form on this page.",
  },
  {
    q: "Which internship roles are currently open?",
    a: "We are hiring for three founding intern roles: Python Intern, UI/UX Design Intern, and Business Development Intern. All three are part of our first internship batch.",
  },
  {
    q: "Where is the KIDUART internship based?",
    a: "KIDUART is based in Noida, Uttar Pradesh, and runs a hybrid workplace with flexible on-site time. Some roles are remote-friendly depending on the team and project. See our Workplace Policy at /workplace-policy for details; exact expectations are confirmed during interviews.",
  },
  {
    q: "How do I apply for a KIDUART internship?",
    a: "Use the Apply today button on this page. It opens our official Google Form where you can share your details, preferred role, and background.",
  },
  {
    q: "What kind of work will I do as a Python intern?",
    a: "You will work on backend systems that power admissions, fees, attendance, and reporting for schools. The work includes APIs, data models, integrations, and production tasks.",
  },
  {
    q: "Is there an eligibility criteria for these internships?",
    a: "We look for curiosity, communication, and willingness to learn. Specific degree requirements vary by role, but freshers with relevant interest in Python, design, or business outreach are encouraged to apply.",
  },
];

export const careersSeoIntro = {
  heading: "EdTech internships in Noida",
  paragraphs: [
    "KIDUART is school ERP software for Indian schools. The platform covers admissions, fees, attendance, parent communication, and reporting in one place. We are opening our first internship batch for students and early-career professionals who want hands-on product work.",
    "We are hiring for Python development, UI/UX design, and business development. Submit your application using the form on this page.",
    "We are a small team. Interns work on live product tasks, learn how schools operate, and contribute to tools used by administrators, teachers, and parents.",
  ],
};

export const careersIconMap: Record<CareersIconName, LucideIcon> = {
  Laptop,
  Heart,
  BookOpen,
  Rocket,
  Briefcase,
  Smile,
};

export const careersHero = {
  kicker: "Careers & internships",
  heading: "Founding intern roles\nat KIDUART EdTech",
  body: "We are hiring our first internship batch in Noida for Python development, UI/UX design, and business development. Freshers are welcome to apply. Join us in building school ERP software for Indian schools.",
  image: "/images/banner/career-post-1.jpg",
  imageAlt: "KIDUART EdTech team hiring founding interns for school ERP software in Noida India",
};

export const careersValues: CareersValueCard[] = [
  {
    icon: "Rocket",
    title: "Meaningful work",
    desc: "The software you build is used by school administrators, teachers, and parents every day. You can see the impact directly.",
  },
  {
    icon: "Heart",
    title: "Tight feedback loops",
    desc: "We talk to real school teams regularly. What they need shapes what we build, and your work reaches them quickly.",
  },
  {
    icon: "BookOpen",
    title: "Room to grow",
    desc: "We invest in people who want to get better at their craft. Learning time is protected, not squeezed into gaps.",
  },
];

export const careersBenefits: CareersBenefit[] = [
  {
    icon: "Laptop",
    title: "Flexible location",
    desc: "Work from our Noida office or remotely. We care about the output, not the postcode.",
  },
  {
    icon: "BookOpen",
    title: "Learning support",
    desc: "Annual budget for courses, books, and conferences, because professional growth is part of how we work.",
  },
  {
    icon: "Heart",
    title: "Health coverage",
    desc: "Comprehensive health insurance for you and, depending on your plan, your family.",
  },
  {
    icon: "Rocket",
    title: "Early equity",
    desc: "Stock options available for key roles, so people building the product share in its growth.",
  },
  {
    icon: "Smile",
    title: "Parental leave",
    desc: "Generous paid leave for all new parents. We believe in people having a life outside work.",
  },
  {
    icon: "Briefcase",
    title: "Team time",
    desc: "Regular in-person gatherings for a distributed team, with time set aside to work together in person.",
  },
];

export const careersWorkText = {
  heading: "How we work",
  body: "We hire for judgement and trust people to use it. Expect clear goals, honest feedback, and accountability for the work you commit to. We value direct communication, curiosity, and a bias toward shipping.",
};

export const roleCategories = [
  "Python Intern",
  "UI/UX Design Intern",
  "Business Development Intern",
];

export const internshipApplicationUrl =
  "https://docs.google.com/forms/d/1sJlHudZcLD1D5pZSo689FoAnDUQG9r1y0gfIQEpALZA/viewform";

export const openRoles = {
  heading: "Open internship positions",
  stateTitle: "Founding Interns applications open",
  stateBody:
    "Applications are open for our first internship batch in Noida. Freshers can apply and join the team from day one.",
  ctaLabel: "Apply today",
  ctaHref: internshipApplicationUrl,
  applyNote:
    "Complete the application form and tell us which role you are interested in.",
  categoriesHeading: "Open internship roles",
};

export const hiringSteps: HiringStep[] = [
  { step: "1", title: "Application", desc: "Submit resume & portfolio" },
  { step: "2", title: "Interview", desc: "Meet the team & tech assessment" },
  { step: "3", title: "Offer", desc: "Welcome aboard!" },
];
