"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "ok" | "error";

const fieldClass =
  "mt-1 w-full border-0 border-b-2 border-navy/35 bg-transparent px-0 py-3 text-lg text-foreground outline-none transition-colors focus:border-orange focus:bg-orange/5 focus-visible:shadow-[0_2px_0_0_var(--color-orange)]";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");
    setMessage("");

    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(json.error ?? "No se pudo enviar el mensaje.");
      setStatus("ok");
      setMessage("Mensaje enviado. Te responderemos pronto.");
      form.reset();
    } catch (err) {
      setStatus("error");
      setMessage(
        err instanceof Error
          ? err.message
          : "No se pudo enviar el mensaje. Escríbenos a contacto@moza.mx.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-7">
      {/* Honeypot anti-spam: las personas no lo ven */}
      <div className="hidden" aria-hidden>
        <label>
          No llenar
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <label className="block text-base font-semibold text-navy">
          Nombre *
          <input name="name" type="text" required maxLength={120} autoComplete="name" className={fieldClass} />
        </label>
        <label className="block text-base font-semibold text-navy">
          Correo *
          <input name="email" type="email" required maxLength={160} autoComplete="email" className={fieldClass} />
        </label>
      </div>

      <label className="block text-base font-semibold text-navy">
        Asunto
        <input name="subject" type="text" maxLength={160} className={fieldClass} />
      </label>

      <label className="block text-base font-semibold text-navy">
        Mensaje *
        <textarea name="message" required rows={5} maxLength={4000} className={`${fieldClass} resize-y`} />
      </label>

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn btn-orange chamfer disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "sending" ? "Enviando…" : "Enviar mensaje"}
      </button>

      <p
        role="status"
        aria-live="polite"
        className={`min-h-6 text-base font-semibold ${
          status === "error" ? "text-red-700" : "text-green-800"
        }`}
      >
        {message}
      </p>
    </form>
  );
}
