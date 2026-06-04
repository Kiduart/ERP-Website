import type { NextApiRequest, NextApiResponse } from "next";
import { sendDemoRequestEmail } from "@/lib/email";

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
      firstName: String(req.body?.firstName ?? "").trim(),
      lastName: String(req.body?.lastName ?? "").trim(),
      email: String(req.body?.email ?? "").trim(),
      code: String(req.body?.code ?? "").trim(),
      phone: String(req.body?.phone ?? "").trim(),
      school: String(req.body?.school ?? "").trim(),
      role: String(req.body?.role ?? "").trim(),
      students: String(req.body?.students ?? "").trim(),
      message: String(req.body?.message ?? "").trim(),
    };

    if (!payload.firstName || !payload.lastName || !payload.email || !payload.code || !payload.phone || !payload.school || !payload.role || !payload.students ) {
      return res.status(400).json({ success: false, error: "All demo request fields except message are required." });
    }

    if (!isValidEmail(payload.email)) {
      return res.status(400).json({ success: false, error: "Please provide a valid email address." });
    }

    await sendDemoRequestEmail(payload);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Demo request email failed:", error);

    if (error instanceof Error && error.message.startsWith("Missing required environment variable:")) {
      return res.status(500).json({
        success: false,
        error: "Email service is not configured. Set SMTP_HOST, SMTP_USER, SMTP_PASS, and MAIL_TO in your environment.",
      });
    }

    return res.status(500).json({ success: false, error: "Failed to send demo request." });
  }
}
