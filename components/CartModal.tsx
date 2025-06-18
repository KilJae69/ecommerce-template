"use client";
import React from "react";

// import { FloatingDock } from "../ui/floating-dock";

import { FaXmark } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";

import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
  useModal,
} from "./ui/animated-modal";
import { useCartStore } from "@/lib/hooks/useStore";
import CartItemCard from "./shared/CartItemCard";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import Image from "next/image";
import { CartItem } from "@/stores/unified-store";
import { useRouter } from "next/navigation";

// import { Button } from "../ui/button";

function ModalHeader() {
  const { setOpen } = useModal();
  return (
    <div className=" flex py-4 px-4 justify-between border-b border-gray-300 items-center bg-white ">
      <h3 id="modal-title" className="font-semibold tracking-wider">
        Shopping Cart
      </h3>

      <FaXmark
        onClick={() => setOpen(false)}
        className="size-6 cursor-pointer"
      />
    </div>
  );
}

function ModalFooterMain({ items }: { items: CartItem[] }) {
  const { setOpen } = useModal();
  const router = useRouter();

  const navigate = (url: string) => {
    setOpen(false); // close modal
    setTimeout(() => router.push(url), 100); // small delay ensures close anim completes
  };
  return (
    <div className="mt-auto">
      <ModalFooter className="flex flex-col gap-2">
        <div className="mt-auto w-full flex justify-between ">
          <div className="w-full">
            <p className="font-semibold mb-2">Subtotal:</p>
            <p className="text-xs italic">
              Shipping and taxes calculated at checkout
            </p>
          </div>
          <span className="font-semibold">
            ${items.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            .00
          </span>
        </div>
        {items.length > 0 && (
          <div className="flex mt-4 items-center border-t pt-4 border-gray-300 justify-between">
            <InteractiveHoverButton
              invert
              onClick={() => navigate("/cart")}
              className="px-4 sm:px-6 py-3   text-sm whitespace-nowrap"
            >
              View Cart
            </InteractiveHoverButton>

            <InteractiveHoverButton
              onClick={() => navigate("/checkout")}
              dark
              className="px-4 sm:px-6 py-3  text-sm"
            >
              Checkout
            </InteractiveHoverButton>
          </div>
        )}
      </ModalFooter>
    </div>
  );
}

export default function CartModal() {
  //  const t = useTranslations("Header");
  const { items } = useCartStore();

  console.log(items);
  return (
    <Modal>
      <ModalTrigger className="flex items-center gap-2">
        <IoCartOutline className="group-hover:scale-90 transition-all size-8 md:size-10" />
        <span className="size-5 transition-all flex items-center justify-center text-xs group-hover:-translate-y-1 bg-primary-accent absolute rounded-full left-6 text-white -top-2">
          {items.length}
        </span>
      </ModalTrigger>

      <ModalBody side="right" className="size-full bg-white ">
        <ModalHeader />
        <ModalContent className="flex p-5">
          <div className="w-full h-full flex flex-col gap-6">
            {items.length === 0 ? (
              <div className="w-full flex flex-col items-center gap-4">
                <Image
                  src="/empty-cart.png"
                  alt="empty cart"
                  width={200}
                  height={200}
                />
                <p className="text-center text-xl text-primary font-semibold">
                  Your shopping cart is empty.
                </p>
                <p className="text-center text-gray-500">
                  Looks like you have not added anything to your cart. Go ahead
                  & explore top products.
                </p>
              </div>
            ) : (
              <>
                {items.map((item) => (
                  <CartItemCard key={item.id} item={item} />
                ))}
              </>
            )}
          </div>
          <p id="modal-description" className="sr-only">
            View and manage your selected items before checkout
          </p>
        </ModalContent>
        <ModalFooterMain items={items} />
      </ModalBody>
    </Modal>
  );
}
