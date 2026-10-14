"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";

type Item = { title: string; text: string };

/**
 * Lista grande de servicios. Al pasar el cursor, enfocar o tocar uno, se abre su
 * descripción y la foto de al lado cambia con un barrido. Las fotos llegan ya
 * renderizadas desde el servidor (componente Photo).
 */
export default function ServiceList({
  items,
  photos,
}: {
  items: Item[];
  photos: React.ReactNode[];
}) {
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();

  return (
    <div className="grid gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
      <ul className="divide-y divide-navy/15 border-y border-navy/15">
        {items.map((s, i) => {
          const isActive = active === i;
          return (
            <li key={s.title}>
              <button
                type="button"
                aria-expanded={isActive}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-start justify-between gap-6 py-6 text-left outline-offset-[-3px] focus-visible:outline-3 focus-visible:outline-orange md:py-8"
              >
                <span className="block">
                  <span
                    className={`block font-display text-4xl font-extrabold uppercase leading-[0.95] transition-colors duration-300 md:text-6xl ${
                      isActive ? "text-orange" : "text-navy group-hover:text-navy-700"
                    }`}
                  >
                    {s.title}
                  </span>
                  <span
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      isActive ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <span className="overflow-hidden">
                      <span className="mt-3 block max-w-md text-lg leading-snug text-navy/80">
                        {s.text}
                      </span>
                    </span>
                  </span>
                </span>
                <span
                  aria-hidden
                  className={`mt-2 block h-6 w-6 shrink-0 transition-transform duration-300 ${
                    isActive ? "rotate-45" : ""
                  }`}
                >
                  <svg viewBox="0 0 24 24" className="h-6 w-6 text-orange" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 4v16M4 12h16" />
                  </svg>
                </span>
              </button>

              {/* Móvil: la foto se abre debajo del servicio activo */}
              {isActive && (
                <div className="chamfer mb-6 aspect-[4/3] overflow-hidden lg:hidden">
                  {photos[i]}
                </div>
              )}
            </li>
          );
        })}
      </ul>

      {/* Escritorio: panel fijo con barrido entre fotos */}
      <div className="relative hidden lg:block">
        <div className="chamfer chamfer-lg sticky top-28 aspect-[4/5] overflow-hidden bg-navy-900">
          <AnimatePresence initial={false}>
            <motion.div
              key={active}
              className="absolute inset-0"
              initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
              animate={{ clipPath: "inset(0 0 0% 0)" }}
              exit={{ opacity: 1 }}
              transition={{ duration: reduce ? 0 : 0.55, ease: [0.2, 0.7, 0.1, 1] }}
            >
              {photos[active]}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
