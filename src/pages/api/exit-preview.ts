import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ message: "Method not allowed." });
  }

  const redirectTo = typeof req.query.redirect === "string" ? req.query.redirect : "/";
  res.clearPreviewData();
  res.writeHead(307, { Location: redirectTo });
  res.end();
}
