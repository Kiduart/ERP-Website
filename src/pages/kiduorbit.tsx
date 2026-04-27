import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Link } from "wouter";
import { 
  TrendingUp, FileText, Bell, MessageSquare, 
  AlertTriangle, Calendar, Heart, Lightbulb,
  Brain, ShieldCheck, CheckCircle2
} from "lucide-react";

export default function Kiduorbit() {
  return (
    <PageTransition className="pt-20 pb-0 tooo">
      {/* HERO */}
      <section className="bg-brand-navy py-20 lg:py-32 relative overflow-hidden min-h-screen flex items-center" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "top-left", opacity: 0.35 },
          { color: "#0c716b", size: 400, position: "bottom-right", opacity: 0.35 }
        ]} />
        <FloatingIcons icons={["Brain", "Atom", "Lightbulb"]} count={6} heroMode={true} />
        {/* Abstract AI visuals */}
        <div className="absolute inset-0">
          <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-brand-teal/30 rounded-full blur-[120px] mix-blend-screen" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-brand-orange/20 rounded-full blur-[100px] mix-blend-screen" />
          {/* Grid pattern overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center w-full">
          <SectionReveal>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-yellow/20 text-brand-yellow font-bold text-sm mb-8 border border-brand-yellow/30 uppercase tracking-widest">
              <Brain className="w-4 h-4" /> NEW · AI
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-teal via-white to-brand-orange">KIDUORBIT</span><br />
              The AI Brain of KIDUART ERP
            </h1>
            <p className="text-xl max-w-3xl mx-auto mb-10 leading-relaxed" style={{ color: 'rgba(252,246,211,0.8)' }}>
              KIDUORBIT brings next-generation artificial intelligence to school management, turning data into decisions and tasks into automation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="#explore" className="w-full sm:w-auto px-8 py-4 rounded-full bg-brand-teal text-white font-bold text-lg hover:bg-white hover:text-brand-navy shadow-xl shadow-brand-teal/20 transition-all duration-300">
                Explore KIDUORBIT
              </a>
              <Link href="/demo" className="w-full sm:w-auto px-8 py-4 rounded-full bg-transparent border border-white/30 text-white font-bold text-lg hover:bg-white/10 transition-all duration-300" style={{ color: '#fcf6d3' }}>
                Request Demo
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* WHAT IS KIDUORBIT */}
      <section id="explore" className="py-24 bg-white relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 300, position: "center-left", opacity: 0.15 },
          { color: "#0c716b", size: 300, position: "center-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Brain", "Lightbulb", "Star"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-6">Intelligence Embedded in Every Workflow</h2>
              <p className="text-lg text-brand-navy/70 mb-8">
                KIDUORBIT isn't just an add-on; it's the intelligent core of the entire KIDUART platform. It continuously analyzes school operations to proactively suggest improvements and handle repetitive tasks.
              </p>
              <ul className="space-y-4">
                {[
                  "Predictive analytics for student outcomes",
                  "Intelligent automation of administrative workflows",
                  "Smart notifications that eliminate alert fatigue",
                  "Natural language queries for instantly accessible data",
                  "AI-driven insights tailored for administrators, teachers, and parents"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-brand-teal" />
                    </div>
                    <span className="text-brand-navy font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>
            <SectionReveal delay={0.2} className="relative">
              <div className="aspect-square bg-gradient-to-tr from-brand-teal/10 to-brand-orange/10 rounded-full flex items-center justify-center relative shadow-inner border border-brand-navy/5">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80')] bg-cover bg-center rounded-full opacity-10 mix-blend-overlay"></div>
                <Brain className="w-32 h-32 text-brand-teal relative z-10 drop-shadow-2xl" />
                {/* Orbiting dots */}
                <div className="absolute w-full h-full animate-[spin_10s_linear_infinite]">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-brand-orange rounded-full shadow-lg shadow-brand-orange/50" />
                </div>
                <div className="absolute w-3/4 h-3/4 animate-[spin_15s_linear_infinite_reverse]">
                   <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-4 h-4 bg-brand-yellow rounded-full shadow-lg shadow-brand-yellow/50" />
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* KEY AI CAPABILITIES */}
      <section className="py-24 bg-brand-beige/30 border-y border-brand-navy/5 relative overflow-hidden">
        <BackgroundBlobs blobs={[
          { color: "#f77f00", size: 300, position: "top-right", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Atom", "Activity", "Star"]} count={4} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">Key AI Capabilities</h2>
            <p className="text-lg text-brand-navy/70 max-w-2xl mx-auto">Transforming every aspect of school management with machine intelligence.</p>
          </SectionReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: "Predictive Student Performance", icon: TrendingUp, desc: "Identify at-risk students early using AI models trained on attendance, grades, and engagement data." },
              { title: "Automated Report Generation", icon: FileText, desc: "Generates progress reports, attendance summaries, and financial reports automatically without manual entry." },
              { title: "Smart Notifications Engine", icon: Bell, desc: "AI decides when and what to notify — reducing notification fatigue while ensuring critical alerts are seen." },
              { title: "Natural Language Analytics", icon: MessageSquare, desc: "Ask 'How many students were absent last week?' and get instant answers with visual charts." },
              { title: "AI Fee Defaulter Prediction", icon: AlertTriangle, desc: "Predict which families may default on payments based on historical patterns and take proactive action." },
              { title: "Timetable Optimization", icon: Calendar, desc: "Suggests optimal timetables based on teacher availability, room capacity, and learning fatigue curves." },
              { title: "Parent Sentiment Analysis", icon: Heart, desc: "Analyze communication patterns and flag parental concerns or dissatisfaction before they escalate." },
              { title: "Adaptive Learning Insights", icon: Lightbulb, desc: "Track performance trends and suggest personalized learning paths or interventions for individual students." }
            ].map((cap, idx) => (
              <SectionReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-brand-navy/5 flex gap-6 hover:shadow-md hover:border-brand-teal/30 transition-all h-full">
                  <div className="w-12 h-12 rounded-xl bg-brand-teal/10 flex items-center justify-center flex-shrink-0">
                    <cap.icon className="w-6 h-6 text-brand-teal" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-brand-navy mb-2">{cap.title}</h3>
                    <p className="text-brand-navy/70 leading-relaxed">{cap.desc}</p>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-brand-navy mb-4">How KIDUORBIT Works</h2>
          </SectionReveal>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-brand-navy/5 -translate-y-1/2" />
            <div className="grid lg:grid-cols-4 gap-8">
              {[
                { step: "01", title: "Data Collection", desc: "Gathers data from all ERP modules continuously in real-time." },
                { step: "02", title: "AI Processing", desc: "Machine learning models recognize patterns, trends, and anomalies." },
                { step: "03", title: "Insights Delivered", desc: "The right person gets the right insight at the exact right time." },
                { step: "04", title: "Actions Automated", desc: "Routine decisions handled automatically, exceptions flagged for human review." }
              ].map((step, idx) => (
                <SectionReveal key={idx} delay={idx * 0.1} className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-brand-navy text-white font-bold text-xl flex items-center justify-center mb-6 shadow-xl border-4 border-white">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-brand-navy mb-3">{step.title}</h3>
                  <p className="text-brand-navy/70">{step.desc}</p>
                </SectionReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="py-24 bg-brand-navy text-white relative overflow-hidden" style={{ color: '#fcf6d3' }}>
        <BackgroundBlobs blobs={[
          { color: "#fcbf49", size: 400, position: "bottom-left", opacity: 0.15 }
        ]} />
        <FloatingIcons icons={["Brain", "Atom"]} count={4} />
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">The AI Advantage</h2>
          </SectionReveal>
          
          <SectionReveal>
            <div className="overflow-x-auto rounded-2xl border border-white/10 shadow-2xl">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="p-6 bg-white/5 font-bold text-lg border-b border-white/10 w-1/3">Feature</th>
                    <th className="p-6 bg-white/5 font-bold text-lg border-b border-white/10 w-1/3">Traditional ERP</th>
                    <th className="p-6 bg-brand-teal/20 text-brand-teal font-bold text-lg border-b border-white/10 w-1/3">KIDUART + KIDUORBIT</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10">
                  {[
                    { feat: "Reports", trad: "Manual generation", new: "AI automated reports" },
                    { feat: "Alerts", trad: "Rule-based only", new: "Intelligent AI alerts" },
                    { feat: "Analytics", trad: "Static dashboards", new: "Predictive insights" },
                    { feat: "Data queries", trad: "Requires IT support", new: "Natural language queries" },
                    { feat: "Risk detection", trad: "None", new: "AI-powered early warnings" }
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white/5" : ""}>
                      <td className="p-6 font-medium">{row.feat}</td>
                      <td className="p-6" style={{ color: 'rgba(252,246,211,0.7)' }}>{row.trad}</td>
                      <td className="p-6 bg-brand-teal/10 font-medium flex items-center gap-2" style={{ color: '#fcf6d3' }}>
                        <CheckCircle2 className="w-5 h-5 text-brand-teal" /> {row.new}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-16 bg-brand-beige/30">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="flex flex-wrap justify-center gap-6 lg:gap-12">
            {[
              "Modern AI/ML Stack", 
              "Data Privacy Compliant", 
              "School Data Never Shared", 
              "Continuously Improving"
            ].map((badge, idx) => (
              <div key={idx} className="flex items-center gap-3 px-6 py-3 bg-white rounded-full border border-brand-navy/10 shadow-sm">
                <ShieldCheck className="w-6 h-6 text-brand-teal" />
                <span className="font-bold text-brand-navy">{badge}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection 
        title="Experience the Future of School Management" 
        subtitle="See how KIDUORBIT transforms raw school data into actionable insights." 
      />
    </PageTransition>
  );
}
