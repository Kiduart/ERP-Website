import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Check, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  const faqs = [
    { q: "How is pricing calculated?", a: "We charge a simple, flat fee per active student per month. Staff, teacher, and parent accounts are completely free and unlimited." },
    { q: "Are there setup or onboarding fees?", a: "For the Professional and Enterprise plans, onboarding and data migration is included free of charge. Basic plans have a nominal one-time setup fee." },
    { q: "Can we add modules later?", a: "Yes, you can upgrade your plan or add specific premium modules like Transport Tracking or Library Management at any time." },
    { q: "Do you offer discounts for large districts?", a: "Absolutely. Our Enterprise plan offers tiered volume discounts for districts with over 5,000 students. Contact sales for a quote." },
    { q: "What happens to our data if we cancel?", a: "You own your data. If you decide to leave, you can export all your records in standard formats (CSV, Excel, PDF) at no cost." },
    { q: "Is the parent app included?", a: "The Parent App is included in the Professional and Enterprise plans. It's available for both iOS and Android devices." },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <section className="py-20 bg-brand-beige/20 relative overflow-hidden">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto mb-14 max-w-3xl text-center">
            <div className="section-kicker">Simple school ERP pricing</div>
            <h1 className="mt-6 text-[clamp(2rem,1.45rem+1.8vw,3.75rem)] font-bold text-brand-navy">Simple Pricing for Schools</h1>
            <p className="mt-4 text-lg text-brand-navy/70">
              No hidden fees, no complex tiers. Pay only for the active students enrolled in your institution.
            </p>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto relative z-20">
            {pricingPlans.map((plan, idx) => (
              <SectionReveal key={idx} delay={idx * 0.1} className={`bg-white rounded-3xl p-8 shadow-2xl relative ${plan.isPopular ? "border-2 border-brand-teal scale-105" : "border border-brand-navy/10 mt-8 mb-8"}`}>
                {plan.isPopular && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-brand-teal text-white px-4 py-1 rounded-full text-sm font-bold tracking-wide">
                    MOST POPULAR
                  </div>
                )}
                <h3 className="text-2xl font-bold text-brand-navy mb-2">{plan.name}</h3>
                <p className="text-brand-navy/60 text-sm mb-6">{plan.desc}</p>
                <div className="mb-8 pb-8 border-b border-brand-navy/10">
                  <span className="text-5xl font-extrabold text-brand-navy">{plan.price}</span>
                  <span className="text-brand-navy/60 font-medium ml-1">{plan.unit}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-brand-teal shrink-0 mt-0.5" />
                      <span className="text-brand-navy/80 font-medium text-sm">{feat}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/demo"
                  className={`block w-full py-4 text-center rounded-xl font-bold transition-all ${
                    plan.isPopular
                      ? "bg-brand-teal text-white hover:bg-brand-navy shadow-lg hover:shadow-brand-teal/25"
                      : "bg-brand-beige text-brand-navy hover:bg-brand-navy hover:text-white"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-white border-t border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#f77f00", size: 300, position: "top-right", opacity: 0.15 }]} />
        <FloatingIcons icons={["Lightbulb", "Brain", "Award"]} count={4} />
        <div className="max-w-5xl mx-auto px-4 text-center">
          <SectionReveal>
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Optional Premium Add-Ons</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {["AI Predictive Assistant", "GPS Transport Tracking", "Digital Library System"].map((addon, i) => (
                <div key={i} className="p-6 border border-brand-navy/10 rounded-2xl bg-brand-beige/10">
                  <h4 className="font-bold text-brand-navy mb-2">{addon}</h4>
                  <p className="text-sm text-brand-navy/60">+ $0.50 /student/month</p>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-24 bg-brand-beige/30 border-t border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#0c716b", size: 300, position: "bottom-left", opacity: 0.15 }]} />
        <FloatingIcons icons={["MessageSquare", "Users"]} count={4} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Frequently Asked Questions</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <SectionReveal key={idx} delay={idx * 0.05} className="bg-white p-6 rounded-2xl shadow-sm">
                <h4 className="text-lg font-bold text-brand-navy mb-3 flex items-start gap-2">
                  <HelpCircle className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                  {faq.q}
                </h4>
                <p className="text-brand-navy/70 text-sm leading-relaxed ml-7">{faq.a}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
