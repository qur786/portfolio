import { ThemeContext } from "../context/context";
import { useContext } from "react";

export function useTheme(): ThemeContext {
  return useContext(ThemeContext);
}
