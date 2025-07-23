"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/common/Button";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function FeatureSpotlight() {
  const typography = theme?.typography || defaultTypography;

  return (
    <div className="relative py-16">
      <WaveBackground
        gradient={theme.gradients.purpleToGreen}
        height="100px"
        opacity={0.1}
        particleShape="diamond"
        waveCount={3}
        texture="wavy"
      />
      <ParticleEffect
        count={25}
        color={theme.colors.accentPurple}
        shape="star"
        speed={0.3}
      />
      <DecorativeCircles
        positions={[
          { size: "300px", top: "-80px", left: "-80px" },
          { size: "250px", bottom: "-60px", right: "-60px" },
        ]}
        colors={["bg-emeraldGreen", "bg-neonOrange"]}
      />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2
            className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent mb-6"
            style={{ fontFamily: typography.heading }}
          >
            Spotlight: AI Analytics
          </h2>
          <p
            className="text-lg text-grayDark leading-relaxed mb-8"
            style={{ fontFamily: typography.body }}
          >
            Gain deep insights into student performance, attendance trends, and school operations with our AI-powered analytics. Make data-driven decisions to enhance learning outcomes.
          </p>
          <Button
            text="Learn More"
            href="/features/ai-analytics"
            size="large"
            variant="primary"
            className="hover:shadow-xl hover:bg-neonPink transition-all duration-300 animate-float"
          />
        </motion.div>
        <motion.div
          className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2070&auto=format&fit=crop"
            alt="AI Analytics Feature"
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw, 50vw"
            loading="lazy"
          />
        </motion.div>
      </div>
    </div>
  );
}