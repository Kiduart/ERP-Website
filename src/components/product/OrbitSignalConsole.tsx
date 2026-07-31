import { useCallback, useEffect, useRef, useState } from "react";
import {
  AlertTriangle,
  Bell,
  Brain,
  FileText,
  Lightbulb,
  MessageSquare,
  TrendingUp,
  UserRoundCheck,
  type LucideIcon,
} from "lucide-react";

type OrbitWorkflow = {
  id: string;
  title: string;
  status: "building" | "roadmap";
  outcome: string;
  icon: LucideIcon;
  trace: string;
  signal: string;
  model: string;
  action: string;
};

const WORKFLOWS: OrbitWorkflow[] = [
  {
    id: "review-lists",
    title: "Student review lists",
    status: "building",
    outcome: "Who needs a look this week",
    icon: UserRoundCheck,
    trace: "attendance ∩ marks.trend → ranked review queue → counsellor desk",
    signal:
      "Attendance drift and academic movement already sitting in your tenant.",
    model:
      "Pattern rules and models you configure  no public ranking, no auto labels.",
    action:
      "Authorised staff open a short queue with context, then decide follow-up.",
  },
  {
    id: "fee-flags",
    title: "Fee account flags",
    status: "building",
    outcome: "Chase the right accounts first",
    icon: AlertTriangle,
    trace: "fee.ledger → dues pattern score → finance outreach queue",
    signal:
      "Instalments, partial payments, escalating balances before critical dates.",
    model:
      "Flags for finance or leadership review  conversation first, never auto-penalty.",
    action:
      "A prioritised outreach list instead of a flat alphabetical defaulter dump.",
  },
  {
    id: "leadership",
    title: "Leadership digests",
    status: "building",
    outcome: "Last week in one screen",
    icon: TrendingUp,
    trace: "panels.shared_db → weekly digest → director view",
    signal:
      "Collections, absenteeism spikes, flagged counts by campus in group setups.",
    model: "Summaries atop the same database role panels already use.",
    action: "Fewer spreadsheet merges before a board or principal meeting.",
  },
  {
    id: "routed-alerts",
    title: "Role-routed alerts",
    status: "building",
    outcome: "Right person, not every group",
    icon: Bell,
    trace: "flag → RBAC route → assigned role inbox",
    signal:
      "Permissioned roles only  counsellor, coordinator, finance, leadership.",
    model: "Routing rules tied to panels, not broadcast WhatsApp lists.",
    action:
      "Critical signals stay visible without alert fatigue across the whole staff.",
  },
  {
    id: "nl-query",
    title: "Natural language queries",
    status: "roadmap",
    outcome: "Ask the ledger in plain English",
    icon: MessageSquare,
    trace: "query.text → permissioned SQL/view → answer + chart",
    signal: "Structured school data your role is allowed to see.",
    model: "Answers grounded in live records  not brochure PDFs.",
    action: "Coordinators skip export-pivot for common operational questions.",
  },
  {
    id: "narrative",
    title: "Narrative report drafts",
    status: "roadmap",
    outcome: "Drafts humans still approve",
    icon: FileText,
    trace: "multi-module export → draft shell → named approver",
    signal: "Attendance, fees, marks already in the ERP.",
    model: "Narrative shells only  every outbound message keeps a human owner.",
    action: "Less blank-page time before circulars and leadership summaries.",
  },
  {
    id: "adaptive",
    title: "Adaptive learning cues",
    status: "roadmap",
    outcome: "Suggest, never stamp a label",
    icon: Lightbulb,
    trace: "subject.trends → intervention suggestions → teacher refine",
    signal: "Subject-level movement when history exists.",
    model: "Recommendations teachers edit  not destiny scores for children.",
    action: "Remedial planning while there is still term left to act.",
  },
];

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.78)" };
const AUTO_MS = 6500;

/**
 * KIDUORBIT-specific signal console  same dialect as homepage IntelligenceConsole,
 * scoped to next-phase workflows (building + roadmap).
 */
export function OrbitSignalConsole() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [locked, setLocked] = useState(false);
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (locked || !inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setActiveIndex((i) => (i + 1) % WORKFLOWS.length),
      AUTO_MS,
    );
    return () => window.clearInterval(timer);
  }, [locked, inView]);

  const select = useCallback((index: number) => {
    setLocked(true);
    setActiveIndex(index);
  }, []);

  const active = WORKFLOWS[activeIndex]!;
  const building = WORKFLOWS.filter((w) => w.status === "building").length;
  const roadmap = WORKFLOWS.length - building;
  const Icon = active.icon;

  return (
    <div ref={ref} className="grid gap-8 lg:grid-cols-12 lg:gap-10">
      <aside className="lg:col-span-4">
        <div className="rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6">
          <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow">
            <Brain className="h-4 w-4" /> Orbit status
          </h3>
          <p className="mt-3 text-sm leading-6" style={MUTED}>
            KIDUORBIT is the next phase inside KIDUART not a chatbot bolt-on,
            not launched in production yet. Click a lane to lock the console.
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="rounded-full border border-brand-yellow/40 bg-brand-yellow/[0.14] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-yellow">
              {building} building
            </span>
            <span className="rounded-full border border-white/25 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] text-brand-beige">
              {roadmap} roadmap
            </span>
          </div>
          <ul className="mt-6 space-y-3">
            {[
              "Runs on your tenant data only",
              "Staff review  not surveillance boards",
              "Pilot vs GA labelled when we ship",
            ].map((line, index) => (
              <li key={line} className="flex gap-3 text-sm text-brand-beige">
                <span
                  className="console-live-dot mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-yellow"
                  style={{ animationDelay: `${index * 280}ms` }}
                />
                {line}
              </li>
            ))}
          </ul>
        </div>
      </aside>

      <div className="min-w-0 lg:col-span-8">
        <div
          role="tablist"
          aria-label="KIDUORBIT workflows"
          className="flex snap-x gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible"
        >
          {WORKFLOWS.map((workflow, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={workflow.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => select(index)}
                className={`inline-flex shrink-0 snap-start items-center gap-2 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm font-semibold transition-colors ${
                  isActive
                    ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                    : "border-white/20 bg-white/[0.05] text-brand-beige hover:border-brand-yellow/60"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    isActive
                      ? "bg-brand-navy"
                      : workflow.status === "building"
                        ? "bg-brand-yellow"
                        : "bg-brand-beige/55"
                  }`}
                />
                {workflow.title}
              </button>
            );
          })}
        </div>

        <section className="console-panel mt-6 rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-yellow/[0.16] text-brand-yellow">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-[clamp(1.15rem,1rem+0.5vw,1.5rem)] font-bold text-brand-beige">
                  {active.title}
                </h3>
                <p className="mt-1 text-sm font-semibold text-brand-yellow">
                  {active.outcome}
                </p>
              </div>
            </div>
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.16em] ${
                active.status === "building"
                  ? "border-brand-yellow/40 bg-brand-yellow/[0.14] text-brand-yellow"
                  : "border-white/25 bg-white/[0.06] text-brand-beige"
              }`}
            >
              <span
                className={`h-1.5 w-1.5 rounded-full ${
                  active.status === "building"
                    ? "console-live-dot bg-brand-yellow"
                    : "bg-brand-beige/70"
                }`}
              />
              {active.status === "building"
                ? "Actively building"
                : "Roadmap · TBD"}
            </span>
          </div>

          <p
            className="console-trace mt-6 overflow-x-auto rounded-xl border border-white/12 bg-brand-navy/60 px-4 py-3 font-mono text-xs leading-6 md:text-sm"
            style={MUTED}
          >
            <span className="text-brand-yellow">▸ </span>
            {active.trace}
          </p>

          <div className="relative mt-7">
            <span className="console-rail pointer-events-none absolute left-4 right-4 top-3 hidden md:block" />
            <ol className="relative grid gap-6 md:grid-cols-3 md:gap-5">
              {[
                { label: "Signal in", text: active.signal },
                { label: "What runs", text: active.model },
                { label: "What staff sees", text: active.action },
              ].map((lane, i) => (
                <li key={lane.label}>
                  <span className="flex h-6 w-6 items-center justify-center rounded-full border border-brand-yellow/50 bg-brand-navy text-[0.7rem] font-bold text-brand-yellow">
                    {i + 1}
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
        </section>
      </div>
    </div>
  );
}
