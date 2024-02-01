import { PropsWithChildren, createContext, useCallback, useState } from "react";
import { Theme, getTheme, changeTheme } from "./utils";

export interface ThemeContext {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContext>({
  theme: getTheme(),
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: PropsWithChildren): JSX.Element {
  const [theme, setTheme] = useState<Theme>(getTheme());

  const toggleTheme = useCallback(() => {
    changeTheme();
    setTheme(getTheme());
  }, []);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
