import { Container } from "../shared/Container";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import Expandable from "../ui/expandable";


export default function FeaturedBrandsSection() {
  return (
    <section className="my-12 lg:my-24">
      <Container>
        <div className="text-center flex gap-2 flex-col items-center mb-12">
          <MovingBorderBadge text="Our Top Picks" />

          <h2 className="mt-2 text-h2 font-bold text-gradient">
            Featured Brands
          </h2>
          <p className="mt-2  text-paragraph max-w-xl mx-auto">
            We partner with the world’s leading performance footwear labels—so
            you get the best of Nike, Adidas, Under Armour, and New Balance, all
            in one place.
          </p>
        </div>
        <Expandable />
        {/* <div className="my-12 lg:my-24  bg-white px-4 flex gap-6 items-center py-4 rounded-3xl">
          <div>
            <h3 className=" text-h1">Summer Sale!</h3>
          </div>
          <div className="bg-primary py-4 border-l-0 pr-4 rounded-tr-3xl rounded-br-3xl [clip-path:polygon(5%_0,100%_0,100%_100%,0%100%)]">
            <div className="w-full  flex h-full border  border-dashed bg-primary text-white  pl-0 border-l-0 rounded-tr-3xl rounded-br-3xl">
              <Marquee  className="[--duration:20s] w-full flex-1">
                <p className="text-white text-3xl mr-46">
                  Shop now and get up to 50% discount *
                </p>
                
              </Marquee>
              <div className="ml-2">
                <InteractiveHoverButton invert>Shop Now</InteractiveHoverButton>
              </div>
            </div>
          </div>
        </div> */}
      </Container>
    </section>
  );
}
