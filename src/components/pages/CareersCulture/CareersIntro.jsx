"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import Button from "@/components/common/Button";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function CareersIntro() {
  const typography = theme?.typography || defaultTypography;

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" },
  };

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
            Careers & Culture at KIDURAT
          </h2>
          <p
            className="text-lg text-grayDark leading-relaxed mb-8"
            style={{ fontFamily: typography.body }}
          >
            Join a team that’s passionate about transforming education globally. At KIDURAT, we foster a culture of innovation, collaboration, and growth, empowering our employees to make a meaningful impact on millions of students worldwide.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button
              text="Explore New Opportunities"
              href="#current-openings"
              size="large"
              variant="primary"
              className="hover:shadow-xl hover:bg-neonPink transition-all duration-300 shadow-[0_0_15px_rgba(0,255,255,0.5)] hover:shadow-[0_0_25px_rgba(255,105,180,0.7)]"
            />
          </motion.div>
        </motion.div>
        <motion.div
          className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          animate={floatAnimation}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Image
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2070&auto=format&fit=crop"
            alt="Careers at KIDURAT"
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