import { Hero } from "./sections";
import Waitlist from "./waitlist";

export default function ComingSoon({ title, sub, accent, when, what, why }: {
  title: string; sub: string; accent: string; when: string; what: string[]; why: string;
}) {
  return (
    <>
      <Hero eyebrow="Roadmap" title={title} sub={sub} accent={accent} />
      <section className="pad"><div className="wrap">
        <div style={{ maxWidth: 760 }}>
          <div className="soon-badge"><i className="blink" />In development · {when}</div>
          <h2 className="grad" style={{ marginBottom: 16 }}>What it will do</h2>
          <ul className="bullets" style={{ ["--acc" as string]: accent }}>
            {what.map((w) => <li key={w}>{w}</li>)}
          </ul>
          <div className="callout" style={{ marginTop: 40 }}>
            <h4 style={{ marginBottom: 10 }}>Why we&apos;re building it</h4>
            <p className="small" style={{ fontSize: 14, lineHeight: 1.65 }}>{why}</p>
          </div>
          <div style={{ marginTop: 36 }}>
            <h4 style={{ marginBottom: 6 }}>Get early access</h4>
            <p className="small">We onboard design partners in small cohorts. Tell us what you run and we&apos;ll be in touch.</p>
            <Waitlist />
          </div>
        </div>
      </div></section>
    </>
  );
}
