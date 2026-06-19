import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import type { Project } from "../../../src/data/projects";

export const TitleCard: React.FC<{ project: Project }> = ({ project }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleIn = spring({ frame, fps, config: { damping: 16 } });
  const descIn = spring({ frame: frame - 18, fps, config: { damping: 18 } });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "flex-start",
        fontFamily: theme.font,
        padding: 90,
        gap: 40,
      }}
    >
      <div
        style={{
          opacity: titleIn,
          transform: `translateX(${interpolate(titleIn, [0, 1], [-60, 0])}px)`,
          fontSize: 88,
          fontWeight: 700,
          lineHeight: 1.05,
          backgroundImage: theme.gradient,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {project.title}
      </div>
      <div
        style={{
          opacity: descIn,
          transform: `translateY(${interpolate(descIn, [0, 1], [40, 0])}px)`,
          color: theme.muted,
          fontSize: 44,
          fontWeight: 400,
          lineHeight: 1.35,
          maxWidth: 880,
        }}
      >
        {project.shortDescription}
      </div>
    </AbsoluteFill>
  );
};
