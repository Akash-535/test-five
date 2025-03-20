"use client";
import React, { useState } from "react";
import SignUp from "../common/SignUp";
import Header from "../common/Header";
import { COUNTER_LIST } from "@/utils/helper";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const Hero = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCount(inView),
  });
  return (
    <div className="relative">
      <SignUp />
      <Header />
      <div className="min-h-[663px] bg-[#F2F0F1] flex justify-center items-center max-xl:pt-10">
        <div className="max-w-[1259px] mx-auto flex w-full justify-between items-center gap-10 max-xl:flex-wrap px-4 max-xl:justify-center">
          <div className="flex justify-center flex-col">
            {" "}
            <h1 className="font-integral text-[64px] leading-[100%] max-w-[577px] max-lg:text-5xl max-md:text-4xl">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="max-w-[545px] py-8 text-black opacity-60 leading-[137%] max-md:pt-5 max-md:text-sm">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="py-[17px] px-[67px] max-w-[210px] bg-black rounded-full leading-[100%] text-white cursor-pointer border border-transparent hover:bg-[#F2F0F1] hover:text-black hover:border-black duration-300 ease-linear">
              Shop Now
            </button>
            <div
              ref={ref}
              className="max-w-[596px] flex gap-8 pt-12 max-lg:flex-wrap justify-center max-lg:pt-8 max-md:pt-5 max-md:gap-7"
            >
              {COUNTER_LIST.map((obj, i) => (
                <div
                  key={i}
                  className={`${
                    i === 1
                      ? "border-x border-x-[#0000001A] px-8 max-lg:border-r-0 max-md:pl-7 max-md:pr-0"
                      : ""
                  }`}
                >
                  <p
                    className={`text-[40px] satoshi-bold flex justify-center max-lg:text-3xl max-md:text-2xl ${
                      i === 0
                        ? "min-w-[107px]"
                        : i === 1
                        ? "min-w-[146px]"
                        : "min-w-[171px]"
                    }`}
                  >
                    <CountUp
                      start={0}
                      end={count ? [200, 2000, 30000][i] : 0}
                      duration={3}
                    />{" "}
                    <span className="translate-x-[1px]">+</span>
                  </p>
                  <p className="leading-[137%] text-black opacity-60 max-md:text-xs whitespace-nowrap">
                    {obj}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="-mb-9 max-xl:mb-0">
            <Image
              width={627}
              height={629}
              className="max-w-[627px] object-cover max-xl:max-w-[540px] max-xl:w-full"
              src="/assets/images/hero-img.webp"
              alt="hero img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
