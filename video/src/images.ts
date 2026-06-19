// Mismo enfoque que el import.meta.glob de la landing, pero con require.context
// (webpack) porque Remotion no usa Vite. Filtra por carpeta y ordena por nombre,
// así el contrato del campo `folder` funciona idéntico en ambos lados.
const ctx = require.context("./assets/portfolio", true, /\.(png|jpe?g|webp)$/);

export function getProjectImages(folder: string): string[] {
  return ctx
    .keys()
    .filter((key) => key.includes(`/${folder}/`))
    .sort((a, b) => a.localeCompare(b))
    .map((key) => ctx(key));
}
