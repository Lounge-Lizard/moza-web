import type { NextConfig } from "next";

/**
 * SMART activo (Laravel en Neubox).
 *
 * SMART_URL    = URL pública a la que apunta el botón y los links viejos.
 *                Hoy: https://moza.mx/smart
 * SMART_ORIGIN = (opcional) host de origen en Neubox, p. ej. https://origin.moza.mx
 *
 * Caso A: SMART_URL está en OTRO host (p. ej. smart.moza.mx)
 *         -> /smart/* redirige (301) allá.
 * Caso B: SMART_URL está en moza.mx/smart (mismo host que este sitio)
 *         -> NO se redirige (causaría un loop). Si SMART_ORIGIN existe,
 *            /smart/* se proxea con rewrite hacia Neubox; si no, se deja
 *            sin tocar y NO se debe mover el DNS de moza.mx todavía.
 */
const SMART_URL = process.env.SMART_URL ?? "https://moza.mx/smart";
const SMART_ORIGIN = process.env.SMART_ORIGIN;

const SITE_HOST = "moza.mx";
const smartHost = new URL(SMART_URL).hostname;
const smartIsSameHost = smartHost === SITE_HOST || smartHost === `www.${SITE_HOST}`;

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    const legacy = [
      { source: "/index.php/about", destination: "/about", permanent: true },
      { source: "/index.php/:path*", destination: "/:path*", permanent: true },
    ];

    if (smartIsSameHost) return legacy;

    const base = SMART_URL.replace(/\/$/, "");
    return [
      {
        source: "/smart/public/:path*",
        destination: `${base}/:path*`,
        permanent: true,
      },
      {
        source: "/smart/:path*",
        destination: `${base}/:path*`,
        permanent: true,
      },
      ...legacy,
    ];
  },
  async rewrites() {
    if (!smartIsSameHost || !SMART_ORIGIN) return [];
    const origin = SMART_ORIGIN.replace(/\/$/, "");
    return [
      { source: "/smart", destination: `${origin}/smart` },
      { source: "/smart/:path*", destination: `${origin}/smart/:path*` },
    ];
  },
  async headers() {
    return [
      {
        // Sin X-Frame-Options aquí para no afectar el SMART proxeado
        source: "/((?!smart).*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
