import { useState } from "react";
import { Link } from "wouter";
import { KiduScene } from "@/components/kidu/KiduScene";

const PARENT_CHIPS = [
  {
    id: "attendance",
    label: "Attendance",
    href: "/features/academic/attendance",
    line: "Attendance for each linked child.",
  },
  {
    id: "fees",
    label: "Fees",
    href: "/features/finance-and-fee-management",
    line: "What is due, and the receipt after it is paid.",
  },
  {
    id: "results",
    label: "Results",
    href: "/features/academic/examination",
    line: "Results, once the school publishes them.",
  },
] as const;

type DayStep = { when: string; what: string };

type RoleGuideProps = {
  slug: string;
  dayInLife?: DayStep[];
  dayIndex?: number;
  challengeIndex?: number;
};

export function RoleGuide({
  slug,
  dayInLife = [],
  dayIndex = 0,
  challengeIndex = 0,
}: RoleGuideProps) {
  const [chip, setChip] = useState<(typeof PARENT_CHIPS)[number]["id"] | null>(null);

  if (slug === "teachers") {
    const step = dayInLife[dayIndex] ?? dayInLife[0];
    if (!step) return null;
    return (
      <KiduScene
        pose="explaining-features"
        size="sm"
        line={`${step.when}. ${step.what}`}
      />
    );
  }

  if (slug === "parents") {
    const active = PARENT_CHIPS.find((item) => item.id === chip);
    return (
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
        <KiduScene
          pose="welcome"
          size="sm"
          line={active?.line ?? "Attendance, fees, and published results. Nothing else invented."}
        />
        <div className="flex flex-wrap gap-2">
          {PARENT_CHIPS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              onMouseEnter={() => setChip(item.id)}
              onFocus={() => setChip(item.id)}
              className={`rounded-full border px-4 py-2 text-sm font-bold transition-colors ${
                chip === item.id
                  ? "border-brand-teal bg-brand-teal text-white"
                  : "border-brand-navy/15 bg-white text-brand-navy hover:border-brand-teal hover:text-brand-teal"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (slug === "accountants") {
    return (
      <KiduScene
        pose="guiding-users"
        size="sm"
        line="I will not read a collection figure that is not written on this page."
      />
    );
  }

  if (slug === "school-administration") {
    return (
      <KiduScene
        pose="confident"
        size="xs"
        frame="bust"
        mirror={challengeIndex % 2 === 1}
      />
    );
  }

  return null;
}
