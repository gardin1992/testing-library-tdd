import { StrictMode } from "react";
import ReactDOM from "react-dom";
import Router from "main/Router";
import GlobalStyle from "styles";
import "@csstools/normalize.css";

ReactDOM.render(
  <StrictMode>
    <GlobalStyle />
    <Router />
  </StrictMode>,
  document.getElementById("root")
);
