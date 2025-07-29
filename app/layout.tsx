import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Poppins } from "next/font/google";
import "./globals.css";
import { domAnimation, LazyMotion } from "motion/react";

import { UnifiedStoreProvider } from "@/providers/unified-store-provider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"], // Choose language subsets as needed
  weight: ["200", "300", "400", "500", "700"], // Include only the weights you use
  variable: "--font-poppins", // Optional CSS variable
  preload: true, // Ensures the font is preloaded automatically
});

export const metadata: Metadata = {
  title: "Spark Shop",
  description:
    "Fast, beautiful e‑commerce template for smooth shopping—intuitive layouts, lightning‑fast performance, and seamless checkout.",
  openGraph: {
    title: "Spark Shop",
    description:
      "Fast, beautiful e‑commerce template for smooth shopping—intuitive layouts, lightning‑fast performance, and seamless checkout.",
    url: "https://maple-grove-corgis.vercel.app/",
    siteName: "Spark Shop",
    images: [
      {
        url: "/og-default.png", // <-- your default OG image
        width: 1200,
        height: 630,
        alt: "Spark Shop",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Spark Shop",
    description:
      "Fast, beautiful e‑commerce template for smooth shopping—intuitive layouts, lightning‑fast performance, and seamless checkout.",
    images: ["/og-default.png"],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${poppins.className} antialiased flex min-h-full flex-col `}
      >
        <LazyMotion features={domAnimation}>
          <UnifiedStoreProvider>
            <Header />
            <main className="w-full flex-1 ">{children}</main>
            <Footer />
            <div id="modal-root"></div>
            <Toaster />
          </UnifiedStoreProvider>
        </LazyMotion>
      </body>
    </html>
  );
}
