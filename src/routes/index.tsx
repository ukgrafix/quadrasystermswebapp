import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/nav";
import { Footer } from "@/components/site/footer";
import {
  Hero,
  LogoMarquee,
  AwardsCard,
  Partners,
  Compass,
  FoundersDesk,
  Questions,
  ScaleCarousel,
  FinalCta,
} from "@/components/site/sections";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Quadra — We Architect Your Ambition with Cloud & AI" },
      {
        name: "description",
        content:
          "Quadra partners with global business leaders to architect Intelligent Enterprises — translating complex Cloud and AI innovation into a clear competitive edge.",
      },
      { property: "og:title", content: "Quadra — We Architect Your Ambition with Cloud & AI" },
      {
        property: "og:description",
        content: "Architecting Intelligent Enterprises with Cloud & AI for 25 years.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <LogoMarquee />
        <AwardsCard />
        <Partners />
        <Compass />
        <FoundersDesk />
        <Questions />
        <ScaleCarousel />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
}
