import AboutUs from "@/components/AboutMBT";
import CTASection from "@/components/CTA";
import Hero from "@/components/HeroComponent";
import Portfolio from "@/components/PortfolioComponent";
import Services from "@/components/ServicesComponent";
import Testimonials from "@/components/TestimonalComponent";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      <AboutUs />
      <Testimonials />
      <CTASection />
    </main>
  );
}
