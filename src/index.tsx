import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ThemeProvider } from "@material-ui/styles";
import index from "./theme";

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={index}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
