/** Cinta de servicios en letra de contorno. Solo CSS: no suma JavaScript al cliente. */
export default function Marquee({ items }: { items: string[] }) {
  const row = (copy: "a" | "b") => (
    <ul className="flex shrink-0 items-center" aria-hidden={copy === "b"}>
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="outline-text px-8 font-display text-6xl font-black uppercase leading-none md:px-10 md:text-8xl">
            {item}
          </span>
          <span className="h-3 w-3 shrink-0 bg-orange" aria-hidden />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="marquee overflow-hidden py-10 md:py-14">
      <div className="marquee-track">
        {row("a")}
        {row("b")}
      </div>
    </div>
  );
}
