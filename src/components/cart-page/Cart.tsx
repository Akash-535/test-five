"use client";
import React, { useEffect, useState } from "react";
import SignUp from "../common/SignUp";
import Header from "../common/Header";
import { DeleteIcon, MinusIcon, NextIcon, PlusIcon } from "@/utils/icons";
import Image from "next/image";
import OrderSummery from "./OrderSummery";

const Cart = () => {
  const [cartItem, setCartItem] = useState<any>(null);
  const [count, setCount] = useState<any>(1);
  useEffect(() => {
    const storedItem = localStorage.getItem("cartItem");
    if (storedItem) {
      setCartItem(JSON.parse(storedItem));
    }
  }, []);

  return (
    <div>
      <SignUp />
      <Header />
      <div className="pb-[170px] max-lg:pb-[185px] max-w-[1240px] mx-auto max-xl:px-4">
        <div className="w-full h-[1px] bg-[#0000001A]"></div>
        <p className="flex items-center gap-2 pt-6 leading-[100%] text-[#00000099]">
          Home <NextIcon /> <span className="pl-2.5 text-black">Cart</span>
        </p>
        <h2 className="text-[40px] font-integral py-6 leading-[100%]">
          Your cart
        </h2>
        <div className="w-full flex justify-between items-start flex-wrap max-xl:gap-5">
          <div className="border border-[#0000001A] rounded-[20px] max-w-[715px] py-5 px-6 w-full">
            {cartItem ? (
              <div className="flex gap-4 items-center w-full">
                <div className="size-[124px] overflow-hidden rounded-[8px]">
                  <Image
                    width={124}
                    height={124}
                    className="hover:scale-110 ease-linear duration-300"
                    src={cartItem.product.image}
                    alt="image"
                  />
                </div>
                <div className="w-full">
                  <div className="flex justify-between w-full items-center">
                    <h3 className="text-xl satoshi-bold max-md:text-base">
                      {cartItem.product.title}
                    </h3>
                    <button className="cursor-pointer">
                      <DeleteIcon />
                    </button>
                  </div>
                  <p className="text-sm pt-0.5 max-md:text-xs">
                    Size: <span className="opacity-60">{cartItem.size}</span>
                  </p>
                  <p className="text-sm pt-0.5 max-md:text-xs">
                    Color: <span className="opacity-60">{cartItem.color}</span>
                  </p>
                  <div className="pt-4 flex justify-between w-full items-center">
                    <p className="text-2xl satoshi-bold max-md:text-xl">
                      {cartItem.product.price}
                    </p>
                    <div className="flex max-w-[126px] max-md:max-w-[105px] rounded-full w-full items-center justify-between bg-[#F0F0F0] py-3 px-5 max-md:py-[7.5px] max-md:px-[13.5px]">
                      <button
                        onClick={() => setCount(Math.max(count - 1, 1))}
                        className="cursor-pointer"
                      >
                        <MinusIcon />
                      </button>
                      <p className="text-black satoshi-medium leading-[100%]">
                        {count}
                      </p>
                      <button
                        onClick={() => setCount(count + 1)}
                        className="cursor-pointer"
                      >
                        <PlusIcon />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <p className="text-2xl satoshi-bold">
                Please add product in your cart
              </p>
            )}
          </div>
          <OrderSummery />
        </div>
      </div>
    </div>
  );
};

export default Cart;
