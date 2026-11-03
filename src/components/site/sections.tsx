import { useEffect, useState } from "react";
import { Reveal } from "./reveal";

import awardsGalaxy from "@/assets/awards-galaxy.jpg";
import innovationStrategy from "@/assets/innovation-strategy.jpg";
import foundationHandshake from "@/assets/foundation-handshake.jpg";
import automationTeam from "@/assets/automation-team.jpg";
import workforceHighfive from "@/assets/workforce-highfive.jpg";
import researchLab from "@/assets/research-lab.jpg";
import businessOps from "@/assets/business-ops.jpg";
import cloudSavings from "@/assets/cloud-savings.jpg";
import factoryFloor from "@/assets/factory-floor.jpg";
import securityOps from "@/assets/security-ops.jpg";
import ecommercePeak from "@/assets/ecommerce-peak.jpg";

function CtaButton({ children, href = "#" }: { children: string; href?: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.04] hover:bg-primary/90"
    >
      {children}
      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
        <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </a>
  );
}

function SectionHeading({ line1, line2 }: { line1: string; line2: string }) {
  return (
    <h2 className="font-display text-4xl leading-tight font-medium tracking-tight text-foreground sm:text-5xl">
      {line1}
      <br />
      <span className="text-primary">{line2}</span>
    </h2>
  );
}

/* ---------------- Hero ---------------- */

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-44 pb-16">
      {/* soft gradient wash */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="hero-blob absolute -top-40 left-1/2 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.85_0.11_60/0.55),transparent)] blur-3xl" />
        <div className="hero-blob absolute -top-24 right-[-6rem] h-[28rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.85_0.07_250/0.5),transparent)] blur-3xl [animation-delay:-6s]" />
        <div className="hero-blob absolute -top-32 left-[-8rem] h-[26rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.9_0.06_30/0.45),transparent)] blur-3xl [animation-delay:-3s]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <Reveal>
          <p className="font-display text-xl italic text-foreground/70">Beyond Technology</p>
          <h1 className="mt-3 font-display text-5xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-6xl">
            We Architect Your Ambition with
            <br />
            <span className="text-primary">Cloud &amp; AI</span>
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            For 25 years, we have partnered with global business leaders to
            architect and build Intelligent Enterprises — translating complex
            Cloud and AI innovation into a clear competitive edge.
          </p>
          <div className="mt-8">
            <CtaButton>Schedule Your Ambition Blueprint Session</CtaButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Logo marquee ---------------- */

const clients = [
  { name: "AXIOM", style: "font-semibold tracking-[0.3em]" },
  { name: "nordvik", style: "font-semibold lowercase tracking-tight" },
  { name: "GALLANT", style: "font-display font-semibold tracking-widest" },
  { name: "helixmart", style: "font-semibold lowercase" },
  { name: "IONIQ", style: "font-medium tracking-[0.4em]" },
  { name: "Verdant Labs", style: "font-display italic" },
  { name: "CRUX&CO", style: "font-bold tracking-tight" },
  { name: "Fairmont", style: "font-display font-semibold" },
];

export function LogoMarquee() {
  return (
    <section className="py-10">
      <Reveal className="mx-auto max-w-6xl px-6">
        <p className="text-center text-sm text-muted-foreground">Trusted by Business Leaders</p>
      </Reveal>
      <Reveal delay={150}>
        <div className="marquee-mask mt-8 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-20 pr-20">
            {[...clients, ...clients].map((c, i) => (
              <span
                key={`${c.name}-${i}`}
                className={`whitespace-nowrap text-2xl text-foreground/35 grayscale transition-colors hover:text-foreground/60 ${c.style}`}
              >
                {c.name}
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Awards dark card ---------------- */

export function AwardsCard() {
  return (
    <section className="px-6 py-16">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-foreground">
          <img
            src={awardsGalaxy}
            alt=""
            aria-hidden
            className="absolute inset-0 h-full w-full object-cover opacity-70"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/60" />
          <div className="relative px-6 py-24 text-center sm:py-28">
            <p className="text-xs font-medium uppercase tracking-[0.25em] text-white/60">
              An Unprecedented Achievement
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl">
              20 Consecutive Years of
              <br />
              <span className="text-primary">Microsoft Global Recognition</span>
            </h2>
            <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60">
              Through every major technology shift — from the data center to
              the cloud to the AI era — our work has been recognized on the
              world stage for innovation and customer impact, twenty years
              running.
            </p>
            <div className="mt-8">
              <CtaButton>View More</CtaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Partner wordmarks ---------------- */

export function Partners() {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto max-w-4xl text-center">
        <SectionHeading line1="Top Tier Recognition from" line2="Industry Leaders" />
        <div className="mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-8">
          {/* Microsoft */}
          <span className="flex items-center gap-2.5">
            <span className="grid size-7 grid-cols-2 gap-[2px]">
              <span className="rounded-[2px] bg-[#f25022]" />
              <span className="rounded-[2px] bg-[#7fba00]" />
              <span className="rounded-[2px] bg-[#00a4ef]" />
              <span className="rounded-[2px] bg-[#ffb900]" />
            </span>
            <span className="text-2xl font-semibold tracking-tight text-[#5e5e5e]">Microsoft</span>
          </span>
          {/* AWS */}
          <span className="flex flex-col items-center">
            <span className="text-3xl font-bold lowercase tracking-tight text-[#232f3e]">aws</span>
            <svg width="58" height="10" viewBox="0 0 58 10" aria-hidden>
              <path d="M2 3c14 7 40 7 54-1" stroke="#f26102" strokeWidth="2.4" fill="none" strokeLinecap="round" />
              <path d="M53 1l4 1.5-3 3" fill="none" stroke="#f26102" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          {/* Google Cloud */}
          <span className="text-2xl font-medium tracking-tight text-[#5f6368]">
            <span className="text-[#4285f4]">G</span>
            <span className="text-[#ea4335]">o</span>
            <span className="text-[#fbbc05]">o</span>
            <span className="text-[#4285f4]">g</span>
            <span className="text-[#34a853]">l</span>
            <span className="text-[#ea4335]">e</span>
            <span className="ml-2 text-[#5f6368]">Cloud</span>
          </span>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Compass ---------------- */

export function Compass() {
  return (
    <section className="px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionHeading line1="Prefer not to navigate?" line2="Tell us what you're architecting" />
        <p className="mt-5 text-sm text-muted-foreground">
          Get an answer customized for you. Just like our solutions.
        </p>
        <div className="mt-8">
          <CtaButton>The Compass</CtaButton>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Founder's Desk ---------------- */

export function FoundersDesk() {
  return (
    <section className="bg-muted px-6 py-24">
      <Reveal className="mx-auto max-w-3xl text-center">
        <SectionHeading line1="From the" line2="Founder's Desk" />
        <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground">
          Perspective on AI, enterprise transformation, and building at scale —
          shaped by real-world execution and long-term partnerships.
        </p>
        <div className="mt-8">
          <CtaButton>Read our Founders' Blog</CtaButton>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- The Questions ---------------- */

const questions = [
  {
    eyebrow: "The Growth Question",
    title: "How can AI create new products, new revenue streams, and disrupt markets?",
    body: "We help you see what is possible. As your innovation partner, we co-create AI-native business models in strategic workshops and architect the scalable platforms to launch them.",
    link: "Explore Innovation Strategy",
    img: innovationStrategy,
  },
  {
    eyebrow: "The Foundation Question",
    title: "What are the right investments in data, cloud, and security to succeed in AI, and how do we manage the risks?",
    body: "We build the bedrock — clear, vendor-agnostic roadmaps for an AI-ready data estate, wrapped in the security and governance frameworks that protect it.",
    link: "Assess Your Foundation",
    img: foundationHandshake,
  },
  {
    eyebrow: "The Productivity Question",
    title: "How do we deploy AI to achieve radical efficiency and reinvent core processes?",
    body: "We find the value and architect for efficiency. Intelligent process audits pinpoint high-ROI automation, and we build the AI-driven workflows that capture it.",
    link: "See Automation in Action",
    img: automationTeam,
  },
  {
    eyebrow: "The Transformation Question",
    title: "How do we lead this change and bring our people and culture with us on the journey?",
    body: "We guide the transformation — strategic counsel and change management to navigate the cultural and talent shifts on the road to an Intelligent Enterprise.",
    link: "Discuss Your AI Strategy",
    img: workforceHighfive,
  },
];

export function Questions() {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <Reveal className="text-center">
          <SectionHeading line1="The Questions Defining" line2="the AI Era" />
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            We architect the answers. Every enterprise ambition today revolves
            around a few critical questions — we partner with leaders to build
            the strategic and technical blueprints that turn them into a
            competitive advantage.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {questions.map((q, i) => (
            <Reveal key={q.eyebrow} delay={i * 120}>
              <article className="group flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground">
                  {q.eyebrow}
                </p>
                <h3 className="font-display text-2xl font-medium leading-snug tracking-tight text-foreground">
                  {q.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{q.body}</p>
                <img
                  src={q.img}
                  alt=""
                  loading="lazy"
                  width={1280}
                  height={864}
                  className="mt-2 aspect-[16/9] w-full rounded-2xl object-cover"
                />
                <a
                  href="#"
                  className="mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80"
                >
                  {q.link}
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                    <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Scale carousel ---------------- */

const slides = [
  { img: researchLab, caption: "20,000 researchers accelerating their critical science" },
  { img: businessOps, caption: "Every 4 seconds, enabling a critical business decision" },
  { img: cloudSavings, caption: "Six-figure cloud savings architected for a financial leader" },
  { img: factoryFloor, caption: "30,000 plant workers driving factory efficiency" },
  { img: securityOps, caption: "90% fewer application-layer attacks for a pharma innovator" },
  { img: ecommercePeak, caption: "100% uptime for an e-commerce leader at peak sales" },
];

export function ScaleCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setIndex((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setIndex((v) => (v - 1 + slides.length) % slides.length);
  const next = () => setIndex((v) => (v + 1) % slides.length);

  // Each slide takes 46% of the track; keep the active one centered.
  const offset = `calc(50% - ${index * 46}% - 23%)`;

  return (
    <section className="overflow-hidden py-24">
      <Reveal className="mx-auto max-w-4xl px-6 text-center">
        <SectionHeading line1="The Scale of the Ambitions" line2="We Architect" />
      </Reveal>

      <Reveal delay={150} className="relative mt-14">
        <div className="relative">
          <div
            className="flex items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
            style={{ transform: `translateX(${offset})` }}
          >
            {slides.map((s, i) => {
              const active = i === index;
              return (
                <div
                  key={s.caption}
                  className={`shrink-0 px-3 transition-all duration-700 md:w-[46%] ${
                    active ? "opacity-100" : "opacity-40 grayscale"
                  }`}
                >
                  <div className="relative overflow-hidden rounded-3xl">
                    <img
                      src={s.img}
                      alt=""
                      loading="lazy"
                      width={1280}
                      height={864}
                      className={`aspect-[16/10] w-full object-cover transition-all duration-700 ${
                        active ? "scale-100" : "scale-95"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                    <p className="absolute inset-x-8 bottom-8 font-display text-2xl font-medium leading-snug text-white sm:text-3xl">
                      {s.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            aria-label="Previous"
            onClick={prev}
            className="absolute left-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 md:left-16"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M19 12H5m6 6-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            aria-label="Next"
            onClick={next}
            className="absolute right-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 md:right-16"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M5 12h14m-6-6 6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </Reveal>
    </section>
  );
}

/* ---------------- Final CTA ---------------- */

export function FinalCta() {
  return (
    <section className="px-6 pb-24 pt-8">
      <Reveal className="mx-auto max-w-6xl">
        <div className="relative overflow-hidden rounded-3xl bg-foreground px-6 py-24 text-center">
          <div className="animate-slow-pulse pointer-events-none absolute inset-0">
            <div className="absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.652_0.202_44.4/0.35),transparent)] blur-3xl" />
          </div>
          <div className="relative">
            <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl">
              Let's Architect <span className="text-primary">What's Next</span>
            </h2>
            <p className="mx-auto mt-5 max-w-md text-sm text-white/60">
              The future is not something you navigate. It is something you build.
            </p>
            <div className="mt-8">
              <CtaButton>Talk to Our Architects</CtaButton>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
