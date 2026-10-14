"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { nav, SMART_URL } from "@/lib/content";

export default function Header({ logo }: { logo: React.ReactNode }) {
  const pathname = usePathname();
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-white/10 bg-navy-900/85 backdrop-blur-md transition-[height] duration-300 ${
        compact ? "h-16" : "h-20"
      }`}
    >
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          aria-label="MOZA, inicio"
          className="outline-offset-4 focus-visible:outline-2 focus-visible:outline-white"
        >
          {logo}
        </Link>

        <nav aria-label="Principal" className="hidden items-center gap-2 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className="relative px-4 py-2 text-base font-semibold text-white/85 outline-offset-2 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-white"
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-4 -bottom-0.5 h-[3px] bg-orange"
                    transition={
                      reduce
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 420, damping: 34 }
                    }
                  />
                )}
              </Link>
            );
          })}
          <a href={SMART_URL} className="btn btn-orange chamfer ml-4 !px-6 !py-3">
            SMART
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center text-white md:hidden"
          aria-expanded={open}
          aria-controls="menu-movil"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="menu-movil"
            aria-label="Principal móvil"
            initial={reduce ? false : { opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="absolute inset-x-0 top-full border-t border-white/10 bg-navy-900 px-5 pb-6 pt-2 md:hidden"
          >
            <ul>
              {nav.map((item) => (
                <li key={item.href} className="border-b border-white/10">
                  <Link
                    href={item.href}
                    aria-current={pathname === item.href ? "page" : undefined}
                    className={`block py-4 font-display text-4xl font-extrabold uppercase ${
                      pathname === item.href ? "text-orange-soft" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a href={SMART_URL} className="btn btn-orange chamfer mt-5 w-full">
              SMART
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
