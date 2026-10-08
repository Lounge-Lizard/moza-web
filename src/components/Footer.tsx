import Link from "next/link";
import { nav, site } from "@/lib/content";

export default function Footer({ logo }: { logo: React.ReactNode }) {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          {logo}
          <p className="mt-4 text-sm font-semibold text-white/80">
            {site.tagline}
          </p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="text-xs font-bold uppercase tracking-widest text-orange">
            Navegación
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-orange">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-widest text-orange">
            Contacto
          </h2>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a href={`mailto:${site.email}`} className="hover:text-orange">
                {site.email}
              </a>
            </li>
            <li>
              <a href={site.phoneHref} className="hover:text-orange">
                {site.phone}
              </a>
            </li>
            <li className="text-white/70">{site.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        Copyright © {new Date().getFullYear()} – MOZA
      </div>
    </footer>
  );
}
