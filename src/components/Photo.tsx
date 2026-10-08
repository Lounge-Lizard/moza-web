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
 * Renderiza la imagen si existe en /public; si no, un placeholder con la
 * paleta MOZA. Así el sitio compila y se ve bien antes de copiar las fotos.
 * Corre en servidor (build estático), no añade JS al cliente.
 */
export default function Photo({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
  priority = false,
  contain = false,
}: PhotoProps) {
  const exists = fs.existsSync(path.join(process.cwd(), "public", src));

  if (!exists) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy to-navy-900 ${className}`}
      >
        <span className="select-none text-4xl font-black tracking-[0.3em] text-white/20">
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
