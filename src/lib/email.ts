import { transporter } from "@/lib/mailer";
import { CONTACT_EMAIL } from "@/lib/contact";

const SITE_ORIGIN = "https://www.kiduart.com";
const LOGO_URL = `${SITE_ORIGIN}/logo.png`;
const SUPPORT_EMAIL = CONTACT_EMAIL;

const PLACEHOLDER_ENV_VALUES = new Set(["support@yourdomain.com", "your_app_password", ""]);

const BRAND = {
  navy: "#003049",
  teal: "#0c716b",
  yellow: "#fcbf49",
  beige: "#faf8f0",
  muted: "#4b5563",
  border: "#e5e7eb",
};

const PRODUCT_LINKS = [
  { label: "Features", href: `${SITE_ORIGIN}/features` },
  { label: "Solutions", href: `${SITE_ORIGIN}/solutions` },
  { label: "Platform", href: `${SITE_ORIGIN}/platform` },
  { label: "Pricing", href: `${SITE_ORIGIN}/pricing` },
  { label: "Security", href: `${SITE_ORIGIN}/security` },
] as const;

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
  mailTo: string;
};

type AutoReplyOptions = {
  recipientName: string;
  headline: string;
  requestLabel: string;
  introParagraphs: string[];
  nextSteps: string[];
  signature?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

function getEnvValue(key: "SMTP_USER" | "SMTP_PASS" | "SMTP_HOST" | "MAIL_TO") {
  const value = process.env[key]?.trim();

  if (!value || PLACEHOLDER_ENV_VALUES.has(value)) {
    throw new Error(`Missing required environment variable: ${key}`);
  }

  return value;
}

function getEmailConfig(): EmailConfig | null {
  try {
    getEnvValue("SMTP_HOST");
    return {
      user: getEnvValue("SMTP_USER"),
      pass: getEnvValue("SMTP_PASS"),
      mailTo: getEnvValue("MAIL_TO"),
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

function wrapEmailDocument(innerHtml: string) {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>KIDUART</title>
</head>
<body style="margin:0;padding:0;background-color:${BRAND.beige};font-family:Arial,Helvetica,sans-serif;color:#1f2937;-webkit-text-size-adjust:100%;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background-color:${BRAND.beige};">
    <tr>
      <td align="center" style="padding:28px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px;width:100%;">
          ${innerHtml}
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function renderLogoHeader(title: string, subtitle?: string) {
  return `
    <tr>
      <td style="padding:0;border-radius:20px 20px 0 0;overflow:hidden;background:linear-gradient(180deg,#faf8f0 0%,#ffffff 100%);border:1px solid ${BRAND.border};border-bottom:1px solid ${BRAND.border};">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>
            <td style="height:4px;background:linear-gradient(90deg,${BRAND.teal} 0%,${BRAND.yellow} 55%,${BRAND.navy} 100%);font-size:0;line-height:0;">&nbsp;</td>
          </tr>
          <tr>
            <td style="padding:36px 32px 28px;">
              <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
                <tr>
                  <td valign="middle" style="padding-bottom:22px;">
                    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
                      <tr>
                        <td style="padding:16px 20px;background:#ffffff;border-radius:16px;border:1px solid ${BRAND.border};box-shadow:0 10px 28px rgba(0,48,73,0.08);">
                          <img src="${LOGO_URL}" alt="KIDUART" width="148" height="59" style="display:block;max-width:148px;width:148px;height:auto;border:0;" />
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td>
                    <p style="margin:0 0 10px;font-size:11px;letter-spacing:0.2em;text-transform:uppercase;color:${BRAND.teal};font-weight:700;">KIDUART · School ERP</p>
                    <h1 style="margin:0;font-size:26px;line-height:1.3;font-weight:700;color:${BRAND.navy};">${escapeHtml(title)}</h1>
                    ${subtitle ? `<p style="margin:12px 0 0;font-size:14px;line-height:1.65;color:${BRAND.muted};">${escapeHtml(subtitle)}</p>` : ""}
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function renderPriorityBanner(text: string) {
  return `
    <tr>
      <td style="padding:0 32px 0;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin-top:-12px;">
          <tr>
            <td style="padding:14px 18px;background:${BRAND.yellow};border-radius:12px;border:1px solid rgba(0,48,73,0.12);">
              <p style="margin:0;font-size:13px;line-height:1.5;font-weight:700;color:${BRAND.navy};text-transform:uppercase;letter-spacing:0.06em;">${escapeHtml(text)}</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function renderBrandedFooter() {
  const linkCells = PRODUCT_LINKS.map(
    (link) =>
      `<a href="${link.href}" style="color:${BRAND.teal};text-decoration:none;font-size:13px;font-weight:600;">${escapeHtml(link.label)}</a>`
  ).join(
    `<span style="color:#cbd5e1;padding:0 6px;">|</span>`
  );

  return `
    <tr>
      <td style="padding:0 32px 32px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-top:1px solid ${BRAND.border};">
          <tr>
            <td style="padding-top:22px;">
              <p style="margin:0 0 10px;font-size:13px;line-height:1.6;color:${BRAND.muted};">
                <strong style="color:${BRAND.navy};">KIDUART</strong> — School ERP for Indian schools
              </p>
              <p style="margin:0 0 12px;font-size:13px;line-height:1.6;">
                <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND.teal};text-decoration:none;">${escapeHtml(SUPPORT_EMAIL)}</a>
                <span style="color:#cbd5e1;"> · </span>
                <a href="${SITE_ORIGIN}" style="color:${BRAND.teal};text-decoration:none;">www.kiduart.com</a>
              </p>
              <p style="margin:0 0 14px;font-size:12px;line-height:1.7;color:#6b7280;">
                ${linkCells}
              </p>
              <p style="margin:0;font-size:11px;line-height:1.6;color:#9ca3af;">
                This message was sent from the KIDUART website. Please do not share sensitive student data by email unless requested by our team.
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  `;
}

function renderRow(label: string, value: string) {
  return `
    <tr>
      <td width="34%" style="padding:14px 16px;font-weight:700;font-size:13px;color:${BRAND.navy};background:#f9fafb;border-bottom:1px solid ${BRAND.border};vertical-align:top;">${escapeHtml(label)}</td>
      <td style="padding:14px 16px;font-size:14px;line-height:1.55;color:#1f2937;border-bottom:1px solid ${BRAND.border};vertical-align:top;">${escapeHtml(value)}</td>
    </tr>
  `;
}

function renderCtaButton(label: string, href: string, primary = true) {
  const bg = primary ? BRAND.navy : "#ffffff";
  const color = primary ? "#ffffff" : BRAND.navy;
  const border = primary ? "none" : `2px solid ${BRAND.navy}`;

  return `
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin:0 12px 12px 0;display:inline-table;">
      <tr>
        <td align="center" style="border-radius:999px;background:${bg};border:${border};">
          <a href="${href}" style="display:inline-block;padding:12px 22px;font-size:14px;font-weight:700;color:${color};text-decoration:none;border-radius:999px;">${escapeHtml(label)}</a>
        </td>
      </tr>
    </table>
  `;
}

function getEmailShell(options: {
  title: string;
  intro: string;
  rows: string;
  footerNote?: string;
  priorityBanner?: string;
  headerSubtitle?: string;
}) {
  const body = `
    ${renderLogoHeader(options.title, options.headerSubtitle)}
    ${options.priorityBanner ? renderPriorityBanner(options.priorityBanner) : ""}
    <tr>
      <td style="padding:28px 32px 8px;background:#ffffff;">
        <p style="margin:0 0 20px;font-size:15px;line-height:1.75;color:${BRAND.muted};">${escapeHtml(options.intro)}</p>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border:1px solid ${BRAND.border};border-radius:14px;overflow:hidden;background:#ffffff;">
          <tbody>${options.rows}</tbody>
        </table>
        ${options.footerNote ? `<p style="margin:18px 0 0;font-size:14px;line-height:1.65;color:#6b7280;">${escapeHtml(options.footerNote)}</p>` : ""}
      </td>
    </tr>
    ${renderBrandedFooter()}
  `;

  return wrapEmailDocument(body);
}

function getAutoReplyHtml(options: AutoReplyOptions) {
  const paragraphs = options.introParagraphs
    .map(
      (p) =>
        `<p style="margin:0 0 14px;font-size:15px;line-height:1.75;color:${BRAND.muted};">${escapeHtml(p)}</p>`
    )
    .join("");

  const steps = options.nextSteps.length
    ? `<table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="margin:18px 0 22px;background:#f9fafb;border:1px solid ${BRAND.border};border-radius:14px;">
        <tr>
          <td style="padding:18px 20px;">
            <p style="margin:0 0 10px;font-size:12px;font-weight:700;letter-spacing:0.14em;text-transform:uppercase;color:${BRAND.teal};">What happens next</p>
            <ul style="margin:0;padding-left:18px;color:${BRAND.muted};font-size:14px;line-height:1.7;">
              ${options.nextSteps.map((step) => `<li style="margin-bottom:8px;">${escapeHtml(step)}</li>`).join("")}
            </ul>
          </td>
        </tr>
      </table>`
    : "";

  const ctas =
    options.primaryCta || options.secondaryCta
      ? `<tr><td style="padding:0 32px 8px;background:#ffffff;">
          ${options.primaryCta ? renderCtaButton(options.primaryCta.label, options.primaryCta.href, true) : ""}
          ${options.secondaryCta ? renderCtaButton(options.secondaryCta.label, options.secondaryCta.href, false) : ""}
        </td></tr>`
      : "";

  const exploreLinks = PRODUCT_LINKS.map(
    (link) =>
      `<td align="center" style="padding:6px 4px;">
        <a href="${link.href}" style="font-size:12px;font-weight:600;color:${BRAND.teal};text-decoration:none;">${escapeHtml(link.label)}</a>
      </td>`
  ).join("");

  const body = `
    ${renderLogoHeader(options.headline, `Your ${options.requestLabel} was received`)}
    <tr>
      <td style="padding:28px 32px 8px;background:#ffffff;">
        <p style="margin:0 0 14px;font-size:16px;line-height:1.7;color:${BRAND.navy};">Hi ${escapeHtml(options.recipientName)},</p>
        ${paragraphs}
        ${steps}
        <p style="margin:0 0 12px;font-size:13px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:${BRAND.teal};">Explore KIDUART</p>
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
          <tr>${exploreLinks}</tr>
        </table>
        <p style="margin:22px 0 0;font-size:15px;line-height:1.7;color:${BRAND.navy};">
          ${escapeHtml(options.signature ?? "KIDUART Team")}<br />
          <span style="font-size:13px;color:${BRAND.muted};">KIDUART Support · <a href="mailto:${SUPPORT_EMAIL}" style="color:${BRAND.teal};text-decoration:none;">${escapeHtml(SUPPORT_EMAIL)}</a></span>
        </p>
      </td>
    </tr>
    ${ctas}
    ${renderBrandedFooter()}
  `;

  return wrapEmailDocument(body);
}

function getFromAddress(config: EmailConfig, displayName = "KIDUART") {
  return `"${displayName}" <${config.user}>`;
}

export async function sendContactInquiryEmail(payload: ContactEmailPayload) {
  const config = getEmailConfig();

  if (!config) {
    console.info("Contact inquiry captured locally:", payload);
    return;
  }

  const rows = [
    renderRow("Name", payload.name),
    renderRow("Email", payload.email),
    renderRow("Phone", `${payload.code} ${payload.phone}`),
    renderRow("Inquiry type", payload.help),
    renderRow("Message", payload.message),
  ].join("");

  await transporter.sendMail({
    from: getFromAddress(config, "KIDUART Website"),
    to: config.mailTo,
    replyTo: payload.email,
    subject: `New Contact Inquiry - ${payload.name}`,
    html: getEmailShell({
      title: "New Contact Inquiry",
      headerSubtitle: "Website contact form submission",
      intro:
        "A school team member submitted a contact inquiry through the KIDUART website. Review the details below and follow up from your inbox.",
      rows,
      footerNote: "Reply directly to this thread to reach the sender at their submitted email address.",
    }),
  });

  await transporter.sendMail({
    from: getFromAddress(config, "KIDUART Team"),
    to: payload.email,
    subject: "We received your message | KIDUART",
    html: getAutoReplyHtml({
      recipientName: payload.name,
      headline: "Thanks for contacting KIDUART",
      requestLabel: "contact inquiry",
      introParagraphs: [
        "Thank you for reaching out to KIDUART. We received your contact inquiry and our team will review it shortly.",
        "If your message is urgent, reply to this email and our support team will prioritize your request.",
      ],
      nextSteps: [
        "A KIDUART specialist reviews your inquiry promptly.",
        "We respond with next steps, resources, or a demo invitation if relevant.",
        "You can explore product pages while you wait using the links below.",
      ],
      signature: "KIDUART Support",
      primaryCta: { label: "Explore Features", href: `${SITE_ORIGIN}/features` },
      secondaryCta: { label: "Contact Support", href: `mailto:${SUPPORT_EMAIL}` },
    }),
  });
}

export async function sendDemoRequestEmail(payload: DemoEmailPayload) {
  const config = getEmailConfig();

  if (!config) {
    console.info("Demo request captured locally:", payload);
    return;
  }

  const fullName = `${payload.firstName} ${payload.lastName}`.trim();
  const rows = [
    renderRow("Name", fullName),
    renderRow("Email", payload.email),
    renderRow("Phone", `${payload.code} ${payload.phone}`),
    renderRow("School", payload.school),
    renderRow("Role", payload.role),
    renderRow("Students", payload.students),
    renderRow("Message", payload.message?.trim() || "Not provided"),
  ].join("");

  await transporter.sendMail({
    from: getFromAddress(config, "KIDUART Website"),
    to: config.mailTo,
    replyTo: payload.email,
    subject: `New Demo Request — ${payload.school}`,
    priority: "high",
    headers: {
      "X-Priority": "1",
      "X-MSMail-Priority": "High",
      Importance: "High",
    },
    html: getEmailShell({
      title: "New Demo Request",
      headerSubtitle: "High-priority sales lead",
      intro:
        "A school leader requested a KIDUART product demo. This is a high-priority lead and should be reviewed promptly by the sales or onboarding team.",
      rows,
      priorityBanner: "High priority lead — respond promptly",
      footerNote: "This lead came from the Book a Demo page. Confirm session timing and school context in your reply.",
    }),
  });

  await transporter.sendMail({
    from: getFromAddress(config, "KIDUART Team"),
    to: payload.email,
    subject: "We've received your demo request — KIDUART",
    html: getAutoReplyHtml({
      recipientName: payload.firstName,
      headline: "Your demo request is confirmed",
      requestLabel: "demo request",
      introParagraphs: [
        "Thank you for your interest in KIDUART. We received your demo request and our team is excited to show you how KIDUART fits your school's workflows.",
        "A member of our team will reach out promptly to confirm your session time and understand your priorities.",
      ],
      nextSteps: [
        "We review your school profile, role, and student count before the call.",
        "You receive a calendar invite or follow-up email with demo details.",
        "During the session, we walk through admissions, fees, attendance, and parent communication workflows.",
      ],
      signature: "KIDUART Team",
      primaryCta: { label: "Explore Features", href: `${SITE_ORIGIN}/features` },
      secondaryCta: { label: "View Pricing", href: `${SITE_ORIGIN}/pricing` },
    }),
  });
}

export async function sendNewsletterSubscriptionEmail(payload: NewsletterEmailPayload) {
  const config = getEmailConfig();

  if (!config) {
    console.info("Newsletter subscription captured locally:", payload);
    return;
  }

  const rows = [renderRow("Subscriber email", payload.email)].join("");

  await transporter.sendMail({
    from: getFromAddress(config, "KIDUART Website"),
    to: config.mailTo,
    replyTo: payload.email,
    subject: "New Newsletter Subscription",
    html: getEmailShell({
      title: "New Newsletter Subscription",
      headerSubtitle: "Footer newsletter signup",
      intro:
        "A visitor subscribed to KIDUART updates from the website footer. Add them to your mailing list or CRM nurture flow.",
      rows,
    }),
  });

  await transporter.sendMail({
    from: getFromAddress(config, "KIDUART"),
    to: payload.email,
    subject: "You're subscribed | KIDUART",
    html: getAutoReplyHtml({
      recipientName: "there",
      headline: "You're on the list",
      requestLabel: "newsletter subscription",
      introParagraphs: [
        "Thanks for subscribing to KIDUART updates. You'll hear from us about product news, school operations insights, and platform improvements.",
        "We keep emails practical and relevant for school administrators and leadership teams.",
      ],
      nextSteps: [
        "Your email is added to our subscriber list.",
        "You'll receive occasional updates — no spam, unsubscribe anytime.",
        "Explore KIDUART while you wait using the links below.",
      ],
      signature: "KIDUART Team",
      primaryCta: { label: "Explore Platform", href: `${SITE_ORIGIN}/platform` },
      secondaryCta: { label: "Book a Demo", href: `${SITE_ORIGIN}/demo` },
    }),
  });
}

export async function sendBlogSubscribeEmail(payload: NewsletterEmailPayload) {
  const config = getEmailConfig();

  if (!config) {
    console.info("Blog subscription captured locally:", payload);
    return;
  }

  const rows = [renderRow("Subscriber email", payload.email)].join("");

  await transporter.sendMail({
    from: getFromAddress(config, "KIDUART Website"),
    to: config.mailTo,
    replyTo: payload.email,
    subject: "New Blog Subscriber",
    html: getEmailShell({
      title: "New Blog Subscriber",
      headerSubtitle: "Blog insights signup",
      intro:
        "Someone subscribed to KIDUART Blog Insights from the blog page. They want to be notified when new articles go live.",
      rows,
    }),
  });

  await transporter.sendMail({
    from: getFromAddress(config, "KIDUART"),
    to: payload.email,
    subject: "You're subscribed to KIDUART Blog Insights",
    html: getAutoReplyHtml({
      recipientName: "there",
      headline: "Thanks for subscribing",
      requestLabel: "blog subscription",
      introParagraphs: [
        "You're on the list for KIDUART Blog Insights. We'll email you when our first articles and practical guides go live.",
        "Expect content on school operations, EdTech trends, and product updates for Indian school teams.",
      ],
      nextSteps: [
        "We notify you when new blog posts are published.",
        "In the meantime, explore how KIDUART supports daily school workflows.",
        "Questions? Reply to this email or contact our support team.",
      ],
      signature: "KIDUART Team",
      primaryCta: { label: "View Features", href: `${SITE_ORIGIN}/features` },
      secondaryCta: { label: "Book a Demo", href: `${SITE_ORIGIN}/demo` },
    }),
  });
}
