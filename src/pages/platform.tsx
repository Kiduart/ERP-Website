import Head from "next/head";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { ImageBackdropHero } from "@/components/ui/CustomHeroes";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { Link } from "wouter";
import {
  LayoutDashboard,
  BookOpen,
  Users,
  DollarSign,
  GraduationCap,
  Heart,
  Calculator,
  TrendingUp,
  ShieldCheck,
  Building2,
  ArrowRight,
} from "lucide-react";

export default function Platform() {
  const dashboards = [
    {
      title: "Admin Dashboard",
      icon: LayoutDashboard,
      capabilities: ["Enrollment and admission tracking", "Staff oversight and records", "Campus-wide operational analytics", "Document management and compliance"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10",
      href: "/features/student-management",
      cta: "Explore admin workflows"
    },
    {
      title: "Teacher Dashboard",
      icon: BookOpen,
      capabilities: ["Attendance marking for each class", "Gradebook and exam records", "Lesson planning and notes", "Direct messaging with parents"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      href: "/features/attendance",
      cta: "Explore teacher tools"
    },
    {
      title: "HR Dashboard",
      icon: Users,
      capabilities: ["Staff profile management", "Leave application and approval", "Monthly payroll processing", "Performance review records"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10",
      href: "/features/student-management",
      cta: "Explore HR features"
    },
    {
      title: "Finance Dashboard",
      icon: DollarSign,
      capabilities: ["Fee collection and receipt tracking", "Expense recording and categories", "Budget and variance reports", "Payment gateway reconciliation"],
      color: "text-brand-yellow",
      bg: "bg-brand-yellow/20",
      href: "/features/fee-management",
      cta: "Explore finance tools"
    },
    {
      title: "Student Dashboard",
      icon: GraduationCap,
      capabilities: ["Personal grades and report history", "Attendance record and trends", "Assignment submissions and deadlines", "Class timetable and schedule updates"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10",
      href: "/features/reports",
      cta: "Explore student view"
    },
    {
      title: "Parent Dashboard",
      icon: Heart,
      capabilities: ["Child's daily attendance", "Fee payment and receipt history", "Direct communication with class teacher", "School notices and exam alerts"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      href: "/features/communication",
      cta: "Explore parent features"
    },
    {
      title: "Accounting Dashboard",
      icon: Calculator,
      capabilities: ["Income and expense ledger", "Invoice creation and management", "Tax summary and GST reports", "Full audit trail by transaction"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10",
      href: "/features/fee-management",
      cta: "Explore accounting controls"
    },
    {
      title: "Director Dashboard",
      icon: TrendingUp,
      capabilities: ["School-wide performance analytics", "Key indicator monitoring by term", "Strategic planning data views", "Executive summary reports"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10",
      href: "/features/reports",
      cta: "Explore director view"
    },
    {
      title: "System Admin Panel",
      icon: ShieldCheck,
      capabilities: ["User role creation and permissions", "System configuration and settings", "Integration management and API keys", "Security logs and access history"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      href: "/features/communication",
      cta: "Explore access management"
    },
    {
      title: "Multi-Campus Panel",
      icon: Building2,
      capabilities: ["Oversight across all campuses", "Centralised policy and calendar management", "Cross-campus reporting and benchmarks", "Compliance tracking by location"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10",
      href: "/features/reports",
      cta: "Explore multi-campus tools"
    },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <Head>
        <title>School ERP Platform | Role-Based Dashboards for Every Team | KIDUART</title>
        <meta
          name="description"
          content="KIDUART gives every school stakeholder their own dashboard , admin, teacher, finance, student, parent, HR, and director. One platform. Ten role-specific views. Book a free demo."
        />
        <link rel="canonical" href="https://www.kiduart.com/platform" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="KIDUART" />
        <meta property="og:title" content="School ERP Platform | Role-Based Dashboards for Every Team | KIDUART" />
        <meta property="og:description" content="KIDUART gives every school stakeholder their own dashboard , admin, teacher, finance, student, parent, HR, and director. One platform. Ten role-specific views. Book a free demo." />
        <meta property="og:url" content="https://www.kiduart.com/platform" />
        <meta property="og:image" content="https://www.kiduart.com/images/banner/home-hero.jpeg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="School ERP Platform | Role-Based Dashboards for Every Team | KIDUART" />
        <meta name="twitter:description" content="KIDUART gives every school stakeholder their own dashboard , admin, teacher, finance, student, parent, HR, and director. One platform. Ten role-specific views. Book a free demo." />
      </Head>
      {/* CONTENT: Added platform metadata and canonical URL */}
      <ImageBackdropHero
        eyebrow="Built for every role in your school"
        title="One platform. A separate dashboard for every team that uses it."
        subtitle="Admins, teachers, finance officers, HR teams, students, parents, and school directors all work differently. KIDUART gives each role a view that matches their actual responsibilities , not a one-size screen that serves no one particularly well."
        image="/images/banner/platform-hero.jpg"
        fullHeight={true}
        overlayClassName="bg-[linear-gradient(135deg,rgba(250,248,240,0.78),rgba(250,248,240,0.54))]"
        floatingIcons={["LayoutDashboard", "Users", "BarChart2"]}
        actions={(
          <>
            <Link
              href="/demo"
              className="rounded-full bg-brand-navy px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal"
            >
              Request Demo
            </Link>
            <Link
              href="/features"
              className="rounded-full border border-brand-navy/14 bg-white/70 px-8 py-4 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              Explore Features
            </Link>
          </>
        )}
      />

      <section className="section-space relative overflow-hidden bg-white">
        <BackgroundBlobs
          blobs={[
            { color: "hsl(var(--blob-yellow))", size: 300, position: "center-left", opacity: 0.15 },
            { color: "hsl(var(--blob-teal))", size: 300, position: "center-right", opacity: 0.15 },
          ]}
        />
        <FloatingIcons icons={["BookOpen", "Calculator", "Lightbulb"]} count={4} />
        <div className="page-shell relative z-10">
          <SectionReveal className="mx-auto mb-16 max-w-3xl text-center">
            <div className="section-kicker">Role-based views</div>
            <h2 className="section-title mt-6 text-brand-navy">Which dashboard is built for your team?</h2>
            <p className="section-copy mt-4 text-brand-navy/70">
              Each card below represents a real stakeholder role in your school. Click through to explore the specific workflows each dashboard handles.
            </p>
          </SectionReveal>

          <div className="grid gap-x-6 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
            {/* {dashboards.map((dash, idx) => (
              <SectionReveal key={dash.title} delay={idx * 0.05}>
                <Link href={dash.href} className="group relative block h-full">
                  <div
                    className="relative mx-auto flex min-h-[25rem] max-w-[21rem] flex-col justify-end overflow-hidden px-8 pb-9 pt-8 text-brand-beige shadow-[0_24px_65px_rgba(0,48,73,0.14)] transition-transform duration-300 group-hover:-translate-y-1"
                    style={{ clipPath: "polygon(25% 6%, 75% 6%, 100% 50%, 75% 94%, 25% 94%, 0 50%)" }}
                  >
                    <img src={dash.image} alt={dash.title} className="absolute inset-0 h-full w-full object-cover" />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,48,73,0.34),rgba(0,48,73,0.88))]" />
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-[linear-gradient(180deg,transparent,rgba(0,48,73,0.92))]" />

                    <div className="relative z-10">
                      <div className={`mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 ${dash.bg} backdrop-blur-sm`}>
                        <dash.icon className={`h-7 w-7 ${dash.color}`} />
                      </div>
                      <h3 className="text-[clamp(1.2rem,1.05rem+0.42vw,1.45rem)] font-bold text-brand-beige">{dash.title}</h3>
                      <ul className="mt-4 space-y-2">
                        {dash.capabilities.slice(0, 3).map((cap) => (
                          <li key={cap} className="flex items-start gap-2 text-sm leading-6 text-brand-beige/82">
                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-yellow" />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-brand-yellow transition-colors group-hover:text-white">
                        {dash.cta} <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              </SectionReveal>
            ))} */}

            {dashboards.map((dash, idx) => (
              <SectionReveal key={idx} delay={idx * 0.05}>
                <div className="bg-white rounded-2xl p-8 shadow-lg shadow-brand-navy/5 border border-brand-navy/5 flex flex-col h-full hover:shadow-xl hover:border-brand-teal/30 transition-all duration-300 group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-14 h-14 rounded-xl ${dash.bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <dash.icon className={`w-7 h-7 ${dash.color}`} />
                    </div>
                    <h3 className="text-xl font-bold text-brand-navy">{dash.title}</h3>
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-grow">
                    {dash.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-start gap-3 text-brand-navy/80">
                        <div className="w-5 h-5 rounded-full bg-brand-navy/5 flex items-center justify-center text-brand-teal text-xs mt-0.5 flex-shrink-0">✓</div>
                        <span>{cap}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href= {dash.href} className="inline-flex items-center text-brand-teal font-bold hover:text-brand-navy transition-colors group/link mt-auto">
                    Explore {dash.title} <ArrowRight className="w-4 h-4 ml-2 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-brand-navy/5 bg-brand-beige/20 py-24">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <SectionReveal>
            <h2 className="text-3xl font-bold text-brand-navy">Want to see the dashboard built for your role?</h2>
            <p className="mt-4 text-lg text-brand-navy/70">
              Tell us which team you are part of and we will walk through the exact view , and workflows , that apply to your day-to-day work.
            </p>
            <Link
              href="/demo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal hover:shadow-brand-teal/25"
            >
              Book a personalised walkthrough
            </Link>
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
