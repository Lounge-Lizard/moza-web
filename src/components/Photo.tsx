import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type PhotoProps = {
  src: string;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
  contain?: boolean;
};

/**
 * Muestra la foto si existe en /public; si no, un placeholder con la paleta MOZA.
 * Corre en servidor (build), no añade JS al cliente. Se puede pasar como prop a
 * componentes de cliente (p. ej. la lista de servicios).
 */
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  priority = false,
  contain = false,
}: PhotoProps) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (!exists) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`ph flex items-center justify-center ${className}`}
      >
        <span className="relative select-none font-display text-5xl font-black tracking-[0.2em] text-white/15">
          MOZA
        </span>
        <span className="absolute inset-x-0 bottom-0 h-1 bg-orange" />
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={src.endsWith(".gif")}
        className={contain ? "object-contain" : "object-cover"}
      />
    </div>
  );
}
