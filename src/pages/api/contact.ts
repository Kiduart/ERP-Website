import type { NextApiRequest, NextApiResponse } from "next";
import { sendContactInquiryEmail } from "@/lib/email";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  try {
    const payload = {
      name: String(req.body?.name ?? "").trim(),
      email: String(req.body?.email ?? "").trim(),
      code: String(req.body?.code ?? "").trim(),
      phone: String(req.body?.phone ?? "").trim(),
      help: String(req.body?.help ?? "").trim(),
      message: String(req.body?.message ?? "").trim(),
    };

    if (!payload.name || !payload.email || !payload.code || !payload.phone || !payload.help || !payload.message) {
      return res.status(400).json({ success: false, error: "All contact fields are required." });
    }

    if (!isValidEmail(payload.email)) {
      return res.status(400).json({ success: false, error: "Please provide a valid email address." });
    }

    await sendContactInquiryEmail(payload);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Contact form email failed:", error);

    if (error instanceof Error && error.message.startsWith("Missing required environment variable:")) {
      return res.status(500).json({
        success: false,
        error: "Email service is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and MAIL_TO in your environment.",
      });
    }

    return res.status(500).json({ success: false, error: "Failed to send contact inquiry." });
  }
}
