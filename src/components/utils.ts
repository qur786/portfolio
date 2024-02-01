export function isDarkMode(): boolean {
  return document.documentElement.classList.contains("dark");
}

export function toggleTheme() {
  document.documentElement.classList.toggle("dark");
}
