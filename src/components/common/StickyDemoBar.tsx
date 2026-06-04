import { useEffect, useState } from "react";
import { Link } from "wouter";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type StickyDemoBarProps = {
  dismissed: boolean;
  onDismiss: () => void;
};

function getScrollProgress(): number {
  if (typeof window === "undefined") return 0;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  if (scrollable <= 0) return 0;

  return window.scrollY / scrollable;
}

export function StickyDemoBar({ dismissed, onDismiss }: StickyDemoBarProps) {
  const [scrolledEnough, setScrolledEnough] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolledEnough(getScrollProgress() >= 0.6);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const visible = scrolledEnough && !dismissed;

  useEffect(() => {
    document.documentElement.style.setProperty("--sticky-bar-height", visible ? "64px" : "0px");
    return () => document.documentElement.style.setProperty("--sticky-bar-height", "0px");
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          role="region"
          aria-label="Book a demo"
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 380, damping: 32 }}
          onAnimationComplete={() => {
            document.documentElement.style.setProperty("--sticky-bar-height", "64px");
          }}
          className="fixed inset-x-0 bottom-0 z-[58] border-t border-white/10 bg-brand-navy px-4 py-3 shadow-[0_-12px_40px_rgba(0,48,73,0.28)] sm:px-6"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="mx-auto flex w-full max-w-7xl items-center gap-3 sm:gap-4">
            <p className="min-w-0 flex-1 text-sm font-medium leading-snug text-brand-beige sm:text-base">
              Ready to see KIDUART in action?
              <span className="hidden sm:inline"> →</span>
            </p>

            <Link
              href="/demo"
              className={cn(
                "inline-flex shrink-0 items-center justify-center rounded-full bg-brand-yellow px-4 text-sm font-bold text-brand-navy",
                "min-h-11 transition-colors hover:bg-white sm:min-h-10 sm:px-6 sm:py-2.5",
              )}
            >
              Book a Free Demo
            </Link>

            <button
              type="button"
              onClick={() => {
                document.documentElement.style.setProperty("--sticky-bar-height", "0px");
                onDismiss();
              }}
              className="inline-flex min-h-11 min-w-11 shrink-0 items-center justify-center rounded-full text-brand-beige/80 transition-colors hover:bg-white/10 hover:text-white sm:min-h-10 sm:min-w-10"
              aria-label="Dismiss demo bar"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
