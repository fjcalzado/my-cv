import { createMuiTheme } from "@material-ui/core/styles";
import { bebasNeue } from "./fonts";

export const lightTheme = createMuiTheme({
  typography: {
    fontFamily: "Bebas Neue",
  },
  overrides: {
    MuiCssBaseline: {
      "@global": {
        "@font-face": [bebasNeue],
      },
    },
  },
});
