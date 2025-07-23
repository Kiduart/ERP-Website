"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaChevronDown, FaSearch } from "react-icons/fa";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

export default function FAQList() {
  const typography = theme?.typography || defaultTypography;

  const faqs = [
    {
      category: "General",
      question: "What is KIDURAT?",
      answer:
        "KIDURAT is an AI-powered school ERP system that helps manage student information, attendance, timetables, fees, and more.",
    },
    {
      category: "General",
      question: "How does the AI feature work?",
      answer:
        "Our AI features provide insights into student performance, automate attendance tracking, and offer predictive analytics for better decision-making.",
    },
    {
      category: "General",
      question: "Is my data secure with KIDURAT?",
      answer:
        "Yes, we use robust encryption and comply with global data protection standards to ensure your data is secure.",
    },
    {
      category: "Pricing",
      question: "What are the pricing plans available?",
      answer:
        "We offer three plans: Basic ($99/month), Pro ($199/month), and Enterprise (custom pricing). Check our Pricing page for details.",
    },
    {
      category: "Pricing",
      question: "Do you offer a free trial?",
      answer: "Yes, we offer a 30-day free trial for the Pro plan.",
    },
    {
      category: "Features",
      question: "Can I integrate KIDURAT with other systems?",
      answer:
        "Yes, our Enterprise plan supports custom integrations with various third-party systems.",
    },
    {
      category: "Features",
      question: "Does KIDURAT have a mobile app?",
      answer:
        "Yes, our mobile app is available for iOS and Android devices with the Enterprise plan.",
    },
    {
      category: "Support",
      question: "How can I get support?",
      answer:
        "You can reach our support team via email (support@kidurat.com), phone (+91-123-456-7890), or live chat.",
    },
    {
      category: "Support",
      question: "What are the support hours?",
      answer: "Our support team is available 24/7 for Pro and Enterprise plan users, and 9 AM to 6 PM IST for Basic plan users.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const categories = ["All", "General", "Pricing", "Features", "Support"];

  const filteredFAQs = faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative py-16">
      <ParticleEffect count={20} color={theme.colors.accentCyan} shape="star" speed={0.2} />
      <div className="max-w-4xl mx-auto space-y-8 relative z-10">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="relative w-full sm:w-auto">
            <input
              type="text"
              placeholder="Search FAQs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full p-3 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              style={{ fontFamily: typography.body }}
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg transition-colors duration-300 ${
                  selectedCategory === category
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-grayDark hover:bg-gray-200"
                }`}
                style={{ fontFamily: typography.body }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
        {filteredFAQs.length === 0 ? (
          <p
            className="text-center text-grayDark"
            style={{ fontFamily: typography.body }}
          >
            No FAQs found. Try adjusting your search or category.
          </p>
        ) : (
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div
                key={index}
                className="border-b border-gray-200"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-4 text-left focus:outline-none"
                >
                  <h3
                    className="text-lg font-semibold text-primary"
                    style={{ fontFamily: typography.heading }}
                  >
                    {faq.question}
                  </h3>
                  <FaChevronDown
                    className={`w-5 h-5 text-primary transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openIndex === index && (
                  <motion.p
                    className="text-grayDark pb-4"
                    style={{ fontFamily: typography.body }}
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}