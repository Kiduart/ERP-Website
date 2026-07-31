import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  ArrowUpRight,
  Check,
  ShieldCheck,
  TriangleAlert,
} from "lucide-react";
import { Stagger } from "@/components/ui/Stagger";
import { VENDOR_QUESTIONS } from "@/data/vendorQuestions";

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.78)" };

export function VendorChecklist() {
  const [picked, setPicked] = useState<string[]>([]);

  const toggle = (id: string) =>
    setPicked((current) =>
      current.includes(id)
        ? current.filter((entry) => entry !== id)
        : [...current, id],
    );

  return (
    <div>
      <Stagger as="ol" className="space-y-4" itemClassName="motion-stamp">
        {VENDOR_QUESTIONS.map((item, index) => {
          const isPicked = picked.includes(item.id);

          return (
            <li
              key={item.id}
              className={`overflow-hidden rounded-[1.5rem] border transition-colors duration-300 ${
                isPicked
                  ? "border-brand-yellow/60 bg-brand-yellow/[0.08]"
                  : "border-white/12 bg-white/[0.05]"
              }`}
            >
              <label className="flex cursor-pointer items-start gap-4 p-5 md:p-6">
                <input
                  type="checkbox"
                  checked={isPicked}
                  onChange={() => toggle(item.id)}
                  className="peer sr-only"
                />
                <span
                  aria-hidden="true"
                  className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border-2 transition-colors peer-focus-visible:ring-2 peer-focus-visible:ring-brand-yellow peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-brand-navy ${
                    isPicked
                      ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                      : "border-white/40 text-transparent"
                  }`}
                >
                  <Check className="h-4 w-4" strokeWidth={3} />
                </span>
                <span className="flex-1">
                  <span
                    className="mr-3 font-mono text-sm font-bold text-brand-yellow"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[clamp(1.05rem,0.95rem+0.35vw,1.3rem)] font-bold text-brand-beige">
                    {item.question}
                  </span>
                </span>
              </label>

              <div className="grid gap-px border-t border-white/10 bg-white/10 md:grid-cols-2">
                <div className="bg-brand-navy/80 p-5 md:p-6">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                    <TriangleAlert className="h-4 w-4" aria-hidden="true" />
                    What usually happens
                  </h4>
                  <p className="mt-3 text-sm leading-7" style={MUTED}>
                    {item.risk}
                  </p>
                </div>

                <div className="bg-brand-navy/80 p-5 md:p-6">
                  <h4 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
                    <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                    How KIDUART answers it
                  </h4>
                  <p className="mt-3 text-sm leading-7" style={MUTED}>
                    {item.answer}
                  </p>
                  <Link
                    href={item.verify.href}
                    className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-beige underline underline-offset-4 transition-colors hover:text-brand-yellow"
                  >
                    {item.verify.label}
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </Stagger>

      <div className="mt-8 flex flex-col items-center gap-4 rounded-[1.5rem] border border-white/12 bg-white/[0.05] px-6 py-7 text-center md:flex-row md:justify-between md:text-left">
        <div>
          <p className="text-lg font-bold text-brand-beige" aria-live="polite">
            {picked.length === 0
              ? "Tick the questions that matter to your school"
              : `${picked.length} of ${VENDOR_QUESTIONS.length} questions picked`}
          </p>
          <p className="mt-1 text-sm leading-6" style={MUTED}>
            Ask them to us on the call and ask the same list to every other
            vendor you shortlist.
          </p>
        </div>
        <Link
          href="/demo"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-brand-yellow px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:bg-brand-beige"
        >
          Put us through it{" "}
          <ArrowRight className="h-5 w-5" aria-hidden="true" />
        </Link>
      </div>
    </div>
  );
}

export function VendorChecklistTeaser() {
  const sample = VENDOR_QUESTIONS.slice(0, 3);
  const [activeId, setActiveId] = useState(sample[0]?.id ?? "");
  const active = sample.find((item) => item.id === activeId) ?? sample[0];

  return (
    <div className="console-panel overflow-hidden rounded-[2rem] border border-white/12 bg-white/[0.05]">
      <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
        <div className="border-b border-white/10 p-5 sm:p-6 lg:border-b-0 lg:border-r">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
            Try three questions here
          </p>
          <div
            className="mt-4 space-y-2"
            role="tablist"
            aria-label="ERP vendor questions"
          >
            {sample.map((item, index) => {
              const isActive = item.id === active?.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`vendor-teaser-panel-${item.id}`}
                  onClick={() => setActiveId(item.id)}
                  className={`flex w-full items-start gap-3 rounded-2xl border px-4 py-3 text-left transition-colors ${
                    isActive
                      ? "border-brand-yellow/55 bg-brand-yellow/[0.1]"
                      : "border-white/12 bg-white/[0.04] hover:border-white/30"
                  }`}
                >
                  <span
                    className="font-mono text-xs font-bold text-brand-yellow"
                    aria-hidden="true"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-brand-beige">
                    {item.question}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {active ? (
          <div
            key={active.id}
            id={`vendor-teaser-panel-${active.id}`}
            role="tabpanel"
            className="console-panel p-5 sm:p-6"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-orange">
                  <TriangleAlert className="h-4 w-4" aria-hidden="true" />
                  The risk
                </h3>
                <p className="mt-3 text-sm leading-7" style={MUTED}>
                  {active.risk}
                </p>
              </div>
              <div>
                <h3 className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
                  <ShieldCheck className="h-4 w-4" aria-hidden="true" />
                  What a verifiable answer sounds like
                </h3>
                <p className="mt-3 text-sm leading-7" style={MUTED}>
                  {active.answer}
                </p>
              </div>
            </div>
            <Link
              href="/vendor-checklist"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand-yellow px-6 py-3 text-sm font-bold text-brand-navy transition-colors hover:bg-brand-beige"
            >
              Open all {VENDOR_QUESTIONS.length} questions
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        ) : null}
      </div>
    </div>
  );
}
