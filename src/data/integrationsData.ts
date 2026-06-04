import type { LucideIcon } from "lucide-react";
import {
  BarChart2,
  BookOpen,
  CreditCard,
  DollarSign,
  LayoutDashboard,
  Monitor,
  Video,
} from "lucide-react";

export type IntegrationFaq = { q: string; a: string };

export type IntegrationEntry = {
  name: string;
  icon: LucideIcon;
  color: string;
  bg: string;
  category: string;
  description: string;
  benefits: string[];
  steps: string[];
  requirements: string[];
  faqs: IntegrationFaq[];
};

const integrationsData: Record<string, IntegrationEntry> = {
  "google-classroom": { name: "Google Classroom", icon: Monitor, color: "text-[#4285F4]", bg: "bg-[#4285F4]/10", category: "Learning Systems", description: "Sync classes, assignments, and grades between KIDUART and Google Classroom automatically.", benefits: ["Auto-sync student rosters", "Push assignments from KIDUART to Classroom", "Import grades back to KIDUART gradebook", "Single sign-on with Google accounts"], steps: ["Connect your Google Workspace account in Settings > Integrations", "Authorize KIDUART to access Classroom data", "Select which classes to sync", "Configure sync frequency (real-time or scheduled)", "Test the connection and verify data flow"], requirements: ["Google Workspace for Education account", "KIDUART Professional plan or higher", "Admin privileges in both platforms"], faqs: [{ q: "How often does sync happen?", a: "Real-time for grade changes, every 6 hours for roster updates." }, { q: "Can students use Google login?", a: "Yes, SSO with Google accounts is supported." }] },
  "zoom": { name: "Zoom", icon: Video, color: "text-[#2D8CFF]", bg: "bg-[#2D8CFF]/10", category: "Communication Tools", description: "Launch Zoom classes directly from KIDUART timetable and automatically record attendance.", benefits: ["One-click class launch from timetable", "Auto attendance tracking for virtual classes", "Meeting recordings stored in KIDUART", "Parent notifications for online class schedules"], steps: ["Go to Settings > Integrations > Zoom", "Authorize with your Zoom account", "Enable auto-attendance for online classes", "Configure notification settings", "Test by scheduling a virtual class"], requirements: ["Zoom Pro or higher account", "KIDUART Professional plan"], faqs: [{ q: "Does it work for parent meetings?", a: "Yes, you can schedule parent-teacher meetings via Zoom." }, { q: "Are recordings stored?", a: "Yes, recordings are linked to class records in KIDUART." }] },
  "stripe": { name: "Stripe", icon: CreditCard, color: "text-[#6772E5]", bg: "bg-[#6772E5]/10", category: "Payment Systems", description: "Accept online fee payments via Stripe with automatic reconciliation in KIDUART's fee module.", benefits: ["Accept cards, bank transfers, and local payment methods", "Automatic payment reconciliation", "Instant parent payment confirmations", "Automated receipt generation"], steps: ["Navigate to Settings > Payments > Stripe", "Enter your Stripe API keys", "Configure accepted payment methods", "Set up webhook for real-time payment updates", "Test with a Stripe test payment"], requirements: ["Stripe account (free to create)", "KIDUART any paid plan"], faqs: [{ q: "Which currencies are supported?", a: "All currencies supported by Stripe, 135+ currencies." }, { q: "Are there transaction fees?", a: "Standard Stripe fees apply (2.9% + 30¢ per transaction)." }] },
  "moodle": { name: "Moodle", icon: BookOpen, color: "text-[#F98012]", bg: "bg-[#F98012]/10", category: "Learning Systems", description: "Sync student enrollment, grades, and course data between KIDUART and your Moodle LMS.", benefits: ["Auto student enrollment in Moodle courses", "Grade import/export between systems", "Single student profile across both platforms", "Attendance data shared from KIDUART"], steps: ["Install KIDUART Moodle Plugin from your Moodle admin panel", "Generate API token in KIDUART Settings", "Configure Moodle URL in KIDUART", "Map course categories to KIDUART subjects", "Run initial sync"], requirements: ["Moodle 3.9 or higher", "KIDUART Professional plan", "Moodle admin access"], faqs: [{ q: "Does it support Moodle Cloud?", a: "Yes, both Moodle Self-Hosted and Moodle Cloud are supported." }] },
  "microsoft-teams": { name: "Microsoft Teams", icon: Monitor, color: "text-[#6264A7]", bg: "bg-[#6264A7]/10", category: "Communication Tools", description: "Connect KIDUART with Microsoft Teams for Education to enable virtual classes and communication.", benefits: ["Launch Teams meetings from KIDUART timetable", "Share announcements to Teams channels", "Sync calendar events", "Track virtual attendance"], steps: ["Sign in with Microsoft 365 admin account", "Grant KIDUART Teams permissions", "Configure class team creation settings", "Enable calendar sync", "Test virtual class creation"], requirements: ["Microsoft 365 Education subscription", "KIDUART Professional plan"], faqs: [{ q: "Can teachers manage Teams from KIDUART?", a: "Yes, class teams are created automatically when subjects are set up in KIDUART." }] },
  "paypal": { name: "PayPal", icon: DollarSign, color: "text-[#003087]", bg: "bg-[#003087]/10", category: "Payment Systems", description: "Enable parents to pay school fees via PayPal directly from the parent portal.", benefits: ["Familiar PayPal checkout for parents", "PayPal Credit and Pay Later options", "Automatic payment verification", "Multi-currency support"], steps: ["Go to Settings > Payments > PayPal", "Connect your PayPal Business account", "Enable PayPal in parent portal payment options", "Test a payment in sandbox mode", "Go live"], requirements: ["PayPal Business account", "KIDUART any paid plan"], faqs: [{ q: "Can parents use PayPal wallet balance?", a: "Yes, any PayPal payment method is accepted." }] },
  "google-analytics": { name: "Google Analytics", icon: BarChart2, color: "text-[#F9AB00]", bg: "bg-[#F9AB00]/10", category: "Analytics Platforms", description: "Track website and portal usage with Google Analytics to see which pages and flows families use most.", benefits: ["Track parent portal usage patterns", "Monitor feature adoption rates", "Understand user journeys", "Identify drop-off points in enrollment"], steps: ["Go to Settings > Analytics > Google Analytics", "Enter your GA4 Measurement ID (set NEXT_PUBLIC_GA4_ID in your deployment environment)", "Configure tracking events", "Verify tracking in GA4 real-time view"], requirements: ["Google Analytics 4 account (free)", "KIDUART any plan"], faqs: [{ q: "Is student data shared with Google?", a: "No, only anonymous usage metrics are tracked. No personally identifiable information is sent." }] },
  "canvas": { name: "Canvas LMS", icon: LayoutDashboard, color: "text-[#E66000]", bg: "bg-[#E66000]/10", category: "Learning Systems", description: "Sync KIDUART student records with Canvas LMS so rosters, grades, and calendars stay aligned.", benefits: ["Auto-provision students in Canvas", "Grade passback from Canvas to KIDUART", "Shared calendar and assignments", "SSO between platforms"], steps: ["Generate Canvas API token in your Canvas admin", "Enter token in KIDUART Settings > LMS > Canvas", "Configure user provisioning rules", "Map KIDUART grades to Canvas gradebook", "Test student login"], requirements: ["Canvas LMS instance", "Canvas admin access", "KIDUART Professional plan"], faqs: [{ q: "Does it support Canvas Free for Teachers?", a: "Full integration requires Canvas paid plans. Basic grade import works with free accounts." }] }
}
;
export default integrationsData;

