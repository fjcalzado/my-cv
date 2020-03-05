import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { latoLight, novecentoNormal, novecentoBold, bebasNeue, sofiaProLight } from "./fonts";

export const commonTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: "Lato Light",
      fontSize: 16,
      h4: {
        fontSize: "2rem",
      },
      h6: {
        fontSize: "1.25rem",
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [latoLight, novecentoNormal, novecentoBold, bebasNeue, sofiaProLight],
        },
      },
    },
  }),
  { factor: 5 }
);
