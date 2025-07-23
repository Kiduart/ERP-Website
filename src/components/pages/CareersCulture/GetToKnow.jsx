"use client";

import { motion } from "framer-motion";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function GetToKnow() {
  const typography = theme?.typography || defaultTypography;

  return (
    <div className="relative py-16">
      <WaveBackground gradient={theme.gradients.primaryToCyan} height="100px" opacity={0.1} particleShape="diamond" waveCount={3} texture="wavy" />
      <ParticleEffect count={25} color={theme.colors.accentPurple} shape="star" />
      <DecorativeCircles
        positions={[
          { size: '300px', top: '-80px', left: '-80px' },
          { size: '250px', bottom: '-60px', right: '-60px' },
        ]}
        colors={['bg-emeraldGreen', 'bg-neonOrange']}
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
            Get to Know KIDURAT
          </h2>
          <p
            className="text-lg text-grayDark leading-relaxed mb-8"
            style={{ fontFamily: typography.body }}
          >
            Discover what makes KIDURAT a great place to work. From our mission-driven team to our innovative approach to education, we’re committed to creating a workplace where everyone can thrive.
          </p>
        </motion.div>
        <motion.div
          className="md:w-1/2 relative h-[400px] rounded-xl overflow-hidden shadow-2xl group"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="Get to Know KIDURAT"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
          <motion.div
            className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <motion.div
              className="w-16 h-16 bg-accentCyan rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.2, backgroundColor: theme.colors.neonPink }}
              transition={{ duration: 0.3 }}
            >
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}