"use client";

import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import { motion } from "framer-motion";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function LeadershipIntro() {
  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
      <ParticleEffect count={20} color={theme.colors.neonPink} shape="circle" />
      <DecorativeCircles
        positions={[
          { size: '200px', top: '-50px', left: '-50px' },
          { size: '150px', bottom: '-30px', right: '-30px' },
        ]}
        colors={['bg-primary', 'bg-skyBlue']}
      />
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent mb-6"
          style={{ fontFamily: typography.heading }}
        >
          About Our Leaders
        </h2>
        <p
          className="text-lg text-grayDark leading-relaxed"
          style={{ fontFamily: typography.body }}
        >
          Our leadership team at KIDURAT is a group of visionary individuals dedicated to transforming education through innovation. With decades of combined experience in EdTech, AI, and educational administration, they guide KIDURAT’s mission to empower schools and educators worldwide. Their diverse expertise ensures that KIDURAT remains at the forefront of educational technology, delivering impactful solutions to over 10 million students across 50+ countries.
        </p>
      </motion.div>
    </div>
  );
}