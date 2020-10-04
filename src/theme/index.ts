import { createMuiTheme } from "@material-ui/core/styles";

const index = createMuiTheme({
  palette: {
    primary: {
      main: "rgb(113, 201, 248)",
      dark: "rgb(26, 145, 218)",
      light: "#fff",
    },
    secondary: {
      main: "rgb(29, 161, 242)",
      dark: "rgb(26, 145, 218)",
    },
    background: {
      default: "#fff",
    },
  },
  typography: {
    fontFamily: [
      "system-ui",
      "-apple-system",
      "Roboto",
      "Ubuntu",
      "Segoe UI",
      "Helvetica Neue",
      "sans-serif",
    ].join(", "),
    fontSize: 20,
  },
});

export default index;
