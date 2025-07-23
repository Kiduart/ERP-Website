"use client";

import { motion } from "framer-motion";
import Button from "@/components/common/Button";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import ParticleEffect from "@/components/utils/ParticleEffect";
import DecorativeCircles from "@/components/utils/DecorativeCircles";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function PartnersIntro() {
  // Use fallback if theme is undefined
  const typography = theme?.typography || defaultTypography;

  const floatAnimation = {
    y: [0, -10, 0],
    transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
  };

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.cyanToPink} height="80px" opacity={0.1} particleShape="circle" waveCount={3} texture="smooth" />
      <motion.svg
        className="absolute inset-0 w-full h-full z-0 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <motion.path
          fill={theme.colors.accentCyan}
          fillOpacity="0.3"
          d="M0,192L48,176C96,160,192,128,288,112C384,96,480,96,576,128C672,160,768,224,864,224C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          animate={{ d: [
            "M0,192L48,176C96,160,192,128,288,112C384,96,480,96,576,128C672,160,768,224,864,224C960,224,1056,160,1152,144C1248,128,1344,160,1392,176L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
            "M0,160L48,144C96,128,192,96,288,80C384,64,480,64,576,96C672,128,768,192,864,192C960,192,1056,128,1152,112C1248,96,1344,128,1392,144L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
          ] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
        />
      </motion.svg>
      <ParticleEffect count={30} color={theme.colors.neonPink} shape="hexagon" speed={0.3} motionPath="spiral" />
      <DecorativeCircles
        positions={[
          { size: '250px', top: '-70px', left: '-70px' },
          { size: '200px', bottom: '-50px', right: '-50px' },
          { size: '150px', top: '30%', left: '-40px' },
        ]}
        colors={['bg-primary', 'bg-skyBlue', 'bg-neonOrange']}
      />
      <motion.div
        className="max-w-4xl mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-3xl md:text-4xl font-bold mb-6"
          style={{ fontFamily: typography.heading }}
          animate={{
            textShadow: [
              `0 0 10px ${theme.colors.accentCyan}`,
              `0 0 20px ${theme.colors.neonPink}`,
              `0 0 10px ${theme.colors.accentCyan}`,
            ],
            color: [theme.colors.accentCyan, theme.colors.neonPink, theme.colors.accentCyan],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
        >
          Our Partners
        </motion.h2>
        <p
          className="text-lg text-grayDark leading-relaxed mb-8"
          style={{ fontFamily: typography.body }}
        >
          At KIDURAT, we believe in the power of collaboration. Our partners play a crucial role in helping us achieve our mission of transforming education globally. Together, we’ve impacted millions of students by providing innovative solutions and fostering a network of educational excellence.
        </p>
        <motion.div animate={floatAnimation}>
          <Button
            text="Become a Partner"
            href="/company/contact"
            size="large"
            variant="primary"
            className="hover:shadow-xl hover:bg-neonPink transition-all duration-300"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}