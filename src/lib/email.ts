import nodemailer from "nodemailer";

const SUPPORT_EMAIL = "support@kiduart.com";
const PLACEHOLDER_ENV_VALUES = new Set(["support@yourdomain.com", "your_app_password"]);

type ContactEmailPayload = {
  name: string;
  email: string;
  code: string;
  phone: string;
  help: string;
  message: string;
};

type DemoEmailPayload = {
  firstName: string;
  lastName: string;
  email: string;
  code: string;
  phone: string;
  school: string;
  role: string;
  students: string;
  message?: string;
};

type NewsletterEmailPayload = {
  email: string;
};

type EmailConfig = {
  user: string;
  pass: string;
};

function getEnvValue(key: "EMAIL_USER" | "EMAIL_PASS") {
  const value = process.env[key];

  if (!value || PLACEHOLDER_ENV_VALUES.has(value)) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

function getEmailConfig(): EmailConfig | null {
  try {
    return {
      user: getEnvValue("EMAIL_USER"),
      pass: getEnvValue("EMAIL_PASS"),
    };
  } catch (error) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("Email service not configured. Skipping outgoing email in non-production mode.", error);
      return null;
    }

    throw error;
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function renderRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding:12px 16px;font-weight:700;color:#003049;border-bottom:1px solid #e5e7eb;vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:12px 16px;color:#1f2937;border-bottom:1px solid #e5e7eb;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function createTransporter(config: EmailConfig) {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: config.user,
      pass: config.pass,
    },
  });
}

function getFromAddress(config: EmailConfig) {
  return `Website Bot <${config.user}>`;
}

function getEmailShell(title: string, intro: string, rows: string, footer?: string) {
  return `
    <div style="margin:0;padding:32px;background:#f7f8fb;font-family:Arial,sans-serif;color:#1f2937;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#003049,#0c716b);color:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.8;">KIDUART Website</p>
          <h1 style="margin:0;font-size:28px;line-height:1.2;">${escapeHtml(title)}</h1>
        </div>
        <div style="padding:28px 32px;">
          <p style="margin:0 0 20px;font-size:15px;line-height:1.7;color:#4b5563;">${escapeHtml(intro)}</p>
          <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:14px;overflow:hidden;">
            <tbody>${rows}</tbody>
          </table>
          ${footer ? `<p style="margin:20px 0 0;font-size:14px;line-height:1.7;color:#6b7280;">${escapeHtml(footer)}</p>` : ""}
        </div>
      </div>
    </div>
  `;
}

function getAutoReplyHtml(name: string, context: string) {
  return `
    <div style="margin:0;padding:32px;background:#f7f8fb;font-family:Arial,sans-serif;color:#1f2937;">
      <div style="max-width:640px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;">
        <div style="padding:28px 32px;background:linear-gradient(135deg,#003049,#0c716b);color:#ffffff;">
          <p style="margin:0 0 8px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.8;">KIDUART</p>
          <h1 style="margin:0;font-size:26px;line-height:1.2;">Thanks for reaching out</h1>
        </div>
        <div style="padding:28px 32px;">
          <p style="margin:0 0 14px;font-size:15px;line-height:1.7;">Hi ${escapeHtml(name)},</p>
          <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#4b5563;">
            We received your ${escapeHtml(context)} and our team will review it shortly.
          </p>
          <p style="margin:0 0 14px;font-size:15px;line-height:1.7;color:#4b5563;">
            If your request is urgent, you can also reply directly to this email and our support team at ${escapeHtml(SUPPORT_EMAIL)} will assist you.
          </p>
          <p style="margin:0;font-size:15px;line-height:1.7;">Regards,<br />KIDUART Team</p>
        </div>
      </div>
    </div>
  `;
}

export async function sendContactInquiryEmail(payload: ContactEmailPayload) {
  const config = getEmailConfig();

  if (!config) {
    console.info("Contact inquiry captured locally:", payload);
    return;
  }

  const transporter = createTransporter(config);
  const rows = [
    renderRow("Name", payload.name),
    renderRow("Email", payload.email),
    renderRow("Phone", `${payload.code} ${payload.phone}`),
    renderRow("Inquiry", payload.help),
    renderRow("Message", payload.message),
  ].join("");

  await transporter.sendMail({
    from: getFromAddress(config),
    to: SUPPORT_EMAIL,
    replyTo: payload.email,
    subject: `New Contact Inquiry - ${payload.name}`,
    html: getEmailShell(
      "New Contact Inquiry",
      "A new contact message has been submitted from the KIDUART website.",
      rows
    ),
  });

  await transporter.sendMail({
    from: getFromAddress(config),
    to: payload.email,
    subject: "We received your message | KIDUART",
    html: getAutoReplyHtml(payload.name, "contact inquiry"),
  });
}

export async function sendDemoRequestEmail(payload: DemoEmailPayload) {
  const config = getEmailConfig();

  if (!config) {
    console.info("Demo request captured locally:", payload);
    return;
  }

  const transporter = createTransporter(config);
  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  const rows = [
    renderRow("Name", fullName),
    renderRow("Email", payload.email),
    renderRow("Phone", `${payload.code} ${payload.phone}`),
    renderRow("School Name", payload.school),
    renderRow("Role", payload.role),
    renderRow("Students", payload.students),
    renderRow("Message", payload.message?.trim() || "Not provided"),
  ].join("");

  await transporter.sendMail({
    from: getFromAddress(config),
    to: SUPPORT_EMAIL,
    replyTo: payload.email,
    subject: `New Demo Request - ${payload.school}`,
    priority: "high",
    headers: {
      "X-Priority": "1",
      "X-MSMail-Priority": "High",
      Importance: "High",
    },
    html: getEmailShell(
      "New Demo Request",
      "HIGH PRIORITY: A new demo request has been submitted and should be reviewed promptly by the KIDUART team.",
      rows,
      "This lead requested a platform walkthrough from the website demo page."
    ),
  });

  await transporter.sendMail({
    from: getFromAddress(config),
    to: payload.email,
    subject: "Your demo request is in | KIDUART",
    html: getAutoReplyHtml(fullName, "demo request"),
  });
}

export async function sendNewsletterSubscriptionEmail(payload: NewsletterEmailPayload) {
  const config = getEmailConfig();

  if (!config) {
    console.info("Newsletter subscription captured locally:", payload);
    return;
  }

  const transporter = createTransporter(config);
  const rows = [renderRow("Email", payload.email)].join("");

  await transporter.sendMail({
    from: getFromAddress(config),
    to: SUPPORT_EMAIL,
    replyTo: payload.email,
    subject: `New Newsletter Subscription - ${payload.email}`,
    html: getEmailShell(
      "New Newsletter Subscription",
      "A new newsletter subscription has been submitted from the KIDUART website footer.",
      rows
    ),
  });

  await transporter.sendMail({
    from: getFromAddress(config),
    to: payload.email,
    subject: "You're subscribed | KIDUART",
    html: getAutoReplyHtml(payload.email, "newsletter subscription"),
  });
}
