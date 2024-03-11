import { useContext } from "react";
import { ThemeContext } from "../context/theme-context";

export function useTheme(): ThemeContext {
  return useContext(ThemeContext);
}
