import { loadFont } from "@remotion/google-fonts/SpaceGrotesk";

const { fontFamily } = loadFont();

// Colores tomados del theme de la landing (src/index.css).
export const theme = {
  bg: "hsl(240, 10%, 4%)",
  bgDeep: "hsl(260, 20%, 8%)",
  fg: "hsl(0, 0%, 98%)",
  primary: "hsl(35, 90%, 55%)",
  secondary: "hsl(280, 70%, 50%)",
  muted: "hsl(240, 5%, 65%)",
  card: "hsl(240, 10%, 8%)",
  border: "hsl(240, 10%, 18%)",
  gradient: "linear-gradient(135deg, hsl(35, 90%, 55%) 0%, hsl(280, 70%, 50%) 100%)",
  font: fontFamily,
};
