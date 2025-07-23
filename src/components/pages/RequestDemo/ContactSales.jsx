"use client";

import { motion } from "framer-motion";
import { theme } from "@/components/utils/theme";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const contactMethods = [
  { method: "Phone", value: "+91-123-456-7890", href: "tel:+911234567890", icon: "📞" },
  { method: "Email", value: "sales@kidurat.com", href: "mailto:sales@kidurat.com", icon: "📧" },
  { method: "Chat", value: "Live Chat", href: "/chat", icon: "💬" },
];

export default function ContactSales() {
  const typography = theme?.typography || defaultTypography;

  const containerVariants = {
    hover: { rotateX: 5, rotateY: 5, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="relative bg-white p-6 rounded-xl shadow-lg overflow-hidden"
      variants={containerVariants}
      whileHover="hover"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary/20 to-neonPink/20"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <h3
        className="text-xl font-bold bg-gradient-to-r from-accentCyan to-neonPink bg-clip-text text-transparent mb-4 relative z-10"
        style={{ fontFamily: typography.heading }}
      >
        More Ways to Contact Sales
      </h3>
      <div className="space-y-4 relative z-10">
        {contactMethods.map((contact, index) => (
          <motion.div
            key={index}
            className="flex items-center space-x-3 group"
            whileHover={{ x: 10 }}
            transition={{ duration: 0.3 }}
          >
            <span className="text-2xl">{contact.icon}</span>
            <div className="flex-1">
              <span
                className="text-grayDark font-medium"
                style={{ fontFamily: typography.body }}
              >
                {contact.method}
              </span>
              <a
                href={contact.href}
                className="block text-primary group-hover:text-neonPink transition-colors duration-300"
                style={{ fontFamily: typography.body }}
              >
                {contact.value}
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}