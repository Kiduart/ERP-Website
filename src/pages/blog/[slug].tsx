import { useParams, Link } from "wouter";
import { PageTransition, SectionReveal } from "@/components/ui/PageTransition";
import { CtaSection } from "@/components/ui/CtaSection";
import { ArrowLeft, ArrowRight, Clock, Calendar, Facebook, Twitter, Linkedin, Link as LinkIcon, Mail } from "lucide-react";
import React from "react";

const blogData: Record<string, any> = {
  "ai-in-education-2026": {
    title: "The Future of AI in Education: What Schools Need to Know in 2026",
    author: "Dr. Priya Sharma", date: "March 5, 2026", category: "AI in Education",
    readTime: "8 min read",
    excerpt: "Artificial intelligence is no longer a future concept for education â€” it's happening now, reshaping how schools operate, how teachers teach, and how students learn.",
    content: `## The AI Revolution in Education Is Here

In 2026, artificial intelligence has moved from experimental to essential in modern education systems. Schools that have embraced AI-powered management tools are reporting significant gains: 40% reduction in administrative work, 25% improvement in student retention rates, and near-perfect fee collection efficiency.

## What AI Means for School Administrators

For school administrators, AI is the great equalizer. Instead of spending hours compiling reports, modern ERP platforms like KIDUART can generate comprehensive school performance reports in seconds. Attendance patterns are analyzed automatically, and the system flags concerning trends before they become problems.

**Key benefits administrators are seeing in 2026:**
- Automated report generation saving 3-4 hours per week
- Predictive analytics identifying students needing intervention weeks earlier
- Smart scheduling that reduces teacher conflicts by 85%
- Fee defaulter predictions with 78% accuracy

## The Teacher Experience

Teachers in AI-enabled schools describe a fundamentally different day. One-click attendance. Automatic parent notifications. AI-suggested grade patterns. The technology handles the routine so teachers can focus on what matters: connection and instruction.

## Parent Engagement in the AI Era

Parent portals powered by AI notify parents exactly when they need to know something. Not too many notifications (alert fatigue is real), and not too few. AI learns family communication preferences and adapts accordingly.

## What Schools Should Do Now

1. **Audit your current systems**: Identify which administrative tasks are consuming the most time
2. **Start with high-impact areas**: Fee collection and attendance are quickest wins
3. **Train your team**: AI tools require human adoption to realize their potential
4. **Measure outcomes**: Track time savings and student outcome improvements

## Conclusion

The schools thriving in 2026 are those that embraced AI not as a replacement for human judgment, but as an amplifier. KIDUART's KIDUORBIT AI is built on exactly this principle â€” augmenting every role in the school community, not replacing it.`,
    relatedSlugs: ["school-erp-benefits", "digital-transformation-schools", "student-data-management"]
  },
  "school-erp-benefits": {
    title: "5 Proven Benefits of Implementing a School ERP System",
    author: "James Mitchell", date: "February 20, 2026", category: "School Management",
    readTime: "6 min read",
    excerpt: "Schools that implement a modern ERP system see measurable improvements in efficiency, parent satisfaction, and student outcomes within the first 90 days.",
    content: `## Why School ERP Is No Longer Optional

Modern schools manage hundreds of moving parts: enrollments, attendance, grades, fees, staff, communication, compliance. Trying to manage these with spreadsheets and siloed systems creates inefficiency, errors, and staff burnout.

## Benefit 1: Dramatic Time Savings

Studies show school administrators spend 30-40% of their time on manual data entry and report generation. A properly implemented ERP reduces this to under 10%. That's hours returned to every staff member every week.

## Benefit 2: Improved Fee Collection

Schools using automated fee management report 95%+ collection rates compared to 70-75% for manual collection. Automated reminders, online payment options, and real-time tracking make a measurable difference.

## Benefit 3: Better Parent Engagement

Parent satisfaction scores at ERP-enabled schools are consistently higher. When parents have 24/7 access to their child's attendance, grades, and school communications through an app, engagement increases dramatically.

## Benefit 4: Data-Driven Decisions

A unified ERP gives administrators a real-time dashboard of every aspect of school health â€” enrollment trends, financial performance, academic outcomes, and staff metrics. Decision-making becomes evidence-based.

## Benefit 5: Compliance Made Simple

Regulatory reporting that used to take days can be completed in minutes when all data is centralized and structured. Schools reduce compliance risk and audit preparation time significantly.

## The 90-Day Impact

Most schools implementing KIDUART report:
- Administrative workload down 35% within 30 days
- Fee collection efficiency up 20% within 60 days
- Parent satisfaction scores up 28% within 90 days

The ROI calculation for school ERP is straightforward: staff time saved + improved collections + reduced errors = rapid payback.`,
    relatedSlugs: ["ai-in-education-2026", "parent-teacher-communication", "digital-transformation-schools"]
  },
  "digital-transformation-schools": {
    title: "The Complete Guide to Digital Transformation for Schools",
    author: "Sarah Williams", date: "February 10, 2026", category: "Education Technology",
    readTime: "10 min read",
    excerpt: "Digital transformation in education isn't just about buying new software â€” it's a cultural shift that requires strategy, leadership, and the right technology foundation.",
    content: `## What Digital Transformation Actually Means for Schools

Digital transformation is overused and often misunderstood. For schools, it doesn't mean replacing teachers with technology. It means removing every unnecessary friction point between your school's mission and its execution.

## The Four Pillars of School Digital Transformation

### 1. Unified Data Infrastructure
The foundation is a single source of truth for all school data. Student records, staff information, financial data, and academic outcomes should all live in one integrated system.

### 2. Automated Workflows
Manual processes that can be automated should be automated: attendance marking, report generation, fee reminders, enrollment forms, and compliance reporting.

### 3. Connected Community
Digital transformation connects administrators, teachers, parents, and students in real time. Everyone has the information they need, when they need it.

### 4. Data-Driven Culture
The final pillar is cultural: using data to make decisions, measure outcomes, and continuously improve. This requires both the right tools and the willingness to use them.

## Common Transformation Mistakes

- **Buying technology without a plan**: Software doesn't transform a school. Leadership and adoption do.
- **Underinvesting in training**: The best platform fails without proper onboarding.
- **Trying to boil the ocean**: Start with 1-2 high-impact areas and expand.
- **Ignoring parent and student experience**: The community should feel the transformation.

## A Practical Roadmap

**Month 1-2**: Assessment and selection
**Month 3**: Core implementation (student records, attendance)
**Month 4-5**: Financial and communication modules
**Month 6+**: Advanced analytics and AI features`,
    relatedSlugs: ["school-erp-benefits", "ai-in-education-2026", "student-data-management"]
  },
  "parent-teacher-communication": {
    title: "Revolutionizing Parent-Teacher Communication with Technology",
    author: "Michael Chen", date: "January 28, 2026", category: "School Management",
    readTime: "5 min read",
    excerpt: "The gap between parents and schools has historically been one of education's biggest challenges. Modern communication platforms are finally bridging it.",
    content: `## The Communication Gap in Education

For decades, parent-school communication has been reactive: a report card every term, a parent-teacher night twice a year, and phone calls when something goes wrong. This model fails everyone.

## What Modern Communication Technology Enables

With platforms like KIDUART's parent communication module, schools can:
- Send targeted messages to specific groups (Grade 5 parents, all parents of boys in Class 3B)
- Push real-time attendance notifications when a child is absent
- Share grade updates immediately after teachers enter them
- Manage fee communications automatically
- Conduct two-way messaging between teachers and parents

## The Impact on Parent Engagement

Schools using digital communication platforms report:
- 60% increase in parent response rates
- 45% reduction in inbound calls to school office
- 35% improvement in fee payment timeliness
- Higher parent satisfaction scores

## Building the Right Communication Culture

Technology is only part of the equation. Schools that succeed with digital parent communication also establish clear protocols: what gets communicated, by whom, through which channel, and how quickly.

## Getting Started

Start with attendance notifications â€” they're the highest-value, lowest-effort win. Parents universally appreciate knowing immediately when their child isn't in school. From there, expand to grades, fees, and general communications.`,
    relatedSlugs: ["school-erp-benefits", "digital-transformation-schools", "student-data-management"]
  },
  "student-data-management": {
    title: "Student Data Management Best Practices for Modern Schools",
    author: "Dr. Lisa Park", date: "January 15, 2026", category: "Student Success",
    readTime: "7 min read",
    excerpt: "How schools collect, store, and use student data has enormous implications for privacy, compliance, and ultimately student outcomes.",
    content: `## The Student Data Challenge

Modern schools collect more student data than ever before â€” academic records, health information, behavioral data, family details, and now digital learning data. Managing this responsibly is both a compliance requirement and a moral obligation.

## Data Privacy First

In 2026, student data privacy laws have become increasingly stringent globally. FERPA in the US, GDPR in Europe, and similar regulations worldwide require schools to:
- Know exactly what data they collect
- Have a legal basis for collecting it
- Protect it with appropriate technical measures
- Give families control over their information
- Have clear retention and deletion policies

## The Technical Foundation

Proper student data management requires:
- A centralized, secure database (not spreadsheets)
- Role-based access controls
- Encryption at rest and in transit
- Audit logs tracking who accessed what
- Regular backups with tested recovery

## Using Data to Improve Outcomes

Compliant data management isn't just about protection â€” it's about using data responsibly to help students succeed. When data is clean, centralized, and accessible to the right people, it enables:
- Early identification of struggling students
- Personalized intervention strategies
- Evidence-based teaching adjustments
- Better resource allocation

## Practical Steps for Schools

1. Conduct a data audit â€” know what you collect and why
2. Implement a proper ERP with built-in privacy controls
3. Train all staff on data handling procedures
4. Establish a privacy officer role or responsibility
5. Review and update privacy policies annually`,
    relatedSlugs: ["ai-in-education-2026", "school-erp-benefits", "digital-transformation-schools"]
  },
  "kiduorbit-predictive-analytics": {
    title: "How KIDUORBIT's Predictive Analytics Is Saving Students From Failure",
    author: "KIDUART Research Team", date: "March 10, 2026", category: "AI in Education",
    readTime: "6 min read",
    excerpt: "Early intervention is the most powerful tool in education. KIDUORBIT's AI identifies at-risk students weeks before traditional methods â€” and schools are seeing dramatic results.",
    content: `## The Problem With Traditional Early Warning Systems

Most schools rely on teachers to identify struggling students. But teachers manage 30+ students each, across multiple subjects. By the time a pattern becomes obvious, valuable intervention time has already been lost.

## How KIDUORBIT Changes This

KIDUORBIT analyzes three primary data streams continuously:
1. **Attendance patterns**: Frequent absences, late arrivals, early departures
2. **Academic trajectory**: Grade trends across subjects, assignment completion rates
3. **Engagement signals**: Participation in activities, library usage, communication frequency

When these signals combine in concerning patterns, KIDUORBIT flags the student for review â€” weeks before grades would show an issue.

## Real Results From KIDUART Schools

Schools using KIDUORBIT predictive analytics in the 2025-26 academic year have reported:
- 42% reduction in end-of-year academic failures
- 31% improvement in student retention
- 67% of flagged students improved after intervention
- Average intervention lead time: 6 weeks before traditional detection

## The Privacy Balance

KIDUORBIT is built with privacy by design. All analysis is anonymous in processing. Insights are surfaced only to authorized teachers and counselors. No data is shared externally.

## What Happens After a Flag?

KIDUORBIT doesn't just raise an alert â€” it suggests intervention strategies based on what has worked for similar students in similar situations. Teachers receive actionable recommendations, not just data.`,
    relatedSlugs: ["ai-in-education-2026", "school-erp-benefits", "student-data-management"]
  }
};

function renderInline(text: string) {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.filter(Boolean).map((part, index) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={`${part}-${index}`} className="font-semibold text-brand-navy">
          {part.slice(2, -2)}
        </strong>
      );
    }

    return <React.Fragment key={`${part}-${index}`}>{part}</React.Fragment>;
  });
}

function renderContentBlocks(text: string) {
  return text
    .trim()
    .split("\n\n")
    .map((block, index) => {
      const lines = block.split("\n").filter(Boolean);
      const firstLine = lines[0] ?? "";

      if (firstLine.startsWith("## ")) {
        const heading = firstLine.replace("## ", "").trim();
        return (
          <section key={`h2-${index}`} className="scroll-mt-32">
            <h2
              id={heading.toLowerCase().replace(/\s+/g, "-")}
              className="mt-12 border-b border-brand-navy/10 pb-4 text-[clamp(1.7rem,1.35rem+1vw,2.4rem)] font-bold text-brand-navy"
            >
              {heading}
            </h2>
          </section>
        );
      }

      if (firstLine.startsWith("### ")) {
        return (
          <h3 key={`h3-${index}`} className="mt-10 text-[clamp(1.3rem,1.15rem+0.55vw,1.75rem)] font-semibold text-brand-navy">
            {firstLine.replace("### ", "").trim()}
          </h3>
        );
      }

      if (lines.every((line) => line.startsWith("- "))) {
        return (
          <ul key={`ul-${index}`} className="space-y-3 rounded-[1.5rem] border border-brand-navy/10 bg-brand-beige/20 p-6">
            {lines.map((line, lineIndex) => (
              <li key={`li-${lineIndex}`} className="ml-5 list-disc text-[clamp(1rem,0.95rem+0.25vw,1.08rem)] leading-8 text-brand-navy/80 marker:text-brand-teal">
                {renderInline(line.replace("- ", "").trim())}
              </li>
            ))}
          </ul>
        );
      }

      if (lines.every((line) => /^\d+\.\s/.test(line))) {
        return (
          <ol key={`ol-${index}`} className="space-y-3 rounded-[1.5rem] border border-brand-navy/10 bg-white p-6 shadow-sm">
            {lines.map((line, lineIndex) => (
              <li key={`ol-li-${lineIndex}`} className="ml-5 list-decimal text-[clamp(1rem,0.95rem+0.25vw,1.08rem)] leading-8 text-brand-navy/80 marker:font-semibold marker:text-brand-teal">
                {renderInline(line.replace(/^\d+\.\s/, "").trim())}
              </li>
            ))}
          </ol>
        );
      }

      return (
        <p key={`p-${index}`} className="text-[clamp(1rem,0.95rem+0.25vw,1.08rem)] leading-8 text-brand-navy/80">
          {renderInline(lines.join(" "))}
        </p>
      );
    });
}

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? blogData[slug] : null;

  if (!post) {
    return (
      <PageTransition className="flex min-h-[60vh] flex-col items-center justify-center pt-32 pb-24 text-center">
        <h1 className="mb-6 text-4xl font-bold text-brand-navy">Article Not Found</h1>
        <p className="mb-8 text-xl text-brand-navy/70">The blog post you are looking for doesn't exist.</p>
        <Link href="/blog" className="inline-flex items-center gap-2 rounded-full bg-brand-navy px-8 py-4 font-bold text-white">
          <ArrowLeft className="h-5 w-5" /> Back to Blog
        </Link>
      </PageTransition>
    );
  }

  const headers = post.content
    .split("\n")
    .filter((line: string) => line.startsWith("## "))
    .map((line: string) => line.replace("## ", "").trim());

  return (
    <PageTransition className="pt-20 pb-0">
      <section className="section-space-tight bg-brand-beige/30">
        <div className="reading-shell text-center">
          <SectionReveal>
            <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-teal transition-colors hover:text-brand-navy">
              <ArrowLeft className="h-4 w-4" /> Back to Blog
            </Link>

            <div className="mt-8 inline-flex rounded-full bg-brand-navy px-4 py-1.5 text-sm font-bold text-white shadow-sm">
              {post.category}
            </div>

            <h1 className="mt-6 text-[clamp(2.2rem,1.35rem+3vw,4.6rem)] font-extrabold leading-[0.96] text-brand-navy">
              {post.title}
            </h1>

            <p className="mx-auto mt-6 max-w-3xl text-[clamp(1.05rem,0.96rem+0.3vw,1.18rem)] leading-8 text-brand-navy/70">
              {post.excerpt}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-brand-navy/60 sm:gap-6">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-teal/30 bg-brand-teal/15 font-bold text-brand-teal">
                  {post.author.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="page-shell relative z-10 -mt-6 sm:-mt-8">
        <SectionReveal>
          <div className="overflow-hidden rounded-[2rem] border border-white/60 bg-[linear-gradient(135deg,hsl(var(--brand-teal)),hsl(var(--brand-navy)))] px-8 py-12 shadow-[0_30px_80px_rgba(0,48,73,0.16)] sm:px-12 sm:py-16">
            <div className="mx-auto max-w-4xl rounded-[1.75rem] border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.3em] text-white/55">Featured topic</div>
              <div className="mt-5 text-[clamp(1.8rem,1.1rem+1.4vw,2.8rem)] font-bold leading-tight text-white">{post.category}</div>
              <p className="mx-auto mt-5 max-w-2xl text-[clamp(1rem,0.94rem+0.25vw,1.08rem)] leading-8 text-white/75">
                Structured for quick reading, better scanning, and a cleaner reading rhythm across desktop and mobile screens.
              </p>
            </div>
          </div>
        </SectionReveal>
      </section>

      <section className="section-space bg-white">
        <div className="page-shell">
          <div className="grid gap-10 xl:grid-cols-[17rem_minmax(0,1fr)]">
            <aside className="hidden xl:block">
              <div className="sticky top-28 space-y-6">
                {headers.length > 0 && (
                  <div className="rounded-[1.75rem] border border-brand-navy/10 bg-brand-beige/25 p-6">
                    <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">In this article</h2>
                    <ul className="mt-5 space-y-3">
                      {headers.map((header: string) => (
                        <li key={header}>
                          <a href={`#${header.toLowerCase().replace(/\s+/g, "-")}`} className="text-sm font-medium leading-6 text-brand-navy/70 transition-colors hover:text-brand-teal">
                            {header}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                <div className="rounded-[1.75rem] border border-brand-navy/10 bg-white p-6 shadow-sm">
                  <h2 className="text-xs font-bold uppercase tracking-[0.24em] text-brand-teal">Share article</h2>
                  <div className="mt-5 flex flex-wrap gap-3">
                    {[Twitter, Linkedin, Facebook, LinkIcon].map((Icon, index) => (
                      <button
                        key={index}
                        className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-beige/55 text-brand-navy transition-colors hover:bg-brand-navy hover:text-white"
                      >
                        <Icon className="h-4 w-4" />
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </aside>

            <main className="min-w-0">
              <SectionReveal>
                <article className="reading-shell rounded-[2rem] border border-brand-navy/10 bg-white p-6 shadow-[0_18px_50px_rgba(0,48,73,0.06)] sm:p-8 lg:p-10">
                  <div className="space-y-6">
                    {renderContentBlocks(post.content)}
                  </div>
                </article>
              </SectionReveal>

              <div className="reading-shell mt-10 rounded-[1.75rem] border border-brand-navy/10 bg-brand-teal px-6 py-8 text-white shadow-lg xl:hidden">
                <h2 className="text-sm font-bold uppercase tracking-[0.24em] text-white/70">Share this article</h2>
                <div className="mt-5 flex gap-3">
                  {[Twitter, Linkedin, Facebook].map((Icon, index) => (
                    <button key={index} className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white hover:text-brand-navy">
                      <Icon className="h-5 w-5" />
                    </button>
                  ))}
                </div>
              </div>
            </main>
          </div>
        </div>
      </section>

      <section className="section-space-tight bg-brand-teal text-white">
        <div className="reading-shell text-center">
          <SectionReveal>
            <Mail className="mx-auto h-12 w-12 text-white/80" />
            <h2 className="mt-6 text-[clamp(2rem,1.3rem+1.8vw,3.2rem)] font-bold leading-tight">Enjoying this content?</h2>
            <p className="mt-4 text-[clamp(1rem,0.95rem+0.25vw,1.1rem)] leading-8 text-white/80">
              Subscribe to our newsletter for more insights on education technology.
            </p>
            <form className="mx-auto mt-8 flex max-w-xl flex-col gap-4 sm:flex-row" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="field-surface-dark h-14 flex-1 rounded-xl border border-white/20 px-5 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <button type="submit" className="rounded-xl bg-brand-navy px-8 py-4 font-bold text-white shadow-lg transition-all hover:bg-white hover:text-brand-navy">
                Subscribe
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>

      <section className="section-space bg-brand-beige/20">
        <div className="page-shell">
          <SectionReveal className="mb-12">
            <div className="section-kicker">Continue reading</div>
            <h2 className="mt-6 text-[clamp(1.8rem,1.3rem+1.2vw,2.8rem)] font-bold text-brand-navy">Related articles</h2>
          </SectionReveal>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {post.relatedSlugs.map((relatedSlug: string, index: number) => {
              const relatedPost = blogData[relatedSlug];
              if (!relatedPost) return null;

              return (
                <SectionReveal key={relatedSlug} delay={index * 0.1}>
                  <Link href={`/blog/${relatedSlug}`} className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-navy/10 bg-white shadow-lg shadow-brand-navy/5 transition-transform hover:-translate-y-1">
                    <div className="relative h-44 bg-[linear-gradient(135deg,hsl(var(--brand-navy))/0.18,hsl(var(--brand-teal))/0.2)] p-6">
                      <div className="inline-flex rounded-full bg-white px-3 py-1 text-xs font-bold text-brand-navy shadow-sm">
                        {relatedPost.category}
                      </div>
                    </div>
                    <div className="flex flex-grow flex-col p-6">
                      <h3 className="mb-3 text-[clamp(1.15rem,1rem+0.45vw,1.4rem)] font-bold text-brand-navy transition-colors group-hover:text-brand-teal">
                        {relatedPost.title}
                      </h3>
                      <p className="section-copy mb-6 flex-grow text-brand-navy/70 line-clamp-3">{relatedPost.excerpt}</p>
                      <div className="mt-auto inline-flex items-center gap-2 font-bold text-brand-teal">
                        Read Article <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
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
