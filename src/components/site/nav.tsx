import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logo from "../../assets/icon.png";

const solutionItems = [
  "Modernize Your Foundation",
  "Innovate with AI & Data",
  "Fortify Your Defenses",
  "Empower Your Workforce",
];

const navLinks = ["Technology Practices", "Why Quadra", "Happy Customers", "Newsroom"];

function Logo({ inverted = false }: { inverted?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2">
      <span className="flex size-7 items-center justify-center rounded-md font-display text-lg font-semibold text-primary-foreground">
        <img src={logo} />
      </span>
      <span
        className={`text-lg font-semibold tracking-tight ${
          inverted ? "text-background" : "text-foreground"
        }`}
      >
        Quadra
      </span>
    </Link>
  );
}

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-border/70 bg-card/85 px-5 shadow-sm backdrop-blur-md">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex">
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground">
              Solutions
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden>
                <path
                  d="M2 3.5 5 6.5 8 3.5"
                  stroke="currentColor"
                  strokeWidth="1.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="invisible absolute left-0 top-full z-10 w-60 translate-y-1 rounded-2xl border border-border bg-card p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {solutionItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1.5">
          <button
            aria-label="Language"
            className="hidden size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground sm:flex"
          >
            <svg
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              aria-hidden
            >
              <circle cx="12" cy="12" r="9" />
              <path d="M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" />
            </svg>
          </button>
          <button
            aria-label="Search"
            className="hidden size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground sm:flex"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden
            >
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" strokeLinecap="round" />
            </svg>
          </button>
          <a
            href="mailto:enquires@quadrasysterms.in"
            className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03] hover:bg-primary/90"
          >
            Contact Us
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted lg:hidden"
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              aria-hidden
            >
              {open ? (
                <path d="M6 6l12 12M18 6 6 18" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-card p-3 shadow-lg lg:hidden">
          {[...solutionItems, ...navLinks].map((item) => (
            <a
              key={item}
              href="#"
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
