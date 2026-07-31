import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  end: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
  /** Replay the count every time the number scrolls back into view */
  replay?: boolean;
};

export function AnimatedCounter({
  end,
  duration = 1400,
  decimals = 0,
  prefix = "",
  suffix = "",
  className,
  replay = true,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const wasVisible = useRef(false);
  /** Server and first client render show the real number, so crawlers never read a zero. */
  const [value, setValue] = useState(end);
  const [run, setRun] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;

    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(end);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (wasVisible.current) return;
          wasVisible.current = true;
          setRun((current) => current + 1);
        } else if (replay) {
          wasVisible.current = false;
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [end, replay]);

  useEffect(() => {
    if (run === 0) return;

    let frame = 0;
    let startTime = 0;
    setValue(0);

    const tick = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(end * eased);

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [duration, end, run]);

  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
