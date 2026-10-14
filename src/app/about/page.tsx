import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import ReadingText from "@/components/motion/ReadingText";
import { about, stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "¿Quiénes somos?",
  description:
    "MOZA nació para dar mantenimiento y respuesta a las telefonías del país. 45 cuadrillas, 17 estados y más de 10 años de experiencia.",
};

export default function AboutPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div aria-hidden className="blueprint absolute inset-0 -z-10 opacity-70" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <h1 className="font-display text-[clamp(3.6rem,10vw,9rem)] font-black uppercase leading-[0.88]">
            {about.kicker}
          </h1>
          <p className="mt-6 font-display text-3xl font-bold uppercase text-orange-soft md:text-5xl">
            {about.title}
          </p>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
            {about.intro}
          </p>
          <p className="mt-8 max-w-2xl border-l-4 border-orange pl-5 text-xl font-semibold">
            {stats.cuadrillas} cuadrillas de trabajo, {stats.estados} estados y más de {stats.anios} años de experiencia.
          </p>
        </div>
      </section>

      {/* Misión y visión: se leen iluminándose */}
      <section className="bg-white">
        <div className="mx-auto max-w-5xl space-y-24 px-5 py-24 sm:px-8 md:py-32">
          <article>
            <h2 className="font-display text-6xl font-black uppercase leading-none text-orange md:text-8xl">
              Misión
            </h2>
            <ReadingText
              text={about.mision}
              className="mt-8 text-2xl font-medium leading-snug text-navy md:text-4xl md:leading-[1.2]"
            />
          </article>
          <article>
            <h2 className="font-display text-6xl font-black uppercase leading-none text-orange md:text-8xl">
              Visión
            </h2>
            <ReadingText
              text={about.vision}
              className="mt-8 text-2xl font-medium leading-snug text-navy md:text-4xl md:leading-[1.2]"
            />
          </article>
        </div>
      </section>

      {/* Tres fotos escalonadas */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <ul className="grid gap-12 md:grid-cols-3 md:gap-8">
            {about.highlights.map((h, i) => (
              <li key={h.title} className={i === 1 ? "md:mt-20" : i === 2 ? "md:mt-40" : ""}>
                <Photo
                  src={h.image}
                  alt={h.title}
                  className="chamfer chamfer-lg aspect-[3/4]"
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <h3 className="mt-5 font-display text-4xl font-extrabold uppercase leading-none text-navy">
                  {h.title}
                </h3>
                <p className="mt-2 text-lg text-navy/80">{h.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <h2 className="font-display text-5xl font-black uppercase leading-none text-navy md:text-7xl">
            {about.clientsTitle}
          </h2>
          <ul className="mt-12 grid grid-cols-2 items-center gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {about.clients.map((c) => (
              <li
                key={c.image}
                className="opacity-80 grayscale transition duration-300 hover:opacity-100 hover:grayscale-0"
              >
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
        </div>
      </section>

      <CtaBand />
    </>
  );
}
