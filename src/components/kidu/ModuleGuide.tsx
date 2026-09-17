import { KiduScene } from "@/components/kidu/KiduScene";
import type { KiduPose } from "@/components/kidu/poses";

const GUIDING = new Set([
  "admission",
  "student-management",
  "parent-management",
  "finance-and-fee-management",
  "hr-and-staff-management",
  "transport-management",
  "hostel-management",
]);

const INSIGHTS = new Set(["reports-and-analytics", "dashboard-and-insights"]);

export function ModuleGuide({ area, name }: { area: string; name: string }) {
  const pose: KiduPose = INSIGHTS.has(area)
    ? "sharing-insights"
    : GUIDING.has(area)
      ? "guiding-users"
      : "explaining-features";

  return <KiduScene pose={pose} size="sm" line={name} />;
}
