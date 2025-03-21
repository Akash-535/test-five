"use client";
import React from "react";
import Heading from "../common/Heading";
import { Swiper, SwiperSlide } from "swiper/react";
import { HAPPY_CUSTOMERS_LIST } from "@/utils/helper";
import "swiper/css";
import { GreenTickIcon, SwiperArrowIcon } from "@/utils/icons";
import { Autoplay, Navigation } from "swiper/modules";

const HappyCustomers = () => {
  return (
    <div className="pt-20 pb-[170px] px-4 max-lg:pt-16 max-md:pt-[50px] max-lg:pb-[185px]">
      <div className="max-w-[1440px] mx-auto">
        <div className="w-full flex justify-between items-end max-w-[1240px] mx-auto">
          <Heading text="OUR HAPPY CUSTOMERS" myClass="text-start" />
          <div className="flex gap-4 items-center">
            <div className="cursor-pointer prev-arrow">
              <SwiperArrowIcon />
            </div>
            <div className="rotate-180 cursor-pointer next-arrow">
              <SwiperArrowIcon />
            </div>
          </div>
        </div>
        <Swiper
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: ".next-arrow",
            prevEl: ".prev-arrow",
          }}
          modules={[Navigation, Autoplay]}
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
              slidesPerView: 3.4,
              spaceBetween: 20,
              centeredSlides: true,
            },
          }}
          className="!pt-10 mySwiper flex justify-between items-center happy-swiper"
        >
          {HAPPY_CUSTOMERS_LIST.map((obj, i) => (
            <SwiperSlide
              key={i}
              className="bg-white min-h-[240px] max-w-[400px] max-md:min-h-[190px] border border-[#0000001A] rounded-[20px] flex flex-col justify-center items-center pt-7 px-8 max-lg:pt-6 max-lg:px-6"
            >
              {obj.ratingStar}
              <div className="flex items-center gap-1.5 pt-4 pb-3 max-md:pt-3 max-md:pb-2">
                <p className="satoshi-bold text-xl max-md:text-base">
                  {obj.name}
                </p>
                <GreenTickIcon />
              </div>
              <p className="text-black opacity-60 leading-[137%] max-md:text-sm">
                "{obj.description}
              </p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HappyCustomers;
