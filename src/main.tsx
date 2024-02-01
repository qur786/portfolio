import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { MobileProvider } from "./context/index.tsx";
import ReactGA from "react-ga4";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "./index.css";

ReactGA.initialize("G-ZQW766DHW5");

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <MobileProvider>
      <div className="dark:bg-[#121212] dark:text-white font-normal font-roboto">
        <App />
      </div>
    </MobileProvider>
  </StrictMode>
);
