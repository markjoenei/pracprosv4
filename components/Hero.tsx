import { HeroVideo } from "./HeroVideo";
import { HeroCollage } from "./HeroCollage";
import { Button } from "./ui/Button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-28 md:pt-36 pb-0 text-white">
      <HeroBackdrop />

      <div className="container-page relative">
        <div className="mx-auto max-w-6xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[12.5px] font-medium text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-300" aria-hidden />
            AI-Native Dental Growth Platform
          </span>

          <h1 className="mt-6 font-display text-[30px] sm:text-[40px] md:text-[54px] lg:text-[64px] leading-[1.04] tracking-[-0.028em] font-semibold text-white">
            <span className="block">Your Competitors Aren&rsquo;t Out-Dentisting You.</span>
            <span className="block text-white">
              They&rsquo;re Out-
              <span className="relative inline-block">
                <span className="relative z-10 italic" style={{ color: "#F37021" }}>Marketing</span>
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-1 h-3 -z-0 bg-accent-butter/40"
                  style={{ filter: "blur(0.5px)" }}
                />
              </span>{" "}
              You.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-[16px] md:text-[18px] leading-[1.55] text-white/95">
            You&rsquo;re not losing patients because of your clinical work.
            You&rsquo;re losing them because someone else answered first, ranked
            higher, or showed up on Google Maps when you didn&rsquo;t.
            That&rsquo;s a systems problem. And it&rsquo;s exactly what we
            solve.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href="#strategy-call"
              variant="primary"
              size="lg"
              className="!bg-white !text-ink hover:!bg-white shadow-[0_18px_40px_-18px_rgba(255,255,255,0.55)]"
            >
              Schedule a Strategy Call
            </Button>
            <Button
              href="#growth-audit"
              size="lg"
              variant="ghost"
              trailingIcon
              className="!bg-black/30 !text-white border border-white/30 backdrop-blur-md hover:!bg-black/40"
            >
              Get a Free Growth Audit
            </Button>
          </div>
        </div>

        <HeroCollage />
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <>
      <div className="absolute inset-0 -z-20 bg-ink" aria-hidden />
      <HeroVideo />

      {/* Smooth darker overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-[5]"
        style={{
          background:
            "linear-gradient(180deg, rgba(8,8,12,0.78) 0%, rgba(8,8,12,0.55) 40%, rgba(8,8,12,0.6) 70%, rgba(8,8,12,0.82) 100%)",
        }}
      />
    </>
  );
}

