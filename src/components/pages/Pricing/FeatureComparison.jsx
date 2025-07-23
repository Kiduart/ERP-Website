"use client";

import { motion } from "framer-motion";
import DecorativeCircles from "@/components/utils/DecorativeCircles";
import ParticleEffect from "@/components/utils/ParticleEffect";
import { theme } from "@/components/utils/theme";

// Fallback typography in case theme is undefined
const defaultTypography = {
  heading: "'Inter', sans-serif",
  body: "'Poppins', sans-serif",
};

const comparisonData = [
  { feature: "Student Information", basic: "✔", pro: "✔", enterprise: "✔" },
  { feature: "Attendance Tracking", basic: "✔", pro: "✔", enterprise: "✔" },
  { feature: "Timetable Management", basic: "", pro: "✔", enterprise: "✔" },
  { feature: "Fee Management", basic: "", pro: "✔", enterprise: "✔" },
  { feature: "Parent Portal", basic: "", pro: "✔", enterprise: "✔" },
  { feature: "AI Insights", basic: "", pro: "", enterprise: "✔" },
  { feature: "Mobile App", basic: "", pro: "", enterprise: "✔" },
];

export default function FeatureComparison() {
  const typography = theme?.typography || defaultTypography;

  const positions = [
    { size: "300px", top: "-50px", left: "-50px" },
    { size: "200px", bottom: "-30px", right: "-30px" },
  ];

  return (
    <div className="relative py-16">
      <ParticleEffect count={20} color={theme.colors.accentCyan} shape="star" speed={0.2} />
      <DecorativeCircles positions={positions} colors={["bg-neonOrange", "bg-coral", "bg-accentCyan"]} />
      <div className="relative z-10 overflow-x-auto max-w-6xl mx-auto">
        <table className="min-w-full text-center border-collapse">
          <thead>
            <tr className="bg-primary text-white">
              <th className="p-4" style={{ fontFamily: typography.heading }}>
                Feature
              </th>
              <th className="p-4" style={{ fontFamily: typography.heading }}>
                Basic
              </th>
              <th className="p-4" style={{ fontFamily: typography.heading }}>
                Pro
              </th>
              <th className="p-4" style={{ fontFamily: typography.heading }}>
                Enterprise
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisonData.map((row, index) => (
              <motion.tr
                key={index}
                className="border-b border-gray-200 group"
                whileHover={{
                  backgroundColor: theme.colors.accentCyan + "10",
                  transition: { duration: 0.3 },
                }}
              >
                <td
                  className="p-4 text-grayDark"
                  style={{ fontFamily: typography.body }}
                >
                  {row.feature}
                </td>
                <td
                  className="p-4 text-grayDark relative"
                  style={{ fontFamily: typography.body }}
                >
                  {row.basic && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="inline-block"
                    >
                      {row.basic}
                    </motion.span>
                  )}
                </td>
                <td
                  className="p-4 text-grayDark relative"
                  style={{ fontFamily: typography.body }}
                >
                  {row.pro && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="inline-block"
                    >
                      {row.pro}
                    </motion.span>
                  )}
                </td>
                <td
                  className="p-4 text-grayDark relative"
                  style={{ fontFamily: typography.body }}
                >
                  {row.enterprise && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="inline-block"
                    >
                      {row.enterprise}
                    </motion.span>
                  )}
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}