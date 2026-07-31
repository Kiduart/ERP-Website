import { m, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface BlobProps {
  color: string;
  size: number;
  position:
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right"
    | "center-left"
    | "center-right";
  opacity: number;
}

interface BackgroundBlobsProps {
  blobs: BlobProps[];
}

export function BackgroundBlobs({ blobs }: BackgroundBlobsProps) {
  const prefersReducedMotion = useReducedMotion();
  const [isMobile, setIsMobile] = useState(true);
  const [scrolling, setScrolling] = useState(false);
  const [inView, setInView] = useState(false);
  const [host, setHost] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 768px)");
    const handleChange = () => setIsMobile(media.matches);
    handleChange();
    media.addEventListener("change", handleChange);
    return () => media.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    let timer = 0;
    const onScroll = () => {
      setScrolling(true);
      window.clearTimeout(timer);
      timer = window.setTimeout(() => setScrolling(false), 140);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(timer);
    };
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
      { rootMargin: "100px" },
    );
    observer.observe(host);
    return () => observer.disconnect();
  }, [host]);

  if (prefersReducedMotion || isMobile || !inView) {
    return <div ref={setHost} className="pointer-events-none absolute inset-0" aria-hidden="true" />;
  }

  const getPositionStyles = (position: BlobProps["position"]) => {
    switch (position) {
      case "top-left":
        return { top: "-5%", left: "-5%" };
      case "top-right":
        return { top: "-5%", right: "-5%" };
      case "bottom-left":
        return { bottom: "-5%", left: "-5%" };
      case "bottom-right":
        return { bottom: "-5%", right: "-5%" };
      case "center-left":
        return { top: "40%", left: "-10%" };
      case "center-right":
        return { top: "40%", right: "-10%" };
      default:
        return {};
    }
  };

  return (
    <div ref={setHost} className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {blobs.map((blob, i) => {
        const duration = 8 + (i % 6);
        return (
          <m.div
            key={i}
            className="absolute rounded-full blur-3xl will-change-transform"
            style={{
              backgroundColor: blob.color,
              opacity: blob.opacity,
              width: blob.size,
              height: blob.size,
              ...getPositionStyles(blob.position),
            }}
            animate={
              scrolling
                ? undefined
                : {
                    scale: [1, 1.06, 1],
                    x: [0, 12, 0],
                    y: [0, -12, 0],
                  }
            }
            transition={{
              duration,
              repeat: scrolling ? 0 : Infinity,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
}
