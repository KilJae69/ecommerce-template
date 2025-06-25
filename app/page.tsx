// src/components/pages/home-page.tsx

import FeaturedBrandsSection from "@/components/home-sections/FeaturedBrandsSection";
import HeroSlider from "@/components/home-sections/HeroSlider";

import GlareCTA from "@/components/shared/GlareCTA";
// import { Container } from "@/components/shared/Container";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturedBrandsSection />
      
        <GlareCTA />
     
    </>
  );
}
