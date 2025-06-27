// import ContactForm from "@/components/contact/ContactForm";
import VanishingContactForm from "@/components/contact/VanishingContactForm";

import { Container } from "@/components/shared/Container";
import FollowUsOnInstagramSection from "@/components/shared/FollowUsOnInstagramSection";
import GlareCTA from "@/components/shared/GlareCTA";



export default function ContactPage() {
 
  return (
    <>
      <section className="relative py-12 mt-42 lg:pb-24">
        <Container>
          <section>
            <div className="flex mx-auto text-center flex-col justify-center items-center py-6 gap-4 max-w-3xl">
              <h1 className="text-h1 text-gradient">Contact Us</h1>
              <p className="text-paragraph">
                We’d love to hear from you. Whether you have a question about
                our features, pricing, or anything else, our team is here to
                help.
              </p>
            </div>

           <VanishingContactForm/>
          </section>

          <section className=" py-4  lg:py-11.5">
            <div className="flex mx-auto text-center flex-col justify-center items-center py-6 gap-4 max-w-3xl">
              <h2 className="text-h1 text-gradient">
                Prefer to reach out directly?
              </h2>
              <p className="text-paragraph">
                Choose from Sales, Support, or Influencer Partnerships below and
                email the right team for a fast response.
              </p>
            </div>

            <div className="grid items-stretch py-6 gap-12 grid-cols-1 md:grid-cols-3">
              <div className="flex h-full justify-between flex-col text-center items-center gap-4 md:gap-8">
                <div className="aspect-square w-24 bg-primary-light flex items-center justify-center rounded-full">
                  <svg
                    stroke="#d4af37"
                    fill="none"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-5xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                    <line x1="12" y1="22.08" x2="12" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-semibold ">Sales Inquiries</h3>
                <p className="text-paragraph">
                  Questions about bulk orders, pricing, or partnerships? Our
                  Sales team is happy to assist.
                </p>
                <span className="relative group inline-block">
                  <a
                    className="text-xl md:text-sm lg:text-2xl group-hover:text-primary-accent"
                    href="mailto:spark.dev.studio@gmail.com"
                  >
                    sales@sparkshop.com
                  </a>
                  <span className="w-full group-hover:bg-primary-accent inline-block h-[2px] bg-black" />
                </span>
              </div>

              <div className="flex h-full justify-between flex-col text-center items-center gap-4 md:gap-8">
                <div className="aspect-square w-24 bg-primary-light flex items-center justify-center rounded-full">
                  <svg
                    stroke="#d4af37"
                    fill="#d4af37"
                    strokeWidth="0"
                    viewBox="0 0 512 512"
                    className="text-5xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="none"
                      strokeLinejoin="round"
                      strokeWidth="32"
                      d="M408 64H104a56.16 56.16 0 00-56 56v192a56.16 56.16 0 0056 56h40v80l93.72-78.14a8 8 0 015.13-1.86H408a56.16 56.16 0 0056-56V120a56.16 56.16 0 00-56-56z"
                    ></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-semibold ">Customer Support</h3>
                <p className="text-paragraph">
                  Need technical assistance or help with your order? Contact our Support team and we’ll get back to you promptly.
                </p>
                <span className="relative group inline-block">
                  <a
                    className="text-xl md:text-sm lg:text-2xl group-hover:text-primary-accent"
                    href="mailto:spark.dev.studio@gmail.com"
                  >
                    support@sparkshop.com
                  </a>
                  <span className="w-full group-hover:bg-primary-accent inline-block h-[2px] bg-black" />
                </span>
              </div>

              <div className="flex h-full justify-between flex-col text-center items-center gap-4 md:gap-8">
                <div className="aspect-square w-24 bg-primary-light flex items-center justify-center rounded-full">
                  <svg
                    stroke="#d4af37"
                    fill="#d4af37"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    className="text-5xl"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M20 4h-3.17L15 2H9L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h4.05l1.83-2h4.24l1.83 2H20v12zM12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"></path>
                  </svg>
                </div>
                <h3 className="text-xl md:text-3xl font-semibold ">Influencer Partnerships</h3>
                <p className="text-paragraph">
                  Interested in collaborating? Reach out to our Influencer team to discuss partnership opportunities.
                </p>
                <span className="relative group inline-block">
                  <a
                    className="text-xl md:text-sm lg:text-2xl group-hover:text-primary-accent"
                    href="mailto:spark.dev.studio@gmail.com"
                  >
                    influencers@sparkshop.com
                  </a>
                  <span className="w-full group-hover:bg-primary-accent inline-block h-[2px] bg-black" />
                </span>
              </div>
            </div>
          </section>

          <FollowUsOnInstagramSection/>

         

          <GlareCTA/>
       
        </Container>
      </section>
    </>
  );
}
