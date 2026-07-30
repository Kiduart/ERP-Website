import { useEffect, useRef, useState } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { ACCENTS } from "@/components/product/ProductPrimitives";
import { ProductIcon } from "@/components/product/ProductIcon";
import type { SecurityLayer } from "@/data/securityPosture";

/**
 * Defence-in-depth read as a stack: a plate diagram tracks which layer is on
 * screen while every layer's copy stays rendered for crawlers.
 */
export function SecurityStack({ layers }: { layers: SecurityLayer[] }) {
  const [activeId, setActiveId] = useState(layers[0]?.id ?? "");
  const sectionRefs = useRef(new Map<string, HTMLElement>());

  useEffect(() => {
    if (typeof IntersectionObserver === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target instanceof HTMLElement && visible.target.dataset.layer) {
          setActiveId(visible.target.dataset.layer);
        }
      },
      { rootMargin: "-25% 0px -55% 0px", threshold: [0, 0.3, 0.6] },
    );

    sectionRefs.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [layers]);

  const register = (id: string) => (node: HTMLElement | null) => {
    if (node) sectionRefs.current.set(id, node);
    else sectionRefs.current.delete(id);
  };

  return (
    <div className="grid gap-10 lg:grid-cols-[minmax(0,19rem)_minmax(0,1fr)] lg:gap-14">
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-navy">
          {layers.length} layers, outside in
        </p>
        <p className="mt-2 text-sm leading-6 text-brand-navy/[0.74]">
          Each plate is a separate control. A gap in one does not open the record underneath it.
        </p>

        <nav aria-label="Security layers" className="mt-6">
          <ol className="flex gap-2 overflow-x-auto pb-2 lg:block lg:space-y-1.5 lg:overflow-visible lg:pb-0">
            {layers.map((layer) => {
              const isActive = layer.id === activeId;
              const tokens = ACCENTS[layer.accent];
              return (
                <li key={layer.id} className="shrink-0 lg:shrink">
                  <a
                    href={`#layer-${layer.id}`}
                    aria-current={isActive ? "true" : undefined}
                    className={cn(
                      "group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-300",
                      isActive
                        ? "border-brand-navy/25 bg-brand-navy text-brand-beige lg:translate-x-2"
                        : "border-brand-navy/[0.1] bg-white text-brand-navy hover:border-brand-teal/40 hover:text-brand-teal",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold",
                        isActive ? "bg-brand-yellow text-brand-navy" : cn(tokens.softBg, tokens.text),
                      )}
                      aria-hidden="true"
                    >
                      {String(layer.order).padStart(2, "0")}
                    </span>
                    <span className="whitespace-nowrap lg:whitespace-normal">{layer.title}</span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>
      </div>

      <div className="space-y-6">
        {layers.map((layer) => {
          const tokens = ACCENTS[layer.accent];
          const isActive = layer.id === activeId;
          return (
            <section
              key={layer.id}
              id={`layer-${layer.id}`}
              data-layer={layer.id}
              ref={register(layer.id)}
              className={cn(
                "relative scroll-mt-28 overflow-hidden rounded-[2rem] border bg-white p-6 transition-shadow duration-300 md:p-8",
                tokens.border,
                isActive ? "shadow-xl shadow-brand-navy/[0.08]" : "shadow-sm",
              )}
            >
              <span
                className={cn("absolute inset-x-0 top-0 h-1.5 transition-opacity duration-300", tokens.bar, isActive ? "opacity-100" : "opacity-40")}
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-start gap-4">
                <span className={cn("flex h-12 w-12 items-center justify-center rounded-2xl", tokens.softBg)}>
                  <ProductIcon name={layer.icon} className={cn("h-6 w-6", tokens.text)} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className={cn("text-xs font-bold uppercase tracking-[0.18em]", tokens.text)}>
                    Layer {String(layer.order).padStart(2, "0")} · {layer.module}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-bold text-brand-navy">{layer.title}</h3>
                </div>
              </div>

              <p className="mt-5 text-lg font-semibold leading-8 text-brand-navy">{layer.promise}</p>
              <p className="mt-3 leading-7 text-brand-navy/[0.78]">{layer.detail}</p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {layer.controls.map((control) => (
                  <li
                    key={control}
                    className="flex items-start gap-2.5 rounded-2xl border border-brand-navy/[0.08] bg-brand-beige/20 px-4 py-3"
                  >
                    <span
                      className={cn("mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full", tokens.softBg)}
                      aria-hidden="true"
                    >
                      <Check className={cn("h-3 w-3", tokens.text)} />
                    </span>
                    <span className="text-sm leading-6 text-brand-navy/[0.82]">{control}</span>
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
