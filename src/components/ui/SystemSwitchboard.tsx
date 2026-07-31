import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, X } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import { InView } from "@/components/ui/InView";
import { SYSTEM_SWITCH_ITEMS } from "@/lib/siteData";

const items = SYSTEM_SWITCH_ITEMS;

/**
 * One switch flips every card between how a job runs across scattered tools and how the
 * same job runs inside KIDUART. Both states stay in the DOM so the copy is readable
 * without JavaScript and by crawlers.
 */
export function SystemSwitchboard() {
  const [connected, setConnected] = useState(true);

  return (
    <InView once={false} className="switchboard home-rise" data-state={connected ? "connected" : "scattered"}>
      <div className="flex flex-col items-center gap-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-brand-navy/10 bg-white p-1.5 shadow-sm">
          <button
            type="button"
            role="switch"
            aria-checked={connected}
            onClick={() => setConnected((value) => !value)}
            className="group flex items-center gap-2 rounded-full px-2 py-1 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-teal"
          >
            <span
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors duration-300 ${
                connected ? "text-brand-navy/75" : "bg-brand-navy text-brand-beige"
              }`}
            >
              Scattered tools
            </span>
            <span
              aria-hidden="true"
              className="relative h-7 w-12 shrink-0 rounded-full border border-brand-navy/15 bg-brand-beige/70"
            >
              <span
                className={`absolute top-1/2 h-5 w-5 -translate-y-1/2 rounded-full shadow-sm transition-all duration-300 ${
                  connected ? "left-[1.55rem] bg-brand-teal" : "left-0.5 bg-brand-navy"
                }`}
              />
            </span>
            <span
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors duration-300 ${
                connected ? "bg-brand-teal text-white" : "text-brand-navy/75"
              }`}
            >
              One KIDUART system
            </span>
          </button>
        </div>
        <p className="text-sm font-medium text-brand-navy/70">
          {connected
            ? "This is the same school day, running inside one system."
            : "This is how most schools run these six jobs today."}
        </p>
      </div>

      <div className="home-stagger mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {items.map((item, index) => (
          <article
            key={item.id}
            style={{ ["--stagger" as string]: index }}
            className={`home-brick home-stagger-item switchboard-card relative flex flex-col overflow-hidden rounded-[1.75rem] p-6 ${
              connected
                ? "border border-brand-navy/10 bg-white shadow-lg shadow-brand-navy/5"
                : "border border-dashed border-brand-navy/20 bg-brand-beige/30"
            }`}
          >
            <span
              aria-hidden="true"
              className={`pointer-events-none absolute inset-x-0 top-0 h-1 transition-opacity duration-500 ${
                connected ? "bg-brand-teal opacity-100" : "bg-brand-orange opacity-0"
              }`}
            />

            <div className="flex items-center gap-3">
              <span
                className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl transition-colors duration-500 ${
                  connected ? "bg-brand-teal/10 text-brand-teal" : "bg-brand-navy/[0.06] text-brand-navy/70"
                }`}
              >
                <ProductIcon name={item.icon} className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-base font-bold leading-tight text-brand-navy">{item.area}</h3>
                <p
                  className={`mt-0.5 text-xs font-bold uppercase tracking-[0.16em] transition-colors duration-500 ${
                    connected ? "text-brand-teal" : "text-brand-bronze-ink"
                  }`}
                >
                  {connected ? "In one system" : "Today, across tools"}
                </p>
              </div>
            </div>

            {/* Both states are stacked in one cell: the card never changes height on toggle */}
            <div className="switchboard-stack mt-5 flex-1">
              <div
                className="switchboard-face"
                data-active={!connected}
                aria-hidden={connected ? "true" : undefined}
              >
                <h4 className="text-lg font-bold leading-snug text-brand-navy">
                  {item.scattered.headline}
                </h4>
                <p className="mt-2.5 text-sm leading-7 text-brand-navy/75">{item.scattered.detail}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.scattered.tools.map((tool) => (
                    <li
                      key={tool}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/10 bg-white px-3 py-1 text-xs font-semibold text-brand-navy/75"
                    >
                      <X className="h-3 w-3 text-brand-orange-ink" aria-hidden="true" />
                      {tool}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="switchboard-face"
                data-active={connected}
                aria-hidden={connected ? undefined : "true"}
              >
                <h4 className="text-lg font-bold leading-snug text-brand-navy">
                  {item.connected.headline}
                </h4>
                <p className="mt-2.5 text-sm leading-7 text-brand-navy/75">{item.connected.detail}</p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {item.connected.signals.map((signal) => (
                    <li
                      key={signal}
                      className="inline-flex items-center gap-1.5 rounded-full border border-brand-teal/30 bg-white px-3 py-1 text-xs font-semibold text-brand-navy/80"
                    >
                      <Check className="h-3 w-3 text-brand-teal" aria-hidden="true" />
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <Link
              href={item.href}
              className={`mt-6 inline-flex items-center gap-1.5 text-sm font-bold transition-colors duration-300 ${
                connected ? "text-brand-teal hover:text-brand-navy" : "text-brand-navy/70 hover:text-brand-navy"
              }`}
            >
              See the {item.area.toLowerCase()} modules
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </article>
        ))}
      </div>
    </InView>
  );
}
