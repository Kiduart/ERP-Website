import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

/** URLs already earning Search Console impressions, in crawl order. */
export const COMMERCIAL_PATHS = [
  { href: "/features", label: "School ERP features" },
  { href: "/blog/multi-campus-school-erp-india", label: "Multi-campus school ERP" },
  { href: "/integrations/whatsapp-business", label: "WhatsApp integration" },
  { href: "/features/hr-and-staff-management/payroll", label: "School payroll" },
  { href: "/demo", label: "Free demo" },
] as const;

export function CommercialPaths({
  current,
  showLabel = true,
}: {
  current?: string;
  showLabel?: boolean;
}) {
  const links = COMMERCIAL_PATHS.filter((item) => item.href !== current);
  if (links.length === 0) return null;

  return (
    <nav aria-label="Related school ERP pages" className="mt-8">
      <p className={`text-xs font-bold uppercase tracking-[0.16em] text-brand-navy/55 ${showLabel ? "" : "sr-only"}`}>
        Related
      </p>
      <ul className={`${showLabel ? "mt-3" : ""} flex flex-wrap gap-2`}>
        {links.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="inline-flex items-center gap-1.5 rounded-full border border-brand-navy/15 bg-white px-4 py-2 text-sm font-semibold text-brand-navy transition-colors hover:border-brand-teal hover:text-brand-teal"
            >
              {item.label}
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
