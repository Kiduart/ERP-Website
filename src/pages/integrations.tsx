import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { CircleShowcaseHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { BookOpen, MessageSquare, CreditCard, PieChart, Code2, Blocks, Zap } from "lucide-react";
import { Link } from "wouter";

export default function Integrations() {
  const categories = [
    {
      title: "Learning Systems",
      icon: BookOpen,
      color: "text-brand-teal",
      bg: "bg-brand-teal/10",
      integrations: [
        { name: "Moodle", desc: "Sync courses, grades, and assignments.", logo: "M", slug: "moodle" },
        { name: "Google Classroom", desc: "Import classroom rosters and sync grades.", logo: "G", slug: "google-classroom" },
        { name: "Canvas LMS", desc: "Two-way sync for seamless learning management.", logo: "C", slug: "canvas" }
      ]
    },
    {
      title: "Communication Tools",
      icon: MessageSquare,
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      integrations: [
        { name: "Zoom", desc: "Auto-generate meeting links for classes.", logo: "Z", slug: "zoom" },
        { name: "Microsoft Teams", desc: "Create class teams and channels automatically.", logo: "T", slug: "microsoft-teams" }
      ]
    },
    {
      title: "Payment Systems",
      icon: CreditCard,
      color: "text-brand-yellow",
      bg: "bg-brand-yellow/20",
      integrations: [
        { name: "Stripe", desc: "Accept global credit card payments securely.", logo: "S", slug: "stripe" },
        { name: "PayPal", desc: "Easy fee collection and recurring payments.", logo: "P", slug: "paypal" }
      ]
    },
    {
      title: "Analytics Platforms",
      icon: PieChart,
      color: "text-brand-navy",
      bg: "bg-brand-navy/10",
      integrations: [
        { name: "Google Analytics", desc: "Track parent portal engagement.", logo: "G", slug: "google-analytics" }
      ]
    }
  ];

  return (
    <PageTransition className="pt-20 pb-0 tooo">
      <CircleShowcaseHero
        eyebrow="School ERP integrations"
        title="Connect Your School Tools"
        subtitle="KIDUART plays nicely with the software you already use. Sync your data across platforms to create a unified ecosystem."
        image="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?auto=format&fit=crop&q=80"
        actions={(
          <>
            <Link
              href="/contact"
              className="rounded-full bg-brand-orange px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-navy"
            >
              Request Integration Help
            </Link>
            <Link
              href="/integrations/api-docs"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/12 bg-white px-7 py-3.5 text-sm font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              View API Docs
            </Link>
          </>
        )}
      />

      <section className="py-24 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["CreditCard", "PieChart", "MessageSquare"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="space-y-24">
            {categories.map((category, idx) => (
              <div key={idx}>
                <SectionReveal className="flex items-center gap-4 mb-8 border-b border-brand-navy/5 pb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${category.bg}`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                  </div>
                  <h2 className="text-2xl font-bold text-brand-navy">{category.title}</h2>
                </SectionReveal>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.integrations.map((integration, i) => (
                    <SectionReveal key={i} delay={i * 0.1} className="bg-white rounded-2xl p-6 shadow-lg shadow-brand-navy/5 border border-brand-navy/5 flex flex-col h-full hover:shadow-xl hover:border-brand-teal/30 transition-all group">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-14 h-14 rounded-xl bg-brand-navy/5 flex items-center justify-center text-2xl font-black text-brand-navy group-hover:scale-110 transition-transform ${category.color}`}>
                          {integration.logo}
                        </div>
                        <Link href={`/integrations/${integration.slug}`} className="px-4 py-1.5 bg-brand-beige/50 text-brand-navy text-xs font-bold rounded-full group-hover:bg-brand-teal group-hover:text-white transition-colors">
                          Connect
                        </Link>
                      </div>
                      <Link href={`/integrations/${integration.slug}`}>
                        <h3 className="text-xl font-bold text-brand-navy mb-2 group-hover:text-brand-teal transition-colors">{integration.name}</h3>
                      </Link>
                      <p className="text-brand-navy/70 text-sm flex-grow">{integration.desc}</p>
                    </SectionReveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Section */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 400, position: "top-left", opacity: 0.15 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Code2", "Zap", "Blocks"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <SectionReveal>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Powerful API for Custom Integrations</h2>
              <p className="text-lg mb-8 leading-relaxed" style={{ color: 'rgba(252,246,211,0.7)' }}>Need to connect internal tools or a niche platform? Our RESTful API and Webhooks allow your developer team to build custom integrations in days, not months.</p>
              <ul className="space-y-4 mb-8">
                {['RESTful architecture', 'Comprehensive documentation', 'Real-time webhooks', 'Dedicated developer support'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-brand-yellow" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="/integrations/api-docs" className="px-8 py-4 rounded-full bg-transparent border-2 border-white/30 text-white font-bold hover:bg-white/10 transition-all inline-flex items-center gap-2 w-fit">
                <Code2 className="w-5 h-5" /> View API Docs
              </Link>
            </SectionReveal>
            <SectionReveal delay={0.2} className="relative">
              <div className="absolute inset-0 bg-brand-teal/20 blur-3xl rounded-full" />
              <div className="relative bg-[#0d1117] rounded-2xl p-6 shadow-2xl border border-white/10 font-mono text-sm">
                <div className="flex gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="text-blue-400 mb-2">// Fetch student data</div>
                <div className="text-white"><span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> fetch(<span className="text-green-400">'https://api.kiduart.com/v1/students'</span>, {'{'}</div>
                <div className="text-white ml-4">method: <span className="text-green-400">'GET'</span>,</div>
                <div className="text-white ml-4">headers: {'{'}</div>
                <div className="text-white ml-8"><span className="text-green-400">'Authorization'</span>: <span className="text-green-400">'Bearer YOUR_API_KEY'</span></div>
                <div className="text-white ml-4">{'}'}</div>
                <div className="text-white">{'}'});</div>
                <div className="text-white mt-2"><span className="text-purple-400">const</span> data = <span className="text-purple-400">await</span> response.json();</div>
                <div className="text-white">console.log(data);</div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
