"use client";

import { motion } from 'framer-motion';
import Section from '@/components/sections/Section';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import { FaPhone, FaEnvelope, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import { useState } from 'react';
import { theme } from '@/components/utils/theme';

export default function PartnersMediaEmployment() {
    const positions = [
      { size: '100px', bottom: '-10px', right: '-10px', opacity: 0.1 },
    ];
  
    const partnerItems = [
      {
        title: 'Partnerships',
        description: 'Collaborate with KIDURAT to innovate education solutions.',
        contact: 'partners@kidurat.com',
        phone: '+1 (123) 456-7891',
      },
      {
        title: 'Media Inquiries',
        description: 'Reach out for press releases, interviews, or media kits.',
        contact: 'media@kidurat.com',
        phone: '+1 (123) 456-7892',
      },
      {
        title: 'Employment Verification',
        description: 'Verify employment details for KIDURAT staff.',
        contact: 'hr@kidurat.com',
        phone: '+1 (123) 456-7893',
      },
    ];
  
    const [expandedIndex, setExpandedIndex] = useState(null);
  
    const toggleAccordion = (index) => {
      setExpandedIndex(expandedIndex === index ? null : index);
    };
  
    const hoverVariants = {
      hover: {
        y: -4,
        borderColor: theme.colors.accentCyan,
        backgroundColor: `${theme.colors.accentCyan}10`,
        boxShadow: `0 0 12px ${theme.colors.accentCyan}40`,
        transition: { duration: 0.3 },
      },
    };
  
    return (
      <Section
        title="Partners, Media, and Employment Verification"
        variant="gradient"
        glassmorphism={true}
        className="bg-gray-900/10"
      >
        <DecorativeCircles positions={positions} colors={['bg-accentPurple']} />
        <div className="space-y-4 relative z-10">
          {partnerItems.map((item, index) => (
            <motion.div
              key={index}
              className={`bg-white/10 backdrop-blur-md rounded-xl border border-accentCyan/30 overflow-hidden shadow-md`}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              variants={hoverVariants}
              whileHover="hover"
            >
              <button
                className="w-full flex justify-between items-center p-4 text-left"
                onClick={() => toggleAccordion(index)}
                aria-expanded={expandedIndex === index}
                aria-controls={`accordion-content-${index}`}
              >
                <h4 className="text-lg font-semibold text-primary">{item.title}</h4>
                {expandedIndex === index ? (
                  <FaChevronUp className="text-accentCyan" />
                ) : (
                  <FaChevronDown className="text-accentCyan" />
                )}
              </button>
              {expandedIndex === index && (
                <motion.div
                  id={`accordion-content-${index}`}
                  className="p-4"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-grayDark font-poppins mb-2">{item.description}</p>
                  <div className="flex items-center">
                    <FaEnvelope className="w-5 h-5 text-primary mr-2" />
                    <p className="text-grayDark font-poppins">{item.contact}</p>
                  </div>
                  <div className="flex items-center mt-2">
                    <FaPhone className="w-5 h-5 text-primary mr-2" />
                    <p className="text-grayDark font-poppins">{item.phone}</p>
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </Section>
    );
  }