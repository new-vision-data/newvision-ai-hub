import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";
import { CONTACT } from "@/lib/contact";

const payloadSchema = z.object({
  firstName: z.string().trim().min(1).max(100),
  lastName: z.string().trim().min(1).max(100),
  company: z.string().trim().min(1).max(200),
  position: z.string().trim().max(150).optional().or(z.literal("")),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50).optional().or(z.literal("")),
  website: z.string().trim().max(255).optional().or(z.literal("")),
  industry: z.string().min(1).max(200),
  industryOther: z.string().trim().max(200).optional().or(z.literal("")),
  employees: z.string().min(1).max(50),
  systems: z.array(z.string().max(100)).max(50),
  systemsOther: z.string().trim().max(500).optional().or(z.literal("")),
  aiExperience: z.array(z.string().max(100)).min(1).max(20),
  problems: z.array(z.string().max(200)).min(1).max(20),
  timeEater: z.string().trim().max(1000).optional().or(z.literal("")),
  expectation: z.string().min(1).max(100),
  timeline: z.string().min(1).max(100),
  message: z.string().trim().max(2000).optional().or(z.literal("")),
  privacy: z.literal(true),
});

type Payload = z.infer<typeof payloadSchema>;

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

const displayValue = (value: string | string[] | undefined): string => {
  if (value === undefined || value === null) return "Keine Angabe";
  if (Array.isArray(value)) return value.length ? value.join(", ") : "Keine Angabe";
  const t = value.trim();
  return t === "" ? "Keine Angabe" : t;
};

const row = (label: string, value: string | string[] | undefined) =>
  `<tr><td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top;white-space:nowrap;">${esc(
    label,
  )}</td><td style="padding:6px 0;color:#0f172a;">${esc(displayValue(value)).replace(/\n/g, "<br/>")}</td></tr>`;

const section = (title: string, rows: string) =>
  `<h3 style="margin:24px 0 8px;font:600 15px/1.3 -apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">${esc(
    title,
  )}</h3><table style="width:100%;border-collapse:collapse;font:400 14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;">${rows}</table>`;

function buildInternalHtml(d: Payload) {
  const now = new Date().toLocaleString("de-DE", {
    dateStyle: "full",
    timeStyle: "short",
    timeZone: "Europe/Berlin",
  });
  const industry =
    d.industry === "Sonstige Branche" && d.industryOther
      ? `${d.industry} (${d.industryOther})`
      : d.industry;

  return `<!doctype html><html><body style="margin:0;background:#f8fafc;padding:24px;">
<div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;">
<h2 style="margin:0 0 4px;font:700 20px/1.3 -apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;">Neue KI-Check-Anfrage</h2>
<p style="margin:0 0 4px;color:#64748b;font:400 14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;">${esc(d.company)}</p>
<p style="margin:0;color:#94a3b8;font:400 12px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;">Eingegangen: ${esc(now)}</p>
${section("KONTAKTDATEN", [
  row("Vorname", d.firstName),
  row("Nachname", d.lastName),
  row("Firma", d.company),
  row("Position / Funktion", d.position),
  row("E-Mail-Adresse", d.email),
  row("Telefonnummer", d.phone),
  row("Unternehmenswebsite", d.website),
].join(""))}
${section("UNTERNEHMEN", [
  row("Branche", industry),
  row("Mitarbeiterzahl", d.employees),
  row("eingesetzte Systeme", d.systems),
  row("weitere Systeme (Freitext)", d.systemsOther),
].join(""))}
${section("SITUATION", [
  row("bisherige KI-Erfahrung", d.aiExperience),
  row("gewünschte Verbesserungsbereiche", d.problems),
  row("größter Zeitfresser", d.timeEater),
].join(""))}
${section("ZIELE", [
  row("gewünschte Ziele / Erwartung", d.expectation),
  row("Umsetzungszeitraum", d.timeline),
  row("Freitext / Nachricht", d.message),
].join(""))}
<p style="margin-top:24px;color:#94a3b8;font:400 12px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;">Gesendet über newvisiondata.de – AI-Check-Formular · Reply-To: ${esc(d.email)}</p>
</div></body></html>`;
}

function buildCustomerHtml(d: Payload) {
  const brand = "#1e40af";
  return `<!doctype html><html><body style="margin:0;background:#f8fafc;padding:24px;font-family:-apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;">
<div style="max-width:640px;margin:0 auto;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;box-shadow:0 4px 24px -8px rgba(15,23,42,0.08);">
  <div style="background:linear-gradient(135deg,#1e3a8a,#3b82f6);padding:32px 28px;color:#ffffff;">
    <p style="margin:0 0 6px;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;opacity:0.85;">NewVisionData GmbH</p>
    <h1 style="margin:0;font-size:24px;line-height:1.3;font-weight:700;">Vielen Dank für Ihre Anfrage</h1>
  </div>
  <div style="padding:32px 28px;">
    <p style="margin:0 0 16px;font-size:16px;">Hallo ${esc(d.firstName)},</p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;">vielen Dank für Ihre Anfrage und Ihr Vertrauen. Wir haben Ihre Angaben erfolgreich erhalten.</p>
    <p style="margin:0 0 14px;font-size:15px;line-height:1.6;">Unser Team bereitet Ihr persönliches Erstgespräch bereits anhand Ihrer Informationen vor. Dadurch können wir direkt über konkrete Möglichkeiten für Ihr Unternehmen sprechen.</p>

    <h2 style="margin:28px 0 12px;font-size:16px;font-weight:600;color:${brand};">Wie geht es jetzt weiter?</h2>
    <ul style="margin:0;padding:0;list-style:none;">
      ${[
        "Ihre Angaben werden analysiert.",
        "Ein Ansprechpartner meldet sich innerhalb von 24 Stunden persönlich bei Ihnen.",
        "Gemeinsam besprechen wir, welche KI-Lösungen für Ihren Betrieb sinnvoll sind.",
        "Falls wir der Meinung sind, dass sich eine Lösung für Sie nicht lohnt, sagen wir Ihnen das ebenfalls offen.",
      ]
        .map(
          (t) =>
            `<li style="padding:10px 0 10px 28px;position:relative;font-size:14px;line-height:1.55;border-bottom:1px solid #f1f5f9;"><span style="position:absolute;left:0;top:12px;width:18px;height:18px;border-radius:50%;background:${brand};color:#fff;font-size:11px;line-height:18px;text-align:center;">✓</span>${esc(t)}</li>`,
        )
        .join("")}
    </ul>

    <p style="margin:24px 0 0;font-size:15px;line-height:1.6;">Unser Anspruch ist eine ehrliche, herstellerunabhängige Beratung mit konkretem Mehrwert. Wir freuen uns auf das Gespräch.</p>

    <p style="margin:28px 0 4px;font-size:15px;">Freundliche Grüße</p>
    <p style="margin:0;font-size:15px;font-weight:600;">${esc(CONTACT.signature)}</p>
  </div>
  <div style="border-top:1px solid #e2e8f0;padding:24px 28px;background:#f8fafc;font-size:13px;line-height:1.6;color:#475569;">
    <p style="margin:0 0 8px;font-weight:600;color:#0f172a;">${esc(CONTACT.companyName)}</p>
    <p style="margin:0;">Telefon: <a href="${CONTACT.phoneTel}" style="color:${brand};text-decoration:none;">${esc(CONTACT.phoneDisplay)}</a></p>
    <p style="margin:0;">E-Mail: <a href="mailto:${CONTACT.email}" style="color:${brand};text-decoration:none;">${esc(CONTACT.email)}</a></p>
    <p style="margin:0;">Website: <a href="https://www.newvisiondata.de" style="color:${brand};text-decoration:none;">www.newvisiondata.de</a></p>
  </div>
</div>
</body></html>`;
}

type SendResult =
  | { ok: true; id: string | null }
  | { ok: false; status: number; error: string };

async function sendEmail(params: {
  apiKey: string;
  from: string;
  to: string[];
  replyTo: string;
  subject: string;
  html: string;
}): Promise<SendResult> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${params.apiKey}`,
      },
      body: JSON.stringify({
        from: params.from,
        to: params.to,
        reply_to: params.replyTo,
        subject: params.subject,
        html: params.html,
      }),
    });
    const text = await res.text();
    if (!res.ok) {
      return { ok: false, status: res.status, error: text };
    }
    let id: string | null = null;
    try {
      const json = JSON.parse(text) as { id?: string; data?: { id?: string } };
      id = json.id ?? json.data?.id ?? null;
    } catch {
      /* ignore */
    }
    return { ok: true, id };
  } catch (err) {
    return {
      ok: false,
      status: 0,
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

export const Route = createFileRoute("/api/ai-check")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!RESEND_API_KEY) {
          console.error("[ai-check] Missing RESEND_API_KEY");
          return Response.json(
            { ok: false, error: "E-Mail-Versand ist derzeit nicht konfiguriert." },
            { status: 500 },
          );
        }

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ ok: false, error: "Ungültige Anfrage." }, { status: 400 });
        }

        const parsed = payloadSchema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { ok: false, error: "Bitte prüfen Sie Ihre Eingaben." },
            { status: 400 },
          );
        }
        const data = parsed.data;
        const from = `${CONTACT.senderName} <${CONTACT.senderEmail}>`;

        // Send BOTH emails independently. Neither one may block the other.
        const [internalResult, customerResult] = await Promise.all([
          sendEmail({
            apiKey: RESEND_API_KEY,
            from,
            to: [CONTACT.email],
            replyTo: data.email,
            subject: `Neue KI-Check-Anfrage – ${data.company}`,
            html: buildInternalHtml(data),
          }),
          sendEmail({
            apiKey: RESEND_API_KEY,
            from,
            to: [data.email],
            replyTo: CONTACT.email,
            subject: "Vielen Dank für Ihre Anfrage | NewVisionData GmbH",
            html: buildCustomerHtml(data),
          }),
        ]);


        if (internalResult.ok) {
          console.log(`[ai-check] internal email sent OK id=${internalResult.id ?? "unknown"} to=${CONTACT.email}`);
        } else {
          console.error(
            `[ai-check] internal email FAILED status=${internalResult.status} error=${internalResult.error}`,
          );
        }
        if (customerResult.ok) {
          console.log(`[ai-check] customer email sent OK id=${customerResult.id ?? "unknown"} to=${data.email}`);
        } else {
          console.error(
            `[ai-check] customer email FAILED status=${customerResult.status} error=${customerResult.error}`,
          );
        }

        if (!internalResult.ok) {
          return Response.json(
            {
              ok: false,
              error:
                "Ihre Anfrage konnte nicht vollständig versendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
            },
            { status: 502 },
          );
        }

        return Response.json({
          ok: true,
          internalMessageId: internalResult.id,
          customerMessageId: customerResult.ok ? customerResult.id : null,
          customerEmailSent: customerResult.ok,
        });
      },
    },
  },
});
