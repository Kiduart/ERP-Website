import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import { Check, MousePointerClick } from "lucide-react";
import { cn } from "@/lib/utils";
import { InView } from "@/components/ui/InView";
import { ACCENTS } from "@/components/product/ProductPrimitives";
import { ProductIcon } from "@/components/product/ProductIcon";
import type { SecurityLayer } from "@/data/securityPosture";

/**
 * Defence-in-depth as a sticky rail + inner-scrolling stack. On desktop the
 * layer write-ups scroll inside their own pane so the rail stays put and tracks
 * progress; on narrow screens it falls back to normal page flow. Every layer's
 * copy stays in the DOM for crawlers.
 */
export function SecurityStack({ layers }: { layers: SecurityLayer[] }) {
  const [activeId, setActiveId] = useState(layers[0]?.id ?? "");
  const [panelScroll, setPanelScroll] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRefs = useRef(new Map<string, HTMLElement>());
  const railRefs = useRef(new Map<string, HTMLAnchorElement>());
  const paneRef = useRef<HTMLDivElement | null>(null);

  const activeIndex = Math.max(
    0,
    layers.findIndex((layer) => layer.id === activeId),
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
          visible.target.dataset.layer
        ) {
          setActiveId(visible.target.dataset.layer);
        }
      },
      {
        root,
        rootMargin: panelScroll ? "0px 0px -68% 0px" : "-25% 0px -55% 0px",
        threshold: [0, 0.25, 0.5],
      },
    );

    sectionRefs.current.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [layers, panelScroll]);

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
  }, [panelScroll, layers]);

  useEffect(() => {
    if (!panelScroll) return;
    const node = railRefs.current.get(activeId);
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
  }, [activeId, panelScroll]);

  const register = (id: string) => (node: HTMLElement | null) => {
    if (node) sectionRefs.current.set(id, node);
    else sectionRefs.current.delete(id);
  };

  const jumpTo = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
      const node = sectionRefs.current.get(id);
      const pane = paneRef.current;
      if (!node) return;

      event.preventDefault();
      setActiveId(id);

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
    <InView
      once
      className="grid gap-8 lg:grid-cols-[minmax(0,18rem)_minmax(0,1fr)] lg:gap-10"
    >
      <div className="lg:sticky lg:top-28 lg:self-start">
        <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-navy">
          {layers.length} layers, outside in
        </p>
        <p className="mt-2 text-sm leading-6 text-brand-navy/[0.74]">
          Each plate is a separate control. A gap in one does not open the
          record underneath it.
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
            {activeIndex + 1}/{layers.length}
          </span>
        </div>

        <nav aria-label="Security layers" className="mt-5">
          <ol className="capability-scroll flex gap-2 overflow-x-auto pb-2 lg:max-h-[58vh] lg:flex-col lg:overflow-x-visible lg:overflow-y-auto lg:pb-0 lg:pr-1.5">
            {layers.map((layer) => {
              const isActive = layer.id === activeId;
              const tokens = ACCENTS[layer.accent];
              return (
                <li key={layer.id} className="shrink-0 lg:shrink">
                  <a
                    href={`#layer-${layer.id}`}
                    onClick={(event) => jumpTo(event, layer.id)}
                    aria-current={isActive ? "true" : undefined}
                    ref={(node) => {
                      if (node) railRefs.current.set(layer.id, node);
                      else railRefs.current.delete(layer.id);
                    }}
                    className={cn(
                      "group flex items-center gap-3 rounded-2xl border px-4 py-3 text-sm font-semibold transition-all duration-300",
                      isActive
                        ? "border-brand-navy/25 bg-brand-navy text-brand-beige"
                        : "border-brand-navy/[0.1] bg-white text-brand-navy hover:border-brand-teal/40 hover:text-brand-teal",
                    )}
                  >
                    <span
                      className={cn(
                        "flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-xs font-extrabold",
                        isActive
                          ? "bg-brand-yellow text-brand-navy"
                          : cn(tokens.softBg, tokens.text),
                      )}
                      aria-hidden="true"
                    >
                      {String(layer.order).padStart(2, "0")}
                    </span>
                    <span className="whitespace-nowrap lg:whitespace-normal">
                      {layer.title}
                    </span>
                  </a>
                </li>
              );
            })}
          </ol>
        </nav>

        <p className="mt-4 hidden items-center gap-2 text-xs font-semibold text-brand-navy/[0.7] lg:flex">
          <MousePointerClick
            className="h-3.5 w-3.5 text-brand-teal"
            aria-hidden="true"
          />
          Scroll inside the stack or pick a layer
        </p>
      </div>

      <div
        ref={paneRef}
        tabIndex={0}
        role="region"
        aria-label="Security layers detail"
        className="capability-scroll relative space-y-6 lg:max-h-[76vh] lg:overflow-y-auto lg:pr-3"
      >
        {layers.map((layer, index) => {
          const tokens = ACCENTS[layer.accent];
          const isActive = layer.id === activeId;
          return (
            <section
              key={layer.id}
              id={`layer-${layer.id}`}
              data-layer={layer.id}
              ref={register(layer.id)}
              style={{ "--stagger": index } as CSSProperties}
              className={cn(
                "motion-stack relative scroll-mt-28 overflow-hidden rounded-[2rem] border bg-white p-6 transition-shadow duration-300 md:p-8 lg:scroll-mt-4",
                tokens.border,
                isActive ? "shadow-xl shadow-brand-navy/[0.08]" : "shadow-sm",
              )}
            >
              <span
                className={cn(
                  "absolute inset-x-0 top-0 h-1.5 transition-opacity duration-300",
                  tokens.bar,
                  isActive ? "opacity-100" : "opacity-40",
                )}
                aria-hidden="true"
              />

              <div className="flex flex-wrap items-start gap-4">
                <span
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-2xl",
                    tokens.softBg,
                  )}
                >
                  <ProductIcon
                    name={layer.icon}
                    className={cn("h-6 w-6", tokens.text)}
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <p
                    className={cn(
                      "text-xs font-bold uppercase tracking-[0.18em]",
                      tokens.text,
                    )}
                  >
                    Layer {String(layer.order).padStart(2, "0")} ·{" "}
                    {layer.module}
                  </p>
                  <h3 className="mt-1.5 text-2xl font-bold text-brand-navy">
                    {layer.title}
                  </h3>
                </div>
              </div>

              <p className="mt-5 text-lg font-semibold leading-8 text-brand-navy">
                {layer.promise}
              </p>
              <p className="mt-3 leading-7 text-brand-navy/[0.78]">
                {layer.detail}
              </p>

              <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
                {layer.controls.map((control) => (
                  <li
                    key={control}
                    className="flex items-start gap-2.5 rounded-2xl border border-brand-navy/[0.08] bg-brand-beige/20 px-4 py-3"
                  >
                    <span
                      className={cn(
                        "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                        tokens.softBg,
                      )}
                      aria-hidden="true"
                    >
                      <Check className={cn("h-3 w-3", tokens.text)} />
                    </span>
                    <span className="text-sm leading-6 text-brand-navy/[0.82]">
                      {control}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>
    </InView>
  );
}
