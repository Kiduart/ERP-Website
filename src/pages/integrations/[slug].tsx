import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { integrationPageSeo } from "@/lib/pageSeo";
import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { CheckCircle, ArrowLeft, ArrowRight, Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import integrationsData from "@/data/integrationsData";

export default function IntegrationDetail() {
  const { slug } = useParams();
  const data = slug ? integrationsData[slug] : null;
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  if (!data) {
    return (
      <PageTransition className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-6">Integration Not Found</h1>
        <p className="text-xl text-brand-navy/70 mb-8">The integration you are looking for doesn't exist.</p>
        <Link href="/integrations" className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Integrations
        </Link>
      </PageTransition>
    );
  }

  const Icon = data.icon;

  return (
    <>
      <PageSeoHead {...integrationPageSeo(slug!, data.name, data.description)} />
      <PageTransition className="pt-20 pb-0">
      {/* Hero */}
      <section className="hero-viewport relative overflow-hidden bg-[#f5f0e6]">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 360, position: "top-left", opacity: 0.14 },
          { color: "#0c716b", size: 360, position: "bottom-right", opacity: 0.14 }
        ]} />
        <FloatingIcons icons={["Blocks", "Zap", "Code2"]} count={4} heroMode={true} />

        <div className="page-shell hero-viewport-inner relative z-10 grid items-center gap-10 py-8 md:py-10">
          <SectionReveal className="max-w-3xl">
            <nav className="mb-6 flex items-center gap-2 text-sm text-brand-navy/55">
              <Link href="/" className="hover:text-brand-teal">Home</Link>
              <span>/</span>
              <Link href="/integrations" className="hover:text-brand-teal">Integrations</Link>
              <span>/</span>
              <span className="text-brand-navy/75">{data.name}</span>
            </nav>

            <div className="mb-5 inline-flex rounded-full bg-brand-orange/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-orange">
              {data.category}
            </div>
            <h1 className="text-[clamp(2.25rem,1.6rem+2.2vw,4.5rem)] font-bold leading-[0.98] text-brand-navy">
              Connect {data.name}
              <br />
              with KIDUART
              <br />
              without extra friction
            </h1>
            <p className="mt-6 max-w-lg text-[clamp(1rem,0.96rem+0.2vw,1.08rem)] leading-7 text-brand-navy/65">
              {data.description}
            </p>
            <button className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal">
              Connect Integration <ArrowRight className="w-5 h-5" />
            </button>
          </SectionReveal>

          {/* <SectionReveal delay={0.08} className="relative">
            <div className="relative mx-auto w-full max-w-4xl overflow-hidden rounded-[2rem] border border-brand-navy/10 bg-white shadow-[0_28px_70px_rgba(0,48,73,0.14)]">
              <div className="grid gap-4 p-5 md:grid-cols-[0.9fr_1.1fr] md:p-6">
                <div className="rounded-[1.6rem] bg-[linear-gradient(180deg,#ffffff,#f5f8ff)] p-6">
                  <div className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl ${data.bg}`}>
                    <Icon className={`h-8 w-8 ${data.color}`} />
                  </div>
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-brand-navy/45">How it connects</div>
                  <h2 className="mt-3 text-2xl font-bold text-brand-navy">{data.name}</h2>
                  <p className="mt-3 text-sm leading-7 text-brand-navy/65">
                    Designed to keep student data, assignments, attendance, and workflows aligned between both systems.
                  </p>
                  <div className="mt-5 rounded-[1.2rem] bg-brand-navy px-4 py-4 text-white">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">Best for</div>
                    <div className="mt-2 text-sm leading-6 text-white/85">{data.requirements[0]}</div>
                  </div>
                </div>

                <div className="space-y-3 rounded-[1.6rem] bg-brand-beige/35 p-5">
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-brand-teal">What you get</div>
                  {data.benefits.slice(0, 4).map((benefit: string) => (
                    <div key={benefit} className="rounded-2xl border border-brand-navy/6 bg-white px-4 py-4 shadow-sm">
                      <div className="flex items-start gap-3">
                        <CheckCircle className={`mt-0.5 h-5 w-5 shrink-0 ${data.color}`} />
                        <span className="text-sm leading-6 text-brand-navy/76">{benefit}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </SectionReveal> */}
        </div>
      </section>

      {/* Benefits */}
      <section className="section-space bg-brand-beige/30 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["CheckCircle2", "Star", "Lightbulb"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="mb-12 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">Key Benefits</h2>
            <p className="text-lg text-brand-navy/70">What you can achieve with KIDUART and {data.name}.</p>
          </SectionReveal>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.benefits.map((benefit: string, idx: number) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <div className="bg-white rounded-2xl p-6 shadow-sm border border-brand-navy/5 h-full">
                  <CheckCircle className={`w-8 h-8 ${data.color} mb-4`} />
                  <p className="font-medium text-brand-navy">{benefit}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Setup & Requirements */}
      <section className="section-space bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <SectionReveal>
                <h2 className="text-3xl font-bold text-brand-navy mb-8">Step-by-step Setup</h2>
                <div className="space-y-8">
                  {data.steps.map((step: string, idx: number) => (
                    <div key={idx} className="flex gap-4">
                      <div className={`w-10 h-10 rounded-full ${data.bg} ${data.color} flex items-center justify-center font-bold flex-shrink-0 text-lg`}>
                        {idx + 1}
                      </div>
                      <p className="text-lg text-brand-navy/80 pt-1">{step}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>
            </div>
            
            <div>
              <SectionReveal delay={0.2} className="bg-brand-navy/5 rounded-3xl p-8 border border-brand-navy/10 sticky top-32">
                <h3 className="text-xl font-bold text-brand-navy mb-6">Requirements</h3>
                <ul className="space-y-4">
                  {data.requirements.map((req: string, idx: number) => (
                    <li key={idx} className="flex gap-3">
                      <Check className="w-5 h-5 text-brand-teal flex-shrink-0 mt-0.5" />
                      <span className="text-brand-navy/80">{req}</span>
                    </li>
                  ))}
                </ul>
              </SectionReveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-space bg-brand-beige/20 border-t border-brand-navy/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold text-brand-navy mb-4">Frequently Asked Questions</h2>
          </SectionReveal>
          
          <div className="space-y-4">
            {data.faqs.map((faq: any, idx: number) => (
              <SectionReveal key={idx} delay={idx * 0.1}>
                <div 
                  className={`bg-white rounded-2xl p-6 shadow-sm border border-brand-navy/5 cursor-pointer transition-all ${openFaq === idx ? 'ring-2 ring-brand-teal' : 'hover:border-brand-navy/20'}`}
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                >
                  <div className="flex justify-between items-center gap-4">
                    <h3 className="text-lg font-bold text-brand-navy">{faq.q}</h3>
                    <ChevronDown className={`w-5 h-5 text-brand-navy/50 transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                  {openFaq === idx && (
                    <p className="text-brand-navy/70 mt-4 text-lg leading-relaxed border-t border-brand-navy/5 pt-4">
                      {faq.a}
                    </p>
                  )}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaSection title="Ready to Connect?" subtitle="Start your integration with a free demo." />
    </PageTransition>
    </>
  );
}
