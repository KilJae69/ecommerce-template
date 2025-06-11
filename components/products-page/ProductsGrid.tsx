import { Product } from "@/constants/productsData";
import Image from "next/image";
import Link from "next/link";

export default function ProductsGrid({filteredProducts}:{filteredProducts:Product[]}) {
  return (
     <div className="grid gap-4 mt-8 px-2 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Link 
                  key={product.id} 
                  href={`/collections/${product.slug}`}
                  className="group"
                >
                  <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <div className="aspect-square bg-gray-100 relative">
                      <Image
                        src={product.variants[0].images[0]}
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="font-medium text-lg group-hover:text-primary-accent transition">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 text-sm">{product.brand}</p>
                      <p className="font-medium mt-2">
                        ${product.variants[0].price}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
  );
  
}