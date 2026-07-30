import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { ACCENTS, type AccentName } from "@/components/product/ProductPrimitives";
import { ProductIcon } from "@/components/product/ProductIcon";

export type CapabilityArea = {
  slug: string;
  label: string;
  stage: string;
  headline: string;
  summary: string;
  featureCount: number;
  moduleCount: number;
  subModuleCount: number;
  icon: string;
  accent: AccentName;
  topModules: { name: string; slug: string; featureCount: number }[];
};

/**
 * Sticky index rail + full area write-ups. Every area's copy stays in the DOM
 * (good for crawlers); the rail simply tracks which one is on screen.
 */
export function CapabilityMap({ areas }: { areas: CapabilityArea[] }) {
  const [activeSlug, setActiveSlug] = useState(areas[0]?.slug ?? "");
  const sectionRefs = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target instanceof HTMLElement && visible.target.dataset.slug) {
          setActiveSlug(visible.target.dataset.slug);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5] },
    );

    sectionRefs.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [areas]);

  const registerSection = (slug: string) => (node: HTMLElement | null) => {
    if (node) {
      sectionRefs.current.set(slug, node);
    } else {
      sectionRefs.current.delete(slug);
    }
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,17rem)_minmax(0,1fr)] lg:gap-14">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-navy">
          16 module areas
        </p>
        <p className="mt-2 text-sm leading-6 text-brand-navy/[0.74]">
          Grouped the way schools divide work — office, academic, finance, campus and platform.
        </p>
        <nav aria-label="Module areas" className="mt-5">
          <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:overflow-visible lg:pb-0">
            {areas.map((area) => {
              const isActive = area.slug === activeSlug;
              return (
                <li key={area.slug} className="shrink-0 lg:shrink">
                  <a
                    href={`#area-${area.slug}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "flex items-center justify-between gap-3 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-colors",
                      isActive
                        ? "border-brand-navy/25 bg-brand-navy text-brand-beige"
                        : "border-brand-navy/[0.1] bg-white text-brand-navy hover:border-brand-teal/40 hover:text-brand-teal",
                    )}
                  >
                    <span className="whitespace-nowrap lg:whitespace-normal">{area.label}</span>
                    <span className={cn("text-xs font-bold", isActive ? "text-brand-yellow" : "text-brand-navy/[0.72]")}>
                      {area.featureCount}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      <div className="space-y-6">
        {areas.map((area) => {
          const tokens = ACCENTS[area.accent];
          return (
            <section
              key={area.slug}
              id={`area-${area.slug}`}
              data-slug={area.slug}
              ref={registerSection(area.slug)}
              className={cn(
                "scroll-mt-28 rounded-[2rem] border bg-white/95 p-6 shadow-sm md:p-8",
                tokens.border,
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className={cn("inline-flex h-12 w-12 items-center justify-center rounded-2xl", tokens.softBg)}
                  >
                    <ProductIcon name={area.icon} className={cn("h-6 w-6", tokens.text)} />
                  </span>
                  <div>
                    <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", tokens.text)}>
                      {area.stage}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-bold text-brand-navy">{area.label}</h3>
                  </div>
                </div>
                <dl className="flex gap-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/[0.7]">
                      Modules
                    </dt>
                    <dd className="text-xl font-extrabold text-brand-navy">{area.moduleCount}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/[0.7]">
                      Features
                    </dt>
                    <dd className="text-xl font-extrabold text-brand-navy">{area.featureCount}</dd>
                  </div>
                </dl>
              </div>

              <p className="mt-5 text-lg font-semibold leading-8 text-brand-navy">{area.headline}</p>
              <p className="mt-3 leading-7 text-brand-navy/[0.78]">{area.summary}</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {area.topModules.map((module) => (
                  <li key={module.slug}>
                    <Link
                      href={`/features/${area.slug}/${module.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.12] bg-brand-beige/25 px-3.5 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                    >
                      {module.name}
                      <span className="text-xs font-bold text-brand-navy/[0.75]">{module.featureCount}</span>
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={`/features/${area.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy underline-offset-4 transition-colors hover:text-brand-teal hover:underline"
              >
                Explore {area.label} — all {area.moduleCount} modules, {area.subModuleCount} sub-modules
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
}
