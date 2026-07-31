import { m, useReducedMotion } from "framer-motion";
import {
  GraduationCap, BookOpen, Pencil, Star, Atom,
  BarChart2, Users, Brain, Lightbulb, Calculator,
  Globe, Award, Clock, Bell, ShieldCheck,
  Lock, Eye, Mail, CreditCard,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap, BookOpen, Pencil, Star, Atom,
  BarChart2, Users, Brain, Lightbulb, Calculator,
  Globe, Award, Clock, Bell, ShieldCheck,
  Lock, Eye, Mail, CreditCard,
};

interface FloatingIconsProps {
  icons: string[];
  count: number;
  heroMode?: boolean;
}

export function FloatingIcons({ icons, count, heroMode = false }: FloatingIconsProps) {
  const COLORS = ["#003049", "#0c716b", "#fcbf49"];
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);
  const [hasMounted, setHasMounted] = useState(false);
  const [inView, setInView] = useState(false);
  const [host, setHost] = useState<HTMLSpanElement | null>(null);

  useEffect(() => {
    setHasMounted(true);
    const media = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (!host || typeof IntersectionObserver === "undefined") {
      setInView(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setInView(true);
      },
      { rootMargin: "80px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [host]);

  const renderedIcons = useMemo(() => {
    if (!hasMounted || prefersReducedMotion || isMobile || !inView) {
      return [];
    }

    return Array.from({ length: count }).map((_, i) => {
      const top = 10 + ((i * 37) % 80);
      const left = 5 + ((i * 23) % 90);
      const size = heroMode ? 28 + (i % 17) : 18 + (i % 15);
      const color = COLORS[i % COLORS.length];
      const opacity = heroMode ? 0.18 + ((i % 8) * 0.01) : 0.1 + ((i % 6) * 0.01);
      const duration = 4 + (i % 4);
      const delay = (i % 4) * 0.75;
      const iconName = icons[i % icons.length];
      const IconComponent = ICON_MAP[iconName] || Star;

      return (
        <m.div
          key={i}
          className="absolute"
          style={{ top: `${top}%`, left: `${left}%`, color, zIndex: 0, pointerEvents: "none" }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, -5, 0],
            opacity: [opacity, opacity * 1.5, opacity],
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay,
          }}
        >
          <IconComponent style={{ width: size, height: size }} />
        </m.div>
      );
    });
  }, [icons, count, heroMode, prefersReducedMotion, isMobile, hasMounted, inView]);

  return (
    <span ref={setHost} className="pointer-events-none absolute inset-0" aria-hidden="true">
      {renderedIcons}
    </span>
  );
}
