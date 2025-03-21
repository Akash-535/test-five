"use client";
import { PromoCodeIcon, SwiperArrowIcon } from "@/utils/icons";
import { useRouter } from "next/navigation";
import React from "react";

const OrderSummery = ({
  discount,
  subtotal,
  total,
}: {
  discount: number;
  subtotal: number;
  total: number;
}) => {
  const router = useRouter();

  const handleCheckout = () => {
    router.push("/");
    localStorage.removeItem("cart");
  };
  return (
    <div className="border border-[#0000001A] rounded-[20px] pt-5 px-6 pb-8 max-w-[505px] w-full max-md:p-5 max-xl:max-w-none">
      <h4 className="text-2xl satoshi-bold">Order Summary</h4>
      <div className="pt-6 flex flex-col gap-5 max-md:pt-4">
        <div className="flex items-center justify-between">
          <p className="opacity-60 text-xl">Subtotal</p>
          <p className="satoshi-bold text-xl">${subtotal}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-60 text-xl">Discount (-20%)</p>
          <p className="satoshi-bold text-[#FF3333] text-xl">-${discount}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="opacity-60 text-xl">Delivery Fee</p>
          <p className="satoshi-bold text-xl">$15</p>
        </div>
        <div className="w-full h-[1px] bg-[#0000001A]"></div>
        <div className="flex items-center justify-between">
          <p className="text-xl">Total</p>
          <p className="satoshi-bold text-xl">${total}</p>
        </div>
      </div>
      <div className="pt-6 flex justify-between items-center max-md:gap-3 max-md:pt-4">
        <div className="w-full max-w-[326px] py-3 px-4 bg-[#F0F0F0] rounded-full flex items-center gap-3">
          <label htmlFor="promo-inp" className="cursor-pointer">
            <PromoCodeIcon />
          </label>
          <input
            type="text"
            id="promo-inp"
            placeholder="Add promo code"
            className="placeholder:text-[#00000066] outline-none bg-transparent text-[#00000066] w-full"
          />
        </div>
        <button className="cursor-pointer bg-black rounded-full py-3 px-[38.5px] text-base satoshi-medium text-white border border-transparent hover:bg-white hover:text-black hover:border-black duration-300 ease-linear max-md:py-3.5 max-md:px-[25px]">
          Apply
        </button>
      </div>
      <button
        onClick={handleCheckout}
        className="cursor-pointer group mt-4 w-full flex justify-center items-center gap-3 bg-black rounded-full py-3 text-base satoshi-medium text-white border border-transparent hover:bg-white hover:text-black hover:border-black duration-300 ease-linear"
      >
        Go to Checkout{" "}
        <span className="rotate-180 checkout-arrow">
          <SwiperArrowIcon />
        </span>
      </button>
    </div>
  );
};

export default OrderSummery;
