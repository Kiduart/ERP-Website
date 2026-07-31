import { useEffect, useState } from "react";
import { ListTree } from "lucide-react";
import { cn } from "@/lib/utils";
import { onSmoothHashClick } from "@/lib/smoothScroll";

type TocItem = { id: string; label: string };

/**
 * Sticky "On this page" nav with smooth scroll + active section highlight.
 */
export function BlogToc({ items }: { items: TocItem[] }) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  useEffect(() => {
    if (!items.length || typeof IntersectionObserver === "undefined") return;

    const nodes = items
      .map((item) => document.getElementById(item.id))
      .filter((node): node is HTMLElement => Boolean(node));

    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (visible?.target instanceof HTMLElement && visible.target.id) {
          setActiveId(visible.target.id);
        }
      },
      { rootMargin: "-20% 0px -62% 0px", threshold: [0, 0.25, 0.6] },
    );

    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [items]);

  if (!items.length) return null;

  return (
    <nav aria-label="On this page" className="blog-toc-panel">
      <p className="flex items-center gap-2 text-[0.68rem] font-bold uppercase tracking-[0.18em] text-brand-beige/70">
        <ListTree className="h-3.5 w-3.5 text-brand-yellow" aria-hidden="true" />
        On this page
      </p>
      <ol className="mt-4 space-y-1">
        {items.map((item, index) => {
          const active = item.id === activeId;
          return (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                onClick={(event) => onSmoothHashClick(event)}
                className={cn(
                  "group flex items-start gap-2.5 rounded-xl px-2.5 py-2 text-sm leading-5 transition-colors duration-300",
                  active
                    ? "bg-white/10 font-bold text-brand-yellow"
                    : "font-semibold text-brand-beige/70 hover:bg-white/[0.06] hover:text-brand-beige",
                )}
              >
                <span
                  className={cn(
                    "mt-0.5 font-mono text-[0.65rem] font-bold tracking-wider",
                    active ? "text-brand-yellow" : "text-brand-beige/40 group-hover:text-brand-beige/60",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="min-w-0">{item.label}</span>
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
