// Contenido exportado de moza.mx (octubre 2026). Typos corregidos en ortografía.
// Imágenes: coloca los archivos en /public/images (ver README).

export const SMART_URL =
  process.env.NEXT_PUBLIC_SMART_URL ?? "https://smart.moza.mx";

export const site = {
  name: "MOZA",
  legalName: "MOZA Construcciones y Servicios Telefónicos",
  tagline: "Forjados desde la Tradición y la Innovación",
  email: "contacto@moza.mx",
  phone: "55 1775 5973",
  phoneHref: "tel:+525517755973",
  hours: "Lunes a viernes, 9 am – 5:30 pm",
  url: "https://moza.mx",
};

export const nav = [
  { label: "Inicio", href: "/" },
  { label: "¿Quiénes somos?", href: "/about" },
  { label: "Servicios", href: "/servicios" },
  { label: "Contáctanos", href: "/contact" },
];

export const stats = {
  cuadrillas: 45,
  estados: 17,
  anios: 10,
};

export const home = {
  heroTitle: "Forjados desde la Tradición y la Innovación",
  heroText:
    "No solo otorgamos soluciones tradicionales, también innovamos con opciones nuevas de acuerdo a las necesidades de cada sitio y/o región.",
  features: [
    {
      kicker: "Mantenimientos",
      title: "Tus sitios siempre en buen estado",
    },
    {
      kicker: "Especialistas",
      title: "Nos adecuamos a tus necesidades",
    },
    {
      kicker: "En tu lugar",
      title: "Amplia presencia de cuadrillas",
    },
  ],
  specialistsTitle: "Somos especialistas en servicios de telefonía",
  specialistsText:
    "Contamos con el personal, la atención, locación, herramientas y conocimiento para que tu servicio nunca se detenga.",
};

export const about = {
  kicker: "Somos tus aliados",
  title: "MOZA Construcciones y Servicios Telefónicos",
  intro:
    "Se creó con el objetivo de dar servicio de mantenimiento y respuesta a las telefonías del país.",
  mision:
    "En MOZA ofrecemos soluciones integrales de mantenimiento, limpieza y reparación de infraestructura crítica, garantizando la operación continua y segura de los equipos e instalaciones de nuestros clientes. Nos distinguimos por nuestra capacidad de respuesta, compromiso con la calidad y un equipo humano preparado que asegura confianza, eficiencia y resultados.",
  vision:
    "Consolidarnos como una empresa referente en México en la gestión y mantenimiento de infraestructura —desde telecomunicaciones hasta espacios comerciales e industriales— reconocida por la innovación en nuestros procesos, el uso de tecnología para la productividad y la construcción de relaciones sólidas y duraderas con nuestros clientes.",
  highlights: [
    {
      title: "Coordinadores especialistas",
      text: "Atención a tus necesidades y seguimiento",
      image: "/images/about/coordinadores.jpg",
    },
    {
      title: "Cuadrillas a nivel nacional",
      text: "Con equipo y conocimiento de tareas",
      image: "/images/about/cuadrillas.jpg",
    },
    {
      title: "La experiencia nos respalda",
      text: "Innovamos a través de nuestra experiencia",
      image: "/images/about/experiencia.jpg",
    },
  ],
  clientsTitle: "Conoce a nuestros clientes",
  // Originales: uploads/2025/09/1-1, 2, 3-1, 4, 5 (1024x1024)
  clients: [
    { name: "Cliente 1", image: "/images/clientes/1.png" },
    { name: "Cliente 2", image: "/images/clientes/2.png" },
    { name: "Cliente 3", image: "/images/clientes/3.png" },
    { name: "Cliente 4", image: "/images/clientes/4.png" },
    { name: "Cliente 5", image: "/images/clientes/5.png" },
  ],
};

export const services = {
  title: "Servicios integrales",
  subtitle: "Servicios ad hoc a tus necesidades.",
  items: [
    {
      title: "Herrería",
      text: "Herrería para protección de sitios y adaptaciones.",
      image: "/images/servicios/herreria.jpg",
    },
    {
      title: "Mantenimientos Preventivos",
      text: "Tierras, HVAC, limpieza de sitios y predios, shelter y generadores.",
      image: "/images/servicios/preventivos.gif",
    },
    {
      title: "Obra Civil",
      text: "Trabajos de adaptación y corrección que requieren de obra civil en sitios.",
      image: "/images/servicios/obra-civil.jpg",
    },
    {
      title: "Trabajos en Torre",
      text: "Reconexión de sitios y ajuste de antenas y RRU.",
      image: "/images/servicios/torre.jpg",
    },
    {
      title: "Mantenimientos Correctivos",
      text: "Reparación de HVAC, atención de robos y altas temperaturas.",
      image: "/images/servicios/correctivos.jpg",
    },
    {
      title: "Electricidad",
      text: "Trabajos de media y baja tensión, cambio y reposición de pastillas.",
      image: "/images/servicios/electricidad.jpg",
    },
  ],
  equipos: [
    "Rack Ericsson",
    "Gabinetes MTS",
    "Gabinete APM 30",
    "Gabinete exterior",
    "HVAC",
    "Interna de generador",
  ],
  galleryTitle: "Mantenimientos en campo",
  gallery: [
    {
      title: "Limpieza de Predio",
      image: "/images/mantenimientos/limpieza-de-predio.jpeg",
    },
    {
      title: "Mantenimiento de Gabinetes",
      image: "/images/mantenimientos/gabinetes.jpeg",
    },
    {
      title: "Mantenimiento de Generador",
      image: "/images/mantenimientos/generador.jpeg",
    },
    {
      title: "Mantenimiento de Shelter",
      image: "/images/mantenimientos/shelter.jpeg",
    },
    {
      title: "Mantenimiento de HVAC",
      image: "/images/mantenimientos/hvac.jpeg",
    },
    {
      title: "Mantenimiento Sistema de Tierras",
      image: "/images/mantenimientos/tierras.jpeg",
    },
  ],
};

export const contact = {
  title: "Estamos cerca de ti",
  text: "Actualmente, tenemos presencia en 17 estados de la república, contamos con equipo especializado cuando lo necesitas.",
  formTitle: "Déjanos conocer tus necesidades",
  formText: "Nos adaptamos a ellas gracias a nuestros más de 10 años de experiencia.",
  infoTitle: "Conócenos más",
  infoText:
    "Si lo deseas puedes contactarnos a través de nuestros medios digitales o de manera física en nuestras oficinas con previa cita.",
  closing: "Con nosotros tus sitios y servicios nunca se detendrán",
  closingText: "Nuestro servicio está diseñado y ejecutado por especialistas.",
};
