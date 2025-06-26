// components/CategoriesSection.tsx
import Link from "next/link";
import Image from "next/image";
import { Container } from "../shared/Container";
import { MovingBorderBadge } from "../shared/MovingBorderBadge";
import BoldCopy from "../ui/bold-copy";


const categories = [
  {
    key: "lifestyle",
    title: "Lifestyle",
    image: "/images/categories/lifestyle.jpg",
    href: "/collections?categories=lifestyle",
  },
  {
    key: "running",
    title: "Running",
    image: "/images/categories/running.jpg",
    href: "/collections?categories=running",
  },
  {
    key: "basketball",
    title: "Basketball",
    image: "/images/categories/basketball-1.jpg",
    href: "/collections?categories=basketball",
  },
  {
    key: "training",
    title: "Training",
    image: "/images/categories/training.jpg",
    href: "/collections?categories=training",
  },
];

export default function CategoriesSection() {
  return (
    <section className="my-12 lg:my-24 bg-white">
      <Container>
        <div className="text-center flex items-center flex-col gap-4 mb-12">
          <MovingBorderBadge text="Find Your Perfect Fit" />

          <h2 className="text-h2 text-gradient">Categories</h2>
          <p className="text-paragraph max-w-xl">
            Whether you’re pounding the pavement, hitting the court, or just
            kicking back, we’ve got a curated selection for every style and
            sport. Click a category to explore our top picks.
          </p>
         
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.key}
              href={cat.href}
              className="relative block h-64 rounded-xl overflow-hidden shadow-lg group"
            >
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />

              <div className="absolute z-10 bottom-0 left-0">
                {/* <h3 className="text-2xl font-semibold text-white">
                  {cat.title}
                </h3> */}
                <BoldCopy text={cat.title} />
              </div>
              <div className="absolute inset-0 bg-black/20 " />
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
