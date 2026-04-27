import { motion } from "framer-motion";
import { 
  GraduationCap, BookOpen, Pencil, Star, Atom, 
  BarChart2, Users, Brain, Lightbulb, Calculator, 
  Globe, Award, Clock, Bell, ShieldCheck,
  Lock, Eye, Mail, CreditCard
} from "lucide-react";
import { useMemo } from "react";

const ICON_MAP: Record<string, React.ElementType> = {
  GraduationCap, BookOpen, Pencil, Star, Atom, 
  BarChart2, Users, Brain, Lightbulb, Calculator, 
  Globe, Award, Clock, Bell, ShieldCheck,
  Lock, Eye, Mail, CreditCard
};

interface FloatingIconsProps {
  icons: string[];
  count: number;
  heroMode?: boolean;
}

export function FloatingIcons({ icons, count, heroMode = false }: FloatingIconsProps) {
  const COLORS = ['#003049', '#0c716b', '#fcbf49'];

  const renderedIcons = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => {
      // Seed pseudo-random values based on index to keep them stable
      const top = 10 + ((i * 37) % 80); // 10% to 90%
      const left = 5 + ((i * 23) % 90); // 5% to 95%
      
      const size = heroMode ? 28 + (i % 17) : 18 + (i % 15); // 28-44px or 18-32px
      const color = COLORS[i % COLORS.length];
      const opacity = heroMode ? 0.18 + ((i % 8) * 0.01) : 0.10 + ((i % 6) * 0.01);
      
      const duration = 4 + (i % 4); // 4-7s
      const delay = (i % 4) * 0.75; // 0-3s
      
      const iconName = icons[i % icons.length];
      const IconComponent = ICON_MAP[iconName] || Star;

      return (
        <motion.div
          key={i}
          className="absolute"
          style={{ top: `${top}%`, left: `${left}%`, color, zIndex: 0, pointerEvents: 'none' }}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 5, -5, 0],
            opacity: [opacity, opacity * 1.5, opacity]
          }}
          transition={{
            duration,
            repeat: Infinity,
            ease: "easeInOut",
            delay
          }}
        >
          <IconComponent style={{ width: size, height: size }} />
        </motion.div>
      );
    });
  }, [icons, count, heroMode]);

  return <>{renderedIcons}</>;
}
