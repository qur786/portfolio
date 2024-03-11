import { ThemeContext } from "../context/theme-context";
import { useContext } from "react";

export function useTheme(): ThemeContext {
  return useContext(ThemeContext);
}
