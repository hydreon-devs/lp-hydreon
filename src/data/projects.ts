// Fuente única de proyectos. La consumen la landing (con import.meta.glob)
// y la fábrica de videos en /video (con staticFile). El campo `folder` es el
// contrato: mismo nombre en src/assets/portfolio/<folder>/ y video/public/portfolio/<folder>/.

export interface Project {
  title: string;
  client: string;
  shortDescription: string;
  fullDescription: string;
  tags: string[];
  folder: string;
  impact?: { value: string; label: string };
}

export const projects: Project[] = [
  {
    title: "Gestor de Cotizaciones",
    client: "CJ Producciones",
    shortDescription: "Sistema web para administración de cotizaciones y clientes.",
    fullDescription:
      "Desarrollamos una plataforma web completa de gestión de cotizaciones para el uso interno del equipo de CJ Producciones. La solución redujo en un 80% el tiempo administrativo del personal encargado en la creación de cotizaciones para sus clientes.",
    tags: ["React", "Vite", "Supabase"],
    folder: "gestor-cotizaciones",
    impact: { value: "80%", label: "menos tiempo administrativo" },
  },
  {
    title: "Landing Page + Mini App D'Fruta Madre",
    client: "D'Fruta Madre - Fresas con crema",
    shortDescription: "Landing page para la venta de fresas con crema.",
    fullDescription:
      "Desarrollamos una landing page + mini app para armar pedidos y enviar por WhatsApp. La landing page fue diseñada para ser una herramienta de venta directa para el cliente.",
    tags: ["React", "Sin backend", "WhatsApp API"],
    folder: "dfrutamadre",
    impact: { value: "100%", label: "ventas directas" },
  },
];
