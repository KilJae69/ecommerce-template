"use client";
import React from "react";

import Image from "next/image";

// import { FloatingDock } from "../ui/floating-dock";

import { FaXmark } from "react-icons/fa6";
import { IoCartOutline } from "react-icons/io5";
import Link from "next/link";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
  useModal,
} from "./ui/animated-modal";

// import { Button } from "../ui/button";

function ModalHeader() {
  const { setOpen } = useModal();
  return (
    <div className=" flex py-2 px-2 justify-between items-center bg-white ">
      <Link
        href="/"
        onClick={() => setOpen(false)}
        aria-label="Home"
        className="relative w-[120px] h-[40px]"
      >
        <Image src="/logo.png" alt="Logo" className="object-contain" fill />
      </Link>

      <FaXmark
        onClick={() => setOpen(false)}
        className="size-6 cursor-pointer"
      />
    </div>
  );
}

// function ModalFooter() {

//   return (
//     <div className="mt-auto">
//       <Button>Post Job</Button>
//     </div>
//   );
// }

export default function CartModal() {
  //  const t = useTranslations("Header");
  return (
    <Modal>
      <ModalTrigger className="flex items-center gap-2">
        <IoCartOutline className="group-hover:scale-90 transition-all size-8 md:size-10" />
        <span className="size-5 transition-all group-hover:-translate-y-1 bg-primary-accent absolute rounded-full left-6 text-white -top-2">
          4
        </span>
       
      </ModalTrigger>

      <ModalBody side="right" className="size-full bg-white ">
        <ModalHeader />
        <ModalContent className="flex p-5">
          Cart
          {/* <div className="flex flex-col items-center justify-center py-10 mt-auto w-full">
            <p className="text-md sm:text-xl font-semibold tracking-widest mb-10 text-primary-800">
              {t("language-label")}
            </p>
            <FloatingDock />
          </div> */}
          {/* <ModalFooter /> */}
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}
