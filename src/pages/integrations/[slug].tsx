import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { 
  Monitor, Video, CreditCard, BookOpen, DollarSign, BarChart2, LayoutDashboard, 
  CheckCircle, ArrowLeft, ArrowRight, Check, ChevronDown
} from "lucide-react";
import { useState } from "react";

const integrationsData: Record<string, any> = {
  "google-classroom": { name: "Google Classroom", icon: Monitor, color: "text-[#4285F4]", bg: "bg-[#4285F4]/10", category: "Learning Systems", description: "Sync classes, assignments, and grades between KIDUART and Google Classroom automatically.", benefits: ["Auto-sync student rosters", "Push assignments from KIDUART to Classroom", "Import grades back to KIDUART gradebook", "Single sign-on with Google accounts"], steps: ["Connect your Google Workspace account in Settings > Integrations", "Authorize KIDUART to access Classroom data", "Select which classes to sync", "Configure sync frequency (real-time or scheduled)", "Test the connection and verify data flow"], requirements: ["Google Workspace for Education account", "KIDUART Professional plan or higher", "Admin privileges in both platforms"], faqs: [{ q: "How often does sync happen?", a: "Real-time for grade changes, every 6 hours for roster updates." }, { q: "Can students use Google login?", a: "Yes, SSO with Google accounts is supported." }] },
  "zoom": { name: "Zoom", icon: Video, color: "text-[#2D8CFF]", bg: "bg-[#2D8CFF]/10", category: "Communication Tools", description: "Launch Zoom classes directly from KIDUART timetable and automatically record attendance.", benefits: ["One-click class launch from timetable", "Auto attendance tracking for virtual classes", "Meeting recordings stored in KIDUART", "Parent notifications for online class schedules"], steps: ["Go to Settings > Integrations > Zoom", "Authorize with your Zoom account", "Enable auto-attendance for online classes", "Configure notification settings", "Test by scheduling a virtual class"], requirements: ["Zoom Pro or higher account", "KIDUART Professional plan"], faqs: [{ q: "Does it work for parent meetings?", a: "Yes, you can schedule parent-teacher meetings via Zoom." }, { q: "Are recordings stored?", a: "Yes, recordings are linked to class records in KIDUART." }] },
  "stripe": { name: "Stripe", icon: CreditCard, color: "text-[#6772E5]", bg: "bg-[#6772E5]/10", category: "Payment Systems", description: "Accept online fee payments via Stripe with automatic reconciliation in KIDUART's fee module.", benefits: ["Accept cards, bank transfers, and local payment methods", "Automatic payment reconciliation", "Instant parent payment confirmations", "Automated receipt generation"], steps: ["Navigate to Settings > Payments > Stripe", "Enter your Stripe API keys", "Configure accepted payment methods", "Set up webhook for real-time payment updates", "Test with a Stripe test payment"], requirements: ["Stripe account (free to create)", "KIDUART any paid plan"], faqs: [{ q: "Which currencies are supported?", a: "All currencies supported by Stripe, 135+ currencies." }, { q: "Are there transaction fees?", a: "Standard Stripe fees apply (2.9% + 30¢ per transaction)." }] },
  "moodle": { name: "Moodle", icon: BookOpen, color: "text-[#F98012]", bg: "bg-[#F98012]/10", category: "Learning Systems", description: "Sync student enrollment, grades, and course data between KIDUART and your Moodle LMS.", benefits: ["Auto student enrollment in Moodle courses", "Grade import/export between systems", "Single student profile across both platforms", "Attendance data shared from KIDUART"], steps: ["Install KIDUART Moodle Plugin from your Moodle admin panel", "Generate API token in KIDUART Settings", "Configure Moodle URL in KIDUART", "Map course categories to KIDUART subjects", "Run initial sync"], requirements: ["Moodle 3.9 or higher", "KIDUART Professional plan", "Moodle admin access"], faqs: [{ q: "Does it support Moodle Cloud?", a: "Yes, both Moodle Self-Hosted and Moodle Cloud are supported." }] },
  "microsoft-teams": { name: "Microsoft Teams", icon: Monitor, color: "text-[#6264A7]", bg: "bg-[#6264A7]/10", category: "Communication Tools", description: "Connect KIDUART with Microsoft Teams for Education to enable virtual classes and communication.", benefits: ["Launch Teams meetings from KIDUART timetable", "Share announcements to Teams channels", "Sync calendar events", "Track virtual attendance"], steps: ["Sign in with Microsoft 365 admin account", "Grant KIDUART Teams permissions", "Configure class team creation settings", "Enable calendar sync", "Test virtual class creation"], requirements: ["Microsoft 365 Education subscription", "KIDUART Professional plan"], faqs: [{ q: "Can teachers manage Teams from KIDUART?", a: "Yes, class teams are created automatically when subjects are set up in KIDUART." }] },
  "paypal": { name: "PayPal", icon: DollarSign, color: "text-[#003087]", bg: "bg-[#003087]/10", category: "Payment Systems", description: "Enable parents to pay school fees via PayPal directly from the parent portal.", benefits: ["Familiar PayPal checkout for parents", "PayPal Credit and Pay Later options", "Automatic payment verification", "Multi-currency support"], steps: ["Go to Settings > Payments > PayPal", "Connect your PayPal Business account", "Enable PayPal in parent portal payment options", "Test a payment in sandbox mode", "Go live"], requirements: ["PayPal Business account", "KIDUART any paid plan"], faqs: [{ q: "Can parents use PayPal wallet balance?", a: "Yes, any PayPal payment method is accepted." }] },
  "google-analytics": { name: "Google Analytics", icon: BarChart2, color: "text-[#F9AB00]", bg: "bg-[#F9AB00]/10", category: "Analytics Platforms", description: "Track website and portal user behavior with Google Analytics to improve engagement.", benefits: ["Track parent portal usage patterns", "Monitor feature adoption rates", "Understand user journeys", "Identify drop-off points in enrollment"], steps: ["Go to Settings > Analytics > Google Analytics", "Enter your GA4 Measurement ID", "Configure tracking events", "Verify tracking in GA4 real-time view"], requirements: ["Google Analytics 4 account (free)", "KIDUART any plan"], faqs: [{ q: "Is student data shared with Google?", a: "No, only anonymous usage metrics are tracked. No personally identifiable information is sent." }] },
  "canvas": { name: "Canvas LMS", icon: LayoutDashboard, color: "text-[#E66000]", bg: "bg-[#E66000]/10", category: "Learning Systems", description: "Integrate KIDUART student data with Canvas LMS for a unified academic management experience.", benefits: ["Auto-provision students in Canvas", "Grade passback from Canvas to KIDUART", "Shared calendar and assignments", "SSO between platforms"], steps: ["Generate Canvas API token in your Canvas admin", "Enter token in KIDUART Settings > LMS > Canvas", "Configure user provisioning rules", "Map KIDUART grades to Canvas gradebook", "Test student login"], requirements: ["Canvas LMS instance", "Canvas admin access", "KIDUART Professional plan"], faqs: [{ q: "Does it support Canvas Free for Teachers?", a: "Full integration requires Canvas paid plans. Basic grade import works with free accounts." }] }
};

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
                  <div className="text-sm font-bold uppercase tracking-[0.22em] text-brand-navy/45">Integration preview</div>
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
      <section className="py-24 bg-brand-beige/30 relative overflow-hidden">
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
      <section className="py-24 bg-white">
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
      <section className="py-24 bg-brand-beige/20 border-t border-brand-navy/5">
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
  );
}
