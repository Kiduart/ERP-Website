/**
 * The intelligence layer shown on the homepage.
 *
 * Every "live" entry maps to a shipped screen or endpoint (predictive analytics,
 * due tracking, geo security, result processing). Entries marked "building" are
 * explicitly labelled on the page so nothing here over-promises.
 */

export type WorkflowStatus = "live" | "building";

export type IntelligenceWorkflow = {
  id: string;
  title: string;
  status: WorkflowStatus;
  /** Short outcome shown on the selector chip */
  outcome: string;
  icon: string;
  /** Mono-spaced trace line that gives the console its shape */
  trace: string;
  signal: string;
  model: string;
  action: string;
  modules: { label: string; href: string }[];
};

export const SIGNAL_STREAMS: { label: string; detail: string }[] = [
  { label: "Attendance marks", detail: "Every period, every class, every day" },
  {
    label: "Fee ledger",
    detail: "Invoices, receipts, part payments, due dates",
  },
  { label: "Exam marks", detail: "Subject scores across terms and sessions" },
  {
    label: "Vehicle pings",
    detail: "Live route positions during pickup and drop",
  },
  {
    label: "Library issues",
    detail: "Borrow and return records against loan periods",
  },
  { label: "Login events", detail: "Device, location and session behaviour" },
  { label: "Staff records", detail: "Attendance, leave and appraisal history" },
];

export const INTELLIGENCE_WORKFLOWS: IntelligenceWorkflow[] = [
  {
    id: "attendance-risk",
    title: "Attendance risk forecast",
    status: "live",
    outcome: "Catch the slide early",
    icon: "TrendingDown",
    trace: "attendance.monthly → regression(trend, r²) → at-risk list",
    signal:
      "Each student's monthly attendance percentage, rebuilt from the daily marks your teachers already take.",
    model:
      "A regression runs over each student's trend line, projects the next 30 days, scores confidence from the fit, and tags the direction as improving, stable or declining against the threshold your school sets.",
    action:
      "Class teachers and counsellors open a ranked at-risk list with critical cases on top, plus a parent notification list  weeks before a term is lost.",
    modules: [
      { label: "Attendance", href: "/features/academic" },
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
    ],
  },
  {
    id: "fee-default-risk",
    title: "Fee default risk scoring",
    status: "live",
    outcome: "Chase the right parents first",
    icon: "Wallet",
    trace: "fee.ledger → weighted score → probability + exposure",
    signal:
      "Payment history, overdue ratio, how late past payments landed, and how long it has been since the last one.",
    model:
      "Those four factors are weighted (history 40%, overdue ratio 30%, delay pattern 20%, last payment 10%) into a default probability, and anything under your confidence threshold is filtered out.",
    action:
      "Finance gets a ranked follow-up queue with the estimated amount at risk, instead of a flat defaulter list sorted by name.",
    modules: [
      { label: "Fees & Finance", href: "/features/finance-and-fee-management" },
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
    ],
  },
  {
    id: "performance-forecast",
    title: "Performance forecast",
    status: "live",
    outcome: "See the dip before the exam",
    icon: "LineChart",
    trace: "exam.marks → regression → next 2 exams projected",
    signal:
      "Subject-wise marks for every student across past exams in the session.",
    model:
      "Scores are smoothed and projected two exams ahead, then each student and subject is labelled improving, stable or declining with a confidence value attached.",
    action:
      "Coordinators see which subjects and which students are sliding while there is still time to plan remedial work.",
    modules: [
      { label: "Examination", href: "/features/academic" },
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
    ],
  },
  {
    id: "health-score",
    title: "School health score",
    status: "live",
    outcome: "One number, not five reports",
    icon: "Activity",
    trace: "attendance + fees + exams + strength → score + trend",
    signal:
      "Enrolment strength, attendance percentages, fee collection and exam outcomes for the running session.",
    model:
      "The metrics are rolled into a single health score with trend lines and a year-over-year comparison against the previous session.",
    action:
      "Principals open one screen; group offices compare campuses side by side and see which one needs attention this month.",
    modules: [
      { label: "Dashboards", href: "/features/dashboard-and-insights" },
      { label: "Multi-Campus HQ", href: "/features/organization-management" },
    ],
  },
  {
    id: "due-engine",
    title: "Due tracking and reminder engine",
    status: "live",
    outcome: "No manual follow-up lists",
    icon: "BellRing",
    trace: "dues → overdue flag → SMS · WhatsApp · email",
    signal:
      "Fee allocations checked against receipts and due dates, every day.",
    model:
      "Dues crossing their date are marked overdue automatically and grouped into a defaulter view by class, amount and days late.",
    action:
      "Reminders go out in bulk or one by one over SMS, WhatsApp and email, and every reminder is stored in history so nobody is messaged twice.",
    modules: [
      { label: "Fees & Finance", href: "/features/finance-and-fee-management" },
      { label: "Communication", href: "/features/communication" },
    ],
  },
  {
    id: "login-risk",
    title: "Login risk and geo screening",
    status: "live",
    outcome: "Break-in attempts stopped",
    icon: "ShieldAlert",
    trace: "login.attempt → geo + pattern check → block · MFA · audit",
    signal:
      "Every sign-in attempt with its device, IP location and session behaviour.",
    model:
      "Requests are screened against allowed geographies and suspicious-activity patterns before a session is issued.",
    action:
      "Risky attempts are blocked or pushed to a second factor, and the system admin sees the attempt in an audit trail that cannot be edited.",
    modules: [
      {
        label: "Security & Access",
        href: "/features/security-and-authentication",
      },
      { label: "System Admin panel", href: "/platform/system-admin" },
    ],
  },
  {
    id: "result-processing",
    title: "Result and report card generation",
    status: "live",
    outcome: "Minutes, not weekends",
    icon: "FileSpreadsheet",
    trace: "marks + grading scheme → results → cards + transcripts",
    signal:
      "Mark entry from subject teachers, plus your own grading scheme and card templates.",
    model:
      "Totals, grades and ranks are computed against your rules in bulk, with transcripts built from the same processed result.",
    action:
      "Staff review and publish on a schedule instead of rebuilding spreadsheets  parents see the card in their portal the moment it goes live.",
    modules: [
      { label: "Examination", href: "/features/academic" },
      { label: "Parents", href: "/features/parent-management" },
    ],
  },
  {
    id: "transport-watch",
    title: "Route delay and maintenance watch",
    status: "live",
    outcome: "Parents told before they call",
    icon: "Bus",
    trace: "vehicle.ping → route delay → alert to that route only",
    signal:
      "Live vehicle positions during pickup and drop, plus each vehicle's service record.",
    model:
      "Routes running behind are identified while the trip is on, and vehicles approaching a service date are surfaced before the trip is assigned.",
    action:
      "A delay alert goes to the parents on that route alone, and maintenance is scheduled instead of discovered on a breakdown morning.",
    modules: [
      { label: "Transport", href: "/features/transport-management" },
      { label: "Communication", href: "/features/communication" },
    ],
  },
  {
    id: "library-overdue",
    title: "Overdue and fine engine",
    status: "live",
    outcome: "Circulation without registers",
    icon: "Library",
    trace: "issue.record → loan period check → notice + fine",
    signal:
      "Issue and return records checked against each member's loan period.",
    model:
      "Books past due are marked automatically and fines are computed on your own rules.",
    action:
      "Librarians send overdue notices, review fine reports, and waive charges where the school decides to  all recorded.",
    modules: [{ label: "Library", href: "/features/library-management" }],
  },
  {
    id: "circular-drafts",
    title: "Circular drafting assistant",
    status: "building",
    outcome: "Consistent wording, faster",
    icon: "PenLine",
    trace: "context → draft → staff edits and sends",
    signal: "The fee, exam or attendance event the circular is actually about.",
    model:
      "A draft is prepared from that context so the notice starts with the right dates, classes and amounts already filled in.",
    action:
      "Staff edit and send rather than write from a blank page. In development  it is not billed and not switched on yet.",
    modules: [{ label: "Communication", href: "/features/communication" }],
  },
  {
    id: "ask-your-data",
    title: "Ask your reports in plain English",
    status: "building",
    outcome: "Answers without report hunting",
    icon: "MessagesSquare",
    trace: "question → mapped report query → answer + numbers",
    signal:
      'A typed question such as "which classes dropped below 80% attendance last month".',
    model:
      "The question is mapped onto the reports you already have permission to see.",
    action:
      "The answer comes back with the underlying figures and a link to the full report. In development.",
    modules: [
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
    ],
  },
  {
    id: "unified-risk",
    title: "One early-warning list per student",
    status: "building",
    outcome: "Every signal in one place",
    icon: "Radar",
    trace: "attendance + marks + fees + discipline → single watchlist",
    signal: "The risk signals that today live in three separate screens.",
    model:
      "They are combined into one score per student so nothing is judged on a single number.",
    action:
      "Class teachers get one weekly watchlist with a suggested next step per student. In development.",
    modules: [
      { label: "Student Records", href: "/features/student-management" },
      { label: "Reports & Analytics", href: "/features/reports-and-analytics" },
    ],
  },
];
