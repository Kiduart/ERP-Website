import Link from "next/link";
import { useCallback, useRef, useState } from "react";
import { ArrowRight, Check, ChevronLeft, ChevronRight } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import { SCHOOL_OPERATIONS_JOURNEY } from "@/lib/siteData";

const steps = SCHOOL_OPERATIONS_JOURNEY;

export function SchoolJourney() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const active = steps[activeIndex];
  const nextStep = steps[(activeIndex + 1) % steps.length];
  const previousStep = steps[(activeIndex - 1 + steps.length) % steps.length];

  const selectStep = useCallback((index: number, moveFocus = false) => {
    const next = (index + steps.length) % steps.length;
    setActiveIndex(next);
    const node = tabRefs.current[next];
    if (moveFocus) node?.focus({ preventScroll: true });
    node?.scrollIntoView({ block: "nearest", inline: "center", behavior: "smooth" });
  }, []);

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    const keys: Record<string, number> = {
      ArrowRight: index + 1,
      ArrowDown: index + 1,
      ArrowLeft: index - 1,
      ArrowUp: index - 1,
      Home: 0,
      End: steps.length - 1,
    };
    if (event.key in keys) {
      event.preventDefault();
      selectStep(keys[event.key], true);
    }
  };

  const progress = (activeIndex / (steps.length - 1)) * 100;

  return (
    <div className="grid gap-8 lg:grid-cols-[19rem_1fr] lg:gap-10">
      {/* Stepper rail */}
      <div
        role="tablist"
        aria-label="School operations journey steps"
        aria-orientation="vertical"
        className="relative flex snap-x snap-mandatory gap-3 overflow-x-auto pb-3 lg:flex-col lg:gap-1 lg:overflow-visible lg:pb-0"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute bottom-4 left-[1.4375rem] top-4 hidden w-px bg-brand-navy/[0.12] lg:block"
        />
        <span
          aria-hidden="true"
          style={{ height: `${progress}%` }}
          className="pointer-events-none absolute left-[1.4375rem] top-4 hidden w-px bg-brand-teal transition-[height] duration-500 ease-out lg:block"
        />

        {steps.map((step, index) => {
          const isActive = index === activeIndex;
          const isDone = index < activeIndex;

          return (
            <button
              key={step.id}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              type="button"
              role="tab"
              id={`journey-tab-${step.id}`}
              aria-selected={isActive}
              aria-controls="journey-panel"
              tabIndex={isActive ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`group relative flex min-w-[9.25rem] flex-shrink-0 snap-start flex-col items-start gap-2 rounded-2xl border p-3 text-left transition-all duration-300 lg:min-w-0 lg:flex-row lg:items-center lg:gap-3 lg:border-transparent lg:bg-transparent lg:p-2 ${
                isActive
                  ? "border-brand-teal/40 bg-white shadow-md lg:bg-white lg:shadow-sm"
                  : "border-brand-navy/10 bg-white/70 hover:border-brand-teal/30 hover:bg-white lg:hover:bg-white/70"
              }`}
            >
              <span
                className={`relative z-10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border text-xs font-bold transition-all duration-300 ${
                  isActive
                    ? "border-brand-navy bg-brand-navy text-brand-beige"
                    : isDone
                      ? "border-brand-teal/50 bg-brand-teal/10 text-brand-teal"
                      : "border-brand-navy/15 bg-white text-brand-navy/[0.78] group-hover:border-brand-teal/40 group-hover:text-brand-teal"
                }`}
              >
                {isDone ? (
                  <Check className="h-4 w-4" aria-hidden="true" />
                ) : (
                  String(index + 1).padStart(2, "0")
                )}
              </span>

              <span className="flex min-w-0 flex-1 items-center gap-2">
                <ProductIcon
                  name={step.icon}
                  className={`hidden h-4 w-4 flex-shrink-0 transition-colors duration-300 lg:block ${
                    isActive ? "text-brand-teal" : "text-brand-navy/40 group-hover:text-brand-teal"
                  }`}
                />
                <span className="min-w-0">
                  <span
                    className={`block truncate text-sm font-bold leading-snug transition-colors duration-300 ${
                      isActive ? "text-brand-navy" : "text-brand-navy/75 group-hover:text-brand-navy"
                    }`}
                  >
                    {step.label}
                  </span>
                  <span className="mt-1 block text-xs leading-5 text-brand-navy/[0.82] lg:hidden">
                    {step.blurb}
                  </span>
                </span>
              </span>

              <ArrowRight
                aria-hidden="true"
                className={`hidden h-4 w-4 flex-shrink-0 text-brand-teal transition-all duration-300 lg:block ${
                  isActive ? "opacity-100" : "opacity-0 -translate-x-1"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Detail panel */}
      <div
        id="journey-panel"
        role="tabpanel"
        aria-labelledby={`journey-tab-${active.id}`}
        tabIndex={-1}
        className="relative overflow-hidden rounded-3xl border border-brand-navy/10 bg-white p-6 shadow-lg shadow-brand-navy/5 md:p-9"
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-16 -top-16 h-52 w-52 rounded-full bg-brand-teal/[0.08]"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-20 -left-12 h-48 w-48 rounded-full bg-brand-yellow/10"
        />

        <div key={active.id} className="journey-panel-enter relative z-10">
          <div className="flex flex-wrap items-center gap-4">
            <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-brand-beige">
              <ProductIcon name={active.icon} className="h-7 w-7" />
            </span>
            <div>
              <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">
                {active.stage}
              </div>
              <h3 className="mt-2 text-2xl font-bold leading-tight text-brand-navy md:text-[1.75rem]">
                {active.label}
              </h3>
            </div>
            <span className="ml-auto rounded-2xl border border-brand-navy/10 bg-brand-beige/30 px-4 py-2.5 text-center">
              <span className="block text-xl font-extrabold leading-none text-brand-navy">
                {active.featureCount}
              </span>
              <span className="mt-1 block text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-navy/[0.72]">
                features here
              </span>
            </span>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-brand-navy/75">{active.detail}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {active.roles.map((role) => (
              <li
                key={role}
                className="rounded-full border border-brand-navy/[0.1] bg-white px-3 py-1.5 text-xs font-semibold text-brand-navy/[0.82]"
              >
                {role}
              </li>
            ))}
          </ul>

          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {active.points.map((point, index) => (
              <li
                key={point}
                className={`flex items-start gap-3 rounded-2xl border border-brand-navy/[0.08] bg-brand-beige/30 px-4 py-3 ${
                  index === active.points.length - 1 && active.points.length % 2 === 1
                    ? "sm:col-span-2"
                    : ""
                }`}
              >
                <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand-teal/15 text-brand-teal">
                  <Check className="h-3 w-3" aria-hidden="true" />
                </span>
                <span className="text-sm font-medium leading-6 text-brand-navy/80">{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-brand-navy/[0.08] pt-6">
            <Link
              href={active.href}
              className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-brand-beige transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
            >
              Explore {active.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>

            <div className="flex items-center gap-3">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-navy/[0.78]">
                Step {String(activeIndex + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => selectStep(activeIndex - 1)}
                  aria-label={`Previous step: ${previousStep.label}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand-navy/15 text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  onClick={() => selectStep(activeIndex + 1)}
                  aria-label={`Next step: ${nextStep.label}`}
                  className="flex h-9 items-center gap-2 rounded-full border border-brand-navy/15 px-3 text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                >
                  <span className="hidden text-xs font-semibold sm:inline">
                    Next: {nextStep.label}
                  </span>
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
