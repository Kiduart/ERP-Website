import { useCallback, useRef, useState } from "react";

export type ApiEndpoint = {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  path: string;
  purpose: string;
  scope: string;
};

export type ApiGroup = {
  id: string;
  label: string;
  blurb: string;
  endpoints: ApiEndpoint[];
};

const METHOD_STYLE: Record<ApiEndpoint["method"], string> = {
  GET: "border-sky-300/40 bg-sky-300/[0.12] text-sky-200",
  POST: "border-emerald-300/40 bg-emerald-300/[0.12] text-emerald-200",
  PUT: "border-amber-300/40 bg-amber-300/[0.12] text-amber-200",
  PATCH: "border-amber-300/40 bg-amber-300/[0.12] text-amber-200",
  DELETE: "border-rose-300/40 bg-rose-300/[0.12] text-rose-200",
};

const MUTED = { color: "rgb(var(--hero-muted-rgb) / 0.78)" };

export function ApiExplorer({ groups }: { groups: ApiGroup[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = useCallback((index: number) => setActiveIndex(index), []);

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = groups.length - 1;
    let next: number | null = null;
    if (event.key === "ArrowRight" || event.key === "ArrowDown") next = index === last ? 0 : index + 1;
    if (event.key === "ArrowLeft" || event.key === "ArrowUp") next = index === 0 ? last : index - 1;
    if (event.key === "Home") next = 0;
    if (event.key === "End") next = last;
    if (next === null) return;
    event.preventDefault();
    select(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="console-panel rounded-[1.75rem] border border-white/12 bg-white/[0.05] p-5 md:p-7">
      <div
        role="tablist"
        aria-label="API endpoint groups"
        className="flex snap-x gap-2 overflow-x-auto pb-2 md:flex-wrap md:overflow-visible md:pb-0"
      >
        {groups.map((group, index) => {
          const isActive = index === activeIndex;
          return (
            <button
              key={group.id}
              type="button"
              role="tab"
              id={`api-tab-${group.id}`}
              aria-selected={isActive}
              aria-controls={`api-panel-${group.id}`}
              tabIndex={isActive ? 0 : -1}
              ref={(node) => {
                tabRefs.current[index] = node;
              }}
              onClick={() => select(index)}
              onKeyDown={(event) => onTabKeyDown(event, index)}
              className={`shrink-0 snap-start whitespace-nowrap rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-brand-yellow bg-brand-yellow text-brand-navy"
                  : "border-white/20 bg-white/[0.05] text-brand-beige hover:border-brand-yellow/60"
              }`}
            >
              {group.label}
            </button>
          );
        })}
      </div>

      {groups.map((group, index) => (
        <section
          key={group.id}
          id={`api-panel-${group.id}`}
          role="tabpanel"
          aria-labelledby={`api-tab-${group.id}`}
          hidden={index !== activeIndex}
          className={index === activeIndex ? "console-panel mt-6 block" : "hidden"}
        >
          <p className="text-sm leading-7" style={MUTED}>
            {group.blurb}
          </p>

          <ul className="mt-5 space-y-3">
            {group.endpoints.map((endpoint) => (
              <li
                key={`${endpoint.method}-${endpoint.path}`}
                className="rounded-2xl border border-white/10 bg-brand-navy/50 p-4"
              >
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className={`rounded-md border px-2.5 py-1 font-mono text-[0.7rem] font-bold ${METHOD_STYLE[endpoint.method]}`}
                  >
                    {endpoint.method}
                  </span>
                  <code className="min-w-0 break-all font-mono text-sm text-brand-beige">{endpoint.path}</code>
                </div>
                <p className="mt-2.5 text-sm leading-6" style={MUTED}>
                  {endpoint.purpose}
                </p>
                <p className="mt-2 text-xs font-semibold uppercase tracking-[0.14em] text-brand-yellow">
                  Scope required: {endpoint.scope}
                </p>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  );
}
