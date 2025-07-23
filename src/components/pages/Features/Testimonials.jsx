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

const testimonials = [
  {
    quote:
      "KIDURAT’s AI Analytics transformed how we track student progress. It’s a game-changer for our school!",
    author: "John Doe, Principal",
    school: "Greenwood High School",
  },
  {
    quote:
      "The Parent Portal keeps us connected with our child’s education like never before. Highly recommend!",
    author: "Jane Smith, Parent",
    school: "Sunrise Academy",
  },
  {
    quote:
      "Managing fees has never been easier. KIDURAT saves us hours every month!",
    author: "Sarah Lee, Administrator",
    school: "Bright Future School",
  },
];

export default function Testimonials() {
  const typography = theme?.typography || defaultTypography;

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
  };

  return (
    <div className="relative py-16">
      <WaveBackground
        gradient={theme.gradients.cyanToPink}
        height="80px"
        opacity={0.1}
        particleShape="circle"
        waveCount={3}
        texture="smooth"
      />
      <ParticleEffect
        count={20}
        color={theme.colors.neonPink}
        shape="circle"
        speed={0.3}
      />
      <DecorativeCircles
        positions={[
          { size: "200px", top: "-50px", left: "-50px" },
          { size: "150px", bottom: "-30px", right: "-30px" },
        ]}
        colors={["bg-primary", "bg-skyBlue"]}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={slideVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <p
                className="text-grayDark italic mb-4"
                style={{ fontFamily: typography.body }}
              >
                "{testimonial.quote}"
              </p>
              <p
                className="text-primary font-semibold"
                style={{ fontFamily: typography.heading }}
              >
                {testimonial.author}
              </p>
              <p
                className="text-gray-500 text-sm"
                style={{ fontFamily: typography.body }}
              >
                {testimonial.school}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}