import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, spring, interpolate } from "remotion";
import { theme } from "../theme";
import type { Project } from "../../../src/data/projects";
import logo from "../assets/hydreon-logo.jpg";

export const OutroCTA: React.FC<{ project: Project }> = ({ project }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const tagsIn = spring({ frame, fps, config: { damping: 18 } });
  const ctaIn = spring({ frame: frame - 16, fps, config: { damping: 14 } });
  const brandIn = spring({ frame: frame - 30, fps, config: { damping: 16 } });

  return (
    <AbsoluteFill
      style={{
        justifyContent: "center",
        alignItems: "center",
        fontFamily: theme.font,
        padding: 80,
        gap: 48,
      }}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 18, justifyContent: "center", opacity: tagsIn }}>
        {project.tags.map((tag) => (
          <div
            key={tag}
            style={{
              padding: "16px 34px",
              borderRadius: 999,
              fontSize: 36,
              fontWeight: 500,
              color: theme.primary,
              background: "hsl(35, 90%, 55%, 0.12)",
              border: "2px solid hsl(35, 90%, 55%, 0.3)",
            }}
          >
            {tag}
          </div>
        ))}
      </div>

      <div
        style={{
          opacity: ctaIn,
          transform: `scale(${interpolate(ctaIn, [0, 1], [0.85, 1])})`,
          color: theme.fg,
          fontSize: 78,
          fontWeight: 700,
          textAlign: "center",
          lineHeight: 1.1,
          maxWidth: 900,
        }}
      >
        ¿Querés algo así para tu negocio?
      </div>

      <div
        style={{
          opacity: brandIn,
          display: "flex",
          alignItems: "center",
          gap: 24,
          marginTop: 20,
        }}
      >
        <Img src={logo} style={{ width: 96, height: 96, borderRadius: 24, objectFit: "cover" }} />
        <span style={{ color: theme.fg, fontSize: 56, fontWeight: 700 }}>Hydreon</span>
      </div>
    </AbsoluteFill>
  );
};
