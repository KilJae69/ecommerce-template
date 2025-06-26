// src/components/pages/home-page.tsx

import BestSellersSection from "@/components/home-sections/BestSellersSection";
import CategoriesSection from "@/components/home-sections/CategoriesSection";
// import FeaturedBrandsSection from "@/components/home-sections/FeaturedBrandsSection";
import HeroSlider from "@/components/home-sections/HeroSlider";
import MarqueeSection from "@/components/home-sections/MarqueeSection";

import GlareCTA from "@/components/shared/GlareCTA";
// import { Container } from "@/components/shared/Container";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      {/* <FeaturedBrandsSection /> */}
      <MarqueeSection/>
      <CategoriesSection/>
      <BestSellersSection/>
        <GlareCTA />
     
    </>
  );
}
