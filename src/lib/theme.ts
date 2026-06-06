// src/lib/theme.ts

export const THEMES = {
  SYSTEM: "system",
  LIGHT: "light",
  DARK: "dark",
} as const;

export type Theme =
  (typeof THEMES)[keyof typeof THEMES];

export const THEME_OPTIONS = [
  {
    id: THEMES.SYSTEM,
    name: "System",
    description:
      "Automatically match your device theme.",
  },

  {
    id: THEMES.LIGHT,
    name: "Light",
    description:
      "Light appearance for Astral Forge.",
  },

  {
    id: THEMES.DARK,
    name: "Dark",
    description:
      "Dark appearance for Astral Forge.",
  },
] as const;

export const THEME_STORAGE_KEY =
  "astralforge-theme";

export function isValidTheme(
  value: string
): value is Theme {
  return Object.values(THEMES).includes(
    value as Theme
  );
}

export function getSystemTheme():
  | "light"
  | "dark" {
  if (typeof window === "undefined") {
    return "dark";
  }

  return window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches
    ? "dark"
    : "light";
}

export function resolveTheme(
  theme: Theme
): "light" | "dark" {
  if (theme === THEMES.SYSTEM) {
    return getSystemTheme();
  }

  return theme;
}

export function applyTheme(
  theme: Theme
): void {
  if (typeof document === "undefined") {
    return;
  }

  const resolvedTheme =
    resolveTheme(theme);

  document.documentElement.classList.remove(
    "light",
    "dark"
  );

  document.documentElement.classList.add(
    resolvedTheme
  );
}

export function saveTheme(
  theme: Theme
): void {
  if (typeof window === "undefined") {
    return;
  }

  localStorage.setItem(
    THEME_STORAGE_KEY,
    theme
  );
}

export function loadTheme(): Theme {
  if (typeof window === "undefined") {
    return THEMES.SYSTEM;
  }

  const storedTheme =
    localStorage.getItem(
      THEME_STORAGE_KEY
    );

  if (
    storedTheme &&
    isValidTheme(storedTheme)
  ) {
    return storedTheme;
  }

  return THEMES.SYSTEM;
}