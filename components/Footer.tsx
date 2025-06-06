import Image from "next/image";
import { Container } from "./shared/Container";
import SpotlightCard from "./ui/spotlight-card";
import SubscribeInput from "./shared/SubscribeInput";


import Link from "next/link";
import { footerConfig } from "@/constants/footerConfig";

export default function Footer() {

  return (
    <footer className="mt-auto relative z-100">
      <div className="pt-12 lg:pt-24 pb-10 bg-primary">
        <Container>
          <div className="flex flex-col md:flex-row gap-8  text-white">
            <div className="md:max-w-1/2">
              <div className="relative w-[140px] h-[80px] md:w-[200px] mb-4">
                <Image
                  src="/logo.png"
                  className="object-contain"
                  fill
                  alt="logo"
                />
              </div>
              <p className="text-white">
                At Spark Studio, we specialize in building blazing-fast,
                high-performance custom e-commerce websites tailored to your
                needs. Elevate your online presence with modern design and
                seamless user experience.
              </p>

              <div className="text-white mt-4 md:mt-8">
                <SpotlightCard  spotlightColor={"rgba(212, 175, 55, 0.4)"}>
                  <div>
                    <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row gap-4 md:gap-8 mb-4 md:mb-8">
                      <h3 className="font-semibold text-2xl">
                        Don’t want to miss our offers?
                      </h3>
                      <p>Subscribe with your email to receive the latest deals and new arrivals.</p>
                    </div>
                    <SubscribeInput />
                  </div>
                </SpotlightCard>
              </div>
            </div>

            <div className="grid content-start grid-cols-1 sm:grid-cols-2 gap-8 ">
              {/* Main Navigation */}
              <div>
                <h3 className="font-semibold mb-4 text-primary-accent">
                 Navigation
                </h3>
                <ul className="space-y-4">
                  {footerConfig.mainNavigation.map(({ href, title }) => (
                    <li className="relative w-fit group" key={href}>
                      <Link
                        href={href}
                        className="group-hover:text-primary-accent whitespace-nowrap"
                      >
                       { title}
                      </Link>
                      <span className="absolute w-0 h-[2px] bg-primary-accent bottom-0 left-0 group-hover:w-full transition-all duration-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Subsidiary Links */}
              <div>
                <h3 className="font-semibold text-primary-accent mb-4">
                 Information
                </h3>
                <ul className="space-y-4">
                  {footerConfig.subsidiaryLinks.map(({ href, title }) => (
                    <li className="relative w-fit group" key={href}>
                      <Link
                        href={href}
                        className="group-hover:text-primary-accent whitespace-nowrap"
                      >
                        {title}
                      </Link>
                      <span className="absolute w-0 h-[2px] bg-primary-accent bottom-0 left-0 group-hover:w-full transition-all duration-300" />
                    </li>
                  ))}
                </ul>
              </div>

              {/* Help & Support */}
              <div>
                <h3 className="font-semibold text-primary-accent mb-4">
                 Help & Support
                </h3>
                <ul className="space-y-4">
                  {footerConfig.helpSupport.contacts.map(
                    ({ icon: Icon, valueKey }) => (
                      <li key={valueKey} className="flex items-start gap-2">
                        <Icon className="size-5 shrink-0 text-primary-accent mt-1" />
                        <span className="text-sm">{valueKey}</span>
                      </li>
                    )
                  )}
                </ul>
                <div className="flex gap-4 mt-4">
                  {footerConfig.helpSupport.socials.map(
                    ({ icon: Icon, href, label }) => (
                      <a
                        target="__blank"
                        rel="noopener noreferrer"
                        key={href}
                        href={href}
                        aria-label={label}
                        className="text-muted hover:text-primary-accent"
                      >
                        <Icon className="size-5" />
                      </a>
                    )
                  )}
                </div>
              </div>

              {/* Download App */}
              <div>
                <h3 className="text-primary-accent font-semibold mb-4">
                 Download App
                </h3>
                <p className="text-sm mb-4">
                 Save additional discounts with Mobile App & New User only
                </p>
                <div className="flex flex-col gap-4">
                  {footerConfig.downloadApp.stores.map(
                    ({ icon: Icon, href, labelKey1, labelKey2 }) => (
                      <a
                        target="__blank"
                        rel="noreferrer noopener"
                        key={href}
                        href={href}
                        className="flex md:flex-col lg:flex-row items-center w-[170px] md:w-[140px] lg:w-[170px] gap-2 bg-slate-900 text-white px-4 py-2 rounded shadow hover:opacity-90"
                      >
                        <Icon className="size-6 shrink-0" />
                        <span className="flex flex-col">
                          <span className="text-xs">{labelKey1}</span>
                          <span>{labelKey2}</span>
                        </span>
                      </a>
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <div className="py-12 bg-secondary-bg">
        <Container>
          <div className="flex flex-col-reverse md:flex-row gap-8 items-center justify-between">
            <p className="text-xs">
             © 2025. All rights reserved. Template developed by{" "}
              <a
                className="hover:underline"
                target="__blank"
                rel="noreferrer noopener"
                href="https://www.spark-dev-studio.com/en/"
              >
                <span className="text-[#d4af37]">Spark</span>Studio
              </a>
            </p>

            <div className="flex flex-col md:flex-row items-center gap-4">
              <p className="text-lg whitespace-nowrap">We accept:</p>
              <div className="flex flex-wrap gap-4">
                <Image
                  className="aspect-square"
                  src="/icons/payments/payment-01.svg"
                  alt="visa"
                  width={60}
                  height={60}
                />
                <Image
                  src="/icons/payments/payment-02.svg"
                  alt="paypal"
                  width={40}
                  height={40}
                />
                <Image
                  src="/icons/payments/payment-03.svg"
                  alt="mastercard"
                  width={60}
                  height={60}
                />
                <Image
                  src="/icons/payments/payment-04.svg"
                  alt="apple pay"
                  width={60}
                  height={60}
                />
                <Image
                  src="/icons/payments/payment-05.svg"
                  alt="google pay"
                  width={60}
                  height={60}
                />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
