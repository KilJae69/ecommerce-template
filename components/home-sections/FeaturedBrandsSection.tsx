import { Container } from "../shared/Container";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import Expandable from "../ui/expandable";

export default function FeaturedBrandsSection() {
  return (
    <section className="py-12 lg:py-24">
      <Container>
        <div className="text-center flex gap-2 flex-col items-center mb-12">
            <MovingBorderBadge text="Our Top Picks"/>
          
          <h2 className="mt-2 text-h2 font-bold text-gradient">
            Featured Brands
          </h2>
          <p className="mt-2 text-gray-600 text-paragraph max-w-lg mx-auto">
            We partner with the world’s leading performance footwear labels—so
            you get the best of Nike, Adidas, Under Armour, and New Balance, all
            in one place.
          </p>
        </div>
        <Expandable />
      </Container>
    </section>
  );
}
