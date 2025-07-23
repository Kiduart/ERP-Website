"use client";

import FeatureList from "@/components/pages/Features/FeatureList";
import FeatureSpotlight from "@/components/pages/Features/FeatureSpotlight";
import Testimonials from "@/components/pages/Features/Testimonials";
import CallToAction from "@/components/pages/Features/CallToAction";
import Hero from "@/components/sections/Hero";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import ParticleEffect from "@/components/utils/ParticleEffect";
import Section from "@/components/sections/Section";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import { motion } from "framer-motion";


// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function Features() {
  const typography = theme?.typography || defaultTypography;

  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Features" },
  ];

  const featuresFloatingIcons = [
    { icon: "⚙️", size: "35px", top: "5%", left: "5%", delay: 0 },
    { icon: "💻", size: "30px", top: "10%", right: "8%", delay: 1 },
    { icon: "📊", size: "32px", bottom: "12%", left: "12%", delay: 2 },
  ];

  const featuresImageElements = [
    {
      className: "rounded-full border-2 border-dashed border-accentCyan",
      size: 120,
      angle: 225,
      initial: { x: -120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-neonPink",
      style: { background: "linear-gradient(135deg, rgb(255 105 180), rgb(111 66 193))" },
      size: 80,
      angle: 135,
      initial: { x: 120 },
      animate: { x: 0 },
    },
    {
      className: "rounded-full border-2 border-violet",
      style: { background: "linear-gradient(135deg, rgb(148 0 211), rgb(0 182 239))" },
      size: 50,
      angle: 45,
      initial: { y: -120 },
      animate: { y: 0 },
    },
    {
      className: "",
      imgSrc: "https://img.icons8.com/color/96/000000/settings.png",
      imgAlt: "Settings icon",
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

  const comparisonData = [
    { feature: "Student Information", basic: "✔", pro: "✔", enterprise: "✔" },
    { feature: "Attendance Tracking", basic: "✔", pro: "✔", enterprise: "✔" },
    { feature: "AI Analytics", basic: "", pro: "", enterprise: "✔" },
    { feature: "Parent Portal", basic: "", pro: "✔", enterprise: "✔" },
    { feature: "Mobile App", basic: "", pro: "", enterprise: "✔" },
  ];

  return (
    <div className="w-full">
      <div className="relative">
        <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
        <ParticleEffect count={30} color={theme.colors.neonPink} shape="hexagon" speed={0.3} motionPath="spiral" />
        <Hero
          title="Explore KIDURAT Features"
          description="Discover the powerful features that make KIDURAT the best choice for school management."
          breadcrumbItems={breadcrumbItems}
          gradientClass="from-accentCyan/80 via-neonPink/60 to-violet/80 via-deepIndigo/50"
          circleColors={["bg-neonPink", "bg-violet", "bg-deepIndigo"]}
          circlePositions={[
            { size: "350px", top: "-50px", left: "-50px" },
            { size: "200px", bottom: "0px", right: "0px" },
          ]}
          floatingIcons={featuresFloatingIcons}
          imageSrc="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
          imageElements={featuresImageElements}
          icon="⚙️"
          buttonText="See All Features"
          buttonLink="#features"
          showTrustBadge={false}
          titleClassName="bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent animate-glow"
          buttonClassName="animate-float"
        />
      </div>
      <Section title="Our Features" className="bg-gradient-to-br from-white to-accentCyan/10">
        <FeatureList />
      </Section>
      <Section title="Feature Comparison" glassmorphism={true} className="relative bg-gradient-to-br from-white to-neonPink/10">
        <ParticleEffect count={20} color={theme.colors.accentCyan} shape="star" speed={0.2} />
        <DecorativeCircles positions={positions} colors={["bg-neonPink", "bg-violet", "bg-deepIndigo"]} />
        <div className="relative z-10 overflow-x-auto">
          <table className="min-w-full text-center border-collapse">
            <thead>
              <tr className="bg-primary text-white">
                <th className="p-4" style={{ fontFamily: typography.heading }}>
                  Feature
                </th>
                <th className="p-4" style={{ fontFamily: typography.heading }}>
                  Basic
                </th>
                <th className="p-4" style={{ fontFamily: typography.heading }}>
                  Pro
                </th>
                <th className="p-4" style={{ fontFamily: typography.heading }}>
                  Enterprise
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <motion.tr
                  key={index}
                  className="border-b border-gray-200 group"
                  whileHover={{
                    backgroundColor: theme.colors.accentCyan + "10",
                    transition: { duration: 0.3 },
                  }}
                >
                  <td
                    className="p-4 text-grayDark"
                    style={{ fontFamily: typography.body }}
                  >
                    {row.feature}
                  </td>
                  <td
                    className="p-4 text-grayDark relative"
                    style={{ fontFamily: typography.body }}
                  >
                    {row.basic && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="inline-block"
                      >
                        {row.basic}
                      </motion.span>
                    )}
                  </td>
                  <td
                    className="p-4 text-grayDark relative"
                    style={{ fontFamily: typography.body }}
                  >
                    {row.pro && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="inline-block"
                      >
                        {row.pro}
                      </motion.span>
                    )}
                  </td>
                  <td
                    className="p-4 text-grayDark relative"
                    style={{ fontFamily: typography.body }}
                  >
                    {row.enterprise && (
                      <motion.span
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 * index }}
                        className="inline-block"
                      >
                        {row.enterprise}
                      </motion.span>
                    )}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>
      <Section title="Feature Spotlight" className="bg-gradient-to-br from-white to-skyBlue/10">
        <FeatureSpotlight />
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