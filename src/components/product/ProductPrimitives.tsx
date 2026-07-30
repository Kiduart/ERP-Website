import type { ReactNode } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Check, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

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
}: {
  value: string | number;
  label: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-brand-navy/[0.1] bg-white/90 px-4 py-3 text-left",
        className,
      )}
    >
      <div className="text-2xl font-extrabold leading-none text-brand-navy">{value}</div>
      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
        {label}
      </p>
    </div>
  );
}

/** Numbered rail for a module area's daily flow — CSS only, no client JS. */
export function FlowRail({
  steps,
  accent = "teal",
}: {
  steps: { title: string; detail: string }[];
  accent?: AccentName;
}) {
  const tokens = ACCENTS[accent];

  return (
    <ol className="relative grid gap-4 md:grid-cols-2 xl:grid-cols-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className={cn(
            "group relative flex h-full flex-col rounded-3xl border bg-white/95 p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1",
            tokens.border,
          )}
        >
          <span
            className={cn(
              "mb-4 inline-flex h-10 w-10 items-center justify-center rounded-2xl text-sm font-extrabold text-white",
              tokens.solidBg,
            )}
            aria-hidden="true"
          >
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="text-lg font-bold text-brand-navy">{step.title}</h3>
          <p className="mt-2 flex-grow text-sm leading-6 text-brand-navy/[0.76]">{step.detail}</p>
          <span
            className={cn("mt-4 h-1 w-12 rounded-full transition-all duration-300 group-hover:w-20", tokens.bar)}
            aria-hidden="true"
          />
        </li>
      ))}
    </ol>
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
