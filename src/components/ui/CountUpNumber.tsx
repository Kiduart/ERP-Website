import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type CountUpNumberProps = {
  end: number;
  suffix?: string;
  trailingText?: string;
  decimals?: number;
  duration?: number;
  className?: string;
};

export function CountUpNumber({
  end,
  suffix = "",
  trailingText = "",
  decimals = 0,
  duration = 1600,
  className,
}: CountUpNumberProps) {
  const countRef = useRef<HTMLSpanElement | null>(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const node = countRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35, rootMargin: "-80px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;

    let animationFrame = 0;
    let startTime: number | null = null;

    const updateValue = (timestamp: number) => {
      if (startTime === null) {
        startTime = timestamp;
      }

      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);

      setValue(end * easedProgress);

      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(updateValue);
      }
    };

    animationFrame = window.requestAnimationFrame(updateValue);

    return () => window.cancelAnimationFrame(animationFrame);
  }, [duration, end, started]);

  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(value);

  return (
    <span ref={countRef} className={cn(className)}>
      {formatted}
      {suffix}
      {trailingText}
    </span>
  );
}
