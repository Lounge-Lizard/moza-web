import Image from "next/image";

type LogoProps = {
  /** Se mantiene por compatibilidad: el logo oficial es transparente. */
  variant?: "dark" | "light";
  className?: string;
};

// Logo oficial: /public/images/logo.png (transparente, letras blancas y naranja).
export default function Logo({ className = "" }: LogoProps) {
  return (
    <Image
      src="/images/logo.png"
      alt="MOZA Construcciones"
      width={412}
      height={418}
      priority
      sizes="64px"
      className={`h-14 w-auto ${className}`}
    />
  );
}
