export type CmsContentSource = "sanity" | "local";

export type ContentMeta = {
  source: CmsContentSource;
  preview: boolean;
  updatedAt: string | null;
  fetchedAt: string;
};

export function buildContentMeta(options: {
  source: CmsContentSource;
  preview: boolean;
  updatedAt?: string | null;
}): ContentMeta {
  return {
    source: options.source,
    preview: options.preview,
    updatedAt: options.updatedAt ?? null,
    fetchedAt: new Date().toISOString(),
  };
}
