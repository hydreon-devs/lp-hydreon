import { AbsoluteFill, Img, useCurrentFrame, useVideoConfig, interpolate, Easing } from "remotion";
import { theme } from "../theme";
import { getProjectImages } from "../images";
import type { Project } from "../../../src/data/projects";

// Las screenshots desfilan dentro de un mockup de navegador: entran deslizando
// (dirección alternada), con cross-fade, Ken Burns en la imagen y un leve
// parallax del marco — así se siente producto real, no foto pegada.
export const Showcase: React.FC<{ project: Project }> = ({ project }) => {
  const frame = useCurrentFrame();
  const { durationInFrames } = useVideoConfig();
  const images = getProjectImages(project.folder);
  const per = durationInFrames / Math.max(images.length, 1);
  const fade = 14;

  return (
    <AbsoluteFill style={{ justifyContent: "center", alignItems: "center", padding: 60 }}>
      {images.map((src, i) => {
        const start = i * per;
        const local = frame - start;
        const dir = i % 2 === 0 ? 1 : -1;

        const opacity = interpolate(
          local,
          [-fade, 0, per - fade, per],
          [0, 1, 1, 0],
          { extrapolateLeft: "clamp", extrapolateRight: "clamp" },
        );
        // Entra deslizando desde un lado + deriva lenta (parallax del marco).
        const x = interpolate(
          local,
          [-fade, 0, per],
          [120 * dir, 0, -36 * dir],
          {
            extrapolateLeft: "clamp",
            extrapolateRight: "clamp",
            easing: Easing.out(Easing.cubic),
          },
        );
        // Ken Burns: la imagen escala adentro del marco (capa con velocidad propia).
        const scale = interpolate(local, [0, per], [1, 1.1], {
          extrapolateLeft: "clamp",
          extrapolateRight: "clamp",
          easing: Easing.inOut(Easing.ease),
        });

        return (
          <AbsoluteFill
            key={i}
            style={{ justifyContent: "center", alignItems: "center", opacity }}
          >
            <div
              style={{
                display: "inline-flex",
                flexDirection: "column",
                maxWidth: "88%",
                maxHeight: "84%",
                borderRadius: 28,
                overflow: "hidden",
                border: `2px solid ${theme.border}`,
                background: theme.card,
                boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
                transform: `translateX(${x}px)`,
              }}
            >
              {/* Barra de navegador */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  padding: "18px 26px",
                  background: theme.bgDeep,
                  borderBottom: `1px solid ${theme.border}`,
                }}
              >
                <span style={{ width: 18, height: 18, borderRadius: 999, background: "#ff5f57" }} />
                <span style={{ width: 18, height: 18, borderRadius: 999, background: "#febc2e" }} />
                <span style={{ width: 18, height: 18, borderRadius: 999, background: "#28c840" }} />
                <div
                  style={{
                    flex: 1,
                    marginLeft: 18,
                    height: 36,
                    borderRadius: 999,
                    background: theme.bg,
                    border: `1px solid ${theme.border}`,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 22px",
                    color: theme.muted,
                    fontFamily: theme.font,
                    fontSize: 24,
                    overflow: "hidden",
                    whiteSpace: "nowrap",
                  }}
                >
                  {project.folder}.app
                </div>
              </div>
              <Img
                src={src}
                style={{
                  display: "block",
                  maxWidth: "100%",
                  maxHeight: "70vh",
                  objectFit: "contain",
                  transform: `scale(${scale})`,
                }}
              />
            </div>
          </AbsoluteFill>
        );
      })}
    </AbsoluteFill>
  );
};
