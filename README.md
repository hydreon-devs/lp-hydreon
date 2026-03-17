# Hydreon Landing Page

Landing page corporativa de Hydreon Studios, empresa de desarrollo de software ubicada en Medellín, Colombia. Presenta los servicios, equipo y canales de contacto del estudio.

---

## Requisitos Previos

Antes de empezar, asegurate de tener instalado:

- [Node.js >= 18](https://nodejs.org/)
- npm (incluido con Node.js)

---

## Instalación

1. Cloná el repositorio:

   ```bash
   git clone https://github.com/studios-hydreon/hydreon-landing-page.git
   cd hydreon-landing-page
   ```

2. Instalá las dependencias:

   ```bash
   npm install
   ```

3. Levantá el proyecto:

   ```bash
   npm run dev
   ```

   El proyecto estará disponible en `http://localhost:8080`.

---

## Comandos Útiles

| Comando | Descripción |
| :--- | :--- |
| `npm run dev` | Levantar el servidor de desarrollo |
| `npm run build` | Generar la build de producción |
| `npm run build:dev` | Generar la build en modo development |
| `npm run lint` | Ejecutar ESLint |
| `npm run preview` | Vista previa del build de producción |

---

## Estructura del Proyecto

```
hydreon-landing-page/
├── src/
│   ├── assets/          # Imágenes y recursos estáticos del proyecto
│   ├── components/
│   │   ├── ui/          # Componentes base de shadcn/ui
│   │   ├── Navbar.tsx
│   │   ├── HeroSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── Footer.tsx
│   ├── hooks/           # Custom hooks (toast, mobile detection)
│   ├── lib/             # Utilidades (cn para clases)
│   ├── pages/           # Páginas de la app (Index, NotFound)
│   ├── App.tsx          # Router y providers
│   ├── main.tsx         # Entry point
│   └── index.css        # Estilos globales y variables CSS
├── public/              # Archivos estáticos (favicon, robots.txt)
├── .gitignore
├── package.json
├── vite.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── components.json      # Configuración de shadcn/ui
└── README.md
```

---

## Tecnologías

- **Vite 5** - Bundler y servidor de desarrollo
- **React 18** - Librería de UI
- **TypeScript 5** - Tipado estático
- **Tailwind CSS 3** - Framework de estilos
- **shadcn/ui** - Componentes UI basados en Radix UI
- **React Router 6** - Navegación SPA
- **Lucide React** - Iconografía

---

## Despliegue

El proyecto se despliega en **Lovable**.

- **Rama de deploy:** `main`
- **Proceso:** Automático por push a main

---

## Enlaces Útiles

- [Repositorio en GitHub](https://github.com/studios-hydreon/hydreon-landing-page)
