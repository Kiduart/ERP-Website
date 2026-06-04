import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 16 }}
          whileHover={{ scale: 1.1, opacity: 0.9 }}
          onClick={scrollToTop}
          className="fixed right-7 z-[55] flex h-12 w-12 items-center justify-center rounded-full bg-brand-navy text-white shadow-[0_16px_40px_rgba(0,48,73,0.22)] transition-all hover:bg-brand-teal"
          style={{ bottom: "calc(10.25rem + var(--sticky-bar-height, 0px))", transition: "bottom 0.3s cubic-bezier(0.32, 0, 0.67, 0)" }}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
