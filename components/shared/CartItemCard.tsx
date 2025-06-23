// components/cart/CartItemCard.tsx
'use client';

import Image from 'next/image';
import { CartItem } from '@/stores/unified-store';

import { Trash2, Plus, Minus } from 'lucide-react';
import { useCartStore } from '@/lib/hooks/useStore';
import Ratings from '../products-page/Ratings';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import LogoFactory from '../products-page/LogoFactory';

export default function CartItemCard({ item,page = false }: { item: CartItem; page?:boolean }) {
  const { addItem, removeItem,updateItemQuantity } = useCartStore();

  const increase = () => addItem({ ...item, quantity: 1 });

 const decrease = () => {
  if (item.quantity > 1) {
    updateItemQuantity(item.id, item.quantity - 1);
  }
};

  return (
    <div  className=" flex flex-col gap-2 border-b border-gray-300 border-dashed pb-4">
      {/* Image */}
      <Link href={`/collections/${item.slug}?color=${item.color}&size=${item.size}`} className='group flex gap-4 '>

      <div className={cn("relative  flex-shrink-0 rounded overflow-hidden",
        page ? "w-30 h-30" :"w-20 h-20"
      )}>
        <Image
          src={item.image}
          alt={item.name}
          fill
          className="object-cover"
          />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-grow justify-between">
        <div className={cn( page ? "space-y-3" :"space-y-1")}>
          <h4 className={cn("font-semibold group-hover:text-primary-accent   leading-tight",
             page ? "text-lg" :"text-sm"
          )}>
            {item.name}
          </h4>
          <p className="text-xs italic text-muted-foreground">
            Size: {item.size} / Color: {item.color}
          </p>
          <Ratings/>
          
        </div>
     {page && <LogoFactory small brand={item.brand} />}
      </div>
          </Link>


        <div className="flex items-center justify-between mt-2">
          <span className={cn("font-semibold ", page ? "text-lg" : "text-sm")}>${item.price}.00</span>
          <div className="flex items-center gap-3">
            <button
              onClick={decrease}
              className="size-6 cursor-pointer border transition hover:bg-primary hover:text-white border-primary disabled:hover:none rounded-full flex items-center justify-center disabled:opacity-50"
              disabled={item.quantity === 1}
            >
              <Minus className="size-4" />
            </button>
            <span>{item.quantity}</span>
            <button onClick={increase} className="size-6 cursor-pointer transition hover:bg-primary hover:text-white border-primary disabled:hover:none border rounded-full flex items-center justify-center">
              <Plus className="size-4" />
            </button>
            <button onClick={() => removeItem(item.id)} className="ml-2 cursor-pointer transition hover:scale-105 text-rose-500">
              <Trash2 className="size-6" />
            </button>
          </div>
        </div>
    </div>
  );
}
