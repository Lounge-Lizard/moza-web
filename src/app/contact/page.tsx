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
      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <h1 className="text-4xl font-black sm:text-5xl">{contact.title}</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">{contact.text}</p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
        <div>
          <h2 className="text-2xl font-black text-navy">{contact.formTitle}</h2>
          <p className="mt-2 mb-8 text-foreground/75">{contact.formText}</p>
          <ContactForm />
        </div>

        <aside className="h-fit rounded-2xl bg-navy-50 p-8">
          <h2 className="text-2xl font-black text-navy">{contact.infoTitle}</h2>
          <p className="mt-2 text-sm text-foreground/75">{contact.infoText}</p>

          <dl className="mt-6 space-y-5 text-sm">
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-orange">
                Horarios
              </dt>
              <dd className="mt-1 font-semibold text-navy">{site.hours}</dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-orange">
                Correo
              </dt>
              <dd className="mt-1 font-semibold text-navy">
                <a href={`mailto:${site.email}`} className="hover:text-orange">
                  {site.email}
                </a>
              </dd>
            </div>
            <div>
              <dt className="text-xs font-bold uppercase tracking-widest text-orange">
                Número
              </dt>
              <dd className="mt-1 font-semibold text-navy">
                <a href={site.phoneHref} className="hover:text-orange">
                  {site.phone}
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="bg-navy text-white">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center sm:px-6">
          <h2 className="text-2xl font-black sm:text-3xl">{contact.closing}</h2>
          <p className="mt-3 text-white/80">{contact.closingText}</p>
        </div>
      </section>
    </>
  );
}
