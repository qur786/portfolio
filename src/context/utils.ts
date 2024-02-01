export type Theme = "dark" | "light";

export function getTheme(): Theme {
  return document.documentElement.classList.contains("dark") === true
    ? "dark"
    : "light";
}

export function changeTheme() {
  document.documentElement.classList.toggle("dark");
}
