import Head from "next/head";
import { Fragment } from "react";
import { Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { HomeCurveHero } from "@/components/ui/CustomHeroes";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { pricingPlans } from "@/data/pricing";
import {
  ArrowRight,
  Bell,
  Brain,
  CalendarCheck,
  CheckCircle2,
  CreditCard,
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
    title: "Student Management System",
    desc: "Centralize admissions, profiles, documents, class history, and parent records in one searchable school ERP software India teams can use daily.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
  },
  {
    slug: "fee-management",
    icon: CreditCard,
    title: "Fee Management",
    desc: "Automate invoices, due reminders, payment tracking, and receipts so finance teams reduce manual follow-ups and improve collections.",
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
  },
  {
    slug: "attendance",
    icon: CalendarCheck,
    title: "Attendance Tracking",
    desc: "Record daily attendance faster, flag irregular patterns, and share instant updates with parents and school leadership.",
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
  },
  {
    slug: "reports",
    icon: FileText,
    title: "Exam & Report Cards",
    desc: "Generate marksheets, report cards, term summaries, and academic analytics without spreadsheet-heavy workflows.",
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/20",
  },
  {
    slug: "communication",
    icon: MessageSquare,
    title: "Parent Communication",
    desc: "Send fee reminders, attendance alerts, exam updates, and important notices from the same school management software.",
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
  },
  {
    slug: "reports",
    icon: PieChart,
    title: "School Analytics Dashboard",
    desc: "Track admissions, fee status, attendance trends, and academic performance through role-based dashboards for every team.",
    color: "text-brand-bronze",
    bg: "bg-brand-bronze/10",
  },
];

const aiFeatures = [
  {
    icon: Brain,
    title: "Smart Attendance Predictions",
    desc: "Identify absenteeism patterns early so admins and class teachers can intervene before attendance becomes a bigger issue.",
  },
  {
    icon: Bell,
    title: "Fee Defaulters Alerts",
    desc: "Spot overdue payment risk faster with automated alerts for finance teams and timely reminders for parents.",
  },
  {
    icon: FileText,
    title: "Automated Report Cards",
    desc: "Speed up result publishing with faster academic summaries, report card preparation, and performance narratives.",
  },
  {
    icon: Sparkles,
    title: "Parent Communication Suggestions",
    desc: "Draft clearer fee, attendance, and exam-related communication with AI-assisted message suggestions for school staff.",
  },
];

const howItWorks = [
  {
    step: "01",
    title: "Set up your school",
    desc: "Configure classes, sections, staff roles, fee heads, academic sessions, and permissions inside one school ERP platform.",
  },
  {
    step: "02",
    title: "Run daily workflows",
    desc: "Manage admissions, attendance, fees, exams, and parent communication from role-based dashboards for admins, teachers, and finance teams.",
  },
  {
    step: "03",
    title: "Track performance with AI",
    desc: "Use insights, alerts, and reports to take faster decisions on collections, attendance, and academic operations.",
  },
];

const faqs = [
  {
    q: "What does your school ERP software manage?",
    a: "Our platform helps schools manage admissions, student records, fees, attendance, exams, report cards, and parent communication in one place.",
  },
  {
    q: "Is this suitable for schools in India?",
    a: "Yes, the product is positioned as school ERP software India teams can use for daily academic, admin, and finance workflows.",
  },
  {
    q: "How does AI help school management?",
    a: "AI helps with attendance pattern visibility, fee reminder workflows, faster report card preparation, and better parent communication suggestions.",
  },
  {
    q: "Can different staff have different access?",
    a: "Yes, role-based access lets admins, teachers, finance teams, and parents see only the data relevant to them.",
  },
];

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

const testimonials = [
  {
    img: "avatar-1.png",
    name: "Sarah Jenkins",
    role: "Principal, Oakridge Academy",
    quote: "Admissions and attendance workflows became much more organized, and our admin team finally had one reliable dashboard to work from.",
  },
  {
    img: "avatar-2.png",
    name: "David Chen",
    role: "IT Director, Metro Schools",
    quote: "The platform gave leadership, teachers, and finance staff clearer visibility without adding extra complexity to day-to-day processes.",
  },
  {
    img: "avatar-1.png",
    name: "Elena Rodriguez",
    role: "Head of Admin, Brighton Public School",
    quote: "Fee reminders, report workflows, and parent communication feel far more streamlined than our older school management setup.",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Best School ERP Software in India | AI School Management System</title>
        <meta
          name="description"
          content="Manage your school efficiently with our AI-powered School ERP software. फीस, attendance, exams और parent communication — सब कुछ एक platform में।"
        />
      </Head>

      <PageTransition className="pt-0 pb-0">
        <HomeCurveHero
          title="AI-Powered School ERP Software for Smart School Management"
          subtitle="Manage admissions, fees, attendance, exams & communication — all in one platform designed for modern schools."
          image="https://plus.unsplash.com/premium_photo-1764691435961-ecb3a0a5d311?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0"
          actions={(
            <>
            <Link
              href="/demo"
              className="rounded-full bg-white px-8 py-4 text-center text-lg font-bold text-brand-navy shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-brand-beige"
            >
              Get Free Demo
            </Link>
            <Link
              href="/pricing"
              className="flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:bg-white/15"
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
              <div className="section-kicker">Connected school ERP impact</div>
              <h2 className="section-title mt-6 text-brand-navy">The operating numbers school leaders care about first</h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                Each metric highlights what this platform actually improves across admissions, academics, parent communication, and collections.
              </p>
            </SectionReveal>
            <SectionReveal className="grid grid-cols-2 gap-4 text-center md:grid-cols-4 md:gap-6">
              {[
                { label: "Student records managed", area: "School operations", value: 10000, suffix: "+", decimals: 0 },
                { label: "Teachers using dashboards", area: "Daily usage", value: 500, suffix: "+", decimals: 0 },
                { label: "Automated workflows", area: "ERP automation", value: 25, suffix: "+", decimals: 0 },
                { label: "Platform uptime", area: "Reliability", value: 99.9, suffix: "%", decimals: 1 },
              ].map((stat, idx) => (
                <div key={idx} className="rounded-3xl border border-brand-navy/10 bg-brand-beige/20 px-4 py-6 shadow-sm">
                  <div className="text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal/80">{stat.area}</div>
                  <div className="stat-value mt-4 font-extrabold text-brand-navy">
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} decimals={stat.decimals} />
                  </div>
                  <div className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy/55">{stat.label}</div>
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
              <div className="section-kicker">Connected school ERP features</div>
              <h2 className="section-title mt-6 text-brand-navy">School ERP software India teams can actually use every day</h2>
              <p className="section-copy mt-4 text-brand-navy/70">
                Explore the core modules inside our school management software, built to reduce admin workload and improve visibility across your institution.
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
                Practical AI for School Teams
              </div>
              <h2 className="section-title mb-4 text-brand-beige">How AI helps your school teams work faster</h2>
              <p className="section-copy" style={{ color: "rgb(var(--hero-muted-rgb) / 0.7)" }}>
                AI should not feel like a buzzword. It should help admins, teachers, and finance teams act faster on real school workflows.
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
              <h2 className="section-title text-brand-navy mb-4">How it works</h2>
              <p className="section-copy text-brand-navy/70 max-w-3xl mx-auto">
                Launch your school management software in three practical steps without overwhelming your team.
              </p>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {howItWorks.map((item, idx) => (
                <SectionReveal key={item.step} delay={idx * 0.08} className="rounded-3xl border border-brand-navy/10 bg-brand-beige/20 p-8">
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

        <section className="py-24 bg-white relative overflow-hidden">
          <BackgroundBlobs
            blobs={[
              { color: "#0c716b", size: 400, position: "top-left", opacity: 0.15 },
              { color: "#fcbf49", size: 400, position: "bottom-right", opacity: 0.15 },
            ]}
          />
          <FloatingIcons icons={["Heart", "Star", "Users"]} count={4} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <SectionReveal className="text-center mb-10">
              <h2 className="text-4xl font-bold text-brand-navy mb-4">Proof from School Teams</h2>
              <p className="text-lg text-brand-navy/70 max-w-3xl mx-auto">
                Social proof matters, so the page now shows testimonials, supporting stats, and institution-style identity markers instead of generic claims.
              </p>
            </SectionReveal>

            {/* <SectionReveal className="flex flex-wrap justify-center gap-4 mb-12">
              {["Oakridge Academy", "Metro Schools", "Brighton Public School", "Greenfield Campus", "Starlight International"].map((logo) => (
                <div key={logo} className="rounded-full border border-brand-navy/10 bg-brand-navy/80 px-5 py-3 text-sm font-semibold text-brand-beige">
                  {logo}
                </div>
              ))}
            </SectionReveal> */}

            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((t, idx) => (
                <SectionReveal key={t.name} delay={idx * 0.08} className="bg-brand-beige/20 p-8 rounded-2xl relative border border-brand-navy/10">
                  <div className="text-brand-orange text-4xl font-serif absolute top-4 right-6 opacity-20">"</div>
                  <p className="text-brand-navy/80 italic mb-8 relative z-10">"{t.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img src={`/images/${t.img}`} alt={t.name} className="w-12 h-12 rounded-full bg-brand-navy/10 object-cover" />
                    <div>
                      <div className="font-bold text-brand-navy">{t.name}</div>
                      <div className="text-sm text-brand-teal">{t.role}</div>
                    </div>
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-brand-navy border-y border-white/10 relative overflow-hidden" style={{ color: "#fcf6d3" }}>
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
                This comparison section helps visitors understand why your school management software is a stronger operational choice.
              </p>
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

        <section className="py-28 my-20 bg-brand-beige/30 relative overflow-hidden">
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
                  <SectionReveal key={item.title} delay={idx * 0.08} className="rounded-2xl border border-brand-navy/10 bg-white p-5 shadow-sm">
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
          title="Book a Free Demo of Our School ERP Today"
          subtitle="See how admissions, fees, attendance, exams, and parent communication can run from one AI-powered platform."
        />
      </PageTransition>
    </>
  );
}
