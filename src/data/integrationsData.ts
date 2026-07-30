/**
 * Integrations are described by what the platform actually connects to today.
 * `status: "live"` means it is implemented in the product; `status: "planned"`
 * means it is on the roadmap and is labelled that way on the site — we do not
 * list a logo as available before it ships.
 *
 * `modules` points at real entries in feature-matrix.json so an integration
 * page can link to the module it affects. Validated by `npm run check:content`.
 */

export type IntegrationFaq = { q: string; a: string };

export type IntegrationStatus = "live" | "planned";

export type IntegrationEntry = {
  name: string;
  /** Lucide icon name resolved by ProductIcon */
  icon: string;
  accent: "navy" | "teal" | "orange" | "yellow" | "bronze";
  category: string;
  status: IntegrationStatus;
  /** One-line summary used on cards */
  description: string;
  /** Longer paragraph for the detail page */
  intro: string;
  /** What the school gets, phrased as outcomes */
  benefits: string[];
  /** Setup steps in the order they happen in the product */
  steps: string[];
  requirements: string[];
  /** Modules in the matrix this integration touches */
  modules: { area: string; module: string }[];
  faqs: IntegrationFaq[];
};

export const INTEGRATION_CATEGORIES = [
  {
    title: "Fee payments",
    slug: "payments",
    icon: "Wallet",
    blurb:
      "Online fee collection that reconciles back into the fee book, so the receipt and the ledger never disagree.",
  },
  {
    title: "Messaging and notifications",
    slug: "messaging",
    icon: "Megaphone",
    blurb:
      "How notices, fee reminders and attendance alerts actually reach parents — SMS, WhatsApp and email.",
  },
  {
    title: "Sign-in and identity",
    slug: "identity",
    icon: "KeyRound",
    blurb: "Let staff and students use the school accounts they already have, without a second password.",
  },
  {
    title: "Online classes and meetings",
    slug: "classes",
    icon: "MonitorSmartphone",
    blurb: "Launch a class or a parent meeting from the timetable instead of pasting links into a group.",
  },
  {
    title: "Files and developer access",
    slug: "platform",
    icon: "ScrollText",
    blurb: "Document storage and the REST API your IT team can build against.",
  },
] as const;

const integrationsData: Record<string, IntegrationEntry> = {
  razorpay: {
    name: "Razorpay",
    icon: "Wallet",
    accent: "teal",
    category: "Fee payments",
    status: "live",
    description:
      "Collect fees online through Razorpay and let every successful payment post itself against the student's fee record.",
    intro:
      "Razorpay is the default choice for Indian schools because parents already recognise it and it supports UPI, cards, netbanking and wallets in one checkout. In KIDUART, the parent opens the dues on the parent portal, pays through Razorpay, and the payment is written back against that student's fee record with a receipt number — so the accountant is not matching a bank statement to a WhatsApp screenshot the next morning.",
    benefits: [
      "UPI, cards, netbanking and wallets in one parent checkout",
      "Payments post against the student's fee record automatically",
      "Receipts generated from the same fee book the counter uses",
      "Webhook confirmation so a payment is never recorded twice",
      "Failed and pending payments stay visible instead of disappearing",
    ],
    steps: [
      "Open the finance settings in your school panel and choose Razorpay as the gateway",
      "Enter the API key and secret from your Razorpay dashboard",
      "Point the Razorpay webhook at the KIDUART endpoint we provide",
      "Run a test payment against a demo student to confirm the receipt and ledger entry",
      "Enable online payment on the parent portal for the classes you want",
    ],
    requirements: [
      "An active Razorpay merchant account in the school or trust's name",
      "Fee heads and structures already configured in KIDUART",
      "A finance or school admin role to enter gateway credentials",
    ],
    modules: [
      { area: "finance-and-fee-management", module: "Fee Collection" },
      { area: "parent-management", module: "Parent Portal" },
    ],
    faqs: [
      {
        q: "Does the money come to the school directly?",
        a: "Yes. Settlement happens from Razorpay into your school's bank account under your own merchant agreement. KIDUART records the transaction and generates the receipt; we are not in the money path.",
      },
      {
        q: "What happens if a parent's payment fails midway?",
        a: "The attempt stays visible with its status, and the due remains open. Only a confirmed payment, verified through the webhook, closes the due and issues a receipt.",
      },
      {
        q: "Can we still collect fees at the counter?",
        a: "Yes. Cash, cheque and card collection at the counter run through the same fee module, so the dues list stays correct regardless of how a parent chose to pay.",
      },
    ],
  },
  stripe: {
    name: "Stripe",
    icon: "Wallet",
    accent: "navy",
    category: "Fee payments",
    status: "live",
    description:
      "Accept card payments through Stripe with the same automatic reconciliation into KIDUART's fee module.",
    intro:
      "Stripe suits schools that collect from international families or already run Stripe for other billing. The flow is identical to Razorpay: the parent pays from the portal, Stripe confirms through a signed webhook, and KIDUART writes the payment against the student's fee record and issues the receipt.",
    benefits: [
      "Card and supported local payment methods for international families",
      "Signed webhook confirmation before a payment is recorded",
      "Automatic receipt against the student's fee record",
      "One dues list regardless of which gateway a parent used",
    ],
    steps: [
      "Choose Stripe in the finance settings of your school panel",
      "Add your Stripe publishable and secret keys",
      "Register the KIDUART webhook endpoint in your Stripe dashboard",
      "Verify a test payment appears on the student's fee record",
      "Turn on online payment for the classes you want",
    ],
    requirements: [
      "An active Stripe account for the school or trust",
      "Fee structures configured in KIDUART",
      "Finance or school admin access to enter credentials",
    ],
    modules: [
      { area: "finance-and-fee-management", module: "Fee Collection" },
      { area: "parent-management", module: "Parent Portal" },
    ],
    faqs: [
      {
        q: "Can we run Razorpay and Stripe together?",
        a: "Most schools pick one primary gateway. If you genuinely need both — for example domestic fees on Razorpay and international payments on Stripe — raise it during the demo so we can configure it correctly.",
      },
      {
        q: "Are refunds handled in KIDUART?",
        a: "Refunds are recorded in the fee module so your ledger reflects them, and the gateway-side refund is initiated from your gateway dashboard.",
      },
    ],
  },
  "sms-notifications": {
    name: "SMS notifications",
    icon: "Megaphone",
    accent: "orange",
    category: "Messaging and notifications",
    status: "live",
    description:
      "Send attendance alerts, fee reminders and urgent notices as SMS — the one channel every parent can receive.",
    intro:
      "Not every parent has a smartphone, checks email, or installs an app, but almost every parent receives SMS. KIDUART sends transactional SMS through a supported provider, using templates you manage in-product, so an absence alert or a fee reminder reaches the guardian on the same day rather than in a diary note the child forgets to show.",
    benefits: [
      "Same-day absence alerts to the guardian on record",
      "Fee due and receipt confirmations by SMS",
      "Templates managed in-product, so wording stays consistent",
      "Targeted sends by class, section or staff group",
      "Delivery attempts recorded against the communication log",
    ],
    steps: [
      "Share your SMS provider credentials and approved sender ID",
      "We configure the provider against your school account",
      "Map which events send SMS — absence, fee due, notice, OTP",
      "Approve the message templates for each event",
      "Send a test to a staff number before enabling for parents",
    ],
    requirements: [
      "An SMS provider account with a registered sender ID",
      "DLT template registration where Indian regulations require it",
      "Guardian mobile numbers present on student records",
    ],
    modules: [
      { area: "communication", module: "Messaging" },
      { area: "security-and-authentication", module: "Authentication Communications" },
    ],
    faqs: [
      {
        q: "Who pays for the SMS credits?",
        a: "SMS is billed by your provider on your own account, so you keep control of credits and pricing. KIDUART sends through it and records what was sent.",
      },
      {
        q: "Will parents get flooded with messages?",
        a: "No. You decide which events trigger an SMS. Most schools keep SMS for absence, fee dues and urgent notices, and use in-app or email for everything else.",
      },
    ],
  },
  "whatsapp-business": {
    name: "WhatsApp Business",
    icon: "Megaphone",
    accent: "teal",
    category: "Messaging and notifications",
    status: "live",
    description:
      "Reach parents on the channel they actually read, using approved WhatsApp Business templates.",
    intro:
      "Parents read WhatsApp. KIDUART connects to the WhatsApp Business API so notices, fee reminders and attendance alerts can go out as approved template messages from the school's own number — with a record of what was sent, instead of a teacher forwarding messages from a personal phone at 10pm.",
    benefits: [
      "Notices and reminders on the channel parents check",
      "Messages sent from the school's own business number",
      "Approved templates instead of ad-hoc forwards",
      "Class and section targeting, not one giant group",
      "A record the office can check when a parent says they were not informed",
    ],
    steps: [
      "Register or connect a WhatsApp Business account for the school",
      "Verify the school's sending number with Meta",
      "Get the message templates you need approved",
      "We connect the account to your KIDUART school",
      "Test with a staff number, then enable for parent groups",
    ],
    requirements: [
      "A WhatsApp Business account and verified sending number",
      "Meta-approved message templates for transactional sends",
      "Guardian numbers on student records",
    ],
    modules: [
      { area: "communication", module: "Messaging" },
      { area: "parent-management", module: "Parent Communication" },
    ],
    faqs: [
      {
        q: "Can teachers chat with parents one to one?",
        a: "The integration is built for school-to-parent notices and alerts, not informal chat. Keeping it template-based is what stops it becoming another unmanaged group.",
      },
      {
        q: "Does this replace SMS?",
        a: "It complements it. WhatsApp gets read more; SMS reaches everyone. Most schools use WhatsApp for routine communication and SMS for the parents who need it.",
      },
    ],
  },
  "email-delivery": {
    name: "Email delivery",
    icon: "ScrollText",
    accent: "bronze",
    category: "Messaging and notifications",
    status: "live",
    description:
      "Send circulars, receipts, report card links and account emails through your own email provider.",
    intro:
      "Email is where longer school communication belongs: circulars, fee receipts, report card links, staff notices and account verification. KIDUART sends through your provider — plain SMTP or a delivery service like SendGrid, Amazon SES or Mailgun — so mail arrives from your school domain and lands in inboxes rather than spam.",
    benefits: [
      "Mail sent from your school domain, not a generic address",
      "Fee receipts and circulars delivered as records parents can keep",
      "Account verification and password reset mails handled reliably",
      "Choice of SMTP, SendGrid, Amazon SES or Mailgun",
    ],
    steps: [
      "Pick the provider your school already uses, or start with SMTP",
      "Add the sending credentials and the from-address for your domain",
      "Publish the SPF and DKIM records your provider asks for",
      "Send a test circular to a staff mailbox",
      "Enable the events that should generate email",
    ],
    requirements: [
      "A school email domain you control",
      "Provider credentials, or SMTP details from your IT team",
      "DNS access to add SPF and DKIM records",
    ],
    modules: [
      { area: "communication", module: "Messaging" },
      { area: "security-and-authentication", module: "Core Authentication" },
    ],
    faqs: [
      {
        q: "Do we have to buy an email service?",
        a: "No. Plain SMTP from your existing school mailbox works for lower volumes. A delivery service becomes worthwhile once you are sending circulars to hundreds of parents at once.",
      },
      {
        q: "Why do SPF and DKIM matter?",
        a: "Without them, mail sent on your behalf is far more likely to land in spam. They are a one-time DNS change that protects every future circular.",
      },
    ],
  },
  "google-workspace": {
    name: "Google Workspace sign-in",
    icon: "KeyRound",
    accent: "teal",
    category: "Sign-in and identity",
    status: "live",
    description:
      "Let staff and students sign in with the Google accounts your school already issues.",
    intro:
      "If your school runs Google Workspace for Education, staff and students already have a managed account. KIDUART supports Google sign-in so they use it here too — one less password to reset, and access that follows the account your IT admin already controls.",
    benefits: [
      "One school account instead of another password to remember",
      "Fewer password reset requests at the front office",
      "Access tied to the Google account your admin controls",
      "Works alongside normal email and password login",
    ],
    steps: [
      "Confirm your Google Workspace domain with our team",
      "We register the sign-in client for your school",
      "Choose which roles may use Google sign-in",
      "Test with one staff and one student account",
      "Announce it to staff — existing passwords keep working",
    ],
    requirements: [
      "Google Workspace for Education (or a managed Google domain)",
      "Workspace admin able to approve the sign-in client",
      "Staff and student email addresses matching their KIDUART records",
    ],
    modules: [
      { area: "security-and-authentication", module: "Core Authentication" },
      { area: "security-and-authentication", module: "Roles & Permissions" },
    ],
    faqs: [
      {
        q: "Does Google sign-in change what someone can see?",
        a: "No. Permissions still come from their KIDUART role. Google only proves who they are.",
      },
      {
        q: "What happens when a staff member leaves?",
        a: "Disabling their Google account stops that sign-in route, and you should also deactivate their KIDUART user so their role access ends cleanly.",
      },
    ],
  },
  "microsoft-365": {
    name: "Microsoft 365 sign-in",
    icon: "KeyRound",
    accent: "navy",
    category: "Sign-in and identity",
    status: "live",
    description:
      "Sign in with Microsoft school accounts for campuses standardised on Microsoft 365.",
    intro:
      "For schools running Microsoft 365, staff and students can sign in to KIDUART with their existing Microsoft account. Same principle as Google sign-in: identity comes from the account your IT team already manages, while permissions stay with the KIDUART role.",
    benefits: [
      "Microsoft school accounts work as the login",
      "No parallel password list for staff",
      "Identity managed centrally by your IT team",
      "Runs alongside email and password login",
    ],
    steps: [
      "Share your Microsoft tenant details with our team",
      "We register the application for your school",
      "Your IT admin grants consent",
      "Test with a staff account and a student account",
      "Roll out to the roles you choose",
    ],
    requirements: [
      "A Microsoft 365 tenant for the school",
      "An IT admin who can grant application consent",
      "Accounts matching the email on KIDUART user records",
    ],
    modules: [
      { area: "security-and-authentication", module: "Core Authentication" },
      { area: "security-and-authentication", module: "Session & Tokens" },
    ],
    faqs: [
      {
        q: "Can we use Microsoft sign-in only for staff?",
        a: "Yes. You choose which roles may use it. Many schools enable it for staff and keep student logins simple.",
      },
      {
        q: "Does multi-factor still apply?",
        a: "If your Microsoft tenant enforces MFA, that applies at sign-in. KIDUART's own authenticator-app MFA can also be required for sensitive roles.",
      },
    ],
  },
  zoom: {
    name: "Zoom",
    icon: "MonitorSmartphone",
    accent: "orange",
    category: "Online classes and meetings",
    status: "live",
    description:
      "Create Zoom sessions for timetabled classes and parent meetings from inside KIDUART.",
    intro:
      "When an online class or a parent-teacher meeting is scheduled in KIDUART, the Zoom session is created with it, and the link travels with the timetable entry or the meeting notice. Nobody hunts through a WhatsApp group for a link that was posted last week.",
    benefits: [
      "Session created from the timetable or meeting entry",
      "Link delivered with the notice parents already receive",
      "Class and teacher context stays attached to the session",
      "Parent-teacher meetings scheduled the same way",
    ],
    steps: [
      "Connect the school's Zoom account in integration settings",
      "Authorise KIDUART to create meetings on that account",
      "Choose which classes or meeting types create Zoom sessions",
      "Schedule one test class and confirm the link reaches the class",
      "Roll out to the sections that need online classes",
    ],
    requirements: [
      "A Zoom account with meeting duration suited to your classes",
      "Timetable configured in KIDUART",
      "A staff member who can authorise the Zoom connection",
    ],
    modules: [
      { area: "academic", module: "Classes & Sections" },
      { area: "communication", module: "Events" },
    ],
    faqs: [
      {
        q: "Is attendance for an online class recorded automatically?",
        a: "Attendance is marked in KIDUART's attendance module as usual. Ask us during the demo about how far the automation goes for your Zoom plan before assuming it is hands-off.",
      },
      {
        q: "Can we use it for parent-teacher meetings?",
        a: "Yes. Meetings are scheduled like any other event, and the link goes out with the notice to the parents concerned.",
      },
    ],
  },
  "microsoft-teams": {
    name: "Microsoft Teams",
    icon: "MonitorSmartphone",
    accent: "navy",
    category: "Online classes and meetings",
    status: "live",
    description:
      "Schedule Teams meetings for classes and staff meetings from your KIDUART calendar.",
    intro:
      "Schools standardised on Microsoft 365 can keep online classes and staff meetings in Teams while scheduling them from KIDUART, so the calendar entry, the participants and the link stay in one place.",
    benefits: [
      "Meetings created against your Microsoft 365 tenant",
      "Class and staff meeting links attached to the schedule",
      "Consistent with your existing Microsoft rollout",
      "Notices carry the link to the right group",
    ],
    steps: [
      "Connect your Microsoft 365 tenant",
      "Grant the permissions needed to create meetings",
      "Select which classes and meeting types use Teams",
      "Test one class and one staff meeting",
      "Enable for the rest of the school",
    ],
    requirements: [
      "Microsoft 365 with Teams licensing for staff",
      "IT admin consent for meeting creation",
      "Timetable or event schedule set up in KIDUART",
    ],
    modules: [
      { area: "academic", module: "Classes & Sections" },
      { area: "communication", module: "Events" },
    ],
    faqs: [
      {
        q: "Can we use Teams and Zoom together?",
        a: "Yes, though it is usually simpler to standardise on one. Some schools use Teams for staff and Zoom for parent meetings.",
      },
    ],
  },
  "google-meet": {
    name: "Google Meet",
    icon: "MonitorSmartphone",
    accent: "teal",
    category: "Online classes and meetings",
    status: "live",
    description:
      "Generate Google Meet links for classes and meetings for schools already on Google Workspace.",
    intro:
      "For Google Workspace schools, Meet is the path of least resistance: no extra licence, and staff already know it. KIDUART can create Meet links for scheduled classes and meetings so the link is attached to the schedule instead of pasted into a chat.",
    benefits: [
      "No additional video licence for Google Workspace schools",
      "Links created with the class or meeting schedule",
      "Familiar to staff who already use Google tools",
      "Notices carry the link to the right class or group",
    ],
    steps: [
      "Connect your Google Workspace account",
      "Authorise calendar and Meet access",
      "Pick the classes or meeting types that need Meet links",
      "Test one class before rolling out",
      "Enable across the sections that need it",
    ],
    requirements: [
      "Google Workspace for Education",
      "Workspace admin consent",
      "Timetable configured in KIDUART",
    ],
    modules: [
      { area: "academic", module: "Classes & Sections" },
      { area: "communication", module: "Events" },
    ],
    faqs: [
      {
        q: "Do students need Google accounts?",
        a: "For managed meetings it is much smoother if they do. Without them, joining depends on your Workspace meeting settings.",
      },
    ],
  },
  "cloud-storage": {
    name: "Cloud document storage",
    icon: "Database",
    accent: "bronze",
    category: "Files and developer access",
    status: "live",
    description:
      "Store admission documents, certificates and staff files in managed cloud storage instead of a shared drive.",
    intro:
      "Schools accumulate documents: birth certificates, transfer certificates, mark sheets, staff qualifications, ID proofs. KIDUART stores uploads in managed cloud storage and links them to the record they belong to, so a document is found from the student's profile rather than a folder someone renamed.",
    benefits: [
      "Documents attached to the student or staff record",
      "No shared drive naming conventions to maintain",
      "Access follows the same role permissions as the record",
      "Uploads available from the panel where the work happens",
    ],
    steps: [
      "Confirm the storage option during onboarding",
      "We configure the bucket or media account for your school",
      "Map document types to the records they attach to",
      "Upload a test set of admission documents",
      "Train the front office on uploading at admission time",
    ],
    requirements: [
      "Decision on storage during onboarding",
      "Document types your school wants to collect",
      "Staff roles that should be allowed to view them",
    ],
    modules: [
      { area: "student-management", module: "Documents" },
      { area: "facilities-and-inventory", module: "Infrastructure" },
    ],
    faqs: [
      {
        q: "Who can see a student's documents?",
        a: "Only roles with permission on that record. A class teacher does not automatically get a student's financial or identity documents.",
      },
      {
        q: "Can we bulk upload existing files?",
        a: "Yes, bulk import is part of onboarding. The cleaner your existing naming is, the faster that mapping goes.",
      },
    ],
  },
  "rest-api": {
    name: "REST API and webhooks",
    icon: "ScrollText",
    accent: "navy",
    category: "Files and developer access",
    status: "live",
    description:
      "Build against a versioned REST API with managed API keys and webhooks for live events.",
    intro:
      "If your school runs an internal system — a website, a biometric device, a reporting warehouse — your developers can work against the KIDUART REST API. Access uses managed API keys with scoped permissions rather than a shared staff login, and webhooks deliver events like a confirmed fee payment as they happen.",
    benefits: [
      "Versioned REST endpoints under a stable base path",
      "Managed API keys instead of sharing a staff password",
      "Webhooks for live events such as payment confirmation",
      "API reference documentation for your developers",
    ],
    steps: [
      "Request API access for your school",
      "We issue a scoped API key for the integration",
      "Your developer reads the endpoint reference",
      "Build and test against non-production data first",
      "Register any webhook endpoints you need",
    ],
    requirements: [
      "A developer or vendor who will maintain the integration",
      "A clear scope for what the key is allowed to do",
      "An endpoint that can receive webhooks, if you need them",
    ],
    modules: [
      { area: "security-and-authentication", module: "API Access" },
      { area: "reports-and-analytics", module: "Custom Reports" },
    ],
    faqs: [
      {
        q: "Can an API key be limited to read-only?",
        a: "Yes. Keys are scoped, so a reporting integration does not need permission to write records.",
      },
      {
        q: "What if a key is leaked?",
        a: "Revoke it and issue a new one. Keys are managed objects, which is exactly why they are better than sharing a staff login.",
      },
    ],
  },
  "google-classroom": {
    name: "Google Classroom",
    icon: "GraduationCap",
    accent: "yellow",
    category: "Online classes and meetings",
    status: "planned",
    description:
      "Planned: sync classes and assignment data between KIDUART and Google Classroom.",
    intro:
      "Google Classroom sync is on our roadmap, not in the product today. When it ships, the intent is roster sync from KIDUART's class and section data so teachers do not build the same class twice, and assignment visibility flowing back into the academic record. We are listing it as planned rather than implying it already works.",
    benefits: [
      "Planned: roster sync from KIDUART classes and sections",
      "Planned: assignment visibility inside the academic record",
      "Planned: fewer duplicate class setups for teachers",
    ],
    steps: [
      "Tell us during the demo that Classroom matters to your school",
      "We record it against the roadmap item with your use case",
      "You are notified when it enters testing",
      "Early schools help validate the sync before general release",
    ],
    requirements: [
      "Google Workspace for Education",
      "Classes and sections maintained in KIDUART",
    ],
    modules: [
      { area: "academic", module: "Classes & Sections" },
      { area: "academic", module: "Assignments" },
    ],
    faqs: [
      {
        q: "Can we use Google Classroom alongside KIDUART today?",
        a: "Yes — schools do. They simply run in parallel until the sync ships. Google sign-in and Google Meet are available now.",
      },
    ],
  },
  moodle: {
    name: "Moodle",
    icon: "BookOpen",
    accent: "bronze",
    category: "Online classes and meetings",
    status: "planned",
    description: "Planned: connect a Moodle LMS to KIDUART student and class records.",
    intro:
      "Moodle integration is a roadmap item. Schools that run Moodle for course content want their student and class data to come from one place instead of being re-entered. The planned scope is user and enrolment sync from KIDUART into Moodle courses. It is not available yet, and we would rather say so here.",
    benefits: [
      "Planned: student and enrolment sync into Moodle courses",
      "Planned: one source of truth for class structure",
      "Planned: fewer manual enrolment lists each session",
    ],
    steps: [
      "Raise Moodle during your demo so we capture the requirement",
      "Share your Moodle version and hosting details",
      "We assess scope against the roadmap",
      "You are notified when the connector is available for testing",
    ],
    requirements: ["A Moodle installation your IT team can configure", "Class structure maintained in KIDUART"],
    modules: [
      { area: "academic", module: "Classes & Sections" },
      { area: "student-management", module: "Student Directory" },
    ],
    faqs: [
      {
        q: "Is there a workaround in the meantime?",
        a: "Schools export student and class lists from KIDUART reports and import them into Moodle at the start of a session. Not elegant, but it avoids double data entry all year.",
      },
    ],
  },
  canvas: {
    name: "Canvas LMS",
    icon: "BookMarked",
    accent: "orange",
    category: "Online classes and meetings",
    status: "planned",
    description: "Planned: enrolment sync between KIDUART and Canvas LMS.",
    intro:
      "Canvas integration is planned, not shipped. The intended scope matches our other LMS work: KIDUART stays the record of who is in which class, and that flows into Canvas courses so teachers are not maintaining two rosters.",
    benefits: [
      "Planned: enrolment sync from KIDUART classes",
      "Planned: consistent class structure across both systems",
    ],
    steps: [
      "Tell us you use Canvas during the demo",
      "We log the requirement with your setup details",
      "You are notified when it reaches testing",
    ],
    requirements: ["A Canvas instance with admin access", "Classes and sections in KIDUART"],
    modules: [
      { area: "academic", module: "Classes & Sections" },
      { area: "student-management", module: "Student Directory" },
    ],
    faqs: [
      {
        q: "Why list it if it is not built?",
        a: "Because schools ask, and pretending otherwise wastes everyone's time. Listing it as planned tells you exactly where it stands.",
      },
    ],
  },
  paypal: {
    name: "PayPal",
    icon: "Wallet",
    accent: "yellow",
    category: "Fee payments",
    status: "planned",
    description: "Planned: PayPal as an additional gateway for international fee payments.",
    intro:
      "PayPal support is partially in place on our side but not released as a supported gateway. For live online fee collection today, use Razorpay for domestic payments or Stripe where card and international support is needed.",
    benefits: [
      "Planned: an additional option for overseas guardians",
      "Planned: same reconciliation into the fee module",
    ],
    steps: [
      "Use Razorpay or Stripe for live collection today",
      "Tell us if PayPal is a genuine requirement for your families",
      "We will notify you when it is supported",
    ],
    requirements: ["A PayPal business account, once support is released"],
    modules: [{ area: "finance-and-fee-management", module: "Fee Collection" }],
    faqs: [
      {
        q: "What should we use for international fees right now?",
        a: "Stripe. It is live, supports cards from most countries, and reconciles into the fee book the same way Razorpay does.",
      },
    ],
  },
  "google-analytics": {
    name: "Google Analytics",
    icon: "BarChart3",
    accent: "teal",
    category: "Files and developer access",
    status: "planned",
    description:
      "Planned: usage analytics for the parent and student portals for schools that want adoption data.",
    intro:
      "Some schools want to know whether parents are actually opening the portal. Portal usage analytics is a roadmap item, and it will be built with student privacy in mind — adoption patterns, not individual behaviour profiles. Operational reporting on attendance, fees and academics is already available today in the reports module.",
    benefits: [
      "Planned: portal adoption and usage visibility",
      "Available today: attendance, fee and academic reporting in-product",
    ],
    steps: [
      "Use the reports and analytics module for operational reporting today",
      "Tell us what portal adoption question you are trying to answer",
      "We will notify you when portal analytics ships",
    ],
    requirements: ["Clarity on what your school wants to measure"],
    modules: [
      { area: "reports-and-analytics", module: "Custom Reports" },
      { area: "dashboard-and-insights", module: "Dashboard" },
    ],
    faqs: [
      {
        q: "Can we see which parents have logged in?",
        a: "Login activity is visible to administrators through session and audit records. What is planned here is aggregate adoption reporting, not tracking individuals more closely.",
      },
    ],
  },
};

export const INTEGRATION_SLUGS = Object.keys(integrationsData);

export default integrationsData;
