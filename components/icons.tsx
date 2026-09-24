import type { ReactElement } from "react";

const s = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const Icons: Record<string, ReactElement> = {
  env: <svg viewBox="0 0 24 24" {...s}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M8 4v5"/><circle cx="16.5" cy="14.5" r="2"/></svg>,
  infra: <svg viewBox="0 0 24 24" {...s}><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/><path d="M10 6.5h4M6.5 10v4M17.5 10v4M10 17.5h4"/></svg>,
  finops: <svg viewBox="0 0 24 24" {...s}><path d="M3 17l5-5 3.5 3.5L21 6"/><path d="M15 6h6v6"/></svg>,
  release: <svg viewBox="0 0 24 24" {...s}><path d="M12 2l3 6 6 .9-4.4 4.2 1.1 6.1L12 16.4 6.3 19.2l1.1-6.1L3 8.9 9 8z"/></svg>,
  mcp: <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="3"/><circle cx="5" cy="6" r="2"/><circle cx="19" cy="6" r="2"/><circle cx="5" cy="18" r="2"/><circle cx="19" cy="18" r="2"/><path d="M6.6 7.4l3 3M17.4 7.4l-3 3M6.6 16.6l3-3M17.4 16.6l-3-3"/></svg>,
  r9: <svg viewBox="0 0 24 24" {...s}><path d="M12 3l1.9 5.3L19 10l-5.1 1.7L12 17l-1.9-5.3L5 10l5.1-1.7z"/><path d="M18.5 16.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7z"/></svg>,
  sandbox: <svg viewBox="0 0 24 24" {...s}><path d="M12 2.8l8 4.4v9.6l-8 4.4-8-4.4V7.2z"/><path d="M4 7.2l8 4.4 8-4.4M12 11.6V21"/></svg>,
  agent: <svg viewBox="0 0 24 24" {...s}><rect x="4" y="7" width="16" height="12" rx="3"/><path d="M12 3v4M8.5 12.5v1.5M15.5 12.5v1.5"/><path d="M2 12v3M22 12v3"/></svg>,
  aiops: <svg viewBox="0 0 24 24" {...s}><path d="M3 12h3l2.5 6 5-14L16 12h5"/></svg>,
  dc: <svg viewBox="0 0 24 24" {...s}><rect x="3" y="4" width="18" height="5" rx="1.5"/><rect x="3" y="14" width="18" height="5" rx="1.5"/><path d="M7 6.5h.01M7 16.5h.01M11 6.5h.01M11 16.5h.01"/></svg>,
  gpu: <svg viewBox="0 0 24 24" {...s}><rect x="4" y="6" width="16" height="12" rx="2"/><rect x="8" y="10" width="8" height="4" rx="1"/><path d="M8 6V3M16 6V3M8 21v-3M16 21v-3"/></svg>,
  cases: <svg viewBox="0 0 24 24" {...s}><rect x="3" y="7" width="18" height="13" rx="2"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7"/></svg>,
  shield: <svg viewBox="0 0 24 24" {...s}><path d="M12 3l7.5 3v6c0 4.4-3.1 8.2-7.5 9.4C7.6 20.2 4.5 16.4 4.5 12V6z"/><path d="M9.3 12.2l1.9 1.9 3.6-3.8"/></svg>,
  mail: <svg viewBox="0 0 24 24" {...s}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>,
  rocket: <svg viewBox="0 0 24 24" {...s}><path d="M12.5 3.5c3.5 0 7 3.5 7 7 0 4-3.4 7.3-6.5 9L10 17l-4-4 1.5-3c1.7-3.1 5-6.5 9-6.5z"/><circle cx="13" cy="9.5" r="1.6"/><path d="M6.5 14C5 15 4.5 17.5 4.5 19.5c2 0 4.5-.5 5.5-2"/></svg>,
  lock: <svg viewBox="0 0 24 24" {...s}><rect x="4.5" y="10" width="15" height="10" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3"/></svg>,
  clock: <svg viewBox="0 0 24 24" {...s}><circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 2"/></svg>,
  ledger: <svg viewBox="0 0 24 24" {...s}><path d="M5 3.5h11l3 3V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V4.5a1 1 0 0 1 1-1z"/><path d="M8 9h7M8 13h7M8 17h4"/></svg>,
};

export const Logo = () => (
  <svg className="realm9-wordmark" viewBox="0 0 174 52" role="img" aria-label="Realm9">
    <text x="0" y="40" fill="currentColor" fontFamily="Arial, Helvetica, sans-serif" fontSize="46" fontWeight="700" letterSpacing="-3.2">realm</text>
    <path d="M130 10.5c4.6-5.7 12.5-7.3 18.9-3.7 7.3 4.1 9.9 13.4 5.8 20.7l-11.4 20.2h-10.5l9.3-16.2a16 16 0 0 1-6.7 1.5c-10.1 0-17.4-8.4-15.9-18.5.5-3.1 2-6 4.5-8.2a3.3 3.3 0 1 1 4.4 4.9c-1.1 1-1.9 2.3-2.1 3.8-.7 4.6 2.7 9 7.4 9.5 4.6.5 8.8-2.7 9.5-7.3.4-2.8-.6-5.5-2.8-7.2-2.2-1.7-5.3-1.9-7.7-.4l-2.7-4.5z" fill="#8253e8"/>
    <path d="M126.5 3.5v9M122 8h9" stroke="#b58cff" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

export const Chevron = () => (
  <svg className="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M3 4.5L6 7.5 9 4.5"/>
  </svg>
);
