"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";

const BAYS = 12;

/** Regla vertical en forma de mástil: el punto naranja "sube la torre" mientras haces scroll. */
export default function ScrollMast() {
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    mass: 0.3,
  });
  const top = useTransform(smooth, (v) => `${v * 100}%`);

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed right-5 top-1/2 z-40 hidden h-[44vh] -translate-y-1/2 lg:block"
    >
      <div className="relative h-full w-3">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-orange/45" />
        {Array.from({ length: BAYS + 1 }).map((_, i) => (
          <span
            key={i}
            className="absolute left-0 h-px w-3 bg-orange/45"
            style={{ top: `${(i / BAYS) * 100}%` }}
          />
        ))}
        <motion.span
          className="absolute left-1/2 size-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange ring-4 ring-orange/25"
          style={{ top }}
        />
      </div>
    </div>
  );
}
