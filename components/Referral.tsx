import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

const stats = [
  { v: "−54%", l: "cost to acquire" },
  { v: "+3.2×", l: "higher conversion" },
  { v: "+38%", l: "more treatment acceptance" },
  { v: "+2.1y", l: "longer patient tenure" },
];

export function Referral() {
  return (
    <section
      className="relative isolate overflow-hidden py-20 md:py-28 text-white"
      style={{
        background:
          "linear-gradient(135deg, #0B3754 0%, #104A6F 45%, #2A2670 100%)",
      }}
    >
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
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 h-[480px] w-[480px] rounded-full blur-3xl opacity-40 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(132,112,213,0.55), transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-[420px] w-[420px] rounded-full blur-3xl opacity-35 -z-[1]"
        style={{
          background: "radial-gradient(circle, rgba(243,112,33,0.45), transparent 70%)",
        }}
      />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Text */}
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden />
            Referral system
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-white">
            Your Happiest Patients Are Your{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic" style={{ color: "#F37021" }}>Most Underutilized</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter/40"
                style={{ filter: "blur(0.5px)" }}
              />
            </span>
            <span className="block">Growth Channel.</span>
          </h2>
          <div className="mt-6 space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-white/85">
            <p>
              A referred patient costs less to acquire, converts at a higher
              rate, accepts more treatment, stays longer, and refers more
              people themselves. Word of mouth has always been
              dentistry&rsquo;s highest-value growth channel — it just used to
              be entirely passive.
            </p>
            <p>
              PRACPROS builds an active referral engine: unique referral
              links, automated reward systems, tracking dashboards, and
              follow-up sequences that turn the goodwill your patients
              already feel into a measurable, repeatable patient acquisition
              channel.
            </p>
            <p className="font-semibold text-white">
              The referrals were always there.{" "}
              <span className="text-brand-300">We give them a system to travel through.</span>
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button
              href="#growth-audit"
              variant="primary"
              size="md"
              trailingIcon
              className="!bg-white !text-ink hover:!bg-white"
            >
              See Referral Engine
            </Button>
          </div>
        </Reveal>

        {/* Visual: referral network + stats */}
        <Reveal delay={120} className="relative mx-auto w-full max-w-[600px]">
          {/* Network */}
          <div className="relative aspect-square w-full">
            <div
              aria-hidden
              className="absolute -inset-6 rounded-[44px] blur-3xl opacity-50"
              style={{
                background:
                  "radial-gradient(60% 60% at 50% 50%, rgba(243,112,33,0.3), transparent 70%)",
              }}
            />

            {/* connecting lines */}
            <svg aria-hidden viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" fill="none">
              <g stroke="rgba(255,255,255,0.2)" strokeWidth="1.4" strokeDasharray="3 5">
                <line x1="200" y1="200" x2="80" y2="100" />
                <line x1="200" y1="200" x2="320" y2="100" />
                <line x1="200" y1="200" x2="60" y2="280" />
                <line x1="200" y1="200" x2="340" y2="280" />
                <line x1="200" y1="200" x2="200" y2="340" />
                <line x1="80" y1="100" x2="40" y2="50" />
                <line x1="320" y1="100" x2="360" y2="40" />
              </g>
              <g stroke="rgba(243,112,33,0.7)" strokeWidth="1.6">
                <path d="M200 200 L 80 100" strokeDasharray="3 5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="3s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 L 320 100" strokeDasharray="3 5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="3.5s" repeatCount="indefinite" />
                </path>
                <path d="M200 200 L 200 340" strokeDasharray="3 5">
                  <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="4s" repeatCount="indefinite" />
                </path>
              </g>
            </svg>

            {/* nodes */}
            {[
              { x: 50, y: 50, label: "Patient 1", color: "#F37021", size: 56 },
              { x: 50, y: 50, label: "", color: "", size: 0 },
              { x: 12, y: 18, label: "+", color: "rgba(255,255,255,0.15)", size: 32 },
              { x: 80, y: 18, label: "+", color: "rgba(255,255,255,0.15)", size: 32 },
              { x: 18, y: 70, label: "Friend", color: "#84b4dc", size: 44 },
              { x: 84, y: 70, label: "Family", color: "#a596e3", size: 44 },
              { x: 50, y: 88, label: "Patient 2", color: "#F37021", size: 48 },
            ].filter((n) => n.size > 0).map((n, i) => (
              <div
                key={i}
                className="absolute -translate-x-1/2 -translate-y-1/2 grid place-items-center rounded-full font-display font-bold text-white shadow-[0_18px_30px_-10px_rgba(0,0,0,0.4)]"
                style={{
                  left: `${n.x}%`,
                  top: `${n.y}%`,
                  width: n.size,
                  height: n.size,
                  background: n.color,
                  fontSize: n.size > 40 ? 12 : 14,
                }}
              >
                {n.label}
              </div>
            ))}

            {/* unique link card */}
            <div
              className="absolute -bottom-2 -left-2 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-[11.5px] font-semibold text-white backdrop-blur animate-float-soft"
              style={{ animationDuration: "7s" }}
            >
              <span className="grid h-6 w-6 place-items-center rounded-md bg-white/15">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden>
                  <path d="M6 9.5L9.5 6m-3 0a2.5 2.5 0 0 1 3.5 0l1.5 1.5a2.5 2.5 0 0 1 0 3.5L9.5 12.5a2.5 2.5 0 0 1-3.5 0M9.5 6.5a2.5 2.5 0 0 0-3.5 0L4.5 8a2.5 2.5 0 0 0 0 3.5L6 13a2.5 2.5 0 0 0 3.5 0" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </span>
              brighthill.dental/r/emma
            </div>
            {/* reward card */}
            <div
              className="absolute -top-2 -right-2 inline-flex items-center gap-2 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 text-[11.5px] font-semibold text-white backdrop-blur animate-float-soft"
              style={{ animationDuration: "8s", animationDelay: "0.3s" }}
            >
              <span className="grid h-6 w-6 place-items-center rounded-md bg-emerald-500/30 text-emerald-200">
                ✓
              </span>
              $50 reward · auto-paid
            </div>
          </div>

          {/* stats row */}
          <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-4">
            {stats.map((s) => (
              <div
                key={s.l}
                className="rounded-xl border border-white/15 bg-white/[0.05] px-3 py-3 text-center backdrop-blur"
              >
                <div className="font-display text-[20px] font-semibold tracking-[-0.02em] text-white">
                  {s.v}
                </div>
                <div className="mt-0.5 text-[10.5px] font-medium uppercase tracking-[0.1em] text-white/70">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
