import iso1 from "../../assets/ISO1.avif";
import iso2 from "../../assets/ISO2.avif";
import iso3 from "../../assets/ISO3.avif";
import logo from "../../assets/icon.png";
const solutions = [
  "Modernize Your Foundation",
  "Innovate with AI & Data",
  "Fortify Your Defenses",
  "Empower Your Workforce",
];

const company = ["Why Quadra", "Customer Stories", "Insights", "Careers", "Talk to an Architect"];

const badges = [
  { name: "ISO 9001", image: iso1 },
  { name: "ISO 27001", image: iso2 },
  { name: "ISO 42001", image: iso3 },
];

const socials = [
  {
    label: "X",
    path: "M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8.1-9.3L.6 2h7.1l4.9 6.4L18.9 2Zm-1.2 18h1.9L6.9 3.9H4.9L17.7 20Z",
  },
  {
    label: "Facebook",
    path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4Z",
  },
  {
    label: "Instagram",
    path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Zm6.9-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z",
  },
  {
    label: "LinkedIn",
    path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z",
  },
  {
    label: "YouTube",
    path: "M23 12s0-3.3-.4-4.8c-.2-.8-.9-1.5-1.7-1.7C19.4 5 12 5 12 5s-7.4 0-8.9.5c-.8.2-1.5.9-1.7 1.7C1 8.7 1 12 1 12s0 3.3.4 4.8c.2.8.9 1.5 1.7 1.7 1.5.5 8.9.5 8.9.5s7.4 0 8.9-.5c-.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.8.4-4.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z",
  },
];

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex size-7 items-center justify-center rounded-md font-display text-lg font-semibold text-primary-foreground">
                <img src={logo} />
              </span>
              <span className="text-lg font-semibold tracking-tight">Quadra</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-background/60">
              Your trusted technology partner for Cloud, AI, Security, Modern Workplace, Business
              Applications and Managed Services — turning complex innovation into a competitive
              edge.
            </p>
            <div className="mt-6 flex gap-3">
              {badges.map((badge) => (
                <span
                  key={badge.name}
                  className="flex size-16 items-center justify-center rounded-full border border-background/25 text-center text-[9px] font-semibold uppercase leading-tight tracking-wide text-background/70"
                >
                  <img src={badge.image} />
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Solutions</h4>
            <ul className="mt-4 space-y-3">
              {solutions.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="mt-4 space-y-3">
              {company.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-sm text-background/60 transition-colors hover:text-primary"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Get the Blueprint, Delivered</h4>
            <p className="mt-4 text-sm text-background/60">
              Your monthly download of everything new in technology that matters to your business.
            </p>
            <form
              className="mt-4 flex overflow-hidden rounded-full border border-background/20 bg-background/5"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="quadrasysterms.in"
                className="w-full bg-transparent px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Subscribe
              </button>
            </form>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href="#"
                  aria-label={s.label}
                  className="flex size-9 items-center justify-center rounded-full border border-background/20 text-background/70 transition-colors hover:border-primary hover:text-primary"
                >
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-6 text-xs text-background/50 sm:flex-row">
          <p>Quadra Systerms Pvt. Ltd. © All rights reserved</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-primary">
              Privacy policy
            </a>
            <a href="#" className="transition-colors hover:text-primary">
              Terms of Use
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
