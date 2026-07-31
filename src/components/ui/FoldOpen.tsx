import type { CSSProperties, ElementType, ReactNode } from "react";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/InView";

/**
 * 3D paper unfold: starts as a small folded square, opens to full size
 * on page-load/in-view or hover. CSS transform + transition only.
 */
export function FoldOpen({
  children,
  className,
  as = "div",
  style,
  delayMs = 0,
}: {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  style?: CSSProperties;
  /** Stagger delay when several unfold on load */
  delayMs?: number;
}) {
  return (
    <InView
      as={as}
      once
      rootMargin="0px 0px -12% 0px"
      threshold={0.15}
      className={cn("paper-unfold-frame", className)}
      style={
        {
          ...style,
          ["--unfold-delay" as string]: `${delayMs}ms`,
        } as CSSProperties
      }
    >
      <div className="paper-unfold">{children}</div>
    </InView>
  );
}
