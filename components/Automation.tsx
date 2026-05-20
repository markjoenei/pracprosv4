import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

const syncs = [
  { label: "Website", icon: "🌐" },
  { label: "Google Business", icon: "🔎" },
  { label: "Instagram", icon: "📷" },
  { label: "Facebook", icon: "📘" },
  { label: "Recall SMS", icon: "💬" },
  { label: "Re-care email", icon: "✉" },
];

export function Automation() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28" style={{ background: "#faf9f7" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(91,72,192,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(91,72,192,0.05) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 95%)",
        }}
      />

      <div className="container-page relative">
        {/* Header */}
        <Reveal className="mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-soft backdrop-blur shadow-card">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" aria-hidden />
            Automation & operations
          </span>
          <h2 className="mt-5 font-display text-4xl md:text-5xl lg:text-[60px] leading-[1.04] font-semibold tracking-[-0.028em] text-ink">
            The Best Practices Run With{" "}
            <span className="relative inline-block">
              <span className="relative z-10 italic text-brand-600">Consistency</span>
              <span
                aria-hidden
                className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter"
                style={{ filter: "blur(0.5px)" }}
              />
            </span>
            <span className="block">Across Every Touchpoint.</span>
          </h2>
          <div className="mx-auto mt-6 max-w-3xl space-y-4 text-[16px] md:text-[17px] leading-[1.65] text-ink-soft">
            <p>
              The practices that grow predictably aren&rsquo;t the ones with
              the best marketing campaigns. They&rsquo;re the ones with systems
              that eliminate the gaps — the unmade recall call, the missed
              follow-up text, the promotion that never went out because nobody
              had time.
            </p>
            <p>
              PRACPROS connects your marketing and operations through
              intelligent automation that handles appointment reminders,
              recare campaigns, promotional announcements, and patient
              re-engagement sequences without anyone on your team having to
              remember to do it.
            </p>
            <p className="font-semibold text-ink">
              Consistency isn&rsquo;t a discipline when it&rsquo;s{" "}
              <span className="text-brand-600">built into the system.</span>
            </p>
          </div>
        </Reveal>

        {/* Sync visual — hub + spokes */}
        <Reveal delay={120} className="relative mx-auto mt-14 max-w-[860px]">
          <div className="relative aspect-[5/3] w-full">
            {/* center hub — with a real face for warmth */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-border bg-white px-5 py-4 text-center shadow-card">
              <div className="mx-auto -mt-9 mb-2 grid place-items-center">
                <div className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1573497019418-b400bb3ab074?auto=format&fit=crop&w=200&q=80"
                    alt="Office manager"
                    fill
                    sizes="56px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
              </div>
              <div className="font-mono text-[10.5px] font-semibold uppercase tracking-[0.14em] text-muted">
                Jen updates the hours once
              </div>
              <div className="mt-1 font-display text-[18px] font-semibold tracking-tight text-ink">
                PracPros syncs everywhere.
              </div>
              <div className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-1 text-[10.5px] font-semibold text-emerald-700">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Synced · just now
              </div>
            </div>

            {/* spoke chips */}
            {syncs.map((s, i) => {
              const angle = (i / syncs.length) * 2 * Math.PI - Math.PI / 2;
              const left = 50 + Math.cos(angle) * 42;
              const top = 50 + Math.sin(angle) * 38;
              return (
                <div
                  key={s.label}
                  className="absolute inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-2 text-[12px] font-semibold tracking-tight text-ink shadow-card animate-float-soft"
                  style={{
                    left: `${left}%`,
                    top: `${top}%`,
                    transform: "translate(-50%, -50%)",
                    animationDuration: `${6 + (i % 3)}s`,
                    animationDelay: `${(i % 5) * 0.18}s`,
                  }}
                >
                  <span className="grid h-6 w-6 place-items-center rounded-full bg-brand-100 text-brand-700 text-[12px]">
                    {s.icon}
                  </span>
                  {s.label}
                </div>
              );
            })}

            {/* connecting lines */}
            <svg
              aria-hidden
              viewBox="0 0 1000 600"
              className="absolute inset-0 h-full w-full"
              fill="none"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="autoLine" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="rgba(91,72,192,0.1)" />
                  <stop offset="50%" stopColor="rgba(91,72,192,0.55)" />
                  <stop offset="100%" stopColor="rgba(91,72,192,0.1)" />
                </linearGradient>
              </defs>
              {syncs.map((_, i) => {
                const angle = (i / syncs.length) * 2 * Math.PI - Math.PI / 2;
                const x = 500 + Math.cos(angle) * 420;
                const y = 300 + Math.sin(angle) * 228;
                return (
                  <path
                    key={i}
                    d={`M 500 300 Q ${500 + Math.cos(angle) * 200} ${300 + Math.sin(angle) * 120}, ${x} ${y}`}
                    stroke="url(#autoLine)"
                    strokeWidth="1.4"
                    strokeDasharray="3 5"
                  >
                    <animate attributeName="stroke-dashoffset" from="0" to="-32" dur="3.5s" repeatCount="indefinite" />
                  </path>
                );
              })}
            </svg>
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="md" trailingIcon>
            See What Auto-Syncs
          </Button>
        </div>
      </div>
    </section>
  );
}
