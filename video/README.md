# Fábrica de videos Hydreon (Remotion)

Genera un video promocional vertical (1080×1920, ~18s) por cada proyecto del portfolio.

## Cómo funciona

- Los datos salen de `../src/data/projects.ts` (la misma fuente que la landing).
- Las imágenes se bundlean desde `src/assets/portfolio/<folder>/`.
- Hay **una composición por proyecto** (`promo-<folder>`), generada automáticamente.

**Agregar un proyecto** = agregarlo al array en `../src/data/projects.ts` y poner sus imágenes
en `src/assets/portfolio/<folder>/`. Aparece como video nuevo, sin tocar el código de video.

## Comandos

```bash
cd video
npm install        # solo la primera vez

npm run studio     # preview en vivo; elegí el proyecto en la barra lateral
npm run render-all # renderiza todos los .mp4 a video/out/
```

## Escenas

`Intro` → `TitleCard` → `Showcase` (screenshots) → `ImpactStat` → `OutroCTA`.
Duraciones en `src/ProjectPromo.tsx`. Branding en `src/theme.ts`.
