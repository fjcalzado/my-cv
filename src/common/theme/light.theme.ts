import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";
import { grey, deepOrange } from "@material-ui/core/colors";
import { latoLight, novecentoNormal, novecentoBold, bebasNeue, sofiaProLight } from "./fonts";

export const lightTheme = responsiveFontSizes(
  createMuiTheme({
    typography: {
      fontFamily: "Lato Light",
    },
    palette: {
      primary: {
        main: deepOrange[500],
        dark: deepOrange[700],
        light: deepOrange[300],
        contrastText: deepOrange[50],
      },
      secondary: {
        main: grey[500],
        dark: grey[700],
        light: grey[300],
        contrastText: grey[50],
      },
      text: {
        primary: grey[800],
        secondary: grey[600],
      },
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          "@font-face": [latoLight, novecentoNormal, novecentoBold, bebasNeue, sofiaProLight],
        },
      },
    },
  })
);
