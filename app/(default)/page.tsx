import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import LargeTestimonial from "@/components/large-testimonial";
import Cta from "@/components/cta";
import TeamSection from "@/components/teamsection";
import Pricing from "@/components/pricing";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <LargeTestimonial />
      <TeamSection />
      <Pricing />
      <Cta />
    </>
  );
}
