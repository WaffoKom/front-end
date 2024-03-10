import React from "react";
import { FooterNav } from "./FooterNav";

export const FooterContent = () => {
  return (
    <div className="footer-content flex flex-col  min-w-full bg-black">
      <div className="flex flex-row h-[20rem]  justify-between mx-24">
        <span className="text-gray-300 mr-4">
          <a href="#" className="min-w-[4rem] flex">
            Me and
          </a>
        </span>
        <FooterNav />
      </div>
    </div>
  );
};
