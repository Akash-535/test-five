"use client";
import { HEADER_LIST } from "@/utils/helper";
import { DownArrowIcon, SearchIcon, ShopCartIcon } from "@/utils/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
interface CartItem {
  title: string;
  image: any;
  color: string;
  size: string;
  quantity: number;
  price: number;
}
const Header = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(false);
  const [cartLength, setCartLength] = useState<CartItem[] | any>(0);
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = open || value ? "hidden" : "auto";
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const cart = JSON.parse(storedCart);
      setCartLength(cart.length);
    }

    const handleCartUpdated = (event: Event) => {
      const customEvent = event as CustomEvent<number>;
      setCartLength(customEvent.detail);
    };

    window.addEventListener("cartUpdated", handleCartUpdated);
    return () => {
      window.removeEventListener("cartUpdated", handleCartUpdated);
    };
  }, [open, value]);

  return (
    <div className="max-w-[1240px] mx-auto py-6 flex items-center px-4 max-md:py-5">
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
            href="/"
            className="font-integral font-bold text-[32px] leading-[100%] max-md:text-[25px]"
          >
            SHOP.CO
          </Link>
        </div>
        <div
          className={`flex gap-6 items-center max-lg:fixed max-lg:top-0 max-lg:w-full max-lg:h-full duration-300 ease-linear max-lg:justify-center max-lg:flex-col max-lg:bg-black max-md:z-10 ${
            open ? "max-lg:left-0" : "max-lg:-left-full"
          }`}
        >
          {HEADER_LIST.map((obj, i) => (
            <div key={i} className="group relative">
              <Link
                onClick={() => setOpen(false)}
                href="#"
                className="flex gap-1 items-center transition-all duration-300 leading-[100%] whitespace-nowrap link-text relative max-lg:text-white"
              >
                {obj.title} {obj.submenu && <DownArrowIcon />}
              </Link>
              {obj.submenu && (
                <div className="bg-white shadow-md absolute group-hover:block hidden z-10">
                  <ul className="p-2">
                    {obj.submenu.map((subObj, subIndex) => (
                      <li
                        key={subIndex}
                        className="hover:bg-gray-100 px-4 py-1"
                      >
                        <Link
                          onClick={() => setOpen(false)}
                          className="whitespace-nowrap"
                          href="#"
                        >
                          {subObj.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
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
            className={`w-[557px] bg-[#F0F0F0] py-3 px-4 rounded-full flex gap-3 max-xl:w-[320px] max-md:flex-col max-md:fixed max-md:right-0 max-md:w-10/12  max-md:top-14 max-sm:top-[90px] max-md:mx-3 max-md:border max-md:border-black ${
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
              className={`placeholder:text-[#00000066] outline-none bg-transparent text-[#00000066] w-full`}
            />
          </div>
          <button
            onClick={() => router.push("/cart")}
            className="cursor-pointer relative"
          >
            <ShopCartIcon />
            {cartLength > 0 && (
              <span className="absolute top-[-15px] right-[-9px] bg-red-400 text-sm text-white size-5 flex justify-center items-center rounded-full">
                {cartLength}
              </span>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
