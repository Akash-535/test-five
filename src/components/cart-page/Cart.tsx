"use client";
import React, { useEffect, useState } from "react";
import SignUp from "../common/SignUp";
import Header from "../common/Header";
import { NextIcon } from "@/utils/icons";
import Image from "next/image";

const Cart = () => {
  const [cartItem, setCartItem] = useState<any[]>([]);

  useEffect(() => {
    const storedItems = localStorage.getItem("cartItems");
    if (storedItems) {
      try {
        const parsedItems = JSON.parse(storedItems);
        if (Array.isArray(parsedItems)) {
          setCartItem(parsedItems);
        } else {
          setCartItem([]);
        }
      } catch (error) {
        console.error("Error parsing cart items:", error);
        setCartItem([]);
      }
    }
  }, []);
  if (cartItem === null) {
    return <p>No items in your cart. Please add products first.</p>;
  }
  return (
    <div>
      <SignUp />
      <Header />
      <div className="pb-[170px] max-lg:pb-[185px] max-w-[1240px] mx-auto">
        <div className="w-full h-[1px] bg-[#0000001A]"></div>
        <p className="flex items-center gap-2 pt-6 leading-[100%] text-[#00000099]">
          Home <NextIcon /> <span className="pl-2.5 text-black">Cart</span>
        </p>
        <h2 className="text-[40px] font-integral py-6 leading-[100%]">
          Your cart
        </h2>
        <div className="border border-[#0000001A] rounded-[20px] max-w-[715px] py-5 px-6">
          {cartItem ? (
            <div>
              {cartItem.map((obj: any, i: number) => (
                <div key={i}>
                  <div>
                    <Image
                      width={124}
                      height={124}
                      src={obj.product.image}
                      alt="image"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
