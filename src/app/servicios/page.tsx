import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import ServiceList from "@/components/ServiceList";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Servicios",
  description:
    "Herrería, mantenimientos preventivos y correctivos, obra civil, trabajos en torre y electricidad para sitios de telefonía.",
};

export default function ServiciosPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div aria-hidden className="blueprint absolute inset-0 -z-10 opacity-70" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <h1 className="font-display text-[clamp(3.6rem,10vw,9rem)] font-black uppercase leading-[0.88]">
            {services.title}
          </h1>
          <p className="mt-6 max-w-xl text-xl text-white/85">{services.subtitle}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-24">
        <ServiceList
          items={services.items.map(({ title, text }) => ({ title, text }))}
          photos={services.items.map((s) => (
            <Photo
              key={s.title}
              src={s.image}
              alt={s.title}
              className="h-full w-full"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          ))}
        />

        <div className="mt-16 border-t border-navy/15 pt-10">
          <h2 className="font-display text-3xl font-extrabold uppercase text-navy md:text-4xl">
            Equipos que atendemos
          </h2>
          <ul className="mt-5 flex flex-wrap gap-3">
            {services.equipos.map((e) => (
              <li
                key={e}
                className="chamfer bg-paper px-5 py-2.5 text-lg font-semibold text-navy [--cut:9px]"
              >
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Galería en campo: carril horizontal */}
      <section className="bg-navy-900 py-16 text-white md:py-24" aria-labelledby="galeria">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <h2 id="galeria" className="font-display text-5xl font-black uppercase leading-none md:text-7xl">
            {services.galleryTitle}
          </h2>
        </div>
        <ul
          className="rail mt-10 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-6 sm:px-8"
          tabIndex={0}
          aria-label="Galería de mantenimientos, desplázate horizontalmente"
        >
          {services.gallery.map((g) => (
            <li key={g.title} className="w-[78vw] shrink-0 snap-start sm:w-[44vw] lg:w-[28vw]">
              <figure>
                <Photo
                  src={g.image}
                  alt={g.title}
                  className="chamfer aspect-[3/4]"
                  sizes="(min-width: 1024px) 28vw, 78vw"
                />
                <figcaption className="mt-4 font-display text-3xl font-extrabold uppercase leading-none">
                  {g.title}
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
      </section>

      <CtaBand />
    </>
  );
}
