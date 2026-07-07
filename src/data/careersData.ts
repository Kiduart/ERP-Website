import { type LucideIcon, Laptop, Heart, BookOpen, Rocket, Briefcase, Smile } from "lucide-react";

export type CareersIconName = "Laptop" | "Heart" | "BookOpen" | "Rocket" | "Briefcase" | "Smile";

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

export const careersIconMap: Record<CareersIconName, LucideIcon> = {
  Laptop,
  Heart,
  BookOpen,
  Rocket,
  Briefcase,
  Smile,
};

export const careersHero = {
  kicker: "Join the team",
  heading: "Build software\nthat changes\nhow schools work",
  body: "We are a small team working on a real problem , school administration in India is still heavily manual, and we are building the platform that changes that. If that sounds like the kind of work you want to do, you should talk to us.",
  image: "/images/banner/career-post-1.jpg",
  imageAlt: "KIDUART team working on school ERP software in Noida, India",
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
    desc: "We talk to real school teams regularly. What they need shapes what we build , and your work reaches them fast.",
  },
  {
    icon: "BookOpen",
    title: "Room to grow",
    desc: "We invest in people who want to get better at their craft. Learning time is protected, not squeezed into gaps.",
  },
];

export const careersBenefits: CareersBenefit[] = [
  { icon: "Laptop", title: "Flexible location", desc: "Work from our Noida office or remotely. We care about the output, not the postcode." },
  { icon: "BookOpen", title: "Learning support", desc: "Annual budget for courses, books, and conferences , because standing still professionally is not an option here." },
  { icon: "Heart", title: "Health coverage", desc: "Comprehensive health insurance for you and, depending on your plan, your family." },
  { icon: "Rocket", title: "Early equity", desc: "Stock options available for key roles , because we want the people building this to benefit from where it goes." },
  { icon: "Smile", title: "Parental leave", desc: "Generous paid leave for all new parents. We believe in people having a life outside work." },
  { icon: "Briefcase", title: "Team time", desc: "Regular in-person gatherings for a fully distributed team , because remote works better with occasional face time." },
];

export const careersWorkText = {
  heading: "How we work",
  body: "We hire for judgement and trust people to use it. There is no micromanagement here , just clear goals, honest feedback, and the expectation that everyone does the work they said they would. We value direct communication, intellectual curiosity, and a preference for shipping over discussing.",
};

export const roleCategories = ["Engineering & Product", "Sales & Customer Success", "Marketing & Content", "Operations & Support"];

export const openRoles = {
  heading: "Open Positions",
  stateTitle: "We're Growing",
  stateBody:
    "We're in the early stages of building our team. New roles will be posted here soon. Meanwhile, if you're passionate about EdTech and want to be considered early, reach out directly.",
  ctaLabel: "Send Your Resume",
  ctaHref: "mailto:careers@kiduart.com",
  categoriesHeading: "Role categories we'll be hiring for",
};

export const hiringSteps: HiringStep[] = [
  { step: "1", title: "Application", desc: "Submit resume & portfolio" },
  { step: "2", title: "Interview", desc: "Meet the team & tech assessment" },
  { step: "3", title: "Offer", desc: "Welcome aboard!" },
];
