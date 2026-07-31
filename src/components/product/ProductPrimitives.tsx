import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowRight, ArrowUpRight, Check, ChevronRight, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";

export type AccentName = "navy" | "teal" | "orange" | "yellow" | "bronze";

type AccentTokens = {
  text: string;
  border: string;
  softBg: string;
  solidBg: string;
  bar: string;
};

/** Brand accents resolved once so every product page shares the same palette rules. */
export const ACCENTS: Record<AccentName, AccentTokens> = {
  navy: {
    text: "text-brand-navy",
    border: "border-brand-navy/20",
    softBg: "bg-brand-navy/[0.06]",
    solidBg: "bg-brand-navy",
    bar: "bg-brand-navy",
  },
  teal: {
    text: "text-brand-teal",
    border: "border-brand-teal/25",
    softBg: "bg-brand-teal/[0.08]",
    solidBg: "bg-brand-teal",
    bar: "bg-brand-teal",
  },
  orange: {
    text: "text-brand-orange-ink",
    border: "border-brand-orange/25",
    softBg: "bg-brand-orange/[0.08]",
    solidBg: "bg-brand-orange",
    bar: "bg-brand-orange",
  },
  yellow: {
    text: "text-brand-bronze-ink",
    border: "border-brand-yellow/40",
    softBg: "bg-brand-yellow/[0.14]",
    solidBg: "bg-brand-yellow",
    bar: "bg-brand-yellow",
  },
  bronze: {
    text: "text-brand-bronze-ink",
    border: "border-brand-bronze/25",
    softBg: "bg-brand-bronze/[0.08]",
    solidBg: "bg-brand-bronze",
    bar: "bg-brand-bronze",
  },
};

export function Breadcrumbs({ trail }: { trail: { name: string; path: string }[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex flex-wrap items-center gap-1 text-sm text-brand-navy/[0.72]">
        {trail.map((entry, index) => {
          const isLast = index === trail.length - 1;
          return (
            <li key={entry.path} className="flex items-center gap-1">
              {isLast ? (
                <span aria-current="page" className="font-semibold text-brand-navy">
                  {entry.name}
                </span>
              ) : (
                <>
                  <Link href={entry.path} className="rounded font-medium underline-offset-4 hover:underline">
                    {entry.name}
                  </Link>
                  <ChevronRight className="h-4 w-4 text-brand-navy/40" aria-hidden="true" />
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export function StatChip({
  value,
  label,
  className,
  animate = false,
}: {
  value: string | number;
  label: string;
  className?: string;
  animate?: boolean;
}) {
  const numeric = typeof value === "number" ? value : Number(value);
  const canAnimate = animate && Number.isFinite(numeric);

  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-navy/[0.1] bg-white px-4 py-4 text-left shadow-sm shadow-brand-navy/[0.04]",
        className,
      )}
    >
      <div className="text-[clamp(1.5rem,1.2rem+0.8vw,2rem)] font-extrabold leading-none text-brand-navy">
        {canAnimate ? <AnimatedCounter end={numeric} /> : value}
      </div>
      <p className="mt-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
        {label}
      </p>
      <span className="console-rail relative mt-3 block" aria-hidden="true" />
    </div>
  );
}

/**
 * Gated-capability cue. Scrolls to the on-page capability-sheet form so visitors
 * know exactly how to unlock the rest — used on every area and module page.
 */
export function HiddenCapabilitiesLink({
  count,
  label,
  href = "#capability-sheet",
  className,
}: {
  /** Kept for callers; not shown in the public cue to avoid inventory ceilings */
  count?: number;
  label?: string;
  href?: string;
  className?: string;
}) {
  return (
    <a
      href={href}
      className={cn(
        "group/lock flex w-full items-start gap-2.5 rounded-xl border border-dashed border-brand-navy/25 bg-white/70 px-3.5 py-2.5 text-left text-sm leading-6 text-brand-navy transition-colors hover:border-brand-teal/50 hover:bg-brand-teal/[0.06] hover:text-brand-teal",
        className,
      )}
    >
      <span
        className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-navy/[0.08] transition-colors group-hover/lock:bg-brand-teal/15"
        aria-hidden="true"
      >
        <Lock className="h-3 w-3 text-brand-navy/60 group-hover/lock:text-brand-teal" />
      </span>
      <span className="min-w-0 flex-1">
        <span className="font-semibold">
          More capabilities{label ? ` ${label}` : ""}
        </span>
        <span className="text-brand-navy/[0.72] group-hover/lock:text-brand-teal/80">
          {" "}
          — request the full sheet
        </span>
      </span>
      <ArrowRight
        className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-navy/40 transition-transform group-hover/lock:translate-x-0.5 group-hover/lock:text-brand-teal"
        aria-hidden="true"
      />
    </a>
  );
}

/** Numbered runway for a module area's daily flow. */
export function FlowRail({
  steps,
  accent = "teal",
}: {
  steps: { title: string; detail: string }[];
  accent?: AccentName;
}) {
  const tokens = ACCENTS[accent];

  return (
    <div className="fabric-board overflow-hidden rounded-[2rem] border border-brand-navy/[0.1] bg-white/70 p-4 shadow-xl shadow-brand-navy/[0.06] sm:p-5">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3 px-1">
        <p className="inline-flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-teal">
          <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-teal" aria-hidden="true" />
          Daily sequence
        </p>
        <p className="text-xs font-semibold text-brand-navy/[0.72]">{steps.length} steps in order</p>
      </div>

      <ol className="relative grid gap-3 md:grid-cols-2 xl:grid-cols-4">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-8 right-8 top-[2.15rem] hidden h-px bg-gradient-to-r from-transparent via-brand-navy/20 to-transparent xl:block"
        />
        {steps.map((step, index) => (
          <li
            key={step.title}
            className={cn(
              "group relative flex h-full flex-col rounded-[1.35rem] border bg-white p-5 transition-shadow duration-300 hover:shadow-lg hover:shadow-brand-navy/[0.08]",
              tokens.border,
            )}
          >
            <span
              className={cn(
                "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-extrabold text-white ring-4 ring-white",
                tokens.solidBg,
              )}
              aria-hidden="true"
            >
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3 className="text-base font-bold text-brand-navy">{step.title}</h3>
            <p className="mt-2 flex-grow text-sm leading-6 text-brand-navy/[0.76]">{step.detail}</p>
            <span
              className={cn(
                "mt-4 h-1 w-10 rounded-full transition-all duration-300 group-hover:w-16",
                tokens.bar,
              )}
              aria-hidden="true"
            />
          </li>
        ))}
      </ol>
    </div>
  );
}

export function OutcomeList({ items, accent = "teal" }: { items: string[]; accent?: AccentName }) {
  const tokens = ACCENTS[accent];

  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="flex items-start gap-3 rounded-2xl border border-brand-navy/[0.08] bg-white/90 px-4 py-3"
        >
          <span
            className={cn("mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full", tokens.softBg)}
            aria-hidden="true"
          >
            <Check className={cn("h-3.5 w-3.5", tokens.text)} />
          </span>
          <span className="text-sm leading-6 text-brand-navy/[0.82]">{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function SectionHeading({
  kicker,
  title,
  description,
  align = "left",
  children,
}: {
  kicker: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  children?: ReactNode;
}) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center")}>
      <p className="section-kicker">{kicker}</p>
      <h2 className="mt-4 text-3xl font-bold text-brand-navy md:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-lg leading-8 text-brand-navy/[0.74]">{description}</p>
      ) : null}
      {children}
    </div>
  );
}

export function TextLink({
  href,
  children,
  className,
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy underline-offset-4 transition-colors hover:text-brand-teal hover:underline",
        className,
      )}
    >
      {children}
      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}
