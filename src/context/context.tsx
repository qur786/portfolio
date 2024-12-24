import type { Theme } from "./utils";
import { createContext } from "react";
import { getTheme } from "./utils";

export interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: getTheme(),
  toggleTheme: () => {
    console.log("Provider did not setup correcttly.");
  },
});
