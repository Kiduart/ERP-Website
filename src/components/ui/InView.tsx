import {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";

function isNearlyVisible(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  const vh = window.innerHeight || 0;
  // Already on / near first screen  show without waiting for IntersectionObserver.
  return rect.top < vh * 0.98 && rect.bottom > vh * 0.02;
}

/**
 * Toggles `is-inview` while the node is on screen.
 * Default is once=true so scroll stays smooth; pass once={false} to replay.
 */
export function InView({
  as: Tag = "div",
  children,
  className,
  style,
  once = true,
  rootMargin = "0px 0px -6% 0px",
  threshold = 0.05,
}: {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
  /** When true, animate only the first time (default true  smoother scroll) */
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
}) {
  const ref = useRef<HTMLElement | null>(null);
  const [shown, setShown] = useState(false);

  // Reveal above-the-fold content before paint so route changes don't flash blank.
  useLayoutEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (isNearlyVisible(node)) setShown(true);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    if (shown && once) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          setShown(true);
          if (once) observer.disconnect();
          return;
        }
        if (!once) setShown(false);
      },
      { rootMargin, threshold },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once, rootMargin, shown, threshold]);

  return (
    <Tag
      ref={ref}
      className={cn(className, shown && "is-inview")}
      style={style}
    >
      {children}
    </Tag>
  );
}
