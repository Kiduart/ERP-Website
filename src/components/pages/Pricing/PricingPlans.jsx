"use client";

import { motion } from 'framer-motion';
import Button from "@/components/common/Button";
import Card from '@/components/common/Card';

export default function PricingPlans() {
  const plans = [
    {
      title: "Basic",
      price: "$99/month",
      description: "Perfect for small schools with essential features.",
      features: ["Student Information", "Attendance Tracking", "Basic Support"],
    },
    {
      title: "Pro",
      price: "$199/month",
      description: "Ideal for medium-sized schools with advanced features.",
      features: ["All Basic Features", "Timetable Management", "Fee Management", "Priority Support"],
    },
    {
      title: "Enterprise",
      price: "Custom",
      description: "Tailored for large institutions with full customization.",
      features: ["All Pro Features", "AI Insights", "Custom Integrations", "Dedicated Support"],
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
    hover: { scale: 1.03, transition: { duration: 0.3 } },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {plans.map((plan, index) => (
        <motion.div
          key={index}
          variants={cardVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
          whileHover="hover"
        >
          <Card
            title={plan.title}
            description={
              <>
                <p className="text-2xl font-bold text-primary font-inter mb-2">{plan.price}</p>
                <p className="text-gray font-poppins mb-4">{plan.description}</p>
                <ul className="text-gray font-poppins mb-4 space-y-2">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>✔ {feature}</li>
                  ))}
                </ul>
                <Button text="Choose Plan" href="/signup" size="medium" className="w-full" />
              </>
            }
            className="text-center"
          />
        </motion.div>
      ))}
    </div>
  );
}