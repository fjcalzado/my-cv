import * as CSS from "csstype";
import LatoLight from "../../assets/fonts/LatoLight.ttf";
import NovecentoSansNormal from "../../assets/fonts/NovecentoSansNormal.otf";
import NovecentoSansBold from "../../assets/fonts/NovecentoSansBold.otf";
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
  src: `url(${NovecentoSansNormal})`,
};
export const novecentoBold: CSS.FontFace = {
  fontFamily: "Novecento Bold",
  fontStyle: "normal",
  fontDisplay: "swap",
  fontWeight: 400,
  src: `url(${NovecentoSansBold})`,
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
