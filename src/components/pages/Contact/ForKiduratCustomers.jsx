"use client";

import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Section from '@/components/sections/Section';
import DecorativeCircles from '@/components/utils/DecorativeCircles';
import Button from '@/components/common/Button';
import { theme } from '@/components/utils/theme';
import Card from '@/components/common/Card';

export default function ForKiduratCustomers() {
    const positions = [
      { size: '100px', top: '-10px', left: '-10px', opacity: 0.1 },
    ];
  
    const supportItems = [
      {
        title: 'Product Support',
        description: (
          <>
            Get help with KIDURAT products via our support portal or live chat.
            <div className="mt-2 space-y-1">
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 text-primary mr-2" />
                <p className="text-grayDark text-sm font-poppins">+1 (123) 456-7894</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 text-primary mr-2" />
                <p className="text-grayDark text-sm font-poppins">support@kidurat.com</p>
              </div>
            </div>
          </>
        ),
        icon: '🛠️',
      },
      {
        title: 'Training Resources',
        description: (
          <>
            Access tutorials, webinars, and certifications to maximize your KIDURAT experience.
            <div className="mt-2 space-y-1">
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 text-primary mr-2" />
                <p className="text-grayDark text-sm font-poppins">+1 (123) 456-7895</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 text-primary mr-2" />
                <p className="text-grayDark text-sm font-poppins">training@kidurat.com</p>
              </div>
            </div>
          </>
        ),
        icon: '🎓',
      },
      {
        title: 'FAQs',
        description: (
          <>
            Find answers to common questions about setup, features, and billing.
            <div className="mt-2 space-y-1">
              <div className="flex items-center">
                <FaPhone className="w-4 h-4 text-primary mr-2" />
                <p className="text-grayDark text-sm font-poppins">+1 (123) 456-7896</p>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="w-4 h-4 text-primary mr-2" />
                <p className="text-grayDark text-sm font-poppins">faqs@kidurat.com</p>
              </div>
            </div>
          </>
        ),
        icon: '❓',
      },
    ];
  
    return (
      <Section
        title="For KIDURAT Customers"
        variant="solid"
        className="bg-grayLight/90"
        style={{
          backgroundImage: 'url("https://www.transparenttextures.com/patterns/light-paper-fibers.png")',
          backgroundSize: '200px',
        }}
      >
        <DecorativeCircles positions={positions} colors={['bg-emeraldGreen']} />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 relative z-10">
          {supportItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
            >
              <Card
                title={item.title}
                description={item.description}
                icon={item.icon}
                variant="highlight"
                className={`shadow-md border-2 border-gradient-to-r ${theme.gradients.cyanToPink}`}
              />
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Button
            text="Visit Support Portal"
            href="/support"
            size="large"
            variant="outline"
            className="shadow-md hover:shadow-lg"
          />
        </div>
      </Section>
    );
  }