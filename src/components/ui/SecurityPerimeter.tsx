import { useCallback, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Check, ShieldAlert } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";

export type PerimeterLayer = {
  id: string;
  order: number;
  title: string;
  short: string;
  promise: string;
  module: string;
  icon: string;
};

export type PerimeterScenario = {
  id: string;
  question: string;
  attempt: string;
  stoppedBy: string;
  response: string;
  controls: string[];
};

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.8)" };

export function SecurityPerimeter({
  layers,
  scenarios,
  stats,
}: {
  layers: PerimeterLayer[];
  scenarios: PerimeterScenario[];
  stats: { layers: number; modules: number; capabilities: number };
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = useCallback((index: number) => setActiveIndex(index), []);

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = scenarios.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowDown" || event.key === "ArrowRight") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowUp" || event.key === "ArrowLeft") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="fabric-board rounded-[2rem] border border-brand-navy/[0.1] bg-white p-5 shadow-xl shadow-brand-navy/[0.05] md:p-8">
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-brand-navy/[0.08] pb-5">
        <dl className="flex flex-wrap items-center gap-x-8 gap-y-3">
          {[
            { value: stats.layers, label: "defence layers" },
            { value: stats.modules, label: "security modules" },
            { value: stats.capabilities, label: "security capabilities" },
          ].map((stat) => (
            <div key={stat.label}>
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <span className="text-2xl font-extrabold leading-none text-brand-navy">{stat.value}</span>
                <span className="ml-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-navy/[0.72]">
                  {stat.label}
                </span>
              </dd>
            </div>
          ))}
        </dl>
        <p className="text-sm font-semibold text-brand-navy/[0.74]">
          Controls that exist today — no certification we have not earned.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div
          role="tablist"
          aria-label="School security scenarios"
          aria-orientation="vertical"
          className="flex flex-col gap-2 lg:col-span-5"
        >
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
            Pick what worries you
          </p>
          {scenarios.map((scenario, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={scenario.id}
                type="button"
                role="tab"
                id={`perimeter-tab-${scenario.id}`}
                aria-selected={isActive}
                aria-controls={`perimeter-panel-${scenario.id}`}
                tabIndex={isActive ? 0 : -1}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                onClick={() => select(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`flex items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-colors ${
                  isActive
                    ? "border-brand-navy bg-brand-navy/[0.04]"
                    : "border-brand-navy/[0.1] bg-white hover:border-brand-teal/45"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg text-[0.65rem] font-extrabold ${
                    isActive ? "bg-brand-yellow text-brand-navy" : "bg-brand-navy/[0.06] text-brand-navy/[0.78]"
                  }`}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm leading-6 ${isActive ? "font-bold text-brand-navy" : "font-semibold text-brand-navy/[0.82]"}`}>
                  {scenario.question}
                </span>
              </button>
            );
          })}
        </div>

        <div className="min-w-0 lg:col-span-7">
          {scenarios.map((scenario, index) => {
            const layer = layers.find((entry) => entry.id === scenario.stoppedBy);
            const isActive = index === activeIndex;

            return (
              <section
                key={scenario.id}
                id={`perimeter-panel-${scenario.id}`}
                role="tabpanel"
                aria-labelledby={`perimeter-tab-${scenario.id}`}
                hidden={!isActive}
                className={
                  isActive
                    ? "console-panel block rounded-[1.75rem] border border-white/12 bg-brand-navy p-6 md:p-7"
                    : "hidden"
                }
              >
                <div className="flex items-start gap-3">
                  <ShieldAlert className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" aria-hidden="true" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                      What is being attempted
                    </p>
                    <p className="mt-2 text-sm leading-7" style={MUTED}>
                      {scenario.attempt}
                    </p>
                  </div>
                </div>

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
                    Which layer answers it
                  </p>
                  <ol className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-6">
                    {layers.map((entry) => {
                      const isHit = entry.id === scenario.stoppedBy;
                      return (
                        <li
                          key={entry.id}
                          className={`rounded-xl border px-2.5 py-2 text-center ${
                            isHit
                              ? "border-brand-yellow bg-brand-yellow/[0.16]"
                              : "border-white/12 bg-white/[0.04]"
                          }`}
                        >
                          <span
                            className={`block text-[0.65rem] font-extrabold ${
                              isHit ? "text-brand-yellow" : "text-brand-beige/60"
                            }`}
                          >
                            {String(entry.order).padStart(2, "0")}
                          </span>
                          <span
                            className={`mt-0.5 block text-[0.72rem] font-bold leading-4 ${
                              isHit ? "text-brand-yellow" : "text-brand-beige/70"
                            }`}
                          >
                            {entry.short}
                          </span>
                          {isHit ? <span className="sr-only">Handles this scenario</span> : null}
                        </li>
                      );
                    })}
                  </ol>
                </div>

                {layer ? (
                  <div className="mt-6 flex flex-wrap items-center gap-3 rounded-2xl border border-white/12 bg-white/[0.05] p-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-yellow/[0.16] text-brand-yellow">
                      <ProductIcon name={layer.icon} className="h-5 w-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-bold text-brand-beige">
                        Layer {String(layer.order).padStart(2, "0")} · {layer.title}
                      </p>
                      <p className="mt-1 text-xs leading-5" style={MUTED}>
                        {layer.promise}
                      </p>
                    </div>
                  </div>
                ) : null}

                <div className="mt-6">
                  <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
                    What KIDUART does about it
                  </p>
                  <p className="mt-2 text-sm leading-7" style={MUTED}>
                    {scenario.response}
                  </p>
                </div>

                <ul className="mt-5 space-y-2.5 border-t border-white/10 pt-5">
                  {scenario.controls.map((control) => (
                    <li key={control} className="flex items-start gap-2.5">
                      <span
                        aria-hidden="true"
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-yellow/[0.16]"
                      >
                        <Check className="h-3 w-3 text-brand-yellow" />
                      </span>
                      <span className="text-sm leading-6 text-brand-beige">{control}</span>
                    </li>
                  ))}
                </ul>

                {layer ? (
                  <Link
                    href={`/security#layer-${layer.id}`}
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-yellow transition-colors hover:text-brand-beige"
                  >
                    Open {layer.title.toLowerCase()} in full
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : null}
              </section>
            );
          })}
        </div>
      </div>
    </div>
  );
}
