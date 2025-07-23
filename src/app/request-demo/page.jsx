"use client";

import DemoRequestForm from "@/components/pages/RequestDemo/DemoRequestForm";
import ContactSales from "@/components/pages/RequestDemo/ContactSales";
import RecentAwards from "@/components/pages/RequestDemo/RecentAwards";
import Section from "@/components/sections/Section";
import Breadcrumb from "@/components/common/Breadcrumb";

export default function RequestDemo() {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Company", href: "/company" },
    { label: "Request a Demo" },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-white to-gray-50">
      <Section className="bg-white py-8">
        <div className="max-w-7xl mx-auto">
          <Breadcrumb items={breadcrumbItems} />
        </div>
      </Section>
      <Section className="bg-gradient-to-br from-white to-accentCyan/10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 py-16">
          <div className="lg:w-2/3">
            <DemoRequestForm />
          </div>
          <div className="lg:w-1/3 flex flex-col gap-8">
            <ContactSales />
            <RecentAwards />
          </div>
        </div>
      </Section>
    </div>
  );
}