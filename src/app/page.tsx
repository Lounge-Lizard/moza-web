import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import Photo from "@/components/Photo";
import Counter from "@/components/motion/Counter";
import HeadlineReveal from "@/components/motion/HeadlineReveal";
import HeroTower from "@/components/motion/HeroTower";
import Marquee from "@/components/motion/Marquee";
import ReadingText from "@/components/motion/ReadingText";
import { home, services, stats } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero: torre que se dibuja + titular */}
      <section className="relative isolate flex min-h-[calc(100svh-5rem)] items-center overflow-hidden bg-navy-900 text-white">
        <div aria-hidden className="blueprint absolute inset-0 -z-10" />
        <HeroTower className="absolute inset-y-0 right-[-14%] -z-10 w-[88%] opacity-45 sm:right-[-6%] sm:w-[60%] sm:opacity-100 lg:right-[2%] lg:w-[46%]" />

        <div className="mx-auto w-full max-w-7xl px-5 py-20 sm:px-8">
          <HeadlineReveal
            text={home.heroTitle}
            className="max-w-5xl font-display text-[clamp(3.4rem,8vw,7rem)] lg:max-w-[60%] font-black uppercase leading-[0.88]"
          />
          <p className="mt-8 max-w-xl text-xl leading-relaxed text-white/85">
            {home.heroText}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/about" className="btn btn-orange chamfer">
              Nosotros
            </Link>
            <Link href="/servicios" className="btn btn-line chamfer">
              Ver servicios
            </Link>
          </div>
        </div>
      </section>

      {/* Cifras */}
      <section className="bg-white">
        <dl className="mx-auto grid max-w-7xl divide-y divide-navy/15 px-5 sm:px-8 md:grid-cols-3 md:divide-x md:divide-y-0">
          {[
            { value: <Counter to={stats.cuadrillas} />, label: "cuadrillas de trabajo" },
            { value: <Counter to={stats.estados} />, label: "estados en toda la república" },
            { value: <Counter to={stats.anios} prefix="+" />, label: "años de experiencia" },
          ].map((s) => (
            <div key={s.label} className="py-10 md:px-10 md:first:pl-0 md:last:pr-0">
              <dd className="font-display text-[clamp(5rem,12vw,9rem)] font-black leading-[0.85] text-orange">
                {s.value}
              </dd>
              <dt className="mt-3 text-xl font-semibold text-navy">{s.label}</dt>
            </div>
          ))}
        </dl>
      </section>

      {/* Cinta de servicios */}
      <section aria-label="Servicios" className="bg-navy-900">
        <Marquee items={services.items.map((s) => s.title)} />
      </section>

      {/* Tres compromisos */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <ul className="space-y-20 md:space-y-28">
          {home.features.map((f, i) => (
            <li
              key={f.kicker}
              className="grid items-center gap-8 md:grid-cols-12 md:gap-12"
            >
              <Photo
                src={f.image}
                alt={f.kicker}
                className={`chamfer chamfer-lg aspect-[4/3] md:col-span-5 ${
                  i % 2 === 1 ? "md:order-2" : ""
                }`}
                sizes="(min-width: 768px) 40vw, 100vw"
              />
              <div className={`md:col-span-7 ${i % 2 === 1 ? "md:order-1" : ""}`}>
                <h2 className="font-display text-6xl font-black uppercase leading-[0.9] text-navy md:text-8xl">
                  {f.kicker}
                </h2>
                <p className="mt-4 max-w-lg text-2xl leading-snug text-navy/85">
                  {f.title}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* Lectura que se ilumina con el scroll */}
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 md:py-36">
          <h2 className="font-display text-5xl font-black uppercase leading-[0.95] md:text-7xl">
            {home.specialistsTitle}
          </h2>
          <ReadingText
            text={home.specialistsText}
            className="mt-10 max-w-3xl text-3xl font-medium leading-snug md:text-4xl"
          />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
