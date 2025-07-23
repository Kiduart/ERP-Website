"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedin, FaFacebook, FaInstagram } from "react-icons/fa";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import DecorativeCircles from "@/components/utils/DecorativeCircles";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const socialLinks = [
  { icon: <FaTwitter />, href: "https://twitter.com/kidurat", label: "Twitter" },
  { icon: <FaLinkedin />, href: "https://linkedin.com/company/kidurat", label: "LinkedIn" },
  { icon: <FaFacebook />, href: "https://facebook.com/kidurat", label: "Facebook" },
  { icon: <FaInstagram />, href: "https://instagram.com/kidurat", label: "Instagram" },
];

export default function SocialMediaLinks() {
  const typography = theme?.typography || defaultTypography;

  return (
    <div className="relative py-16 bg-gradient-to-br from-white to-skyBlue/10">
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="80px" opacity={0.1} particleShape="star" waveCount={3} texture="smooth" />
      <ParticleEffect count={20} color={theme.colors.accentCyan} shape="circle" speed={0.3} />
      <DecorativeCircles
        positions={[
          { size: "200px", top: "-50px", left: "-50px" },
          { size: "150px", bottom: "-30px", right: "-30px" },
        ]}
        colors={["bg-neonPink", "bg-emeraldGreen"]}
      />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent mb-6"
          style={{ fontFamily: typography.heading }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Follow Us on Social Media
        </motion.h2>
        <div className="flex justify-center gap-6">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-4xl text-primary hover:text-neonPink transition-colors duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              aria-label={link.label}
            >
              {link.icon}
            </motion.a>
          ))}
        </div>
      </div>
    </div>
  );
}