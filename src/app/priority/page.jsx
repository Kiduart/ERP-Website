"use client";

import Hero from "@/components/sections/Hero";
import Section from "@/components/sections/Section";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import WaveBackground from "@/components/utils/WaveBackground";
import OurImpact from "../../components/pages/Priorities/OurImpact";
import HowWeAchieve from "../../components/pages/Priorities/HowWeAchieve";
import CallToAction from "../../components/pages/Priorities/CallToAction";
import { theme } from "@/components/utils/theme";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { motion } from 'framer-motion';
import Priorities from "@/components/pages/Priorities/Prioriteies";


// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function Priority() {
  const typography = theme?.typography || defaultTypography;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Priorities" },
  ];

  const priorityFloatingIcons = [
    { icon: "🎯", size: "35px", top: "5%", left: "5%", delay: 0 },
    { icon: "✅", size: "30px", top: "10%", right: "8%", delay: 1 },
    { icon: "📅", size: "32px", bottom: "12%", left: "12%", delay: 2 },
  ];

  const priorityImageElements = [
    {
      className: "rounded-full border-2 border-dashed border-primary",
      size: 120,
      angle: 225,
      initial: { x: -120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-neonOrange",
      style: { background: "linear-gradient(135deg, rgb(255 165 0), rgb(0 182 239))" },
      size: 80,
      angle: 135,
      initial: { x: 120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-skyBlue",
      style: { background: "linear-gradient(135deg, rgb(135 206 235), rgb(249 206 51))" },
      size: 50,
      angle: 45,
      initial: { y: -120 },
      animate: { y: 0 },
    },
    {
      className: "",
      imgSrc: "https://img.icons8.com/color/96/000000/target.png",
      imgAlt: "Target icon",
      size: 90,
      angle: 315,
      initial: { y: 120 },
      animate: { y: 0 },
    },
  ];

  const positions = [
    { size: "300px", top: "-50px", right: "-50px" },
    { size: "200px", bottom: "-30px", left: "-30px" },
  ];

  const testimonial = {
    quote:
      "KIDURAT’s focus on security and efficiency has allowed us to dedicate more time to our students’ growth.",
    author: "Sarah Johnson, Principal",
    school: "Bright Future Academy",
  };

  return (
    <div className="w-full">
      <div className="relative">
        <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
        <ParticleEffect count={30} color={theme.colors.neonPink} shape="hexagon" speed={0.3} motionPath="spiral" />
        <Hero
          title="Our Priorities"
          description="Learn about the core principles that drive KIDURAT."
          breadcrumbItems={breadcrumbItems}
          gradientClass="from-primary/80 via-neonOrange/60 to-accentCyan/80 via-skyBlue/50"
          circleColors={["bg-neonOrange", "bg-accentCyan", "bg-skyBlue"]}
          circlePositions={[
            { size: "350px", top: "-70px", left: "-70px" },
            { size: "200px", bottom: "20px", right: "-20px" },
          ]}
          floatingIcons={priorityFloatingIcons.map((icon) => ({
            ...icon,
            className: "animate-float-with-trail",
          }))}
          imageSrc="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2070&auto=format&fit=crop"
          imageElements={priorityImageElements}
          icon="🎯"
          showTrustBadge={false}
          titleClassName="bg-gradient-to-r from-primary to-neonOrange bg-clip-text text-transparent animate-glow"
        />
      </div>
      <Section title="Our Priorities" className="bg-gradient-to-br from-white to-accentCyan/10">
        <Priorities />
      </Section>
      <Section title="Why These Priorities Matter" glassmorphism={true} className="relative bg-gradient-to-br from-white to-neonPink/10">
        <WaveBackground gradient={theme.gradients.purpleToGreen} height="80px" opacity={0.1} particleShape="star" waveCount={3} texture="smooth" />
        <ParticleEffect count={20} color={theme.colors.accentCyan} shape="star" speed={0.2} />
        <DecorativeCircles positions={positions} colors={["bg-neonOrange", "bg-accentCyan", "bg-skyBlue"]} />
        <div className="relative z-10 text-center max-w-3xl mx-auto">
          <motion.p
            className="text-lg text-grayDark mb-6"
            style={{ fontFamily: typography.body }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Our priorities are designed to ensure that schools can focus on what matters most—student success. By prioritizing security, efficiency, and innovation, we empower educators to create a better learning environment.
          </motion.p>
          <motion.blockquote
            className="text-grayDark italic border-l-4 border-primary pl-4 py-2"
            style={{ fontFamily: typography.body }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            "{testimonial.quote}"
            <footer className="mt-2 text-primary font-semibold">
              — {testimonial.author}, {testimonial.school}
            </footer>
          </motion.blockquote>
        </div>
      </Section>
      <Section title="Our Impact" className="bg-gradient-to-br from-white to-skyBlue/10">
        <OurImpact />
      </Section>
      <Section title="How We Achieve These Priorities" className="bg-white">
        <HowWeAchieve />
      </Section>
      <Section className="bg-gradient-to-br from-white to-neonPink/10">
        <CallToAction />
      </Section>
    </div>
  );
}