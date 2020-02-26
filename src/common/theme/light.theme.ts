import { createMuiTheme } from "@material-ui/core/styles";
import { grey } from "@material-ui/core/colors";
import { bebasNeue } from "./fonts";

export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: "Bebas Neue",
  },
  palette: {
    secondary: {
      main: grey[200],
    },
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [bebasNeue],
      },
    },
  },
});
