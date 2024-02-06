import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.tsx";
import { MobileProvider } from "./context/mobile-context.tsx";
import ReactGA from "react-ga4";
import "@fontsource/roboto/100.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/roboto/900.css";
import "./index.css";
import { ThemeProvider } from "./context/theme-context.tsx";
import { SnackbarProvider } from "notistack";

ReactGA.initialize("G-ZQW766DHW5");

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <SnackbarProvider>
      <MobileProvider>
        <ThemeProvider>
          <div className="dark:bg-[#121212] dark:text-white font-normal font-roboto">
            <App />
          </div>
        </ThemeProvider>
      </MobileProvider>
    </SnackbarProvider>
  </StrictMode>
);
