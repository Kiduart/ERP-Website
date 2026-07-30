import Head from "next/head";
import { useState } from "react";
import { Link } from "wouter";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { buildFaqPageSchema } from "@/lib/seoSchemas";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { ProductIcon } from "@/components/product/ProductIcon";
import { StatChip } from "@/components/product/ProductPrimitives";
import { SITE_FAQ_GROUPS, SITE_FAQ_SCHEMA_DATA } from "@/data/siteFaqs";
import { MATRIX_TOTALS } from "@/data/featureMatrix";

/** Kept exported for anything that wants the flat question set. */
export const faqData = SITE_FAQ_SCHEMA_DATA;

const totalQuestions = SITE_FAQ_GROUPS.reduce((sum, group) => sum + group.items.length, 0);

export default function FAQ() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <PageTransition className="pt-20 pb-0">
      <Head>
        <title>School ERP FAQ — Modules, Pricing, Security & Integrations | KIDUART</title>
        <meta
          name="description"
          content="Straight answers about KIDUART school ERP: what the 16 module areas and 90 modules cover, how per-student pricing works, which integrations are live, how student data is protected, and what we have not built yet."
        />
        <link rel="canonical" href="https://www.kiduart.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="School ERP FAQ — Modules, Pricing, Security & Integrations | KIDUART" />
        <meta
          property="og:description"
          content="Answers about modules, role panels, pricing, onboarding, security and integrations for KIDUART school ERP — including what is still on the roadmap."
        />
        <meta property="og:url" content="https://www.kiduart.com/faq" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SchemaMarkup data={buildFaqPageSchema(SITE_FAQ_SCHEMA_DATA)} />

      <section className="section-space border-b border-brand-navy/5 bg-brand-beige/30">
        <div className="mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
          <SectionReveal>
            <div className="section-kicker">{totalQuestions} questions, answered directly</div>
            <h1 className="mt-6 text-4xl font-bold text-brand-navy md:text-5xl lg:text-6xl">
              Frequently asked questions
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-brand-navy/[0.72]">
              What the modules cover, how pricing is calculated, what protects student data, and which integrations
              are actually live. Where something is not built yet, the answer says so.
            </p>
          </SectionReveal>

          <SectionReveal delay={0.1} className="mx-auto mt-12 grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            <StatChip value={MATRIX_TOTALS.categories} label="Module areas" />
            <StatChip value={MATRIX_TOTALS.modules} label="Modules" />
            <StatChip value={MATRIX_TOTALS.features.toLocaleString("en-IN")} label="Features" />
            <StatChip value="10" label="Role panels" />
          </SectionReveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] lg:gap-16 lg:px-8">
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-brand-navy">Jump to a topic</p>
            <nav aria-label="FAQ topics" className="mt-4">
              <ul className="flex gap-2 overflow-x-auto pb-2 lg:flex-col lg:space-y-1.5 lg:overflow-visible lg:pb-0">
                {SITE_FAQ_GROUPS.map((group) => (
                  <li key={group.id} className="shrink-0 lg:shrink">
                    <a
                      href={`#faq-${group.id}`}
                      className="flex items-center gap-2.5 rounded-2xl border border-brand-navy/[0.1] bg-white px-4 py-2.5 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal/40 hover:text-brand-teal"
                    >
                      <ProductIcon name={group.icon} className="h-4 w-4 text-brand-teal" />
                      <span className="whitespace-nowrap lg:whitespace-normal">{group.title}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-8 hidden rounded-2xl border border-brand-navy/[0.1] bg-brand-beige/25 p-5 lg:block">
              <p className="text-sm leading-7 text-brand-navy/[0.78]">
                Looking for the full capability list instead?
              </p>
              <Link
                href="/features"
                className="mt-3 inline-flex text-sm font-bold text-brand-navy underline underline-offset-4 hover:text-brand-teal"
              >
                Browse all {MATRIX_TOTALS.categories} module areas
              </Link>
            </div>
          </aside>

          <div className="space-y-14">
            {SITE_FAQ_GROUPS.map((group) => (
              <section key={group.id} id={`faq-${group.id}`} className="scroll-mt-28">
                <SectionReveal className="mb-6 flex items-start gap-4 border-b border-brand-navy/[0.08] pb-5">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-navy text-brand-beige">
                    <ProductIcon name={group.icon} className="h-6 w-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-brand-navy">{group.title}</h2>
                    <p className="mt-1.5 text-sm leading-7 text-brand-navy/[0.74]">{group.blurb}</p>
                  </div>
                </SectionReveal>

                <div className="space-y-3">
                  {group.items.map((faq, idx) => (
                    <SectionReveal key={faq.q} delay={Math.min(idx, 4) * 0.04}>
                      <details className="group rounded-2xl border border-brand-navy/[0.1] bg-white transition-colors open:border-brand-teal/40 open:bg-brand-teal/[0.04]">
                        <summary className="flex cursor-pointer items-center justify-between gap-6 px-6 py-5 text-left marker:content-none">
                          <span className="text-lg font-bold text-brand-navy">{faq.q}</span>
                          <ChevronDown
                            className="h-5 w-5 shrink-0 text-brand-teal transition-transform duration-300 group-open:rotate-180"
                            aria-hidden="true"
                          />
                        </summary>
                        <p className="px-6 pb-5 text-base leading-8 text-brand-navy/[0.78]">{faq.a}</p>
                      </details>
                    </SectionReveal>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-brand-navy/5 bg-brand-beige/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <SectionReveal className="rounded-3xl border border-brand-navy/10 bg-white p-8 shadow-xl shadow-brand-navy/5 md:p-12">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-orange/10">
                <MessageCircleQuestion className="h-6 w-6 text-brand-orange" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-navy">Still have a question?</h2>
                <p className="text-brand-navy/[0.72]">Ask us directly. Our team will respond as quickly as possible.</p>
              </div>
            </div>

            {formSubmitted ? (
              <div className="rounded-xl border border-brand-teal/30 bg-brand-teal/10 p-6 text-center text-lg font-medium text-brand-teal">
                Received. We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div>
                    <label htmlFor="faq-name" className="mb-2 block text-sm font-medium text-brand-navy">
                      Name
                    </label>
                    <input
                      id="faq-name"
                      required
                      type="text"
                      className="field-surface w-full rounded-xl border border-brand-navy/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="faq-email" className="mb-2 block text-sm font-medium text-brand-navy">
                      Email
                    </label>
                    <input
                      id="faq-email"
                      required
                      type="email"
                      className="field-surface w-full rounded-xl border border-brand-navy/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                      placeholder="you@school.edu"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="faq-question" className="mb-2 block text-sm font-medium text-brand-navy">
                    Question
                  </label>
                  <textarea
                    id="faq-question"
                    required
                    rows={4}
                    className="field-surface w-full resize-none rounded-xl border border-brand-navy/20 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal"
                    placeholder="Ask about a module, a role panel, pricing or an integration"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-colors hover:bg-brand-teal"
                >
                  Send your question
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </section>

      <CtaSection
        title="Ready to see KIDUART in action?"
        subtitle="Book a free demo and we will walk through the modules and panels most relevant to your school — and answer the questions this page did not cover."
      />
    </PageTransition>
  );
}
