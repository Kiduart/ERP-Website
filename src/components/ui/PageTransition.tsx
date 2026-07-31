import { m, useReducedMotion } from "framer-motion";
import { CSSProperties, ReactNode, useEffect, useState } from "react";

/**
 * Resolved after mount only. Deciding this during the first client render would
 * swap the rendered element type mid-hydration, and React keeps the server
 * markup (opacity: 0) which leaves whole sections permanently blank.
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
  /** Default true: page swaps must feel instant. Fade-in made every nav feel slow. */
  instant = true,
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
    <m.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </m.div>
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
    <m.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -8% 0px", amount: 0.15 }}
      transition={{ duration: 0.32, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={style}
    >
      {children}
    </m.div>
  );
}
