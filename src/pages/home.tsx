import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { SchemaMarkup } from "@/components/seo/SchemaMarkup";
import { pageSeo } from "@/lib/pageSeo";
import { softwareApplicationSchema } from "@/lib/seoSchemas";
import { Fragment } from "react";
import { Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { HomeCurveHero } from "@/components/ui/CustomHeroes";
import { ComingSoonBadge, ComingSoonContentMask } from "@/components/common/ComingSoonOverlay";
import { HOME_IMPACT_HIGHLIGHTS } from "@/lib/siteData";
import { CONTACT_PHONE_E164 } from "@/lib/contact";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import {
  ArrowRight,
  Bell,
  Brain,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
  Building2,
  FileText,
  MessageSquare,
  PieChart,
  ShieldCheck,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const modules = [
  {
    slug: "student-management",
    icon: Users,
    title: "Student Management", // CONTENT: Simplified module name for clearer UX copy
    desc: "Every student's records in one place. Profiles, documents, parent contacts and class history are all accessible to the right people without anyone hunting through files or calling another department.", // CONTENT: Replaced module description with audit-approved copy
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
  },
  {
    slug: "fee-management",
    icon: CreditCard,
    title: "Fee Management",
    desc: "Automated invoices, due-date reminders, payment tracking, and receipts. Finance teams close the month without chasing parents on WhatsApp.", // CONTENT: Added practical finance outcome
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    slug: "attendance",
    icon: CalendarCheck,
    title: "Attendance Tracking",
    desc: "Teachers mark attendance in seconds. Irregular patterns get flagged before they become a problem. Parents get notified the same day.", // CONTENT: Focused on speed and intervention value
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
  },
  {
    slug: "reports",
    icon: FileText,
    title: "Exam & Report Cards",
    desc: "Build exam schedules, record marks, and publish report cards without a single spreadsheet. Academic data flows straight from the system.", // CONTENT: Emphasized spreadsheet-free reporting
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/20",
  },
  {
    slug: "communication",
    icon: MessageSquare,
    title: "Parent Communication",
    desc: "Fee reminders, attendance alerts, exam notices and school circulars sent from one place with delivery tracking built in.", // CONTENT: Removed em dash and matched audit copy
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
  },
  {
    slug: "reports",
    icon: PieChart,
    title: "Analytics Dashboard", // CONTENT: Tightened title language
    desc: "Admissions, collections, attendance trends, and academic performance in one view. Role-based access means every team sees what matters to them.", // CONTENT: Clarified role-based analytics benefit
    color: "text-brand-bronze",
    bg: "bg-brand-bronze/10",
  },
  {
    slug: "hr-payroll",
    icon: Users,
    title: "HR & Payroll",
    desc: "Manage staff records, leave approvals, payroll cycles, and performance notes from one HR workflow made for schools.",
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
  },
  {
    slug: "transport",
    icon: CalendarCheck,
    title: "Transport Management",
    desc: "Coordinate routes, drivers, vehicles, and maintenance with live transport visibility for parents and school operations teams.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    slug: "library",
    icon: FileText,
    title: "Library Operations",
    desc: "Track catalog, issue-return, fines, reservations, and member activity without manual registers.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
  },
];

const aiFeatures = [
  {
    icon: Brain,
    title: "Attendance Pattern Alerts", // CONTENT: Reframed AI capability in plain language
    desc: "When a student's attendance starts slipping below normal, the system surfaces it early, before a parent call is needed or a session is at risk.", // CONTENT: Added concrete early-warning scenario
  },
  {
    icon: Bell,
    title: "Fee Risk Detection", // CONTENT: Corrected phrasing and sharpened intent
    desc: "KIDUART identifies accounts showing signs of payment delay and queues them for follow-up, so your finance team focuses on the right ones first.", // CONTENT: Explained prioritization workflow
  },
  {
    icon: FileText,
    title: "Faster Report Card Generation", // CONTENT: Updated title to outcome-first wording
    desc: "Academic data flows directly into report card templates. Staff review instead of re-entering, and publishing takes minutes instead of days.", // CONTENT: Highlighted data flow and time savings
  },
  {
    icon: Sparkles,
    title: "Communication Drafts for Staff", // CONTENT: Clarified feature use case
    desc: "Drafting fee reminders, exam notices, and attendance circulars takes less effort when the system suggests the wording based on context.", // CONTENT: Tied AI writing help to routine communications
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Configure your school", // CONTENT: Updated onboarding step title per requested journey language
    desc: "Set up classes, sections, fee structures, academic sessions, staff roles, and access permissions. Our onboarding team works with you through every step.", // CONTENT: Added setup scope and support expectation
  },
  {
    step: "02",
    title: "Your team takes over", // CONTENT: Shifted step framing to post-setup adoption
    desc: "Admins, teachers, and finance staff each log into a dashboard built for their role. No one sees more than they need to, and no one has to be trained twice.", // CONTENT: Clarified role-scoped access and training efficiency
  },
  {
    step: "03",
    title: "Decisions get easier", // CONTENT: Rewrote step title to leadership outcome
    desc: "With live data on attendance, fees, and academic performance, school leadership can act on facts, not guesswork or end-of-term reports.", // CONTENT: Emphasized real-time decision quality
  },
];

const faqs = [
  {
    q: "What does your school ERP software manage?",
    a: "KIDUART covers the full lifecycle of school administration, from processing new admissions and maintaining student records to tracking daily attendance, managing fee collections, scheduling exams, generating report cards, and sending notices to parents. Everything runs from one dashboard, which means your admin team stops switching between spreadsheets, WhatsApp, and disconnected tools.",
  },
  {
    q: "Is this suitable for schools in India?",
    a: "Yes. KIDUART is designed for the Indian school context, including typical fee structures, academic session patterns, and how families expect updates. We are onboarding pilot schools in Uttar Pradesh and welcome demos from schools across India.",
  },
  {
    q: "How does AI help school management?",
    a: "The AI layer works on patterns in your own school data. It surfaces students with irregular attendance before the problem becomes serious, flags accounts at risk of fee delays so your finance team can act early, speeds up report card generation by pre-filling structured data, and suggests clearer wording for parent circulars.",
  },
  {
    q: "Can different staff have different access?",
    a: "Yes. KIDUART uses role-based access control. A class teacher sees attendance and gradebook data for their sections. A finance officer sees fee accounts and payment history. The principal sees the full school dashboard. Parents access only their child's profile.",
  },
];
// SEO-UPGRADE: Replaced FAQ answers with high-intent, India-specific operational copy

const comparisons = [
  {
    title: "Built for complete school operations",
    ours: "Admissions, fees, attendance, exams, reports, and communication in one connected workflow.",
    other: "Disconnected modules or manual spreadsheet-heavy processes.",
  },
  {
    title: "AI with practical school use cases",
    ours: "Attendance insights, fee alerts, report workflows, and communication support for real admin teams.",
    other: "Generic AI messaging without operational clarity.",
  },
  {
    title: "Role-based dashboards",
    ours: "Clear views for school leaders, teachers, office staff, and finance teams.",
    other: "One-size-fits-all screens that slow down daily work.",
  },
];

export default function Home() {
  return (
    <>
      <PageSeoHead {...pageSeo.home} />
      <SchemaMarkup
        type="Organization"
        data={{
          name: "KIDUART",
          url: "https://www.kiduart.com",
          logo: "https://www.kiduart.com/images/logo.png",
          description: "School ERP software for Indian schools",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Noida",
            addressRegion: "Uttar Pradesh",
            addressCountry: "IN",
          },
          contactPoint: {
            "@type": "ContactPoint",
            telephone: `+${CONTACT_PHONE_E164}`,
            contactType: "customer service",
            email: "support@kiduart.com",
            areaServed: "IN",
            availableLanguage: ["English", "Hindi"],
          },
        }}
      />
      <SchemaMarkup data={softwareApplicationSchema} />

      <PageTransition instant className="pt-0 pb-0">
        <HomeCurveHero
          title="School ERP software built around how Indian schools run"
          subtitle="One platform for admissions, fees, attendance, exams, and parent communication. No more switching between spreadsheets, WhatsApp, and paper registers."
          // SEO-UPGRADE: Strengthened hero subtitle with trust and workflow pain-point language
          image="/images/banner/home-hero.jpeg"
          actions={(
            <>
              <Link
                href="/demo"
                className="w-full sm:w-auto rounded-full bg-white px-8 py-4 text-center text-lg font-bold text-brand-navy shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-brand-beige"
              >
                Get Free Demo
              </Link>
              <Link
                href="/pricing"
                className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white/15"
              >
                Start Free Trial <ArrowRight className="h-5 w-5" />
              </Link>
            </>
          )}
        />

        <section className="section-space-tight relative overflow-hidden border-y border-brand-navy/5 bg-white">
          <BackgroundBlobs
            blobs={[
              { color: "hsl(var(--blob-yellow))", size: 300, position: "center-left", opacity: 0.15 },
              { color: "hsl(var(--blob-teal))", size: 300, position: "center-right", opacity: 0.15 },
            ]}
          />
          <FloatingIcons icons={["Calculator", "BarChart2"]} count={4} />
          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-12 max-w-3xl text-center">
              <div className="section-kicker">Built for daily school work</div>
              <h2 className="section-title mt-6 text-brand-navy">What changes when operations sit in one system</h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                These are the outcomes we design for — not deployment statistics. Book a demo to see how they map to your school.
              </p>
            </SectionReveal>
            <SectionReveal className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-6">
              {HOME_IMPACT_HIGHLIGHTS.map((stat) => (
                <div key={stat.label} className="flex flex-col rounded-3xl border border-brand-navy/10 bg-brand-beige/20 px-4 py-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal/80">{stat.area}</div>
                  <div className="stat-value mt-4 flex min-h-[2.75rem] items-center justify-center text-2xl font-extrabold leading-tight text-brand-navy md:min-h-[3.25rem] md:text-3xl">
                    {stat.headline}
                  </div>
                  <div className="mt-3 flex-1 text-sm font-medium leading-snug text-brand-navy/65">{stat.label}</div>
                </div>
              ))}
            </SectionReveal>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-beige/30">
          <BackgroundBlobs
            blobs={[
              { color: "hsl(var(--blob-orange))", size: 400, position: "top-right", opacity: 0.15 },
              { color: "hsl(var(--brand-navy))", size: 400, position: "bottom-left", opacity: 0.12 },
            ]}
          />
          <FloatingIcons icons={["Users", "Calendar", "CreditCard", "MessageSquare", "PieChart"]} count={5} />

          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-16 max-w-4xl text-center">
              <div className="section-kicker">Core ERP modules</div>
              <h2 className="section-title mt-6 text-brand-navy">Every school workflow in one connected system</h2>
              {/* SEO-UPGRADE: Simplified modules heading to core value proposition */}
              <p className="section-copy mt-4 text-brand-navy/70">
                From the first admission inquiry to the final exam report, each module is built around the tasks your admin team does every single day.
              </p>
            </SectionReveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {modules.map((feature, idx) => (
                <SectionReveal key={feature.title} delay={idx * 0.08}>
                  <Link
                    href={`/features/${feature.slug}`}
                    className="block bg-white rounded-2xl p-8 shadow-lg shadow-brand-navy/5 border border-brand-navy/5 hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300 group h-full cursor-pointer"
                  >
                    <div className={`w-14 h-14 rounded-xl ${feature.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                      <feature.icon className={`w-7 h-7 ${feature.color}`} />
                    </div>
                    <h3 className="text-[clamp(1.15rem,1rem+0.45vw,1.4rem)] font-bold text-brand-navy mb-3 group-hover:text-brand-teal transition-colors">{feature.title}</h3>
                    <p className="section-copy text-brand-navy/70">{feature.desc}</p>
                  </Link>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-brand-navy text-white" style={{ color: "rgb(var(--hero-foreground-rgb))" }}>
          <BackgroundBlobs
            blobs={[
              { color: "hsl(var(--blob-yellow))", size: 400, position: "top-left", opacity: 0.15 },
              { color: "hsl(var(--blob-teal))", size: 400, position: "bottom-right", opacity: 0.15 },
            ]}
          />
          <FloatingIcons icons={["Brain", "Atom", "Lightbulb"]} count={4} />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
            <div className="absolute top-[-10%] right-[-5%] w-96 h-96 rounded-full bg-brand-teal blur-[100px]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 rounded-full bg-brand-orange blur-[100px]" />
          </div>

          <div className="page-shell relative z-10">
            <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-brand-yellow font-semibold text-sm mb-6 border border-white/20">
                AI built for school workflows
              </div>
              <h2 className="section-title mb-4 text-brand-beige">Where AI actually helps your school staff</h2>
              <p className="section-copy" style={{ color: "rgb(var(--hero-muted-rgb) / 0.7)" }}>
                Not a chatbot. Not a gimmick. KIDUART's AI layer works on patterns in your own school data to surface things your team would otherwise miss.
              </p>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-6">
              {aiFeatures.map((item, idx) => (
                <SectionReveal
                  key={item.title}
                  delay={idx * 0.1}
                  className="flex gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-yellow/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-brand-yellow" />
                  </div>
                  <div>
                    <h3 className="text-[clamp(1.1rem,0.98rem+0.45vw,1.35rem)] font-bold mb-2 text-brand-beige">{item.title}</h3>
                    <p className="section-copy" style={{ color: "rgb(var(--hero-muted-rgb) / 0.7)" }}>{item.desc}</p>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="section-space relative overflow-hidden bg-white">
          <BackgroundBlobs
            blobs={[
              { color: "#0c716b", size: 400, position: "top-left", opacity: 0.15 },
              { color: "#fcbf49", size: 400, position: "bottom-right", opacity: 0.15 },
            ]}
          />
          <FloatingIcons icons={["CheckCircle2", "Users", "Star"]} count={4} />
          <div className="page-shell relative z-10">
            <SectionReveal className="text-center mb-16">
              <h2 className="section-title text-brand-navy mb-4">Smooth onboarding without disrupting school routines</h2>
              <p className="section-copy text-brand-navy/70 max-w-3xl mx-auto">
                We keep onboarding structured and practical, so your team can shift from setup to daily use with confidence.
              </p>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, idx) => (
                <SectionReveal key={item.step} delay={idx * 0.08} className="interactive-card rounded-3xl border border-brand-navy/10 bg-brand-beige/20 p-8">
                  <div className="text-sm font-bold tracking-[0.25em] text-brand-teal uppercase">{item.step}</div>
                  <h3 className="mt-4 text-[clamp(1.3rem,1.1rem+0.6vw,1.8rem)] font-bold text-brand-navy">{item.title}</h3>
                  <p className="section-copy mt-4 text-brand-navy/70">{item.desc}</p>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        {/* <section className="py-24 bg-brand-beige/20 border-y border-brand-navy/5 relative overflow-hidden">
          <BackgroundBlobs blobs={[{ color: "#f77f00", size: 320, position: "center-right", opacity: 0.14 }]} />
          <FloatingIcons icons={["LayoutDashboard", "BarChart2", "MonitorSmartphone"]} count={4} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-navy mb-4">Demo Screenshots</h2>
              <p className="text-lg text-brand-navy/70 max-w-3xl mx-auto">
                A quick preview of how the platform helps school teams work through dashboards, reports, and daily operational tasks.
              </p>
            </SectionReveal>

            <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <SectionReveal className="rounded-[2rem] border border-brand-navy/10 bg-brand-navy p-6 shadow-2xl">
                <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div>
                      <p className="text-sm uppercase tracking-[0.25em] text-brand-yellow">Admin Dashboard</p>
                      <h3 className="mt-2 text-2xl font-bold text-white">School overview at a glance</h3>
                    </div>
                    <div className="rounded-full bg-brand-teal/20 px-4 py-2 text-sm font-semibold text-brand-beige">Live Overview</div>
                  </div>
                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {[
                      { label: "Today's Attendance", value: "94.8%" },
                      { label: "Pending Fees", value: "128 Accounts" },
                      { label: "Upcoming Exams", value: "12 Scheduled" },
                    ].map((card) => (
                      <div key={card.label} className="rounded-2xl bg-white p-5 text-brand-navy">
                        <p className="text-sm text-brand-navy/55">{card.label}</p>
                        <p className="mt-3 text-2xl font-extrabold">{card.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="rounded-2xl bg-white/10 p-5">
                      <p className="text-sm text-white/60">Operational Snapshot</p>
                      <div className="mt-5 h-40 rounded-2xl bg-[linear-gradient(180deg,rgba(252,191,73,0.18),rgba(12,113,107,0.05))] p-4">
                        <div className="grid h-full grid-cols-6 items-end gap-2">
                          {[40, 68, 55, 82, 74, 92].map((value, idx) => (
                            <div key={idx} className="rounded-t-full bg-brand-yellow/90" style={{ height: `${value}%` }} />
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="rounded-2xl bg-white p-5 text-brand-navy">
                      <p className="text-sm text-brand-navy/55">Today's Priorities</p>
                      <div className="mt-4 space-y-3">
                        {["Admission follow-ups", "Fee reminder review", "Exam schedule approval", "Parent circular draft"].map((item) => (
                          <div key={item} className="flex items-center gap-3 rounded-xl bg-brand-beige/40 px-4 py-3">
                            <CheckCircle2 className="h-4 w-4 text-brand-teal" />
                            <span className="text-sm font-medium">{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </SectionReveal>

              <div className="grid gap-8">
                <SectionReveal className="rounded-[2rem] border border-brand-navy/10 bg-white p-7 shadow-lg">
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-teal">Finance View</p>
                  <h3 className="mt-3 text-2xl font-bold text-brand-navy">Fee collection status</h3>
                  <p className="mt-3 text-brand-navy/70">Track due fees, reminders, and collection progress without switching tools.</p>
                  <div className="mt-6 space-y-3">
                    {[
                      { label: "Collected", value: "78%" },
                      { label: "Due This Week", value: "54 Accounts" },
                      { label: "High-Risk Delays", value: "12 Alerts" },
                    ].map((row) => (
                      <div key={row.label} className="flex items-center justify-between rounded-2xl bg-brand-beige/20 px-4 py-4">
                        <span className="text-brand-navy/70">{row.label}</span>
                        <span className="font-bold text-brand-navy">{row.value}</span>
                      </div>
                    ))}
                  </div>
                </SectionReveal>

                <SectionReveal className="rounded-[2rem] border border-brand-navy/10 bg-white p-7 shadow-lg">
                  <p className="text-sm uppercase tracking-[0.25em] text-brand-orange">Teacher View</p>
                  <h3 className="mt-3 text-2xl font-bold text-brand-navy">Daily classroom workflow</h3>
                  <p className="mt-3 text-brand-navy/70">Manage attendance, class updates, and student performance from one clean interface.</p>
                  <div className="mt-6 rounded-2xl bg-brand-navy px-5 py-6 text-white">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-white/60">Class 8A</span>
                      <span className="text-sm text-brand-yellow">28 / 30 Present</span>
                    </div>
                    <div className="mt-4 grid gap-3">
                      {["Attendance marked", "Homework shared", "Parent note drafted"].map((item) => (
                        <div key={item} className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3">
                          <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section> */}

        <section className="section-space bg-white relative overflow-hidden">
          <BackgroundBlobs
            blobs={[
              { color: "#0c716b", size: 400, position: "top-left", opacity: 0.15 },
              { color: "#fcbf49", size: 400, position: "bottom-right", opacity: 0.15 },
            ]}
          />
          <FloatingIcons icons={["Heart", "Star", "Users"]} count={4} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionReveal className="text-center mb-10">
              <h2 className="text-4xl font-bold text-brand-navy mb-4">What school teams tell us</h2>
              <p className="mx-auto max-w-2xl text-brand-navy/70">
                Verified customer stories are on the way. In the meantime, these themes come up again and again when we speak with administrators, teachers, and finance staff during onboarding.
              </p>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: "theme-1",
                  title: "Admissions and daily operations",
                  label: "Common admin priorities",
                  lines: [
                    "Less time reconciling spreadsheets between the front office and accounts.",
                    "Attendance and notices handled from one place instead of three apps.",
                    "Staff spend fewer hours on follow-ups that should not need a phone call.",
                  ],
                },
                {
                  id: "theme-2",
                  title: "Finance and parent communication",
                  label: "What finance teams ask for",
                  lines: [
                    "Clearer view of who has paid, who is due, and which reminders went out.",
                    "Receipts and fee history parents can check without calling the school.",
                    "Month-end closing that does not depend on chasing WhatsApp screenshots.",
                  ],
                },
                {
                  id: "theme-3",
                  title: "Leadership and reporting",
                  label: "What principals want to see",
                  lines: [
                    "Exam and report card work that does not start from a blank Excel file.",
                    "Updates to families that match the channel the school already uses.",
                    "A single picture of attendance, fees, and academics before Monday morning meetings.",
                  ],
                },
              ].map((card, idx) => (
                <SectionReveal
                  key={card.id}
                  delay={idx * 0.08}
                  className="relative overflow-hidden rounded-2xl border border-brand-navy/10 bg-brand-beige/20 p-8"
                >
                  <ComingSoonBadge />

                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-brand-teal/20 bg-brand-teal/10 text-brand-teal">
                      <Building2 className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-bold text-brand-navy">{card.title}</div>
                      <div className="mt-1 text-sm font-semibold tracking-tight text-brand-teal/80">
                        {card.label}
                      </div>
                    </div>
                  </div>

                  <ComingSoonContentMask className="mt-5 space-y-2">
                    {card.lines.map((line) => (
                      <p key={line} className="text-brand-navy/70 leading-7 text-sm">
                        {line}
                      </p>
                    ))}
                  </ComingSoonContentMask>
                </SectionReveal>
              ))}
            </div>

            <SectionReveal className="mt-10">
              <div className="flex flex-col items-center gap-4">
                <p className="text-lg font-semibold text-brand-navy">
                  Using KIDUART and willing to share your experience? We would like to hear from you.
                </p>
                <Link
                  href="/demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-brand-yellow px-8 py-4 text-base font-bold text-brand-navy shadow-xl hover:bg-white transition-colors duration-300"
                >
                  Request Demo <ArrowRight className="h-5 w-5" />
                </Link>
              </div>
            </SectionReveal>

            <SectionReveal className="mt-12">
              <div className="flex flex-wrap items-center justify-center gap-4">
                {[
                  "🔒 Built-in data protection controls",
                  "🇮🇳 Built for Indian Schools",
                  "⚡ Structured onboarding support",
                ].map((badge) => (
                  <div
                    key={badge}
                    className="rounded-full border border-brand-navy/10 bg-brand-beige/20 px-6 py-3 text-sm font-semibold text-brand-navy/90"
                  >
                    {badge}
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="section-space bg-brand-navy border-y border-white/10 relative overflow-hidden" style={{ color: "#fcf6d3" }}>
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 360, position: "top-left", opacity: 0.14 },
              { color: "#0c716b", size: 360, position: "bottom-right", opacity: 0.14 },
            ]}
          />
          <FloatingIcons icons={["CheckCircle2", "ShieldCheck", "Users"]} count={4} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionReveal className="text-center mb-16">
              <h2 className="text-4xl font-bold text-brand-beige mb-4">Why choose us over generic school software?</h2>
              <p className="text-lg max-w-3xl mx-auto text-brand-beige/75">
                Here is how KIDUART stacks up against generic school software in everyday use.
              </p>
              {/* SEO-UPGRADE: Replaced placeholder comparison sentence with clear buyer-oriented copy */}
            </SectionReveal>

            <SectionReveal className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 shadow-2xl">
              <div className="hidden md:grid md:grid-cols-[0.9fr_1.05fr_1.05fr]">
                <div className="border-b border-r border-white/10 bg-white/5 px-8 py-6">
                  <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-brand-yellow">Comparison</h3>
                </div>
                <div className="border-b border-r border-white/10 bg-brand-teal/15 px-8 py-6">
                  <div className="flex items-center gap-3 font-bold text-brand-beige">
                    <CheckCircle2 className="h-5 w-5 text-brand-yellow" />
                    <span>KIDUART ERP</span>
                  </div>
                </div>
                <div className="border-b border-white/10 bg-white/5 px-8 py-6">
                  <div className="flex items-center gap-3 font-bold text-brand-beige">
                    <X className="h-5 w-5 text-brand-orange" />
                    <span>Generic Alternatives</span>
                  </div>
                </div>

                {comparisons.map((item, idx) => (
                  <Fragment key={item.title}>
                    <div className={`border-r border-white/10 px-8 py-8 ${idx !== comparisons.length - 1 ? "border-b" : ""} border-white/10`}>
                      <h3 className="text-2xl font-bold text-brand-beige">{item.title}</h3>
                    </div>
                    <div className={`border-r border-white/10 bg-brand-teal/10 px-8 py-8 ${idx !== comparisons.length - 1 ? "border-b" : ""} border-white/10`}>
                      <p className="leading-7 text-brand-beige/85">{item.ours}</p>
                    </div>
                    <div className={`px-8 py-8 ${idx !== comparisons.length - 1 ? "border-b" : ""} border-white/10`}>
                      <p className="leading-7 text-brand-beige/70">{item.other}</p>
                    </div>
                  </Fragment>
                ))}
              </div>

              <div className="md:hidden">
                <div className="grid grid-cols-3 border-b border-white/10 bg-white/5">
                  <div className="px-4 py-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-yellow">Comparison</div>
                  <div className="border-l border-white/10 px-4 py-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-beige">KIDUART</div>
                  <div className="border-l border-white/10 px-4 py-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-beige">Others</div>
                </div>

                {comparisons.map((item, idx) => (
                  <div key={item.title} className={idx !== comparisons.length - 1 ? "border-b border-white/10" : ""}>
                    <div className="px-4 py-5">
                      <h3 className="text-lg font-bold text-brand-beige">{item.title}</h3>
                    </div>
                    <div className="grid grid-cols-1">
                      <div className="border-t border-white/10 bg-brand-teal/10 px-4 py-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-beige">
                          <CheckCircle2 className="h-4 w-4 text-brand-yellow" />
                          <span>KIDUART ERP</span>
                        </div>
                        <p className="text-sm leading-6 text-brand-beige/85">{item.ours}</p>
                      </div>
                      <div className="border-t border-white/10 px-4 py-4">
                        <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-brand-beige">
                          <X className="h-4 w-4 text-brand-orange" />
                          <span>Generic Alternatives</span>
                        </div>
                        <p className="text-sm leading-6 text-brand-beige/70">{item.other}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <section className="section-space my-20 bg-brand-beige/30 relative overflow-hidden">
          <BackgroundBlobs blobs={[{ color: "#f77f00", size: 300, position: "center-right", opacity: 0.15 }]} />
          <FloatingIcons icons={["ShieldCheck", "Lock", "Eye"]} count={4} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="">
              {/* <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"> */}
              <SectionReveal>
                <h2 className="text-center text-3xl font-bold text-brand-navy mb-3">Security for school data, not just a headline</h2>
                <p className="text-center text-brand-navy/70 leading-7">
                  Protect student, staff, and financial data with encryption, structured permissions, and reliable cloud backups built into your daily workflows.
                </p>
              </SectionReveal>
              <div className="grid gap-8 lg:grid-cols-3 lg:items-center mt-12">
                {/* <div className="grid gap-4 sm:grid-cols-3"> */}
                {[
                  { icon: ShieldCheck, title: "Data Encryption", desc: "Sensitive records stay protected across core school workflows." },
                  { icon: Users, title: "Role-Based Access", desc: "Admins, teachers, and finance teams see only what they need." },
                  { icon: CheckCircle2, title: "Cloud Backup", desc: "Important school data stays recoverable and easier to manage." },
                ].map((item, idx) => (
                  <SectionReveal key={item.title} delay={idx * 0.08} className="interactive-card rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm">
                    <item.icon className="h-6 w-6 text-brand-teal" />
                    <h3 className="mt-4 text-lg font-bold text-brand-navy">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-brand-navy/70">{item.desc}</p>
                  </SectionReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <CtaSection
          title="See KIDUART in action, free with no obligation"
          subtitle="One of our product specialists will walk you through the platform live. Ask whatever you want. We cover everything relevant to your school's setup."
        />
        {/* SEO-UPGRADE: Updated CTA to reduce friction and set demo expectations */}
      </PageTransition>
    </>
  );
}
