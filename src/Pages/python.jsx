import React from "react";
import { HeaderContent } from "./HeaderContent";
import { Articles } from "./Articles";
import { FooterContent } from "./FooterContent";

export const Pages = () => {
  return (
    <div className=" flex flex-col h-screen w-full">
      <HeaderContent />
      <Articles />
      <FooterContent />
    </div>
  );
};
