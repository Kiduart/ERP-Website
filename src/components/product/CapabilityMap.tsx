import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ACCENTS,
  type AccentName,
} from "@/components/product/ProductPrimitives";
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
 * Index rail + area write-ups. On desktop the write-ups scroll inside their own
 * pane so the rail stays put and keeps tracking position; on narrow screens the
 * pane falls back to normal page flow. Every area's copy stays in the DOM.
 */
export function CapabilityMap({ areas }: { areas: CapabilityArea[] }) {
  const [activeSlug, setActiveSlug] = useState(areas[0]?.slug ?? "");
  const [panelScroll, setPanelScroll] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef(new Map<string, HTMLElement>());
  const railRefs = useRef(new Map<string, HTMLAnchorElement>());
  const paneRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = Math.max(
    0,
    areas.findIndex((area) => area.slug === activeSlug),
  );

  useEffect(() => {
    const query = window.matchMedia("(min-width: 1024px)");
    const update = () => setPanelScroll(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const root = panelScroll ? paneRef.current : null;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];
        if (
          visible?.target instanceof HTMLElement &&
          visible.target.dataset.slug
        ) {
          setActiveSlug(visible.target.dataset.slug);
        }
      },
      {
        root,
        rootMargin: panelScroll ? "0px 0px -68% 0px" : "-30% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      },
    );

    sectionRefs.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [areas, panelScroll]);

  useEffect(() => {
    const pane = paneRef.current;
    if (!pane || !panelScroll) return;

    const onScroll = () => {
      const scrollable = pane.scrollHeight - pane.clientHeight;
      setProgress(
        scrollable > 0 ? Math.min(1, pane.scrollTop / scrollable) : 0,
      );
    };

    onScroll();
    pane.addEventListener("scroll", onScroll, { passive: true });
    return () => pane.removeEventListener("scroll", onScroll);
  }, [panelScroll, areas]);

  useEffect(() => {
    if (!panelScroll) return;
    const node = railRefs.current.get(activeSlug);
    if (!node) return;
    // Keep the active rail item visible inside the list only  never scroll the page.
    const list = node.closest("ul");
    if (!list || list.scrollHeight <= list.clientHeight) return;
    const listRect = list.getBoundingClientRect();
    const nodeRect = node.getBoundingClientRect();
    if (nodeRect.top >= listRect.top && nodeRect.bottom <= listRect.bottom)
      return;
    list.scrollTop +=
      nodeRect.top - listRect.top - (listRect.height - nodeRect.height) / 2;
  }, [activeSlug, panelScroll]);

  const registerSection = (slug: string) => (node: HTMLElement | null) => {
    if (node) sectionRefs.current.set(slug, node);
    else sectionRefs.current.delete(slug);
  };

  const jumpTo = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, slug: string) => {
      const node = sectionRefs.current.get(slug);
      const pane = paneRef.current;
      if (!node) return;

      event.preventDefault();
      setActiveSlug(slug);

      const reduce = window.matchMedia?.(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      const behavior: ScrollBehavior = reduce ? "auto" : "smooth";

      if (panelScroll && pane) {
        pane.scrollTo({ top: Math.max(0, node.offsetTop - 8), behavior });
      } else {
        node.scrollIntoView({ behavior, block: "start" });
      }
    },
    [panelScroll],
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-10">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-navy">
          Module areas
        </p>
        <p className="mt-2 text-sm leading-6 text-brand-navy/[0.74]">
          Grouped the way schools divide work office, academic, finance, campus
          and platform.
        </p>

        <div className="mt-4 hidden items-center gap-3 lg:flex">
          <span className="h-1.5 flex-1 overflow-hidden rounded-full bg-brand-navy/[0.1]">
            <span
              className="block h-full rounded-full bg-brand-teal transition-[width] duration-200"
              style={{ width: `${Math.round(progress * 100)}%` }}
            />
          </span>
          <span
            className="text-xs font-bold tabular-nums text-brand-navy/[0.72]"
            aria-live="polite"
          >
            {activeIndex + 1}/{areas.length}
          </span>
        </div>

        <nav aria-label="Module areas" className="mt-5">
          <ul className="capability-scroll flex gap-2 overflow-x-auto pb-2 lg:max-h-[58vh] lg:flex-col lg:overflow-x-visible lg:overflow-y-auto lg:pb-0 lg:pr-1.5">
            {areas.map((area) => {
              const isActive = area.slug === activeSlug;
              return (
                <li key={area.slug} className="shrink-0 lg:shrink">
                  <a
                    href={`#area-${area.slug}`}
                    onClick={(event) => jumpTo(event, area.slug)}
                    aria-current={isActive ? "true" : undefined}
                    ref={(node) => {
                      if (node) railRefs.current.set(area.slug, node);
                      else railRefs.current.delete(area.slug);
                    }}
                    className={cn(
                      "flex items-center justify-between gap-3 rounded-2xl border px-4 py-2.5 text-sm font-semibold transition-colors",
                      isActive
                        ? "border-brand-navy/25 bg-brand-navy text-brand-beige"
                        : "border-brand-navy/[0.1] bg-white text-brand-navy hover:border-brand-teal/40 hover:text-brand-teal",
                    )}
                  >
                    <span className="whitespace-nowrap lg:whitespace-normal">
                      {area.label}
                    </span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <p className="mt-4 hidden items-center gap-2 text-xs font-semibold text-brand-navy/[0.7] lg:flex">
          <MousePointerClick
            className="h-3.5 w-3.5 text-brand-teal"
            aria-hidden="true"
          />
          Scroll inside the panel or pick an area
        </p>
      </div>

      <div
        ref={paneRef}
        tabIndex={0}
        role="region"
        aria-label="Module area details"
        className="capability-scroll relative space-y-6 lg:max-h-[76vh] lg:overflow-y-auto lg:pr-3"
      >
        {areas.map((area) => {
          const tokens = ACCENTS[area.accent];
          const isActive = area.slug === activeSlug;
          return (
            <section
              key={area.slug}
              id={`area-${area.slug}`}
              data-slug={area.slug}
              ref={registerSection(area.slug)}
              style={
                isActive
                  ? undefined
                  : {
                      contentVisibility: "auto",
                      containIntrinsicSize: "auto 280px",
                    }
              }
              className={cn(
                "scroll-mt-28 rounded-[2rem] border bg-white/95 p-6 shadow-sm transition-shadow duration-300 md:p-8 lg:scroll-mt-4",
                tokens.border,
                isActive ? "shadow-xl shadow-brand-navy/[0.08]" : "shadow-sm",
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-start gap-4">
                  <span
                    className={cn(
                      "inline-flex h-12 w-12 items-center justify-center rounded-2xl",
                      tokens.softBg,
                    )}
                  >
                    <ProductIcon
                      name={area.icon}
                      className={cn("h-6 w-6", tokens.text)}
                    />
                  </span>
                  <div>
                    <p
                      className={cn(
                        "text-xs font-bold uppercase tracking-[0.18em]",
                        tokens.text,
                      )}
                    >
                      {area.stage}
                    </p>
                    <h3 className="mt-1.5 text-2xl font-bold text-brand-navy">
                      {area.label}
                    </h3>
                  </div>
                </div>
                <dl className="flex gap-4 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy/[0.7]">
                      Coverage
                    </dt>
                    <dd className="text-sm font-bold text-brand-navy">
                      Modules + workflows
                    </dd>
                  </div>
                </dl>
              </div>

              <p className="mt-5 text-lg font-semibold leading-8 text-brand-navy">
                {area.headline}
              </p>
              <p className="mt-3 leading-7 text-brand-navy/[0.78]">
                {area.summary}
              </p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {area.topModules.map((module) => (
                  <li key={module.slug}>
                    <Link
                      href={`/features/${area.slug}/${module.slug}`}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.12] bg-brand-beige/25 px-3.5 py-1.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                    >
                      {module.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link
                href={`/features/${area.slug}`}
                className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-brand-navy underline-offset-4 transition-colors hover:text-brand-teal hover:underline"
              >
                Explore {area.label}
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </section>
          );
        })}
      </div>
    </div>
  );
}
