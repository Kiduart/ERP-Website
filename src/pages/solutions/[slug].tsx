import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { BackgroundBlobs } from "@/components/animations/BackgroundBlobs";
import { FloatingIcons } from "@/components/animations/FloatingIcons";
import { 
  GraduationCap, BookOpen, Building2, Heart, Globe,
  CheckCircle, XCircle, ArrowLeft, ArrowRight, Quote, Sparkles
} from "lucide-react";

const solutionsData: Record<string, any> = {
  "students": {
    role: "Students", icon: GraduationCap, 
    headline: "Your Entire Academic Life, Organized.",
    challenges: ["Can't find assignments and deadlines in one place", "No visibility into attendance record", "Confusing fee payment process", "Disconnected communication with teachers"],
    solutions: ["Unified student dashboard with all academic info", "Real-time attendance tracking with history", "Online fee payment portal with digital receipts", "Direct messaging with teachers via parent app"],
    features: ["Personal dashboard", "Assignment tracker", "Grade history", "Digital timetable", "Fee payment portal", "Direct messaging"],
    dayInLife: ["Morning: Check today's timetable and classes", "Attendance: Teacher marks attendance in 30 seconds", "Grades: Instant notification when results published", "Fees: Parents pay online, student sees receipt", "Communication: Get messages from teachers directly"],
    testimonial: { quote: "I can see all my grades, timetable, and fee status in one app. My parents never miss a school update anymore.", name: "Riya Patel", role: "Grade 10 Student" },
    color: "text-brand-orange", bg: "bg-brand-orange/20"
  },
  "teachers": {
    role: "Teachers", icon: BookOpen,
    headline: "Spend Less Time on Admin. More Time Teaching.",
    challenges: ["Manual attendance takes 10+ minutes per class", "Grade entry spread across multiple systems", "Difficult to communicate with all parents simultaneously", "No single view of each student's full history"],
    solutions: ["Mark attendance in under 30 seconds on mobile", "Centralized gradebook with auto report generation", "Bulk messaging to all parents with one click", "Complete student profiles with history and notes"],
    features: ["Mobile attendance", "Digital gradebook", "Parent messaging", "Student profiles", "Lesson planner", "Substitute management"],
    dayInLife: ["8:00 AM: Mark class attendance on mobile", "10:00 AM: Enter quiz scores in gradebook", "12:00 PM: Send homework reminder to parents", "2:00 PM: Review student performance dashboard", "3:00 PM: Generate weekly class report automatically"],
    testimonial: { quote: "What used to take me 2 hours at the end of each day now takes 20 minutes. I have more time for my students.", name: "Ms. Sarah Thompson", role: "Senior Teacher, Greenfield School" },
    color: "text-brand-teal", bg: "bg-brand-teal/20"
  },
  "administrators": {
    role: "School Administrators", icon: Building2,
    headline: "Run a Smarter School From One Dashboard.",
    challenges: ["Data scattered across 5+ different systems", "No real-time visibility into school operations", "Manual report generation takes days", "Staff communication is fragmented"],
    solutions: ["Single unified dashboard for all school data", "Real-time analytics and operational metrics", "One-click automated report generation", "Centralized staff communication and notifications"],
    features: ["Unified dashboard", "Staff management", "Enrollment tracking", "Financial overview", "Communication center", "Compliance reports"],
    dayInLife: ["9:00 AM: Check daily attendance overview", "10:00 AM: Review fee collection status", "11:00 AM: Approve staff leave requests", "2:00 PM: Send school-wide announcement", "4:00 PM: Review weekly performance report"],
    testimonial: { quote: "I have complete visibility into every aspect of our school in real time. Decision-making has never been easier.", name: "Dr. Michael Chen", role: "Principal, Metro International School" },
    color: "text-brand-yellow", bg: "bg-brand-yellow/20"
  },
  "parents": {
    role: "Parents", icon: Heart,
    headline: "Stay Informed. Stay Involved. Always.",
    challenges: ["Don't know how child is doing between parent-teacher meetings", "Miss important school announcements", "Fee payment requires visiting school", "No direct line to teachers"],
    solutions: ["Real-time grade and attendance notifications", "Push notifications for all school communications", "Online fee payment from mobile", "Direct teacher messaging through parent app"],
    features: ["Child progress dashboard", "Attendance alerts", "Online fee payment", "Teacher messaging", "Event calendar", "Report downloads"],
    dayInLife: ["Morning: Check today's attendance notification", "Afternoon: Receive grade update from exam", "Evening: Pay monthly fees online in 2 minutes", "Weekend: Review monthly progress report", "Anytime: Message teacher directly"],
    testimonial: { quote: "I feel completely connected to my child's school life even during work hours. The instant notifications give me peace of mind.", name: "Priya Sharma", role: "Parent, Delhi Public School" },
    color: "text-brand-orange", bg: "bg-brand-orange/20"
  },
  "school-districts": {
    role: "School Districts", icon: Globe,
    headline: "Manage Every School. See Everything. Control Nothing Less.",
    challenges: ["No consolidated view across all campuses", "Inconsistent data collection methods", "Compliance reporting takes weeks to compile", "Staff performance tracking is manual"],
    solutions: ["Multi-campus unified dashboard", "Standardized data collection across all schools", "Automated compliance reports at district level", "Centralized HR and performance management"],
    features: ["Multi-campus dashboard", "District-wide analytics", "Compliance automation", "Centralized HR", "Policy management", "Executive reporting"],
    dayInLife: ["9:00 AM: Review district-wide enrollment dashboard", "10:00 AM: Check compliance status across campuses", "11:00 AM: Review district performance metrics", "2:00 PM: Deploy policy update to all schools", "4:00 PM: Generate monthly executive report"],
    testimonial: { quote: "Managing 15 schools from one dashboard has transformed how we operate. Compliance reporting that used to take weeks now takes minutes.", name: "Dr. Jennifer Willis", role: "District Superintendent" },
    color: "text-brand-teal", bg: "bg-brand-teal/20"
  }
};

export default function SolutionDetail() {
  const { slug } = useParams();
  const data = slug ? solutionsData[slug] : null;

  if (!data) {
    return (
      <PageTransition className="pt-32 pb-24 text-center min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-brand-navy mb-6">Solution Not Found</h1>
        <p className="text-xl text-brand-navy/70 mb-8">The role you are looking for doesn't exist.</p>
        <Link href="/solutions" className="px-8 py-4 rounded-full bg-brand-navy text-white font-bold inline-flex items-center gap-2">
          <ArrowLeft className="w-5 h-5" /> Back to Solutions
        </Link>
      </PageTransition>
    );
  }

  const Icon = data.icon;
  const otherSlugs = Object.keys(solutionsData).filter(s => s !== slug).slice(0, 3);
  const heroStats = [
    { value: data.features.length, label: "core workflows" },
    { value: data.solutions.length, label: "practical fixes" },
    { value: "1", label: "connected workspace" },
  ];

  return (
    <PageTransition className="pt-20 pb-0">
      {/* HERO */}
      <section className="hero-viewport relative overflow-hidden bg-[linear-gradient(180deg,#edf4ff_0%,#f7faff_55%,#ffffff_100%)] py-14 md:py-16">
        <BackgroundBlobs blobs={[
          { color: "#c6d8ff", size: 420, position: "top-left", opacity: 0.26 },
          { color: "#d7e8ff", size: 420, position: "bottom-right", opacity: 0.22 }
        ]} />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.92),transparent_42%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.74),transparent_34%)]" />
        <FloatingIcons icons={["Sparkles", "BookOpen", "Users"]} count={4} heroMode={true} />

        <div className="page-shell hero-viewport-inner relative z-10 flex flex-col items-center justify-center">
          <nav className="mb-6 flex items-center justify-center gap-2 text-sm text-brand-navy/55">
            <Link href="/" className="hover:text-brand-teal">Home</Link>
            <span>/</span>
            <Link href="/solutions" className="hover:text-brand-teal">Solutions</Link>
            <span>/</span>
            <span className="text-brand-navy/75">{data.role}</span>
          </nav>

          <SectionReveal className="mx-auto max-w-4xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-navy/10 bg-white/85 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-brand-navy/70 shadow-sm">
              <Sparkles className={`h-3.5 w-3.5 ${data.color}`} />
              KIDUART for {data.role}
            </div>
            <h1 className="mx-auto mt-6 max-w-3xl text-[clamp(2.35rem,1.6rem+2.25vw,4.7rem)] font-bold leading-[0.96] text-brand-navy">
              {data.headline}
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,0.96rem+0.18vw,1.08rem)] leading-8 text-brand-navy/66">
              {data.solutions[0]} and {data.solutions[1].charAt(0).toLowerCase() + data.solutions[1].slice(1)} with one clean experience tailored for {data.role.toLowerCase()}.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/demo" className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-7 py-3.5 text-base font-bold text-white shadow-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-teal">
                Book Strategy Call <ArrowRight className="h-5 w-5" />
              </Link>
              <Link href="/solutions" className="inline-flex items-center gap-2 rounded-full border border-brand-navy/12 bg-white/80 px-7 py-3.5 text-base font-bold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal">
                <ArrowLeft className="h-5 w-5" />
                Back to Solutions
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {heroStats.map((item) => (
                <div key={item.label} className="rounded-full border border-brand-navy/8 bg-white/80 px-4 py-2 text-sm font-semibold text-brand-navy shadow-sm">
                  <span className={data.color}>{item.value}</span> {item.label}
                </div>
              ))}
            </div>
          </SectionReveal>

          {/* <SectionReveal delay={0.08} className="relative mx-auto mt-14 w-full max-w-5xl">
            <div className="absolute -left-2 top-8 hidden rounded-2xl border border-brand-navy/8 bg-white/90 px-4 py-3 shadow-lg md:block">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/45">quick win</div>
              <div className={`mt-1 text-lg font-bold ${data.color}`}>{data.features[0]}</div>
            </div>
            <div className="absolute -right-2 top-2 hidden rounded-2xl border border-brand-navy/8 bg-white/90 px-4 py-3 shadow-lg lg:block">
              <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-brand-navy/45">daily impact</div>
              <div className="mt-1 text-lg font-bold text-brand-navy">Faster, clearer, connected</div>
            </div>

            <div className="rounded-[2rem] border border-brand-navy/8 bg-white/74 p-3 shadow-[0_24px_80px_rgba(34,74,150,0.12)] backdrop-blur-sm md:p-4">
              <div className="grid gap-4 md:grid-cols-[1.1fr_0.9fr]">
                <div className="rounded-[1.6rem] border border-brand-navy/6 bg-[linear-gradient(180deg,#ffffff,#f6f9ff)] p-6 text-left">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-navy/45">Role overview</div>
                      <h2 className="mt-3 text-2xl font-bold text-brand-navy">{data.role} workspace</h2>
                    </div>
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${data.bg}`}>
                      <Icon className={`h-6 w-6 ${data.color}`} />
                    </div>
                  </div>

                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {data.features.slice(0, 4).map((feature: string) => (
                      <div key={feature} className="rounded-2xl border border-brand-navy/6 bg-white px-4 py-4 shadow-sm">
                        <div className="text-sm font-semibold text-brand-navy">{feature}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 rounded-[1.4rem] bg-brand-navy px-5 py-5 text-white">
                    <div className="text-xs font-bold uppercase tracking-[0.22em] text-brand-yellow">What changes first</div>
                    <p className="mt-3 text-base leading-7 text-white/88">
                      {data.solutions[2]}
                    </p>
                  </div>
                </div>

                <div className="grid gap-4">
                  <div className="rounded-[1.6rem] border border-brand-navy/6 bg-white p-6 shadow-sm text-left">
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-brand-navy/45">A better day</div>
                    <div className="mt-4 space-y-3">
                      {data.dayInLife.slice(0, 3).map((step: string) => {
                        const [time, desc] = step.split(": ");
                        return (
                          <div key={step} className="rounded-2xl bg-brand-beige/30 px-4 py-4">
                            <div className={`text-xs font-bold uppercase tracking-[0.2em] ${data.color}`}>{time}</div>
                            <div className="mt-1 text-sm leading-6 text-brand-navy/75">{desc}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="rounded-[1.6rem] border border-brand-navy/6 bg-[linear-gradient(135deg,#0c716b,#0b5860)] p-6 text-left text-white shadow-sm">
                    <div className="text-xs font-bold uppercase tracking-[0.24em] text-white/60">Proof point</div>
                    <p className="mt-3 text-lg font-semibold leading-8">
                      "{data.testimonial.quote}"
                    </p>
                    <div className="mt-4 text-sm font-medium text-white/70">{data.testimonial.name}</div>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal> */}
        </div>
      </section>

      {/* CHALLENGES VS SOLUTIONS */}
      <section className="py-24 bg-brand-beige/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
            <SectionReveal>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-navy/10">
                <XCircle className="w-8 h-8 text-red-500" />
                <h2 className="text-3xl font-bold text-brand-navy">The Challenges</h2>
              </div>
              <ul className="space-y-6">
                {data.challenges.map((c: string, i: number) => (
                  <li key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-brand-navy/5 text-brand-navy/80 text-lg">
                    "{c}"
                  </li>
                ))}
              </ul>
            </SectionReveal>
            
            <SectionReveal delay={0.2}>
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-brand-navy/10">
                <CheckCircle className="w-8 h-8 text-brand-teal" />
                <h2 className="text-3xl font-bold text-brand-navy">The Solution</h2>
              </div>
              <ul className="space-y-6">
                {data.solutions.map((s: string, i: number) => (
                  <li key={i} className="bg-brand-teal/10 p-6 rounded-2xl border border-brand-teal/20 text-brand-navy font-medium text-lg flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-brand-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 rounded-full bg-brand-teal" />
                    </div>
                    {s}
                  </li>
                ))}
              </ul>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* KEY FEATURES */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionReveal className="mb-16">
            <h2 className="text-3xl font-bold text-brand-navy">Everything You Need</h2>
          </SectionReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {data.features.map((f: string, i: number) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="px-6 py-3 rounded-full bg-brand-navy text-white font-bold shadow-md">
                  {f}
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* DAY IN THE LIFE */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionReveal className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">A Day in the Life</h2>
            <p className="text-white/70 text-lg">How {data.role.toLowerCase()} use KIDUART every day.</p>
          </SectionReveal>

          <div className="space-y-8 relative">
            <div className="absolute left-6 top-4 bottom-4 w-px bg-white/10" />
            {data.dayInLife.map((step: string, i: number) => {
              const [time, desc] = step.split(': ');
              return (
                <SectionReveal key={i} delay={i * 0.1} className="relative pl-16">
                  <div className="absolute left-4 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-teal border-4 border-brand-navy" />
                  <div className="bg-white/5 rounded-2xl p-6 border border-white/10">
                    <span className="text-brand-yellow font-bold text-sm uppercase tracking-wider block mb-2">{time}</span>
                    <span className="text-lg text-white/90">{desc}</span>
                  </div>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 bg-brand-beige/20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <SectionReveal className="bg-white p-12 rounded-[3rem] shadow-xl shadow-brand-navy/5 border border-brand-navy/5 relative">
            <Quote className={`w-16 h-16 ${data.color} absolute top-8 left-8 opacity-20`} />
            <p className="text-2xl md:text-3xl font-serif text-brand-navy leading-relaxed mb-8 italic relative z-10">
              "{data.testimonial.quote}"
            </p>
            <div>
              <div className="font-bold text-xl text-brand-navy">{data.testimonial.name}</div>
              <div className={`font-medium ${data.color}`}>{data.testimonial.role}</div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* RELATED SOLUTIONS */}
      <section className="py-16 bg-white border-t border-brand-navy/5">
        <div className="max-w-7xl mx-auto px-4">
          <SectionReveal className="mb-8">
            <h3 className="text-xl font-bold text-brand-navy text-center">Explore other roles</h3>
          </SectionReveal>
          <div className="flex flex-wrap justify-center gap-4">
            {otherSlugs.map(s => {
              const r = solutionsData[s];
              const RIcon = r.icon;
              return (
                <Link key={s} href={`/solutions/${s}`} className="flex items-center gap-2 px-6 py-3 rounded-full border border-brand-navy/10 hover:border-brand-teal hover:bg-brand-teal/5 transition-all font-medium text-brand-navy">
                  <RIcon className="w-5 h-5" /> {r.role}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaSection />
    </PageTransition>
  );
}
