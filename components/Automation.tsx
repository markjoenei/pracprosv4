import Image from "next/image";
import { Button } from "./ui/Button";
import { Reveal } from "./Reveal";

type Sync = {
  label: string;
  meta: string;
  latency: string;
  icon: React.ReactNode;
};

const syncs: Sync[] = [
  {
    label: "Website",
    meta: "Header · footer · hours",
    latency: "120ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="9" cy="9" r="6.5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M2.5 9h13M9 2.5c1.8 2.1 2.7 4.2 2.7 6.5s-.9 4.4-2.7 6.5M9 2.5C7.2 4.6 6.3 6.7 6.3 9s.9 4.4 2.7 6.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Google Business",
    meta: "Profile · hours · posts",
    latency: "180ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <circle cx="8" cy="8" r="5" stroke="currentColor" strokeWidth="1.4" />
        <path d="M11.8 11.8L15 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    meta: "Bio · highlight · posts",
    latency: "210ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2.5" y="2.5" width="13" height="13" rx="3.5" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="9" cy="9" r="3" stroke="currentColor" strokeWidth="1.4" />
        <circle cx="13" cy="5" r="0.7" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    meta: "Page info · cover",
    latency: "190ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M11 9.5h2l.5-2.5H11V5.6c0-.7.3-1.4 1.4-1.4H13.6V2.1S12.6 2 11.6 2c-2 0-3.3 1.2-3.3 3.4V7H6v2.5h2.3V16H11V9.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Recall SMS",
    meta: "Reminders · re-care",
    latency: "60ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <path d="M3 4.5C3 3.7 3.7 3 4.5 3h9c.8 0 1.5.7 1.5 1.5v6c0 .8-.7 1.5-1.5 1.5H9l-3 2.5V12H4.5C3.7 12 3 11.3 3 10.5v-6z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M6 6.5h6M6 8.5h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Re-care email",
    meta: "Sequenced · personalized",
    latency: "80ms",
    icon: (
      <svg width="16" height="16" viewBox="0 0 18 18" fill="none" aria-hidden>
        <rect x="2.5" y="4" width="13" height="10" rx="1.6" stroke="currentColor" strokeWidth="1.4" />
        <path d="M3 5l6 4 6-4" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function Automation() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "#faf9f7" }}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[1]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(67,69,75,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(67,69,75,0.05) 1px, transparent 1px)",
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
              <span className="relative z-10 text-[#FF521C]">Consistency</span></span>
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

        {/* Modern command + sync grid — bigger + animated */}
        <Reveal delay={120} className="relative mx-auto mt-16 max-w-[1200px]">
          {/* warm halo behind the card */}
          <div
            aria-hidden
            className="pointer-events-none absolute -inset-8 rounded-[56px] blur-3xl opacity-50 animate-glow-pulse"
            style={{
              background:
                "radial-gradient(50% 60% at 50% 50%, rgba(255,82,28,0.25), transparent 70%)",
            }}
          />

          {/* Command bar */}
          <div className="relative overflow-hidden rounded-3xl border border-border bg-white shadow-[0_60px_120px_-30px_rgba(67,69,75,0.3)] transition-transform duration-500 hover:-translate-y-1">
            <div className="flex flex-col gap-5 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-7">
              <div className="flex items-center gap-4 animate-feed-in">
                <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-[3px] border-white shadow-card">
                  <Image
                    src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80"
                    alt="Jen, office manager"
                    fill
                    sizes="64px"
                    className="object-cover"
                    unoptimized
                  />
                </div>
                <div className="min-w-0">
                  <div className="text-[13px] font-medium uppercase tracking-[0.14em] text-muted">
                    Jen · Office manager
                  </div>
                  <div className="font-display text-[20px] sm:text-[22px] font-semibold tracking-tight text-ink">
                    &ldquo;Changed our Thu &amp; Fri hours.&rdquo;
                    <span className="ml-3 font-mono text-[15px] font-normal text-muted">
                      9:00 → 19:00
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3 animate-chip-pop" style={{ animationDelay: "0.2s" }}>
                <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-2 text-[14px] font-semibold text-brand-700">
                  <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                  Updated everywhere
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 rounded-full border border-border px-3 py-1.5 text-[13px] text-ink-soft">
                  in under a second
                </span>
              </div>
            </div>

            {/* progress bar — shimmer-animated */}
            <div className="relative h-1 w-full bg-border">
              <div
                className="absolute inset-y-0 left-0 w-full origin-left animate-sync-shimmer"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, rgba(255,82,28,1) 0%, rgba(255,113,66,1) 40%, rgba(255,145,106,1) 60%, rgba(255,82,28,1) 100%)",
                }}
              />
            </div>

            {/* Sync grid — bigger rows, staggered animation */}
            <ul className="grid grid-cols-1 divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-3">
              {syncs.map((s, i) => (
                <li
                  key={s.label}
                  className="group relative flex items-center gap-4 p-6 transition-colors sm:p-7 animate-feed-in"
                  style={{
                    borderTop:
                      i >= 3 ? "1px solid var(--color-border)" : undefined,
                    animationDelay: `${0.25 + i * 0.12}s`,
                  }}
                >
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl border border-border bg-subtle text-ink transition-all duration-300 group-hover:scale-110 group-hover:border-brand-300 group-hover:bg-brand-50 group-hover:text-brand-700">
                    <span className="scale-[1.4]">{s.icon}</span>
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate font-display text-[17px] font-semibold tracking-tight text-ink">
                        {s.label}
                      </span>
                      <span className="ml-auto font-mono text-[12px] font-medium text-muted">
                        {s.latency}
                      </span>
                    </div>
                    <div className="mt-1.5 flex items-center gap-2">
                      <span className="truncate text-[14px] text-ink-soft">
                        {s.meta}
                      </span>
                    </div>
                  </div>
                  <span className="ml-1 inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-brand-700">
                    <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                    Synced
                  </span>
                </li>
              ))}
            </ul>

            {/* footer bar — humanized, slightly bigger */}
            <div className="flex flex-col items-start gap-3 border-t border-border bg-subtle/40 px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
              <div className="flex items-center gap-2.5 text-[14px] text-ink-soft">
                <span className="h-2 w-2 rounded-full bg-brand-500 animate-pulse" />
                <span className="font-medium text-ink">Jen got her Thursday back.</span>
                <span className="text-muted">No 6-tab afternoon.</span>
              </div>
              <div className="flex items-center gap-2 text-[14px] text-muted">
                <span>That&rsquo;s what consistency feels like.</span>
              </div>
            </div>
          </div>

          {/* meta callouts under the card — bigger, animated */}
          <div className="mt-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {[
              { k: "Time saved / week", v: "6.4 hrs", delay: "0.4s" },
              { k: "Manual touches removed", v: "38", delay: "0.55s" },
              { k: "Sync error rate", v: "0.01%", delay: "0.7s" },
            ].map((m) => (
              <div
                key={m.k}
                className="rounded-2xl border border-border bg-white/80 px-5 py-5 backdrop-blur transition-transform duration-300 hover:-translate-y-0.5 animate-kpi-rise"
                style={{ animationDelay: m.delay }}
              >
                <div className="font-mono text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
                  {m.k}
                </div>
                <div className="mt-2 font-display text-[28px] sm:text-[32px] font-semibold tracking-[-0.02em] text-ink">
                  {m.v}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href="#growth-audit" variant="primary" size="md" trailingIcon>
            See What Auto-Syncs
          </Button>
          <Button href="#strategy-call" variant="secondary" size="md">
            Talk to an operations lead
          </Button>
        </div>
      </div>
    </section>
  );
}
