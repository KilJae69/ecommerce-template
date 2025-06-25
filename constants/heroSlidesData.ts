// src/lib/heroSlides.ts

import { AdidasLogo, NewBalanceLogo, NikeLogo, UnderArmourLogo } from "@/components/home-sections/hero-logos"




export interface HeroSlide {
  key: string
  brand:string
  title: string
  description: string
  img: string
  bg: string
  Logo: React.ComponentType<React.SVGProps<SVGSVGElement>>
}

export const heroSlides: HeroSlide[] = [
  {
    key: "nike",
    brand:"Nike",
    title: "Air Zoom Pegasus 39",
    description:
      "Energy-returning cushioning for every run, now lighter and more responsive than ever.",
    img: "/images/hero/nike-hero.png",
    bg: "from-gray-100 via-white to-gray-100",
    Logo: NikeLogo,
  },
  {
    key: "adidas",
    brand:"Adidas",
    title: "Ultraboost 23",
    description:
      "Feel the ultimate comfort with Boost midsole technology—perfect for long distances and everyday wear.",
   img: "/images/hero/adidas-hero.png",
    bg: "from-rose-100 via-white to-rose-100",
    Logo: AdidasLogo,
  },
  {
    key: "under-armour",
    brand:"Under Armour",
    title: "HOVR Phantom 2",
    description:
      "Step into the future with UA HOVR cushioning that gives you ‘zero gravity feel’ to maintain energy return.",
    img: "/images/hero/ua-hero.png",
    bg: "from-indigo-100 via-white to-indigo-100",
    Logo: UnderArmourLogo,
  },
  {
    key: "new-balance",
    brand:"New Balance",
    title: "Fresh Foam 1080v12",
    description:
      "Ultra-soft Fresh Foam midsole for a plush, balanced ride—crafted for runners who demand both comfort and speed.",
    img: "/images/hero/nb-hero.png",
    bg: "from-green-100 via-white to-green-100",
    Logo: NewBalanceLogo,
  },
]
