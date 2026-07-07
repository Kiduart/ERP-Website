import type { NextApiRequest, NextApiResponse } from "next";

const PREVIEW_PATHS: Record<string, (slug?: string) => string> = {
  blog: () => "/blog",
  blogPost: (slug) => (slug ? `/blog/${slug}` : "/blog"),
  stories: () => "/stories",
  careers: () => "/careers",
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed." });
  }

  const secret = String(req.query.secret ?? "");
  const type = String(req.query.type ?? "");
  const slug = typeof req.query.slug === "string" ? req.query.slug : undefined;

  if (!process.env.SANITY_PREVIEW_SECRET || secret !== process.env.SANITY_PREVIEW_SECRET) {
    return res.status(401).json({ message: "Invalid preview secret." });
  }

  const resolvePath = PREVIEW_PATHS[type];
  if (!resolvePath) {
    return res.status(400).json({
      message: "Invalid preview type. Use blog, blogPost, stories, or careers.",
    });
  }

  res.setPreviewData({ type, slug: slug ?? null });
  res.writeHead(307, { Location: resolvePath(slug) });
  res.end();
}
