export type ProductVariant = {
  id: string;
  color: string;
  sizes: string[];
  stock: number;
  images: string[];
};

export type Product = {
  id: string;
  name: string;
  slug: string;
  brand: string;
  gender: string[];
  description: string;
  createdAt: Date;
  price: number;
  variants: ProductVariant[];
};

export const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Air Zoom Pegasus",
    slug: "air-zoom-pegasus",
    brand: "nike",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-01-03"),
    price: 103,
    variants: [
      {
        id: "1-green",
        color: "green",
        sizes: ["37", "38", "39", "40", "41"],
        stock: 25,
        images: [
          "/images/products/nike-pegasus-green.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "1-red",
        color: "red",
        sizes: ["36", "37", "38", "39", "40", "41", "42"],
        stock: 42,
        images: [
          "/images/products/nike-pegasus-red.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "1-black",
        color: "black",
        sizes: ["40", "41", "42", "43"],
        stock: 18,
        images: [
          "/images/products/nike-pegasus-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "2",
    name: "Air Max 90",
    slug: "air-max-90",
    brand: "nike",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-06-08"),
    price: 127,
    variants: [
      {
        id: "2-blue",
        color: "blue",
        sizes: ["42", "43", "44"],
        stock: 19,
        images: [
          "/images/products/nike-airmax90-blue.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "2-black",
        color: "black",
        sizes: ["41", "42", "43", "44"],
        stock: 6,
        images: [
          "/images/products/nike-airmax90-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
     
    ]
  },
  {
    id: "3",
    name: "Revolution 7",
    slug: "revolution-7",
    brand: "nike",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-01-16"),
    price: 100,
    variants: [
      {
        id: "3-black",
        color: "black",
        sizes: ["40", "41", "42"],
        stock: 10,
        images: [
          "/images/products/nike-revolution7-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "3-white",
        color: "white",
        sizes: ["37", "38", "39", "40"],
        stock: 6,
        images: [
          "/images/products/nike-revolution7-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      
    ]
  },
  {
    id: "4",
    name: "Nike Juniper Trail 3",
    slug: "nike-juniper-trail-3",
    brand: "nike",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-03-10"),
    price: 145,
    variants: [
      {
        id: "4-grey",
        color: "grey",
        sizes: ["39", "40", "41"],
        stock: 1,
        images: [
          "/images/products/nike-juniper-trail-gray.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "4-black",
        color: "black",
        sizes: ["42", "43", "44"],
        stock: 3,
        images: [
          "/images/products/nike-juniper-trail-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "4-white",
        color: "white",
        sizes: ["36", "37", "38", "39"],
        stock: 17,
        images: [
          "/images/products/nike-juniper-trail-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "5",
    name: "Air Force 1",
    slug: "air-force-1",
    brand: "nike",
    gender: ["men", "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-04-01"),
    price: 179,
    variants: [
     
      {
        id: "5-white",
        color: "white",
        sizes: ["39", "40", "41", "42"],
        stock: 3,
        images: [
          "/images/products/nike-air-force-1-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "6",
    name: "Air VaporMax",
    slug: "air-vapormax",
    brand: "nike",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-03-10"),
    price: 158,
    variants: [
      {
        id: "6-grey",
        color: "grey",
        sizes: ["38", "39", "40"],
        stock: 19,
        images: [
          "/images/products/nike-air-vapormax-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      
    ]
  },
  {
    id: "7",
    name: "Free RN 5.0",
    slug: "free-rn-50",
    brand: "nike",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-04-14"),
    price: 159,
    variants: [
      {
        id: "7-pink",
        color: "pink",
        sizes: ["36", "37", "38", "39", "40"],
        stock: 20,
        images: [
          "/images/products/nike-free-rn-pink.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "7-blue",
        color: "blue",
        sizes: ["36", "37", "38", "39", "40", "41"],
        stock: 11,
        images: [
          "/images/products/nike-free-rn-blue.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "7-black",
        color: "black",
        sizes: ["36", "37", "38", "39", "40", "41"],
        stock: 18,
        images: [
          "/images/products/nike-free-rn-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "7-white",
        color: "white",
        sizes: ["36", "37", "38", "39", "40", "41"],
        stock: 5,
        images: [
          "/images/products/nike-free-rn-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
    ]
  },
  {
    id: "8",
    name: "Nike Structure 25",
    slug: "nike-structure-25",
    brand: "nike",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-03-05"),
    price: 108,
    variants: [
      {
        id: "8-white",
        color: "white",
        sizes: ["40", "41", "42"],
        stock: 6,
        images: [
          "/images/products/nike-structure-25-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "8-black",
        color: "black",
        sizes: ["38", "39", "40", "41", "42"],
        stock: 28,
        images: [
          "/images/products/nike-structure-25-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "9",
    name: "Court Vision",
    slug: "court-vision",
    brand: "nike",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-11"),
    price: 195,
    variants: [
      {
        id: "9-black",
        color: "black",
        sizes: ["40", "41", "42"],
        stock: 18,
        images: [
          "/images/products/nike-court-vision-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "9-white",
        color: "white",
        sizes: ["37", "38", "39", "40", "41"],
        stock: 23,
        images: [
          "/images/products/nike-court-vision-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "9-blue",
        color: "blue",
        sizes: ["42", "43", "44"],
        stock: 15,
        images: [
          "/images/products/nike-court-vision-blue.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "9-pink",
        color: "pink",
        sizes: ["42", "43", "44"],
        stock: 15,
        images: [
          "/images/products/nike-court-vision-pink.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
    ]
  },
 
  {
    id: "11",
    name: "Superstar",
    slug: "superstar",
    brand: "adidas",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-01-25"),
    price: 167,
    variants: [
      {
        id: "11-white",
        color: "white",
        sizes: ["42", "43", "44"],
        stock: 8,
        images: [
          "/images/products/adidas-superstar-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "11-grey",
        color: "grey",
        sizes: ["36", "37", "38", "39"],
        stock: 9,
        images: [
          "/images/products/adidas-superstar-grey.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "11-black",
        color: "black",
        sizes: ["37", "38", "39"],
        stock: 14,
        images: [
          "/images/products/adidas-superstar-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "12",
    name: "Stan Smith",
    slug: "stan-smith",
    brand: "adidas",
    gender: ["men", "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-06-15"),
    price: 172,
    variants: [
      {
        id: "12-green",
        color: "green",
        sizes: ["40", "41", "42", "43", "44"],
        stock: 5,
        images: [
          "/images/products/adidas-stan-smith-green.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "12-yellow",
        color: "yellow",
        sizes: ["38", "39", "40"],
        stock: 20,
        images: [
          "/images/products/adidas-stan-smith-yellow.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      
    ]
  },
  {
    id: "13",
    name: "Gazelle",
    slug: "gazelle",
    brand: "adidas",
    gender: [ "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-05"),
    price: 179,
    variants: [
      {
        id: "13-pink",
        color: "pink",
        sizes: ["37", "38", "39", "40", "41"],
        stock: 26,
        images: [
          "/images/products/adidas-gazelle-pink.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "13-black",
        color: "black",
        sizes: ["38", "39"],
        stock: 1,
        images: [
          "/images/products/adidas-gazelle-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "13-red",
        color: "red",
        sizes: ["38", "39"],
        stock: 1,
        images: [
          "/images/products/adidas-gazelle-red.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "13-green",
        color: "green",
        sizes: ["38", "39"],
        stock: 1,
        images: [
          "/images/products/adidas-gazelle-green.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "13-blue",
        color: "blue",
        sizes: ["38", "39"],
        stock: 1,
        images: [
          "/images/products/adidas-gazelle-blue.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
    ]
  },
  
  {
    id: "15",
    name: "Forum Low",
    slug: "forum-low",
    brand: "adidas",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-01-11"),
    price: 107,
    variants: [
      {
        id: "15-blue",
        color: "blue",
        sizes: ["39", "40", "41", "42"],
        stock: 12,
        images: [
          "/images/products/adidas-forum-low-blue.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "15-pink",
        color: "pink",
        sizes: ["42", "43", "44"],
        stock: 16,
        images: [
          "/images/products/adidas-forum-low-pink.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      
    ]
  },
  {
    id: "16",
    name: "ZX 700",
    slug: "zx-700",
    brand: "adidas",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-04-19"),
    price: 123,
    variants: [
      {
        id: "16-black",
        color: "black",
        sizes: ["39", "40", "41", "42", "43", "44"],
        stock: 9,
         images: [
          "/images/products/adidas-zx-700-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      
    ]
  },
  {
    id: "17",
    name: "Continental 80",
    slug: "continental-80",
    brand: "adidas",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-06-07"),
    price: 89,
    variants: [
      {
        id: "17-black",
        color: "black",
        sizes: ["40", "41", "42", "43", "44"],
        stock: 19,
        images: [
          "/images/products/adidas-continental-80-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "17-grey",
        color: "grey",
        sizes: ["38", "39", "40"],
        stock: 15,
        images: [
          "/images/products/adidas-continental-80-grey.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "17-red",
        color: "red",
        sizes: ["38", "39", "40"],
        stock: 15,
        images: [
          "/images/products/adidas-continental-80-red.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "18",
    name: "Samba",
    slug: "samba",
    brand: "adidas",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-03-03"),
    price: 92,
    variants: [
      {
        id: "18-red",
        color: "red",
        sizes: ["41", "42", "43"],
        stock: 11,
        images: [
          "/images/products/adidas-samba-red.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "18-green",
        color: "green",
        sizes: ["42", "43", "44"],
        stock: 14,
        images: [
          "/images/products/adidas-samba-green.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "18-black",
        color: "black",
        sizes: ["36", "37", "38", "39"],
        stock: 1,
        images: [
          "/images/products/adidas-samba-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  
  {
    id: "20",
    name: "Solar Glide",
    slug: "solar-glide",
    brand: "adidas",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-04-05"),
    price: 111,
    variants: [
      {
        id: "20-white",
        color: "white",
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
        stock: 37,
       images: [
          "/images/products/adidas-solar-glare-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "20-black",
        color: "black",
        sizes: ["36", "37", "38", "39", "40", "41"],
        stock: 7,
        images: [
          "/images/products/adidas-solar-glare-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "20-green",
        color: "green",
        sizes: ["36", "37", "38", "39", "40", "41"],
        stock: 7,
        images: [
          "/images/products/adidas-solar-glare-green.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "21",
    name: "Charged Gemini",
    slug: "charged-gemini",
    brand: "under-armour",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-04"),
    price: 132,
    variants: [
      {
        id: "21-black",
        color: "black",
        sizes: ["37", "38", "39"],
        stock: 12,
       images: [
          "/images/products/ua-charged-gemini-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "21-white",
        color: "white",
        sizes: ["38", "39", "40", "41", "42"],
        stock: 20,
        images: [
          "/images/products/ua-charged-gemini-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "22",
    name: "UA Phantom 1",
    slug: "ua-phantom-1",
    brand: "under-armour",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-02-19"),
    price: 124,
    variants: [
      {
        id: "22-black",
        color: "black",
        sizes: ["38", "39", "40"],
        stock: 6,
        images: [
          "/images/products/ua-phantom-1-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "22-red",
        color: "red",
        sizes: ["38", "39", "40", "41"],
        stock: 1,
        images: [
          "/images/products/ua-phantom-1-red.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "22-white",
        color: "white",
        sizes: ["39", "40", "41"],
        stock: 1,
       images: [
          "/images/products/ua-phantom-1-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "23",
    name: "HOVR Surge",
    slug: "hovr-surge",
    brand: "under-armour",
    gender: ["men", "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-06-03"),
    price: 131,
    variants: [
      {
        id: "23-red",
        color: "red",
        sizes: ["36", "37", "38", "39", "40"],
        stock: 16,
         images: [
          "/images/products/ua-hovr-surge-red.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "23-green",
        color: "green",
        sizes: ["37", "38", "39"],
        stock: 14,
       images: [
          "/images/products/ua-hovr-surge-green.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "23-black",
        color: "black",
        sizes: ["37", "38", "39"],
        stock: 14,
       images: [
          "/images/products/ua-hovr-surge-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
    ]
  },
  {
    id: "24",
    name: "Micro G Kilchis",
    slug: "micro-g-kilchis",
    brand: "under-armour",
    gender: ["men", "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-16"),
    price: 101,
    variants: [
      {
        id: "24-black",
        color: "black",
        sizes: ["36", "37", "38", "39"],
        stock: 13,
        images: [
          "/images/products/ua-micro-g-kilchis-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      
    ]
  },
  {
    id: "25",
    name: "TriBase Reign",
    slug: "tribase-reign",
    brand: "under-armour",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-03-06"),
    price: 108,
    variants: [
      {
        id: "25-pink",
        color: "pink",
        sizes: ["37", "38", "39", "40", "41"],
        stock: 12,
        images: [
          "/images/products/ua-tribase-reign-pink.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "25-black",
        color: "black",
        sizes: ["41", "42", "43", "44"],
        stock: 19,
       images: [
          "/images/products/ua-tribase-reign-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "26",
    name: "Curry 11 Team",
    slug: "curry-11-team",
    brand: "under-armour",
    gender: ["men", "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-04-22"),
    price: 103,
    variants: [
      {
        id: "26-red",
        color: "red",
        sizes: ["40", "41", "42", "43"],
        stock: 19,
         images: [
          "/images/products/ua-curry-11-team-red.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "26-blue",
        color: "blue",
        sizes: ["39", "40", "41", "42"],
        stock: 9,
         images: [
          "/images/products/ua-curry-11-team-blue.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "26-black",
        color: "black",
        sizes: ["39", "40", "41", "42"],
        stock: 3,
         images: [
          "/images/products/ua-curry-11-team-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "26-white",
        color: "white",
        sizes: ["39", "40", "41", "42"],
        stock: 8,
         images: [
          "/images/products/ua-curry-11-team-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "27",
    name: "Project Rock BSR 5",
    slug: "project-rock-bsr-5",
    brand: "under-armour",
    gender: ["men","women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2024-12-17"),
    price: 148,
    variants: [
      {
        id: "27-black",
        color: "black",
        sizes: ["42", "43", "44"],
        stock: 9,
         images: [
          "/images/products/ua-project-rock-bsr-5-ufc-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
     
    ]
  },
  {
    id: "28",
    name: "Project Rock 7",
    slug: "project-rock-7",
    brand: "under-armour",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-07"),
    price: 106,
    variants: [
      {
        id: "28-black",
        color: "black",
        sizes: ["40", "41", "42", "43"],
        stock: 15,
        images: [
          "/images/products/ua-project-rock-7-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "28-green",
        color: "green",
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
        stock: 23,
        images: [
          "/images/products/ua-project-rock-7-green.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "28-grey",
        color: "grey",
        sizes: ["36", "37", "38", "39", "40", "41", "42", "43", "44"],
        stock: 4,
        images: [
          "/images/products/ua-project-rock-7-grey.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "29",
    name: "Velociti Elite 2",
    slug: "velociti-elite-2",
    brand: "under-armour",
    gender: ["men","women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-01-04"),
    price: 105,
    variants: [
      {
        id: "29-red",
        color: "red",
        sizes: ["36", "37", "38", "39", "40"],
        stock: 10,
        images: [
          "/images/products/ua-velociti-elite-2-red.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "29-white",
        color: "white",
        sizes: ["38", "39", "40", "41"],
        stock: 5,
        images: [
          "/images/products/ua-velociti-elite-2-white.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
     
    ]
  },
  {
    id: "30",
    name: "UA SlipSpeed Mega",
    slug: "slipspeed-mega",
    brand: "under-armour",
    gender: ["men","women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-01-23"),
    price: 84,
    variants: [
      {
        id: "30-grey",
        color: "grey",
        sizes: ["37", "38", "39", "40"],
        stock: 17,
       images: [
          "/images/products/ua-slipspeed-mega-grey.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "30-black",
        color: "black",
        sizes: ["40", "41", "42", "43"],
        stock: 18,
        images: [
          "/images/products/ua-slipspeed-mega-black.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "30-pink",
        color: "pink",
        sizes: ["40", "41", "42", "43"],
        stock: 18,
        images: [
          "/images/products/ua-slipspeed-mega-pink.avif",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "31",
    name: "990v6",
    slug: "990v6",
    brand: "new-balance",
    gender: ["women","men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-06-05"),
    price: 136,
    variants: [
      {
        id: "31-black",
        color: "black",
        sizes: ["40", "41", "42", "43"],
        stock: 11,
        images: [
          "/images/products/nb-990v6-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "31-blue",
        color: "blue",
        sizes: ["36", "37", "38", "39"],
        stock: 11,
        images: [
          "/images/products/nb-990v6-blue.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "32",
    name: "860v14",
    slug: "860v14",
    brand: "new-balance",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-05"),
    price: 142,
    variants: [
      {
        id: "32-black",
        color: "black",
        sizes: ["38", "39", "40", "41", "42"],
        stock: 10,
        images: [
          "/images/products/nb-860v14-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "32-blue",
        color: "blue",
        sizes: ["37", "38", "39"],
        stock: 12,
        images: [
          "/images/products/nb-860v14-blue.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "32-grey",
        color: "grey",
        sizes: ["37", "38", "39"],
        stock: 12,
        images: [
          "/images/products/nb-860v14-grey.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "33",
    name: "Fresh Foam 1080v14",
    slug: "fresh-foam-1080v14",
    brand: "new-balance",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-06-06"),
    price: 118,
    variants: [
      {
        id: "33-black",
        color: "black",
        sizes: ["41", "42", "43", "44"],
        stock: 11,
         images: [
          "/images/products/nb-fresh-foam-v14-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "33-yellow",
        color: "yellow",
        sizes: ["38", "39", "40", "41"],
        stock: 7,
         images: [
          "/images/products/nb-fresh-foam-v14-yellow.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "33-pink",
        color: "pink",
        sizes: ["39", "40", "41"],
        stock: 12,
        images: [
          "/images/products/nb-fresh-foam-v14-pink.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "34",
    name: "FuelCell Rebel",
    slug: "fuelcell-rebel",
    brand: "new-balance",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-03-23"),
    price: 98,
    variants: [
      {
        id: "34-green",
        color: "green",
        sizes: ["40", "41", "42", "43"],
        stock: 20,
         images: [
          "/images/products/nb-fuelcell-rebel-v5-green.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "34-black",
        color: "black",
        sizes: ["42", "43", "44"],
        stock: 10,
        images: [
          "/images/products/nb-fuelcell-rebel-v5-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "34-red",
        color: "red",
        sizes: ["42", "43", "44"],
        stock: 10,
        images: [
          "/images/products/nb-fuelcell-rebel-v5-red.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "35",
    name: "997R",
    slug: "997r",
    brand: "new-balance",
    gender: ["men", "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-01"),
    price: 123,
    variants: [
      {
        id: "35-grey",
        color: "grey",
        sizes: ["37", "38", "39", "40", "41"],
        stock: 19,
       images: [
          "/images/products/nb-997r-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
     
    ]
  },
  {
    id: "36",
    name: "880v15",
    slug: "880v15",
    brand: "new-balance",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-03-09"),
    price: 114,
    variants: [
      {
        id: "36-black",
        color: "black",
        sizes: ["36", "37", "38", "39", "40"],
        stock: 13,
        images: [
          "/images/products/nb-880-v15-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "36-blue",
        color: "blue",
        sizes: ["40", "41", "42", "43", "44"],
        stock: 13,
        images: [
          "/images/products/nb-880-v15-blue.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "36-yellow",
        color: "yellow",
        sizes: ["40", "41", "42", "43", "44"],
        stock: 13,
        images: [
          "/images/products/nb-880-v15-yellow.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "37",
    name: "Klutch x NB Cruz v3",
    slug: "klutch-nb-cruz-v3",
    brand: "new-balance",
    gender: ["men", "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-29"),
    price: 132,
    variants: [
      {
        id: "37-black",
        color: "black",
        sizes: ["36", "37", "38", "39", "40"],
        stock: 9,
        images: [
          "/images/products/nb-klutch-cruz-v3-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
   
    ]
  },
  {
    id: "38",
    name: "Bronze56K x NB Numeric 480",
    slug: "bronze-56k",
    brand: "new-balance",
    gender: ["men"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-05-14"),
    price: 143,
    variants: [
      {
        id: "38-black",
        color: "black",
        sizes: ["36", "37", "38", "39"],
        stock: 19,
         images: [
          "/images/products/nb-bronze-56k-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
     
    ]
  },
  {
    id: "39",
    name: "574",
    slug: "574",
    brand: "new-balance",
    gender: ["women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-04-23"),
    price: 131,
    variants: [
      {
        id: "39-black",
        color: "black",
        sizes: ["41", "42", "43", "44"],
        stock: 14,
        images: [
          "/images/products/nb-574-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "39-blue",
        color: "blue",
        sizes: ["42", "43", "44"],
        stock: 15,
        images: [
          "/images/products/nb-574-blue.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "39-red",
        color: "red",
        sizes: ["36", "37", "38", "39"],
        stock: 9,
       images: [
          "/images/products/nb-574-red.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  },
  {
    id: "40",
    name: "327",
    slug: "327",
    brand: "new-balance",
    gender: ["men", "women"],
    description: "This is a placeholder description for showcasing product details in the template.",
    createdAt: new Date("2025-02-04"),
    price: 132,
    variants: [
      {
        id: "40-black",
        color: "black",
        sizes: ["36", "37", "38", "39"],
        stock: 9,
        images: [
          "/images/products/nb-327-black.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "40-blue",
        color: "blue",
        sizes: ["38", "39", "40", "41"],
        stock: 4,
       images: [
          "/images/products/nb-327-blue.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      },
      {
        id: "40-pink",
        color: "pink",
        sizes: ["36", "37", "38", "39", "40"],
        stock: 7,
        images: [
          "/images/products/nb-327-pink.webp",
          "/images/products/placeholder-1.avif",
          "/images/products/placeholder-2.avif",
          "/images/products/placeholder-3.avif",
          "/images/products/placeholder-4.avif",
          "/images/products/placeholder-5.avif",
          "/images/products/placeholder-6.avif",
          "/images/products/placeholder-7.avif",
        ]
      }
    ]
  }
];
