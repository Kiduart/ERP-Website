import { useState } from "react";
import { smoothScrollToId } from "@/lib/smoothScroll";
import type { SecurityLayer } from "@/data/securityPosture";

export function TrustClouds({ layers }: { layers: SecurityLayer[] }) {
  const [activeId, setActiveId] = useState(layers[0]?.id ?? "");
  const active = layers.find((layer) => layer.id === activeId) ?? layers[0];
  if (!active) return null;

  return (
    <section className="section-space-tight border-b border-brand-navy/5 bg-brand-beige/40">
      <div className="page-shell">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-center">
          <ul className="flex max-w-xl flex-wrap justify-center gap-3">
            {layers.map((layer, index) => {
              const selected = layer.id === active.id;
              return (
                <li key={layer.id}>
                  <a
                    href={`#layer-${layer.id}`}
                    onMouseEnter={() => setActiveId(layer.id)}
                    onFocus={() => setActiveId(layer.id)}
                    onClick={(event) => {
                      event.preventDefault();
                      setActiveId(layer.id);
                      window.dispatchEvent(
                        new CustomEvent("kiduart:focus-layer", { detail: layer.id }),
                      );
                      smoothScrollToId("defence-layers");
                    }}
                    className={`inline-flex rounded-full border px-4 py-2.5 text-sm font-bold ${
                      selected
                        ? index % 2 === 0
                          ? "border-brand-navy bg-brand-navy text-brand-beige"
                          : "border-brand-orange bg-brand-orange text-brand-navy"
                        : "border-brand-navy/15 bg-white text-brand-navy hover:border-brand-teal"
                    }`}
                  >
                    {layer.short}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
