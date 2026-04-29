import Head from "next/head";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Check, HelpCircle } from "lucide-react";
import { Link } from "wouter";
import { pricingPlans } from "@/data/pricing";

export default function Pricing() {
  const faqs = [
    { q: "How is pricing calculated?", a: "Based on the number of active students enrolled in your institution per month. Teacher accounts, staff logins, and parent access are completely free , you only pay for students." },
    { q: "Are there setup or onboarding fees?", a: "Professional and Enterprise plans include full onboarding and data migration at no extra cost. Basic plans have a one-time setup fee. We will confirm the exact amount during your demo." },
    { q: "Can we add modules after signing up?", a: "Yes. You can upgrade your plan or add specific premium modules , such as Transport Tracking or Library Management , at any time, with prorated billing." },
    { q: "Do you offer discounts for large districts?", a: "Yes. Our Enterprise plan includes volume-based pricing for districts managing more than 5,000 students across campuses. Contact our sales team for a custom quote." },
    { q: "What happens to our data if we choose to leave?", a: "Your data belongs to your school. If you decide to move on, you can export all records in standard formats , CSV, Excel, and PDF , at no cost and with no data retention by us." },
    { q: "Is the parent app included in all plans?", a: "The parent app is included in Professional and Enterprise plans. It is available on iOS and Android. Basic plan users can add it as an optional module." },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <Head>
        <title>School ERP Pricing | Simple Plans for Indian Schools | KIDUART</title>
        <meta
          name="description"
          content="KIDUART school ERP pricing is based on active students per month. Staff and parent accounts are free. See plans for Indian schools of every size. No hidden fees."
        />
        <link rel="canonical" href="https://www.kiduart.com/pricing" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="School ERP Pricing | Simple Plans for Indian Schools | KIDUART" />
        <meta property="og:description" content="KIDUART school ERP pricing is based on active students per month. Staff and parent accounts are free. See plans for Indian schools of every size. No hidden fees." />
        <meta property="og:url" content="https://www.kiduart.com/pricing" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School ERP Pricing | Simple Plans for Indian Schools | KIDUART" />
        <meta name="twitter:description" content="KIDUART school ERP pricing is based on active students per month. Staff and parent accounts are free. See plans for Indian schools of every size. No hidden fees." />
      </Head>
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
            <div className="section-kicker">Straightforward school ERP pricing</div>
            <h1 className="mt-6 text-[clamp(2rem,1.45rem+1.8vw,3.75rem)] font-bold text-brand-navy">Pricing that grows with your school</h1>
            <p className="mt-4 text-lg text-brand-navy/70">
              You pay for active students. Staff accounts, teacher logins and parent app access are included at no extra cost regardless of how many people use the platform.
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
            <h3 className="text-2xl font-bold text-brand-navy mb-8">Optional modules available on any plan</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {["AI Insights Assistant", "GPS Transport Tracking", "Digital Library System"].map((addon, i) => (
                <div key={i} className="p-6 border border-brand-navy/10 rounded-2xl bg-brand-beige/10">
                  <h4 className="font-bold text-brand-navy mb-2">{addon}</h4>
                  <p className="text-sm text-brand-navy/60">Contact for pricing</p>
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
            <h2 className="text-3xl font-bold text-brand-navy">Common questions about pricing and plans</h2>
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
