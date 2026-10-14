"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

/**
 * Torre de telecomunicaciones que se dibuja de abajo hacia arriba y emite ondas.
 * Es el momento principal de la página; el resto del sitio es deliberadamente más quieto.
 */
const CX = 200;
const TOP = 160;
const BOTTOM = 700;
const BAYS = 9;
const BEACON_Y = 56;

const halfWidth = (y: number) => 12 + ((y - TOP) / (BOTTOM - TOP)) * 108;

function buildLattice() {
  const legs = [
    `M ${CX - halfWidth(BOTTOM)} ${BOTTOM} L ${CX - halfWidth(TOP)} ${TOP}`,
    `M ${CX + halfWidth(BOTTOM)} ${BOTTOM} L ${CX + halfWidth(TOP)} ${TOP}`,
  ];
  const braces: string[] = [];
  const step = (BOTTOM - TOP) / BAYS;
  for (let i = 0; i < BAYS; i++) {
    const y0 = BOTTOM - step * i;
    const y1 = BOTTOM - step * (i + 1);
    braces.push(`M ${CX - halfWidth(y1)} ${y1} L ${CX + halfWidth(y1)} ${y1}`);
    braces.push(`M ${CX - halfWidth(y0)} ${y0} L ${CX + halfWidth(y1)} ${y1}`);
    braces.push(`M ${CX + halfWidth(y0)} ${y0} L ${CX - halfWidth(y1)} ${y1}`);
  }
  return { legs, braces };
}

const { legs, braces } = buildLattice();

export default function HeroTower({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);

  const draw = (delay: number, duration = 1.3) =>
    reduce
      ? {}
      : {
          initial: { pathLength: 0 },
          animate: { pathLength: 1 },
          transition: { duration, delay, ease: "easeOut" as const },
        };

  return (
    <div ref={ref} aria-hidden className={className}>
      <motion.svg
        viewBox="0 0 400 720"
        preserveAspectRatio="xMidYMax meet"
        className="h-full w-auto"
        style={{ y: reduce ? 0 : y, overflow: "visible" }}
        fill="none"
      >
        {/* Ondas de señal */}
        <g stroke="#e8501a" strokeWidth="1.5">
          {[0, 1, 2, 3].map((i) => (
            <circle
              key={i}
              className="signal-ring"
              cx={CX}
              cy={BEACON_Y}
              r="620"
              style={{ animationDelay: `${-i * 1.9}s` }}
            />
          ))}
        </g>

        {/* Estructura de celosía */}
        <g stroke="#8fb0e0" strokeOpacity="0.75" strokeWidth="2" strokeLinecap="round">
          {legs.map((d, i) => (
            <motion.path key={`l${i}`} d={d} {...draw(0.1 + i * 0.1, 1.6)} />
          ))}
        </g>
        <g stroke="#8fb0e0" strokeOpacity="0.45" strokeWidth="1.5" strokeLinecap="round">
          {braces.map((d, i) => (
            <motion.path key={`b${i}`} d={d} {...draw(0.3 + i * 0.045, 0.7)} />
          ))}
        </g>

        {/* Mástil y antenas */}
        <g stroke="#8fb0e0" strokeWidth="2.5" strokeLinecap="round">
          <motion.path d={`M ${CX} ${TOP} L ${CX} ${BEACON_Y}`} {...draw(1.5, 0.6)} />
        </g>
        <g stroke="#e8501a" strokeWidth="3" strokeLinecap="round">
          <motion.path d={`M ${CX - 22} 108 L ${CX + 22} 108`} {...draw(1.9, 0.4)} />
          <motion.path d={`M ${CX - 16} 132 L ${CX + 16} 132`} {...draw(2.0, 0.4)} />
        </g>

        {/* Baliza */}
        <circle className="beacon-halo" cx={CX} cy={BEACON_Y} r="6" fill="#e8501a" />
        <circle cx={CX} cy={BEACON_Y} r="5" fill="#e8501a" />
      </motion.svg>
    </div>
  );
}
