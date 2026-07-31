"use client";

import { LazyMotion, domAnimation, MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Loads the lightweight framer-motion feature set once for the app shell.
 * Prefer `m` from framer-motion inside children instead of full `motion`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </LazyMotion>
  );
}
