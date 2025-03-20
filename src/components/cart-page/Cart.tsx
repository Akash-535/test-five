"use client";
import React, { useEffect, useState } from "react";
import SignUp from "../common/SignUp";
import Header from "../common/Header";
import { DeleteIcon, MinusIcon, NextIcon, PlusIcon } from "@/utils/icons";
import Image from "next/image";
import OrderSummery from "./OrderSummery";

interface CartItem {
  title: string;
  image: string;
  color: string;
  size: string;
  quantity: number;
  price: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      console.log("Cart items loaded:", parsedCart); // Log loaded items
      setCartItems(parsedCart);
    }
  }, []);

  const handleRemoveItem = (index: number) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handleQuantityChange = (index: number, change: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += change;
    if (updatedCart[index].quantity < 1) {
      updatedCart[index].quantity = 1;
    }

    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

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
        {cartItems.length > 0 ? (
          <div className="w-full flex justify-between items-start flex-wrap max-xl:gap-5">
            <div className="border border-[#0000001A] rounded-[20px] max-w-[715px] py-5 px-6 w-full">
              <div className="flex flex-col gap-6">
                {cartItems.map((item, index) => (
                  <div key={index}>
                    <div className="flex gap-4 items-center w-full pb-6">
                      <div className="size-[124px] max-w-[124px] w-full overflow-hidden rounded-[8px]">
                        <Image
                          width={124}
                          height={124}
                          className="hover:scale-110 ease-linear duration-300"
                          src={item.image}
                          alt="image"
                        />
                      </div>
                      <div className="w-full">
                        <div className="flex justify-between w-full items-center">
                          <h3 className="text-xl satoshi-bold max-md:text-base">
                            {item.title}
                          </h3>
                          <button
                            onClick={() => handleRemoveItem(index)}
                            className="cursor-pointer"
                          >
                            <DeleteIcon />
                          </button>
                        </div>
                        <p className="text-sm pt-0.5 max-md:text-xs">
                          Size: <span className="opacity-60">{item.size}</span>
                        </p>
                        <p className="text-sm pt-0.5 max-md:text-xs">
                          Color:{" "}
                          <span className="opacity-60">{item.color}</span>
                        </p>
                        <div className="pt-4 flex justify-between w-full items-center">
                          <p className="text-2xl satoshi-bold max-md:text-xl">
                            {item.price}
                          </p>
                          <div className="flex max-w-[126px] max-md:max-w-[105px] rounded-full w-full items-center justify-between bg-[#F0F0F0] py-3 px-5 max-md:py-[7.5px] max-md:px-[13.5px]">
                            <button
                              onClick={() => handleQuantityChange(index, -1)}
                              className="cursor-pointer"
                            >
                              <MinusIcon />
                            </button>
                            <p className="text-black satoshi-medium leading-[100%]">
                              {item.quantity}
                            </p>
                            <button
                              onClick={() => handleQuantityChange(index, 1)}
                              className="cursor-pointer"
                            >
                              <PlusIcon />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[1px] bg-[#0000001A]"></div>
                  </div>
                ))}
              </div>
            </div>
            <OrderSummery />
          </div>
        ) : (
          <p className="text-2xl satoshi-bold">No items in the cart.</p>
        )}
      </div>
    </div>
  );
};

export default Cart;
