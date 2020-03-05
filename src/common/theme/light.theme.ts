import { createMuiTheme } from "@material-ui/core/styles";
import { grey, deepOrange } from "@material-ui/core/colors";
import { commonTheme } from "./common.theme";

export const lightTheme = createMuiTheme(commonTheme, {
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
});
