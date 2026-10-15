"use client";

import { motion, useReducedMotion } from "motion/react";

/** Titular que sale palabra por palabra desde una máscara. Una sola vez, al cargar. */
export default function HeadlineReveal({
  text,
  className = "",
  delay = 0.1,
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <h1 className={className} aria-label={text}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          aria-hidden
          className="mr-[0.22em] inline-block overflow-hidden pb-[0.06em] pt-[0.2em] -mt-[0.2em] align-bottom"
        >
          <motion.span
            className="inline-block"
            initial={reduce ? false : { y: "115%" }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.85,
              delay: delay + i * 0.07,
              ease: [0.2, 0.7, 0.1, 1],
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}
