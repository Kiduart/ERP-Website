"use client";

import PartnersIntro from "@/components/pages/OurPartners/PartnersIntro";
import PartnerList from "@/components/pages/OurPartners/PartnerList";
import Section from "@/components/sections/Section";
import Breadcrumb from "@/components/common/Breadcrumb";

const partners = [
  {
    id: 1,
    name: "EdTech Solutions",
    logo: "https://images.unsplash.com/photo-1620712944743-160d6e2b2e5b?q=80&w=200&h=200&auto=format&fit=crop",
    description:
      "EdTech Solutions has been a key partner since 2019, providing innovative tools to enhance classroom learning for over 2 million students.",
    website: "https://example.com/edtechsolutions",
    profile: "/company/our-partners/edtechsolutions",
  },
  {
    id: 2,
    name: "Global Learning Network",
    logo: "https://images.unsplash.com/photo-1531482615713-2e6d3a709b3a?q=80&w=200&h=200&auto=format&fit=crop",
    description:
      "Global Learning Network collaborates with KIDURAT to connect educators worldwide, fostering a community of over 10,000 schools.",
    website: "https://example.com/globallearning",
    profile: "/company/our-partners/globallearning",
  },
  {
    id: 3,
    name: "AI Innovators",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=200&h=200&auto=format&fit=crop",
    description:
      "AI Innovators supports KIDURAT with cutting-edge AI technology, powering our school management systems for seamless operations.",
    website: "https://example.com/aiinnovators",
    profile: "/company/our-partners/aiinnovators",
  },
];

export default function OurPartners() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Our Partners" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      <Section className="bg-white py-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </Section>
      <Section className="bg-white">
        <PartnersIntro />
      </Section>
      <Section className="bg-gradient-to-br from-white to-accentCyan/10">
        <PartnerList partners={partners} />
      </Section>
    </div>
  );
}