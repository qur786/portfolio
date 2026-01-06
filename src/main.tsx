import { App } from "./index.tsx";
import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./index.css";
// import "@fontsource/barlow"; // Defaults to weight 400
// import "@fontsource/barlow/100.css"; // Specify weight
// import "@fontsource/barlow/200.css"; // Specify weight
// import "@fontsource/barlow/300.css"; // Specify weight
// import "@fontsource/barlow/400.css"; // Specify weight
// import "@fontsource/barlow/500.css"; // Specify weight
// import "@fontsource/barlow/600.css"; // Specify weight
// import "@fontsource/barlow/700.css"; // Specify weight
// import "@fontsource/barlow/800.css"; // Specify weight
// import "@fontsource/barlow/900.css"; // Specify weight

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
