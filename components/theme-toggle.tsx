"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

const STORAGE_KEY = "realm9-theme";

function getTheme(): Theme {
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    setTheme(getTheme());
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    window.localStorage.setItem(STORAGE_KEY, nextTheme);
    setTheme(nextTheme);
  }

  const isDark = theme === "dark";
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <button className="theme-toggle" type="button" onClick={toggleTheme} aria-label={label} title={label}>
      {isDark ? (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <circle cx="10" cy="10" r="3.5" />
          <path d="M10 1.75v2M10 16.25v2M18.25 10h-2M3.75 10h-2M15.83 4.17l-1.42 1.42M5.59 14.41l-1.42 1.42M15.83 15.83l-1.42-1.42M5.59 5.59L4.17 4.17" />
        </svg>
      ) : (
        <svg viewBox="0 0 20 20" aria-hidden="true">
          <path d="M16.65 12.37A6.75 6.75 0 0 1 7.63 3.35 6.75 6.75 0 1 0 16.65 12.37Z" />
        </svg>
      )}
    </button>
  );
}
