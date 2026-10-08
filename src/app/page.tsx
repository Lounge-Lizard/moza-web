import Link from "next/link";
import Photo from "@/components/Photo";
import { home, stats } from "@/lib/content";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-navy text-white">
        <div
          aria-hidden
          className="absolute inset-0 -z-10 bg-[radial-gradient(60%_80%_at_85%_20%,rgba(232,80,26,0.28),transparent_60%)]"
        />
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 md:grid-cols-[1.2fr_1fr] md:py-28">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-orange">
              MOZA Construcciones
            </p>
            <h1 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              {home.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg text-white/80">{home.heroText}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/about"
                className="rounded-md bg-orange px-6 py-3 font-bold text-white transition-colors hover:bg-orange-600"
              >
                Nosotros
              </Link>
              <Link
                href="/servicios"
                className="rounded-md border border-white/30 px-6 py-3 font-bold text-white transition-colors hover:bg-white/10"
              >
                Ver servicios
              </Link>
            </div>
          </div>
          <Photo
            src="/images/hero.jpg"
            alt="Cuadrilla MOZA en un sitio de telefonía"
            className="aspect-[4/3] rounded-2xl shadow-2xl ring-1 ring-white/10"
            sizes="(min-width: 768px) 40vw, 100vw"
            priority
          />
        </div>
      </section>

      {/* Features */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <ul className="grid gap-6 md:grid-cols-3">
          {home.features.map((f) => (
            <li
              key={f.kicker}
              className="rounded-2xl border border-navy/10 bg-white p-8 shadow-sm transition-shadow hover:shadow-lg"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-orange">
                {f.kicker}
              </p>
              <h2 className="mt-3 text-xl font-bold text-navy">{f.title}</h2>
            </li>
          ))}
        </ul>
      </section>

      {/* Especialistas */}
      <section className="bg-navy-50">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-black text-navy sm:text-4xl">
              {home.specialistsTitle}
            </h2>
            <p className="mt-4 text-lg text-foreground/80">
              {home.specialistsText}
            </p>
          </div>
          <div className="rounded-2xl bg-white p-8 text-center shadow-sm">
            <p className="text-sm font-bold uppercase tracking-widest text-navy/70">
              Presentes en
            </p>
            <p className="mt-2 text-7xl font-black text-orange">{stats.estados}</p>
            <p className="mt-1 text-lg font-semibold text-navy">
              estados en toda la república
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
