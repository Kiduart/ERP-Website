"use client";

import Hero from "../../components/sections/Hero";
import Section from "../../components/sections/Section";
import PricingPlans from "../../components/pages/Pricing/PricingPlans";
import FeatureComparison from "../../components/pages/Pricing/FeatureComparison";
import Testimonials from "../../components/pages/Pricing/Testimonials";
import CallToAction from "../../components/pages/Pricing/CallToAction";
import { FaChevronDown } from "react-icons/fa";
import { useState } from "react";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import ParticleEffect from "@/components/utils/ParticleEffect";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import { motion } from 'framer-motion';

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function Pricing() {
  const typography = theme?.typography || defaultTypography;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Pricing" },
  ];

  const pricingFloatingIcons = [
    { icon: "💰", size: "35px", top: "6%", left: "4%", delay: 0 },
    { icon: "💳", size: "30px", top: "14%", right: "6%", delay: 1 },
    { icon: "📈", size: "32px", bottom: "10%", left: "8%", delay: 2 },
  ];

  const pricingImageElements = [
    {
      className: "rounded-full border-2 border-dashed border-neonOrange",
      size: 120,
      angle: 225,
      initial: { x: -120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-accentCyan",
      style: { background: "linear-gradient(135deg, rgb(0 182 239), rgb(255 127 127))" },
      size: 80,
      angle: 135,
      initial: { x: 120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-coral",
      style: { background: "linear-gradient(135deg, rgb(255 127 127), rgb(0 33 71))" },
      size: 50,
      angle: 45,
      initial: { y: -120 },
      animate: { y: 0 },
    },
    {
      className: "",
      imgSrc: "https://img.icons8.com/color/96/000000/banknotes.png",
      imgAlt: "Banknotes icon",
      size: 90,
      angle: 315,
      initial: { y: 120 },
      animate: { y: 0 },
    },
  ];

  const pricingFAQs = [
    {
      question: "Can I switch plans later?",
      answer: "Yes, you can upgrade or downgrade your plan at any time.",
    },
    {
      question: "Is there a free trial?",
      answer: "We offer a 30-day free trial for the Pro plan.",
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards, PayPal, and bank transfers for annual plans.",
    },
    {
      question: "Do you offer discounts for non-profits?",
      answer: "Yes, we provide a 20% discount for registered non-profit organizations.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const positions = [
    { size: "300px", top: "-50px", right: "-50px" },
    { size: "200px", bottom: "-30px", left: "-30px" },
  ];

  return (
    <div className="w-full">
      <div className="relative">
        <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
        <ParticleEffect count={30} color={theme.colors.neonPink} shape="hexagon" speed={0.3} motionPath="spiral" />
        <Hero
          title="Pricing Plans"
          description="Choose the plan that best fits your school's needs."
          breadcrumbItems={breadcrumbItems}
          gradientClass="from-neonOrange/80 via-accentCyan/60 to-primary/80 via-coral/50"
          circleColors={["bg-neonOrange", "bg-coral", "bg-accentCyan"]}
          circlePositions={[
            { size: "300px", top: "0px", left: "-50px" },
            { size: "200px", bottom: "20px", right: "-20px" },
          ]}
          floatingIcons={pricingFloatingIcons.map((icon) => ({
            ...icon,
            className: "animate-float-with-trail",
          }))}
          imageSrc="https://images.unsplash.com/photo-1556742524-750f5ab749fb?q=80&w=2070&auto=format&fit=crop"
          imageElements={pricingImageElements}
          icon="💰"
          showImage={true}
          showTrustBadge={false}
          titleClassName="bg-gradient-to-r from-neonOrange to-accentCyan bg-clip-text text-transparent animate-glow"
        />
      </div>
      <Section title="Our Plans" className="bg-gradient-to-br from-white to-accentCyan/10">
        <PricingPlans />
      </Section>
      <Section title="Feature Comparison" className="bg-gradient-to-br from-white to-neonPink/10">
        <FeatureComparison />
      </Section>
      <Section title="Pricing FAQs" glassmorphism={true} className="relative bg-gradient-to-br from-white to-skyBlue/10">
        <ParticleEffect count={20} color={theme.colors.accentCyan} shape="star" speed={0.2} />
        <DecorativeCircles positions={positions} colors={["bg-neonOrange", "bg-coral", "bg-accentCyan"]} />
        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          {pricingFAQs.map((faq, index) => (
            <motion.div
              key={index}
              className="border-b border-gray-200"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
              >
                <h3
                  className="text-lg font-semibold text-primary"
                  style={{ fontFamily: typography.heading }}
                >
                  {faq.question}
                </h3>
                <FaChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.p
                  className="text-grayDark pb-4"
                  style={{ fontFamily: typography.body }}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  transition={{ duration: 0.3 }}
                >
                  {faq.answer}
                </motion.p>
              )}
            </motion.div>
          ))}
        </div>
      </Section>
      <Section title="What Our Users Say" className="bg-white">
        <Testimonials />
      </Section>
      <Section className="bg-gradient-to-br from-white to-neonPink/10">
        <CallToAction />
      </Section>
    </div>
  );
}