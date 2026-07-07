import { PageSeoHead } from "@/components/seo/PageSeoHead";
import { featurePageSeo } from "@/lib/pageSeo";
import { useParams, Link } from "wouter";
import { featureDashboardAlt, heroImgProps, IMAGE_DIMENSIONS } from "@/lib/imageSeo";
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
  Bus,
  Library,
  UserCog,
  ClipboardList,
  Building2,
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
      { step: 2, title: "Build profiles", desc: "The system creates full student profiles from enrollment data without duplicate entry." },
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
      { role: "Teacher", benefit: "Mark full class attendance quickly from web or mobile" },
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
      "Automated timetable suggestions from your constraints",
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
      "Integrated announcements, events, notices, and messages keep your school community informed through the channels families actually use.",
    capabilities: [
      "School-wide announcements",
      "Events and notices management",
      "Direct teacher-parent messaging",
      "SMS, email, and WhatsApp communication support",
      "Event and holiday alerts",
      "Notice board workflows",
      "Emergency broadcast",
    ],
    howItWorks: [
      { step: 1, title: "Send message", desc: "Staff compose messages targeting classes, grades, or parent groups." },
      { step: 2, title: "Deliver across channels", desc: "The system sends via app, email, and SMS based on user preference." },
      { step: 3, title: "Capture replies", desc: "Parents respond through the parent portal and conversations stay organized." },
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
      "Generate academic, financial, and operational reports from live data. Schedule automated reports or build custom dashboards for each role.",
    capabilities: [
      "Academic report generation",
      "Financial report generation",
      "Attendance report generation",
      "Student-specific report views",
      "Analytics dashboards",
      "Custom report builder",
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
  "hr-payroll": {
    icon: UserCog,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "HR & Payroll Management",
    headline: "Handle staff operations and payroll without parallel spreadsheets.",
    description:
      "KIDUART combines staff records, leaves, onboarding support, performance tracking, and payroll processing in one school HR workflow.",
    capabilities: [
      "Staff profile and designation management",
      "Leave requests and approval workflows",
      "Payroll processing with deductions",
      "Onboarding and recruitment tracking",
      "Performance review records",
      "Bulk staff data import",
    ],
    howItWorks: [
      { step: 1, title: "Manage staff records", desc: "Create and maintain staff profiles, role details, and department mapping in one place." },
      { step: 2, title: "Run leave workflows", desc: "Teachers and staff raise leave requests while admins review and approve from the HR dashboard." },
      { step: 3, title: "Process payroll", desc: "Run payroll cycles with salary components, deductions, and payroll-ready summaries." },
      { step: 4, title: "Track performance", desc: "Capture review notes and performance inputs for better appraisal conversations." },
    ],
    whoItHelps: [
      { role: "HR Team", benefit: "One workflow for staff records, leave approvals, and monthly payroll tasks" },
      { role: "School Leadership", benefit: "Clear visibility into staffing health, payroll status, and performance trends" },
      { role: "Teachers & Staff", benefit: "Simpler leave submission and cleaner HR communication history" },
      { role: "Accounts Team", benefit: "Better payroll coordination with fewer handoffs and manual reconciliations" },
    ],
  },
  transport: {
    icon: Bus,
    color: "text-brand-orange",
    bg: "bg-brand-orange/10",
    title: "Transport Management",
    headline: "Run school transport with route-level clarity every day.",
    description:
      "Coordinate vehicles, routes, drivers, maintenance, and live tracking from one transport module instead of scattered phone calls and registers.",
    capabilities: [
      "Vehicle and route management",
      "Driver profile management",
      "Live route tracking support",
      "Maintenance record management",
      "Transport notifications",
      "Student route assignment support",
    ],
    howItWorks: [
      { step: 1, title: "Configure transport setup", desc: "Create vehicles, routes, stops, and driver assignments by school requirements." },
      { step: 2, title: "Assign students to routes", desc: "Map students to their route and stop details for cleaner daily planning." },
      { step: 3, title: "Track trip operations", desc: "Monitor route activity and send transport-related updates to relevant families." },
      { step: 4, title: "Maintain fleet records", desc: "Track maintenance logs and service needs to reduce avoidable transport downtime." },
    ],
    whoItHelps: [
      { role: "Transport Coordinator", benefit: "One control layer for routes, drivers, vehicles, and daily movement" },
      { role: "School Administrator", benefit: "Better visibility into transport reliability and parent-facing updates" },
      { role: "Parents", benefit: "Clearer transport communication and fewer uncertain pickup/drop questions" },
      { role: "Operations Team", benefit: "Maintenance and route records that are easier to audit and improve" },
    ],
  },
  library: {
    icon: Library,
    color: "text-brand-navy",
    bg: "bg-brand-navy/10",
    title: "Library Management",
    headline: "Keep library operations organized across books, members, and returns.",
    description:
      "Run catalog, issue-return, reservations, fines, and member activity through one system designed for school library routines.",
    capabilities: [
      "Book catalog and inventory tracking",
      "Issue and return workflows",
      "Member management",
      "Fine and due tracking",
      "Book reservation support",
      "Library reports",
    ],
    howItWorks: [
      { step: 1, title: "Maintain catalog", desc: "Add books and maintain organized catalog records with searchable entries." },
      { step: 2, title: "Issue and return books", desc: "Track every issue-return event so circulation remains clean and transparent." },
      { step: 3, title: "Manage dues and reservations", desc: "Handle overdue books, fines, and reservations without manual tracking sheets." },
      { step: 4, title: "Review library reports", desc: "Monitor usage trends and borrowing patterns for better collection planning." },
    ],
    whoItHelps: [
      { role: "Librarian", benefit: "Simpler day-to-day book issue, return, and due management" },
      { role: "School Administrator", benefit: "Visibility into library usage and operational consistency" },
      { role: "Teachers", benefit: "Easier coordination on reading resources and student access" },
      { role: "Students", benefit: "Clearer access to library books and borrowing history" },
    ],
  },
  "discipline-ptm-diary": {
    icon: ClipboardList,
    color: "text-brand-yellow",
    bg: "bg-brand-yellow/20",
    title: "Discipline, PTM & Class Diary",
    headline: "Keep student follow-ups documented from class incidents to parent meetings.",
    description:
      "Track discipline entries, PTM schedules, and class diary notes in one flow so teachers and school leaders can follow through without confusion.",
    capabilities: [
      "Discipline record management",
      "PTM scheduling and tracking",
      "Class diary updates",
      "Teacher notes and follow-up visibility",
      "Parent communication context support",
      "Role-based access to student follow-up records",
    ],
    howItWorks: [
      { step: 1, title: "Record classroom incidents", desc: "Teachers log discipline or behavioral notes in the student workflow." },
      { step: 2, title: "Schedule PTM discussions", desc: "Set parent-teacher meeting slots and keep meeting context linked to student records." },
      { step: 3, title: "Maintain class diary", desc: "Capture class-level notes, important observations, and day-wise teaching context." },
      { step: 4, title: "Close the follow-up loop", desc: "School teams review status and next actions without losing historical context." },
    ],
    whoItHelps: [
      { role: "Teachers", benefit: "One place for class diary notes, discipline entries, and PTM context" },
      { role: "Coordinators", benefit: "Better visibility into unresolved student follow-ups across classes" },
      { role: "School Leadership", benefit: "Structured records for behavior and parent engagement conversations" },
      { role: "Parents", benefit: "More consistent PTM communication and clearer follow-up context" },
    ],
  },
  "reporting-suite": {
    icon: PieChart,
    color: "text-brand-bronze",
    bg: "bg-brand-bronze/10",
    title: "Full Reporting Suite",
    headline: "Move from scattered reports to one reporting layer across school operations.",
    description:
      "KIDUART supports academic, financial, attendance, student, analytics, and custom reports so leadership can review operations from one source.",
    capabilities: [
      "Academic report generation",
      "Financial reporting and summaries",
      "Attendance reporting",
      "Student-specific reporting",
      "Analytics dashboards",
      "Custom report creation",
    ],
    howItWorks: [
      { step: 1, title: "Pick the report type", desc: "Start from academic, finance, attendance, student, analytics, or custom report views." },
      { step: 2, title: "Apply filters", desc: "Filter by class, date range, section, term, or other operational parameters." },
      { step: 3, title: "Generate and review", desc: "Generate report outputs for leadership, compliance, or day-to-day team follow-ups." },
      { step: 4, title: "Share with stakeholders", desc: "Export or circulate reports across school teams for faster decisions." },
    ],
    whoItHelps: [
      { role: "School Leadership", benefit: "One reporting system for academic, financial, and operational decision-making" },
      { role: "Academic Team", benefit: "Better student and class-level performance visibility across terms" },
      { role: "Finance Team", benefit: "Cleaner reporting around collections, dues, and financial status" },
      { role: "Operations Team", benefit: "Attendance and student-level insights that are easier to act on" },
    ],
  },
  "organization-management": {
    icon: Building2,
    color: "text-brand-teal",
    bg: "bg-brand-teal/10",
    title: "Organization & Multi-School Management",
    headline: "Coordinate multiple schools with centralized oversight and cleaner governance.",
    description:
      "For school groups, KIDUART supports organization-level visibility, school management, module access controls, billing operations, and support/helpdesk workflows.",
    capabilities: [
      "Organization and school-level management",
      "Role and permission governance",
      "Module entitlement controls",
      "Billing and subscription operations",
      "Centralized support/helpdesk workflows",
      "Cross-school reporting visibility",
    ],
    howItWorks: [
      { step: 1, title: "Set up organization structure", desc: "Map schools under organization-level oversight with role-based governance." },
      { step: 2, title: "Control modules and access", desc: "Enable modules and permissions by school, role, and operational need." },
      { step: 3, title: "Run billing and support operations", desc: "Track billing lifecycle and support workflows through centralized processes." },
      { step: 4, title: "Review cross-school visibility", desc: "Use organization-level views to compare performance and operations across schools." },
    ],
    whoItHelps: [
      { role: "Group Leadership", benefit: "Centralized multi-school visibility with cleaner governance controls" },
      { role: "Platform Administrators", benefit: "Structured module entitlements, role controls, and operational oversight" },
      { role: "Support Teams", benefit: "Helpdesk and ticket workflows with clearer ownership and follow-up" },
      { role: "Finance & Operations", benefit: "Better billing and cross-school operational coordination" },
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
    <>
      <PageSeoHead {...featurePageSeo(slug!, data.title, data.description)} />
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
                alt={featureDashboardAlt(data.title)}
                className="h-auto w-full rounded-[1.3rem] object-cover"
                {...heroImgProps(IMAGE_DIMENSIONS.dashboard)}
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
    </>
  );
}
