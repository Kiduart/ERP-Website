"use client";

import Button from "@/components/common/Button";
import FAQList from "@/components/pages/FAQ/FAQList";
import VideoTutorials from "@/components/pages/FAQ/VideoTutorials";
import CommunityForum from "@/components/pages/FAQ/CommunityForum";
import CallToAction from "@/components/pages/FAQ/CallToAction";
import Hero from "@/components/sections/Hero";
import Section from "@/components/sections/Section";
import WaveBackground from "@/components/utils/WaveBackground";
import ParticleEffect from "@/components/utils/ParticleEffect";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import { theme } from "@/components/utils/theme";
import { motion } from "framer-motion";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function FAQ() {
  const typography = theme?.typography || defaultTypography;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "FAQ" },
  ];

  const faqFloatingIcons = [
    { icon: "❓", size: "35px", top: "7%", left: "6%", delay: 0 },
    { icon: "💬", size: "30px", top: "13%", right: "7%", delay: 1 },
    { icon: "📋", size: "32px", bottom: "11%", left: "9%", delay: 2 },
  ];

  const faqImageElements = [
    {
      className: "rounded-full border-2 border-dashed border-accentPurple",
      size: 120,
      angle: 225,
      initial: { x: -120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-emeraldGreen",
      style: { background: "linear-gradient(135deg, rgb(0 201 87), rgb(148 0 211))" },
      size: 80,
      angle: 135,
      initial: { x: 120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-neonPink",
      style: { background: "linear-gradient(135deg, rgb(255 105 180), rgb(0 33 71))" },
      size: 50,
      angle: 45,
      initial: { y: -120 },
      animate: { y: 0 },
    },
    {
      className: "",
      imgSrc: "https://img.icons8.com/color/96/000000/question-mark.png",
      imgAlt: "Question mark icon",
      size: 90,
      angle: 315,
      initial: { y: 120 },
      animate: { y: 0 },
    },
  ];

  const positions = [
    { size: "300px", top: "-50px", left: "-50px" },
    { size: "200px", bottom: "-30px", right: "-30px" },
  ];

  const contactMethods = [
    { method: "Email", value: "support@kidurat.com", href: "mailto:support@kidurat.com", icon: "📧" },
    { method: "Phone", value: "+91-123-456-7890", href: "tel:+911234567890", icon: "📞" },
    { method: "Chat", value: "Live Chat", href: "/chat", icon: "💬" },
  ];

  return (
    <div className="w-full">
      <div className="relative">
        <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
        <ParticleEffect count={30} color={theme.colors.neonPink} shape="hexagon" speed={0.3} motionPath="spiral" />
        <Hero
          title="Frequently Asked Questions"
          description="Find answers to common questions about KIDURAT."
          breadcrumbItems={breadcrumbItems}
          gradientClass="from-emeraldGreen/70 via-primary/90 to-skyBlue/50 via-neonOrange/90"
          circleColors={["bg-accentPurple", "bg-emeraldGreen", "bg-neonPink"]}
          circlePositions={[
            { size: "300px", top: "20px", left: "-50px" },
            { size: "200px", bottom: "0px", right: "0px" },
          ]}
          floatingIcons={faqFloatingIcons.map((icon) => ({
            ...icon,
            className: "animate-float-with-trail",
          }))}
          imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          imageElements={faqImageElements}
          icon="❓"
          showImage={true}
          showTrustBadge={false}
          titleClassName="bg-gradient-to-r from-emeraldGreen to-neonPink bg-clip-text text-transparent animate-glow"
        />
      </div>
      <Section title="FAQs" className="bg-gradient-to-br from-white to-accentCyan/10">
        <FAQList />
      </Section>
      <Section title="Still Have Questions?" glassmorphism={true} className="relative bg-gradient-to-br from-white to-neonPink/10">
        <WaveBackground gradient={theme.gradients.purpleToGreen} height="80px" opacity={0.1} particleShape="star" waveCount={3} texture="smooth" />
        <ParticleEffect count={20} color={theme.colors.accentCyan} shape="star" speed={0.2} />
        <DecorativeCircles positions={positions} colors={["bg-accentPurple", "bg-emeraldGreen", "bg-neonPink"]} />
        <div className="relative z-10 text-center">
          <p
            className="text-lg text-grayDark mb-6"
            style={{ fontFamily: typography.body }}
          >
            Our support team is here to help you with any queries.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
            {contactMethods.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="flex items-center space-x-2"
              >
                <span className="text-2xl">{contact.icon}</span>
                <a
                  href={contact.href}
                  className="text-primary hover:text-neonPink transition-colors duration-300"
                  style={{ fontFamily: typography.body }}
                >
                  {contact.value}
                </a>
              </motion.div>
            ))}
          </div>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <Button
              text="Contact Support"
              href="/company/contact"
              size="large"
              className="hover:shadow-xl hover:bg-neonPink transition-all duration-300"
            />
          </motion.div>
        </div>
      </Section>
      <Section title="Video Tutorials" className="bg-gradient-to-br from-white to-skyBlue/10">
        <VideoTutorials />
      </Section>
      <Section title="Join Our Community" className="bg-white">
        <CommunityForum />
      </Section>
      <Section className="bg-gradient-to-br from-white to-neonPink/10">
        <CallToAction />
      </Section>
    </div>
  );
}