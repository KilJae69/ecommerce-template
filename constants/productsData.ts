export type ProductVariant = {
  id: string;
  color: string;
  size: string;
  price: number;
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
  variants: ProductVariant[];
};

export const dummyProducts: Product[] = [
  {
    id: "1",
    name: "Nike Air Max 270",
    slug: "nike-air-max-270",
    brand: "nike",
    gender: ["men", "women"],
    description: "Comfortable running shoes with Air cushioning",
    createdAt: new Date("2023-01-15"),
    variants: [
      {
        id: "1-1",
        color: "black",
        size: "8",
        price: 150,
        stock: 10,
        images: ["/products/nike-air-max-270-black-1.jpg", "/products/nike-air-max-270-black-2.jpg"]
      },
      {
        id: "1-2",
        color: "white",
        size: "9",
        price: 150,
        stock: 5,
        images: ["/products/nike-air-max-270-white-1.jpg", "/products/nike-air-max-270-white-2.jpg"]
      },
      {
        id: "1-3",
        color: "blue",
        size: "10",
        price: 150,
        stock: 8,
        images: ["/products/nike-air-max-270-blue-1.jpg", "/products/nike-air-max-270-blue-2.jpg"]
      }
    ]
  },
  {
    id: "2",
    name: "Adidas Ultraboost 21",
    slug: "adidas-ultraboost-21",
    brand: "adidas",
    gender: ["men"],
    description: "Responsive running shoes with Boost technology",
    createdAt: new Date("2023-02-20"),
    variants: [
      {
        id: "2-1",
        color: "black",
        size: "9",
        price: 180,
        stock: 7,
        images: ["/products/adidas-ultraboost-black-1.jpg", "/products/adidas-ultraboost-black-2.jpg"]
      },
      {
        id: "2-2",
        color: "red",
        size: "10",
        price: 180,
        stock: 3,
        images: ["/products/adidas-ultraboost-red-1.jpg", "/products/adidas-ultraboost-red-2.jpg"]
      }
    ]
  },
  {
    id: "3",
    name: "Under Armour HOVR Phantom",
    slug: "under-armour-hovr-phantom",
    brand: "under-armour",
    gender: ["women"],
    description: "Connected running shoes with HOVR technology",
    createdAt: new Date("2023-03-10"),
    variants: [
      {
        id: "3-1",
        color: "white",
        size: "7",
        price: 140,
        stock: 12,
        images: ["/products/ua-hovr-white-1.jpg", "/products/ua-hovr-white-2.jpg"]
      },
      {
        id: "3-2",
        color: "grey",
        size: "8",
        price: 140,
        stock: 6,
        images: ["/products/ua-hovr-grey-1.jpg", "/products/ua-hovr-grey-2.jpg"]
      }
    ]
  },
  {
    id: "4",
    name: "New Balance 574",
    slug: "new-balance-574",
    brand: "new-balance",
    gender: ["men", "women"],
    description: "Classic lifestyle sneakers",
    createdAt: new Date("2023-01-05"),
    variants: [
      {
        id: "4-1",
        color: "green",
        size: "9",
        price: 90,
        stock: 15,
        images: ["/products/nb-574-green-1.jpg", "/products/nb-574-green-2.jpg"]
      },
      {
        id: "4-2",
        color: "brown",
        size: "10",
        price: 90,
        stock: 9,
        images: ["/products/nb-574-brown-1.jpg", "/products/nb-574-brown-2.jpg"]
      },
      {
        id: "4-3",
        color: "blue",
        size: "11",
        price: 90,
        stock: 4,
        images: ["/products/nb-574-blue-1.jpg", "/products/nb-574-blue-2.jpg"]
      }
    ]
  },
  {
    id: "5",
    name: "Nike React Infinity Run",
    slug: "nike-react-infinity-run",
    brand: "nike",
    gender: ["men"],
    description: "Stable running shoes for injury prevention",
    createdAt: new Date("2023-04-01"),
    variants: [
      {
        id: "5-1",
        color: "black",
        size: "10",
        price: 160,
        stock: 8,
        images: ["/products/nike-react-black-1.jpg", "/products/nike-react-black-2.jpg"]
      },
      {
        id: "5-2",
        color: "yellow",
        size: "11",
        price: 160,
        stock: 5,
        images: ["/products/nike-react-yellow-1.jpg", "/products/nike-react-yellow-2.jpg"]
      }
    ]
  }
];