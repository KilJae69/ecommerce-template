import Image from "next/image";
import { InteractiveHoverButton } from "../ui/interactive-hover-button";

export default function FollowUsOnInstagramSection() {
  return (
    <section className="py-4  lg:py-11.5">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
                  <h2 className="text-h2 text-gradient">Follow us on Instagram</h2>
                  <InteractiveHoverButton
                    external
                    href="https://www.instagram.com/"
                  >
                   Follow us
                  </InteractiveHoverButton>
                </div>
    
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8 md:mt-16">
                  <div className="grid gap-5 grid-cols-2">
                    <div className="relative aspect-square">
                      <Image
                        src="/assets/contact/contact-insta-1.jpg"
                        className="object-cover"
                        fill
                        alt="insta photo 1"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/assets/contact/contact-insta-6.jpg"
                        className="object-cover"
                        fill
                        alt="insta photo 6"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/assets/contact/contact-insta-3.jpg"
                        className="object-cover"
                        fill
                        alt="insta photo 3"
                      />
                    </div>
                    <div className="relative aspect-square">
                      <Image
                        src="/assets/contact/contact-insta-4.jpg"
                        className="object-cover"
                        fill
                        alt="insta photo 4"
                      />
                    </div>
                  </div>
    
                  <div className="relative aspect-square">
                    <Image
                      src="/assets/contact/contact-insta-9.jpg"
                      className="object-cover object-bottom"
                      fill
                      alt="insta photo 8"
                    />
                  </div>
                </div>
              </section>
  );
  
}