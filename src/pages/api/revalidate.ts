import type { NextApiRequest, NextApiResponse } from "next";

type RevalidatePayload = {
  _type?: string;
  slug?: string | { current?: string };
};

const PATHS_BY_TYPE: Record<string, (slug?: string) => string[]> = {
  blogPost: (slug) => (slug ? ["/blog", `/blog/${slug}`] : ["/blog"]),
  customerStory: () => ["/stories"],
  careersPage: () => ["/careers"],
};

function extractSlug(slug: RevalidatePayload["slug"]): string | undefined {
  if (!slug) return undefined;
  if (typeof slug === "string") return slug;
  return slug.current;
}

function getPathsFromPayload(body: RevalidatePayload): string[] {
  const docType = body._type;
  if (!docType) return [];

  const slug = extractSlug(body.slug);
  const resolver = PATHS_BY_TYPE[docType];
  return resolver ? resolver(slug) : [];
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ revalidated: false, message: "Method not allowed." });
  }

  const headerSecret = req.headers["x-sanity-webhook-secret"];
  const querySecret = req.query.secret;
  const providedSecret = Array.isArray(headerSecret) ? headerSecret[0] : headerSecret ?? querySecret;
  const expectedSecret = process.env.SANITY_REVALIDATE_SECRET;

  if (!expectedSecret || providedSecret !== expectedSecret) {
    return res.status(401).json({ revalidated: false, message: "Invalid revalidation secret." });
  }

  try {
    const body = (req.body ?? {}) as RevalidatePayload;
    const paths = getPathsFromPayload(body);

    if (!paths.length) {
      return res.status(400).json({
        revalidated: false,
        message: "No revalidation paths resolved from webhook payload.",
      });
    }

    await Promise.all(paths.map((path) => res.revalidate(path)));

    return res.status(200).json({
      revalidated: true,
      paths,
      type: body._type ?? null,
    });
  } catch (error) {
    console.error("Sanity revalidation failed:", error);
    return res.status(500).json({ revalidated: false, message: "Failed to revalidate pages." });
  }
}
