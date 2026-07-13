import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

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

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) =>
    ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!,
  );

const row = (label: string, value: string | string[] | undefined) => {
  if (!value || (Array.isArray(value) && value.length === 0)) return "";
  const v = Array.isArray(value) ? value.join(", ") : value;
  return `<tr><td style="padding:6px 12px 6px 0;color:#64748b;vertical-align:top;white-space:nowrap;">${esc(
    label,
  )}</td><td style="padding:6px 0;color:#0f172a;">${esc(v).replace(/\n/g, "<br/>")}</td></tr>`;
};

const section = (title: string, rows: string) =>
  `<h3 style="margin:24px 0 8px;font:600 15px/1.3 -apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;border-bottom:1px solid #e2e8f0;padding-bottom:6px;">${esc(
    title,
  )}</h3><table style="width:100%;border-collapse:collapse;font:400 14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;">${rows}</table>`;

function buildHtml(d: z.infer<typeof payloadSchema>) {
  return `<!doctype html><html><body style="margin:0;background:#f8fafc;padding:24px;">
<div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #e2e8f0;border-radius:12px;padding:28px;">
<h2 style="margin:0 0 4px;font:700 20px/1.3 -apple-system,Segoe UI,Roboto,sans-serif;color:#0f172a;">Neue KI-Check-Anfrage</h2>
<p style="margin:0;color:#64748b;font:400 14px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;">${esc(d.company)}</p>
${section("1. Kontaktdaten", [
  row("Name", `${d.firstName} ${d.lastName}`),
  row("Position", d.position || undefined),
  row("E-Mail", d.email),
  row("Telefon", d.phone || undefined),
  row("Website", d.website || undefined),
].join(""))}
${section("2. Unternehmensdaten", [
  row("Firma", d.company),
  row("Branche", d.industry === "Sonstige Branche" && d.industryOther ? `${d.industry} (${d.industryOther})` : d.industry),
  row("Mitarbeiter", d.employees),
  row("Systeme", d.systems),
  row("Weitere Systeme", d.systemsOther || undefined),
].join(""))}
${section("3. Ist-Situation", [
  row("AI-Erfahrung", d.aiExperience),
  row("Größte Probleme", d.problems),
  row("Größter Zeitfresser", d.timeEater || undefined),
].join(""))}
${section("4. Ziele", [
  row("Erwartung", d.expectation),
  row("Zeitplan", d.timeline),
  row("Nachricht", d.message || undefined),
].join(""))}
<p style="margin-top:24px;color:#94a3b8;font:400 12px/1.5 -apple-system,Segoe UI,Roboto,sans-serif;">Gesendet über newvisiondata.de – AI-Check-Formular</p>
</div></body></html>`;
}

export const Route = createFileRoute("/api/ai-check")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const LOVABLE_API_KEY = process.env.LOVABLE_API_KEY;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;
        if (!LOVABLE_API_KEY || !RESEND_API_KEY) {
          console.error("Missing LOVABLE_API_KEY or RESEND_API_KEY");
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

        const html = buildHtml(data);
        const subject = `Neue KI-Check-Anfrage – ${data.company}`;

        try {
          const res = await fetch("https://connector-gateway.lovable.dev/resend/emails", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${LOVABLE_API_KEY}`,
              "X-Connection-Api-Key": RESEND_API_KEY,
            },
            body: JSON.stringify({
              from: "NewVisionData AI-Check <onboarding@resend.dev>",
              to: ["info@newvisiondata.de"],
              reply_to: data.email,
              subject,
              html,
            }),
          });

          if (!res.ok) {
            const errText = await res.text();
            console.error(`Resend gateway error [${res.status}]:`, errText);
            return Response.json(
              { ok: false, error: "Ihre Anfrage konnte nicht versendet werden. Bitte versuchen Sie es erneut oder rufen Sie uns an." },
              { status: 502 },
            );
          }

          return Response.json({ ok: true });
        } catch (err) {
          console.error("AI-Check send failed:", err);
          return Response.json(
            { ok: false, error: "Ein technisches Problem ist aufgetreten. Bitte versuchen Sie es erneut." },
            { status: 500 },
          );
        }
      },
    },
  },
});
