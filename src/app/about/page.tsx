import type { Metadata } from "next";
import Photo from "@/components/Photo";
import { about, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "¿Quiénes somos?",
  description:
    "MOZA nació para dar mantenimiento y respuesta a las telefonías del país. 45 cuadrillas, 17 estados y más de 10 años de experiencia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange">
            {about.kicker}
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-black leading-tight sm:text-5xl">
            {about.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-white/80">{about.intro}</p>

          <dl className="mt-10 grid max-w-2xl grid-cols-3 gap-4">
            {[
              { v: stats.cuadrillas, l: "Cuadrillas de trabajo" },
              { v: stats.estados, l: "Estados" },
              { v: `+${stats.anios}`, l: "Años de experiencia" },
            ].map((s) => (
              <div key={s.l} className="rounded-xl bg-white/5 p-4 ring-1 ring-white/10">
                <dd className="text-3xl font-black text-orange sm:text-4xl">{s.v}</dd>
                <dt className="mt-1 text-xs font-semibold text-white/80 sm:text-sm">
                  {s.l}
                </dt>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-6 px-4 py-16 sm:px-6 md:grid-cols-2">
        <article className="rounded-2xl border border-navy/10 p-8">
          <h2 className="text-2xl font-black text-navy">Misión</h2>
          <p className="mt-4 leading-relaxed text-foreground/80">{about.mision}</p>
        </article>
        <article className="rounded-2xl border border-navy/10 p-8">
          <h2 className="text-2xl font-black text-navy">Visión</h2>
          <p className="mt-4 leading-relaxed text-foreground/80">{about.vision}</p>
        </article>
      </section>

      <section className="bg-navy-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <ul className="grid gap-6 md:grid-cols-3">
            {about.highlights.map((h) => (
              <li key={h.title} className="overflow-hidden rounded-2xl bg-white shadow-sm">
                <Photo src={h.image} alt={h.title} className="aspect-[4/3]" />
                <div className="p-6">
                  <h3 className="text-lg font-bold text-navy">{h.title}</h3>
                  <p className="mt-1 text-sm text-foreground/70">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <h2 className="text-center text-3xl font-black text-navy">
          {about.clientsTitle}
        </h2>
        <ul className="mt-10 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {about.clients.map((c) => (
            <li key={c.image}>
              <Photo
                src={c.image}
                alt={c.name}
                contain
                className="aspect-square"
                sizes="(min-width: 1024px) 20vw, 50vw"
              />
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
