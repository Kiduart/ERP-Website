/**
 * Integrations are described by what the platform actually connects to today.
 *
 * status: "live"     implemented and switched on from your own school settings
 * status: "guided"   implemented, but connected with our team during onboarding
 *                     because it needs credentials, consent or hardware on your side
 * status: "planned"  genuinely on the roadmap, and labelled that way on the site
 *
 * `providers` lists the real services or protocols behind a connector so a school
 * can check the name their vendor uses. `modules` points at real entries in
 * feature-matrix.json. Both are validated by `npm run check:content`.
 */

export type IntegrationFaq = { q: string; a: string };

export type IntegrationStatus = "live" | "guided" | "planned";

/** The four hops a connection makes, used by the flow diagram on detail pages. */
export type IntegrationFlowStep = { label: string; detail: string };

/** Plain answers to "who holds the keys, the data and the bill". */
export type IntegrationOwnership = {
  credentials: string;
  data: string;
  billing: string;
};

export type IntegrationEntry = {
  name: string;
  /** Lucide icon name resolved by ProductIcon */
  icon: string;
  accent: "navy" | "teal" | "orange" | "yellow" | "bronze";
  category: string;
  status: IntegrationStatus;
  /** Services, APIs or protocols behind this connector */
  providers: string[];
  /** One-line summary used on cards */
  description: string;
  /** Longer paragraph for the detail page */
  intro: string;
  /** What the school gets, phrased as outcomes */
  benefits: string[];
  /** The connection, hop by hop */
  flow: IntegrationFlowStep[];
  ownership: IntegrationOwnership;
  /** Setup steps in the order they happen in the product */
  steps: string[];
  requirements: string[];
  /** Modules in the matrix this integration touches */
  modules: { area: string; module: string }[];
  faqs: IntegrationFaq[];
  /** Extra search terms for the page head */
  keywords?: string;
};

export const INTEGRATION_STATUS_META: Record<
  IntegrationStatus,
  { label: string; long: string; note: string }
> = {
  live: {
    label: "Live",
    long: "Available now",
    note: "Implemented in the product and configured from your own school settings.",
  },
  guided: {
    label: "Guided setup",
    long: "Connected with our team",
    note: "Built and working, but switched on with us during onboarding because it needs your credentials, admin consent or hardware.",
  },
  planned: {
    label: "Roadmap",
    long: "On the roadmap",
    note: "Not in the product yet. Listed openly so you can plan around it instead of discovering it after signing.",
  },
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
      "How notices, fee reminders and attendance alerts actually reach parents  WhatsApp, SMS, email and app notifications.",
  },
  {
    title: "Sign-in and identity",
    slug: "identity",
    icon: "KeyRound",
    blurb:
      "Let staff and students use the school accounts they already have, without a second password.",
  },
  {
    title: "Online classes and meetings",
    slug: "classes",
    icon: "MonitorSmartphone",
    blurb:
      "Launch a class or a parent meeting from the timetable instead of pasting links into a group.",
  },
  {
    title: "Campus devices and tracking",
    slug: "devices",
    icon: "Network",
    blurb:
      "Biometric punches and bus locations arriving in the same attendance and transport records your staff already use.",
  },
  {
    title: "Files, data and developer access",
    slug: "platform",
    icon: "ScrollText",
    blurb:
      "Document storage, exports your accountant can open, and the REST API your IT team can build against.",
  },
] as const;

const integrationsData: Record<string, IntegrationEntry> = {
  razorpay: {
    name: "Razorpay",
    icon: "Wallet",
    accent: "teal",
    category: "Fee payments",
    status: "live",
    providers: ["UPI", "Cards", "Net banking", "Wallets", "Payment webhooks"],
    description:
      "Collect fees online through Razorpay and let every successful payment post itself against the student's fee record.",
    intro:
      "Razorpay is the default choice for Indian schools because parents already recognise it and it supports UPI, cards, netbanking and wallets in one checkout. In KIDUART, the parent opens the dues on the parent portal, pays through Razorpay, and the payment is written back against that student's fee record with a receipt number  so the accountant is not matching a bank statement to a WhatsApp screenshot the next morning.",
    benefits: [
      "UPI, cards, netbanking and wallets in one parent checkout",
      "Payments post against the student's fee record automatically",
      "Receipts generated from the same fee book the counter uses",
      "Signature plus webhook confirmation, so a payment is never recorded twice",
      "Failed and pending attempts stay visible instead of disappearing",
    ],
    flow: [
      {
        label: "Parent opens the dues",
        detail:
          "The parent portal shows outstanding fee heads for that student  the same heads the front office sees, not a separate payment page.",
      },
      {
        label: "Order created with your keys",
        detail:
          "KIDUART creates a Razorpay order using your school's own key and secret, held encrypted against your school record.",
      },
      {
        label: "Payment verified twice",
        detail:
          "The checkout response is signature-verified, and Razorpay's payment.captured webhook confirms it independently before anything is marked paid.",
      },
      {
        label: "Receipt and ledger written",
        detail:
          "The payment posts against the student's fee record with a receipt number, and shows up in due management and finance reports the same moment.",
      },
    ],
    ownership: {
      credentials:
        "Your Razorpay key and secret, stored encrypted against your school and never shared with another school on the platform.",
      data: "KIDUART stores the payment reference, amount and status. Card and UPI credentials are entered on Razorpay's checkout and never reach our servers.",
      billing:
        "Razorpay's transaction fee is charged on your own merchant account, and settlement goes to your school's bank account. We are not in the money path.",
    },
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
      { area: "finance-and-fee-management", module: "Due Management" },
      { area: "parent-management", module: "Parent Portal" },
    ],
    keywords:
      "Razorpay school fee collection, online school fee payment India, UPI school fees, school ERP payment gateway",
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
        q: "Can the same fee get paid twice?",
        a: "The webhook is matched against the order already recorded, so a repeated notification updates the existing entry instead of creating a second receipt.",
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
    providers: ["Payment Intents", "Cards", "Signed webhooks", "Refunds"],
    description:
      "Accept card payments through Stripe with the same automatic reconciliation into KIDUART's fee module.",
    intro:
      "Stripe suits schools that collect from international families or already run Stripe for other billing. The flow is identical to Razorpay: the parent pays from the portal, Stripe confirms through a signed webhook, and KIDUART writes the payment against the student's fee record and issues the receipt.",
    benefits: [
      "Card and supported local payment methods for international families",
      "Signed webhook confirmation before a payment is recorded",
      "Automatic receipt against the student's fee record",
      "Full and partial refunds reflected in the fee ledger",
      "One dues list regardless of which gateway a parent used",
    ],
    flow: [
      {
        label: "Dues shown to the parent",
        detail:
          "The parent portal lists the same outstanding heads the office sees, in the currency your fee structure is configured in.",
      },
      {
        label: "Payment intent created",
        detail:
          "KIDUART creates a Stripe payment intent using your school's own secret key, stored encrypted against your school.",
      },
      {
        label: "Webhook signature checked",
        detail:
          "Stripe's payment_intent and charge events are verified against your signing secret, so only genuine confirmations are accepted.",
      },
      {
        label: "Receipt and ledger written",
        detail:
          "The confirmed payment posts to the student's fee record, and any refund raised later is recorded against the same entry.",
      },
    ],
    ownership: {
      credentials:
        "Your Stripe secret and webhook signing secret, encrypted per school. Publishable keys are the only values exposed to the browser.",
      data: "KIDUART stores the payment intent reference, amount and status. Card data stays with Stripe.",
      billing:
        "Stripe's processing fee is charged on your Stripe account, and payouts land in your school's bank account.",
    },
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
      { area: "finance-and-fee-management", module: "Finance Reports" },
      { area: "parent-management", module: "Parent Portal" },
    ],
    keywords:
      "Stripe school fees, international school fee payment, card fee collection school ERP",
    faqs: [
      {
        q: "Can we run Razorpay and Stripe together?",
        a: "Most schools pick one primary gateway. If you genuinely need both  for example domestic fees on Razorpay and international payments on Stripe  raise it during the demo so we can configure it correctly.",
      },
      {
        q: "Are refunds handled in KIDUART?",
        a: "Refunds are recorded in the fee module so your ledger reflects them, including partial refunds, and the gateway-side refund is initiated from your Stripe dashboard.",
      },
    ],
  },
  paypal: {
    name: "PayPal",
    icon: "Wallet",
    accent: "yellow",
    category: "Fee payments",
    status: "planned",
    providers: ["Orders API", "Capture", "Dispute webhooks"],
    description:
      "Planned: PayPal as an additional gateway for school fee collection.",
    intro:
      "PayPal is supported in our platform billing stack but is not released as a school fee gateway. Online fee collection today runs on Razorpay for domestic payments and Stripe where card or international support is needed. We would rather say that plainly than let a logo imply something it does not do.",
    benefits: [
      "Planned: an additional option for overseas guardians",
      "Planned: the same reconciliation into the fee module",
      "Available today: Razorpay and Stripe for live fee collection",
    ],
    flow: [
      {
        label: "Today",
        detail:
          "Use Razorpay or Stripe for online fee collection. Both are live and reconcile into the fee book.",
      },
      {
        label: "If you need PayPal",
        detail:
          "Tell us at the demo which families need it, so the requirement is logged against a real school.",
      },
      {
        label: "When it ships",
        detail:
          "The setup will mirror the other gateways: your own PayPal business account and encrypted credentials.",
      },
      {
        label: "What will not change",
        detail:
          "Settlement stays with your account, and KIDUART records the transaction and issues the receipt.",
      },
    ],
    ownership: {
      credentials:
        "When released, your own PayPal business account credentials, encrypted per school.",
      data: "The same payment reference and status record the live gateways create.",
      billing:
        "PayPal fees would be charged on your account, as with every other gateway.",
    },
    steps: [
      "Use Razorpay or Stripe for live collection today",
      "Tell us if PayPal is a genuine requirement for your families",
      "We log it against the roadmap item with your use case",
      "You are notified when it is supported",
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
  "whatsapp-business": {
    name: "WhatsApp Business",
    icon: "MessageSquare",
    accent: "teal",
    category: "Messaging and notifications",
    status: "live",
    providers: [
      "WhatsApp Cloud API",
      "Meta message templates",
      "Delivery webhooks",
    ],
    description:
      "Reach parents on the channel they actually read, using approved WhatsApp Business templates from the school's own number.",
    intro:
      "Parents read WhatsApp. KIDUART connects to the WhatsApp Business Cloud API so notices, fee reminders and attendance alerts go out as approved template messages from the school's own number  with a record of what was sent, instead of a teacher forwarding messages from a personal phone at 10pm.",
    benefits: [
      "Notices and reminders on the channel parents check",
      "Messages sent from the school's own business number",
      "Approved templates, media and quick-reply buttons instead of ad-hoc forwards",
      "Class and section targeting, not one giant group",
      "Delivery status recorded, so the office can answer 'we were never informed'",
    ],
    flow: [
      {
        label: "An event happens",
        detail:
          "A student is marked absent, a fee falls due, a notice is published, or the office sends a targeted message.",
      },
      {
        label: "Template picked and filled",
        detail:
          "KIDUART selects the approved template for that event and fills it with the student, amount or date from the record itself.",
      },
      {
        label: "Sent through the Cloud API",
        detail:
          "The message goes out through the WhatsApp Business Cloud API on the school's verified number, to the guardians linked to that student.",
      },
      {
        label: "Delivery logged",
        detail:
          "Meta's status callbacks are written back, so sent, delivered and failed are visible against the communication record.",
      },
    ],
    ownership: {
      credentials:
        "Your WhatsApp Business account and verified number. Access tokens are held encrypted against your school configuration.",
      data: "KIDUART stores which template went to which guardian and its delivery status. Message content comes from your own records.",
      billing:
        "Meta charges conversation rates on your WhatsApp Business account, so you keep control of spend and can see it in your own billing.",
    },
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
      { area: "communication", module: "Notices" },
      { area: "parent-management", module: "Parent Communication" },
    ],
    keywords:
      "WhatsApp school notification, WhatsApp Business API school ERP, parent communication WhatsApp India",
    faqs: [
      {
        q: "Can teachers chat with parents one to one?",
        a: "The integration is built for school-to-parent notices and alerts, not informal chat. Keeping it template-based is what stops it becoming another unmanaged group.",
      },
      {
        q: "Does this replace SMS?",
        a: "It complements it. WhatsApp gets read more; SMS reaches everyone. Most schools use WhatsApp for routine communication and SMS for the parents who need it.",
      },
      {
        q: "What if a parent has no WhatsApp?",
        a: "The same event can also send SMS or email, so the guardian is not left out because of the channel they use.",
      },
    ],
  },
  "sms-notifications": {
    name: "SMS notifications",
    icon: "Megaphone",
    accent: "orange",
    category: "Messaging and notifications",
    status: "live",
    providers: ["Twilio", "MSG91", "Amazon SNS", "DLT templates"],
    description:
      "Send attendance alerts, fee reminders, OTPs and urgent notices as SMS  the one channel every parent can receive.",
    intro:
      "Not every parent has a smartphone, checks email, or installs an app, but almost every parent receives SMS. KIDUART sends transactional SMS through a supported gateway  Twilio, MSG91 or Amazon SNS  using templates you manage in-product, so an absence alert or a fee reminder reaches the guardian on the same day rather than in a diary note the child forgets to show.",
    benefits: [
      "Same-day absence alerts to the guardian on record",
      "Fee due and receipt confirmations by SMS",
      "Login OTP and password reset codes on the same gateway",
      "Targeted sends by class, section or staff group",
      "Delivery callbacks recorded against the communication log",
    ],
    flow: [
      {
        label: "Event triggers a message",
        detail:
          "Absence, fee due, notice, OTP  you decide which events are allowed to send SMS at all.",
      },
      {
        label: "Template resolved",
        detail:
          "The approved template for that event is filled from the student or fee record, keeping wording consistent and DLT-compliant.",
      },
      {
        label: "Gateway sends it",
        detail:
          "The configured provider  Twilio, MSG91 or Amazon SNS  delivers to the guardian number on the student record.",
      },
      {
        label: "Status written back",
        detail:
          "Provider delivery callbacks update the record, so a failed number is visible instead of silently lost.",
      },
    ],
    ownership: {
      credentials:
        "Your gateway account credentials and sender ID, held against your school configuration.",
      data: "KIDUART records which template was sent to which number and the delivery status returned.",
      billing:
        "SMS credits are billed by your provider on your own account, so you control pricing and volume.",
    },
    steps: [
      "Pick your gateway  Twilio, MSG91 or Amazon SNS",
      "Share the credentials and approved sender ID",
      "Map which events send SMS: absence, fee due, notice, OTP",
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
      {
        area: "security-and-authentication",
        module: "Authentication Communications",
      },
    ],
    keywords:
      "school SMS gateway India, bulk SMS school ERP, attendance SMS alert parents, DLT school SMS",
    faqs: [
      {
        q: "Who pays for the SMS credits?",
        a: "SMS is billed by your provider on your own account, so you keep control of credits and pricing. KIDUART sends through it and records what was sent.",
      },
      {
        q: "Will parents get flooded with messages?",
        a: "No. You decide which events trigger an SMS. Most schools keep SMS for absence, fee dues and urgent notices, and use WhatsApp, app notifications or email for everything else.",
      },
      {
        q: "Can we change gateway later?",
        a: "Yes. The gateway sits behind one interface, so moving from one provider to another is a credential change, not a rebuild of your templates.",
      },
    ],
  },
  twilio: {
    name: "Twilio",
    icon: "Megaphone",
    accent: "navy",
    category: "Messaging and notifications",
    status: "live",
    providers: [
      "Programmable Messaging",
      "Messaging Service SID",
      "Status callbacks",
    ],
    description:
      "Use Twilio as your SMS gateway, including messaging services and delivery status callbacks.",
    intro:
      "Twilio is the gateway of choice for schools that already run it, need reliable international reach, or want a messaging service pool rather than a single sender number. KIDUART sends transactional school SMS through Twilio and writes Twilio's delivery callbacks back against the message record.",
    benefits: [
      "Send from a Twilio number or a messaging service pool",
      "Delivery and failure callbacks recorded per message",
      "International reach for schools with overseas guardians",
      "The same templates and event rules as any other gateway",
    ],
    flow: [
      {
        label: "Credentials configured",
        detail:
          "Your Twilio account SID, auth token and sending number or messaging service SID are set for your school.",
      },
      {
        label: "Message queued",
        detail:
          "School events queue the message rather than blocking the screen your staff is working on.",
      },
      {
        label: "Twilio delivers",
        detail:
          "The message is sent through Twilio's Programmable Messaging API to the guardian or staff number.",
      },
      {
        label: "Callback verified and stored",
        detail:
          "Twilio's status callback is signature-checked and written back so delivery is auditable.",
      },
    ],
    ownership: {
      credentials:
        "Your Twilio account SID and auth token, held in your school's messaging configuration.",
      data: "Message reference, recipient and delivery status stay in KIDUART's communication log.",
      billing:
        "Twilio bills your own account per segment, so spend stays visible to you.",
    },
    steps: [
      "Create or reuse a Twilio account for the school",
      "Share the account SID, auth token and sending number or messaging service SID",
      "We configure Twilio as your gateway and register the status callback",
      "Send a test message to a staff number",
      "Enable the events that should send SMS",
    ],
    requirements: [
      "A Twilio account with a provisioned number or messaging service",
      "Regulatory registration where your country requires it",
      "Guardian numbers on student records",
    ],
    modules: [
      { area: "communication", module: "Messaging" },
      {
        area: "security-and-authentication",
        module: "Authentication Communications",
      },
    ],
    keywords:
      "Twilio school SMS integration, Twilio messaging service school ERP",
    faqs: [
      {
        q: "Is Twilio a good fit for an Indian school?",
        a: "It works, but Indian schools sending high domestic volume usually find a local gateway such as MSG91 cheaper and simpler for DLT registration. Twilio makes more sense if you already use it or send internationally.",
      },
      {
        q: "Do we need a messaging service?",
        a: "No. A single Twilio number is enough to start. A messaging service helps once you are sending at volume and want pooled numbers.",
      },
    ],
  },
  msg91: {
    name: "MSG91",
    icon: "Megaphone",
    accent: "orange",
    category: "Messaging and notifications",
    status: "live",
    providers: ["Transactional SMS", "DLT sender ID", "Delivery reports"],
    description:
      "Use MSG91 as your Indian SMS gateway with DLT-registered templates and a school sender ID.",
    intro:
      "MSG91 is the practical choice for Indian schools: domestic transactional pricing, a sender ID parents recognise, and DLT template registration handled on your own account. KIDUART sends absence alerts, fee reminders and OTPs through it and records the delivery report against each message.",
    benefits: [
      "Domestic transactional pricing suited to daily school volume",
      "A registered sender ID so parents recognise the school",
      "DLT-registered templates mapped to school events",
      "Delivery reports written back to the communication log",
    ],
    flow: [
      {
        label: "DLT templates registered",
        detail:
          "Your absence, fee and OTP templates are registered on DLT under your own entity, as Indian regulation requires.",
      },
      {
        label: "Event fills the template",
        detail:
          "KIDUART fills the approved template with values from the student, fee or login record.",
      },
      {
        label: "MSG91 sends it",
        detail:
          "The message goes out on your sender ID to the guardian numbers on record.",
      },
      {
        label: "Delivery report stored",
        detail:
          "MSG91's report updates the message record, so failed numbers surface for correction.",
      },
    ],
    ownership: {
      credentials:
        "Your MSG91 auth key and sender ID, stored against your school's messaging configuration.",
      data: "KIDUART keeps the template used, recipient and delivery status.",
      billing:
        "SMS credits are purchased and billed on your own MSG91 account.",
    },
    steps: [
      "Create an MSG91 account in the school's name",
      "Register your entity, sender ID and templates on DLT",
      "Share the auth key and sender ID with us",
      "Map each DLT template to the KIDUART event that uses it",
      "Test on a staff number, then enable for parents",
    ],
    requirements: [
      "An MSG91 account with a DLT-registered sender ID",
      "DLT-approved templates for each transactional message",
      "Guardian mobile numbers on student records",
    ],
    modules: [
      { area: "communication", module: "Messaging" },
      {
        area: "security-and-authentication",
        module: "Authentication Communications",
      },
    ],
    keywords:
      "MSG91 school SMS, DLT template school SMS India, school sender ID SMS",
    faqs: [
      {
        q: "Who registers the DLT templates?",
        a: "The school does, on its own entity, because the sender ID belongs to you. We tell you exactly which templates to register and map them once approved.",
      },
      {
        q: "What happens if a template is rejected on DLT?",
        a: "That event simply does not send until an approved template exists. Nothing else stops, and the message stays queued as failed rather than silently dropped.",
      },
    ],
  },
  "email-delivery": {
    name: "Email delivery",
    icon: "ScrollText",
    accent: "bronze",
    category: "Messaging and notifications",
    status: "live",
    providers: ["SMTP", "SendGrid", "Amazon SES", "Mailgun"],
    description:
      "Send circulars, receipts, report card links and account emails through your own email provider.",
    intro:
      "Email is where longer school communication belongs: circulars, fee receipts, report card links, staff notices and account verification. KIDUART sends through your provider  plain SMTP or a delivery service like SendGrid, Amazon SES or Mailgun  so mail arrives from your school domain and lands in inboxes rather than spam.",
    benefits: [
      "Mail sent from your school domain, not a generic address",
      "Fee receipts and circulars delivered as records parents can keep",
      "Account verification and password reset mail handled reliably",
      "Choice of SMTP, SendGrid, Amazon SES or Mailgun",
      "Provider event webhooks recorded so bounces are visible",
    ],
    flow: [
      {
        label: "Provider chosen",
        detail:
          "Start with your existing SMTP mailbox, or move to SendGrid, Amazon SES or Mailgun as volume grows.",
      },
      {
        label: "Domain authenticated",
        detail:
          "SPF and DKIM records are published once so mail sent on your behalf is trusted by inbox providers.",
      },
      {
        label: "Mail queued and sent",
        detail:
          "Circulars, receipts and account mail are queued, so a large send never blocks the person who triggered it.",
      },
      {
        label: "Events recorded",
        detail:
          "Delivery, bounce and complaint webhooks are stored so a wrong address is corrected rather than repeated.",
      },
    ],
    ownership: {
      credentials:
        "Your SMTP or provider API credentials and your own from-address on your school domain.",
      data: "KIDUART stores what was sent, to whom, and the delivery outcome.",
      billing:
        "Your provider bills your account. Plain SMTP on an existing mailbox costs nothing extra to start.",
    },
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
      { area: "communication", module: "Announcements" },
      { area: "security-and-authentication", module: "Core Authentication" },
    ],
    keywords:
      "school email circular software, SendGrid school ERP, Amazon SES school email, SMTP school notification",
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
  "mobile-push": {
    name: "App push notifications",
    icon: "Smartphone",
    accent: "teal",
    category: "Messaging and notifications",
    status: "live",
    providers: [
      "Expo push service",
      "Device token registry",
      "Android and iOS",
    ],
    description:
      "Push alerts straight to the parent and staff mobile app, with no per-message cost.",
    intro:
      "Once a parent installs the app, push notification becomes the cheapest and fastest channel you have. Device tokens are registered at sign-in and stored against the user, so a notice, a fee reminder or an attendance alert reaches the right phone  and the same event can still fall back to SMS for parents who have not installed anything.",
    benefits: [
      "No per-message cost once a parent is on the app",
      "Alerts tied to the user's role, not a broadcast group",
      "Multiple devices per user handled through a token registry",
      "Stale tokens cleaned up when a device stops responding",
      "Works alongside SMS, WhatsApp and email for the same event",
    ],
    flow: [
      {
        label: "Device registers",
        detail:
          "When a parent or staff member signs in on the app, the device token is stored against that user.",
      },
      {
        label: "Event queues a push",
        detail:
          "Attendance, fee, notice and approval events queue a notification rather than sending inline.",
      },
      {
        label: "Delivered to the device",
        detail:
          "The push is delivered to the registered Android or iOS devices for that user.",
      },
      {
        label: "Tokens kept clean",
        detail:
          "Devices that stop accepting messages are deactivated, so you are not sending into the void.",
      },
    ],
    ownership: {
      credentials:
        "Handled by KIDUART as part of the mobile app  there is nothing for your IT team to buy or configure.",
      data: "The device token and the notifications sent to it. Notification content comes from your own records.",
      billing:
        "No per-message charge for push. This is what keeps routine alerts off your SMS bill.",
    },
    steps: [
      "Parents and staff install the KIDUART app and sign in",
      "Device tokens register automatically at sign-in",
      "Choose which events send a push notification",
      "Decide which events also need SMS as a fallback",
      "Watch app adoption before reducing SMS volume",
    ],
    requirements: [
      "Parents and staff using the mobile app",
      "Correct contact records so users can sign in",
      "A decision on which events stay on SMS regardless",
    ],
    modules: [
      { area: "communication", module: "Messaging" },
      { area: "parent-management", module: "Parent Portal" },
      { area: "student-management", module: "Student Portal" },
    ],
    keywords: "school app push notification, parent app alerts school ERP",
    faqs: [
      {
        q: "Can push replace SMS entirely?",
        a: "Only for parents who have installed the app and kept notifications on. Most schools keep absence and fee alerts on SMS as well until app adoption is high.",
      },
      {
        q: "Do parents get notifications for other children?",
        a: "No. Notifications follow the parent-student links on record, so a parent with two children gets each child's alerts and nothing else.",
      },
    ],
  },
  "google-workspace": {
    name: "Google Workspace sign-in",
    icon: "KeyRound",
    accent: "teal",
    category: "Sign-in and identity",
    status: "live",
    providers: ["Google OAuth 2.0", "Workspace for Education domains"],
    description:
      "Let staff and students sign in with the Google accounts your school already issues.",
    intro:
      "If your school runs Google Workspace for Education, staff and students already have a managed account. KIDUART supports Google sign-in so they use it here too  one less password to reset, and access that follows the account your IT admin already controls.",
    benefits: [
      "One school account instead of another password to remember",
      "Fewer password reset requests at the front office",
      "Access tied to the Google account your admin controls",
      "Works alongside normal email and password login",
      "Role and permission decisions stay inside KIDUART",
    ],
    flow: [
      {
        label: "User picks Google sign-in",
        detail:
          "Staff or students choose Google at the login screen instead of typing a separate password.",
      },
      {
        label: "Google proves identity",
        detail:
          "Google's OAuth flow confirms who they are and returns a verified email address.",
      },
      {
        label: "Matched to a KIDUART user",
        detail:
          "The verified address is matched to an existing user record  sign-in does not create access on its own.",
      },
      {
        label: "Role decides what opens",
        detail:
          "The panel and permissions come from their KIDUART role, exactly as with a password login.",
      },
    ],
    ownership: {
      credentials:
        "Your Workspace domain and admin consent. Google holds the password; KIDUART never sees it.",
      data: "KIDUART stores the verified email and the link to the user record.",
      billing:
        "No additional cost. Your existing Workspace for Education licence is enough.",
    },
    steps: [
      "Confirm your Google Workspace domain with our team",
      "We register the sign-in client for your school",
      "Choose which roles may use Google sign-in",
      "Test with one staff and one student account",
      "Announce it to staff  existing passwords keep working",
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
    keywords:
      "Google sign-in school ERP, Google Workspace for Education login, school single sign-on India",
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
    providers: ["Microsoft Entra ID", "OAuth 2.0", "Microsoft 365 tenants"],
    description:
      "Sign in with Microsoft school accounts for campuses standardised on Microsoft 365.",
    intro:
      "For schools running Microsoft 365, staff and students can sign in to KIDUART with their existing Microsoft account. Same principle as Google sign-in: identity comes from the account your IT team already manages, while permissions stay with the KIDUART role.",
    benefits: [
      "Microsoft school accounts work as the login",
      "No parallel password list for staff",
      "Identity managed centrally by your IT team",
      "Tenant-level MFA policies apply at sign-in",
      "Runs alongside email and password login",
    ],
    flow: [
      {
        label: "User picks Microsoft sign-in",
        detail:
          "Staff choose Microsoft at the login screen and are sent to your tenant.",
      },
      {
        label: "Your tenant authenticates",
        detail:
          "Your Microsoft policies, including MFA, apply before anything is returned to KIDUART.",
      },
      {
        label: "Matched to a KIDUART user",
        detail:
          "The verified account is matched to an existing user record; sign-in alone does not grant access.",
      },
      {
        label: "Role decides what opens",
        detail:
          "Panels, modules and data visibility come from the KIDUART role, not from Microsoft.",
      },
    ],
    ownership: {
      credentials:
        "Your Microsoft tenant and admin consent. Passwords and MFA stay with Microsoft.",
      data: "KIDUART stores the verified account identifier and its link to the user record.",
      billing: "No extra cost beyond your existing Microsoft 365 licensing.",
    },
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
    keywords:
      "Microsoft 365 school login, Entra ID school ERP sign-in, school SSO Microsoft",
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
    status: "guided",
    providers: ["Server-to-server OAuth", "Meetings API", "Cloud recordings"],
    description:
      "Create Zoom sessions for timetabled classes and parent meetings from inside KIDUART.",
    intro:
      "When an online class or a parent-teacher meeting is scheduled in KIDUART, the Zoom session is created with it, and the link travels with the timetable entry or the meeting notice. Nobody hunts through a WhatsApp group for a link that was posted last week. Zoom is connected with our team during onboarding because it needs credentials from your Zoom account.",
    benefits: [
      "Session created from the timetable or meeting entry",
      "Link delivered with the notice parents already receive",
      "Class and teacher context stays attached to the session",
      "Parent-teacher meetings scheduled the same way",
      "Cloud recording references kept with the class where your plan allows",
    ],
    flow: [
      {
        label: "Class or meeting scheduled",
        detail:
          "A teacher or the office schedules the session in the timetable or as a parent-teacher meeting.",
      },
      {
        label: "Zoom meeting created",
        detail:
          "KIDUART calls Zoom with your school's server-to-server credentials and creates the meeting.",
      },
      {
        label: "Link travels with the notice",
        detail:
          "The join link is attached to the schedule entry and goes out through the notice the class already receives.",
      },
      {
        label: "Attendance stays in KIDUART",
        detail:
          "Presence is recorded in the attendance module so online and offline days sit in the same register.",
      },
    ],
    ownership: {
      credentials:
        "Your Zoom account and server-to-server app credentials, stored encrypted against your school.",
      data: "KIDUART stores the meeting ID, link and schedule. Recordings stay in your Zoom account.",
      billing:
        "Zoom licensing stays on your account, including the meeting duration limits of your plan.",
    },
    steps: [
      "Tell us during onboarding that you use Zoom",
      "Create a server-to-server app in your Zoom account and share the credentials",
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
      { area: "academic", module: "Parent-Teacher Meetings" },
      { area: "communication", module: "Events" },
    ],
    keywords:
      "Zoom school ERP integration, online class link timetable, parent teacher meeting Zoom school",
    faqs: [
      {
        q: "Is attendance for an online class recorded automatically?",
        a: "Attendance is marked in KIDUART's attendance module as usual. Ask us during the demo how far the automation goes for your Zoom plan before assuming it is hands-off.",
      },
      {
        q: "Why is this guided setup rather than self-serve?",
        a: "Because it needs an app created inside your Zoom account with the right scopes. We do that with your IT contact once, then it runs on its own.",
      },
    ],
  },
  "google-meet": {
    name: "Google Meet",
    icon: "MonitorSmartphone",
    accent: "teal",
    category: "Online classes and meetings",
    status: "guided",
    providers: [
      "Google Calendar API",
      "Meet conference links",
      "Workspace consent",
    ],
    description:
      "Generate Google Meet links for classes and meetings for schools already on Google Workspace.",
    intro:
      "For Google Workspace schools, Meet is the path of least resistance: no extra licence, and staff already know it. KIDUART creates Meet links against your Workspace calendar for scheduled classes and meetings, so the link is attached to the schedule instead of pasted into a chat.",
    benefits: [
      "No additional video licence for Google Workspace schools",
      "Links created with the class or meeting schedule",
      "Familiar to staff who already use Google tools",
      "Notices carry the link to the right class or group",
      "Calendar entries stay in the school's own Workspace",
    ],
    flow: [
      {
        label: "Session scheduled in KIDUART",
        detail:
          "A class period or meeting is created with its date, time and participants.",
      },
      {
        label: "Calendar event created",
        detail:
          "KIDUART creates the event on your Workspace calendar with a Meet conference attached.",
      },
      {
        label: "Link attached to the schedule",
        detail:
          "The Meet link is stored with the class or meeting so it is found from the timetable.",
      },
      {
        label: "Notice carries it out",
        detail:
          "The class or parent group receives the link through the notice channel they already use.",
      },
    ],
    ownership: {
      credentials:
        "Your Workspace domain and the consent your admin grants for calendar access.",
      data: "Calendar events live in your Workspace. KIDUART keeps the link against the schedule entry.",
      billing:
        "Covered by your existing Google Workspace for Education licence.",
    },
    steps: [
      "Confirm your Google Workspace domain during onboarding",
      "Your admin grants calendar and Meet consent",
      "Pick the classes or meeting types that need Meet links",
      "Test one class before rolling out",
      "Enable across the sections that need it",
    ],
    requirements: [
      "Google Workspace for Education",
      "Workspace admin consent for calendar access",
      "Timetable configured in KIDUART",
    ],
    modules: [
      { area: "academic", module: "Classes & Sections" },
      { area: "academic", module: "Academic Calendar" },
      { area: "communication", module: "Events" },
    ],
    keywords:
      "Google Meet school timetable, online class link Google Workspace school",
    faqs: [
      {
        q: "Do students need Google accounts?",
        a: "For managed meetings it is much smoother if they do. Without them, joining depends on your Workspace meeting settings.",
      },
      {
        q: "Does it clash with Google sign-in?",
        a: "No. Sign-in and Meet use the same Workspace domain but are separate consents, so you can enable either one on its own.",
      },
    ],
  },
  "microsoft-teams": {
    name: "Microsoft Teams",
    icon: "MonitorSmartphone",
    accent: "navy",
    category: "Online classes and meetings",
    status: "guided",
    providers: ["Microsoft Graph", "Online meetings", "Teams and channels"],
    description:
      "Schedule Teams meetings for classes and staff meetings from your KIDUART calendar.",
    intro:
      "Schools standardised on Microsoft 365 can keep online classes and staff meetings in Teams while scheduling them from KIDUART, so the calendar entry, the participants and the link stay in one place. It is connected through Microsoft Graph with your IT admin's consent during onboarding.",
    benefits: [
      "Meetings created against your Microsoft 365 tenant",
      "Class and staff meeting links attached to the schedule",
      "Teams and channels can be created for a class group",
      "Consistent with your existing Microsoft rollout",
      "Notices carry the link to the right group",
    ],
    flow: [
      {
        label: "Meeting scheduled",
        detail:
          "A class period, staff meeting or parent meeting is created in KIDUART with its participants.",
      },
      {
        label: "Graph creates the meeting",
        detail:
          "KIDUART calls Microsoft Graph on your tenant to create the online meeting.",
      },
      {
        label: "Link stored with the schedule",
        detail:
          "The join link stays attached to the class or event, not in someone's inbox.",
      },
      {
        label: "Group is notified",
        detail:
          "Staff or parents receive it through the notice channel already configured.",
      },
    ],
    ownership: {
      credentials:
        "Your Microsoft tenant and the application consent your IT admin grants.",
      data: "Meetings and any channel content live in your Microsoft 365 tenant.",
      billing: "Covered by your existing Microsoft 365 licensing for staff.",
    },
    steps: [
      "Confirm your Microsoft 365 tenant during onboarding",
      "Your IT admin grants the permissions needed to create meetings",
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
      { area: "hr-and-staff-management", module: "Teacher Portal" },
    ],
    keywords: "Microsoft Teams school ERP, Teams online class school India",
    faqs: [
      {
        q: "Can we use Teams and Zoom together?",
        a: "Yes, though it is usually simpler to standardise on one. Some schools use Teams for staff and Zoom for parent meetings.",
      },
      {
        q: "What consent does our IT admin have to give?",
        a: "Permission to create online meetings on the tenant. We share the exact scope list before anything is approved, and it can be revoked from your side at any time.",
      },
    ],
  },
  "google-classroom": {
    name: "Google Classroom",
    icon: "GraduationCap",
    accent: "yellow",
    category: "Online classes and meetings",
    status: "planned",
    providers: ["Classroom API", "Roster sync", "Coursework"],
    description:
      "Planned: sync classes and assignment data between KIDUART and Google Classroom.",
    intro:
      "Google Classroom sync is on our roadmap, not in the product today. When it ships, the intent is roster sync from KIDUART's class and section data so teachers do not build the same class twice, and assignment visibility flowing back into the academic record. We are listing it as planned rather than implying it already works.",
    benefits: [
      "Planned: roster sync from KIDUART classes and sections",
      "Planned: assignment visibility inside the academic record",
      "Planned: fewer duplicate class setups for teachers",
      "Available now: Google sign-in and Google Meet",
    ],
    flow: [
      {
        label: "Today",
        detail:
          "Schools run Classroom alongside KIDUART; class lists are exported at session start.",
      },
      {
        label: "Tell us",
        detail:
          "Raise it during the demo so the requirement is logged against a real school.",
      },
      {
        label: "When it ships",
        detail:
          "Roster sync will follow KIDUART's class and section structure as the source of truth.",
      },
      {
        label: "What stays yours",
        detail: "Coursework and grades in Classroom remain in your Workspace.",
      },
    ],
    ownership: {
      credentials:
        "When released, Workspace admin consent for the Classroom scopes.",
      data: "Class and enrolment data would flow out of KIDUART; coursework stays in Classroom.",
      billing: "No additional cost is expected beyond Workspace for Education.",
    },
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
        a: "Yes  schools do. They simply run in parallel until the sync ships. Google sign-in and Google Meet are available now.",
      },
    ],
  },
  moodle: {
    name: "Moodle",
    icon: "BookOpen",
    accent: "bronze",
    category: "Online classes and meetings",
    status: "planned",
    providers: ["Moodle web services", "Enrolment sync"],
    description:
      "Planned: connect a Moodle LMS to KIDUART student and class records.",
    intro:
      "Moodle integration is a roadmap item. Schools that run Moodle for course content want their student and class data to come from one place instead of being re-entered. The planned scope is user and enrolment sync from KIDUART into Moodle courses. It is not available yet, and we would rather say so here.",
    benefits: [
      "Planned: student and enrolment sync into Moodle courses",
      "Planned: one source of truth for class structure",
      "Planned: fewer manual enrolment lists each session",
    ],
    flow: [
      {
        label: "Today",
        detail:
          "Export class and student lists from KIDUART reports and import them into Moodle.",
      },
      {
        label: "Tell us",
        detail:
          "Share your Moodle version and hosting so scope can be assessed properly.",
      },
      {
        label: "When it ships",
        detail:
          "KIDUART would stay the record of who is in which class, and push that into Moodle.",
      },
      {
        label: "What stays yours",
        detail:
          "Course content and activity data remain in your Moodle installation.",
      },
    ],
    ownership: {
      credentials:
        "When released, a Moodle web services token your IT team issues.",
      data: "User and enrolment records would flow out of KIDUART; course content stays in Moodle.",
      billing: "Moodle hosting stays on your side, as it does today.",
    },
    steps: [
      "Raise Moodle during your demo so we capture the requirement",
      "Share your Moodle version and hosting details",
      "We assess scope against the roadmap",
      "You are notified when the connector is available for testing",
    ],
    requirements: [
      "A Moodle installation your IT team can configure",
      "Class structure maintained in KIDUART",
    ],
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
    providers: ["Canvas API", "Enrolment sync"],
    description: "Planned: enrolment sync between KIDUART and Canvas LMS.",
    intro:
      "Canvas integration is planned, not shipped. The intended scope matches our other LMS work: KIDUART stays the record of who is in which class, and that flows into Canvas courses so teachers are not maintaining two rosters.",
    benefits: [
      "Planned: enrolment sync from KIDUART classes",
      "Planned: consistent class structure across both systems",
    ],
    flow: [
      {
        label: "Today",
        detail:
          "Class lists are exported from KIDUART and imported into Canvas each session.",
      },
      {
        label: "Tell us",
        detail:
          "Share your Canvas instance details so the requirement is logged.",
      },
      {
        label: "When it ships",
        detail:
          "Enrolments would sync from KIDUART classes into Canvas courses.",
      },
      {
        label: "What stays yours",
        detail: "Course design and grading stay inside Canvas.",
      },
    ],
    ownership: {
      credentials: "When released, a Canvas admin API token.",
      data: "Enrolment records would flow out of KIDUART; coursework stays in Canvas.",
      billing: "Canvas licensing stays on your side.",
    },
    steps: [
      "Tell us you use Canvas during the demo",
      "We log the requirement with your setup details",
      "You are notified when it reaches testing",
    ],
    requirements: [
      "A Canvas instance with admin access",
      "Classes and sections in KIDUART",
    ],
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
  "biometric-attendance": {
    name: "Biometric attendance devices",
    icon: "Fingerprint",
    accent: "navy",
    category: "Campus devices and tracking",
    status: "guided",
    providers: ["ZKTeco devices", "Device API key", "RFID cards"],
    description:
      "Push fingerprint and card punches from your existing attendance machines into staff and student attendance.",
    intro:
      "Most schools already own an attendance machine at the gate or the staff room. KIDUART accepts punches from those devices through a device endpoint secured with its own API key, so the punch lands in the same attendance record your registers, reports and payroll already read from  instead of a monthly export nobody reconciles.",
    benefits: [
      "Gate and staff-room punches land in the attendance record directly",
      "Staff attendance feeds leave and payroll instead of a separate sheet",
      "Devices authenticate with their own key, not a staff login",
      "RFID card numbers can be stored against the student record",
      "Manual correction still possible, with the change recorded",
    ],
    flow: [
      {
        label: "Device is registered",
        detail:
          "Each machine is registered for your school and issued its own device key, so a device is not a user account.",
      },
      {
        label: "Punch is captured",
        detail:
          "A fingerprint or card punch is read at the gate, the staff room or the hostel entry point.",
      },
      {
        label: "Sent to KIDUART",
        detail:
          "The device or its connector posts the punch to the attendance endpoint using the device key.",
      },
      {
        label: "Written to attendance",
        detail:
          "The punch is matched to the student or staff record and becomes attendance, visible in registers and reports.",
      },
    ],
    ownership: {
      credentials:
        "The device key belongs to your school and can be rotated or revoked without touching staff logins.",
      data: "KIDUART stores the punch time and the matched person. Fingerprint templates stay on your device.",
      billing: "The hardware is yours. There is no per-punch charge from us.",
    },
    steps: [
      "Tell us which attendance machines you already own",
      "We confirm how your model can post or push punches",
      "The device is registered and issued its own key",
      "Map device users to staff and student records",
      "Run a parallel week against your existing register before switching over",
    ],
    requirements: [
      "Attendance hardware at the gate or staff room",
      "Network access from the device to the internet, or a local connector",
      "Staff and student records already created in KIDUART",
    ],
    modules: [
      { area: "academic", module: "Attendance" },
      { area: "hr-and-staff-management", module: "Staff Attendance" },
    ],
    keywords:
      "biometric attendance school ERP, ZKTeco school attendance integration, RFID card attendance school",
    faqs: [
      {
        q: "Do we have to buy new machines?",
        a: "Usually not. Tell us the make and model you already run and we will confirm what it can push before you spend anything.",
      },
      {
        q: "Where are fingerprints stored?",
        a: "On your device, as they are today. KIDUART receives the punch event and the person it maps to, not the biometric template.",
      },
      {
        q: "Why is this guided setup?",
        a: "Because device models differ. Registration and mapping are done with our team once, and after that punches flow on their own.",
      },
    ],
  },
  "gps-transport-tracking": {
    name: "GPS bus tracking devices",
    icon: "Bus",
    accent: "orange",
    category: "Campus devices and tracking",
    status: "guided",
    providers: ["GPS trackers", "Live location API", "Geofence alerts"],
    description:
      "Feed live vehicle locations from your bus trackers into the transport module parents and the office watch.",
    intro:
      "If your buses already carry GPS trackers, the location data is usually stranded in the tracking vendor's own portal. KIDUART accepts live locations against the vehicle and route records you maintain, so the office sees the bus against its route, and stop and geofence events can drive parent alerts rather than phone calls.",
    benefits: [
      "Live vehicle position against the route it is actually running",
      "Stop and geofence events available for parent alerts",
      "One place for vehicle, driver, route and location",
      "Route and stop records stay the source of truth",
      "Works with the trackers you already fitted",
    ],
    flow: [
      {
        label: "Vehicle and route recorded",
        detail:
          "Buses, drivers, routes and stops are maintained in the transport module.",
      },
      {
        label: "Tracker reports position",
        detail:
          "Your GPS device or its platform posts location updates against the vehicle record.",
      },
      {
        label: "Matched to the route",
        detail:
          "The position is placed against the route and its stops, so the office sees progress rather than raw coordinates.",
      },
      {
        label: "Events drive alerts",
        detail:
          "Stop and geofence events can trigger the parent notification channels you already use.",
      },
    ],
    ownership: {
      credentials:
        "Your tracking hardware and its account. KIDUART receives location data against your vehicles.",
      data: "Vehicle position history sits with your school's transport records.",
      billing: "SIM and tracker charges stay with your existing vendor.",
    },
    steps: [
      "Tell us which trackers are fitted and which platform they report to",
      "We confirm how location data can reach KIDUART for your model",
      "Vehicles, drivers, routes and stops are set up in the transport module",
      "Run one route live and check it against the driver's actual trip",
      "Decide which stop events should notify parents",
    ],
    requirements: [
      "GPS trackers fitted to the buses",
      "Routes and stops defined in KIDUART",
      "A transport in-charge who owns the daily view",
    ],
    modules: [
      { area: "transport-management", module: "Tracking" },
      { area: "transport-management", module: "Routes" },
      { area: "transport-management", module: "Vehicles" },
    ],
    keywords:
      "school bus GPS tracking software, live bus tracking parents app, school transport route management",
    faqs: [
      {
        q: "Does this replace our tracking vendor?",
        a: "No. Your trackers and SIMs keep working. KIDUART puts that location next to the route, driver and student list so it becomes useful to the school office.",
      },
      {
        q: "Can parents see the live bus?",
        a: "Parent-facing visibility is configured per school. Discuss it at the demo, because what you want parents to see during a delay is a policy decision, not just a toggle.",
      },
    ],
  },
  "cloud-storage": {
    name: "Cloud document storage",
    icon: "Database",
    accent: "bronze",
    category: "Files, data and developer access",
    status: "live",
    providers: ["Cloudinary", "Amazon S3", "CloudFront CDN"],
    description:
      "Store admission documents, certificates and staff files in managed cloud storage instead of a shared drive.",
    intro:
      "Schools accumulate documents: birth certificates, transfer certificates, mark sheets, staff qualifications, ID proofs. KIDUART stores uploads in managed cloud storage  Cloudinary for media and Amazon S3 with CDN delivery for documents  and links each file to the record it belongs to, so a document is found from the student's profile rather than a folder someone renamed.",
    benefits: [
      "Documents attached to the student or staff record",
      "No shared drive naming conventions to maintain",
      "Access follows the same role permissions as the record",
      "Files delivered over CDN, so a large certificate opens quickly",
      "Uploads available from the panel where the work happens",
    ],
    flow: [
      {
        label: "Upload at the record",
        detail:
          "The front office attaches a document while admitting a student or onboarding a staff member.",
      },
      {
        label: "Scanned and stored",
        detail:
          "The file is checked and written to managed cloud storage rather than an email attachment or a shared folder.",
      },
      {
        label: "Linked to the profile",
        detail:
          "The document is attached to that student or staff record with its type, so it is searchable by person.",
      },
      {
        label: "Opened by permission",
        detail:
          "Only roles with rights on that record can open it, and access follows the same rules as the record itself.",
      },
    ],
    ownership: {
      credentials:
        "Managed by KIDUART as part of the platform, so your school does not run buckets or CDNs.",
      data: "Your documents belong to your school and are exportable when you ask.",
      billing:
        "Storage is part of your subscription. There is no separate cloud bill to reconcile.",
    },
    steps: [
      "Confirm the document types you collect during onboarding",
      "We map each type to the record it attaches to",
      "Bulk import your existing admission documents",
      "Set which roles may view each document type",
      "Train the front office to upload at admission time",
    ],
    requirements: [
      "The document checklist your school actually collects",
      "Existing files in a readable folder structure for bulk import",
      "A decision on which staff roles may view them",
    ],
    modules: [
      { area: "student-management", module: "Documents" },
      { area: "facilities-and-inventory", module: "Infrastructure" },
    ],
    keywords:
      "school document management software, student certificate storage school ERP",
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
  "data-exports": {
    name: "Excel and CSV exports",
    icon: "FileSpreadsheet",
    accent: "teal",
    category: "Files, data and developer access",
    status: "live",
    providers: ["Excel (XLSX)", "CSV", "PDF reports"],
    description:
      "Take any list or report out as Excel, CSV or PDF for your accountant, trust office or board submission.",
    intro:
      "Not every hand-off needs an API. Fee collection summaries go to the accountant, staff lists go to the trust office, student data goes into a board format. KIDUART exports lists and reports as Excel, CSV or PDF, and takes bulk imports the same way  so moving data in and out never depends on someone retyping it.",
    benefits: [
      "Fee, attendance, academic and staff reports as Excel or CSV",
      "Printable PDF reports for board and trust submissions",
      "Bulk import for students, staff and fee structures at onboarding",
      "Exports carry the same filters you applied on screen",
      "Your accountant works in the format they already use",
    ],
    flow: [
      {
        label: "Filter the list",
        detail:
          "Pick the class, section, date range or fee head you actually need on screen.",
      },
      {
        label: "Export the view",
        detail:
          "The export carries your filters, so what downloads matches what you were looking at.",
      },
      {
        label: "Open where you work",
        detail:
          "Excel or CSV opens in the tool your accountant or office already uses; reports print as PDF.",
      },
      {
        label: "Bring data back in",
        detail:
          "The same structure works for bulk import when you are loading a new session's data.",
      },
    ],
    ownership: {
      credentials:
        "None. Exports follow the permissions of the person requesting them.",
      data: "Your data, in an open format, whenever you want it  no lock-in argument required.",
      billing: "Included. Exports are not a paid add-on.",
    },
    steps: [
      "Open the report or list you need",
      "Apply the filters that define the data set",
      "Export as Excel, CSV or PDF",
      "Share it with your accountant, trust office or board",
      "Use the same templates when importing at session start",
    ],
    requirements: [
      "A role with permission to view the data being exported",
      "Agreement internally on who may export bulk personal data",
    ],
    modules: [
      { area: "reports-and-analytics", module: "Custom Reports" },
      { area: "reports-and-analytics", module: "Financial Reports" },
      { area: "student-management", module: "Bulk Operations" },
    ],
    keywords:
      "school ERP excel export, school data export csv, fee report export accountant",
    faqs: [
      {
        q: "Do you integrate directly with Tally?",
        a: "Not today. Finance data goes out as Excel or CSV for your accountant to import. We would rather say that than list a logo we have not built against.",
      },
      {
        q: "Is exporting audited?",
        a: "Bulk exports of personal data are treated as sensitive actions and are visible in the activity record, which is exactly what a data-protection review will ask about.",
      },
    ],
  },
  "rest-api": {
    name: "REST API and webhooks",
    icon: "ScrollText",
    accent: "navy",
    category: "Files, data and developer access",
    status: "live",
    providers: [
      "REST /api/v1",
      "Scoped API keys",
      "OpenAPI reference",
      "Payment webhooks",
    ],
    description:
      "Build against a versioned REST API with managed API keys, published reference docs and rate limits.",
    intro:
      "If your school runs an internal system  a website, an attendance device, a reporting warehouse  your developers can work against the KIDUART REST API. Endpoints are versioned under a stable base path, access uses managed API keys with scoped permissions rather than a shared staff login, and every request is rate limited and logged.",
    benefits: [
      "Versioned REST endpoints under a stable /api/v1 base path",
      "Managed API keys with per-scope permissions instead of a staff password",
      "Keys can be rotated or revoked without disturbing staff logins",
      "Published endpoint reference for your developers",
      "Rate limiting and request logging on every call",
    ],
    flow: [
      {
        label: "Access requested",
        detail:
          "You tell us what the integration needs to read or write, and for which part of the school.",
      },
      {
        label: "Scoped key issued",
        detail:
          "A key is issued with only those scopes  a reporting job never gets permission to write records.",
      },
      {
        label: "Developer builds",
        detail:
          "Your developer works against the versioned endpoints using the published reference.",
      },
      {
        label: "Calls logged and limited",
        detail:
          "Requests are rate limited and recorded, so unusual usage is visible and a leaked key can be revoked.",
      },
    ],
    ownership: {
      credentials:
        "Keys are issued to your school and can be rotated or revoked by you at any time.",
      data: "Anything the key's scopes allow, and nothing else. Scope is the boundary, not trust.",
      billing:
        "API access is part of your subscription, subject to fair-use rate limits.",
    },
    steps: [
      "Request API access for your school and describe the use case",
      "We issue a scoped API key for that integration",
      "Your developer reads the endpoint reference",
      "Build and test against non-production data first",
      "Go live, and rotate the key on your own schedule",
    ],
    requirements: [
      "A developer or vendor who will maintain the integration",
      "A clear scope for what the key is allowed to do",
      "An owner on your side for rotating keys when people change",
    ],
    modules: [
      { area: "security-and-authentication", module: "API Access" },
      { area: "reports-and-analytics", module: "Custom Reports" },
    ],
    keywords:
      "school ERP REST API, school management API integration, school data API key",
    faqs: [
      {
        q: "Can an API key be limited to read-only?",
        a: "Yes. Keys are scoped, so a reporting integration does not need permission to write records.",
      },
      {
        q: "What if a key is leaked?",
        a: "Revoke it and issue a new one. Keys are managed objects, which is exactly why they are better than sharing a staff login.",
      },
      {
        q: "Can we subscribe our own endpoint to school events?",
        a: "Not yet. Incoming webhooks from payment and messaging providers are handled today; school-subscribed outbound webhooks are still on the roadmap, and we will not pretend otherwise.",
      },
    ],
  },
  "google-analytics": {
    name: "Portal usage analytics",
    icon: "BarChart3",
    accent: "teal",
    category: "Files, data and developer access",
    status: "planned",
    providers: ["Aggregate adoption reporting"],
    description:
      "Planned: adoption analytics for the parent and student portals, built without profiling children.",
    intro:
      "Some schools want to know whether parents are actually opening the portal. Portal usage analytics is a roadmap item, and it will be built with student privacy in mind  adoption patterns, not individual behaviour profiles. Operational reporting on attendance, fees and academics is already available today in the reports module.",
    benefits: [
      "Planned: portal adoption and usage visibility",
      "Planned: aggregate reporting rather than per-child tracking",
      "Available today: attendance, fee and academic reporting in-product",
    ],
    flow: [
      {
        label: "Today",
        detail:
          "Use the reports and analytics module for operational reporting on real school data.",
      },
      {
        label: "Tell us",
        detail:
          "Describe the adoption question you are trying to answer, so we build the right thing.",
      },
      {
        label: "When it ships",
        detail:
          "Aggregate adoption views by class and role, not individual browsing histories.",
      },
      {
        label: "What we will not do",
        detail:
          "We are not going to sell child behaviour data to an advertising platform.",
      },
    ],
    ownership: {
      credentials:
        "None expected. This is intended as in-product reporting, not a third-party tracking script.",
      data: "Aggregate usage stays inside your school's own instance.",
      billing:
        "Expected to be part of the reporting module rather than a paid add-on.",
    },
    steps: [
      "Use the reports and analytics module for operational reporting today",
      "Tell us what portal adoption question you are trying to answer",
      "We will notify you when portal analytics ships",
    ],
    requirements: ["Clarity on what your school wants to measure"],
    modules: [
      { area: "reports-and-analytics", module: "School Analytics" },
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

/** Names schools ask about that are genuinely not connected  kept public on purpose. */
export const INTEGRATIONS_NOT_SUPPORTED = [
  {
    name: "Cashfree, PayU, Paytm and PhonePe",
    note: "Online fee collection runs on Razorpay or Stripe today. No other gateway is wired in, whatever a feature list elsewhere might suggest.",
  },
  {
    name: "Tally and QuickBooks",
    note: "Finance data leaves as Excel, CSV or PDF for your accountant. There is no direct accounting connector.",
  },
  {
    name: "DigiLocker, Aadhaar eKYC and UDISE",
    note: "Document and identity numbers can be stored on the student record, but there is no live government API connection.",
  },
  {
    name: "Board result portals",
    note: "Report cards are generated inside KIDUART. Results are not pushed to or pulled from board portals.",
  },
  {
    name: "School-subscribed outbound webhooks",
    note: "We handle incoming provider webhooks. Letting your systems subscribe to KIDUART events is still on the roadmap.",
  },
];

export default integrationsData;
