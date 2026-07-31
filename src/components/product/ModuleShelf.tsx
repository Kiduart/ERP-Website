import { useState } from "react";
import { Link } from "wouter";
import { ArrowUpRight, ChevronDown, Layers } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  ACCENTS,
  HiddenCapabilitiesLink,
  type AccentName,
} from "@/components/product/ProductPrimitives";
import { featureBrief } from "@/data/featureCopy";
import { onSmoothHashClick } from "@/lib/smoothScroll";
import { InView } from "@/components/ui/InView";
import type { PublicModule } from "@/data/featureMatrix";

export type ShelfModule = PublicModule;

function ShelfModuleCard({
  areaSlug,
  module,
  index,
  tokens,
  defaultOpen,
}: {
  areaSlug: string;
  module: ShelfModule;
  index: number;
  tokens: (typeof ACCENTS)[AccentName];
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <InView
      once={false}
      className="shelf-board-wrap"
      rootMargin="0px 0px -22% 0px"
      threshold={0.12}
    >
      <details
        id={`module-${module.slug}`}
        open={open}
        onToggle={(event) => {
          setOpen((event.currentTarget as HTMLDetailsElement).open);
        }}
        className={cn(
          "shelf-board group scroll-mt-28 rounded-[1.75rem] border bg-white shadow-sm shadow-brand-navy/[0.04] transition-[box-shadow,transform,opacity] duration-500 open:shadow-lg open:shadow-brand-navy/[0.08]",
          tokens.border,
        )}
      >
        <summary className="flex cursor-pointer list-none flex-col gap-3 p-5 md:flex-row md:items-center md:justify-between md:p-6">
          <span className="flex items-start gap-4">
            <span
              className={cn(
                "shelf-from-left mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl",
                tokens.softBg,
              )}
              style={{ ["--stick-delay" as string]: "0ms" }}
              aria-hidden="true"
            >
              <Layers className={cn("h-5 w-5", tokens.text)} />
            </span>
            <span>
              <span
                className="shelf-from-left block text-[0.68rem] font-bold uppercase tracking-[0.16em] text-brand-navy/[0.72]"
                style={{ ["--stick-delay" as string]: "40ms" }}
              >
                Module {String(index + 1).padStart(2, "0")}
              </span>
              <h3
                className="shelf-from-right mt-1 text-lg font-bold text-brand-navy md:text-xl"
                style={{ ["--stick-delay" as string]: "60ms" }}
              >
                {module.name}
              </h3>
              <span
                className="shelf-from-right mt-1 block text-sm text-brand-navy/[0.74]"
                style={{ ["--stick-delay" as string]: "90ms" }}
              >
                {module.subModules.length === 1
                  ? "One workflow group inside this module"
                  : "Workflow groups your team opens day to day"}
              </span>
            </span>
          </span>
          <span
            className="shelf-from-right flex items-center gap-3 md:shrink-0"
            style={{ ["--stick-delay" as string]: "110ms" }}
          >
            <span
              className={cn(
                "rounded-full border px-3 py-1.5 text-xs font-bold uppercase tracking-[0.12em]",
                tokens.border,
                tokens.softBg,
                tokens.text,
              )}
            >
              <span className="group-open:hidden">Show capabilities</span>
              <span className="hidden group-open:inline">
                Hide capabilities
              </span>
            </span>
            <ChevronDown
              className="h-5 w-5 text-brand-navy/50 transition-transform duration-300 group-open:rotate-180"
              aria-hidden="true"
            />
          </span>
        </summary>

        {open ? (
          <div className="border-t border-brand-navy/[0.08] bg-brand-beige/20 px-5 py-6 md:px-6">
            <div className="space-y-6">
              {module.subModules.map((subModule, subIndex) => (
                <section key={subModule.slug} aria-label={subModule.name}>
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <h4
                      className="shelf-from-left text-sm font-bold uppercase tracking-[0.16em] text-brand-navy"
                      style={{
                        ["--stick-delay" as string]: `${140 + subIndex * 30}ms`,
                      }}
                    >
                      {subModule.name}
                    </h4>
                  </div>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {subModule.features.map((feature, featureIndex) => (
                      <li
                        key={`${subModule.slug}-${feature.name}`}
                        className="shelf-from-right flex items-start gap-2.5 rounded-xl bg-white px-3.5 py-3"
                        style={{
                          ["--stick-delay" as string]: `${170 + subIndex * 30 + featureIndex * 35}ms`,
                        }}
                      >
                        <span
                          className={cn(
                            "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                            tokens.bar,
                          )}
                          aria-hidden="true"
                        />
                        <span className="min-w-0">
                          <span className="block text-sm font-semibold leading-5 text-brand-navy">
                            {feature.name}
                          </span>
                          <span className="mt-0.5 block text-xs leading-5 text-brand-navy/[0.7]">
                            {featureBrief(feature.name, subModule.name)}
                          </span>
                        </span>
                      </li>
                    ))}
                    {subModule.hiddenFeatureCount > 0 && (
                      <li
                        className="shelf-from-right sm:col-span-2"
                        style={{
                          ["--stick-delay" as string]: `${220 + subIndex * 30}ms`,
                        }}
                      >
                        <HiddenCapabilitiesLink />
                      </li>
                    )}
                  </ul>
                </section>
              ))}
            </div>

            <div
              className="shelf-from-right mt-6 flex flex-wrap items-center gap-3 border-t border-brand-navy/[0.08] pt-5"
              style={{ ["--stick-delay" as string]: "260ms" }}
            >
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
                  onClick={(event) => onSmoothHashClick(event)}
                  className="capability-cue inline-flex items-center gap-1.5 rounded-full border border-dashed border-brand-teal/45 bg-brand-teal/[0.06] px-5 py-3 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
                >
                  Request the full sheet
                  <ArrowUpRight
                    className="capability-cue-arrow h-4 w-4 text-brand-teal"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </div>
        ) : null}
      </details>
    </InView>
  );
}

/** Module shelf  closed accordion bodies are not mounted. */
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
    <div className="space-y-5">
      {modules.map((module, index) => (
        <ShelfModuleCard
          key={module.slug}
          areaSlug={areaSlug}
          module={module}
          index={index}
          tokens={tokens}
          defaultOpen={Boolean(defaultOpenFirst && index === 0)}
        />
      ))}
    </div>
  );
}
