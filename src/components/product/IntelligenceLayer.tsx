import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import {
  INTELLIGENCE_WORKFLOWS,
  SIGNAL_STREAMS,
} from "@/data/intelligenceWorkflows";

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.78)" };

/**
 * Features-page view of the intelligence layer: every card is a workflow that
 * already exists in the product, shown against the modules it reads from.
 */
export function IntelligenceLayer() {
  const live = INTELLIGENCE_WORKFLOWS.filter((workflow) => workflow.status === "live");
  const building = INTELLIGENCE_WORKFLOWS.filter((workflow) => workflow.status === "building");

  const counts = [
    { value: live.length, label: "workflows live in the product" },
    { value: SIGNAL_STREAMS.length, label: "signal streams it already reads" },
    { value: building.length, label: "in development, not billed" },
  ];

  return (
    <div className="fabric-board rounded-[2.25rem] border border-white/12 bg-white/[0.04] p-5 sm:p-7">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 pb-6">
        <p className="inline-flex items-center gap-2 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-brand-yellow">
          <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-yellow" aria-hidden="true" />
          Running on your own instance
        </p>
        <dl className="flex flex-wrap gap-x-7 gap-y-2">
          {counts.map((count) => (
            <div key={count.label} className="flex items-baseline gap-2">
              <dd className="text-xl font-extrabold text-brand-beige">{count.value}</dd>
              <dt className="text-xs font-semibold" style={MUTED}>
                {count.label}
              </dt>
            </div>
          ))}
        </dl>
      </div>

      <div className="border-b border-white/10 py-6">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
          Signals it reads — nothing extra to enter
        </p>
        <ul className="mt-3.5 flex flex-wrap gap-2">
          {SIGNAL_STREAMS.map((stream, index) => (
            <li
              key={stream.label}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.05] px-3.5 py-1.5"
            >
              <span
                aria-hidden="true"
                style={{ animationDelay: `${index * 300}ms` }}
                className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-yellow"
              />
              <span className="text-sm font-semibold text-brand-beige">{stream.label}</span>
              <span className="hidden text-xs sm:inline" style={MUTED}>
                {stream.detail}
              </span>
            </li>
          ))}
        </ul>
      </div>

      <ul className="grid gap-3 pt-6 md:grid-cols-2 xl:grid-cols-3">
        {live.map((workflow) => (
          <li
            key={workflow.id}
            className="console-panel flex flex-col rounded-[1.5rem] border border-white/12 bg-white/[0.05] p-5 transition-colors duration-300 hover:border-brand-yellow/45"
          >
            <div className="flex items-start gap-3.5">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow/[0.16] text-brand-yellow">
                <ProductIcon name={workflow.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-bold text-brand-beige">{workflow.title}</h3>
                <p className="mt-1 text-sm font-semibold text-brand-yellow">{workflow.outcome}</p>
              </div>
            </div>

            <p
              className="console-trace mt-4 overflow-x-auto rounded-xl border border-white/12 bg-brand-navy/60 px-3.5 py-2.5 font-mono text-[0.72rem] leading-6"
              style={MUTED}
            >
              <span className="text-brand-yellow" aria-hidden="true">
                ▸{" "}
              </span>
              {workflow.trace}
            </p>

            <p className="mt-4 flex-1 text-sm leading-7" style={MUTED}>
              {workflow.action}
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-white/10 pt-4">
              <span className="text-[0.68rem] font-bold uppercase tracking-[0.14em]" style={MUTED}>
                Runs inside
              </span>
              {workflow.modules.map((module) => (
                <Link
                  key={module.href + module.label}
                  href={module.href}
                  className="rounded-full border border-white/20 px-3 py-1 text-xs font-semibold text-brand-beige transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                >
                  {module.label}
                </Link>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-3 rounded-[1.5rem] border border-white/12 bg-white/[0.03] p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/[0.06] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-beige">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-beige/70" aria-hidden="true" />
            In development
          </span>
          <p className="text-sm" style={MUTED}>
            Listed so you know what is coming — not switched on, not billed.
          </p>
        </div>
        <ul className="mt-4 grid gap-3 md:grid-cols-3">
          {building.map((workflow) => (
            <li key={workflow.id} className="rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3.5">
              <p className="text-sm font-bold text-brand-beige">{workflow.title}</p>
              <p className="mt-1 text-xs leading-6" style={MUTED}>
                {workflow.outcome}
              </p>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-white/10 pt-6">
        <Link
          href="/kiduorbit"
          className="inline-flex items-center gap-2 rounded-full border border-brand-yellow/40 bg-brand-yellow/10 px-6 py-3 text-base font-bold text-brand-yellow transition-colors hover:bg-brand-yellow hover:text-brand-navy"
        >
          Read how KIDUORBIT works <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
        <p className="max-w-xl text-sm leading-6" style={MUTED}>
          Models run on your own records inside your own instance — no student data is sent to an
          outside AI service.
        </p>
      </div>
    </div>
  );
}
