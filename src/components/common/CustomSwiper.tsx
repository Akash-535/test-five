"use client";
import Image from "next/image";
import React from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../common/Heading";
import { useRouter } from "next/navigation";

interface CommonData {
  headingText?: string;
  parentClass?: string;
  list?: any;
}
const CustomSwiper = ({ headingText, parentClass, list }: CommonData) => {
  const router = useRouter();

  return (
    <>
      <div
        className={`pt-[72px] pb-16 flex justify-center lg:items-center flex-col overflow-hidden px-4 max-lg:pt-16 max-md:pt-[50px] max-lg:pb-12 max-md:pb-10 ${parentClass}`}
      >
        <Heading text={headingText} />
        <Swiper
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              centeredSlides: true,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 2,
              centeredSlides: true,
              spaceBetween: 14,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
          }}
          className="!pt-14 mx-auto flex justify-between mySwiper max-w-[1240px] overflow-hidden max-lg:!pt-11 max-md:!pt-8"
        >
          {list.map((obj: any, i: number) => (
            <SwiperSlide
              onClick={() =>
                router.push(
                  `/products/${obj.title.toLowerCase().replace(/\s/g, "-")}`
                )
              }
              key={i}
              className="cursor-pointer group w-full max-w-[295px]"
            >
              <div className="w-[295px] h-[298px] rounded-[20px] overflow-hidden">
                <Image
                  width={295}
                  height={298}
                  className="group-hover:scale-110 duration-300 ease-linear maxm"
                  src={obj.image}
                  alt="new arrival img"
                />
              </div>
              <p className="satoshi-bold leading-[100%] pt-4">{obj.title}</p>
              <div className="py-2 flex gap-3 items-center">
                {obj.ratingStar}
                <p className="text-sm leading-[100%]">
                  {obj.ratingText}
                  <span className="opacity-60">5</span>
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <p className="satoshi-bold leading-[100%] text-2xl">
                  {obj.price}
                </p>
                <p className="line-through opacity-40 leading-[100%] text-2xl">
                  {obj.prevPrice}
                </p>
                <p
                  className={`${
                    obj.discount
                      ? "bg-[#FFEBEB] rounded-full py-1.5 px-[13.5px] text-[#FF3333] text-xs satoshi-medium"
                      : ""
                  }`}
                >
                  {obj.discount}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="cursor-pointer px-20 py-[17px] text-base border border-[#0000001A] rounded-full mt-9 text-center satoshi-medium leading-[100%] hover:bg-black hover:text-white duration-300 ease-linear">
          View All
        </button>
      </div>
    </>
  );
};

export default CustomSwiper;
