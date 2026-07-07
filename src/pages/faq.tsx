import Head from "next/head";
import { useState } from "react";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { buildFaqPageSchema } from "@/lib/seoSchemas";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { pricingFaqs } from "@/data/pricingFaqs";

export const faqData = {
  "Pricing & Plans": pricingFaqs,
  "Onboarding & Setup": [
    { q: "How long does implementation take?", a: "Implementation timelines depend on your current data quality, process complexity, and training needs. We follow a structured onboarding plan and keep the rollout practical for school teams." },
    { q: "Do you migrate existing data?", a: "Yes. We handle the full data migration from your current system, whether that is spreadsheets, another ERP or a mix of both. Our team will map your existing data structure before we start." },
    { q: "Is training included?", a: "Yes. Live training sessions for all staff roles are included as part of onboarding. We train admins, teachers, finance staff and parent portal users separately so each group gets exactly what they need." },
    { q: "What support is available during setup?", a: "A dedicated onboarding specialist supports your team through setup, migration, and training milestones. After onboarding, your account manager handles follow-up support." }
  ],
  "Features & Modules": [
    { q: "Can I customize the platform?", a: "Yes, extensive customization for forms, reports, and workflows." },
    { q: "Is there a mobile app?", a: "A mobile-optimised web experience works on any phone browser today. The native parent app is in development and will be announced when released." },
    { q: "Does it support multiple campuses?", a: "Yes, multi-campus management in Professional and Enterprise plans." },
    { q: "Can parents access the platform?", a: "Yes. Parents can use the dedicated parent portal on web today. Native app access is in development." }
  ],
  "Security & Privacy": [
    { q: "How is student data protected?", a: "KIDUART uses encryption controls, role-based access, MFA support, audit logging, and dedicated data isolation per school." },
    { q: "Is KIDUART formally certified under GDPR or ISO?", a: "We do not claim formal GDPR or ISO certification at this time. Our current security messaging is based on implemented product controls." },
    { q: "Who can access student data?", a: "Only authorized staff with role-specific permissions." },
    { q: "Where is data hosted?", a: "Secure cloud infrastructure with controlled access and school-level data separation." }
  ],
  "Technical & Integrations": [
    { q: "What integrations are available?", a: "Google Classroom, Moodle, Canvas, Zoom, Stripe, and many more." },
    { q: "Is there an API?", a: "Yes, REST API with full documentation at /integrations/api-docs." },
    { q: "What browsers are supported?", a: "All modern browsers (Chrome, Firefox, Safari, Edge)." },
    { q: "Is the platform offline-capable?", a: "Core features work offline, syncing when connection restores." }
  ],
  "Support": [
    { q: "What support channels are available?", a: "Email, live chat, phone, and dedicated account managers." },
    { q: "What are support hours?", a: "Support is available through email and guided support channels. Final support windows are shared with each school during onboarding." },
    { q: "How do I submit a bug report?", a: "Through the help center at /help or email support@kiduart.com." }
  ]
};

const categories = Object.keys(faqData) as Array<keyof typeof faqData>;

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState<keyof typeof faqData>("Pricing & Plans");
  const [openItems, setOpenItems] = useState<number[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const toggleItem = (index: number) => {
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter(i => i !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
  };

  return (
    <PageTransition className="pt-20 pb-0">
      <Head>
        <title>School ERP FAQ | Common Questions About KIDUART</title>
        <meta
          name="description"
          content="Answers to the most common questions about KIDUART school ERP: pricing, onboarding, features, security, integrations and support. Cannot find your answer? Ask us directly."
        />
        <link rel="canonical" href="https://www.kiduart.com/faq" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="School ERP FAQ | Common Questions About KIDUART" />
        <meta property="og:description" content="Answers to the most common questions about KIDUART school ERP: pricing, onboarding, features, security, integrations and support. Cannot find your answer? Ask us directly." />
        <meta property="og:url" content="https://www.kiduart.com/faq" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School ERP FAQ | Common Questions About KIDUART" />
        <meta name="twitter:description" content="Answers to the most common questions about KIDUART school ERP: pricing, onboarding, features, security, integrations and support. Cannot find your answer? Ask us directly." />
      </Head>
      <SchemaMarkup data={buildFaqPageSchema(faqData)} />
      <section className="section-space bg-brand-beige/30 border-b border-brand-navy/5">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-navy mb-6">
              Frequently asked questions
            </h1>
            <p className="text-xl text-brand-navy/70">
              Everything most schools want to know before making a decision. If your question is not here, ask us directly using the form at the bottom.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space-tight bg-white min-h-[600px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Categories */}
          <SectionReveal delay={0.1} className="mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActiveCategory(cat); setOpenItems([]); }}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === cat 
                      ? "bg-brand-navy text-white shadow-md" 
                      : "bg-brand-beige/20 text-brand-navy/70 hover:bg-brand-beige/50"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </SectionReveal>

          {/* FAQ Accordion */}
          <SectionReveal delay={0.2} className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqData[activeCategory].map((faq, idx) => {
                const isOpen = openItems.includes(idx);
                return (
                  <div 
                    key={idx} 
                    className={`border rounded-2xl transition-all duration-300 overflow-hidden ${isOpen ? 'border-brand-teal/30 bg-brand-teal/5' : 'border-brand-navy/10 bg-white hover:border-brand-navy/30'}`}
                  >
                    <button 
                      onClick={() => toggleItem(idx)}
                      className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                    >
                      <span className="text-lg font-bold text-brand-navy pr-8">{faq.q}</span>
                      <ChevronDown className={`w-6 h-6 text-brand-teal flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div 
                      className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                    >
                      <p className="text-brand-navy/70 text-lg leading-relaxed">{faq.a}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Ask a Question Form */}
      <section className="section-space bg-brand-beige/20 border-y border-brand-navy/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-brand-navy/5 border border-brand-navy/10">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 bg-brand-orange/10 rounded-full flex items-center justify-center">
                <MessageCircleQuestion className="w-6 h-6 text-brand-orange" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-brand-navy">Still have a question?</h2>
                <p className="text-brand-navy/70">Ask us directly. Our team will respond as quickly as possible.</p>
              </div>
            </div>

            {formSubmitted ? (
              <div className="bg-brand-teal/10 border border-brand-teal/30 text-brand-teal p-6 rounded-xl text-center font-medium text-lg">
                Received. We will get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">Name</label>
                    <input required type="text" className="field-surface w-full px-4 py-3 rounded-xl border border-brand-navy/20 focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-brand-navy mb-2">Email</label>
                    <input required type="email" className="field-surface w-full px-4 py-3 rounded-xl border border-brand-navy/20 focus:outline-none focus:ring-2 focus:ring-brand-teal" placeholder="john@school.edu" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-navy mb-2">Question</label>
                  <textarea required rows={4} className="field-surface w-full px-4 py-3 rounded-xl border border-brand-navy/20 focus:outline-none focus:ring-2 focus:ring-brand-teal resize-none" placeholder="How does the..." />
                </div>
                <button type="submit" className="w-full px-8 py-4 rounded-full bg-brand-navy text-white font-bold text-lg hover:bg-brand-teal transition-colors">
                  Send your question
                </button>
              </form>
            )}
          </SectionReveal>
        </div>
      </section>

      <CtaSection title="Ready to see KIDUART in action?" subtitle="Book a free demo and we will walk through the features and workflows most relevant to your school." />
    </PageTransition>
  );
}
