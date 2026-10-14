"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";

function Word({
  children,
  range,
  progress,
}: {
  children: string;
  range: [number, number];
  progress: MotionValue<number>;
}) {
  const opacity = useTransform(progress, range, [0.2, 1]);
  return (
    <motion.span style={{ opacity }} className="mr-[0.28em] inline-block">
      {children}
    </motion.span>
  );
}

/** Texto que se "ilumina" palabra por palabra mientras lo lees (scroll). */
export default function ReadingText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 88%", "end 55%"],
  });
  const words = text.split(" ");

  return (
    <p ref={ref} className={className}>
      {words.map((w, i) =>
        reduce ? (
          <span key={i} className="mr-[0.28em] inline-block">
            {w}
          </span>
        ) : (
          <Word
            key={i}
            range={[i / words.length, (i + 1) / words.length]}
            progress={scrollYProgress}
          >
            {w}
          </Word>
        ),
      )}
    </p>
  );
}
