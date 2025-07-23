"use client";

import LeadershipHero from "@/components/pages/LeadershipTeam/LeadershipHero";
import LeadershipIntro from "@/components/pages/LeadershipTeam/LeadershipIntro";
import LeaderList from "@/components/pages/LeadershipTeam/LeaderList";
import LeaderJourneys from "@/components/pages/LeadershipTeam/LeaderJourneys";
import Section from "@/components/sections/Section";

const leaders = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO & Founder",
    photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=2070&auto=format&fit=crop",
    journey: [
      "John Doe founded KIDURAT in 2018 with a vision to revolutionize education through technology. With over 15 years of experience in EdTech, John has led KIDURAT to impact over 10 million students worldwide.",
      "Under his leadership, KIDURAT has received numerous awards, including the EdTech Award 2024. John is passionate about empowering educators and creating AI-driven solutions that enhance learning outcomes.",
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Chief Technology Officer",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=2070&auto=format&fit=crop",
    journey: [
      "Jane Smith joined KIDURAT in 2019 as CTO, bringing her expertise in AI and software engineering. She has been instrumental in developing KIDURAT’s AI-powered school management system.",
      "Jane’s innovative approach to technology has helped KIDURAT scale its operations globally, supporting over 5,000 schools across 50+ countries.",
    ],
  },
  {
    id: 3,
    name: "Michael Brown",
    position: "Chief Operating Officer",
    photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2070&auto=format&fit=crop",
    journey: [
      "Michael Brown oversees KIDURAT’s operations as COO. With a background in educational administration, Michael ensures that KIDURAT’s solutions meet the needs of schools worldwide.",
      "His strategic leadership has driven a 30% increase in operational efficiency for KIDURAT’s partner schools since he joined in 2020.",
    ],
  },
];

export default function LeadershipTeam() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Leadership Team" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      <LeadershipHero breadcrumbItems={breadcrumbItems} />
      <Section className="bg-white">
        <LeadershipIntro />
      </Section>
      <Section className="bg-gradient-to-br from-white to-accentCyan/10">
        <LeaderList leaders={leaders} />
      </Section>
      <Section className="bg-white">
        <LeaderJourneys leaders={leaders} />
      </Section>
    </div>
  );
}