import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { theme } from "./theme";

// Fondo de marca: degradado oscuro vertical + glow naranja/púrpura que respira.
export const Background: React.FC = () => {
  const frame = useCurrentFrame();
  const glow = interpolate(Math.sin(frame / 30), [-1, 1], [0.18, 0.35]);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(180deg, ${theme.bg} 0%, ${theme.bgDeep} 50%, ${theme.bg} 100%)`,
      }}
    >
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 50% 30%, hsl(35, 90%, 55%, ${glow}) 0%, transparent 55%)`,
        }}
      />
      <AbsoluteFill
        style={{
          background: `radial-gradient(circle at 80% 85%, hsl(280, 70%, 50%, ${glow * 0.8}) 0%, transparent 50%)`,
        }}
      />
    </AbsoluteFill>
  );
};
