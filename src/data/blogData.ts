export type BlogPost = {
  title: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
  excerpt: string;
  content: string;
  relatedSlugs: string[];
  color: string;
  badgeColor: string;
};

const blogData: Record<string, BlogPost> = {
  "ai-in-education-2026": {
    title: "The Future of AI in Education: What Schools Need to Know in 2026",
    author: "KIDUART Editorial Team",
    date: "March 5, 2026",
    category: "AI in Education",
    readTime: "8 min read",
    excerpt:
      "AI is already part of how many schools mark attendance, chase fees, and prepare reports. Here is what is working, what is hype, and what to ask vendors before you sign.",
    color: "from-brand-teal/20 to-brand-navy/20",
    badgeColor: "bg-brand-teal text-white",
    content: `## A Tuesday in the admin office

Picture the usual scene: one staff member is merging attendance sheets, another is chasing fee receipts on WhatsApp, and the principal still needs last week's summary before a meeting at four. That is the work AI is meant to shrink, not the work of teaching itself.

## What is actually useful in 2026

Useful tools tend to be narrow:

- Attendance summaries that used to take a pivot table and an hour
- Flags when a student has missed several days in a row
- Fee reminders tied to your real due dates, not a generic calendar
- Draft circulars that a human still edits before sending

## What teachers will judge you on

Teachers adopt tools that save taps. Marking attendance quickly, posting a class notice without switching apps, and seeing last term's marks next to this term's entries. Extra screens mean extra resistance, no matter what the sales deck says.

## What families want from notifications

Parents rarely want a flood of messages. They want absence on the day it happens, fee dates that match the school calendar, and exam changes before the night before.

## Questions to ask any vendor

1. Which tasks will we stop doing by hand in week one?
2. Can we pilot fees or attendance alone before going school-wide?
3. Who trains the office team, and for how long?
4. How do you measure success beyond a feature checklist?

## Closing note

Schools that get value from AI treat it as support for judgement. KIDUORBIT inside KIDUART is built on that idea: show patterns, let staff decide.`,
    relatedSlugs: ["school-erp-benefits", "digital-transformation-schools", "student-data-management"],
  },
  "school-erp-benefits": {
    title: "Five ways a school ERP saves admin time",
    author: "KIDUART Product Team",
    date: "February 20, 2026",
    category: "School Management",
    readTime: "6 min read",
    excerpt:
      "Schools that move off spreadsheets for fees and attendance usually see the difference within a term. These are the five changes office teams mention first.",
    color: "from-brand-orange/20 to-brand-yellow/20",
    badgeColor: "bg-brand-orange text-white",
    content: `## The problem: five versions of the same student

Last term, a finance officer told us she had three fee spreadsheets and no confidence any matched admissions. That is the moment most schools start looking for one system.

## 1. One entry, many reports

When attendance is marked once, the same number can feed parent alerts, principal dashboards, and term reports. Teams we speak with often cut duplicate data entry from several hours a week to under an hour for routine updates.

## 2. Fee weeks that feel calmer

Online payments, scheduled reminders, and a single ledger mean fewer calls asking "did you receive my transfer?" Schools still set the rules; the software applies them the same way every time.

## 3. Fewer repeat questions at the front desk

When families can see attendance, fees, and notices in an app, routine questions drop. Sensitive topics still belong on a call; the queue for "what is my balance?" gets shorter.

## 4. Numbers leadership can open without a chase

Principals want collections, absenteeism, and academic trends for last week, not after someone merges exports. One database makes that a login, not a project.

## 5. Audit and board packs that assemble faster

When student, staff, and finance records share one structure, compliance folders take less manual assembly. You still verify every figure; you are not rebuilding from scratch each term.

## What to expect in your first term

Expect quieter fee weeks, fewer arguments about which file is correct, and report card cycles that finish earlier. The change is operational breathing room, not an overnight overhaul.`,
    relatedSlugs: ["ai-in-education-2026", "parent-teacher-communication", "digital-transformation-schools"],
  },
  "digital-transformation-schools": {
    title: "A practical guide to digitising school operations",
    author: "KIDUART Editorial Team",
    date: "February 10, 2026",
    category: "Education Technology",
    readTime: "10 min read",
    excerpt:
      "Buying software is the easy part. Getting admissions, fees, and communication onto one system is where most schools actually feel the difference.",
    color: "from-brand-navy/20 to-brand-teal/20",
    badgeColor: "bg-brand-navy text-white",
    content: `## What digitisation means on the ground

For most Indian schools, digitisation is not a lab experiment. It is moving admissions, fees, attendance, exams, and parent updates off paper and scattered chats into one place the office trusts.

## Four fixes that matter first

### One student record
Names, documents, class history, and family contacts belong in one profile. Parallel lists in every department are where errors start.

### Workflows that run on their own
Receipts, reminders, and attendance summaries should not depend on someone remembering a formula in a sheet.

### Communication parents will open
Notices should use the channel families already check, with a record of what was sent.

### Meetings backed by last week's data
Leadership discussions go faster when attendance and collections are a click away, not a two-day compile job.

## Mistakes we see often

- Buying software before anyone owns each module day to day
- Skipping training for finance and front-office staff
- Switching every process in the first month
- Ignoring how parents currently pay and read messages

## Where most schools begin

**Weeks 1-4:** Choose the platform, set up classes and fee structures  
**Weeks 5-8:** Run attendance and fees beside old tools  
**Weeks 9-12:** Move parent communication and exam reporting  
**After term one:** Add analytics and AI only where they solve a named problem

A phased rollout beats a launch that overwhelms staff.`,
    relatedSlugs: ["school-erp-benefits", "ai-in-education-2026", "student-data-management"],
  },
  "parent-teacher-communication": {
    title: "Better parent-school communication, without the phone tag",
    author: "KIDUART Product Team",
    date: "January 28, 2026",
    category: "School Management",
    readTime: "5 min read",
    excerpt:
      "Most schools still rely on report cards and the occasional call home. A shared channel for attendance, fees, and class updates changes how families stay informed.",
    color: "from-brand-yellow/20 to-brand-orange/20",
    badgeColor: "bg-brand-yellow text-brand-navy",
    content: `## Why the old rhythm fails

Twice-year report cards and one parents' evening cannot cover daily absence, fee due dates, or a moved exam. Families call the office; the office interrupts teachers. Everyone loses time.

## What a shared channel can do

KIDUART's parent module follows how schools already group people:

- Messages to one grade, section, or bus route
- Same-day absence alerts when attendance is marked
- Grade posts when teachers finish entry, not weeks later
- Fee notices tied to due dates in your fee book
- Two-way messages with a record for staff, not lost chats

## What changes for families

Parents hear news sooner. Schools report fewer "nobody told me" conversations at the gate. Moving fee and notice messages into one channel usually beats scattered WhatsApp threads for clarity.

## Culture still matters

Software does not set tone. Clear rules help: who sends fee messages, who sends academic updates, how fast the office replies, and when a phone call is still right.

## Where most schools begin

Start with attendance notifications. They are high value and quick to set up. Once families trust that channel, add marks, fees, and general circulars in that order.`,
    relatedSlugs: ["school-erp-benefits", "digital-transformation-schools", "student-data-management"],
  },
  "student-data-management": {
    title: "Student Data Management Best Practices for Modern Schools",
    author: "KIDUART Editorial Team",
    date: "January 15, 2026",
    category: "Student Success",
    readTime: "7 min read",
    excerpt:
      "Schools hold more data than ever about minors. Good practice is knowing what you collect, who can see it, and how long you keep it.",
    color: "from-brand-teal/20 to-brand-orange/20",
    badgeColor: "bg-brand-teal text-white",
    content: `## The volume of student data

Beyond marks and attendance, schools store health notes, family contacts, transport details, and digital learning logs. That information needs the same care as fee records.

## Privacy obligations

Indian schools also serve families who expect strong privacy standards, especially when students study abroad. Baseline habits help everywhere:

- Document what you collect and why
- Limit access by role
- Encrypt data in transit and at rest
- Keep audit logs for sensitive views
- Delete or archive on a defined schedule

## Technical basics

Shared-drive spreadsheets are not a long-term answer. A school ERP should offer central storage, role permissions, tested backups, and exports if you change systems later.

## Using data to support students

Clean, current data helps counselors and teachers act earlier. The aim is informed support, not surveillance. Share insights only with staff who need them for their role.

## What to expect in your first week

1. List every form that collects student data and who owns it  
2. Move active records into a system with access controls  
3. Run a short staff briefing on what may be shared with parents or vendors  
4. Name one person for privacy questions, even part-time  
5. Schedule an annual policy review and a review after any incident`,
    relatedSlugs: ["ai-in-education-2026", "school-erp-benefits", "digital-transformation-schools"],
  },
  "kiduorbit-predictive-analytics": {
    title: "How KIDUORBIT flags students who may need extra support",
    author: "KIDUART Product Team",
    date: "March 10, 2026",
    category: "AI in Education",
    readTime: "6 min read",
    excerpt:
      "When attendance and grades start to slip, the warning signs are often visible weeks earlier than a red mark on a report card. KIDUORBIT flags those patterns for review.",
    color: "from-brand-navy/20 to-brand-yellow/20",
    badgeColor: "bg-brand-navy text-white",
    content: `## Why term-end marks come too late

Teachers notice struggling students, but with full timetables it is easy to miss slow declines across subjects. By the time marks drop on a report card, weeks of intervention time may already be gone.

## What KIDUORBIT watches

KIDUORBIT works on data your school already records:

1. **Attendance:** repeated absences, late arrivals, early departures  
2. **Academics:** trends in marks and incomplete work  
3. **Engagement:** signals your school chooses to track, such as activities or library use  

When patterns combine in ways that match risk profiles you define, the system adds a student to a review list for counselors or teachers.

## How schools use the alerts

The alert is a start, not a verdict. Staff check context, talk to the student or family, and decide on support. Schools use the feature to queue conversations, not to label children.

## Privacy

Analysis runs on your school's data inside KIDUART. Insights go to authorised staff only. Nothing is sold to third-party marketers.

## After a flag

Recommendations suggest interventions that have helped similar cases in your own history, so teachers spend less time guessing what to try first.`,
    relatedSlugs: ["ai-in-education-2026", "school-erp-benefits", "student-data-management"],
  },
};

export const BLOG_POST_IMAGES = [
  "/images/banner/blog-post-1.jpg",
  "/images/banner/blog-post-2.jpg",
  "/images/banner/blog-post-3.jpg",
  "/images/banner/blog-post-4.jpg",
  "/images/banner/blog-post-5.jpg",
  "/images/banner/blog-post-6.jpg",
] as const;

export type BlogListingPost = BlogPost & { slug: string };

export function getBlogListingPosts(): BlogListingPost[] {
  return Object.entries(blogData).map(([slug, post]) => ({ slug, ...post }));
}

export function getBlogPost(slug: string): BlogListingPost | null {
  const post = blogData[slug];
  if (!post) return null;
  return { slug, ...post };
}

export default blogData;
export { blogData };
