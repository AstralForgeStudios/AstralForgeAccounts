"use client";

import { useCallback, useEffect, useState } from "react";

export type Theme =
  | "system"
  | "light"
  | "dark";

type UseThemeResult = {
  theme: Theme;
  resolvedTheme: "light" | "dark";

  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;

  isDarkMode: boolean;
};

const STORAGE_KEY = "astralforge-theme";

export function useTheme(): UseThemeResult {
  const [theme, setThemeState] =
    useState<Theme>("system");

  const [resolvedTheme, setResolvedTheme] =
    useState<"light" | "dark">("dark");

  const applyTheme = useCallback(
    (selectedTheme: Theme) => {
      const root = document.documentElement;

      let activeTheme: "light" | "dark";

      if (selectedTheme === "system") {
        activeTheme = window.matchMedia(
          "(prefers-color-scheme: dark)"
        ).matches
          ? "dark"
          : "light";
      } else {
        activeTheme = selectedTheme;
      }

      root.classList.remove("light", "dark");
      root.classList.add(activeTheme);

      setResolvedTheme(activeTheme);
    },
    []
  );

  const setTheme = useCallback(
    (newTheme: Theme) => {
      localStorage.setItem(
        STORAGE_KEY,
        newTheme
      );

      setThemeState(newTheme);
      applyTheme(newTheme);
    },
    [applyTheme]
  );

  const toggleTheme = useCallback(() => {
    setTheme(
      resolvedTheme === "dark"
        ? "light"
        : "dark"
    );
  }, [resolvedTheme, setTheme]);

  useEffect(() => {
    const storedTheme =
      (localStorage.getItem(
        STORAGE_KEY
      ) as Theme | null) ?? "system";

    setThemeState(storedTheme);
    applyTheme(storedTheme);

    const mediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );

    const handleChange = () => {
      if (storedTheme === "system") {
        applyTheme("system");
      }
    };

    mediaQuery.addEventListener(
      "change",
      handleChange
    );

    return () => {
      mediaQuery.removeEventListener(
        "change",
        handleChange
      );
    };
  }, [applyTheme]);

  return {
    theme,
    resolvedTheme,

    setTheme,
    toggleTheme,

    isDarkMode: resolvedTheme === "dark",
  };
}