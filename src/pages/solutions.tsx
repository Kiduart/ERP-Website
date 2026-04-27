import Head from "next/head";
import { Link } from "wouter";
import { ArrowRight, BookOpen, Building, Building2, CheckCircle2, Presentation, Users } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { CtaSection } from "@/components/ui/CtaSection";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { useState } from "react";

type RoleSolution = {
  title: string;
  shortValue: string;
  slug: string;
  icon: typeof Users;
  accent: string;
  cardClass: string;
  iconClass: string;
  challenges: string[];
  solution: string;
  cta: string;
};

const roles: RoleSolution[] = [
  {
    title: "For Teachers",
    shortValue: "Save teaching time by automating class admin in one place.",
    slug: "teachers",
    icon: Presentation,
    accent: "text-brand-teal",
    cardClass: "bg-white text-brand-navy border border-brand-navy/10",
    iconClass: "text-brand-teal",
    challenges: [
      "Too much manual attendance and grading",
      "Time wasted on admin work",
      "Scattered student data",
    ],
    solution:
      "Mark attendance in 1 click, automate grading, and manage all class data from one dashboard, saving up to 10+ hours every week.",
    cta: "See How It Works for Teachers",
  },
  {
    title: "For Parents",
    shortValue: "Keep families connected with instant visibility and faster communication.",
    slug: "parents",
    icon: Users,
    accent: "text-brand-orange",
    cardClass: "bg-brand-teal text-white",
    iconClass: "text-brand-beige",
    challenges: [
      "No clear view of daily attendance",
      "Fee payments feel slow and manual",
      "Important alerts get missed",
    ],
    solution:
      "Track attendance, pay fees online, and receive instant school alerts from one parent app that improves engagement without extra follow-ups.",
    cta: "View Parent App Demo",
  },
  {
    title: "For Students",
    shortValue: "Help students stay organized, informed, and accountable every day.",
    slug: "students",
    icon: BookOpen,
    accent: "text-brand-navy",
    cardClass: "bg-brand-beige text-brand-navy",
    iconClass: "text-brand-orange",
    challenges: [
      "Timetable changes are easy to miss",
      "Assignments are scattered",
      "Performance tracking is unclear",
    ],
    solution:
      "Give students one dashboard to view timetables, follow assignments, and track performance so they can stay focused without confusion.",
    cta: "Explore Student Dashboard",
  },
  {
    title: "For School Administrators",
    shortValue: "Get complete control of your school operations in one place.",
    slug: "administrators",
    icon: Building2,
    accent: "text-brand-yellow",
    cardClass: "bg-brand-navy text-white",
    iconClass: "text-brand-yellow",
    challenges: [
      "Operations run across disconnected tools",
      "Reporting takes too much manual effort",
      "Oversight is hard across teams",
    ],
    solution:
      "Manage admissions, attendance, fees, staff, and reports from one ERP dashboard with automation that improves speed, visibility, and control.",
    cta: "See Admin Workflows in Action",
  },
];

const districtFeatures = [
  "Multi-school dashboard for centralized oversight",
  "Centralized reporting across campuses and branches",
  "Role-based permissions for district and school-level teams",
];

const impactStats = [
  { value: "40%", label: "less administrative workload" },
  { value: "10+ hrs", label: "saved weekly for teachers" },
  { value: "24/7", label: "parent visibility and alerts" },
];


const cards = [
  {
    id: 1,
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: 2,
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=900",
  },
  {
    id: 3,
    img: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=900",
  },
];


export default function Solutions() {
  const [active, setActive] = useState<number | null>(1);
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Head>
        <title>School ERP Solutions for Teachers, Parents, Students & Administrators</title>
        <meta
          name="description"
          content="Explore school ERP solutions for teachers, parents, students, administrators, and districts. Discover ERP for schools India teams can use to reduce admin work and improve engagement."
        />
        <meta
          name="keywords"
          content="school ERP solutions, school management system for teachers, ERP for schools India, school ERP for parents, school ERP for administrators"
        />
      </Head>

      <PageTransition className="pt-20 pb-0">
        <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f7fb,#ffffff)] py-24">
          <BackgroundBlobs
            blobs={[
              { color: "hsl(var(--blob-yellow))", size: 360, position: "top-left", opacity: 0.12 },
              { color: "hsl(var(--blob-teal))", size: 360, position: "bottom-right", opacity: 0.1 },
            ]}
          />

          <div className="page-shell relative z-10 grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <SectionReveal>
              <div className="inline-flex rounded-full border border-brand-navy/10 bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-brand-teal">
                Role-based school ERP solutions
              </div>
              <h1 className="mt-6 max-w-xl text-[clamp(2.15rem,1.4rem+1.9vw,3.6rem)] font-bold leading-[1.03] text-brand-navy">
                Find the right solution for every team in your school.
              </h1>
              <p className="mt-5 max-w-xl text-[clamp(1rem,0.95rem+0.15vw,1.05rem)] leading-8 text-brand-navy/72">
                Explore how teachers, parents, students, and administrators each get workflows designed for their daily responsibilities instead of one generic screen for everyone.
              </p>

              <div className="mt-8 flex max-w-xl items-center gap-3 rounded-full border border-brand-navy/10 bg-white px-4 py-3 shadow-lg shadow-brand-navy/5">
                <input
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search by team, workflow, or outcome"
                  className="field-surface w-full rounded-full text-sm font-medium text-brand-navy/70 outline-none placeholder:text-brand-navy/45"
                />
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-navy text-white">
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {["Teachers", "Parents", "Students", "School admins", "District teams"].map((item) => (
                  <div key={item} className="rounded-full bg-brand-beige px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-brand-navy/70">
                    {item}
                  </div>
                ))}
              </div>
            </SectionReveal>

            <SectionReveal delay={0.08} className="relative hidden lg:block">
              {/* Background shapes */}
              {/* <div className="absolute right-6 top-12 h-[19rem] w-[14rem] rounded-[2rem] bg-brand-teal" />
              <div className="absolute right-0 top-24 h-[19rem] w-[14rem] rounded-[2rem] bg-brand-navy/12" /> */}

              <div className="relative mx-auto w-[30rem] h-[28rem]">
                {/* Floating stats card */}
                <div className="absolute left-10 -bottom-10 z-50 rounded-[1.5rem] border border-brand-navy/10 bg-white px-5 py-4 shadow-xl">
                  <div className="text-center text-sm font-semibold text-brand-navy/50">
                    Live snapshots
                  </div>
                  <div className="mt-3 space-y-1">
                    {["319 job roles", "265 school flows", "324 admin actions"].map((item) => (
                      <div
                        key={item}
                        className="rounded-xl bg-brand-beige/60 px-4 py-1 text-sm font-bold text-brand-navy"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Cards */}
                <div className="relative flex items-center justify-center h-full">
                  {cards.map((card, index) => {
                    const isActive = active === card.id;

                    return (
                      <div
                        key={card.id}
                        onMouseEnter={() => setActive(card.id)}
                        className={`
          absolute cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

          ${index === 0 ? "translate-x-[0px] translate-y-[0px] rotate-[0deg] z-20" : ""}
          ${index === 1 ? "translate-x-[50px] translate-y-[30px] rotate-[6deg] z-20" : ""}
          ${index === 2 ? "translate-x-[110px] translate-y-[60px] rotate-[12deg] z-10" : ""}

          ${isActive
                            ? "scale-105 z-30 shadow-[0_40px_100px_rgba(0,0,0,0.25)]"
                            : "scale-95 opacity-70"}
        `}
                      >
                        <div className="w-[18rem] rounded-[2rem] border border-black/10 bg-[#2b211b] p-3">
                          <img
                            src={card.img}
                            alt="preview"
                            className="h-[23rem] w-full rounded-[1.5rem] object-cover"
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </SectionReveal>

          </div>
        </section>

        <section className="relative overflow-hidden bg-white py-24">
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 320, position: "top-left", opacity: 0.14 },
              { color: "#0c716b", size: 320, position: "bottom-right", opacity: 0.14 },
            ]}
          />
          <FloatingIcons icons={["Star", "Award", "Lightbulb"]} count={4} />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="mx-auto mb-16 max-w-4xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-teal">Role-Based School ERP Solutions</p>
              <h2 className="mt-4 text-4xl font-bold text-brand-navy">Every stakeholder gets a clearer path, not just more software</h2>
              <p className="mt-4 text-lg leading-8 text-brand-navy/70">
                This page focuses on outcomes, not generic ERP features. Each solution is built around what teachers, parents, students, and administrators need to do faster and better.
              </p>
            </SectionReveal>

            <div className="grid gap-8 md:grid-cols-2">
              {roles.map((role, index) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 90, x: index % 2 === 0 ? -50 : 50, rotate: index % 2 === 0 ? -4 : 4, scale: 0.92 }}
                  whileInView={{ opacity: 1, y: 0, x: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-120px" }}
                  transition={{ duration: 0.75, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex h-full flex-col rounded-[2rem] p-8 shadow-lg shadow-brand-navy/5 ${role.cardClass}`}
                  style={role.cardClass.includes("bg-brand-navy") ? { color: "#fcf6d3" } : undefined}
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15 shadow-sm">
                    <role.icon className={`h-8 w-8 ${role.iconClass}`} />
                  </div>

                  <h2 className="text-3xl font-bold">{role.title}</h2>
                  <p className="mt-3 text-lg leading-7 opacity-85">{role.shortValue}</p>

                  <div className="mt-8">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-65">Challenges</p>
                    <div className="mt-4 space-y-3">
                      {role.challenges.map((challenge) => (
                        <div key={challenge} className="flex items-start gap-3">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 opacity-75" />
                          <span className="leading-7">{challenge}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="my-8 h-px bg-current opacity-15" />

                  <div className="flex flex-grow flex-col">
                    <p className="text-sm font-bold uppercase tracking-[0.22em] opacity-65">Solution</p>
                    <p className="mt-4 text-lg font-medium leading-8">{role.solution}</p>

                    <Link
                      href={`/solutions/${role.slug}`}
                      className="mt-8 inline-flex items-center gap-2 font-bold transition-opacity hover:opacity-80"
                    >
                      {role.cta}
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-brand-navy py-24" style={{ color: "#fcf6d3" }}>
          <BackgroundBlobs
            blobs={[
              { color: "#fcbf49", size: 380, position: "top-right", opacity: 0.16 },
              { color: "#0c716b", size: 380, position: "bottom-left", opacity: 0.16 },
            ]}
          />
          <FloatingIcons icons={["Building", "Users", "ShieldCheck", "BarChart2"]} count={4} />

          <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid items-center gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <SectionReveal>
                <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-semibold text-brand-yellow">
                  Enterprise District Solution
                </div>
                <h2 className="mt-6 text-4xl font-bold text-brand-beige">Built for district leaders and multi-campus organizations</h2>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-brand-beige/80">
                  If you manage multiple schools, you need more than a basic ERP. KIDUART gives district teams centralized visibility, stronger governance, and faster decision-making across locations.
                </p>

                <div className="mt-8 space-y-4">
                  {districtFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-4">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-yellow" />
                      <span className="text-brand-beige/90">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link
                  href="/solutions/school-districts"
                  className="mt-8 inline-flex items-center gap-2 font-bold text-brand-yellow transition-opacity hover:opacity-80"
                >
                  Explore District-Level ERP
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </SectionReveal>

              <SectionReveal delay={0.12} className="rounded-[2rem] border border-white/10 bg-white/5 p-7 shadow-2xl">
                <div className="rounded-[1.75rem] border border-white/10 bg-brand-beige p-6 text-brand-navy">
                  <div className="flex items-center justify-between border-b border-brand-navy/10 pb-4">
                    <div>
                      <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-teal">District Overview</p>
                      <h3 className="mt-2 text-2xl font-bold">One command view across schools</h3>
                    </div>
                    <Building className="h-10 w-10 text-brand-orange" />
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-3">
                    {[
                      { label: "Schools Connected", value: "12" },
                      { label: "Live Reports", value: "48" },
                      { label: "Role Profiles", value: "22" },
                    ].map((item) => (
                      <div key={item.label} className="rounded-2xl bg-white px-4 py-5 shadow-sm">
                        <p className="text-sm text-brand-navy/55">{item.label}</p>
                        <p className="mt-2 text-2xl font-extrabold">{item.value}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 space-y-3">
                    {[
                      "Compare attendance, fees, and academic trends across branches",
                      "Standardize reporting for leadership reviews and audits",
                      "Control access by district office, principal, finance, and staff roles",
                    ].map((point) => (
                      <div key={point} className="rounded-2xl bg-brand-beige/35 px-4 py-4">
                        <p className="text-sm leading-6 text-brand-navy/78">{point}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden border-y border-brand-navy/5 bg-brand-beige/25 py-24">
          <BackgroundBlobs blobs={[{ color: "#003049", size: 380, position: "center-left", opacity: 0.12 }]} />
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionReveal className="rounded-[2rem] border border-brand-navy/10 bg-white p-8 shadow-xl shadow-brand-navy/5 md:p-12">
              <p className="text-sm font-bold uppercase tracking-[0.24em] text-brand-orange">Why This Matters</p>
              <h2 className="mt-4 text-4xl font-bold text-brand-navy">Better school systems create better daily outcomes</h2>
              <p className="mt-4 max-w-3xl text-lg leading-8 text-brand-navy/72">
                Schools using KIDUART ERP reduce administrative workload by up to 40% and improve parent engagement significantly, giving staff more time for teaching, planning, and student support.
              </p>

              <div className="mt-10 grid gap-6 md:grid-cols-3">
                {impactStats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl bg-brand-beige/20 px-6 py-8 text-center">
                    <div className="text-4xl font-extrabold text-brand-navy">{stat.value}</div>
                    <p className="mt-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-navy/60">{stat.label}</p>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </section>

        <CtaSection
          title="Book a Demo for Your School Team"
          subtitle="See how KIDUART delivers school ERP solutions for teachers, parents, students, administrators, and multi-school groups."
        />
      </PageTransition>
    </>
  );
}
