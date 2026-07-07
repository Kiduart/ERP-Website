export type CustomerStory = {
  slug: string;
  initial: string;
  name: string;
  location: string;
  type: string;
  title: string;
  summary: string;
  stat: string;
  color: string;
  image: string;
};

export const customerStoryFilters = [
  "All",
  "K-12",
  "Higher Secondary",
  "School District",
  "Private School",
  "Religious Institution",
  "International School",
] as const;

export const customerStories: CustomerStory[] = [
  {
    slug: "k12-multi-campus",
    initial: "K",
    name: "Multi-campus K-12 school",
    location: "North India",
    type: "K-12",
    title: "Moving admissions and fees off spreadsheets across three campuses.",
    summary:
      "Student records lived in different files per campus. Fee reminders went out late, and the accounts team spent most of the week reconciling numbers by hand.",
    stat: "Single fee ledger for all sections",
    color: "from-brand-teal to-brand-navy",
    image: "/images/banner/stories-post-1.jpg",
  },
  {
    slug: "new-private-school",
    initial: "P",
    name: "New private school",
    location: "Western India",
    type: "Private School",
    title: "Starting with digital enrollment from year one.",
    summary:
      "A school in its first academic session wanted to avoid paper registers before habits set in. Even with a few hundred students, manual tracking was already slowing the office down.",
    stat: "Online forms linked to student profiles",
    color: "from-brand-orange to-brand-yellow",
    image: "/images/banner/stories-post-2.jpg",
  },
  {
    slug: "international-programme",
    initial: "I",
    name: "International programme school",
    location: "South India",
    type: "International School",
    title: "Handling IB-style grading and multilingual parent updates.",
    summary:
      "The academic team needed flexible grade scales and fee plans for families on different calendars, without maintaining a separate sheet for each nationality.",
    stat: "Fee plans and notices by student group",
    color: "from-brand-navy to-brand-teal",
    image: "/images/banner/stories-post-3.jpg",
  },
  {
    slug: "district-group",
    initial: "D",
    name: "School group, multiple branches",
    location: "South India",
    type: "School District",
    title: "One dashboard for a group of branch schools.",
    summary:
      "Leadership could not compare attendance or collections across branches because each school reported differently. Monthly compliance packs took weeks to assemble.",
    stat: "Branch-level reports from one login",
    color: "from-brand-teal to-brand-orange",
    image: "/images/banner/stories-post-4.jpg",
  },
  {
    slug: "heritage-institution",
    initial: "H",
    name: "Established faith-based school",
    location: "Western India",
    type: "Religious Institution",
    title: "Digitising registers without changing how staff work with families.",
    summary:
      "Decades of paper processes made staff wary of big IT projects. The goal was smaller daily wins: attendance on phone, fees online, circulars that parents actually read.",
    stat: "Daily attendance marked in under a minute per class",
    color: "from-brand-yellow to-brand-orange",
    image: "/images/banner/stories-post-5.jpg",
  },
  {
    slug: "higher-secondary",
    initial: "S",
    name: "Higher secondary school",
    location: "South India",
    type: "Higher Secondary",
    title: "Tracking board-exam readiness across subjects.",
    summary:
      "Teachers needed a clearer view of which students were slipping in multiple subjects before pre-board exams, not after results were printed.",
    stat: "Early alerts on attendance and marks trends",
    color: "from-brand-navy to-brand-orange",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=900",
  },
];
