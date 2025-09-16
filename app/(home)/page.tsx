import Hero from "@/components/HeroComponent";
import Portfolio from "@/components/PortfolioComponent";
import Services from "@/components/ServicesComponent";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
    </main>
  );
}
