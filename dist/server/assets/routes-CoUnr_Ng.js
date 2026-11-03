import { useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
//#region src/assets/icon.png
var icon_default = "/assets/icon-DfmTy91v.png";
//#endregion
//#region src/components/site/nav.tsx
var solutionItems = [
	"Modernize Your Foundation",
	"Innovate with AI & Data",
	"Fortify Your Defenses",
	"Empower Your Workforce"
];
var navLinks = [
	"Technology Practices",
	"Why Quadra",
	"Happy Customers",
	"Newsroom"
];
function Logo({ inverted = false }) {
	return /* @__PURE__ */ jsxs(Link, {
		to: "/",
		className: "flex items-center gap-2",
		children: [/* @__PURE__ */ jsx("span", {
			className: "flex size-7 items-center justify-center rounded-md font-display text-lg font-semibold text-primary-foreground",
			children: /* @__PURE__ */ jsx("img", { src: icon_default })
		}), /* @__PURE__ */ jsx("span", {
			className: `text-lg font-semibold tracking-tight ${inverted ? "text-background" : "text-foreground"}`,
			children: "Quadra"
		})]
	});
}
function Nav() {
	const [open, setOpen] = useState(false);
	return /* @__PURE__ */ jsxs("header", {
		className: "fixed inset-x-0 top-0 z-50 px-4 pt-4",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full border border-border/70 bg-card/85 px-5 shadow-sm backdrop-blur-md",
			children: [
				/* @__PURE__ */ jsx(Logo, {}),
				/* @__PURE__ */ jsxs("nav", {
					className: "hidden items-center gap-1 lg:flex",
					children: [/* @__PURE__ */ jsxs("div", {
						className: "group relative",
						children: [/* @__PURE__ */ jsxs("button", {
							className: "flex items-center gap-1 rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground",
							children: ["Solutions", /* @__PURE__ */ jsx("svg", {
								width: "10",
								height: "10",
								viewBox: "0 0 10 10",
								fill: "none",
								"aria-hidden": true,
								children: /* @__PURE__ */ jsx("path", {
									d: "M2 3.5 5 6.5 8 3.5",
									stroke: "currentColor",
									strokeWidth: "1.4",
									strokeLinecap: "round",
									strokeLinejoin: "round"
								})
							})]
						}), /* @__PURE__ */ jsx("div", {
							className: "invisible absolute left-0 top-full z-10 w-60 translate-y-1 rounded-2xl border border-border bg-card p-2 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
							children: solutionItems.map((item) => /* @__PURE__ */ jsx("a", {
								href: "#",
								className: "block rounded-xl px-3 py-2 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
								children: item
							}, item))
						})]
					}), navLinks.map((item) => /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "rounded-full px-3 py-2 text-sm text-foreground/80 transition-colors hover:text-foreground",
						children: item
					}, item))]
				}),
				/* @__PURE__ */ jsxs("div", {
					className: "flex items-center gap-1.5",
					children: [
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Language",
							className: "hidden size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground sm:flex",
							children: /* @__PURE__ */ jsxs("svg", {
								width: "17",
								height: "17",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.6",
								"aria-hidden": true,
								children: [/* @__PURE__ */ jsx("circle", {
									cx: "12",
									cy: "12",
									r: "9"
								}), /* @__PURE__ */ jsx("path", { d: "M3 12h18M12 3c2.5 2.6 3.8 5.7 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.7-3.8-9S9.5 5.6 12 3Z" })]
							})
						}),
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Search",
							className: "hidden size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted hover:text-foreground sm:flex",
							children: /* @__PURE__ */ jsxs("svg", {
								width: "16",
								height: "16",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.8",
								"aria-hidden": true,
								children: [/* @__PURE__ */ jsx("circle", {
									cx: "11",
									cy: "11",
									r: "7"
								}), /* @__PURE__ */ jsx("path", {
									d: "m20 20-3.5-3.5",
									strokeLinecap: "round"
								})]
							})
						}),
						/* @__PURE__ */ jsx("a", {
							href: "mailto:enquires@quadrasysterms.in",
							className: "rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03] hover:bg-primary/90",
							children: "Contact Us"
						}),
						/* @__PURE__ */ jsx("button", {
							"aria-label": "Menu",
							onClick: () => setOpen((v) => !v),
							className: "flex size-9 items-center justify-center rounded-full text-foreground/70 transition-colors hover:bg-muted lg:hidden",
							children: /* @__PURE__ */ jsx("svg", {
								width: "18",
								height: "18",
								viewBox: "0 0 24 24",
								fill: "none",
								stroke: "currentColor",
								strokeWidth: "1.8",
								"aria-hidden": true,
								children: open ? /* @__PURE__ */ jsx("path", {
									d: "M6 6l12 12M18 6 6 18",
									strokeLinecap: "round"
								}) : /* @__PURE__ */ jsx("path", {
									d: "M4 7h16M4 12h16M4 17h16",
									strokeLinecap: "round"
								})
							})
						})
					]
				})
			]
		}), open && /* @__PURE__ */ jsx("div", {
			className: "mx-auto mt-2 max-w-6xl rounded-2xl border border-border bg-card p-3 shadow-lg lg:hidden",
			children: [...solutionItems, ...navLinks].map((item) => /* @__PURE__ */ jsx("a", {
				href: "#",
				onClick: () => setOpen(false),
				className: "block rounded-xl px-4 py-2.5 text-sm text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
				children: item
			}, item))
		})]
	});
}
//#endregion
//#region src/assets/ISO1.avif
var ISO1_default = "/assets/ISO1-DNyepYaE.avif";
//#endregion
//#region src/assets/ISO2.avif
var ISO2_default = "/assets/ISO2-D3oVbB29.avif";
//#endregion
//#region src/assets/ISO3.avif
var ISO3_default = "/assets/ISO3-C2hGL11y.avif";
//#endregion
//#region src/components/site/footer.tsx
var solutions = [
	"Modernize Your Foundation",
	"Innovate with AI & Data",
	"Fortify Your Defenses",
	"Empower Your Workforce"
];
var company = [
	"Why Quadra",
	"Customer Stories",
	"Insights",
	"Careers",
	"Talk to an Architect"
];
var badges = [
	{
		name: "ISO 9001",
		image: ISO1_default
	},
	{
		name: "ISO 27001",
		image: ISO2_default
	},
	{
		name: "ISO 42001",
		image: ISO3_default
	}
];
var socials = [
	{
		label: "X",
		path: "M18.9 2H22l-7.6 8.7L23.3 22h-6.9l-5.4-7-6.2 7H1.7l8.1-9.3L.6 2h7.1l4.9 6.4L18.9 2Zm-1.2 18h1.9L6.9 3.9H4.9L17.7 20Z"
	},
	{
		label: "Facebook",
		path: "M13.5 22v-8h2.7l.4-3.2h-3.1V8.7c0-.9.3-1.6 1.6-1.6h1.7V4.2c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3v2.4H7.4V14h2.7v8h3.4Z"
	},
	{
		label: "Instagram",
		path: "M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.8.2 2.2.4.6.2 1 .5 1.4.9.4.4.7.8.9 1.4.2.4.4 1 .4 2.2.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.2 1.8-.4 2.2-.2.6-.5 1-.9 1.4-.4.4-.8.7-1.4.9-.4.2-1 .4-2.2.4-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.8-.2-2.2-.4-.6-.2-1-.5-1.4-.9-.4-.4-.7-.8-.9-1.4-.2-.4-.4-1-.4-2.2-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.2-1.8.4-2.2.2-.6.5-1 .9-1.4.4-.4.8-.7 1.4-.9.4-.2 1-.4 2.2-.4 1.3-.1 1.7-.1 4.9-.1Zm0 3.2a6.6 6.6 0 1 0 0 13.2 6.6 6.6 0 0 0 0-13.2Zm0 10.9a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Zm6.9-11.2a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"
	},
	{
		label: "LinkedIn",
		path: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.5c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9V21h-4V9Z"
	},
	{
		label: "YouTube",
		path: "M23 12s0-3.3-.4-4.8c-.2-.8-.9-1.5-1.7-1.7C19.4 5 12 5 12 5s-7.4 0-8.9.5c-.8.2-1.5.9-1.7 1.7C1 8.7 1 12 1 12s0 3.3.4 4.8c.2.8.9 1.5 1.7 1.7 1.5.5 8.9.5 8.9.5s7.4 0 8.9-.5c-.8-.2 1.5-.9 1.7-1.7.4-1.5.4-4.8.4-4.8ZM9.8 15.5v-7l6.2 3.5-6.2 3.5Z"
	}
];
function Footer() {
	return /* @__PURE__ */ jsx("footer", {
		id: "contact",
		className: "bg-foreground text-background",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-6xl px-6 py-16",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "grid gap-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.3fr]",
				children: [
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsxs("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ jsx("span", {
								className: "flex size-7 items-center justify-center rounded-md font-display text-lg font-semibold text-primary-foreground",
								children: /* @__PURE__ */ jsx("img", { src: icon_default })
							}), /* @__PURE__ */ jsx("span", {
								className: "text-lg font-semibold tracking-tight",
								children: "Quadra"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 max-w-xs text-sm leading-relaxed text-background/60",
							children: "Your trusted technology partner for Cloud, AI, Security, Modern Workplace, Business Applications and Managed Services — turning complex innovation into a competitive edge."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 flex gap-3",
							children: badges.map((badge) => /* @__PURE__ */ jsx("span", {
								className: "flex size-16 items-center justify-center rounded-full border border-background/25 text-center text-[9px] font-semibold uppercase leading-tight tracking-wide text-background/70",
								children: /* @__PURE__ */ jsx("img", { src: badge.image })
							}, badge.name))
						})
					] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-sm font-semibold",
						children: "Solutions"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-3",
						children: solutions.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							className: "text-sm text-background/60 transition-colors hover:text-primary",
							children: item
						}) }, item))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h4", {
						className: "text-sm font-semibold",
						children: "Company"
					}), /* @__PURE__ */ jsx("ul", {
						className: "mt-4 space-y-3",
						children: company.map((item) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", {
							href: "#",
							className: "text-sm text-background/60 transition-colors hover:text-primary",
							children: item
						}) }, item))
					})] }),
					/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("h4", {
							className: "text-sm font-semibold",
							children: "Get the Blueprint, Delivered"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-4 text-sm text-background/60",
							children: "Your monthly download of everything new in technology that matters to your business."
						}),
						/* @__PURE__ */ jsxs("form", {
							className: "mt-4 flex overflow-hidden rounded-full border border-background/20 bg-background/5",
							onSubmit: (e) => e.preventDefault(),
							children: [/* @__PURE__ */ jsx("input", {
								type: "email",
								placeholder: "quadrasysterms.in",
								className: "w-full bg-transparent px-4 py-2.5 text-sm text-background placeholder:text-background/40 focus:outline-none"
							}), /* @__PURE__ */ jsx("button", {
								type: "submit",
								className: "shrink-0 rounded-full bg-primary px-5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
								children: "Subscribe"
							})]
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-6 flex gap-2",
							children: socials.map((s) => /* @__PURE__ */ jsx("a", {
								href: "#",
								"aria-label": s.label,
								className: "flex size-9 items-center justify-center rounded-full border border-background/20 text-background/70 transition-colors hover:border-primary hover:text-primary",
								children: /* @__PURE__ */ jsx("svg", {
									width: "15",
									height: "15",
									viewBox: "0 0 24 24",
									fill: "currentColor",
									"aria-hidden": true,
									children: /* @__PURE__ */ jsx("path", { d: s.path })
								})
							}, s.label))
						})
					] })
				]
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-14 flex flex-col items-center justify-between gap-4 border-t border-background/10 pt-6 text-xs text-background/50 sm:flex-row",
				children: [/* @__PURE__ */ jsx("p", { children: "Quadra Systerms Pvt. Ltd. © All rights reserved" }), /* @__PURE__ */ jsxs("div", {
					className: "flex gap-6",
					children: [/* @__PURE__ */ jsx("a", {
						href: "#",
						className: "transition-colors hover:text-primary",
						children: "Privacy policy"
					}), /* @__PURE__ */ jsx("a", {
						href: "#",
						className: "transition-colors hover:text-primary",
						children: "Terms of Use"
					})]
				})]
			})]
		})
	});
}
//#endregion
//#region src/components/site/reveal.tsx
/** Fade-and-rise reveal when the element scrolls into view. */
function Reveal({ children, delay = 0, className = "" }) {
	const ref = useRef(null);
	useEffect(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) if (entry.isIntersecting) {
				el.classList.add("is-visible");
				observer.disconnect();
			}
		}, { threshold: .12 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ jsx("div", {
		ref,
		className: `reveal ${className}`,
		style: { "--reveal-delay": `${delay}ms` },
		children
	});
}
//#endregion
//#region src/assets/awards-galaxy.jpg
var awards_galaxy_default = "/assets/awards-galaxy-y23Z0YoL.jpg";
//#endregion
//#region src/assets/innovation-strategy.jpg
var innovation_strategy_default = "/assets/innovation-strategy-C_dvE4eR.jpg";
//#endregion
//#region src/assets/foundation-handshake.jpg
var foundation_handshake_default = "/assets/foundation-handshake-DGOs6U7i.jpg";
//#endregion
//#region src/assets/automation-team.jpg
var automation_team_default = "/assets/automation-team-oVunz3ow.jpg";
//#endregion
//#region src/assets/workforce-highfive.jpg
var workforce_highfive_default = "/assets/workforce-highfive-DOxO4jNY.jpg";
//#endregion
//#region src/assets/research-lab.jpg
var research_lab_default = "/assets/research-lab-Dfx62HZd.jpg";
//#endregion
//#region src/assets/business-ops.jpg
var business_ops_default = "/assets/business-ops-DY581G6S.jpg";
//#endregion
//#region src/assets/cloud-savings.jpg
var cloud_savings_default = "/assets/cloud-savings-DxOWj4yU.jpg";
//#endregion
//#region src/assets/factory-floor.jpg
var factory_floor_default = "/assets/factory-floor-CgyTWItY.jpg";
//#endregion
//#region src/assets/security-ops.jpg
var security_ops_default = "/assets/security-ops-1xUKEVE_.jpg";
//#endregion
//#region src/assets/ecommerce-peak.jpg
var ecommerce_peak_default = "/assets/ecommerce-peak-SugWuIrQ.jpg";
//#endregion
//#region src/components/site/sections.tsx
function CtaButton({ children, href = "#" }) {
	return /* @__PURE__ */ jsxs("a", {
		href,
		className: "inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm transition-all hover:scale-[1.04] hover:bg-primary/90",
		children: [children, /* @__PURE__ */ jsx("svg", {
			width: "13",
			height: "13",
			viewBox: "0 0 24 24",
			fill: "none",
			stroke: "currentColor",
			strokeWidth: "2",
			"aria-hidden": true,
			children: /* @__PURE__ */ jsx("path", {
				d: "M5 12h14m-6-6 6 6-6 6",
				strokeLinecap: "round",
				strokeLinejoin: "round"
			})
		})]
	});
}
function SectionHeading({ line1, line2 }) {
	return /* @__PURE__ */ jsxs("h2", {
		className: "font-display text-4xl leading-tight font-medium tracking-tight text-foreground sm:text-5xl",
		children: [
			line1,
			/* @__PURE__ */ jsx("br", {}),
			/* @__PURE__ */ jsx("span", {
				className: "text-primary",
				children: line2
			})
		]
	});
}
function Hero() {
	return /* @__PURE__ */ jsxs("section", {
		className: "relative overflow-hidden pt-44 pb-16",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "pointer-events-none absolute inset-0 -z-10",
			children: [
				/* @__PURE__ */ jsx("div", { className: "hero-blob absolute -top-40 left-1/2 h-[36rem] w-[52rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.85_0.11_60/0.55),transparent)] blur-3xl" }),
				/* @__PURE__ */ jsx("div", { className: "hero-blob absolute -top-24 right-[-6rem] h-[28rem] w-[34rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.85_0.07_250/0.5),transparent)] blur-3xl [animation-delay:-6s]" }),
				/* @__PURE__ */ jsx("div", { className: "hero-blob absolute -top-32 left-[-8rem] h-[26rem] w-[32rem] rounded-full bg-[radial-gradient(closest-side,oklch(0.9_0.06_30/0.45),transparent)] blur-3xl [animation-delay:-3s]" })
			]
		}), /* @__PURE__ */ jsx("div", {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: /* @__PURE__ */ jsxs(Reveal, { children: [
				/* @__PURE__ */ jsx("p", {
					className: "font-display text-xl italic text-foreground/70",
					children: "Beyond Technology"
				}),
				/* @__PURE__ */ jsxs("h1", {
					className: "mt-3 font-display text-5xl font-medium leading-[1.1] tracking-tight text-foreground sm:text-6xl",
					children: [
						"We Architect Your Ambition with",
						/* @__PURE__ */ jsx("br", {}),
						/* @__PURE__ */ jsx("span", {
							className: "text-primary",
							children: "Cloud & AI"
						})
					]
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base",
					children: "For 25 years, we have partnered with global business leaders to architect and build Intelligent Enterprises — translating complex Cloud and AI innovation into a clear competitive edge."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(CtaButton, { children: "Schedule Your Ambition Blueprint Session" })
				})
			] })
		})]
	});
}
var clients = [
	{
		name: "AXIOM",
		style: "font-semibold tracking-[0.3em]"
	},
	{
		name: "nordvik",
		style: "font-semibold lowercase tracking-tight"
	},
	{
		name: "GALLANT",
		style: "font-display font-semibold tracking-widest"
	},
	{
		name: "helixmart",
		style: "font-semibold lowercase"
	},
	{
		name: "IONIQ",
		style: "font-medium tracking-[0.4em]"
	},
	{
		name: "Verdant Labs",
		style: "font-display italic"
	},
	{
		name: "CRUX&CO",
		style: "font-bold tracking-tight"
	},
	{
		name: "Fairmont",
		style: "font-display font-semibold"
	}
];
function LogoMarquee() {
	return /* @__PURE__ */ jsxs("section", {
		className: "py-10",
		children: [/* @__PURE__ */ jsx(Reveal, {
			className: "mx-auto max-w-6xl px-6",
			children: /* @__PURE__ */ jsx("p", {
				className: "text-center text-sm text-muted-foreground",
				children: "Trusted by Business Leaders"
			})
		}), /* @__PURE__ */ jsx(Reveal, {
			delay: 150,
			children: /* @__PURE__ */ jsx("div", {
				className: "marquee-mask mt-8 overflow-hidden",
				children: /* @__PURE__ */ jsx("div", {
					className: "animate-marquee flex w-max items-center gap-20 pr-20",
					children: [...clients, ...clients].map((c, i) => /* @__PURE__ */ jsx("span", {
						className: `whitespace-nowrap text-2xl text-foreground/35 grayscale transition-colors hover:text-foreground/60 ${c.style}`,
						children: c.name
					}, `${c.name}-${i}`))
				})
			})
		})]
	});
}
function AwardsCard() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-16",
		children: /* @__PURE__ */ jsx(Reveal, {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-3xl bg-foreground",
				children: [
					/* @__PURE__ */ jsx("img", {
						src: awards_galaxy_default,
						alt: "",
						"aria-hidden": true,
						className: "absolute inset-0 h-full w-full object-cover opacity-70"
					}),
					/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-foreground/60" }),
					/* @__PURE__ */ jsxs("div", {
						className: "relative px-6 py-24 text-center sm:py-28",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-medium uppercase tracking-[0.25em] text-white/60",
								children: "An Unprecedented Achievement"
							}),
							/* @__PURE__ */ jsxs("h2", {
								className: "mt-4 font-display text-4xl font-medium leading-tight tracking-tight text-white sm:text-5xl",
								children: [
									"20 Consecutive Years of",
									/* @__PURE__ */ jsx("br", {}),
									/* @__PURE__ */ jsx("span", {
										className: "text-primary",
										children: "Microsoft Global Recognition"
									})
								]
							}),
							/* @__PURE__ */ jsx("p", {
								className: "mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-white/60",
								children: "Through every major technology shift — from the data center to the cloud to the AI era — our work has been recognized on the world stage for innovation and customer impact, twenty years running."
							}),
							/* @__PURE__ */ jsx("div", {
								className: "mt-8",
								children: /* @__PURE__ */ jsx(CtaButton, { children: "View More" })
							})
						]
					})
				]
			})
		})
	});
}
function Partners() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "mx-auto max-w-4xl text-center",
			children: [/* @__PURE__ */ jsx(SectionHeading, {
				line1: "Top Tier Recognition from",
				line2: "Industry Leaders"
			}), /* @__PURE__ */ jsxs("div", {
				className: "mt-14 flex flex-wrap items-center justify-center gap-x-16 gap-y-8",
				children: [
					/* @__PURE__ */ jsxs("span", {
						className: "flex items-center gap-2.5",
						children: [/* @__PURE__ */ jsxs("span", {
							className: "grid size-7 grid-cols-2 gap-[2px]",
							children: [
								/* @__PURE__ */ jsx("span", { className: "rounded-[2px] bg-[#f25022]" }),
								/* @__PURE__ */ jsx("span", { className: "rounded-[2px] bg-[#7fba00]" }),
								/* @__PURE__ */ jsx("span", { className: "rounded-[2px] bg-[#00a4ef]" }),
								/* @__PURE__ */ jsx("span", { className: "rounded-[2px] bg-[#ffb900]" })
							]
						}), /* @__PURE__ */ jsx("span", {
							className: "text-2xl font-semibold tracking-tight text-[#5e5e5e]",
							children: "Microsoft"
						})]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "flex flex-col items-center",
						children: [/* @__PURE__ */ jsx("span", {
							className: "text-3xl font-bold lowercase tracking-tight text-[#232f3e]",
							children: "aws"
						}), /* @__PURE__ */ jsxs("svg", {
							width: "58",
							height: "10",
							viewBox: "0 0 58 10",
							"aria-hidden": true,
							children: [/* @__PURE__ */ jsx("path", {
								d: "M2 3c14 7 40 7 54-1",
								stroke: "#f26102",
								strokeWidth: "2.4",
								fill: "none",
								strokeLinecap: "round"
							}), /* @__PURE__ */ jsx("path", {
								d: "M53 1l4 1.5-3 3",
								fill: "none",
								stroke: "#f26102",
								strokeWidth: "2.4",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})]
						})]
					}),
					/* @__PURE__ */ jsxs("span", {
						className: "text-2xl font-medium tracking-tight text-[#5f6368]",
						children: [
							/* @__PURE__ */ jsx("span", {
								className: "text-[#4285f4]",
								children: "G"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[#ea4335]",
								children: "o"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[#fbbc05]",
								children: "o"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[#4285f4]",
								children: "g"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[#34a853]",
								children: "l"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "text-[#ea4335]",
								children: "e"
							}),
							/* @__PURE__ */ jsx("span", {
								className: "ml-2 text-[#5f6368]",
								children: "Cloud"
							})
						]
					})
				]
			})]
		})
	});
}
function Compass() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ jsx(SectionHeading, {
					line1: "Prefer not to navigate?",
					line2: "Tell us what you're architecting"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-sm text-muted-foreground",
					children: "Get an answer customized for you. Just like our solutions."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(CtaButton, { children: "The Compass" })
				})
			]
		})
	});
}
function FoundersDesk() {
	return /* @__PURE__ */ jsx("section", {
		className: "bg-muted px-6 py-24",
		children: /* @__PURE__ */ jsxs(Reveal, {
			className: "mx-auto max-w-3xl text-center",
			children: [
				/* @__PURE__ */ jsx(SectionHeading, {
					line1: "From the",
					line2: "Founder's Desk"
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted-foreground",
					children: "Perspective on AI, enterprise transformation, and building at scale — shaped by real-world execution and long-term partnerships."
				}),
				/* @__PURE__ */ jsx("div", {
					className: "mt-8",
					children: /* @__PURE__ */ jsx(CtaButton, { children: "Read our Founders' Blog" })
				})
			]
		})
	});
}
var questions = [
	{
		eyebrow: "The Growth Question",
		title: "How can AI create new products, new revenue streams, and disrupt markets?",
		body: "We help you see what is possible. As your innovation partner, we co-create AI-native business models in strategic workshops and architect the scalable platforms to launch them.",
		link: "Explore Innovation Strategy",
		img: innovation_strategy_default
	},
	{
		eyebrow: "The Foundation Question",
		title: "What are the right investments in data, cloud, and security to succeed in AI, and how do we manage the risks?",
		body: "We build the bedrock — clear, vendor-agnostic roadmaps for an AI-ready data estate, wrapped in the security and governance frameworks that protect it.",
		link: "Assess Your Foundation",
		img: foundation_handshake_default
	},
	{
		eyebrow: "The Productivity Question",
		title: "How do we deploy AI to achieve radical efficiency and reinvent core processes?",
		body: "We find the value and architect for efficiency. Intelligent process audits pinpoint high-ROI automation, and we build the AI-driven workflows that capture it.",
		link: "See Automation in Action",
		img: automation_team_default
	},
	{
		eyebrow: "The Transformation Question",
		title: "How do we lead this change and bring our people and culture with us on the journey?",
		body: "We guide the transformation — strategic counsel and change management to navigate the cultural and talent shifts on the road to an Intelligent Enterprise.",
		link: "Discuss Your AI Strategy",
		img: workforce_highfive_default
	}
];
function Questions() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 py-24",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-5xl",
			children: [/* @__PURE__ */ jsxs(Reveal, {
				className: "text-center",
				children: [/* @__PURE__ */ jsx(SectionHeading, {
					line1: "The Questions Defining",
					line2: "the AI Era"
				}), /* @__PURE__ */ jsx("p", {
					className: "mx-auto mt-5 max-w-2xl text-sm leading-relaxed text-muted-foreground",
					children: "We architect the answers. Every enterprise ambition today revolves around a few critical questions — we partner with leaders to build the strategic and technical blueprints that turn them into a competitive advantage."
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-14 grid gap-6 md:grid-cols-2",
				children: questions.map((q, i) => /* @__PURE__ */ jsx(Reveal, {
					delay: i * 120,
					children: /* @__PURE__ */ jsxs("article", {
						className: "group flex h-full flex-col gap-4 rounded-3xl border border-border/70 bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
						children: [
							/* @__PURE__ */ jsx("p", {
								className: "text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground",
								children: q.eyebrow
							}),
							/* @__PURE__ */ jsx("h3", {
								className: "font-display text-2xl font-medium leading-snug tracking-tight text-foreground",
								children: q.title
							}),
							/* @__PURE__ */ jsx("p", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: q.body
							}),
							/* @__PURE__ */ jsx("img", {
								src: q.img,
								alt: "",
								loading: "lazy",
								width: 1280,
								height: 864,
								className: "mt-2 aspect-[16/9] w-full rounded-2xl object-cover"
							}),
							/* @__PURE__ */ jsxs("a", {
								href: "#",
								className: "mt-2 inline-flex items-center gap-2 text-sm font-medium text-primary transition-colors hover:text-primary/80",
								children: [q.link, /* @__PURE__ */ jsx("svg", {
									width: "13",
									height: "13",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									"aria-hidden": true,
									children: /* @__PURE__ */ jsx("path", {
										d: "M5 12h14m-6-6 6 6-6 6",
										strokeLinecap: "round",
										strokeLinejoin: "round"
									})
								})]
							})
						]
					})
				}, q.eyebrow))
			})]
		})
	});
}
var slides = [
	{
		img: research_lab_default,
		caption: "20,000 researchers accelerating their critical science"
	},
	{
		img: business_ops_default,
		caption: "Every 4 seconds, enabling a critical business decision"
	},
	{
		img: cloud_savings_default,
		caption: "Six-figure cloud savings architected for a financial leader"
	},
	{
		img: factory_floor_default,
		caption: "30,000 plant workers driving factory efficiency"
	},
	{
		img: security_ops_default,
		caption: "90% fewer application-layer attacks for a pharma innovator"
	},
	{
		img: ecommerce_peak_default,
		caption: "100% uptime for an e-commerce leader at peak sales"
	}
];
function ScaleCarousel() {
	const [index, setIndex] = useState(0);
	useEffect(() => {
		const timer = setInterval(() => setIndex((v) => (v + 1) % slides.length), 4500);
		return () => clearInterval(timer);
	}, []);
	const prev = () => setIndex((v) => (v - 1 + slides.length) % slides.length);
	const next = () => setIndex((v) => (v + 1) % slides.length);
	const offset = `calc(50% - ${index * 46}% - 23%)`;
	return /* @__PURE__ */ jsxs("section", {
		className: "overflow-hidden py-24",
		children: [/* @__PURE__ */ jsx(Reveal, {
			className: "mx-auto max-w-4xl px-6 text-center",
			children: /* @__PURE__ */ jsx(SectionHeading, {
				line1: "The Scale of the Ambitions",
				line2: "We Architect"
			})
		}), /* @__PURE__ */ jsx(Reveal, {
			delay: 150,
			className: "relative mt-14",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative",
				children: [
					/* @__PURE__ */ jsx("div", {
						className: "flex items-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
						style: { transform: `translateX(${offset})` },
						children: slides.map((s, i) => {
							const active = i === index;
							return /* @__PURE__ */ jsx("div", {
								className: `shrink-0 px-3 transition-all duration-700 md:w-[46%] ${active ? "opacity-100" : "opacity-40 grayscale"}`,
								children: /* @__PURE__ */ jsxs("div", {
									className: "relative overflow-hidden rounded-3xl",
									children: [
										/* @__PURE__ */ jsx("img", {
											src: s.img,
											alt: "",
											loading: "lazy",
											width: 1280,
											height: 864,
											className: `aspect-[16/10] w-full object-cover transition-all duration-700 ${active ? "scale-100" : "scale-95"}`
										}),
										/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" }),
										/* @__PURE__ */ jsx("p", {
											className: "absolute inset-x-8 bottom-8 font-display text-2xl font-medium leading-snug text-white sm:text-3xl",
											children: s.caption
										})
									]
								})
							}, s.caption);
						})
					}),
					/* @__PURE__ */ jsx("button", {
						"aria-label": "Previous",
						onClick: prev,
						className: "absolute left-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 md:left-16",
						children: /* @__PURE__ */ jsx("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							"aria-hidden": true,
							children: /* @__PURE__ */ jsx("path", {
								d: "M19 12H5m6 6-6-6 6-6",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})
					}),
					/* @__PURE__ */ jsx("button", {
						"aria-label": "Next",
						onClick: next,
						className: "absolute right-4 top-1/2 z-10 flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:bg-primary/90 md:right-16",
						children: /* @__PURE__ */ jsx("svg", {
							width: "18",
							height: "18",
							viewBox: "0 0 24 24",
							fill: "none",
							stroke: "currentColor",
							strokeWidth: "2",
							"aria-hidden": true,
							children: /* @__PURE__ */ jsx("path", {
								d: "M5 12h14m-6-6 6 6-6 6",
								strokeLinecap: "round",
								strokeLinejoin: "round"
							})
						})
					})
				]
			})
		})]
	});
}
function FinalCta() {
	return /* @__PURE__ */ jsx("section", {
		className: "px-6 pb-24 pt-8",
		children: /* @__PURE__ */ jsx(Reveal, {
			className: "mx-auto max-w-6xl",
			children: /* @__PURE__ */ jsxs("div", {
				className: "relative overflow-hidden rounded-3xl bg-foreground px-6 py-24 text-center",
				children: [/* @__PURE__ */ jsx("div", {
					className: "animate-slow-pulse pointer-events-none absolute inset-0",
					children: /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-0 h-72 w-[42rem] -translate-x-1/2 rounded-full bg-[radial-gradient(closest-side,oklch(0.652_0.202_44.4/0.35),transparent)] blur-3xl" })
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative",
					children: [
						/* @__PURE__ */ jsxs("h2", {
							className: "font-display text-4xl font-medium tracking-tight text-white sm:text-5xl",
							children: ["Let's Architect ", /* @__PURE__ */ jsx("span", {
								className: "text-primary",
								children: "What's Next"
							})]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mx-auto mt-5 max-w-md text-sm text-white/60",
							children: "The future is not something you navigate. It is something you build."
						}),
						/* @__PURE__ */ jsx("div", {
							className: "mt-8",
							children: /* @__PURE__ */ jsx(CtaButton, { children: "Talk to Our Architects" })
						})
					]
				})]
			})
		})
	});
}
//#endregion
//#region src/routes/index.tsx?tsr-split=component
function Index() {
	return /* @__PURE__ */ jsxs("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ jsx(Nav, {}),
			/* @__PURE__ */ jsxs("main", { children: [
				/* @__PURE__ */ jsx(Hero, {}),
				/* @__PURE__ */ jsx(LogoMarquee, {}),
				/* @__PURE__ */ jsx(AwardsCard, {}),
				/* @__PURE__ */ jsx(Partners, {}),
				/* @__PURE__ */ jsx(Compass, {}),
				/* @__PURE__ */ jsx(FoundersDesk, {}),
				/* @__PURE__ */ jsx(Questions, {}),
				/* @__PURE__ */ jsx(ScaleCarousel, {}),
				/* @__PURE__ */ jsx(FinalCta, {})
			] }),
			/* @__PURE__ */ jsx(Footer, {})
		]
	});
}
//#endregion
export { Index as component };
