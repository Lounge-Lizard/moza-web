import type { Metadata, Viewport } from "next";
import "@fontsource-variable/big-shoulders-display";
import "@fontsource-variable/ibm-plex-sans";
import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Logo from "@/components/Logo";
import ScrollMast from "@/components/motion/ScrollMast";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "MOZA | Construcciones y Servicios Telefónicos",
    template: "%s | MOZA",
  },
  description:
    "Mantenimiento preventivo y correctivo, obra civil, herrería, electricidad y trabajos en torre para sitios de telefonía. 45 cuadrillas en 17 estados.",
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "MOZA",
    title: "MOZA | Construcciones y Servicios Telefónicos",
    description: site.tagline,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#071A38",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es-MX">
      <body className="flex min-h-screen flex-col antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-orange focus:px-4 focus:py-2 focus:text-white"
        >
          Saltar al contenido
        </a>
        <Header logo={<Logo variant="light" />} />
        <ScrollMast />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer logo={<Logo className="!h-24 !w-auto" />} />
      </body>
    </html>
  );
}
