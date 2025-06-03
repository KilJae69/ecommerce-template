// app/config/footerConfig.ts
import {
  MapPinIcon,
  PhoneIcon,

} from "lucide-react";
// import { TbMapPin2 } from "react-icons/tb";
import { BsEnvelopeAt } from "react-icons/bs";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa";

export const footerConfig = {
  helpSupport: {
    title: "Help & Support",
    contacts: [
      {
        icon: MapPinIcon,
        valueKey: "685 Market Street, Las Vegas, LA 95820, United States",
      },
      {
        icon: PhoneIcon,
        valueKey: "+387 61 250 293",
      },
      {
        icon: BsEnvelopeAt,
        valueKey: "spark.studio.dev@gmail.com",
      },
    ],
    socials: [
      { icon: FaFacebook, href: "https://facebook.com/", label: "Facebook" },
      { icon: FaTwitter,  href: "https://twitter.com/",  label: "Twitter"  },
      { icon: FaInstagram,href: "https://instagram.com/",label: "Instagram"},
      { icon: FaLinkedin, href: "https://linkedin.com/", label: "LinkedIn"  },
    ],
  },
  mainNavigation: [
    { href: "/",            title: "Home"         },
    { href: "/about",       title: "About"        },
    { href: "/collections", title: "Collections"  },
    { href: "/blogs",        title: "Blogs"         },
    { href: "/cart",        title: "Cart"         },
  ],
  subsidiaryLinks: [
    { href: "/contact",        title: "Contact"        },
    { href: "/faq",            title: "FAQ"            },
    { href: "/privacy-policy", title: "Privacy Policy" },
    { href: "/refund-policy",  title: "Refund Policy"  },
    { href: "/terms",          title: "Terms & Conditions"          },
  ],
  downloadApp: {
    title: "Download App",
    promoKey: "Save additional discounts with Mobile App & New User only",
    stores: [
      {
        icon: FaApple,
        href: "https://www.apple.com/app-store/",
        labelKey1: "Download on the",
        labelKey2: "App Store",
      },
      {
        icon: FaGooglePlay,
        href: "https://play.google.com/store",
        labelKey1: "Get it on",
        labelKey2: "Google Play",
      },
    ],
  },
} as const;
