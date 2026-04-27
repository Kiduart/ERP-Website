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
      capabilities: ["Student enrollment mgmt", "Staff oversight", "Campus analytics", "Document management"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10",
      href: "/features/student-management",
      cta: "Explore student operations",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Teacher Dashboard",
      icon: BookOpen,
      capabilities: ["Class attendance", "Gradebook", "Lesson planning", "Student communication"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      href: "/features/attendance",
      cta: "Explore attendance workflows",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "HR Dashboard",
      icon: Users,
      capabilities: ["Staff profiles", "Leave management", "Payroll processing", "Performance reviews"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10",
      href: "/features/student-management",
      cta: "Explore profile management",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Finance Dashboard",
      icon: DollarSign,
      capabilities: ["Fee collection", "Expense tracking", "Budget reports", "Payment gateway"],
      color: "text-brand-yellow",
      bg: "bg-brand-yellow/20",
      href: "/features/fee-management",
      cta: "Explore fee operations",
      image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Student Dashboard",
      icon: GraduationCap,
      capabilities: ["My grades", "Attendance record", "Assignments", "Timetable"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10",
      href: "/features/reports",
      cta: "Explore academic insights",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Parent Dashboard",
      icon: Heart,
      capabilities: ["Child's progress", "Fee payments", "Teacher messages", "Notifications"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      href: "/features/communication",
      cta: "Explore parent communication",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Accounting Dashboard",
      icon: Calculator,
      capabilities: ["Income/expense ledger", "Invoice management", "Tax reports", "Audit trail"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10",
      href: "/features/fee-management",
      cta: "Explore billing controls",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "Director Dashboard",
      icon: TrendingUp,
      capabilities: ["School-wide analytics", "KPI monitoring", "Strategic insights", "Executive reports"],
      color: "text-brand-teal",
      bg: "bg-brand-teal/10",
      href: "/features/reports",
      cta: "Explore executive reporting",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "System Admin Panel",
      icon: ShieldCheck,
      capabilities: ["User roles & permissions", "System config", "Integration settings", "Security logs"],
      color: "text-brand-orange",
      bg: "bg-brand-orange/10",
      href: "/features/communication",
      cta: "Explore access workflows",
      image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&q=80&w=1200",
    },
    {
      title: "School Management Panel",
      icon: Building2,
      capabilities: ["Multi-campus control", "Policy management", "Academic calendar", "Compliance"],
      color: "text-brand-navy",
      bg: "bg-brand-navy/10",
      href: "/features/reports",
      cta: "Explore management reporting",
      image: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=1200",
    },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      <ImageBackdropHero
        eyebrow="Role-based dashboard views"
        title="One Platform. Every Role. Every Dashboard."
        subtitle="Explore the full range of KIDUART ERP dashboards built for every stakeholder in your school."
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
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
            <div className="section-kicker">Role-based platform views</div>
            <h2 className="section-title mt-6 text-brand-navy">Explore the dashboard that matches each school team</h2>
            <p className="section-copy mt-4 text-brand-navy/70">
              Each card now points to the closest matching feature area instead of sending every user to the same generic destination.
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
            <h2 className="text-3xl font-bold text-brand-navy">Want to see it live?</h2>
            <p className="mt-4 text-lg text-brand-navy/70">
              Get a personalized walkthrough of the dashboards that matter most to your institution.
            </p>
            <Link
              href="/demo"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:bg-brand-teal hover:shadow-brand-teal/25"
            >
              Request Demo
            </Link>
          </SectionReveal>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
