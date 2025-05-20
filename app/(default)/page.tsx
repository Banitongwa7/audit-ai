import Hero from "@/components/hero-home";
import BusinessCategories from "@/components/business-categories";
import FeaturesPlanet from "@/components/features-planet";
import Describe from "@/components/describe";
import Cta from "@/components/cta";
import TeamSection from "@/components/teamsection";

export default function Home() {
  return (
    <>
      <Hero />
      <BusinessCategories />
      <FeaturesPlanet />
      <Describe />
      <TeamSection />
      <Cta />
    </>
  );
}
