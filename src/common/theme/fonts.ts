import * as CSS from "csstype";
import LatoLight from "../../assets/fonts/LatoLight.ttf";
import NovecentoSansWideNormal from "../../assets/fonts/NovecentoSansWideNormal.otf";
import NovecentoSansWideBold from "../../assets/fonts/NovecentoSansWideBold.otf";
import BebasNeueFont from "../../assets/fonts/BebasNeue.otf";
import SofiaProLight from "../../assets/fonts/SofiaProLight.otf";

export const latoLight: CSS.FontFace = {
  fontFamily: "Lato Light",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${LatoLight})`,
};

export const novecentoNormal: CSS.FontFace = {
  fontFamily: "Novecento Normal",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${NovecentoSansWideNormal})`,
};
export const novecentoBold: CSS.FontFace = {
  fontFamily: "Novecento Bold",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${NovecentoSansWideBold})`,
};

export const bebasNeue: CSS.FontFace = {
  fontFamily: "Bebas Neue",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${BebasNeueFont})`,
};

export const sofiaProLight: CSS.FontFace = {
  fontFamily: "Sofia Pro Light",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${SofiaProLight})`,
};
