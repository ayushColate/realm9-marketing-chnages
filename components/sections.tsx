import Link from "next/link";
import type { ReactElement, ReactNode } from "react";
import type { Tag } from "@/lib/nav";

export const TagBadge = ({ tag }: { tag?: Tag }) => {
  if (!tag) return null;
  const map = { new: ["tag-new", "New"], soon: ["tag-soon", "Coming soon"], beta: ["tag-beta", "Beta"] } as const;
  const [cls, label] = map[tag];
  return <i className={`tag ${cls}`}>{label}</i>;
};

export interface Cta { label: string; href: string }

export function Hero({ eyebrow, badge, title, sub, ctas = [], accent }: {
  eyebrow?: string; badge?: string; title: string; sub?: string; ctas?: Cta[]; accent?: string;
}) {
  const glow = accent
    ? { background: `radial-gradient(50% 50% at 50% 50%, ${accent}1c 0%, ${accent}0d 44%, transparent 72%)` }
    : undefined;
  return (
    <section className="hero" style={accent ? ({ ["--acc" as string]: accent }) : undefined}>
      <div className="hero-bg" aria-hidden>
        <div className="hero-grid" />
        <div className="hero-glow" style={glow} />
      </div>
      <div className="wrap hero-content">
        {eyebrow && <div className="eyebrow rise">{badge && <b>{badge}</b>}{eyebrow}</div>}
        <h1 className="grad rise">{title}</h1>
        {sub && <p className="hero-sub rise">{sub}</p>}
        {ctas.length > 0 && (
          <div className="btn-row rise">
            {ctas.map((c, i) => (
              <Link key={c.href + i} className={`btn btn-lg ${i === 0 ? "btn-primary" : "btn-secondary"}`} href={c.href}>{c.label}</Link>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export function SectionHead({ title, sub, center }: { title: string; sub?: string; center?: boolean }) {
  return (
    <div className={center ? "center" : ""} style={{ marginBottom: 40, ...(center ? { maxWidth: 640, marginLeft: "auto", marginRight: "auto" } : {}) }}>
      <h2 className="grad">{title}</h2>
      {sub && <p className="lede" style={{ marginTop: 14, ...(center ? { marginLeft: "auto", marginRight: "auto" } : {}) }}>{sub}</p>}
    </div>
  );
}

export interface CardItem { title: string; desc: string; icon?: ReactElement; accent?: string; tag?: Tag; href?: string }

export function Cards({ items, cols = 3 }: { items: CardItem[]; cols?: 2 | 3 | 4 }) {
  return (
    <div className={`grid g${cols}`}>
      {items.map((c) => {
        const inner = (
          <>
            {c.icon && <span className="ico">{c.icon}</span>}
            <h4>{c.title}<TagBadge tag={c.tag} /></h4>
            <p>{c.desc}</p>
          </>
        );
        const cls = `card ${c.accent ? "card-accent" : ""}`;
        const style = c.accent ? ({ ["--acc" as string]: c.accent }) : undefined;
        return c.href
          ? <Link key={c.title} className={cls} style={style} href={c.href}>{inner}</Link>
          : <div key={c.title} className={cls} style={style}>{inner}</div>;
      })}
    </div>
  );
}

export function StatBand({ stats }: { stats: { n: string; l: string }[] }) {
  return (
    <div className="stat-band">
      {stats.map((s) => <div className="stat" key={s.n + s.l}><b>{s.n}</b><span>{s.l}</span></div>)}
    </div>
  );
}

export function Term({ title, html }: { title: string; html: string }) {
  return (
    <div className="term">
      <div className="term-bar"><i className="dot" /><i className="dot" /><i className="dot" /><span className="term-title">{title}</span></div>
      <div className="term-body" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export function FeatureRow({ title, body, bullets = [], media, flip, accent = "var(--blue)" }: {
  title: string; body: string; bullets?: string[]; media?: ReactNode; flip?: boolean; accent?: string;
}) {
  return (
    <div className={`feature-row ${flip ? "flip" : ""}`} style={{ ["--acc" as string]: accent }}>
      <div>
        <h3 style={{ marginBottom: 14 }}>{title}</h3>
        <p className="lede" style={{ fontSize: 16 }}>{body}</p>
        {bullets.length > 0 && (
          <ul className="bullets" style={{ marginTop: 24 }}>{bullets.map((b) => <li key={b}>{b}</li>)}</ul>
        )}
      </div>
      {media && <div className="fr-media">{media}</div>}
    </div>
  );
}

export function CtaBand({ title, sub, primary, secondary }: { title: string; sub: string; primary: Cta; secondary: Cta }) {
  return (
    <section className="pad"><div className="wrap">
      <div className="callout center" style={{ padding: "56px 30px" }}>
        <h2 className="grad">{title}</h2>
        <p className="lede" style={{ margin: "14px auto 0" }}>{sub}</p>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: 28 }}>
          <Link className="btn btn-lg btn-primary" href={primary.href}>{primary.label}</Link>
          <Link className="btn btn-lg btn-secondary" href={secondary.href}>{secondary.label}</Link>
        </div>
      </div>
    </div></section>
  );
}

export function Section({ children, alt, className = "pad" }: { children: ReactNode; alt?: boolean; className?: string }) {
  return <section className={`${className} ${alt ? "alt" : ""}`}><div className="wrap">{children}</div></section>;
}
