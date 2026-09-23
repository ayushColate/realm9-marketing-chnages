"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV, type NavLink as NL } from "@/lib/nav";
import { Logo, Chevron } from "./icons";
import { TagBadge } from "./sections";

function MegaLink({ item }: { item: NL }) {
  return (
    <Link className="mlink" href={item.href}>
      <span className="ico">{item.icon}</span>
      <span>
        <strong>{item.title}<TagBadge tag={item.tag} /></strong>
        <span>{item.desc}</span>
      </span>
    </Link>
  );
}

export default function Nav() {
  const [open, setOpen] = useState<number | null>(null);
  const [mobile, setMobile] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const pathname = usePathname();

  useEffect(() => { setOpen(null); setMobile(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobile ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobile]);

  useEffect(() => {
    const close = () => setOpen(null);
    const esc = (e: KeyboardEvent) => { if (e.key === "Escape") { setOpen(null); setMobile(false); } };
    document.addEventListener("click", close);
    document.addEventListener("keydown", esc);
    return () => { document.removeEventListener("click", close); document.removeEventListener("keydown", esc); };
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav-inner">
          <Link className="logo" href="/"><Logo />Realm9</Link>

          <div className="nav-links">
            {NAV.map((entry, i) =>
              entry.href ? (
                <div className="nav-item" key={entry.label}>
                  <Link className="nav-btn" href={entry.href}>{entry.label}</Link>
                </div>
              ) : (
                <div
                  className={`nav-item ${open === i ? "open" : ""}`}
                  key={entry.label}
                  onMouseEnter={() => { clearTimeout(timer.current); if (window.innerWidth >= 880) setOpen(i); }}
                  onMouseLeave={() => { timer.current = setTimeout(() => setOpen(null), 140); }}
                >
                  <button
                    className="nav-btn"
                    aria-expanded={open === i}
                    onClick={(e) => { e.stopPropagation(); setOpen(open === i ? null : i); }}
                  >
                    {entry.label}<Chevron />
                  </button>
                  <div className={`mega ${entry.wide ? "wide" : ""}`} onClick={(e) => e.stopPropagation()}>
                    {entry.groups?.map((g) => (
                      <div key={g.head} style={{ display: "contents" }}>
                        <div className="mega-head">{g.head}</div>
                        {g.items.map((it) => <MegaLink key={it.href} item={it} />)}
                      </div>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>

          <div className="nav-right">
            <Link className="btn btn-ghost btn-sm" href="/enterprise/contact">Contact</Link>
            <Link className="btn btn-secondary btn-sm" href="/pricing">Sign in</Link>
            <Link className="btn btn-primary btn-sm" href="/pricing">Start free</Link>
            <button className="burger" aria-label="Menu" aria-expanded={mobile}
              onClick={(e) => { e.stopPropagation(); setMobile(!mobile); }}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                {mobile ? <path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /> : <path d="M2 4.5h12M2 11.5h12" />}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div className={`mobile-menu ${mobile ? "open" : ""}`}>
        {NAV.map((entry) =>
          entry.href ? (
            <div className="mm-group" key={entry.label}><Link href={entry.href}>{entry.label}</Link></div>
          ) : (
            entry.groups?.map((g) => (
              <div className="mm-group" key={entry.label + g.head}>
                <b>{g.head}</b>
                {g.items.map((it) => (
                  <Link href={it.href} key={it.href}>
                    <span className="ico" style={{ width: 18, height: 18, color: "var(--fg-3)" }}>{it.icon}</span>
                    {it.title}<TagBadge tag={it.tag} />
                  </Link>
                ))}
              </div>
            ))
          )
        )}
        <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
          <Link className="btn btn-secondary" style={{ flex: 1 }} href="/enterprise/contact">Contact</Link>
          <Link className="btn btn-primary" style={{ flex: 1 }} href="/pricing">Start free</Link>
        </div>
      </div>
    </>
  );
}
