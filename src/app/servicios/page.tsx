import type { Metadata } from "next";
import Link from "next/link";
import Photo from "@/components/Photo";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Herrería, mantenimientos preventivos y correctivos, obra civil, trabajos en torre y electricidad para sitios de telefonía.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="text-4xl font-black sm:text-5xl">{services.title}</h1>
          <p className="mt-4 text-lg text-white/80">{services.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((s) => (
            <li
              key={s.title}
              className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-sm transition-shadow hover:shadow-lg"
            >
              <Photo src={s.image} alt={s.title} className="aspect-[4/3]" />
              <div className="p-6">
                <h2 className="text-lg font-bold text-navy">{s.title}</h2>
                <p className="mt-2 text-sm text-foreground/75">{s.text}</p>
              </div>
            </li>
          ))}
        </ul>

        <div className="mt-10 rounded-2xl bg-navy-50 p-6">
          <h2 className="text-sm font-bold uppercase tracking-widest text-navy">
            Equipos que atendemos
          </h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {services.equipos.map((e) => (
              <li
                key={e}
                className="rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-navy ring-1 ring-navy/15"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-navy-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <h2 className="text-3xl font-black text-navy">{services.galleryTitle}</h2>
          <ul className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.gallery.map((g) => (
              <li key={g.title}>
                <figure className="overflow-hidden rounded-2xl bg-white shadow-sm">
                  <Photo src={g.image} alt={g.title} className="aspect-[4/3]" />
                  <figcaption className="p-4 text-sm font-bold text-navy">
                    {g.title}
                  </figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6">
        <h2 className="text-2xl font-black text-navy">
          ¿Necesitas un servicio a la medida?
        </h2>
        <Link
          href="/contact"
          className="mt-6 inline-block rounded-md bg-orange px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600"
        >
          Contáctanos
        </Link>
      </section>
    </>
  );
}
