// src/types/theme.ts

export type Theme =
  | "system"
  | "light"
  | "dark";

export type ThemeMode =
  | "light"
  | "dark";

export type ThemeOption = {
  id: Theme;

  name: string;
  description: string;
};

export type ThemeSettings = {
  theme: Theme;

  resolvedTheme: ThemeMode;
};

export const THEMES = {
  SYSTEM: "system",
  LIGHT: "light",
  DARK: "dark",
} as const;

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: "system",
    name: "System",
    description:
      "Match your device appearance settings.",
  },

  {
    id: "light",
    name: "Light",
    description:
      "Light theme for Astral Forge.",
  },

  {
    id: "dark",
    name: "Dark",
    description:
      "Dark theme for Astral Forge.",
  },
];