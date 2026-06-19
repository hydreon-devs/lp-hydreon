import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import type { Project } from "../../../src/data/projects";
import logo from "../assets/hydreon-logo.jpg";

export const Intro: React.FC<{ project: Project }> = ({ project }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const logoIn = spring({ frame, fps, config: { damping: 14 } });
  const labelIn = spring({ frame: frame - 12, fps, config: { damping: 16 } });
  const clientIn = spring({ frame: frame - 22, fps, config: { damping: 16 } });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily: theme.font,
        padding: 80,
        gap: 36,
      }}
    >
      <Img
        src={logo}
        style={{
          width: 180,
          height: 180,
          borderRadius: 40,
          objectFit: "cover",
          transform: `scale(${logoIn})`,
          boxShadow: "0 0 80px hsl(35, 90%, 55%, 0.4)",
        }}
      />
      <div
        style={{
          opacity: labelIn,
          transform: `translateY(${interpolate(labelIn, [0, 1], [30, 0])}px)`,
          color: theme.primary,
          fontSize: 34,
          fontWeight: 700,
          letterSpacing: 8,
          textTransform: "uppercase",
        }}
      >
        Caso de éxito
      </div>
      <div
        style={{
          opacity: clientIn,
          transform: `translateY(${interpolate(clientIn, [0, 1], [40, 0])}px)`,
          color: theme.fg,
          fontSize: 72,
          fontWeight: 700,
          textAlign: "center",
          lineHeight: 1.1,
          maxWidth: 900,
        }}
      >
        {project.client}
      </div>
    </AbsoluteFill>
  );
};
