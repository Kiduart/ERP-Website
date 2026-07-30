import { Link } from "wouter";
import { ArrowUpRight, ChevronDown, Layers, Lock } from "lucide-react";
import { cn } from "@/lib/utils";
import { ACCENTS, type AccentName } from "@/components/product/ProductPrimitives";

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
        const subModuleLabel = module.subModules.length === 1 ? "sub-module" : "sub-modules";

        return (
          <details
            key={module.slug}
            open={defaultOpenFirst && index === 0}
            className={cn(
              "group overflow-hidden rounded-3xl border bg-white/95 shadow-sm transition-colors",
              tokens.border,
            )}
          >
            <summary className="flex cursor-pointer list-none flex-col gap-3 p-6 md:flex-row md:items-center md:justify-between">
              <span className="flex items-start gap-4">
                <span
                  className={cn(
                    "mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl",
                    tokens.softBg,
                  )}
                  aria-hidden="true"
                >
                  <Layers className={cn("h-5 w-5", tokens.text)} />
                </span>
                <span>
                  <h3 className="text-lg font-bold text-brand-navy">{module.name}</h3>
                  <span className="mt-1 block text-sm text-brand-navy/[0.74]">
                    {module.featureCount} features · {module.subModules.length} {subModuleLabel}
                  </span>
                </span>
              </span>
              <span className="flex items-center gap-3 md:shrink-0">
                <span className="text-sm font-semibold text-brand-navy/[0.72] group-open:hidden">
                  Show capabilities
                </span>
                <span className="hidden text-sm font-semibold text-brand-navy/[0.72] group-open:inline">
                  Hide capabilities
                </span>
                <ChevronDown
                  className="h-5 w-5 text-brand-navy/50 transition-transform duration-300 group-open:rotate-180"
                  aria-hidden="true"
                />
              </span>
            </summary>

            <div className="border-t border-brand-navy/[0.08] bg-brand-beige/20 px-6 py-6">
              <div className="space-y-6">
                {module.subModules.map((subModule) => (
                  <section key={subModule.slug} aria-label={subModule.name}>
                    <div className="flex flex-wrap items-baseline justify-between gap-2">
                      <h4 className="text-sm font-bold uppercase tracking-[0.16em] text-brand-navy">
                        {subModule.name}
                      </h4>
                      <span className="text-xs font-semibold text-brand-navy/[0.72]">
                        {subModule.featureCount}{" "}
                        {subModule.featureCount === 1 ? "capability" : "capabilities"}
                      </span>
                    </div>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                      {subModule.features.map((feature) => (
                        <li
                          key={`${subModule.slug}-${feature.name}`}
                          className="flex items-start gap-2 rounded-xl bg-white px-3 py-2 text-sm leading-6 text-brand-navy/[0.82]"
                        >
                          <span
                            className={cn("mt-2 h-1.5 w-1.5 shrink-0 rounded-full", tokens.bar)}
                            aria-hidden="true"
                          />
                          {feature.name}
                        </li>
                      ))}
                      {subModule.hiddenFeatureCount > 0 && (
                        <li className="flex items-start gap-2 rounded-xl border border-dashed border-brand-navy/20 px-3 py-2 text-sm leading-6 text-brand-navy/[0.72]">
                          <Lock className="mt-1 h-3.5 w-3.5 shrink-0 text-brand-navy/50" aria-hidden="true" />
                          {subModule.hiddenFeatureCount} more, shown in the demo
                        </li>
                      )}
                    </ul>
                  </section>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Link
                  href={`/features/${areaSlug}/${module.slug}`}
                  className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/[0.14] bg-white px-5 py-2.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                >
                  Open {module.name} module page
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                {module.hiddenFeatureCount > 0 && (
                  <p className="text-sm text-brand-navy/[0.72]">
                    {module.hiddenFeatureCount} further capabilities in this module are covered in a
                    walkthrough.
                  </p>
                )}
              </div>
            </div>
          </details>
        );
      })}
    </div>
  );
}
