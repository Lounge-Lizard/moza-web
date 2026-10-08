import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown; // honeypot
};

const str = (v: unknown, max: number) =>
  typeof v === "string" ? v.trim().slice(0, max) : "";

const escapeHtml = (s: string) =>
  s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });
  }

  // Honeypot: responder OK sin enviar nada
  if (str(body.website, 50)) return NextResponse.json({ ok: true });

  const name = str(body.name, 120);
  const email = str(body.email, 160);
  const subject = str(body.subject, 160);
  const message = str(body.message, 4000);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Revisa nombre, correo y mensaje." },
      { status: 400 },
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO ?? "contacto@moza.mx";
  const from = process.env.CONTACT_FROM ?? "MOZA Web <web@moza.mx>";

  if (!apiKey) {
    console.error("RESEND_API_KEY no configurada");
    return NextResponse.json(
      { error: "El formulario no está disponible. Escríbenos a contacto@moza.mx." },
      { status: 503 },
    );
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[moza.mx] ${subject || "Nuevo mensaje de contacto"}`,
      html: `<p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
<p><strong>Correo:</strong> ${escapeHtml(email)}</p>
<p><strong>Asunto:</strong> ${escapeHtml(subject || "—")}</p>
<p style="white-space:pre-wrap">${escapeHtml(message)}</p>`,
    }),
  });

  if (!res.ok) {
    console.error("Resend error", res.status, await res.text());
    return NextResponse.json(
      { error: "No se pudo enviar el mensaje. Intenta de nuevo." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
