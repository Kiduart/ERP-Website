import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import {
  Users,
  CalendarCheck,
  Clock,
  CreditCard,
  MessageSquare,
  PieChart,
  CheckCircle2,
  ArrowLeft,
} from "lucide-react";

const featuresData: Record<string, any> = {
  "student-management": {
    icon: Users,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "Student Information Management",
    headline: "Every student, every detail, all in one place.",
    description:
      "KIDUART's student information system gives administrators and teachers complete visibility into every student's academic journey, health records, and extracurricular activities.",
    capabilities: [
      "Digital enrollment & re-enrollment",
      "Customizable student profiles",
      "Medical records management",
      "Document upload & storage",
      "Alumni tracking",
      "Custom tags & groups",
    ],
    howItWorks: [
      { step: 1, title: "Enroll students", desc: "Admins or parents complete digital enrollment forms with all required documents." },
      { step: 2, title: "Build profiles", desc: "The system automatically creates comprehensive student profiles from enrollment data." },
      { step: 3, title: "Access anywhere", desc: "Authorized staff access student information from any device, anytime." },
      { step: 4, title: "Track progress", desc: "Link academic, attendance, and activity data to each student's central profile." },
    ],
    whoItHelps: [
      { role: "Administrator", benefit: "Complete visibility into the entire student body" },
      { role: "Teacher", benefit: "Quick access to student history and notes" },
      { role: "Parent", benefit: "View and update child information" },
      { role: "Student", benefit: "Access personal profile and academic records" },
    ],
  },
  attendance: {
    icon: CalendarCheck,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    title: "Attendance Tracking",
    headline: "Automate attendance and keep every school day visible.",
    description:
      "Replace manual roll calls with smart digital attendance that notifies parents instantly, generates compliance reports, and integrates with biometric hardware.",
    capabilities: [
      "One-click mobile attendance",
      "Subject-wise tracking",
      "Biometric or RFID integration",
      "Automated parent SMS and email alerts",
      "Leave request management",
      "Monthly compliance reports",
    ],
    howItWorks: [
      { step: 1, title: "Mark attendance", desc: "Teachers tap once on mobile or use biometric readers at classroom doors." },
      { step: 2, title: "Send instant alerts", desc: "Parents receive notifications immediately when their child is marked absent." },
      { step: 3, title: "Manage leave requests", desc: "Parents submit leave requests online, and staff approve or decline them faster." },
      { step: 4, title: "Generate reports", desc: "Daily, weekly, and monthly attendance reports are generated automatically." },
    ],
    whoItHelps: [
      { role: "Teacher", benefit: "Mark full class attendance in under 30 seconds" },
      { role: "Administrator", benefit: "Track real-time attendance across all classes" },
      { role: "Parent", benefit: "Receive instant notifications and submit leave requests" },
      { role: "Student", benefit: "View personal attendance records and request leave" },
    ],
  },
  timetable: {
    icon: Clock,
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
    title: "Timetable Management",
    headline: "Conflict-free schedules generated in minutes, not days.",
    description:
      "Our intelligent scheduling engine factors in teacher availability, room capacity, subject hours, and student groups to create optimal timetables automatically.",
    capabilities: [
      "AI-powered schedule generation",
      "Teacher availability management",
      "Room and lab booking",
      "Substitute teacher management",
      "Exam scheduling",
      "Calendar integration",
    ],
    howItWorks: [
      { step: 1, title: "Input parameters", desc: "Define subjects, teacher loads, room capacities, and scheduling constraints." },
      { step: 2, title: "Generate with AI", desc: "The scheduling engine creates balanced and conflict-free timetables automatically." },
      { step: 3, title: "Review and adjust", desc: "Admins review the timetable and fine-tune only where needed." },
      { step: 4, title: "Publish instantly", desc: "Teachers and students see their latest schedules on their dashboards." },
    ],
    whoItHelps: [
      { role: "Administrator", benefit: "Generate complex schedules in minutes" },
      { role: "Teacher", benefit: "View personal timetable and manage substitutions" },
      { role: "Student", benefit: "Access class schedule on mobile" },
      { role: "Parent", benefit: "See child daily schedule" },
    ],
  },
  "fee-management": {
    icon: CreditCard,
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/20",
    title: "Fee Management",
    headline: "Automate fee collection without losing revenue to follow-ups.",
    description:
      "From invoice generation to payment collection and defaulter tracking, KIDUART's fee module handles the entire billing lifecycle with minimal manual intervention.",
    capabilities: [
      "Automated invoice generation",
      "Online payment gateway",
      "Fee structure templates",
      "Defaulter tracking and reminders",
      "Scholarship and concession management",
      "Financial analytics",
    ],
    howItWorks: [
      { step: 1, title: "Set fee structure", desc: "Define fee components, due dates, and applicable student groups." },
      { step: 2, title: "Create invoices automatically", desc: "The system generates and sends invoices on the right schedule." },
      { step: 3, title: "Collect online payments", desc: "Parents pay by card, bank transfer, or UPI through the parent portal." },
      { step: 4, title: "Track and report", desc: "Finance teams use real-time collection dashboards and automated follow-ups." },
    ],
    whoItHelps: [
      { role: "Administrator", benefit: "Complete fee oversight and collection analytics" },
      { role: "Finance Team", benefit: "Automated invoicing and payment reconciliation" },
      { role: "Parent", benefit: "Easy online payments and digital receipts" },
      { role: "Student", benefit: "View fee dues and payment history" },
    ],
  },
  communication: {
    icon: MessageSquare,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "Communication Tools",
    headline: "Keep every school conversation connected and timely.",
    description:
      "Integrated messaging, announcements, and notifications keep your entire school community informed and engaged in real time.",
    capabilities: [
      "School-wide announcements",
      "Direct teacher-parent messaging",
      "SMS and email notifications",
      "Event and holiday alerts",
      "Notice board management",
      "Emergency broadcast",
    ],
    howItWorks: [
      { step: 1, title: "Send message", desc: "Staff compose messages targeting classes, grades, or parent groups." },
      { step: 2, title: "Deliver across channels", desc: "The system sends via app, email, and SMS based on user preference." },
      { step: 3, title: "Capture replies", desc: "Parents respond through the parent app and conversations stay organized." },
      { step: 4, title: "Track engagement", desc: "Admins review read receipts and communication analytics." },
    ],
    whoItHelps: [
      { role: "Administrator", benefit: "School-wide communication and emergency broadcast control" },
      { role: "Teacher", benefit: "Direct messaging with parents about student progress" },
      { role: "Parent", benefit: "Real-time visibility into updates and notices" },
      { role: "Student", benefit: "Receive assignment reminders and school updates" },
    ],
  },
  reports: {
    icon: PieChart,
    color: "text-brand-bronze",
    bg: "bg-brand-bronze/10",
    title: "Reports & Analytics",
    headline: "Turn school data into decisions your team can act on.",
    description:
      "Generate comprehensive academic, financial, and operational reports with one click. Schedule automated reports or build custom dashboards for every stakeholder.",
    capabilities: [
      "Student report cards",
      "Class performance analytics",
      "Financial summaries",
      "Attendance compliance reports",
      "Custom report builder",
      "Scheduled automated delivery",
    ],
    howItWorks: [
      { step: 1, title: "Choose report", desc: "Select from built-in report templates or create a custom view." },
      { step: 2, title: "Set parameters", desc: "Filter by date range, class, subject, or student group." },
      { step: 3, title: "Generate instantly", desc: "Reports render in seconds with charts and data tables." },
      { step: 4, title: "Share or schedule", desc: "Download, email, or schedule recurring delivery to stakeholders." },
    ],
    whoItHelps: [
      { role: "Administrator", benefit: "Real-time operational dashboards" },
      { role: "Teacher", benefit: "Class performance insights and report cards" },
      { role: "Parent", benefit: "Detailed child progress reports" },
      { role: "Finance", benefit: "Fee collection and financial summaries" },
    ],
  },
};

export default function FeatureDetail() {
  const { slug } = useParams();
  const data = slug ? featuresData[slug] : null;

  if (!data) {
    return (
      <PageTransition className="flex min-h-[60vh] flex-col items-center justify-center pt-32 pb-24 text-center">
        <h1 className="mb-6 text-4xl font-bold text-brand-navy">Feature Not Found</h1>
        <p className="mb-8 text-xl text-brand-navy/70">The feature you are looking for doesn't exist.</p>
        <Link href="/features" className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 font-bold text-white">
          <ArrowLeft className="h-5 w-5" /> Back to Features
        </Link>
      </PageTransition>
    );
  }

  const otherSlugs = Object.keys(featuresData).filter((item) => item !== slug).slice(0, 3);

  return (
    <PageTransition className="pt-20 pb-0">
      <section className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-[linear-gradient(180deg,#f8f6ef_0%,#f1efff_52%,#ffffff_100%)]">
        <div className="absolute inset-x-0 bottom-0 h-40 bg-[radial-gradient(circle_at_center,rgba(131,103,255,0.18),transparent_70%)]" />
        <div className="page-shell relative z-10 flex w-full flex-col items-center justify-center py-10 text-center">
          <SectionReveal className="w-full max-w-5xl">
            <nav className="mb-6 flex flex-wrap items-center justify-center gap-2 text-sm font-medium text-brand-navy/55">
              <Link href="/" className="transition-colors hover:text-brand-teal">Home</Link>
              <span>/</span>
              <Link href="/features" className="transition-colors hover:text-brand-teal">Features</Link>
              <span>/</span>
              <span>{data.title}</span>
            </nav>
            <h1 className="mx-auto max-w-4xl text-[clamp(2.25rem,1.6rem+2vw,4.5rem)] font-bold leading-[1.05] text-brand-navy">
              {data.headline}
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-[clamp(0.98rem,0.94rem+0.24vw,1.05rem)] leading-7 text-brand-navy/60">
              {data.description}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.08} className="mt-8 w-full max-w-6xl px-1 sm:px-4">
            <div className="overflow-hidden rounded-[1.8rem] border border-[#d7d9ef] bg-white p-2 shadow-[0_24px_80px_rgba(84,74,155,0.16)] sm:p-4">
              <img
                src="/dashboard-page.jpg"
                alt={`${data.title} dashboard`}
                className="h-auto w-full rounded-[1.3rem] object-cover"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell">
          <SectionReveal className="mb-16 text-center">
            <div className="section-kicker">Key capabilities</div>
            <h2 className="mt-6 text-[clamp(1.75rem,1.25rem+1.3vw,2.75rem)] font-bold text-brand-navy">Everything your team needs for {data.title.toLowerCase()}</h2>
            <p className="section-copy mx-auto mt-4 max-w-3xl text-brand-navy/70">
              Practical features designed for daily school workflows instead of bloated admin screens.
            </p>
          </SectionReveal>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {data.capabilities.map((cap: string, index: number) => (
              <SectionReveal key={cap} delay={index * 0.05}>
                <div className="flex h-full items-center gap-4 rounded-2xl border border-brand-navy/10 bg-brand-beige/20 p-6">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white shadow-sm">
                    <CheckCircle2 className={`h-5 w-5 ${data.color}`} />
                  </div>
                  <span className="text-sm font-semibold text-brand-navy/90">{cap}</span>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space border-y border-brand-navy/5 bg-brand-beige/30">
        <div className="page-shell">
          <SectionReveal className="mb-14">
            <div className="section-kicker">How it works</div>
            <h2 className="mt-6 text-[clamp(1.75rem,1.25rem+1.3vw,2.6rem)] font-bold text-brand-navy">A simpler workflow from setup to daily use</h2>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
            {data.howItWorks.map((step: any, index: number) => (
              <SectionReveal key={step.step} delay={index * 0.08} className="relative rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-sm">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${data.bg} ${data.color} text-lg font-bold`}>
                  {step.step}
                </div>
                <h3 className="mt-5 text-[clamp(1.2rem,1.05rem+0.45vw,1.45rem)] font-bold text-brand-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-7 text-brand-navy/70">{step.desc}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell">
          <SectionReveal className="mb-14 text-center">
            <div className="section-kicker">Who benefits</div>
            <h2 className="mt-6 text-[clamp(1.75rem,1.25rem+1.3vw,2.6rem)] font-bold text-brand-navy">Built for every role that touches this workflow</h2>
          </SectionReveal>

          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
            {data.whoItHelps.map((role: any, index: number) => (
              <SectionReveal key={role.role} delay={index * 0.08}>
                <div className="h-full rounded-[1.75rem] border border-brand-navy/10 bg-white p-7 shadow-lg shadow-brand-navy/5">
                  <h3 className="border-b border-brand-navy/10 pb-4 text-lg font-bold text-brand-navy">{role.role}</h3>
                  <p className="mt-4 text-sm leading-7 text-brand-navy/70">{role.benefit}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space relative overflow-hidden bg-brand-navy text-white" style={{ color: "rgb(var(--hero-foreground-rgb))" }}>
        <BackgroundBlobs
          blobs={[
            { color: "hsl(var(--blob-yellow))", size: 300, position: "center-left", opacity: 0.15 },
            { color: "hsl(var(--blob-teal))", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />
        <div className="page-shell relative z-10">
          <SectionReveal className="mb-12">
            <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-yellow">
              Explore more features
            </div>
            <h2 className="mt-6 text-[clamp(1.7rem,1.2rem+1.2vw,2.5rem)] font-bold text-brand-beige">See how the rest of the platform connects</h2>
          </SectionReveal>

          <div className="grid gap-6 md:grid-cols-3">
            {otherSlugs.map((itemSlug, index) => {
              const feature = featuresData[itemSlug];
              const FeatureIcon = feature.icon;

              return (
                <SectionReveal key={itemSlug} delay={index * 0.08}>
                  <Link href={`/features/${itemSlug}`} className="group block h-full rounded-2xl border border-white/10 bg-white/5 p-6 transition-colors hover:bg-white/10">
                    <FeatureIcon className={`mb-4 h-8 w-8 ${feature.color}`} />
                    <h3 className="mb-2 text-lg font-bold text-brand-beige transition-colors group-hover:text-brand-yellow">{feature.title}</h3>
                    <p className="text-sm leading-7 text-brand-beige/70">{feature.description}</p>
                  </Link>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
