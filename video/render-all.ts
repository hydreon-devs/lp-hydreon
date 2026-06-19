import path from "node:path";
import { bundle } from "@remotion/bundler";
import { renderMedia, selectComposition } from "@remotion/renderer";
import { projects } from "../src/data/projects";

// Renderiza un .mp4 por proyecto a video/out/<folder>.mp4. Un comando = todos los videos.
async function main() {
  const entryPoint = path.join(__dirname, "src", "index.ts");
  console.log("Bundling…");
  const serveUrl = await bundle({ entryPoint });

  for (const project of projects) {
    const id = `promo-${project.folder}`;
    const inputProps = { project };
    const composition = await selectComposition({ serveUrl, id, inputProps });
    const outputLocation = path.join(__dirname, "out", `${project.folder}.mp4`);

    console.log(`Rendering ${id} → ${outputLocation}`);
    await renderMedia({
      composition,
      serveUrl,
      codec: "h264",
      inputProps,
      outputLocation,
    });
    console.log(`✓ ${project.folder}.mp4`);
  }

  console.log("Listo. Videos en video/out/");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
