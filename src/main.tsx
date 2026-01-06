import { App } from "./App.tsx";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
