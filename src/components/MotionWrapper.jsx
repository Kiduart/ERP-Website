"use client";

import { motion } from 'framer-motion';

export default function MotionWrapper({ children, ...props }) {
  return <motion.div {...props}>{children}</motion.div>;
}