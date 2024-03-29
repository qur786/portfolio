import { App } from "./App.tsx";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import { ThemeProvider } from "./context/theme-context.tsx";
import "@fontsource/roboto/latin.css";
import "./index.css";

ReactGA.initialize("G-ZQW766DHW5");

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <SnackbarProvider>
      <ThemeProvider>
        <div className="dark:bg-[#121212] dark:text-white font-normal font-roboto">
          <App />
        </div>
      </ThemeProvider>
    </SnackbarProvider>
  </StrictMode>,
);
