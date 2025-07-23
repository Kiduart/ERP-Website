"use client";

import { motion } from "framer-motion";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";
import WaveBackground from "@/components/utils/WaveBackground";
import DecorativeCircles from "@/components/utils/DecorativeCircles";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const locations = [
  {
    city: "New Delhi, India",
    address: "123 Education Lane, New Delhi, 110001",
    phone: "+91-123-456-7890",
    email: "delhi@kidurat.com",
  },
  {
    city: "New York, USA",
    address: "456 School Street, New York, NY 10001",
    phone: "+1-800-555-1234",
    email: "ny@kidurat.com",
  },
  {
    city: "London, UK",
    address: "789 Learning Road, London, SW1A 1AA",
    phone: "+44-20-1234-5678",
    email: "london@kidurat.com",
  },
];

export default function KiduratLocations() {
  const typography = theme?.typography || defaultTypography;

  return (
    <div className="relative py-16 bg-gradient-to-br from-white to-neonPink/10">
      <WaveBackground gradient={theme.gradients.purpleToGreen} height="80px" opacity={0.1} particleShape="star" waveCount={3} texture="smooth" />
      <ParticleEffect count={20} color={theme.colors.accentCyan} shape="circle" speed={0.3} />
      <DecorativeCircles
        positions={[
          { size: "200px", top: "-50px", left: "-50px" },
          { size: "150px", bottom: "-30px", right: "-30px" },
        ]}
        colors={["bg-emeraldGreen", "bg-skyBlue"]}
      />
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent mb-8"
          style={{ fontFamily: typography.heading }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Our Locations
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {locations.map((location, index) => (
            <motion.div
              key={index}
              className="p-6 rounded-lg bg-gradient-to-br from-white to-gray-50 shadow-lg hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <h3
                className="text-xl font-semibold text-primary mb-2"
                style={{ fontFamily: typography.heading }}
              >
                {location.city}
              </h3>
              <p
                className="text-grayDark mb-2"
                style={{ fontFamily: typography.body }}
              >
                {location.address}
              </p>
              <p
                className="text-grayDark mb-2"
                style={{ fontFamily: typography.body }}
              >
                Phone: <a href={`tel:${location.phone}`} className="text-primary hover:text-neonPink">{location.phone}</a>
              </p>
              <p
                className="text-grayDark"
                style={{ fontFamily: typography.body }}
              >
                Email: <a href={`mailto:${location.email}`} className="text-primary hover:text-neonPink">{location.email}</a>
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3
            className="text-2xl font-semibold text-primary mb-4"
            style={{ fontFamily: typography.heading }}
          >
            Find Us on the Map
          </h3>
          <div className="w-full h-64 bg-gray-200 rounded-lg flex items-center justify-center">
            <p className="text-grayDark">Interactive Map Placeholder (Embed Google Maps or similar)</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}