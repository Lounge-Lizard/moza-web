import Image from "next/image";

type LogoProps = {
  /** Se mantiene por compatibilidad: el logo oficial ya trae su propio fondo azul. */
  variant?: "dark" | "light";
  className?: string;
};

// Logo oficial: /public/images/logo.jpg (cuadrado, fondo azul incluido).
export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/logo.jpg"
      alt="MOZA Construcciones"
      width={1181}
      height={1181}
      priority
      sizes="64px"
      className={`h-14 w-14 ${className}`}
    />
  );
}
