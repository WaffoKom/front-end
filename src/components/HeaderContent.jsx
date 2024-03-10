import React from "react";
import { Nav } from "./Nav";
import { HeadTitle } from "./HeaderTitle";

export const HeaderContent = () => {
  return (
    <div className="inner flex flex-col bg-black  justify-between h-[25rem]">
      <Nav />
      <HeadTitle />
    </div>
  );
};
