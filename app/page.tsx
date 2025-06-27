// src/components/pages/home-page.tsx

import BestSellersSection from "@/components/home-sections/BestSellersSection";
import CategoriesSection from "@/components/home-sections/CategoriesSection";
import FeaturedBrandsSection from "@/components/home-sections/FeaturedBrandsSection";
import HeroSlider from "@/components/home-sections/HeroSlider";
import MarqueeSection from "@/components/home-sections/MarqueeSection";
import SaleDividerSection from "@/components/home-sections/SaleDividerSection";
import SaleProductsSection from "@/components/home-sections/SaleProductsSection";
import TestimonialSection from "@/components/home-sections/TestimonialSection";
import { Container } from "@/components/shared/Container";
import FollowUsOnInstagramSection from "@/components/shared/FollowUsOnInstagramSection";

import GlareCTA from "@/components/shared/GlareCTA";

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <FeaturedBrandsSection />
      <MarqueeSection />
      <CategoriesSection />
      <BestSellersSection />
      <SaleDividerSection />
      <SaleProductsSection />
      <TestimonialSection/>
      <Container>
        <FollowUsOnInstagramSection />
      </Container>
      <GlareCTA />
    </>
  );
}
