import React from "react";
import EmailForm from "./EmailForm";
import Link from "next/link";
import {
  FOOTER_LIST,
  ONLINE_PAY_APP_LIST,
  SOCIAL_MEDIA_ICON,
} from "@/utils/helper";

const Footer = () => {
  return (
    <div className="relative bg-[#F0F0F0] w-full min-h-[499px] pt-[140px] max-lg:pt-[190px]">
      <EmailForm myClass="absolute -top-[38%] max-md:-top-[34%] left-1/2 -translate-x-1/2 translate-y-1/2" />
      <div className="max-w-[1240px] mx-auto flex justify-between flex-wrap px-4 max-lg:gap-y-6 pb-[50px] max-lg:pb-10">
        <div className="w-4/12 max-lg:w-full">
          <Link
            href="#"
            className="font-integral font-bold text-[32px] leading-[100%] max-md:text-[25px]"
          >
            SHOP.CO
          </Link>
          <p className="pt-6 max-w-[248px] text-sm opacity-60 max-lg:max-w-none max-lg:pt-3.5">
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
          <div className="flex gap-3 justify-start items-center pt-9 max-lg:pt-5">
            {SOCIAL_MEDIA_ICON.map((obj, i) => (
              <Link
                key={i}
                href={obj.link}
                target="_blank"
                className="size-7 border rounded-full border-[#00000033] bg-white flex justify-center items-center social-icon hover:bg-black duration-300 ease-linear"
              >
                {obj.icon}
              </Link>
            ))}
          </div>
        </div>
        {FOOTER_LIST.map((obj, i) => (
          <div key={i} className="w-2/12 max-lg:w-1/2">
            <p className="text-base tracking-[3px] satoshi-medium pb-0.5 max-md:text-sm">
              {obj.heading}
            </p>
            <div className="flex flex-col pt-6 max-lg:pt-4">
              {obj.list.map((val, i) => (
                <Link
                  key={i}
                  href="#"
                  className={`text-base opacity-60 leading-[118%] hover:opacity-100 duration-300 ease-linear max-md:text-sm ${
                    i === 0 ? "" : "pt-5 max-lg:pt-3"
                  }`}
                >
                  {val}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="max-w-[1240px] mx-auto px-4 max-lg:pb-[77px]">
        <div className="w-full h-[1px] bg-[#0000001A]"></div>
        <div className="pt-6 flex justify-between w-full items-center max-md:flex-col max-md:justify-center max-md:gap-4">
          <p className="text-sm opacity-60">
            Shop.co © 2000-{new Date().getFullYear()}, All Rights Reserved
          </p>
          <div className="flex gap-3 items-center">
            {ONLINE_PAY_APP_LIST.map((obj, i) => (
              <Link
                key={i}
                href={obj.link}
                target="_blank"
                className="w-[46.61px] h-[30.03px] flex justify-center items-center bg-white rounded-md hover:shadow-lg hover:scale-105 duration-300 ease-linear"
              >
                {obj.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
