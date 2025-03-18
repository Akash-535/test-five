"use client";
import { HEADER_LIST } from "@/utils/helper";
import { SearchIcon, ShopCartIcon } from "@/utils/icons";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);

  return (
    <div className="max-w-[1240px] mx-auto py-6 flex items-center px-4">
      <div className="flex items-center gap-10 max-xl:justify-center max-xl:gap-8 max-lg:justify-between w-full">
        <div className="flex items-center gap-4">
          <div
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col w-full gap-1 pt-0.5 relative z-20"
          >
            <span
              className={` w-6 h-0.5 rounded duration-300 ease-linear ${
                open ? "rotate-45 translate-y-2 bg-white" : "bg-black"
              }`}
            ></span>
            <span
              className={` w-6 h-0.5 rounded duration-300 ease-linear ${
                open ? "translate-x-5 opacity-0 bg-white" : "bg-black"
              }`}
            ></span>
            <span
              className={` w-6 h-0.5 rounded duration-300 ease-linear ${
                open ? "-rotate-45 -translate-y-1 bg-white" : "bg-black"
              }`}
            ></span>
          </div>
          <Link
            href="#"
            className="font-integral font-bold text-[32px] leading-[100%]"
          >
            SHOP.CO
          </Link>
        </div>
        <div
          className={`flex gap-6 items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full duration-300 ease-linear max-lg:justify-center max-lg:flex-col max-lg:bg-black ${
            open ? "max-lg:left-0" : "max-lg:-left-full"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <Link
              href={obj.link}
              key={i}
              className="leading-[100%] max-lg:text-white max-lg:text-xl"
            >
              {obj.title}
            </Link>
          ))}
        </div>
        <div className="flex gap-10 items-center max-lg:gap-6 max-md:gap-3">
          <button
            onClick={() => setValue(!value)}
            className="search-icon md:hidden"
          >
            <SearchIcon />
          </button>
          <div
            className={`w-[557px] bg-[#F0F0F0] py-3 px-4 rounded-full flex gap-3 max-xl:w-[320px] max-md:flex-col max-md:fixed max-md:right-0 max-md:w-10/12  max-md:top-28 max-sm:top-[124px] max-md:mx-3 ${
              value ? "max-md:block" : "max-md:hidden"
            }`}
          >
            <label
              onClick={() => setValue(!value)}
              htmlFor="search-inp"
              className="cursor-pointer max-md:hidden"
            >
              <SearchIcon />
            </label>
            <input
              id="search-inp"
              type="text"
              placeholder="Search for products..."
              className={`placeholder:text-black placeholder:opacity-40 outline-none bg-transparent text-black opacity-40`}
            />
          </div>
          <div className="cursor-pointer">
            <ShopCartIcon />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
