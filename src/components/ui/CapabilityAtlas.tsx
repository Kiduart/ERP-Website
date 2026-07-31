import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import { ACCENTS, type AccentName } from "@/components/product/ProductPrimitives";

export type AtlasArea = {
  slug: string;
  label: string;
  stage: string;
  summary: string;
  icon: string;
  accent: AccentName;
  moduleCount: number;
  subModuleCount: number;
  featureCount: number;
  /** Deepest modules inside the area, shown as chips */
  topModules: string[];
};

/** Buyer-facing groupings — a principal picks a problem area, not a database table. */
export const ATLAS_GROUPS: { id: string; label: string; areas: string[] }[] = [
  {
    id: "families",
    label: "Students & families",
    areas: ["admission", "student-management", "parent-management", "communication"],
  },
  {
    id: "engine",
    label: "Classes, staff & fees",
    areas: ["academic", "hr-and-staff-management", "finance-and-fee-management"],
  },
  {
    id: "campus",
    label: "Campus operations",
    areas: [
      "library-management",
      "transport-management",
      "hostel-management",
      "facilities-and-inventory",
    ],
  },
  {
    id: "control",
    label: "Insight & control",
    areas: [
      "reports-and-analytics",
      "dashboard-and-insights",
      "security-and-authentication",
      "organization-management",
      "support",
    ],
  },
];

export function CapabilityAtlas({ areas }: { areas: AtlasArea[] }) {
  const [activeGroup, setActiveGroup] = useState("all");

  const deepest = useMemo(
    () => areas.reduce((max, area) => Math.max(max, area.featureCount), 1),
    [areas],
  );

  const groupSlugs = useMemo(() => {
    const map: Record<string, Set<string>> = {};
    ATLAS_GROUPS.forEach((group) => {
      map[group.id] = new Set(group.areas);
    });
    return map;
  }, []);

  const isVisible = (slug: string) =>
    activeGroup === "all" || groupSlugs[activeGroup]?.has(slug) === true;

  const visibleCount = areas.filter((area) => isVisible(area.slug)).length;

  const filters = [{ id: "all", label: "All areas" }, ...ATLAS_GROUPS];

  return (
    <div>
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {filters.map((filter) => {
          const isActive = filter.id === activeGroup;
          return (
            <button
              key={filter.id}
              type="button"
              aria-pressed={isActive}
              onClick={() => setActiveGroup(filter.id)}
              className={`rounded-full border px-4 py-2.5 text-sm font-bold transition-all duration-300 ${
                isActive
                  ? "border-brand-navy bg-brand-navy text-brand-beige shadow-md"
                  : "border-brand-navy/15 bg-white text-brand-navy/75 hover:border-brand-teal/50 hover:text-brand-navy"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <p className="mt-5 text-center text-sm font-medium text-brand-navy/70" aria-live="polite">
        {activeGroup === "all"
          ? "Every working area of the school"
          : `Showing ${visibleCount} area${visibleCount === 1 ? "" : "s"} in this group`}
      </p>

      <div key={activeGroup} className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {areas.map((area, index) => {
          const tokens = ACCENTS[area.accent];
          const depth = Math.max(6, Math.round((area.featureCount / deepest) * 100));
          const visible = isVisible(area.slug);
          const depthLabel =
            depth >= 70 ? "Deep coverage" : depth >= 40 ? "Solid coverage" : "Focused coverage";

          return (
            <article
              key={area.slug}
              hidden={!visible}
              style={{ animationDelay: `${Math.min(index, 8) * 45}ms` }}
              className={`atlas-card group relative ${
                visible ? "flex" : "hidden"
              } flex-col overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
            >
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute inset-x-0 top-0 h-1 ${tokens.bar}`}
              />

              <div className="flex items-start gap-4">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${tokens.softBg} ${tokens.text}`}
                >
                  <ProductIcon name={area.icon} className="h-6 w-6" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-lg font-bold leading-tight text-brand-navy">{area.label}</h3>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/70">
                    {area.stage}
                  </p>
                </div>
              </div>

              <p className="mt-4 flex-1 text-sm leading-7 text-brand-navy/75">{area.summary}</p>

              <div className="mt-5">
                <div className="flex items-baseline justify-between gap-3">
                  <span className="text-xs font-bold uppercase tracking-[0.14em] text-brand-navy/70">
                    Depth
                  </span>
                  <span className="text-sm font-bold text-brand-navy">{depthLabel}</span>
                </div>
                <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-brand-navy/[0.08]">
                  <span
                    className={`block h-full rounded-full ${tokens.bar}`}
                    style={{ width: `${depth}%` }}
                    aria-hidden="true"
                  />
                </div>
              </div>

              <ul className="mt-4 flex flex-wrap gap-1.5">
                {area.topModules.map((module) => (
                  <li
                    key={module}
                    className="rounded-full border border-brand-navy/10 bg-brand-beige/40 px-2.5 py-1 text-[0.7rem] font-semibold text-brand-navy/80"
                  >
                    {module}
                  </li>
                ))}
              </ul>

              <Link
                href={`/features/${area.slug}`}
                className="mt-5 inline-flex items-center gap-1.5 border-t border-brand-navy/[0.08] pt-4 text-sm font-bold text-brand-teal transition-colors hover:text-brand-navy"
              >
                Explore {area.label}
                <ArrowRight
                  className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
