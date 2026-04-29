import Head from "next/head";
import { Link } from "wouter";
import { ArrowRight, Bell, BrainCircuit, CalendarCheck, CreditCard, FileText, LayoutDashboard, ShieldCheck, Sparkles, UserCog, Users } from "lucide-react";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CircleShowcaseHero } from "@/components/ui/CustomHeroes";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { WhatsAppIcon } from "@/components/ui/WhatsAppIcon";
import { WHATSAPP_URL } from "@/lib/contact";

type FeatureItem = {
  icon: typeof Users;
  title: string;
  description: string;
};

const featureCategories: { title: string; label: string; accent: string; items: FeatureItem[] }[] = [
  {
    title: "Core Modules",
    label: "School ERP features",
    accent: "text-brand-teal",
    items: [
      {
        icon: Users,
        title: "Student Management",
        description: "Centralize student profiles, academic records, documents, and parent details in one secure system so your team always works with updated data.",
      },
      {
        icon: FileText,
        title: "Admission Management",
        description: "Handle inquiries, application forms, document verification, and enrollment workflows faster without juggling spreadsheets or offline paperwork.",
      },
      {
        icon: CalendarCheck,
        title: "Attendance System",
        description: "Track student attendance in real time with automated reports and AI-based insights to identify irregular patterns early.",
      },
      {
        icon: CreditCard,
        title: "Fee Management",
        description: "Automate fee collection, due reminders, receipts, and payment tracking so finance teams reduce follow-ups and improve cash flow visibility.",
      },
      {
        icon: FileText,
        title: "Exam & Report Cards",
        description: "Create exams, publish marks, and generate report cards quickly while giving teachers and school leaders clearer performance visibility.",
      },
    ],
  },
  {
    title: "AI Features",
    label: "AI-powered school management software modules",
    accent: "text-brand-yellow",
    items: [
      {
        icon: BrainCircuit,
        title: "AI Attendance Insights",
        description: "Detect absenteeism trends and get actionable insights that help your admin team intervene before attendance issues get worse.",
      },
      {
        icon: Sparkles,
        title: "Auto Timetable Generator",
        description: "Generate balanced, conflict-free class schedules in minutes based on sections, staff availability, and subject requirements.",
      },
      {
        icon: Bell,
        title: "Smart Notifications",
        description: "Send timely alerts for attendance, fees, exams, and school updates with less manual work and better parent communication.",
      },
      {
        icon: LayoutDashboard,
        title: "Performance Predictions",
        description: "Spot academic risk signals earlier with AI-supported trend analysis so teachers and school leaders can plan timely support.",
      },
    ],
  },
  {
    title: "Admin Tools",
    label: "School management software modules",
    accent: "text-brand-orange",
    items: [
      {
        icon: UserCog,
        title: "Staff Management",
        description: "Manage teacher and staff records, responsibilities, leave details, and daily operations from one organized admin workspace.",
      },
      {
        icon: CreditCard,
        title: "Payroll System",
        description: "Process salaries, deductions, and monthly payroll workflows more accurately while reducing repetitive HR tasks.",
      },
      {
        icon: ShieldCheck,
        title: "Role-Based Access",
        description: "Control who sees what with secure permissions for admins, teachers, accountants, coordinators, parents, and students.",
      },
      {
        icon: LayoutDashboard,
        title: "Reports & Analytics",
        description: "Track admissions, collections, attendance, and academic performance through dashboards built for faster school-level decisions.",
      },
    ],
  },
  {
    title: "Parent & Student Apps",
    label: "Best school ERP India experience",
    accent: "text-brand-navy",
    items: [
      {
        icon: Users,
        title: "Parent App",
        description: "Give parents a simple mobile experience to view attendance, fees, notices, and school updates without calling the office repeatedly.",
      },
      {
        icon: LayoutDashboard,
        title: "Student Dashboard",
        description: "Help students stay on top of class updates, exam schedules, results, and important tasks from one personalized dashboard.",
      },
      {
        icon: Bell,
        title: "Notifications & Alerts",
        description: "Deliver instant reminders and alerts so parents and students never miss deadlines, events, exams, or payment updates.",
      },
    ],
  },
];

const aiAssistantPoints = [
  "Timetable generation that avoids teacher conflicts and room clashes automatically",
  "Student performance trend analysis that surfaces concerns before exam week",
  "Communication drafts for fee reminders, attendance alerts, and school notices",
  "Fee defaulter prediction based on payment history and seasonal patterns",
];

const pageHighlights = [
  { value: 16, suffix: "+", label: "operational modules" },
  { value: 4, suffix: "", label: "role-focused categories" },
  { value: 1, suffix: "", label: "connected school platform" },
];

export default function Features() {
  return (
    <>
      <Head>
        <title>School ERP Features | KIDUART , Every Module Your School Needs</title>
        <meta
          name="description"
          content="Explore KIDUART's school ERP features , student management, fee collection, attendance tracking, exam scheduling, AI analytics, parent app, and more. Built for Indian schools."
        />
        <meta
          name="keywords"
          content="school ERP features, school management software modules, best school ERP India, AI school ERP, school attendance system, school fee management software"
        />
        <link rel="canonical" href="https://www.kiduart.com/features" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="School ERP Features | KIDUART , Every Module Your School Needs" />
        <meta property="og:description" content="Explore KIDUART's school ERP features , student management, fee collection, attendance tracking, exam scheduling, AI analytics, parent app, and more. Built for Indian schools." />
        <meta property="og:url" content="https://www.kiduart.com/features" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School ERP Features | KIDUART , Every Module Your School Needs" />
        <meta name="twitter:description" content="Explore KIDUART's school ERP features , student management, fee collection, attendance tracking, exam scheduling, AI analytics, parent app, and more. Built for Indian schools." />
      </Head>

      <PageTransition className="pt-20 pb-0">
        <CircleShowcaseHero
          eyebrow="What KIDUART covers"
          title="Every module your school's admin team reaches for, every day"
          subtitle="From the first admission inquiry to the final term report , organised by the way school teams actually think about their work."
          image="/images/banner/features-hero.jpg"
          actions={(
            <>
            <Link
              href="/demo"
              className="rounded-full bg-brand-orange px-8 py-4 text-center text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-brand-navy"
            >
              Book Free Demo
            </Link>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-full border border-brand-navy/12 bg-white px-8 py-4 text-base font-bold text-brand-navy transition-colors duration-300 hover:border-brand-teal hover:text-brand-teal"
            >
              Talk to Sales <ArrowRight className="h-5 w-5" />
            </Link>
            </>
          )}
        />

        <section className="relative overflow-hidden border-y border-brand-navy/5 bg-white py-12">
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 280, position: "center-left", opacity: 0.14 },
              { color: "#0c716b", size: 280, position: "center-right", opacity: 0.14 },
            ]}
          />
          <div className="relative z-10 mx-auto grid max-w-6xl gap-6 px-4 text-center sm:px-6 md:grid-cols-3 lg:px-8">
            {pageHighlights.map((highlight, index) => (
              <SectionReveal
                key={highlight.label}
                delay={index * 0.08}
                className="rounded-3xl border border-brand-navy/8 bg-brand-beige/20 px-6 py-8"
              >
                <div className="text-4xl font-extrabold text-brand-navy">
                  <AnimatedCounter end={highlight.value} suffix={highlight.suffix} />
                </div>
                <p className="mt-2 text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy/60">{highlight.label}</p>
              </SectionReveal>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-beige/25 py-24">
          <BackgroundBlobs
            blobs={[
              { color: "#003049", size: 380, position: "top-left", opacity: 0.1 },
              { color: "#f77f00", size: 340, position: "bottom-right", opacity: 0.12 },
            ]}
          />
          <FloatingIcons icons={["Users", "CreditCard", "Bell", "ShieldCheck"]} count={5} />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="mx-auto mb-16 max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-teal">Structured Modules</p>
              <h2 className="mt-4 text-4xl font-bold text-brand-navy">Every part of school operations, in one place</h2>
              <p className="mt-4 text-lg leading-8 text-brand-navy/70">
                We grouped the modules by how school teams actually work , not by how software companies prefer to organize feature lists.
              </p>
            </SectionReveal>

            <div className="space-y-16">
              {featureCategories.map((category, categoryIndex) => (
                <SectionReveal
                  key={category.title}
                  delay={categoryIndex * 0.05}
                  className=""
                >
                  <div className="mb-8 flex flex-col gap-3 border-b border-brand-navy/8 pb-6 md:flex-row md:items-end md:justify-between">
                    <div>
                      <p className={`text-sm font-bold uppercase tracking-[0.24em] ${category.accent}`}>{category.label}</p>
                      <h3 className="mt-3 text-3xl font-bold text-brand-navy">{category.title}</h3>
                    </div>
                    <p className="max-w-2xl text-brand-navy/65">
                      Each module is designed to reduce a specific kind of manual work. Together, they eliminate the need to re-enter the same data in multiple places.
                    </p>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {category.items.map((item, itemIndex) => (
                      <div
                        key={item.title}
                        className="flex h-full flex-col rounded-3xl border border-brand-navy/8 bg-white/95 shadow-lg shadow-brand-navy/5 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-teal/25 hover:shadow-md"
                      >
                        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
                          <item.icon className={`h-7 w-7 ${category.accent}`} />
                        </div>
                        <h4 className="text-xl font-bold text-brand-navy">{item.title}</h4>
                        <p className="mt-3 flex-grow leading-7 text-brand-navy/72">{item.description}</p>
                        <div className="mt-5 text-sm font-semibold uppercase tracking-[0.2em] text-brand-navy/45">
                          Module {String(itemIndex + 1).padStart(2, "0")}
                        </div>
                      </div>
                    ))}
                  </div>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-navy py-24" style={{ color: "#fcf6d3" }}>
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 420, position: "top-right", opacity: 0.16 },
              { color: "#0c716b", size: 420, position: "bottom-left", opacity: 0.16 },
            ]}
          />
          <FloatingIcons icons={["Brain", "Sparkles", "Bell", "LayoutDashboard"]} count={4} />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-yellow">
                  AI that does a real job
                </div>
                <h2 className="mt-6 text-4xl font-bold text-brand-beige">The AI layer works on your data, not generic templates</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-beige/80">
                  KIDUART's AI assistant handles the tasks that consume time without requiring judgement , timetable conflicts, payment risk signals, performance trends, communication drafts. Your team focuses on the decisions only humans should make.
                </p>
                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {aiAssistantPoints.map((point, index) => (
                    <div
                      key={point}
                      className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-brand-beige/90"
                    >
                      <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-brand-yellow/15">
                        <Sparkles className="h-5 w-5 text-brand-yellow" />
                      </div>
                      <p>{point}</p>
                    </div>
                  ))}
                </div>
              </SectionReveal>

              <SectionReveal delay={0.12} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-brand-beige p-6 text-brand-navy">
                  <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-teal">AI Command Center</p>
                      <h3 className="mt-2 text-2xl font-bold">What you can ask KIDUART AI</h3>
                    </div>
                    <BrainCircuit className="h-10 w-10 text-brand-orange" />
                  </div>

                  <div className="mt-6 space-y-4">
                    {[
                      "Build a conflict-free timetable for Classes 8 through 10 starting next week",
                      "Draft a fee reminder for parents who missed the October deadline",
                      "Show me students whose attendance dropped more than 15% last month",
                      "Which sections have the largest gap between expected and actual marks?",
                    ].map((task) => (
                      <div key={task} className="rounded-2xl bg-white px-4 py-4 shadow-sm">
                        <p className="text-sm leading-6 text-brand-navy/75">{task}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24">
          <BackgroundBlobs blobs={[{ color: "#0c716b", size: 320, position: "center-right", opacity: 0.12 }]} />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="rounded-[2rem] border border-brand-navy/8 bg-brand-beige/20 p-8 text-center md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-orange">Built for Real Schools</p>
              <h2 className="mt-4 text-4xl font-bold text-brand-navy">See how these school ERP features work in real school operations</h2>
              <p className="mx-auto mt-4 max-w-3xl text-lg leading-8 text-brand-navy/70">
                The fastest way to judge whether a school ERP is right for your institution is to see it handling your actual workflows , not a generic demonstration designed to look impressive.
              </p>
              <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal"
                >
                  Book a free demo
                  <ArrowRight className="h-5 w-5" />
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-brand-navy/15 bg-white px-8 py-4 text-lg font-bold text-brand-navy transition-colors hover:border-brand-teal/35 hover:text-brand-teal"
                >
                  <WhatsAppIcon className="h-5 w-5" />
                  Ask About Your Use Case
                </a>
              </div>
            </SectionReveal>
          </div>
        </section>

        <CtaSection
          title="Want to see how these modules work together in a real school?"
          subtitle="Book a live walkthrough built around your school's size and the specific workflows you want to improve."
        />
      </PageTransition>
    </>
  );
}
