import { createClient, type SanityClient } from "@sanity/client";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "2025-01-01";
const readToken = process.env.SANITY_READ_TOKEN;

export const isSanityConfigured = Boolean(projectId && dataset);

function createSanityClient(preview = false): SanityClient {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: !preview,
    token: readToken,
    perspective: preview ? "previewDrafts" : "published",
  });
}

export const sanityClient = isSanityConfigured ? createSanityClient(false) : null;

export function getSanityClient(preview = false): SanityClient | null {
  if (!isSanityConfigured) return null;
  return preview ? createSanityClient(true) : sanityClient;
}
