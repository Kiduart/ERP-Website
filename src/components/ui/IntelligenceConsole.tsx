import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import {
  Activity,
  BellRing,
  Bus,
  FileSpreadsheet,
  Library,
  LineChart,
  MessagesSquare,
  PenLine,
  Radar,
  ShieldAlert,
  TrendingDown,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import {
  INTELLIGENCE_WORKFLOWS,
  SIGNAL_STREAMS,
  type IntelligenceWorkflow,
} from "@/data/intelligenceWorkflows";

const ICONS: Record<string, LucideIcon> = {
  Activity,
  BellRing,
  Bus,
  FileSpreadsheet,
  Library,
  LineChart,
  MessagesSquare,
  PenLine,
  Radar,
  ShieldAlert,
  TrendingDown,
  Wallet,
};

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.78)" };
const AUTO_ADVANCE_MS = 7000;

function StatusBadge({ status }: { status: IntelligenceWorkflow["status"] }) {
  const isLive = status === "live";
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] ${
        isLive
          ? "border-brand-yellow/40 bg-brand-yellow/[0.14] text-brand-yellow"
          : "border-white/25 bg-white/[0.06] text-brand-beige"
      }`}
    >
      <span
        aria-hidden="true"
        className={`h-1.5 w-1.5 rounded-full ${
          isLive ? "console-live-dot bg-brand-yellow" : "bg-brand-beige/70"
        }`}
      />
      {isLive ? "Live in the product" : "In development"}
    </span>
  );
}

export function IntelligenceConsole() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [inView, setInView] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const liveCount = INTELLIGENCE_WORKFLOWS.filter(
    (item) => item.status === "live",
  ).length;
  const buildingCount = INTELLIGENCE_WORKFLOWS.length - liveCount;

  useEffect(() => {
    const node = containerRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.25 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (locked || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () =>
        setActiveIndex((index) => (index + 1) % INTELLIGENCE_WORKFLOWS.length),
      AUTO_ADVANCE_MS,
    );
    return () => window.clearInterval(timer);
  }, [locked, inView]);

  // On narrow screens the selector scrolls sideways, so keep the active chip in view
  useEffect(() => {
    const list = tabListRef.current;
    const tab = tabRefs.current[activeIndex];
    if (!list || !tab || list.scrollWidth <= list.clientWidth + 4) return;
    const target = tab.offsetLeft - (list.clientWidth - tab.offsetWidth) / 2;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    list.scrollTo({
      left: Math.max(0, target),
      behavior: reduced ? "auto" : "smooth",
    });
  }, [activeIndex]);

  const select = useCallback((index: number) => {
    setLocked(true);
    setActiveIndex(index);
  }, []);

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = INTELLIGENCE_WORKFLOWS.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown")
      next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp")
      next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div ref={containerRef} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <aside className="lg:col-span-4">
        <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6">
          <h3 className="text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">
            Signals it already has
          </h3>
          <p className="mt-3 text-sm leading-6" style={MUTED}>
            Nothing extra to install or log. These streams are produced by the
            daily work your staff is already doing inside KIDUART.
          </p>
          <ul className="mt-5 space-y-3.5">
            {SIGNAL_STREAMS.map((stream, index) => (
              <li key={stream.label} className="flex gap-3">
                <span
                  aria-hidden="true"
                  style={{ animationDelay: `${index * 320}ms` }}
                  className="console-live-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow"
                />
                <span>
                  <span className="block text-sm font-bold text-brand-beige">
                    {stream.label}
                  </span>
                  <span className="block text-xs leading-5" style={MUTED}>
                    {stream.detail}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p
          className="mt-5 rounded-2xl border border-white/12 bg-white/[0.04] p-5 text-sm leading-6"
          style={MUTED}
        >
          Live models run inside your own instance on your own records no
          student data is sent to an outside AI service. Anything marked{" "}
          <span className="font-bold text-brand-beige">in development</span> is
          not switched on and is not billed.
        </p>
      </aside>

      <div className="min-w-0 lg:col-span-8">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="rounded-full border border-brand-yellow/40 bg-brand-yellow/[0.14] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-yellow">
            {liveCount} live
          </span>
          <span className="rounded-full border border-white/25 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-beige">
            {buildingCount} in development
          </span>
        </div>

        <div
          ref={tabListRef}
          role="tablist"
          aria-label="Intelligence workflows"
          className="mt-4 flex snap-x gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible md:pb-0"
        >
          {INTELLIGENCE_WORKFLOWS.map((workflow, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={workflow.id}
                type="button"
                role="tab"
                id={`console-tab-${workflow.id}`}
                aria-selected={isActive}
                aria-controls={`console-panel-${workflow.id}`}
                tabIndex={isActive ? 0 : -1}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                onClick={() => select(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`inline-flex shrink-0 snap-start items-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                    : "border-white/20 bg-white/[0.05] text-brand-beige hover:border-brand-yellow/60"
                }`}
              >
                <span
                  aria-hidden="true"
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive
                      ? "bg-brand-navy"
                      : workflow.status === "live"
                        ? "bg-brand-yellow"
                        : "bg-brand-beige/60"
                  }`}
                />
                {workflow.title}
              </button>
            );
          })}
        </div>

        {INTELLIGENCE_WORKFLOWS.map((workflow, index) => {
          const Icon = ICONS[workflow.icon] ?? Activity;
          const isActive = index === activeIndex;
          const lanes = [
            { label: "Signal in", text: workflow.signal },
            { label: "What runs", text: workflow.model },
            { label: "What your team sees", text: workflow.action },
          ];

          return (
            <section
              key={workflow.id}
              id={`console-panel-${workflow.id}`}
              role="tabpanel"
              aria-labelledby={`console-tab-${workflow.id}`}
              hidden={!isActive}
              className={`console-panel mt-6 rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 md:p-8 ${
                isActive ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow/[0.16] text-brand-yellow">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="text-[clamp(1.15rem,1rem+0.5vw,1.5rem)] font-bold text-brand-beige">
                      {workflow.title}
                    </h3>
                    <p className="mt-1 text-sm font-semibold text-brand-yellow">
                      {workflow.outcome}
                    </p>
                  </div>
                </div>
                <StatusBadge status={workflow.status} />
              </div>

              <p
                className="console-trace mt-6 overflow-x-auto rounded-xl border border-white/12 bg-brand-navy/60 px-4 py-3 font-mono text-xs leading-6 md:text-sm"
                style={MUTED}
              >
                <span className="text-brand-yellow" aria-hidden="true">
                  ▸{" "}
                </span>
                {workflow.trace}
              </p>

              <div className="relative mt-7">
                <span
                  aria-hidden="true"
                  className="console-rail pointer-events-none absolute left-4 right-4 top-3 hidden md:block"
                />
                <ol className="relative grid gap-6 md:grid-cols-3 md:gap-5">
                  {lanes.map((lane, laneIndex) => (
                    <li key={lane.label}>
                      <span
                        aria-hidden="true"
                        className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-yellow/50 bg-brand-navy text-[0.7rem] font-bold text-brand-yellow"
                      >
                        {laneIndex + 1}
                      </span>
                      <span className="mt-3 block text-xs font-bold uppercase tracking-[0.16em] text-brand-yellow">
                        {lane.label}
                      </span>
                      <p className="mt-2 text-sm leading-7" style={MUTED}>
                        {lane.text}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="mt-7 flex flex-wrap items-center gap-2.5 border-t border-white/10 pt-5">
                <span
                  className="text-xs font-bold uppercase tracking-[0.16em]"
                  style={MUTED}
                >
                  Runs inside
                </span>
                {workflow.modules.map((module) => (
                  <Link
                    key={module.href + module.label}
                    href={module.href}
                    className="rounded-full border border-white/20 px-3 py-1.5 text-sm font-semibold text-brand-beige transition-colors hover:border-brand-yellow hover:text-brand-yellow"
                  >
                    {module.label}
                  </Link>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
