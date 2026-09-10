import "server-only";

export type LeadPayload = {
  name: string;
  country: string;
  phone: string;
  whatsapp?: string;
  email: string;
  treatment: string;
  message: string;
  locale: string;
  source: string;
};

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

function renderRows(lead: LeadPayload): string {
  const rows: [string, string][] = [
    ["Name", lead.name],
    ["Country", lead.country],
    ["Phone", lead.phone],
    ["WhatsApp", lead.whatsapp || "—"],
    ["Email", lead.email],
    ["Treatment", lead.treatment],
    ["Language", lead.locale.toUpperCase()],
    ["Source", lead.source],
  ];

  return rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:6px 16px 6px 0;color:#5b7185;font:600 12px/1.4 system-ui">${label}</td>` +
        `<td style="padding:6px 0;color:#243746;font:400 14px/1.5 system-ui">${escapeHtml(value)}</td></tr>`,
    )
    .join("");
}

function renderEmail(lead: LeadPayload): string {
  return `<div style="background:#f6fbfd;padding:32px">
  <div style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #e2eaf0;border-radius:16px;padding:28px">
    <p style="margin:0 0 4px;color:#66c2ea;font:600 11px/1.2 system-ui;letter-spacing:.16em;text-transform:uppercase">New consultation request</p>
    <h1 style="margin:0 0 20px;color:#223b84;font:600 22px/1.2 Georgia,serif">${escapeHtml(lead.name)}</h1>
    <table style="border-collapse:collapse;width:100%">${renderRows(lead)}</table>
    <p style="margin:20px 0 6px;color:#5b7185;font:600 12px/1.4 system-ui">Message</p>
    <p style="margin:0;color:#243746;font:400 14px/1.6 system-ui;white-space:pre-wrap">${escapeHtml(lead.message)}</p>
  </div>
</div>`;
}

/**
 * Delivers a lead. Resend is used when RESEND_API_KEY is present; otherwise the
 * submission is accepted and logged so local development and previews still work
 * end to end without credentials.
 */
export async function sendLead(lead: LeadPayload): Promise<void> {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_INBOX || process.env.NEXT_PUBLIC_CONTACT_EMAIL;
  const from = process.env.LEAD_FROM || "PROSANA Website <onboarding@resend.dev>";

  if (!apiKey || !to) {
    console.info("[prosana] consultation request (no mail transport configured)", {
      ...lead,
      message: lead.message.slice(0, 400),
    });
    return;
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: lead.email,
      subject: `New consultation request — ${lead.name} (${lead.country})`,
      html: renderEmail(lead),
    }),
  });

  if (!response.ok) {
    const detail = await response.text();
    throw new Error(`Mail transport failed (${response.status}): ${detail}`);
  }
}
