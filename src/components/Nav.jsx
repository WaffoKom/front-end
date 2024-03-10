import React from "react";
import { themes } from "../articles.json";

export const Nav = () => {
  return (
    <nav className="flex flex-row  text-gray-200 w-full  items-center justify-around">
      <div className="flex flex-row nav-bar-left  w-[30rem] justify-around">
        <a href="#" className="font-bold text-lg flex min-w-[4rem] ">
          Me and
        </a>
        <ul
          className="flex flex-row justify-evenly font-thin  text-sm w-[20rem]
        "
        >
          {themes.map((theme) => (
            <li key={theme.id}>
              <a href="#">{theme.name}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className="nav-bar-right flex flex-row">
        <a href="#" className="mx-4">
          Twitter
        </a>
        <a href="#">RSS</a>
      </div>
    </nav>
  );
};
