import {
  createTheme,
  CssBaseline,
  LinkProps,
  ThemeProvider,
} from "@mui/material";
import React from "react";
import ReactDOM from "react-dom";
import { Routes } from "./routes";
import theme from "./theme";

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Routes />
  </ThemeProvider>,
  document.getElementById("root")
);
