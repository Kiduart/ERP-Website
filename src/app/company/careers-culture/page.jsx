"use client";

import CareersIntro from "@/components/pages/CareersCulture/CareersIntro";
import GetToKnow from "@/components/pages/CareersCulture/GetToKnow";
import CoreValues from "@/components/pages/CareersCulture/CoreValues";
import BenefitsPerks from "@/components/pages/CareersCulture/BenefitsPerks";
import ProudPartners from "@/components/pages/CareersCulture/ProudPartners";
import CurrentOpenings from "@/components/pages/CareersCulture/CurrentOpenings";
import Section from "@/components/sections/Section";
import Breadcrumb from "@/components/common/Breadcrumb";

const partners = [
  { id: 1, name: "EdTech Solutions", logo: "https://images.unsplash.com/photo-1620712944743-160d6e2b2e5b?q=80&w=200&h=200&auto=format&fit=crop" },
  { id: 2, name: "Global Learning Network", logo: "https://images.unsplash.com/photo-1531482615713-2e6d3a709b3a?q=80&w=200&h=200&auto=format&fit=crop" },
  { id: 3, name: "AI Innovators", logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=200&h=200&auto=format&fit=crop" },
];

const openings = [
  { id: 1, title: "Software Engineer", location: "Bangalore, India", department: "Engineering", keywords: ["React", "Node.js"] },
  { id: 2, title: "Product Manager", location: "Remote", department: "Product", keywords: ["Agile", "EdTech"] },
  { id: 3, title: "UX Designer", location: "New York, USA", department: "Design", keywords: ["Figma", "UI/UX"] },
  { id: 4, title: "Data Analyst", location: "London, UK", department: "Analytics", keywords: ["SQL", "Python"] },
];

export default function CareersCulture() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Careers & Culture" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      <Section className="bg-white py-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </Section>
      <Section className="bg-white">
        <CareersIntro />
      </Section>
      <Section className="bg-gradient-to-br from-white to-accentCyan/10">
        <GetToKnow />
      </Section>
      <Section className="bg-white">
        <CoreValues />
      </Section>
      <Section className="bg-gradient-to-br from-white to-skyBlue/10">
        <BenefitsPerks />
      </Section>
      <Section className="bg-white">
        <ProudPartners partners={partners} />
      </Section>
      <Section className="bg-gradient-to-br from-white to-neonPink/10">
        <CurrentOpenings openings={openings} />
      </Section>
    </div>
  );
}