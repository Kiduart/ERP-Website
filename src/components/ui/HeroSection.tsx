import { type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { SectionReveal } from "@/components/ui/PageTransition";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";

export type HeroSectionProps = {
  title: string;
  subtitle?: string;
  image: string;
  layout: "center" | "split";
  variant?: "overlay" | "split-dark" | "split-light";
  pretitle?: ReactNode;
  eyebrow?: string;
  children?: ReactNode;
  childrenLeft?: ReactNode;
  childrenRight?: ReactNode;
  showBlobs?: boolean;
  showFloatingIcons?: boolean;
  floatingIcons?: string[];
  floatingIconsCount?: number;
  className?: string;
};

export function HeroSection({
  title,
  subtitle,
  image,
  layout,
  variant = "overlay",
  pretitle,
  eyebrow,
  children,
  childrenLeft,
  childrenRight,
  showBlobs = true,
  showFloatingIcons = true,
  floatingIcons = ["LayoutDashboard", "Users", "BarChart2"],
  floatingIconsCount = 6,
  className,
}: HeroSectionProps) {
  const isSplit = layout === "split";
  const isOverlay = variant === "overlay";
  const isSplitDark = variant === "split-dark";
  const isSplitLight = variant === "split-light";
  const useLightText = isOverlay || isSplitDark;
  const media = childrenRight ?? (
    <div className="relative hidden lg:block">
      {isSplitDark ? (
        <>
          <div className="absolute -right-10 top-10 h-24 w-24 rounded-full border border-white/15" />
          <div className="absolute -left-8 bottom-10 h-20 w-20 rounded-full bg-brand-yellow/20 blur-sm" />
          <div className="absolute right-10 top-1/2 h-28 w-28 rounded-full bg-brand-teal/15 blur-2xl" />
          <div className="relative overflow-hidden">
             {/* rounded-[2.5rem] border border-white/10 bg-white/5 p-4 shadow-[0_28px_80px_rgba(0,48,73,0.28)] */}
            <div className="overflow-hidden">
               {/* rounded-[2rem] border border-white/10 */}
              <img src={image} alt={title} className="aspect-[0.92] w-full rounded-full object-cover" />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-brand-teal/20" />
          <div className="absolute right-0 top-20 h-[28rem] w-[28rem] rounded-full border border-brand-navy/10 bg-brand-beige/60" />
          <div className="absolute bottom-8 right-10 h-28 w-28 z-50 rounded-full bg-brand-orange/80" />
          <div className="relative mx-auto max-w-[30rem]">
            <div className="absolute -left-10 bottom-8 rounded-[1.5rem] border border-brand-navy/10 bg-white px-6 py-5 shadow-xl">
              <div className="text-3xl font-bold text-brand-teal">Daily-ready</div>
              <div className="mt-1 text-sm font-medium text-brand-navy/55">Built for school workflows</div>
            </div>
            <div className="overflow-hidden "
            // rounded-[2.75rem] border border-brand-navy/10 bg-white p-4 shadow-[0_28px_80px_rgba(0,48,73,0.12)]
            >
              <img src={image} alt={title} className="aspect-[0.92] w-full rounded-full object-cover" />
            </div>
          </div>
        </>
      )}
    </div>
  );

  return (
    <section
      className={cn(
        isOverlay
          ? "surface-dark relative flex min-h-[min(80vh,50rem)] items-center overflow-hidden bg-brand-navy py-[clamp(4.5rem,7vw,6.5rem)]"
          : "relative overflow-hidden py-[clamp(4rem,6vw,5.75rem)]",
        isSplitDark && "surface-dark bg-brand-navy",
        isSplitLight && "surface-light bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(250,248,240,0.75))]",
        className,
      )}
      style={{ color: useLightText ? "rgb(var(--hero-foreground-rgb))" : "hsl(var(--foreground))" }}
    >
      {isOverlay && (
        <>
          <div className="absolute inset-0 z-0">
            <div
              className="absolute inset-0 bg-cover bg-center opacity-20 mix-blend-overlay"
              style={{ backgroundImage: `url('${image}')` }}
            />
          </div>
          <div className="absolute inset-0 z-10 bg-navy opacity-80" />
        </>
      )}
      {isSplitDark && <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(252,191,73,0.1),transparent_30%),linear-gradient(135deg,rgba(0,48,73,0.98),rgba(12,113,107,0.9))]" />}
      {isSplitLight && <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_left,rgba(252,191,73,0.14),transparent_28%),radial-gradient(circle_at_right,rgba(12,113,107,0.12),transparent_30%)]" />}
      <div className="absolute inset-0 z-20 pointer-events-none">
        {showBlobs && (
          <BackgroundBlobs
            blobs={[
              { color: "hsl(var(--blob-yellow))", size: 400, position: "top-left", opacity: 0.35 },
              { color: "hsl(var(--blob-teal))", size: 400, position: "bottom-right", opacity: 0.35 },
            ]}
          />
        )}
        {showFloatingIcons && (
          <FloatingIcons icons={floatingIcons} count={floatingIconsCount} heroMode={true} />
        )}
      </div>

      <div className="page-shell relative z-30 w-full">
        <div className={cn(isSplit ? "grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,30rem)]" : "")}>
          <SectionReveal className={cn(isSplit ? "text-left" : "text-center")}>
            {pretitle}
            {eyebrow && (
              <div
                className={cn(
                  "mb-5 inline-flex rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em]",
                  useLightText ? "border border-white/15 bg-white/10 !text-brand-yellow" : "border border-brand-navy/10 bg-white/80 !text-brand-teal",
                )}
              >
                {eyebrow}
              </div>
            )}
            <h3 className={cn(
              "mb-5 font-bold leading-none",
              isOverlay && "mx-auto max-w-4xl text-[clamp(1.75rem,1.12rem+1.5vw,2.6rem)] !text-brand-beige",
              isSplitDark && "max-w-2xl text-[clamp(1.8rem,1.18rem+1.45vw,3rem)] !text-brand-beige",
              isSplitLight && "max-w-3xl text-[clamp(1.8rem,1.15rem+1.5vw,3.05rem)] !text-brand-navy",
            )}>
              {title}
            </h3>
            {subtitle && (
              <p
                className={cn(
                  "text-[clamp(0.98rem,0.94rem+0.14vw,1.73rem)] leading-8",
                  isSplit ? "max-w-2xl" : "mx-auto max-w-2xl",
                )}
                style={{ color: useLightText ? "rgb(var(--hero-muted-rgb) / 0.86)" : "hsl(var(--foreground) / 0.74)" }}
              >
                {subtitle}
              </p>
            )}
            {children ?? childrenLeft}
          </SectionReveal>

          {isSplit && <SectionReveal delay={0.1}>{media}</SectionReveal>}
        </div>
      </div>
    </section>
  );
}
