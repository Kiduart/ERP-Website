import { useMemo, useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import {
  IntegrationStatusPill,
  type IntegrationStatusValue,
} from "@/components/product/IntegrationStatusPill";

export type DirectoryConnector = {
  slug: string;
  name: string;
  description: string;
  icon: string;
  status: IntegrationStatusValue;
  providers: string[];
  modules: { label: string; href: string }[];
};

export type DirectoryCategory = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  connectors: DirectoryConnector[];
};

type Filter = "all" | IntegrationStatusValue;

const FILTERS: { value: Filter; label: string }[] = [
  { value: "all", label: "Everything" },
  { value: "live", label: "Live" },
  { value: "guided", label: "Guided setup" },
  { value: "planned", label: "Roadmap" },
];

export function IntegrationDirectory({ categories }: { categories: DirectoryCategory[] }) {
  const [filter, setFilter] = useState<Filter>("all");

  const counts = useMemo(() => {
    const all = categories.flatMap((category) => category.connectors);
    return {
      all: all.length,
      live: all.filter((entry) => entry.status === "live").length,
      guided: all.filter((entry) => entry.status === "guided").length,
      planned: all.filter((entry) => entry.status === "planned").length,
    };
  }, [categories]);

  const matches = (status: IntegrationStatusValue) => filter === "all" || filter === status;
  const visibleCount = filter === "all" ? counts.all : counts[filter];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-12">
      <aside className="lg:col-span-3">
        <div className="lg:sticky lg:top-28">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/[0.72]">
            Jump to a category
          </p>
          <ul className="mt-4 space-y-1.5">
            {categories.map((category) => (
              <li key={category.slug}>
                <a
                  href={`#${category.slug}`}
                  className="flex items-center justify-between gap-3 rounded-xl border border-transparent px-3 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:bg-white hover:text-brand-teal"
                >
                  <span className="flex min-w-0 items-center gap-2.5">
                    <ProductIcon name={category.icon} className="h-4 w-4 shrink-0 text-brand-teal" />
                    <span className="truncate">{category.title}</span>
                  </span>
                  <span className="shrink-0 text-xs font-bold text-brand-navy/[0.7]">
                    View
                  </span>
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-6 rounded-2xl border border-brand-navy/[0.1] bg-white p-5">
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-brand-navy/[0.72]">
              Filter by status
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {FILTERS.map((entry) => {
                const isActive = filter === entry.value;
                return (
                  <button
                    key={entry.value}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setFilter(entry.value)}
                    className={`rounded-full border px-3 py-1.5 text-xs font-bold transition-colors ${
                      isActive
                        ? "border-brand-navy bg-brand-navy text-brand-beige"
                        : "border-brand-navy/[0.15] bg-white text-brand-navy hover:border-brand-teal hover:text-brand-teal"
                    }`}
                  >
                    {entry.label}
                    <span className="ml-1.5 font-extrabold">
                      {entry.value === "all" ? counts.all : counts[entry.value]}
                    </span>
                  </button>
                );
              })}
            </div>
            <p aria-live="polite" className="mt-3 text-xs font-semibold text-brand-navy/[0.74]">
              Showing {visibleCount} of {counts.all} connectors
            </p>
          </div>
        </div>
      </aside>

      <div className="min-w-0 space-y-16 lg:col-span-9">
        {categories.map((category) => {
          const shown = category.connectors.filter((connector) => matches(connector.status));
          return (
            <section key={category.slug} id={category.slug} className="scroll-mt-28" hidden={shown.length === 0}>
              <div className="grid gap-4 border-b border-brand-navy/[0.08] pb-6 md:grid-cols-[auto_1fr] md:items-start md:gap-6">
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-brand-navy text-brand-beige">
                  <ProductIcon name={category.icon} className="h-7 w-7" />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-brand-navy md:text-3xl">{category.title}</h2>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-brand-navy/[0.74]">{category.blurb}</p>
                </div>
              </div>

              <ul className="mt-8 grid gap-5 md:grid-cols-2">
                {category.connectors.map((connector) => (
                  <li key={connector.slug} hidden={!matches(connector.status)}>
                    <article className="group flex h-full flex-col rounded-[1.5rem] border border-brand-navy/[0.1] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/40 hover:shadow-xl hover:shadow-brand-navy/[0.06]">
                      <div className="flex items-start justify-between gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-beige/60 text-brand-navy transition-colors group-hover:bg-brand-teal/[0.12] group-hover:text-brand-teal">
                          <ProductIcon name={connector.icon} className="h-6 w-6" />
                        </span>
                        <IntegrationStatusPill status={connector.status} />
                      </div>

                      <h3 className="mt-4 text-xl font-bold text-brand-navy">
                        <Link
                          href={`/integrations/${connector.slug}`}
                          className="transition-colors group-hover:text-brand-teal"
                        >
                          {connector.name}
                        </Link>
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-brand-navy/[0.76]">{connector.description}</p>

                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {connector.providers.map((provider) => (
                          <span
                            key={provider}
                            className="rounded-md bg-brand-navy/[0.05] px-2 py-0.5 text-[0.7rem] font-semibold text-brand-navy/[0.76]"
                          >
                            {provider}
                          </span>
                        ))}
                      </div>

                      {connector.modules.length > 0 ? (
                        <div className="mt-5 border-t border-brand-navy/[0.08] pt-4">
                          <p className="text-[0.7rem] font-bold uppercase tracking-[0.14em] text-brand-navy/[0.72]">
                            Writes into
                          </p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {connector.modules.map((module) => (
                              <Link
                                key={module.href}
                                href={module.href}
                                className="rounded-full border border-brand-navy/[0.12] px-2.5 py-1 text-xs font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                              >
                                {module.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <Link
                        href={`/integrations/${connector.slug}`}
                        className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-teal transition-colors hover:text-brand-navy"
                      >
                        How {connector.name} works
                        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </article>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </div>
  );
}
