import { AbsoluteFill } from "remotion";
import {
  TransitionSeries,
  linearTiming,
  springTiming,
} from "@remotion/transitions";
import { slide } from "@remotion/transitions/slide";
import { fade } from "@remotion/transitions/fade";
import { Background } from "./Background";
import { Intro } from "./scenes/Intro";
import { TitleCard } from "./scenes/TitleCard";
import { Showcase } from "./scenes/Showcase";
import { ImpactStat } from "./scenes/ImpactStat";
import { OutroCTA } from "./scenes/OutroCTA";
import type { Project } from "../../src/data/projects";

// Duraciones por escena (30fps).
export const SCENES = {
  intro: 75,
  title: 105,
  showcase: 165,
  impact: 90,
  outro: 105,
} as const;

// Cada transición solapa dos escenas: el total descuenta su duración una vez por transición.
export const TRANSITION = 18;
const N_TRANSITIONS = 4;

export const TOTAL_FRAMES =
  SCENES.intro +
  SCENES.title +
  SCENES.showcase +
  SCENES.impact +
  SCENES.outro -
  N_TRANSITIONS * TRANSITION;

const timing = linearTiming({ durationInFrames: TRANSITION });

export const ProjectPromo: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <AbsoluteFill>
      <Background />
      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={SCENES.intro}>
          <Intro project={project} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-bottom" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION })}
        />

        <TransitionSeries.Sequence durationInFrames={SCENES.title}>
          <TitleCard project={project} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={SCENES.showcase}>
          <Showcase project={project} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition
          presentation={slide({ direction: "from-right" })}
          timing={timing}
        />

        <TransitionSeries.Sequence durationInFrames={SCENES.impact}>
          <ImpactStat project={project} />
        </TransitionSeries.Sequence>

        <TransitionSeries.Transition presentation={fade()} timing={timing} />

        <TransitionSeries.Sequence durationInFrames={SCENES.outro}>
          <OutroCTA project={project} />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};
