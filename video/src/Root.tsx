import { Composition } from "remotion";
import { ProjectPromo, TOTAL_FRAMES } from "./ProjectPromo";
import { projects } from "../../src/data/projects";

// Una composición por proyecto → cada uno aparece como entrada propia en el Studio
// y como id renderizable en render-all. Agregar un proyecto al array = nuevo video.
export const RemotionRoot: React.FC = () => {
  return (
    <>
      {projects.map((project) => (
        <Composition
          key={project.folder}
          id={`promo-${project.folder}`}
          component={ProjectPromo}
          durationInFrames={TOTAL_FRAMES}
          fps={30}
          width={1080}
          height={1920}
          defaultProps={{ project }}
        />
      ))}
    </>
  );
};
