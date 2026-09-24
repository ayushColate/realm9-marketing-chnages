"use client";

import { useState } from "react";
import { R9_TEMPLATES, R9_DEFAULT, R9_EXAMPLES, type R9Result } from "@/lib/r9-templates";

type Pane = "tf" | "policy" | "cost";

export default function R9Demo() {
  const [value, setValue] = useState("");
  const [pane, setPane] = useState<Pane>("tf");
  const [result, setResult] = useState<R9Result | null>(null);
  const [status, setStatus] = useState("Proposes a change. Nothing is applied.");
  const [busy, setBusy] = useState(false);

  const placeholder =
    "Add a staging environment for the payments API — Postgres, Redis and two app nodes in eu-west-1";

  function generate(prompt?: string) {
    const q = (prompt ?? value ?? "").toLowerCase() || placeholder.toLowerCase();
    const tpl = R9_TEMPLATES.find((t) => t.match.some((m) => q.includes(m))) ?? R9_DEFAULT;
    setBusy(true);
    setResult(null);
    setStatus("Reading project files…");
    setTimeout(() => setStatus("Checking against policy profile…"), 420);
    setTimeout(() => {
      setResult(tpl);
      setPane("tf");
      setBusy(false);
      setStatus("Change proposed. Nothing has been committed or applied.");
    }, 900);
  }

  const tabs: [Pane, string][] = [["tf", "main.tf"], ["policy", "policy report"], ["cost", "cost estimate"]];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <div className="r9-shell">
        <div className="r9-prompt">
          <textarea
            className="r9-input"
            rows={2}
            value={value}
            placeholder={placeholder}
            aria-label="Describe the infrastructure you need"
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); generate(); } }}
          />
          <div className="r9-actions">
            <button className="btn btn-primary btn-sm" onClick={() => generate()} disabled={busy}>
              {busy ? "Working…" : "Propose change"}
            </button>
            <span className="small">{status}</span>
          </div>
        </div>

        {result && (
          <div className="r9-out show">
            <div className="r9-tabs" role="tablist">
              {tabs.map(([id, label]) => (
                <button key={id} role="tab" aria-selected={pane === id}
                  className={`r9-tab ${pane === id ? "active" : ""}`} onClick={() => setPane(id)}>
                  {label}
                </button>
              ))}
            </div>
            <div className="r9-pane active" dangerouslySetInnerHTML={{ __html: result[pane] }} />
          </div>
        )}
      </div>

      <div className="chips">
        {R9_EXAMPLES.map((ex) => (
          <button className="chip" key={ex.label}
            onClick={() => { setValue(ex.prompt); generate(ex.prompt); }}>
            {ex.label}
          </button>
        ))}
      </div>

      <p className="small" style={{ marginTop: 20 }}>
        This is a simplified illustration with sample output. In the product, R9 works on the files of your own
        Terraform project, and changes are checked by your project&apos;s policies before they are applied.
      </p>
    </div>
  );
}
