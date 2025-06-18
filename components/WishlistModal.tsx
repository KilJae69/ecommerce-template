"use client";


import { FaXmark } from "react-icons/fa6";
import { Heart } from "lucide-react";
import { useCartStore, useWishlistStore } from "@/lib/hooks/useStore";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalTrigger, useModal } from "./ui/animated-modal";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import WishlistItemCard from "./shared/WishlistItemCard";
import toast from "react-hot-toast";

function ModalHeader() {
  const { setOpen } = useModal();
  return (
    <div className="flex py-4 px-4 justify-between border-b border-gray-300 items-center bg-white">
      <h3 id="wishlist-title" className="font-semibold tracking-wider">
        Your Wishlist
      </h3>
      <FaXmark onClick={() => setOpen(false)} className="size-6 cursor-pointer" />
    </div>
  );
}

function ModalFooterMain({ hasItems }: { hasItems: boolean }) {
  const { setOpen } = useModal();
  const router = useRouter();
  const { wishlist } = useWishlistStore();
  const { addItem } = useCartStore();

  const navigate = (url: string) => {
    setOpen(false);
    setTimeout(() => router.push(url), 100);
  };

  const handleAddAllToCart = () => {
    wishlist.forEach((item) => {
      const id = `${item.id}`; // already composed
      addItem({
        ...item,
        id,
        quantity: 1,
      });
    });
    setOpen(false);
    toast.success("All items added to cart");
  };

  return (
    <ModalFooter className="flex flex-col gap-4 pt-4 border-t">
      {hasItems ? (
        <>
          <InteractiveHoverButton dark onClick={handleAddAllToCart}>
            Add All to Cart
          </InteractiveHoverButton>
          <InteractiveHoverButton onClick={() => navigate("/collections")}  invert>
            Continue Shopping
          </InteractiveHoverButton>
        </>
      ) : (
        <div className="text-sm text-muted-foreground text-center">
          Your saved favorites will appear here. Add items as you browse.
        </div>
      )}
    </ModalFooter>
  );
}

export default function WishlistModal() {
  const { wishlist } = useWishlistStore();

  return (
    <Modal>
      <ModalTrigger className="flex size-9 items-center gap-2">
        <Heart className="group-hover:scale-90 transition-all size-8 md:size-10" />
        <span className="size-5 transition-all flex items-center justify-center text-xs group-hover:-translate-y-1 bg-primary-accent absolute rounded-full left-6 text-white -top-2">
          {wishlist.length}
        </span>
      </ModalTrigger>

      <ModalBody side="right" className="size-full bg-white">
        <ModalHeader />
        <ModalContent className="flex p-5">
          <div className="w-full h-full flex flex-col gap-6">
            {wishlist.length === 0 ? (
              <div className="w-full flex flex-col items-center gap-4">
                <Image
                  src="/empty-wishlist.png"
                  alt="empty wishlist"
                  width={200}
                  height={200}
                />
                <p className="text-center text-xl text-primary font-semibold">
                  Your wishlist is empty.
                </p>
                <p className="text-center text-gray-500">
                  Save your favorite products to view them later.
                </p>
              </div>
            ) : (
              wishlist.map((item) => (
                <WishlistItemCard item={item} key={item.id}/>
              ))
            )}
          </div>
        </ModalContent>
        <ModalFooterMain  hasItems={wishlist.length > 0}/>
      </ModalBody>
    </Modal>
  );
}
