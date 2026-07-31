import { Link } from "wouter";
import { ArrowUpRight, ChevronDown, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ACCENTS,
  HiddenCapabilitiesLink,
  type AccentName,
} from "@/components/product/ProductPrimitives";
import type { PublicModule } from "@/data/featureMatrix";

export type ShelfModule = PublicModule;

/**
 * Every module of an area with its sub-modules and a representative sample of each
 * sub-module's capabilities. Uses native <details> so the published content ships in
 * the HTML — readable for search engines and usable without JavaScript.
 */
export function ModuleShelf({
  areaSlug,
  modules,
  accent = "teal",
  defaultOpenFirst = true,
}: {
  areaSlug: string;
  modules: ShelfModule[];
  accent?: AccentName;
  defaultOpenFirst?: boolean;
}) {
  const tokens = ACCENTS[accent];

  return (
    <div className="space-y-4">
      {modules.map((module, index) => {
        return (
          <details
            key={module.slug}
            id={`module-${module.slug}`}
            open={defaultOpenFirst && index === 0}
            className={cn(
              "group scroll-mt-28 overflow-hidden rounded-[1.75rem] border bg-white shadow-sm shadow-brand-navy/[0.04] transition-shadow open:shadow-lg open:shadow-brand-navy/[0.08]",
              tokens.border,
            )}
          >
            <summary className="flex cursor-pointer list-none flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between md:p-6">
              <span className="flex items-start gap-4">
                <span
                  className={cn(
                    "mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                    tokens.softBg,
                  )}
                  aria-hidden="true"
                >
                  <Layers className={cn("h-5 w-5", tokens.text)} />
                </span>
                <span>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]">
                    Module {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-1 text-lg font-bold text-brand-navy md:text-xl">{module.name}</h3>
                  <span className="mt-1 block text-sm text-brand-navy/[0.74]">
                    {module.subModules.length === 1
                      ? "One workflow group inside this module"
                      : "Workflow groups your team opens day to day"}
                  </span>
                </span>
              </span>
              <span className="flex items-center gap-3 md:shrink-0">
                <span
                  className={cn(
                    "rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]",
                    tokens.border,
                    tokens.softBg,
                    tokens.text,
                  )}
                >
                  <span className="group-open:hidden">Show capabilities</span>
                  <span className="hidden group-open:inline">Hide capabilities</span>
                </span>
                <ChevronDown
                  className="h-5 w-5 text-brand-navy/50 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </span>
            </summary>

            <div className="border-t border-brand-navy/[0.08] bg-brand-beige/20 px-5 py-6 md:px-6">
              <div className="space-y-6">
                {module.subModules.map((subModule) => (
                  <section key={subModule.slug} aria-label={subModule.name}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-navy">
                        {subModule.name}
                      </h4>
                    </div>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                      {subModule.features.map((feature) => (
                        <li
                          key={`${subModule.slug}-${feature.name}`}
                          className="flex items-start gap-2 rounded-xl bg-white px-3 py-2.5 text-sm leading-6 text-brand-navy/[0.82]"
                        >
                          <span
                            className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", tokens.bar)}
                            aria-hidden="true"
                          />
                          {feature.name}
                        </li>
                      ))}
                      {subModule.hiddenFeatureCount > 0 && (
                        <li className="sm:col-span-2 xl:col-span-1">
                          <HiddenCapabilitiesLink />
                        </li>
                      )}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-brand-navy/[0.08] pt-5">
                <Link
                  href={`/features/${areaSlug}/${module.slug}`}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-brand-beige shadow-md shadow-brand-navy/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
                >
                  Open {module.name} module page
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {module.hiddenFeatureCount > 0 && (
                  <a
                    href="#capability-sheet"
                    className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.14] bg-white px-5 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                  >
                    Request the full sheet
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
