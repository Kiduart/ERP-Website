/**
 * The onboarding sequence, written from the screens that actually exist:
 * session setup, import templates with validation, fee structure templates,
 * role permissions, message templates and the parallel run before go-live.
 *
 * No timelines or averages are claimed here  we have no verified school
 * rollouts to quote yet, so the plan describes work, not weeks.
 */

export type RolloutStage = {
  id: string;
  step: string;
  title: string;
  goal: string;
  icon: string;
  /** What the school hands over or decides */
  yours: string[];
  /** What KIDUART configures inside the product */
  ours: string[];
  /** The specific product capability that makes this step safe */
  guardrail: string;
  modules: { label: string; href: string }[];
};

export const ROLLOUT_STAGES: RolloutStage[] = [
  {
    id: "blueprint",
    step: "01",
    title: "Your school structure, rebuilt once",
    goal: "The session everything else hangs off",
    icon: "LayoutGrid",
    yours: [
      "Last session's class and section list",
      "Subject list per class, and the academic calendar you follow",
    ],
    ours: [
      "Academic session created and activated, with the old one archived rather than deleted",
      "Classes, sections and subjects set up, then subject teachers allocated to a whole class in one action",
    ],
    guardrail:
      "Sessions can be archived and restored, so a wrong year never becomes a permanent mistake.",
    modules: [
      { label: "Multi-Campus HQ", href: "/features/organization-management" },
      { label: "Academics", href: "/features/academic" },
    ],
  },
  {
    id: "people",
    step: "02",
    title: "Students, parents and staff imported",
    goal: "Your records moved without retyping",
    icon: "Users",
    yours: [
      "Existing student, staff and teacher records in whatever sheet you keep them",
      "A decision on which parent is the primary contact",
    ],
    ours: [
      "Records mapped onto the import template, validated first and only then submitted",
      "Photos uploaded in bulk, siblings linked to a single parent login automatically",
    ],
    guardrail:
      "Bulk import runs a validation pass before anything is written, so bad rows come back as a report instead of dirty data.",
    modules: [
      { label: "Student Records", href: "/features/student-management" },
      { label: "Parents", href: "/features/parent-management" },
      { label: "HR & Staff", href: "/features/hr-and-staff-management" },
    ],
  },
  {
    id: "money",
    step: "03",
    title: "Fee structure set up the way you bill",
    goal: "Ready to collect, not just to record",
    icon: "Receipt",
    yours: [
      "This session's fee circular, including instalment dates",
      "Your concession rules and which students they apply to",
    ],
    ours: [
      "Fee heads and default categories created, then a structure template cloned across classes instead of built one by one",
      "Concessions assigned, structures published, and your own payment gateway account connected",
    ],
    guardrail:
      "Structures are published deliberately and can be archived  nothing starts billing because someone opened a screen.",
    modules: [
      { label: "Fees & Finance", href: "/features/finance-and-fee-management" },
      { label: "Integrations", href: "/integrations" },
    ],
  },
  {
    id: "access",
    step: "04",
    title: "Roles, permissions and message channels",
    goal: "Everyone sees their own job, nothing more",
    icon: "KeyRound",
    yours: [
      "Who is allowed to see fees, marks and staff salary data",
      "Your SMS sender ID, WhatsApp Business number and email sender",
    ],
    ours: [
      "Role-based accounts created for each panel, with permissions tuned per role and resettable in bulk",
      "Multi-factor login and location rules switched on for admin accounts, message templates loaded and test-sent",
    ],
    guardrail:
      "Permissions are per role and per school, and every admin action lands in an audit trail that cannot be edited.",
    modules: [
      {
        label: "Security & Access",
        href: "/features/security-and-authentication",
      },
      { label: "Communication", href: "/features/communication" },
    ],
  },
  {
    id: "go-live",
    step: "05",
    title: "A parallel run, then the switch",
    goal: "Go live on a normal school day",
    icon: "Rocket",
    yours: [
      "One real week of attendance and one real fee cycle run inside KIDUART alongside your current method",
      "Sign-off from the office, finance and academic leads",
    ],
    ours: [
      "Each role trained on its own panel, so training is one screen per person and not a full product tour",
      "Support desk and ticketing handed over, with your data and reports checked against the parallel run",
    ],
    guardrail:
      "You compare both sets of numbers before switching. If they do not match, the switch waits.",
    modules: [
      { label: "Dashboards", href: "/features/dashboard-and-insights" },
      { label: "Support Desk", href: "/features/support" },
    ],
  },
];
