import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { App1 } from "./App.jsx";

createRoot(document.getElementById("root")).render(
  //render to 'root' class div label, which is defined in 'index.html'
  <StrictMode>
    <App />
  </StrictMode>
);

createRoot(document.getElementById("root1")).render(
  <StrictMode>
    <App1 />
  </StrictMode>
);
