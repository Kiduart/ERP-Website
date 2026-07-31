import { useCallback, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, Plug } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import {
  IntegrationStatusPill,
  type IntegrationStatusValue,
} from "@/components/product/IntegrationStatusPill";

export type FabricStatus = IntegrationStatusValue;

export type FabricConnector = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: FabricStatus;
  providers: string[];
};

export type FabricCategory = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  connectors: FabricConnector[];
};

export function IntegrationFabric({
  categories,
  counts,
}: {
  categories: FabricCategory[];
  counts: { live: number; guided: number; planned: number; total: number };
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const select = useCallback((index: number) => setActiveIndex(index), []);

  const onTabKeyDown = (event: React.KeyboardEvent, index: number) => {
    const last = categories.length - 1;
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
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-navy/[0.08] pb-5">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-teal/35 bg-brand-teal/[0.08] px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-teal">
            <span aria-hidden="true" className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-teal" />
            {counts.live} live
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-orange/40 bg-white px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-orange-ink">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-orange" />
            {counts.guided} guided setup
          </span>
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-navy/20 bg-white px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-navy/[0.78]">
            <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand-navy/45" />
            {counts.planned} on the roadmap
          </span>
        </div>
        <p className="text-sm font-semibold text-brand-navy/[0.74]">
          Nothing here is a logo we hope to support later.
        </p>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12 lg:gap-8">
        <div
          role="tablist"
          aria-label="Integration categories"
          aria-orientation="vertical"
          className="flex snap-x gap-2 overflow-x-auto pb-2 lg:col-span-4 lg:flex-col lg:overflow-visible lg:pb-0"
        >
          {categories.map((category, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={category.slug}
                type="button"
                role="tab"
                id={`fabric-tab-${category.slug}`}
                aria-selected={isActive}
                aria-controls={`fabric-panel-${category.slug}`}
                tabIndex={isActive ? 0 : -1}
                ref={(node) => {
                  tabRefs.current[index] = node;
                }}
                onClick={() => select(index)}
                onKeyDown={(event) => onTabKeyDown(event, index)}
                className={`group flex shrink-0 snap-start items-center gap-3 rounded-2xl border px-4 py-3 text-left transition-colors lg:w-full ${
                  isActive
                    ? "border-brand-teal bg-brand-teal/[0.07]"
                    : "border-brand-navy/[0.1] bg-white hover:border-brand-teal/45"
                }`}
              >
                <span
                  className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                    isActive ? "bg-brand-teal text-white" : "bg-brand-navy/[0.06] text-brand-navy"
                  }`}
                >
                  <ProductIcon name={category.icon} className="h-4 w-4" />
                </span>
                <span className="min-w-0">
                  <span className="block whitespace-nowrap text-sm font-bold text-brand-navy lg:whitespace-normal">
                    {category.title}
                  </span>
                  <span className="block text-xs font-semibold text-brand-navy/[0.7]">
                    {category.connectors.length} connectors
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        <div className="min-w-0 lg:col-span-8">
          {categories.map((category, index) => (
            <section
              key={category.slug}
              id={`fabric-panel-${category.slug}`}
              role="tabpanel"
              aria-labelledby={`fabric-tab-${category.slug}`}
              hidden={index !== activeIndex}
              className={index === activeIndex ? "journey-panel-enter block" : "hidden"}
            >
              <div className="fabric-core flex items-start gap-3 rounded-2xl border border-brand-navy/[0.12] bg-brand-navy px-5 py-4 text-brand-beige">
                <Plug className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" aria-hidden="true" />
                <p className="text-sm leading-6" style={{ color: "rgb(var(--hero-muted-rgb) / 0.86)" }}>
                  <span className="font-bold text-brand-beige">{category.title}.</span> {category.blurb}
                </p>
              </div>

              <ul className="mt-1">
                {category.connectors.map((connector) => (
                  <li key={connector.slug} className="fabric-lane">
                    <span className="fabric-trace" aria-hidden="true" />
                    <Link
                      href={`/integrations/${connector.slug}`}
                      className="fabric-card group flex items-start gap-4 rounded-2xl border border-brand-navy/[0.1] bg-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-teal/45 hover:shadow-lg hover:shadow-brand-navy/[0.06] sm:p-5"
                    >
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-brand-beige/60 text-brand-navy transition-colors group-hover:bg-brand-teal/[0.12] group-hover:text-brand-teal">
                        <ProductIcon name={connector.icon} className="h-5 w-5" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex flex-wrap items-center gap-x-3 gap-y-2">
                          <span className="text-base font-bold text-brand-navy group-hover:text-brand-teal">
                            {connector.name}
                          </span>
                          <IntegrationStatusPill status={connector.status} />
                        </span>
                        <span className="mt-1.5 block text-sm leading-6 text-brand-navy/[0.76]">
                          {connector.description}
                        </span>
                        <span className="mt-2.5 flex flex-wrap gap-1.5">
                          {connector.providers.map((provider) => (
                            <span
                              key={provider}
                              className="rounded-md bg-brand-navy/[0.05] px-2 py-0.5 text-[0.7rem] font-semibold text-brand-navy/[0.76]"
                            >
                              {provider}
                            </span>
                          ))}
                        </span>
                      </span>
                      <ArrowUpRight
                        className="mt-1 h-4 w-4 shrink-0 text-brand-navy/40 transition-colors group-hover:text-brand-teal"
                        aria-hidden="true"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}
