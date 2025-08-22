import React from "react";
import Header from "../../header/components/header";
import Footer from "../../footer/components/footer";
import { LayoutIF } from "../interfaces";

export default function MainLayout({ children }: LayoutIF) {
  return (
    <div className="grid min-h-dvh grid-rows-[auto_1fr_auto]">
      <Header />
      <main className={`h-full`}>{children}</main>
      <Footer />
    </div>
  );
}
