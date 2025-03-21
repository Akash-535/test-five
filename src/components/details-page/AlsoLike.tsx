"use client";
import { ALSO_LIKE_LIST } from "@/utils/helper";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Heading from "../common/Heading";
import Link from "next/link";

const AlsoLike = () => {
  return (
    <div className="pt-16 pb-[168px] flex justify-center lg:items-center flex-col overflow-hidden px-4 max-lg:pt-16 max-md:pt-[50px] max-lg:pb-[185px]">
      <Heading text="You might also like" />
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
        {ALSO_LIKE_LIST.map((obj, i) => (
          <SwiperSlide
            key={i}
            className="cursor-pointer group w-full max-w-[295px]"
          >
            <Link
              href={`/products/${obj.title.toLowerCase().replace(/\s/g, "-")}`}
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
              <p className="satoshi-bold leading-[100%] pt-4 text-xl">
                {obj.title}
              </p>
              <div className="py-2 flex gap-3 items-center">
                {obj.ratingStar}
                <p className="text-sm leading-[100%]">
                  {obj.ratingText}
                  <span className="opacity-60">5</span>
                </p>
              </div>
              <div className="flex gap-2.5 items-center">
                <p className="satoshi-bold leading-[100%] text-2xl">
                  ${obj.price}
                </p>
                <p className="line-through opacity-40 leading-[100%] text-2xl">
                  ${obj.prevPrice}
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
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AlsoLike;
