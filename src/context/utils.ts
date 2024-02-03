export type Theme = "dark" | "light";

export const THEME_KEY = "qurban-theme";

function getStoredTheme(): Theme | null {
  return window.localStorage.getItem(THEME_KEY) as Theme | null;
}

function getNativeTheme(): Theme {
  return document.documentElement.classList.contains("dark") === true
    ? "dark"
    : "light";
}

export function getTheme(): Theme {
  return getStoredTheme() ?? getNativeTheme();
}

export function setTheme(theme: Theme): void {
  if (theme === "dark") {
    document.documentElement.classList.add("dark");
  }

  if (theme === "light") {
    document.documentElement.classList.remove("dark");
  }

  window.localStorage.setItem(THEME_KEY, theme);
}

export function toggleAppTheme() {
  if (getTheme() === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}
