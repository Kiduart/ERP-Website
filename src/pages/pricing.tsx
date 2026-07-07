import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { pageSeo } from "@/lib/pageSeo";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { ArrowRight, Check, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { pricingPlans } from "@/data/pricing";
import { pricingFaqs } from "@/data/pricingFaqs";

const pricingAssurances = [
  "Guided onboarding",
  "No setup surprises",
  "Flexible plan changes",
  "Full data export",
];

export default function Pricing() {
  return (
    <PageTransition className="pt-20 pb-0">
      <PageSeoHead {...pageSeo.pricing} />
      <section className="section-space bg-brand-beige/20 relative overflow-hidden">
        <BackgroundBlobs
          blobs={[
            { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
            { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="mx-auto mb-14 max-w-3xl text-center">
            <div className="section-kicker">Straightforward school ERP pricing</div>
            <h1 className="mt-6 text-[clamp(2rem,1.45rem+1.8vw,3.75rem)] font-bold text-brand-navy">Pricing that grows with your school</h1>
            <p className="mt-4 text-lg text-brand-navy/70">
              You pay for active students. Staff accounts, teacher logins, and parent portal access are included at no extra cost regardless of how many people use the platform.
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
                  {plan.isPopular ? (
                    <div className="space-y-1">
                      <div className="text-brand-teal font-bold text-sm uppercase tracking-wide">Most chosen plan</div>
                      <div className="text-2xl font-extrabold text-brand-navy">Tailored for your school</div>
                      <div className="text-brand-navy/60 text-sm">Pricing based on student count — talk to us</div>
                    </div>
                  ) : plan.price === "Custom" ? (
                    <div className="space-y-1">
                      <div className="text-brand-navy font-extrabold text-2xl">Enterprise pricing</div>
                      <div className="text-brand-navy/60 text-sm">Custom quote for large districts</div>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="text-brand-navy font-extrabold text-2xl">Get a quote</div>
                      <div className="text-brand-navy/60 text-sm">Starts affordable — tailored to your school size</div>
                    </div>
                  )}
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
                  href={plan.price === "Custom" ? "/contact" : "/demo"}
                  className={`block w-full py-4 text-center rounded-xl font-bold transition-all ${
                    plan.isPopular
                      ? "bg-brand-teal text-white hover:bg-brand-navy shadow-lg hover:shadow-brand-teal/25"
                      : "bg-brand-beige text-brand-navy hover:bg-brand-navy hover:text-white"
                  }`}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Book a Free Demo"}
                </Link>
              </SectionReveal>
            ))}
          </div>
          <div className="mt-10 grid max-w-4xl grid-cols-2 gap-4 mx-auto md:grid-cols-4">
            {pricingAssurances.map((item) => (
              <div
                key={item}
                className="flex min-h-[3.25rem] items-center justify-center gap-2 rounded-xl border border-brand-navy/10 bg-brand-beige/20 px-4 py-3 text-center text-sm font-medium text-brand-navy"
              >
                <Check className="h-4 w-4 shrink-0 text-brand-teal" aria-hidden />
                <span className="leading-snug">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space-tight bg-white border-t border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#f77f00", size: 300, position: "top-right", opacity: 0.15 }]} />
        <FloatingIcons icons={["Lightbulb", "Brain", "Award"]} count={4} />
        <div className="max-w-5xl mx-auto px-4 text-center">
          <SectionReveal>
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Optional modules available on any plan</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {["AI Insights Assistant", "GPS Transport Tracking", "Digital Library System"].map((addon, i) => (
                <div key={i} className="p-6 border border-brand-navy/10 rounded-2xl bg-brand-beige/10">
                  <h4 className="font-bold text-brand-navy mb-2">{addon}</h4>
                  <Link href="/demo" className="mt-3 inline-flex items-center gap-1 text-sm font-bold text-brand-teal hover:text-brand-navy transition-colors">
                    Ask about this module <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space bg-brand-beige/30 border-t border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[{ color: "#0c716b", size: 300, position: "bottom-left", opacity: 0.15 }]} />
        <FloatingIcons icons={["MessageSquare", "Users"]} count={4} />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Common questions about pricing and plans</h2>
          </SectionReveal>
          <div className="grid md:grid-cols-2 gap-8">
            {pricingFaqs.map((faq, idx) => (
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
