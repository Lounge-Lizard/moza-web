import fs from "node:fs";
import path from "node:path";
import Image from "next/image";

type LogoProps = {
  variant?: "dark" | "light";
  className?: string;
};

// Originales WP: uploads/2025/09/3.png (header/footer) y 1.png (variante).
// Copiar a /public/images/logo.png (para fondo claro) y /public/images/logo-light.png (para fondo oscuro).
export default function Logo({ variant = "dark", className = "" }: LogoProps) {
  const file = variant === "light" ? "logo-light.png" : "logo.png";
  const exists = fs.existsSync(
    path.join(process.cwd(), "public", "images", file),
  );

  if (!exists) {
    return (
      <span
        className={`font-display text-4xl font-black leading-none tracking-[0.18em] ${
          variant === "light" ? "text-white" : "text-navy"
        } ${className}`}
      >
        MOZA<span className="text-orange">.</span>
      </span>
    );
  }

  return (
    <Image
      src={`/images/${file}`}
      alt="MOZA"
      width={160}
      height={48}
      priority
      className={`h-10 w-auto ${className}`}
    />
  );
}
