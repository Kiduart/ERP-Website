import { motion, useReducedMotion } from "framer-motion";
import { CSSProperties, ReactNode, useEffect, useState } from "react";

/**
 * Resolved after mount only. Deciding this during the first client render would
 * swap the rendered element type mid-hydration, and React keeps the server
 * markup (opacity: 0) — which leaves whole sections permanently blank.
 */
function useSkipMotion() {
  const reduceMotion = useReducedMotion();
  const [skip, setSkip] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 768px)");
    const sync = () => setSkip(Boolean(reduceMotion) || query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, [reduceMotion]);

  return skip;
}

export function PageTransition({
  children,
  className = "",
  instant = false,
}: {
  children: ReactNode;
  className?: string;
  instant?: boolean;
}) {
  const skipMotion = useSkipMotion();

  if (instant || skipMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionReveal({
  children,
  className = "",
  delay = 0,
  style,
  instant = false,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: CSSProperties;
  /** Skip entrance animation (critical for LCP / hero first paint) */
  instant?: boolean;
}) {
  const skipMotion = useSkipMotion();

  if (instant || skipMotion) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
