import { Link } from "wouter";
import { ArrowRight, CalendarClock, ShieldCheck, Sparkles } from "lucide-react";
import { CTA_SCHOOLS_SUBTITLE } from "@/lib/siteData";
import { useAnalytics } from "@/hooks/useAnalytics";
import { SectionReveal } from "./PageTransition";

const ASSURANCES = [
  { icon: CalendarClock, label: "30-minute walkthrough", detail: "Booked around your school hours" },
  { icon: Sparkles, label: "Run on your own data", detail: "Your fee heads, classes and staff roles" },
  { icon: ShieldCheck, label: "No card, no lock-in", detail: "Nothing is charged to see the product" },
];

export function CtaSection({ title = "See KIDUART with your own school data", subtitle = CTA_SCHOOLS_SUBTITLE }) {
  const { trackEvent } = useAnalytics();

  return (
    <section className="surface-dark section-space relative overflow-hidden bg-brand-navy">
      <div className="cta-aurora" aria-hidden="true" />
      <div className="cta-grid" aria-hidden="true" />

      <div className="page-shell relative z-10">
        <div className="console-rail relative mx-auto mb-10 max-w-md" aria-hidden="true" />
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">
            <span className="console-live-dot h-1.5 w-1.5 rounded-full bg-brand-yellow" aria-hidden="true" />
            Live demo
          </span>
          <h2 className="mt-6 text-[clamp(1.8rem,1.2rem+1.45vw,2.85rem)] font-bold leading-[1.08] text-brand-beige">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[clamp(0.98rem,0.94rem+0.14vw,1.03rem)] leading-8 text-brand-beige/85">
            {subtitle}
          </p>
        </SectionReveal>

        <SectionReveal className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/demo"
            onClick={() => trackEvent("CTA", "cta_click", "hero_demo_button")}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-lg font-bold text-brand-navy shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-brand-yellow/20 sm:w-auto"
          >
            Request a Demo <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </Link>
          <Link
            href="/contact"
            onClick={() => trackEvent("CTA", "cta_click", "contact_sales_button")}
            className="w-full rounded-full border-2 border-white/30 bg-transparent px-8 py-4 text-center text-lg font-bold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto"
          >
            Contact Sales
          </Link>
        </SectionReveal>

        <SectionReveal>
          <ul className="mx-auto mt-12 grid max-w-4xl gap-3 sm:grid-cols-3">
            {ASSURANCES.map((item, index) => (
              <li
                key={item.label}
                className="console-panel relative overflow-hidden rounded-2xl border border-white/12 bg-white/[0.05] px-5 py-5 text-left backdrop-blur-sm transition-colors duration-300 hover:border-brand-yellow/40"
              >
                <span className="absolute right-4 top-4 text-[0.68rem] font-extrabold text-brand-beige/35" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-yellow/[0.16]">
                  <item.icon className="h-4 w-4 text-brand-yellow" aria-hidden="true" />
                </span>
                <p className="mt-3.5 text-sm font-bold text-brand-beige">{item.label}</p>
                <p className="mt-1 text-xs leading-5 text-brand-beige/75">{item.detail}</p>
              </li>
            ))}
          </ul>
        </SectionReveal>
      </div>
    </section>
  );
}
