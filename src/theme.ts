import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#00796B" // Your primary color
    },
    secondary: {
      main: "#F50057" // Your secondary color
    },
    common: {
      black: "#000000",
      white: "#FFFFFF"
    },
    grey: {
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      500: "#9e9e9e",
      700: "#616161",
      800: "#424242",
      900: "#212121"
    }
  },
  typography: {
    fontFamily: '"Roboto", "Arial", sans-serif', // Your preferred font stack
    h6: {
      fontWeight: "bold"
    },
    subtitle1: {
      fontWeight: "bold"
    },
    button: {
      textTransform: "none" // Remove uppercase transformation from buttons
    }
  }
});

export default theme;
