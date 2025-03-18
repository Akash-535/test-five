"use client";
import React, { useState } from "react";
import SignUp from "../common/SignUp";
import Header from "../common/Header";
import { COUNTER_LIST } from "@/utils/helper";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Hero = () => {
  const [count, setCount] = useState(false);
  const { ref } = useInView({
    triggerOnce: true,
    onChange: (inView) => setCount(inView),
  });
  return (
    <div>
      <SignUp />
      <Header />
      <div className="min-h-[663px] bg-[#F2F0F1] flex justify-center items-center">
        <div className="max-w-[1259px] mx-auto flex w-full justify-between items-center">
          <div>
            {" "}
            <h1 className="font-integral text-[64px] leading-[100%] max-w-[577px]">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="max-w-[545px] py-8 text-black opacity-60 leading-[137%]">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button className="py-[15px] px-[67px] bg-black rounded-full text-white cursor-pointer border border-transparent hover:bg-[#F2F0F1] hover:text-black hover:border-black duration-300 ease-linear">
              Shop Now
            </button>
            <div ref={ref} className="max-w-[596px] flex gap-8 pt-12">
              {COUNTER_LIST.map((obj, i) => (
                <div
                  key={i}
                  className={`${
                    i === 1 ? "border-x border-x-[#0000001A] px-8" : ""
                  }`}
                >
                  <p className="text-[40px] satoshi-bold flex justify-center">
                    <CountUp
                      start={0}
                      end={count ? [200, 2000, 30000][i] : 0}
                      duration={3}
                    />{" "}
                    <span className="translate-x-[1px]">+</span>
                  </p>
                  <p className="leading-[137%] text-black opacity-60">{obj}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
