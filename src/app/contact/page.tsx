import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { contact, site } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contáctanos",
  description:
    "Presencia en 17 estados. Escríbenos a contacto@moza.mx o llama al 55 1775 5973.",
};

export default function ContactPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-navy-900 text-white">
        <div aria-hidden className="blueprint absolute inset-0 -z-10 opacity-70" />
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <h1 className="font-display text-[clamp(3.6rem,10vw,9rem)] font-black uppercase leading-[0.88]">
            {contact.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-relaxed text-white/85">
            {contact.text}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-16 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="font-display text-5xl font-black uppercase leading-none text-navy md:text-6xl">
            {contact.formTitle}
          </h2>
          <p className="mb-10 mt-4 max-w-lg text-lg text-navy/80">{contact.formText}</p>
          <ContactForm />
        </div>

        <aside className="chamfer chamfer-lg h-fit bg-navy p-8 text-white md:p-10">
          <h2 className="font-display text-4xl font-black uppercase leading-none">
            {contact.infoTitle}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85">{contact.infoText}</p>

          <dl className="mt-8 space-y-6">
            <div>
              <dt className="text-base font-bold text-orange-soft">Horarios</dt>
              <dd className="mt-1 text-xl font-semibold">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-base font-bold text-orange-soft">Correo</dt>
              <dd className="mt-1 text-xl font-semibold">
                <a href={`mailto:${site.email}`} className="hover:underline">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-base font-bold text-orange-soft">Número</dt>
              <dd className="mt-1 text-xl font-semibold">
                <a href={site.phoneHref} className="hover:underline">
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="bg-orange">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <h2 className="max-w-4xl font-display text-5xl font-black uppercase leading-[0.95] text-white md:text-7xl">
            {contact.closing}
          </h2>
        </div>
      </section>
    </>
  );
}
