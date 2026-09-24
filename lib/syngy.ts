/**
 * Syngy contact-form integration.
 *
 * Realm9's real, working contact form. colate/realm9 embeds this exact
 * form (origin + form id below, copied verbatim from
 * colate/realm9/lib/syngy.ts and colate/realm9/app/contact/contact-experience.tsx)
 * as an iframe rather than a local form that posts nowhere. Both values are
 * public — they ship in every visitor's page source — so there is nothing to
 * keep secret or move into an env var.
 */

/** Where the Syngy embed SDK is served from. */
export const SYNGY_ORIGIN = "https://syngy.io";

/** Realm9's contact-form id on Syngy. */
export const SYNGY_CONTACT_FORM_ID = "f436c88b-a742-47dd-8ee2-1ea567f158a5";

export type SyngyTheme = "light" | "dark";

/**
 * Colors for each mode, drawn from this site's own design tokens
 * (app/globals.css :root and [data-theme="dark"]) — not colate/realm9's
 * fixed dark-only palette, since this site supports both themes live.
 */
const THEME_COLORS: Record<SyngyTheme, {
  accent: string; accentHover: string; text: string; textLight: string; inputBg: string; inputBorder: string;
}> = {
  light: {
    accent: "5048E5",      // --blue
    accentHover: "3d37b8", // --blue-2
    text: "0a0a0a",        // --fg
    textLight: "8f8f8f",   // --fg-3
    inputBg: "fafafa",     // --bg-1
    inputBorder: "d1d1d1", // ~--line-2 on light
  },
  dark: {
    accent: "6c64ea",      // --blue
    accentHover: "857eef", // --blue-2
    text: "f5f7fb",        // --fg
    textLight: "9299a8",   // --fg-3
    inputBg: "171a23",     // --bg-2
    inputBorder: "333a4d", // ~--line-2 on dark
  },
};

/**
 * Builds the embed URL for the given theme.
 *
 * The embed ignores every styling param unless `accent` is present, and
 * passing any subset of params resets the form's SAVED style for the
 * OTHERS back to their defaults — both verified against the embed by
 * colate/realm9 (see its lib/syngy.ts / contact-experience.tsx comments).
 * So the full set below is always passed together, never partially.
 */
export function contactFormEmbedSrc(theme: SyngyTheme): string {
  const c = THEME_COLORS[theme];
  const params = new URLSearchParams({
    accent: c.accent,
    accentHover: c.accentHover,
    bg: "00000000", // 8-digit hex = transparent, so the surrounding card shows through
    text: c.text,
    textLight: c.textLight,
    inputBg: c.inputBg,
    inputBorder: c.inputBorder,
    radius: "10", // matches this site's --r token
  });
  return `${SYNGY_ORIGIN}/embed/forms/${SYNGY_CONTACT_FORM_ID}?${params.toString()}`;
}
