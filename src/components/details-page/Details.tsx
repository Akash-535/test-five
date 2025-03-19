"use client";
import { NEW_ARRIVALS_LIST, SIZE_LIST, TOP_SELLING_LIST } from "@/utils/helper";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import SignUp from "../common/SignUp";
import Header from "../common/Header";
import { MinusIcon, NextIcon, PlusIcon, RightTickIcon } from "@/utils/icons";
import Image from "next/image";

const Details = () => {
  const [clicked, setClicked] = useState<number | null>(0);
  const [size, setSize] = useState<number | null>(2);
  const [selectImg, setSelectImg] = useState<string>();
  const [count, setCount] = useState<number>(1);
  const { slug } = useParams();
  const arr = [...TOP_SELLING_LIST, ...NEW_ARRIVALS_LIST];
  const shopArray = arr.filter(
    (obj) =>
      obj &&
      obj.title &&
      obj.title.toLowerCase().replace(/\s+/g, "-").replace("&", "%26") === slug
  );

  const checkHandler = (index: number) => {
    setClicked(clicked === index ? null : index);
  };
  const sizeHandler = (index: number) => {
    setSize(size === index ? null : index);
  };

  const newShop: any = shopArray.length ? shopArray[0] : null;
  return (
    <div>
      {newShop ? (
        <div>
          <SignUp />
          <Header />
          <div className="max-w-[1240px] mx-auto w-full h-[1px] bg-[#0000001A]"></div>
          <div className="max-w-[1250px] mx-auto pt-6">
            <p className="flex items-center text-[#00000099] leading-[100%]">
              Home{" "}
              <span className="pl-2 pr-3">
                <NextIcon />
              </span>{" "}
              Shop{" "}
              <span className="pl-2 pr-3">
                <NextIcon />
              </span>{" "}
              Men{" "}
              <span className="pl-2 pr-3">
                <NextIcon />
              </span>{" "}
              <span className="text-black">T-shirts</span>
            </p>
            <div className="pt-9 pb-20 flex justify-between items-center gap-10 w-full">
              <div className="flex gap-3.5 items-center w-6/12">
                <div className="flex flex-col gap-3.5">
                  <div className="w-[152px] h-[167px] rounded-xl cursor-pointer overflow-hidden">
                    <Image
                      onClick={() => setSelectImg(newShop.image)}
                      width={152}
                      height={167}
                      className="max-w-[152px] max-h-[167px] object-cover cursor-pointer hover:scale-110 duration-300 ease-linear"
                      src={newShop.image}
                      alt="new image"
                    />
                  </div>
                  <div className="w-[152px] h-[167px] rounded-xl cursor-pointer overflow-hidden">
                    <Image
                      width={152}
                      height={167}
                      onClick={() =>
                        setSelectImg("/assets/images/details-tshirt.webp")
                      }
                      className="max-w-[152px] max-h-[167px] object-cover cursor-pointer hover:scale-110 duration-300 ease-linear"
                      src="/assets/images/details-tshirt.webp"
                      alt="new image"
                    />
                  </div>
                  <div className="w-[152px] h-[167px] rounded-xl cursor-pointer overflow-hidden">
                    <Image
                      width={152}
                      height={167}
                      onClick={() =>
                        setSelectImg("/assets/images/details-man.webp")
                      }
                      className="max-w-[152px] max-h-[167px] object-cover cursor-pointer hover:scale-110 duration-300 ease-linear"
                      src="/assets/images/details-man.webp"
                      alt="new image"
                    />
                  </div>
                </div>
                <Image
                  width={444}
                  height={530}
                  className="max-w-[444px] object-cover min-h-[530px] max-h-[530px] rounded-[20px]"
                  src={selectImg ? selectImg : newShop.image}
                  alt="image"
                />
              </div>
              <div className="w-6/12">
                <h2 className="text-[40px] font-integral leading-[100%]">
                  {newShop.title}
                </h2>
                <div className="flex gap-3 py-3.5 items-center">
                  <div>{newShop.ratingStar}</div>
                  <p>
                    {newShop.ratingText}
                    <span className="opacity-60">5</span>
                  </p>
                </div>
                <div className="flex gap-2.5 items-center">
                  <p className="satoshi-bold leading-[100%] text-2xl">
                    {newShop.price}
                  </p>
                  <p className="line-through opacity-40 leading-[100%] text-2xl">
                    {newShop.prevPrice}
                  </p>
                  <p
                    className={`${
                      newShop.discount
                        ? "bg-[#FFEBEB] rounded-full py-1.5 px-[13.5px] text-[#FF3333] text-xs satoshi-medium"
                        : ""
                    }`}
                  >
                    {newShop.discount}
                  </p>
                </div>
                <p className="pt-5 pb-6 leading-[137%] opacity-60">
                  This graphic t-shirt which is perfect for any occasion.
                  Crafted from a soft and breathable fabric, it offers superior
                  comfort and style.
                </p>
                <div className="w-full h-[1px] bg-[#0000001A]"></div>
                <div className="py-6">
                  <p className="opacity-60 leading-[100%] pb-4">
                    Select Colors
                  </p>
                  <div className="flex gap-4">
                    {[...Array(3)].map((_, i) => (
                      <div
                        onClick={() => checkHandler(i)}
                        key={i}
                        className={`size-[37px] rounded-full cursor-pointer flex justify-center items-center ${
                          i === 0
                            ? "bg-[#4F4631]"
                            : i === 1
                            ? "bg-[#314F4A]"
                            : "bg-[#31344F]"
                        }`}
                      >
                        <div
                          className={`${clicked === i ? "block" : "hidden"}`}
                        >
                          <RightTickIcon />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#0000001A]"></div>
                <div className="py-6">
                  <p className="opacity-60 leading-[100%] pb-4">Choose Size</p>
                  <div className="flex gap-3">
                    {SIZE_LIST.map((obj, i) => (
                      <div
                        onClick={() => sizeHandler(i)}
                        key={i}
                        className={`cursor-pointer py-3 px-6 rounded-full border border-transparent hover:border-black duration-300 ease-linear ${
                          size === i ? "bg-black" : "bg-[#F0F0F0]"
                        }`}
                      >
                        <p
                          className={`leading-[100%] ${
                            size === i
                              ? "text-white satoshi-medium"
                              : "opacity-60"
                          }`}
                        >
                          {obj}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full h-[1px] bg-[#0000001A]"></div>
                <div className="pt-6">
                  <div className="flex max-w-[170px] rounded-full w-full items-center justify-between bg-[#F0F0F0] py-3.5 px-5">
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
          </div>
        </div>
      ) : (
        <div className="min-h-screen bg-black flex justify-center items-center">
          <div className="text-transparent font-integral text-5xl bg-gradient-to-r from-red-400 via-red-600 to-red-900 bg-clip-text">
            PAGE NOT FOUND
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
