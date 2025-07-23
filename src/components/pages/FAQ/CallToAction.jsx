"use client";

import Button from "@/components/common/Button";
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

export default function CallToAction() {
  const typography = theme?.typography || defaultTypography;

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="90px" opacity={0.1} particleShape="star" waveCount={4} texture="smooth" />
      <ParticleEffect count={15} color={theme.colors.skyBlue} shape="diamond" speed={0.3} />
      <DecorativeCircles
        positions={[
          { size: "250px", top: "-60px", right: "-60px" },
          { size: "200px", bottom: "-40px", left: "-40px" },
        ]}
        colors={["bg-neonPink", "bg-accentCyan"]}
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
          Ready to Get Started?
        </h2>
        <p
          className="text-lg text-grayDark leading-relaxed mb-8"
          style={{ fontFamily: typography.body }}
        >
          Explore how KIDURAT can transform your school management. Request a demo or dive into our features today!
        </p>
        <div className="flex justify-center gap-4">
          <motion.div animate={floatAnimation}>
            <Button
              text="Request a Demo"
              href="/company/request-demo"
              size="large"
              variant="primary"
              className="hover:shadow-xl hover:bg-neonPink transition-all duration-300"
            />
          </motion.div>
          <motion.div animate={floatAnimation}>
            <Button
              text="Explore Features"
              href="/features"
              size="large"
              variant="secondary"
              className="hover:shadow-xl hover:bg-accentCyan transition-all duration-300"
            />
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}