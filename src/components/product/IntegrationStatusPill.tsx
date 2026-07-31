import { cn } from "@/lib/utils";

export type IntegrationStatusValue = "live" | "guided" | "planned";

export const STATUS_STYLE: Record<
  IntegrationStatusValue,
  { dot: string; chip: string; label: string; accentText: string }
> = {
  live: {
    dot: "bg-brand-teal",
    chip: "border-brand-teal/35 bg-white text-brand-teal",
    label: "Live",
    accentText: "text-brand-teal",
  },
  guided: {
    dot: "bg-brand-orange",
    chip: "border-brand-orange/40 bg-white text-brand-orange-ink",
    label: "Guided setup",
    accentText: "text-brand-orange-ink",
  },
  planned: {
    dot: "bg-brand-navy/45",
    chip: "border-brand-navy/20 bg-white text-brand-navy/[0.78]",
    label: "Roadmap",
    accentText: "text-brand-navy/[0.78]",
  },
};

export function IntegrationStatusPill({
  status,
  className,
}: {
  status: IntegrationStatusValue;
  className?: string;
}) {
  const style = STATUS_STYLE[status];
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em]",
        style.chip,
        className,
      )}
    >
      <span aria-hidden="true" className={cn("h-1.5 w-1.5 rounded-full", style.dot)} />
      {style.label}
    </span>
  );
}
