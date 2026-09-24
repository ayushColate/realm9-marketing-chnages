"use client";

import { useEffect, useState } from "react";
import { contactFormEmbedSrc, type SyngyTheme } from "@/lib/syngy";

/**
 * Realm9's real contact form, hosted on Syngy — the same integration
 * colate/realm9 embeds (see lib/syngy.ts for the origin, form id and the
 * documented styling-param gotcha this embed URL respects).
 *
 * The theme detection mirrors components/theme-toggle.tsx: read on mount to
 * avoid a hydration mismatch, then keep in sync with a MutationObserver on
 * <html data-theme> so the embed's colors follow the site's own toggle
 * without a reload.
 */
export default function ContactForm() {
  const [theme, setTheme] = useState<SyngyTheme>("light");

  useEffect(() => {
    const root = document.documentElement;
    const readTheme = () => setTheme(root.dataset.theme === "dark" ? "dark" : "light");

    readTheme();

    const observer = new MutationObserver(readTheme);
    observer.observe(root, { attributes: true, attributeFilter: ["data-theme"] });
    return () => observer.disconnect();
  }, []);

  return (
    <iframe
      src={contactFormEmbedSrc(theme)}
      title="Contact Realm9"
      loading="lazy"
      style={{ width: "100%", minHeight: 620, border: 0 }}
    />
  );
}
