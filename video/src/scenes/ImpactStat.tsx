import { AbsoluteFill, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import type { Project } from "../../../src/data/projects";

export const ImpactStat: React.FC<{ project: Project }> = ({ project }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const pop = spring({ frame, fps, config: { damping: 12, mass: 0.6 } });
  const labelIn = spring({ frame: frame - 14, fps, config: { damping: 18 } });

  // Fallback si el proyecto no tiene impacto definido.
  const value = project.impact?.value ?? "Hydreon";
  const label = project.impact?.label ?? "soluciones a medida";

  // Si el valor empieza con número (ej. "80%"), cuenta de 0 al target conservando el sufijo.
  const match = value.match(/^(\d+)(.*)$/);
  const count = spring({ frame, fps, config: { damping: 200 }, durationInFrames: 45 });
  const display = match
    ? `${Math.round(Number(match[1]) * count)}${match[2]}`
    : value;

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily: theme.font,
        padding: 80,
        gap: 24,
      }}
    >
      <div
        style={{
          transform: `scale(${pop})`,
          fontSize: 220,
          fontWeight: 700,
          lineHeight: 1,
          backgroundImage: theme.gradient,
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          color: "transparent",
        }}
      >
        {display}
      </div>
      <div
        style={{
          opacity: labelIn,
          transform: `translateY(${interpolate(labelIn, [0, 1], [30, 0])}px)`,
          color: theme.fg,
          fontSize: 52,
          fontWeight: 500,
          textAlign: "center",
          maxWidth: 820,
        }}
      >
        {label}
      </div>
    </AbsoluteFill>
  );
};
