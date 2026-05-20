"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Logo } from "./ui/Logo";
import { Button } from "./ui/Button";

const navItems = [
  { label: "Platform", href: "#platform" },
  { label: "Solutions", href: "#solutions" },
  { label: "Resources", href: "#resources" },
  { label: "Customers", href: "#stories" },
  { label: "Pricing", href: "#pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white backdrop-blur-xl border-b border-border shadow-[0_1px_0_rgba(10,10,10,0.04)]"
          : "bg-white border-b border-border"
      }`}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-[72px]">
        <div className="flex items-center gap-10">
          <Link
            href="/"
            aria-label="PracPros home"
            className="rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500"
          >
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative rounded-full px-3 py-1.5 text-[14px] font-medium text-ink-soft transition-colors hover:text-ink"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="hidden md:flex items-center gap-2">
          <Link
            href="#login"
            className="text-[14px] font-medium text-ink-soft hover:text-ink px-3 py-2 transition-colors"
          >
            Log in
          </Link>
          <Button href="#demo" variant="secondary" size="sm">
            Book a demo
          </Button>
          <Button href="#start" variant="primary" size="sm" trailingIcon>
            Start free
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-white/60 backdrop-blur"
        >
          <span className="sr-only">Toggle menu</span>
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 6h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                <path d="M3 12h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
          <div className="container-page py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-[15px] font-medium text-ink hover:bg-subtle"
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-3 flex flex-col gap-2 border-t border-border pt-4">
              <Button href="#demo" variant="secondary" size="md" className="w-full">
                Book a demo
              </Button>
              <Button href="#start" variant="primary" size="md" className="w-full" trailingIcon>
                Start free
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
