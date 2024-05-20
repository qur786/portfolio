import { App } from "./App.tsx";
import ReactDOM from "react-dom/client";
import ReactGA from "react-ga4";
import { SnackbarProvider } from "notistack";
import { StrictMode } from "react";
import { ThemeProvider } from "./context/theme-context.tsx";
import "@fontsource/roboto/latin.css";
import "./index.css";
import "@fontsource/barlow"; // Defaults to weight 400
import "@fontsource/barlow/100.css"; // Specify weight
import "@fontsource/barlow/200.css"; // Specify weight
import "@fontsource/barlow/300.css"; // Specify weight
import "@fontsource/barlow/400.css"; // Specify weight
import "@fontsource/barlow/500.css"; // Specify weight
import "@fontsource/barlow/600.css"; // Specify weight
import "@fontsource/barlow/700.css"; // Specify weight
import "@fontsource/barlow/800.css"; // Specify weight
import "@fontsource/barlow/900.css"; // Specify weight

ReactGA.initialize("G-ZQW766DHW5");

ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <StrictMode>
    <SnackbarProvider>
      <ThemeProvider>
        <div className="dark:bg-[#121212] dark:text-white font-normal font-barlow">
          <App />
        </div>
      </ThemeProvider>
    </SnackbarProvider>
  </StrictMode>,
);
