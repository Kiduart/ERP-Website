import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight,
  Check,
  KeyRound,
  LayoutGrid,
  Receipt,
  Rocket,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { ROLLOUT_STAGES } from "@/data/rolloutPlan";

const ICONS: Record<string, LucideIcon> = {
  KeyRound,
  LayoutGrid,
  Receipt,
  Rocket,
  Users,
};

export function RolloutRunway() {
  const [reached, setReached] = useState(0);
  const [sectionInView, setSectionInView] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);
  const stageRefs = useRef<(HTMLLIElement | null)[]>([]);

  // Reset the spine when the whole runway leaves the screen, so re-scroll replays.
  useEffect(() => {
    const root = rootRef.current;
    if (!root || typeof IntersectionObserver === "undefined") return;

    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        const on = Boolean(entry?.isIntersecting);
        setSectionInView(on);
        if (!on) setReached(0);
      },
      { threshold: 0.05, rootMargin: "0px 0px -8% 0px" },
    );
    sectionObserver.observe(root);
    return () => sectionObserver.disconnect();
  }, []);

  // The spine fills as each stage scrolls into view  the plan "runs" while you read it
  useEffect(() => {
    if (!sectionInView || typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const index = Number(
            (entry.target as HTMLElement).dataset.index ?? 0,
          );
          setReached((current) => Math.max(current, index + 1));
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -12% 0px" },
    );
    stageRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, [sectionInView]);

  const progress = (reached / ROLLOUT_STAGES.length) * 100;

  return (
    <div
      ref={rootRef}
      className={`relative ${sectionInView ? "is-inview" : ""}`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-6 left-[19px] top-6 hidden w-px bg-brand-navy/10 md:block"
      >
        <span
          className="runway-spine absolute inset-x-0 top-0 block bg-gradient-to-b from-brand-teal to-brand-yellow"
          style={{ height: `${progress}%` }}
        />
      </div>

      <ol className="space-y-6">
        {ROLLOUT_STAGES.map((stage, index) => {
          const Icon = ICONS[stage.icon] ?? LayoutGrid;
          const isReached = index < reached;

          return (
            <li
              key={stage.id}
              data-index={index}
              ref={(node) => {
                stageRefs.current[index] = node;
              }}
              style={{ ["--stagger" as string]: index }}
              className="home-brick relative md:pl-16"
            >
              <span
                aria-hidden="true"
                className={`absolute left-0 top-7 hidden h-10 w-10 items-center justify-center rounded-full border-2 transition-colors duration-500 md:flex ${
                  isReached
                    ? "border-brand-teal bg-brand-teal text-white"
                    : "border-brand-navy/15 bg-white text-brand-navy/40"
                }`}
              >
                <Icon className="h-5 w-5" />
              </span>

              <article
                className={`rounded-[1.75rem] border bg-white p-6 transition-[border-color,box-shadow] duration-500 md:p-8 ${
                  isReached
                    ? "border-brand-teal/25 shadow-lg shadow-brand-navy/[0.06]"
                    : "border-brand-navy/10 shadow-sm"
                }`}
              >
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-2">
                  <span className="text-sm font-bold uppercase tracking-[0.25em] text-brand-teal">
                    Step {stage.step}
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/70">
                    {stage.goal}
                  </span>
                </div>
                <h3 className="mt-3 text-[clamp(1.25rem,1.05rem+0.6vw,1.7rem)] font-bold text-brand-navy">
                  {stage.title}
                </h3>

                <div className="mt-6 grid gap-4 md:grid-cols-2">
                  <div className="rounded-2xl border border-brand-navy/[0.08] bg-brand-beige/30 p-5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
                      Your side
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {stage.yours.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-6 text-brand-navy/80"
                        >
                          <ArrowRight
                            className="mt-1 h-4 w-4 shrink-0 text-brand-orange-ink"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="rounded-2xl border border-brand-teal/20 bg-brand-teal/[0.06] p-5">
                    <h4 className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy">
                      KIDUART's side
                    </h4>
                    <ul className="mt-3 space-y-2.5">
                      {stage.ours.map((item) => (
                        <li
                          key={item}
                          className="flex gap-2.5 text-sm leading-6 text-brand-navy/80"
                        >
                          <Check
                            className="mt-1 h-4 w-4 shrink-0 text-brand-teal"
                            aria-hidden="true"
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <p className="mt-5 flex gap-2.5 rounded-2xl border border-brand-navy/[0.08] bg-white px-4 py-3.5 text-sm leading-6 text-brand-navy/80">
                  <ShieldCheck
                    className="mt-0.5 h-4 w-4 shrink-0 text-brand-teal"
                    aria-hidden="true"
                  />
                  <span>
                    <span className="font-bold text-brand-navy">
                      Safety net:{" "}
                    </span>
                    {stage.guardrail}
                  </span>
                </p>

                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/70">
                    Screens used
                  </span>
                  {stage.modules.map((module) => (
                    <Link
                      key={module.href + module.label}
                      href={module.href}
                      className="rounded-full border border-brand-navy/12 bg-brand-beige/40 px-3 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                    >
                      {module.label}
                    </Link>
                  ))}
                </div>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
