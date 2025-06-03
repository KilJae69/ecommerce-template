"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

type InnerLayoutProps = {
  children: ReactNode;
};
export default function InnerLayout({ children }: InnerLayoutProps) {
  return (
    <>
      <Header />
      <main className="w-full flex-1 ">{children}</main>
      <Footer />
      <div id="modal-root"></div>
    </>
  );
}
