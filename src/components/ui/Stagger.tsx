import {
  Children,
  cloneElement,
  isValidElement,
  type CSSProperties,
  type ElementType,
  type ReactElement,
  type ReactNode,
} from "react";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/InView";

type StaggerProps = {
  children: ReactNode;
  className?: string;
  as?: ElementType;
  /** CSS class applied to each child (default: motion-brick) */
  itemClassName?: string;
  /** Animate only the first time (default true for content grids) */
  once?: boolean;
  rootMargin?: string;
  threshold?: number;
};

/**
 * Wraps a list/grid and staggers child entrance via `--stagger` + CSS.
 * Light: IntersectionObserver + CSS only  no Framer on the items.
 */
export function Stagger({
  children,
  className,
  as,
  itemClassName = "motion-brick",
  once = true,
  rootMargin = "0px 0px -10% 0px",
  threshold = 0.08,
}: StaggerProps) {
  return (
    <InView
      as={as}
      className={cn("motion-stagger", className)}
      once={once}
      rootMargin={rootMargin}
      threshold={threshold}
    >
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        const el = child as ReactElement<{
          className?: string;
          style?: CSSProperties;
        }>;
        const style = {
          ...(el.props.style ?? {}),
          ["--stagger" as string]: index,
        } as CSSProperties;
        return cloneElement(el, {
          className: cn(el.props.className, itemClassName),
          style,
        });
      })}
    </InView>
  );
}
