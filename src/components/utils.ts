export const Links = {
  Home: "home",
  Contact: "contact",
  Projects: "projects",
  Title: "title",
  About: "about",
} as const;

export type Links = typeof Links[keyof typeof Links];
