import Image from "next/image";
import { Container } from "../shared/Container";
import { MarqueeTestimonials } from "./MarqueeTestimonials";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function TestimonialSection() {
  return (
    <section className="my-12 lg:my-24 py-12 lg:py-24 overflow-hidden bg-primary relative">
      <Container>
        <div className="mx-auto mb-12 grid md:grid-cols-2 md:gap-8 items-center">
          {/* Left Column: Heading + Blurb */}
          <div className="relative z-10 space-y-4">
              <MovingBorderBadge text="What They're Saying" />
            <h2 className="text-h2 text-gradient-accent">
              Hear From Our Customers
            </h2>
            <p className="mt-4 text-paragraph !text-white max-w-md">
              Don’t just take our word for it—see why thousands of sneakerheads
              trust us for comfort, style, and next-level performance.
            </p>
            <InteractiveHoverButton invert href="/collections">Find Right Fit</InteractiveHoverButton>
          </div>
          
             <Image
          width={700}
          height={700}
          src="/images/testimonial/testimonial-main-5.png"
          alt="Smiling customer in sneakers"
          className=" absolute w-full   max-w-[800px]  right-0  xl:right-[20%]   bottom-0 object-cover"
        />
         

          {/* Right Column: Hero Image of a Happy Customer */}
          {/* <div className="mt-8 md:mt-0">
        <Image
        width={400}
        height={400}
          src="/images/testimonial/testimonial-main-2.jpg"
          alt="Smiling customer in sneakers"
          className="w-full rounded-lg shadow-lg max-w-sm object-cover"
        />
      </div> */}
        </div>
      </Container>
      <div className="lg:mt-6 relative z-10">
        <MarqueeTestimonials />
      </div>
      
       
      
    </section>
  );
}
