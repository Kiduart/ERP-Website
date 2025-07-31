"use client";

import Button from "@/components/common/Button";
import Card from "@/components/common/Card";
import Section from "@/components/sections/Section";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import { FaPhone, FaEnvelope } from "react-icons/fa";

export default function TalkToSales() {
  const positions = [
    { size: "120px", top: "-15px", right: "-15px", opacity: 0.08 },
    { size: "100px", bottom: "-10px", left: "-10px", opacity: 0.08 },
  ];

  return (
    <Section title="Talk to Sales" variant="solid" className="bg-white">
      <DecorativeCircles
        positions={positions}
        colors={["bg-accentCyan", "bg-neonPink"]}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10">
        <Card
          title="Contact Our Sales Team"
          description="Interested in KIDUART’s solutions? Schedule a demo or discuss pricing with our sales experts."
          icon="📞"
          variant="highlight"
          className="shadow-lg"
        />
        <div className="flex flex-col space-y-4 justify-center">
          <Button
            text="Book a Demo"
            href="https://calendly.com/kiduart/demo"
            size="large"
            variant="primary"
            className="shadow-md hover:shadow-lg"
          />
          <div className="flex items-center">
            <FaPhone className="w-5 h-5 text-primary mr-2" />
            <p className="text-grayDark font-poppins">+91 99********</p>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="w-5 h-5 text-primary mr-2" />
            <p className="text-grayDark font-poppins">sales@kiduart.com</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
