import { Hero } from "@/components/hero";
import { AboutSection } from "@/components/about-section";
import { FeaturedDestinations } from "@/components/featured-destinations";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutSection />
      <FeaturedDestinations />
    </>
  );
}
