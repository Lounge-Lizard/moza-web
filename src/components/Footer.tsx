import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer({ logo }: { logo: React.ReactNode }) {
  return (
    <footer className="relative overflow-hidden bg-navy-900 text-white">
      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-5 pb-6 pt-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          {logo}
          <p className="mt-5 max-w-xs font-display text-3xl font-extrabold uppercase leading-[1.02]">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="text-lg font-bold text-orange-soft">Navegación</h2>
          <ul className="mt-4 space-y-2 text-base">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 hover:text-white hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-lg font-bold text-orange-soft">Contacto</h2>
          <ul className="mt-4 space-y-2 text-base">
            <li>
              <a href={`mailto:${site.email}`} className="text-white/85 hover:text-white hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="text-white/85 hover:text-white hover:underline">
                {site.phone}
              </a>
            </li>
            <li className="text-white/75">{site.hours}</li>
          </ul>
        </div>
      </div>

      {/* Marca gigante recortada abajo: queda como textura, no como contenido */}
      <p
        aria-hidden
        className="pointer-events-none -mb-[0.16em] select-none text-center font-display text-[30vw] font-black leading-[0.8] tracking-[0.04em] text-white/[0.06] md:text-[22vw]"
      >
        MOZA
      </p>

      <div className="relative z-10 border-t border-white/10 py-5 text-center text-sm text-white/75">
        Copyright © {new Date().getFullYear()} MOZA
      </div>
    </footer>
  );
}
