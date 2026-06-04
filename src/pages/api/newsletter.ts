import type { NextApiRequest, NextApiResponse } from "next";
import { sendNewsletterSubscriptionEmail } from "@/lib/email";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ success: false, error: "Method not allowed." });
  }

  try {
    const email = String(req.body?.email ?? "").trim();

    if (!email) {
      return res.status(400).json({ success: false, error: "Email is required." });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ success: false, error: "Please provide a valid email address." });
    }

    await sendNewsletterSubscriptionEmail({ email });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Newsletter subscription failed:", error);
    if (error instanceof Error && error.message.startsWith("Missing required environment variable:")) {
      return res.status(500).json({
        success: false,
        error: "Email service is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and MAIL_TO in your environment.",
      });
    }

    return res.status(500).json({ success: false, error: "Failed to subscribe right now." });
  }
}
