"use client";

import { useState } from "react";
import { Button } from "./ui/Button";

type Capability = {
  id: string;
  label: string;
  accent: string;
  accentHex: string;
  iconPath: React.ReactNode;
  headline: string;
  description: string;
  bullets: string[];
  metrics: { label: string; value: string; emphasized?: boolean }[];
  agentMessage: string;
  sparkline: number[];
};

const personas: Capability[] = [
  {
    id: "visibility",
    label: "Visibility",
    accent: "bg-accent-mint",
    accentHex: "#7ad28a",
    iconPath: (
      <>
        <circle cx="9" cy="9" r="6.4" stroke="currentColor" strokeWidth="1.5" />
        <path d="M2.6 9H15.4 M9 2.6C10.8 4.7 11.8 6.8 11.8 9s-1 4.3-2.8 6.4M9 2.6C7.2 4.7 6.2 6.8 6.2 9s1 4.3 2.8 6.4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </>
    ),
    headline: "Your practice appears first — everywhere patients are searching.",
    description:
      "On Google Search, Google Maps, AI-generated results, and every platform where patients are actively looking for a dentist.",
    bullets: [
      "Top-of-page Google Search placement",
      "Google Maps 3-pack dominance",
      "AI / AEO answer engine visibility",
    ],
    metrics: [
      { label: "Search rank", value: "#1–3", emphasized: true },
      { label: "Map pack", value: "Top 3" },
      { label: "AI mentions", value: "+412%" },
      { label: "Impressions", value: "38.2k", emphasized: true },
    ],
    agentMessage:
      "Visibility agent surfaced 4 new keyword opportunities for this market.",
    sparkline: [12, 18, 22, 28, 32, 30, 38, 42, 48, 55, 62, 68],
  },
  {
    id: "speed-to-lead",
    label: "Speed-to-Lead",
    accent: "bg-accent-blush",
    accentHex: "#f8a89a",
    iconPath: (
      <>
        <path d="M10 2L4 11h4l-1 5 6-9h-4l1-5z" fill="currentColor" />
      </>
    ),
    headline: "Every inquiry gets an intelligent reply in under 60 seconds.",
    description:
      "Day or night, whether your front desk is available or not — personalized, automated, never missed.",
    bullets: [
      "Sub-60-second AI response",
      "24/7 coverage across calls, text & chat",
      "Personalized replies, not boilerplate",
    ],
    metrics: [
      { label: "Avg response", value: "47s", emphasized: true },
      { label: "Coverage", value: "24 / 7" },
      { label: "Missed", value: "0" },
      { label: "Convert rate", value: "62%", emphasized: true },
    ],
    agentMessage:
      "Front-desk agent answered 23 inquiries overnight · 19 booked.",
    sparkline: [80, 75, 70, 60, 55, 50, 48, 47, 47, 46, 47, 47],
  },
  {
    id: "conversion",
    label: "Conversion",
    accent: "bg-accent-butter",
    accentHex: "#f5cf5a",
    iconPath: (
      <>
        <path d="M2 3h14L11 10v6l-4-2v-4L2 3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      </>
    ),
    headline: "Clicks don't pay production. Booked chairs do.",
    description:
      "We engineer the landing pages, follow-up sequences, and appointment funnels that turn interest into a booked appointment.",
    bullets: [
      "High-intent landing pages",
      "Multi-touch follow-up sequences",
      "Smart booking funnels",
    ],
    metrics: [
      { label: "Booked rate", value: "84%", emphasized: true },
      { label: "Drop-off", value: "−61%" },
      { label: "Cost / booked", value: "$48" },
      { label: "Funnel time", value: "3m 12s", emphasized: true },
    ],
    agentMessage:
      "Conversion agent A/B-launched 2 landing-page variants · winner: +18%.",
    sparkline: [40, 48, 52, 58, 60, 65, 70, 72, 78, 80, 82, 84],
  },
  {
    id: "reputation",
    label: "Reputation",
    accent: "bg-accent-sky",
    accentHex: "#7bb6dc",
    iconPath: (
      <>
        <path d="M9 1l2.2 5L17 6.5l-4.2 3.7 1.3 5.7L9 13l-5.1 2.9 1.3-5.7L1 6.5 6.8 6 9 1z" fill="currentColor" />
      </>
    ),
    headline: "An always-on reputation engine.",
    description:
      "Reviews generated, responded to, and amplified across the signals that influence both patients and Google.",
    bullets: [
      "Automated 5★ review requests",
      "AI-drafted, human-tone responses",
      "Sentiment & trend monitoring",
    ],
    metrics: [
      { label: "Rating", value: "4.9★", emphasized: true },
      { label: "Reviews", value: "1,247" },
      { label: "This week", value: "+38" },
      { label: "Response time", value: "< 1h", emphasized: true },
    ],
    agentMessage:
      "Reputation agent drafted 12 review responses for your approval.",
    sparkline: [4.4, 4.5, 4.5, 4.6, 4.6, 4.7, 4.7, 4.8, 4.8, 4.9, 4.9, 4.9].map(
      (v) => (v - 4) * 100,
    ),
  },
  {
    id: "retention",
    label: "Retention & Referral",
    accent: "bg-accent-lavender",
    accentHex: "#b9a8e4",
    iconPath: (
      <>
        <path d="M9 16s-6-3.5-6-8.5C3 4.5 5.5 2.5 9 5c3.5-2.5 6-.5 6 2.5 0 5-6 8.5-6 8.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" fill="none" />
      </>
    ),
    headline: "Your existing patients are your most powerful growth channel.",
    description:
      "Automated recall, reactivation, and referral systems that turn a one-time visit into a lifetime of production.",
    bullets: [
      "Smart recall · nightly outreach",
      "Dormant-patient reactivation",
      "Referral rewards & tracking",
    ],
    metrics: [
      { label: "Recall rate", value: "92%", emphasized: true },
      { label: "Reactivated", value: "186" },
      { label: "Referrals", value: "+54 / mo" },
      { label: "LTV lift", value: "+31%", emphasized: true },
    ],
    agentMessage:
      "Retention agent re-engaged 186 dormant patients · 47 booked.",
    sparkline: [55, 60, 65, 68, 72, 75, 78, 82, 84, 86, 90, 92],
  },
  {
    id: "dashboard",
    label: "Dashboard",
    accent: "bg-brand-100",
    accentHex: "#a596e3",
    iconPath: (
      <>
        <path d="M2 13L6 7L9 10L14 3 M10.5 3H14V6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      </>
    ),
    headline: "See exactly what your marketing is producing.",
    description:
      "Every lead, call, chat, form submission, and campaign result tracked in real time — so you always know exactly what your marketing is producing.",
    bullets: [
      "Live source-to-chair attribution",
      "Real-time ROI by channel",
      "No agency-speak — just dollars",
    ],
    metrics: [
      { label: "Pipeline", value: "+38%", emphasized: true },
      { label: "ROAS", value: "6.4×" },
      { label: "New patients", value: "126" },
      { label: "Booked / web", value: "84%", emphasized: true },
    ],
    agentMessage:
      "Dashboard refreshed · 4 channels tracked · last sync 12s ago.",
    sparkline: [20, 25, 35, 30, 42, 50, 48, 58, 65, 70, 78, 88],
  },
];

export function Solutions() {
  const [active, setActive] = useState(personas[0].id);
  const current = personas.find((p) => p.id === active) ?? personas[0];
  const activeIndex = personas.findIndex((p) => p.id === active);

  return (
    <section
      id="solutions"
      className="relative isolate overflow-hidden py-20 md:py-28 text-white"
      style={{
        background:
          "linear-gradient(135deg, #0B3754 0%, #104A6F 45%, #2A2670 100%)",
      }}
    >
      {/* Grid pattern overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 70% at 50% 40%, black 30%, transparent 95%)",
        }}
      />
      {/* Glow accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full blur-3xl opacity-40 -z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(132,112,213,0.55), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-35 -z-[1]"
        style={{
          background:
            "radial-gradient(circle, rgba(75,180,220,0.45), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden />
            Built for every seat in the practice
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[64px] leading-[1.04] font-semibold tracking-[-0.028em] text-white">
            <span className="block lg:whitespace-nowrap">
              One{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic" style={{ color: "#F37021" }}>System</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter/40"
                  style={{ filter: "blur(0.5px)" }}
                />
              </span>
              . Every Patient Touchpoint.
            </span>
            <span className="block">Nothing Disconnected.</span>
          </h2>
          <div className="mx-auto mt-5 max-w-2xl space-y-4 text-[16px] md:text-[17px] leading-[1.6] text-white/85">
            <p className="font-semibold text-white text-[18px] md:text-[19px]">
              Most agencies sell you a service.{" "}
              <span className="text-brand-300">PRACPROS builds you a system.</span>
            </p>
            <p>
              There&rsquo;s a fundamental difference between hiring an agency
              to run your ads and building a connected growth infrastructure
              that spans every moment in a patient&rsquo;s decision journey —
              from the first Google search to the booked appointment to the
              five-star review they leave afterward.
            </p>
            <p className="font-medium text-white/90">
              The PRACPROS system connects six capabilities into one operating
              engine for your practice:
            </p>
          </div>
        </div>

        {/* Connected step indicator — tabs with icons + numbers */}
        <div
          role="tablist"
          aria-label="Capabilities"
          className="relative mt-14"
        >
          {/* Connecting line behind the tabs */}
          <div
            aria-hidden
            className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-px bg-white/10"
          />
          <div
            aria-hidden
            className="absolute left-0 top-1/2 -translate-y-1/2 h-px transition-all duration-500"
            style={{
              width: `${((activeIndex + 0.5) / personas.length) * 100}%`,
              background:
                "linear-gradient(90deg, transparent 0%, rgba(243,112,33,0.7) 100%)",
            }}
          />

          <div className="relative flex flex-wrap items-center justify-center gap-2">
            {personas.map((p, i) => {
              const selected = p.id === active;
              return (
                <button
                  key={p.id}
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActive(p.id)}
                  className={`group inline-flex items-center gap-2 rounded-full border px-3.5 py-2 text-[13px] font-medium tracking-tight transition-all ${
                    selected
                      ? "border-white bg-white text-ink shadow-card"
                      : "border-white/25 bg-[#0B3754]/70 text-white/90 backdrop-blur hover:border-white/45 hover:bg-[#0B3754]/85"
                  }`}
                >
                  <span
                    className={`grid h-6 w-6 shrink-0 place-items-center rounded-full text-[10px] font-bold transition-all ${
                      selected
                        ? "bg-ink text-white"
                        : "bg-white/15 text-white/80 group-hover:bg-white/20"
                    }`}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 18 18"
                    aria-hidden
                    className={selected ? "" : "opacity-80"}
                    style={{ color: selected ? p.accentHex : "currentColor" }}
                  >
                    {p.iconPath}
                  </svg>
                  <span>{p.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Capability card */}
        <div className="relative mt-10">
          <div
            aria-hidden
            className="absolute inset-x-0 -top-6 -z-10 mx-auto h-40 max-w-3xl rounded-full opacity-60 blur-3xl"
            style={{
              background:
                "radial-gradient(closest-side, rgba(91,72,192,0.18), rgba(91,72,192,0) 70%)",
            }}
          />
          <div
            key={current.id}
            className="grid items-stretch gap-5 rounded-3xl border border-border bg-white p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.45)] md:grid-cols-2 md:p-8 animate-fade-up"
          >
            {/* LEFT */}
            <div className="flex flex-col justify-between gap-6">
              <div>
                <div className="flex items-center gap-2.5">
                  <span
                    className="grid h-9 w-9 place-items-center rounded-xl"
                    style={{ background: current.accentHex + "30", color: current.accentHex }}
                  >
                    <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden>
                      {current.iconPath}
                    </svg>
                  </span>
                  <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-muted">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(personas.length).padStart(2, "0")}
                  </span>
                  <span className={`inline-flex h-7 items-center rounded-full px-3 text-[12px] font-semibold tracking-tight text-ink ${current.accent}`}>
                    {current.label}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-2xl md:text-[28px] font-semibold tracking-tight text-ink leading-[1.18]">
                  {current.headline}
                </h3>
                <p className="mt-4 text-[15.5px] leading-[1.6] text-muted">
                  {current.description}
                </p>
                <ul className="mt-6 space-y-2.5">
                  {current.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-[15px] text-ink">
                      <span
                        className="mt-1 grid h-5 w-5 shrink-0 place-items-center rounded-full"
                        style={{ background: current.accentHex + "25", color: current.accentHex }}
                      >
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                          <path d="M2.5 6l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button href={`#${current.id}`} variant="primary" size="md" trailingIcon>
                  Explore {current.label}
                </Button>
                <Button href="#demo" variant="ghost" size="md">
                  Talk to sales
                </Button>
              </div>
            </div>

            {/* RIGHT — live dashboard preview */}
            <div
              className="relative overflow-hidden rounded-2xl border border-border p-1"
              style={{ background: current.accentHex + "20" }}
            >
              <div className="relative grid h-full grid-cols-2 gap-3 rounded-[14px] bg-white p-5">
                {/* Header strip */}
                <div className="col-span-2 -mb-1 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-ink/5 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Live · PracPros IQ
                  </span>
                  <span className="font-mono text-[10.5px] text-muted">
                    last 12 wks
                  </span>
                </div>

                {/* Sparkline strip */}
                <div className="col-span-2 rounded-xl border border-border bg-subtle/50 p-3">
                  <Sparkline
                    points={current.sparkline}
                    color={current.accentHex}
                  />
                </div>

                {/* Metric tiles */}
                {current.metrics.map((m, i) => (
                  <PersonaTile
                    key={`${current.id}-${i}-${m.label}`}
                    tone={m.emphasized ? current.accent : "bg-white"}
                    label={m.label}
                    value={m.value}
                  />
                ))}

                {/* Agent log */}
                <div className="col-span-2 rounded-xl border border-border bg-white p-4">
                  <div className="flex items-center gap-3">
                    <span className="grid h-8 w-8 place-items-center rounded-full bg-ink text-[12px] font-semibold text-white">
                      PP
                    </span>
                    <div className="text-[13px] text-ink-soft">
                      <span className="font-medium text-ink">PracPros agent</span>{" "}
                      · {current.agentMessage}
                    </div>
                  </div>
                  <div className="mt-3 grid grid-cols-4 gap-1.5">
                    {[100, 80, 55, 25].map((pct, n) => (
                      <div
                        key={n}
                        className="h-1.5 overflow-hidden rounded-full bg-ink/10"
                      >
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${pct}%`,
                            background: current.accentHex,
                          }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PersonaTile({
  tone,
  label,
  value,
}: {
  tone: string;
  label: string;
  value: string;
}) {
  return (
    <div className={`rounded-xl border border-border ${tone} p-3`}>
      <div className="text-[11px] uppercase tracking-[0.14em] text-ink/60">
        {label}
      </div>
      <div className="mt-1 font-display text-xl font-semibold tracking-tight text-ink">
        {value}
      </div>
    </div>
  );
}

function Sparkline({ points, color }: { points: number[]; color: string }) {
  const w = 280;
  const h = 56;
  const pad = 4;
  const max = Math.max(...points);
  const min = Math.min(...points);
  const range = Math.max(1, max - min);
  const step = (w - pad * 2) / (points.length - 1);
  const coords = points.map((v, i) => {
    const x = pad + i * step;
    const y = h - pad - ((v - min) / range) * (h - pad * 2);
    return { x, y };
  });
  const path = coords
    .map((c, i) => (i === 0 ? `M ${c.x} ${c.y}` : `L ${c.x} ${c.y}`))
    .join(" ");
  const area =
    path +
    ` L ${coords[coords.length - 1].x} ${h - pad} L ${coords[0].x} ${h - pad} Z`;
  const last = coords[coords.length - 1];
  return (
    <svg
      viewBox={`0 0 ${w} ${h}`}
      preserveAspectRatio="none"
      className="block h-12 w-full"
      aria-hidden
    >
      <defs>
        <linearGradient id={`spark-${color}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.35" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d={area} fill={`url(#spark-${color})`} />
      <path d={path} stroke={color} strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx={last.x} cy={last.y} r="3" fill={color} />
      <circle cx={last.x} cy={last.y} r="6" fill={color} fillOpacity="0.25" />
    </svg>
  );
}
