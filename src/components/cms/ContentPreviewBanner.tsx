import Link from "next/link";
import type { ContentMeta } from "@/lib/cms/types";

type ContentPreviewBannerProps = {
  contentMeta?: ContentMeta;
};

function formatTimestamp(value: string | null): string {
  if (!value) return "Unknown";
  return new Date(value).toLocaleString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
}

export function ContentPreviewBanner({ contentMeta }: ContentPreviewBannerProps) {
  if (!contentMeta?.preview) return null;

  return (
    <div className="sticky top-0 z-[120] border-b border-amber-300 bg-amber-50 px-4 py-3 text-sm text-amber-950 shadow-md">
      <div className="page-shell flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="font-bold">Preview mode — draft CMS content</p>
          <p className="text-amber-900/80">
            Source: {contentMeta.source === "sanity" ? "Sanity CMS" : "Local fallback"} · Last CMS update:{" "}
            {formatTimestamp(contentMeta.updatedAt)} · Fetched: {formatTimestamp(contentMeta.fetchedAt)}
          </p>
        </div>
        <Link
          href="/api/exit-preview"
          className="inline-flex shrink-0 items-center justify-center rounded-full bg-amber-900 px-4 py-2 text-xs font-bold uppercase tracking-wide text-amber-50 transition-colors hover:bg-amber-950"
        >
          Exit preview
        </Link>
      </div>
    </div>
  );
}
