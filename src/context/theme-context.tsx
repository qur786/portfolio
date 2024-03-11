import type { PropsWithChildren } from "react";
import type { Theme } from "./utils";
import { createContext, useCallback, useLayoutEffect, useState } from "react";
import { getTheme, setTheme as setAppTheme, toggleAppTheme } from "./utils";

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

export function ThemeProvider({ children }: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useState<Theme>(getTheme());

  const toggleTheme = useCallback(() => {
    toggleAppTheme();
    setTheme(getTheme());
  }, []);

  useLayoutEffect(() => {
    setAppTheme(theme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Update theme only one for the first time as per 'getTheme'

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
