"use client";

import { motion } from "framer-motion";
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

export default function CommunityForum() {
  const typography = theme?.typography || defaultTypography;

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="80px" opacity={0.1} particleShape="star" waveCount={3} texture="smooth" />
      <ParticleEffect count={20} color={theme.colors.accentCyan} shape="diamond" speed={0.3} />
      <DecorativeCircles
        positions={[
          { size: "200px", top: "-50px", left: "-50px" },
          { size: "150px", bottom: "-30px", right: "-30px" },
        ]}
        colors={["bg-emeraldGreen", "bg-neonPink"]}
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
          Join Our Community Forum
        </h2>
        <p
          className="text-lg text-grayDark leading-relaxed mb-8"
          style={{ fontFamily: typography.body }}
        >
          Connect with other KIDURAT users, ask questions, share tips, and learn best practices in our vibrant community forum.
        </p>
        <motion.div animate={floatAnimation}>
          <Button
            text="Visit Forum"
            href="/community"
            size="large"
            variant="primary"
            className="hover:shadow-xl hover:bg-neonPink transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}