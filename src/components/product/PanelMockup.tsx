import { ACCENTS, type AccentName } from "@/components/product/ProductPrimitives";
import type { PanelLayout } from "@/data/productPanels";
import { cn } from "@/lib/utils";

/**
 * Decorative, code-drawn preview of each role panel. Purely illustrative — it is
 * hidden from assistive tech and carries no copy, so it can never contradict the
 * product while still giving every panel page its own visual signature.
 */

function Line({ w = "w-full", tone = "bg-brand-navy/[0.12]" }: { w?: string; tone?: string }) {
  return <span className={cn("block h-2 rounded-full", w, tone)} />;
}

function Row({ accentBar }: { accentBar: string }) {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white px-3 py-2.5 shadow-sm">
      <span className={cn("h-6 w-6 shrink-0 rounded-full", accentBar)} />
      <span className="flex-1 space-y-1.5">
        <Line w="w-3/4" />
        <Line w="w-1/2" tone="bg-brand-navy/[0.07]" />
      </span>
      <span className="h-4 w-8 rounded-full bg-brand-navy/[0.08]" />
    </div>
  );
}

function Tile({ accentBar, tall = false }: { accentBar: string; tall?: boolean }) {
  return (
    <div className={cn("rounded-2xl bg-white p-3 shadow-sm", tall && "row-span-2")}>
      <span className={cn("block h-5 w-5 rounded-lg", accentBar)} />
      <span className="mt-3 block h-4 w-12 rounded-full bg-brand-navy/[0.16]" />
      <span className="mt-2 block h-2 w-16 rounded-full bg-brand-navy/[0.08]" />
    </div>
  );
}

function Bars({ accentBar }: { accentBar: string }) {
  const heights = ["h-8", "h-14", "h-10", "h-20", "h-12", "h-16"];
  return (
    <div className="flex h-24 items-end gap-2">
      {heights.map((height, index) => (
        <span
          key={index}
          className={cn(
            "w-full rounded-t-md",
            height,
            index % 3 === 0 ? accentBar : "bg-brand-navy/[0.14]",
          )}
        />
      ))}
    </div>
  );
}

function Sparkline({ accentBar }: { accentBar: string }) {
  return (
    <div className="relative h-20 overflow-hidden rounded-xl bg-brand-navy/[0.04]">
      <span className={cn("absolute bottom-0 left-0 h-1 w-full", accentBar, "opacity-30")} />
      <svg viewBox="0 0 200 60" className="h-full w-full" preserveAspectRatio="none">
        <polyline
          points="0,48 30,40 60,44 90,26 120,30 150,14 200,8"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          className="text-brand-teal"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

function CalendarGrid({ accentBar }: { accentBar: string }) {
  return (
    <div className="grid grid-cols-6 gap-1.5">
      {Array.from({ length: 24 }).map((_, index) => (
        <span
          key={index}
          className={cn(
            "h-5 rounded-md",
            index % 7 === 3 ? accentBar : index % 5 === 0 ? "bg-brand-navy/[0.16]" : "bg-brand-navy/[0.06]",
          )}
        />
      ))}
    </div>
  );
}

function CheckList({ accentBar }: { accentBar: string }) {
  return (
    <div className="space-y-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex items-center gap-3 rounded-xl bg-white px-3 py-2 shadow-sm">
          <span className="flex-1 space-y-1.5">
            <Line w="w-2/3" />
          </span>
          <span
            className={cn(
              "h-5 w-5 rounded-full",
              index < 3 ? accentBar : "border-2 border-brand-navy/[0.16] bg-transparent",
            )}
          />
        </div>
      ))}
    </div>
  );
}

function CampusNodes({ accentBar }: { accentBar: string }) {
  return (
    <div className="relative rounded-2xl bg-white p-4 shadow-sm">
      <div className="grid grid-cols-4 gap-3">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="rounded-xl bg-brand-beige/40 p-2 text-center">
            <span className={cn("mx-auto block h-6 w-6 rounded-md", accentBar)} />
            <span className="mx-auto mt-2 block h-2 w-8 rounded-full bg-brand-navy/[0.14]" />
          </div>
        ))}
      </div>
      <div className="mt-3 h-px w-full bg-brand-navy/[0.1]" />
      <div className="mt-3 grid grid-cols-3 gap-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <span key={index} className="h-10 rounded-lg bg-brand-navy/[0.06]" />
        ))}
      </div>
    </div>
  );
}

function Receipt({ accentBar }: { accentBar: string }) {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <span className={cn("h-6 w-6 rounded-md", accentBar)} />
        <span className="h-3 w-16 rounded-full bg-brand-navy/[0.12]" />
      </div>
      <div className="mt-3 space-y-2">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={index} className="flex items-center justify-between gap-4">
            <Line w="w-1/2" tone="bg-brand-navy/[0.09]" />
            <span className="h-2 w-10 rounded-full bg-brand-navy/[0.16]" />
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center justify-between border-t border-dashed border-brand-navy/15 pt-3">
        <span className="h-3 w-14 rounded-full bg-brand-navy/[0.18]" />
        <span className={cn("h-6 w-16 rounded-full", accentBar)} />
      </div>
    </div>
  );
}

function ToggleStack({ accentBar }: { accentBar: string }) {
  return (
    <div className="space-y-2.5">
      {Array.from({ length: 4 }).map((_, index) => (
        <div key={index} className="flex items-center justify-between rounded-xl bg-white px-3 py-2.5 shadow-sm">
          <span className="flex-1 space-y-1.5 pr-4">
            <Line w="w-2/3" />
            <Line w="w-1/3" tone="bg-brand-navy/[0.07]" />
          </span>
          <span
            className={cn(
              "flex h-5 w-9 items-center rounded-full px-0.5",
              index % 2 === 0 ? accentBar : "bg-brand-navy/[0.14]",
            )}
          >
            <span className={cn("h-4 w-4 rounded-full bg-white", index % 2 === 0 && "ml-auto")} />
          </span>
        </div>
      ))}
    </div>
  );
}

function PhoneCard({ accentBar }: { accentBar: string }) {
  return (
    <div className="mx-auto w-40 rounded-[1.75rem] border-4 border-brand-navy/80 bg-white p-3 shadow-lg">
      <span className="mx-auto block h-1.5 w-10 rounded-full bg-brand-navy/20" />
      <div className={cn("mt-3 h-12 rounded-xl", accentBar)} />
      <div className="mt-3 grid grid-cols-5 gap-1">
        {Array.from({ length: 15 }).map((_, index) => (
          <span
            key={index}
            className={cn("h-3 rounded", index % 6 === 2 ? accentBar : "bg-brand-navy/[0.08]")}
          />
        ))}
      </div>
      <div className="mt-3 space-y-1.5">
        <Line w="w-full" />
        <Line w="w-2/3" tone="bg-brand-navy/[0.08]" />
      </div>
    </div>
  );
}

function bodyFor(layout: PanelLayout, accentBar: string) {
  switch (layout) {
    case "console":
      return (
        <div className="grid gap-3 md:grid-cols-2">
          <ToggleStack accentBar={accentBar} />
          <div className="grid grid-cols-2 gap-3">
            <Tile accentBar={accentBar} />
            <Tile accentBar={accentBar} />
            <Tile accentBar={accentBar} />
            <Tile accentBar={accentBar} />
          </div>
        </div>
      );
    case "network":
      return (
        <div className="space-y-3">
          <CampusNodes accentBar={accentBar} />
          <div className="grid grid-cols-3 gap-3">
            <Tile accentBar={accentBar} />
            <Tile accentBar={accentBar} />
            <Tile accentBar={accentBar} />
          </div>
        </div>
      );
    case "insight":
      return (
        <div className="space-y-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <Sparkline accentBar={accentBar} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <Bars accentBar={accentBar} />
            </div>
            <div className="grid gap-3">
              <Tile accentBar={accentBar} />
              <Tile accentBar={accentBar} />
            </div>
          </div>
        </div>
      );
    case "operations":
      return (
        <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-2.5">
            <Row accentBar={accentBar} />
            <Row accentBar={accentBar} />
            <Row accentBar={accentBar} />
            <Row accentBar={accentBar} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <Tile accentBar={accentBar} />
            <Tile accentBar={accentBar} />
            <div className="col-span-2 rounded-2xl bg-white p-3 shadow-sm">
              <Bars accentBar={accentBar} />
            </div>
          </div>
        </div>
      );
    case "planner":
      return (
        <div className="grid gap-3 md:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <CalendarGrid accentBar={accentBar} />
          </div>
          <div className="space-y-2.5">
            <Row accentBar={accentBar} />
            <Row accentBar={accentBar} />
            <Tile accentBar={accentBar} />
          </div>
        </div>
      );
    case "classroom":
      return (
        <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-2xl bg-brand-beige/40 p-3">
            <CheckList accentBar={accentBar} />
          </div>
          <div className="space-y-3">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <CalendarGrid accentBar={accentBar} />
            </div>
            <div className="grid grid-cols-2 gap-3">
              <Tile accentBar={accentBar} />
              <Tile accentBar={accentBar} />
            </div>
          </div>
        </div>
      );
    case "ledger":
      return (
        <div className="grid gap-3 md:grid-cols-[0.9fr_1.1fr]">
          <Receipt accentBar={accentBar} />
          <div className="space-y-2.5">
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <Bars accentBar={accentBar} />
            </div>
            <Row accentBar={accentBar} />
            <Row accentBar={accentBar} />
          </div>
        </div>
      );
    case "people":
      return (
        <div className="space-y-3">
          <div className="grid grid-cols-3 gap-3">
            <Tile accentBar={accentBar} />
            <Tile accentBar={accentBar} />
            <Tile accentBar={accentBar} />
          </div>
          <div className="grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-brand-beige/40 p-3">
              <CheckList accentBar={accentBar} />
            </div>
            <Receipt accentBar={accentBar} />
          </div>
        </div>
      );
    case "family":
      return (
        <div className="grid items-center gap-4 md:grid-cols-[0.8fr_1.2fr]">
          <PhoneCard accentBar={accentBar} />
          <div className="space-y-2.5">
            <Row accentBar={accentBar} />
            <Row accentBar={accentBar} />
            <div className="rounded-2xl bg-white p-4 shadow-sm">
              <CalendarGrid accentBar={accentBar} />
            </div>
          </div>
        </div>
      );
    case "learner":
    default:
      return (
        <div className="space-y-3">
          <div className="rounded-2xl bg-white p-4 shadow-sm">
            <CalendarGrid accentBar={accentBar} />
          </div>
          <div className="grid gap-3 md:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-2xl bg-brand-beige/40 p-3">
              <CheckList accentBar={accentBar} />
            </div>
            <div className="grid gap-3">
              <Tile accentBar={accentBar} />
              <Tile accentBar={accentBar} />
            </div>
          </div>
        </div>
      );
  }
}

export function PanelMockup({
  layout,
  accent,
  className,
}: {
  layout: PanelLayout;
  accent: AccentName;
  className?: string;
}) {
  const tokens = ACCENTS[accent];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "overflow-hidden rounded-[1.75rem] border border-brand-navy/[0.1] bg-brand-beige/30 shadow-xl shadow-brand-navy/5",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-brand-navy/[0.08] bg-white px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-brand-orange/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-yellow/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-brand-teal/70" />
        <span className="ml-3 h-3 w-24 rounded-full bg-brand-navy/[0.1]" />
        <span className={cn("ml-auto h-6 w-6 rounded-full", tokens.bar)} />
      </div>

      <div className="flex">
        <div className="hidden w-16 shrink-0 flex-col gap-3 border-r border-brand-navy/[0.08] bg-brand-navy/[0.96] px-3 py-4 sm:flex">
          {Array.from({ length: 6 }).map((_, index) => (
            <span
              key={index}
              className={cn(
                "h-7 rounded-lg",
                index === 0 ? tokens.bar : "bg-white/10",
              )}
            />
          ))}
        </div>
        <div className="min-w-0 flex-1 p-4">{bodyFor(layout, tokens.bar)}</div>
      </div>
    </div>
  );
}
