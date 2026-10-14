import Link from "next/link";
import { cta } from "@/lib/content";

/** Franja naranja de cierre. Solo título grande y botón: el naranja no da contraste para texto pequeño. */
export default function CtaBand() {
  return (
    <section className="bg-orange">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:py-20">
        <h2 className="max-w-3xl font-display text-5xl font-black uppercase leading-[0.95] text-white md:text-7xl">
          {cta.title}
        </h2>
        <Link href="/contact" className="btn btn-navy chamfer shrink-0">
          {cta.button}
        </Link>
      </div>
    </section>
  );
}
