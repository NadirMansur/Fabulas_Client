//import { ReactDOM } from "react-dom";
//import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./componets/App.jsx";
import { BrowserRouter } from "react-router-dom";

//import reportWebVitals from "./reportWebVitals";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

//reportWebVitals();
