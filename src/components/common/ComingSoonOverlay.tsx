import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ComingSoonBadge({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-20 flex items-center justify-center",
        className
      )}
    >
      <div className="rounded-full border border-brand-navy/15 bg-white px-5 py-2.5 text-sm font-bold text-brand-navy shadow-sm backdrop-blur-sm">
        Coming Soon
      </div>
    </div>
  );
}

type ComingSoonContentMaskProps = {
  children: ReactNode;
  className?: string;
  contentClassName?: string;
};

/** Keeps content in the layout but obscures readable text with blur + frosted overlay. */
export function ComingSoonContentMask({
  children,
  className,
  contentClassName,
}: ComingSoonContentMaskProps) {
  return (
    <div className={cn("relative select-none pointer-events-none", className)}>
      <div className={cn("blur-[4px] opacity-[0.9] saturate-[0.65]", contentClassName)}>
        {children}
      </div>
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-b from-white/20 via-brand-beige/60 to-white/40 backdrop-blur-[8px]"
        aria-hidden="true"
      />
    </div>
  );
}
