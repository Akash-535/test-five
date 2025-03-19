import React from "react";
import Heading from "../common/Heading";
import Image from "next/image";

const DressStyle = () => {
  return (
    <div className="px-4">
      <div className="max-w-[1240px] bg-[#F0F0F0] mx-auto rounded-[40px] pt-[70px] pb-[76px] px-6 flex flex-col justify-center items-center max-lg:pt-14 max-md:pt-10 max-lg:pb-12 max-md:pb-7">
        <Heading text="BROWSE BY dress STYLE" />
        <div className="max-w-[1111px] mx-auto w-full flex flex-col gap-5 pt-16 max-lg:pt-11 max-md:pt-7">
          <div className="w-full flex justify-between max-xl:gap-5 max-xl:justify-center max-lg:flex-wrap max-md:gap-4">
            <Image
              width={407}
              height={289}
              className="max-w-[407px] max-h-[289px] max-md:max-w-[310px] max-md:max-h-[190px] rounded-[20px] max-lg:max-h-[244px] object-top object-cover max-xl:max-w-[350px] max-xl:w-full max-lg:max-w-[580px]"
              src="/assets/images/causual-dress-img.webp"
              alt="casual dress"
            />
            <Image
              width={684}
              height={289}
              className="max-w-[684px] max-md:max-w-[310px] max-md:min-h-[190px] object-cover object-left rounded-[20px] max-xl:max-w-[580px] max-xl:w-full"
              src="/assets/images/formal-dress-img.webp"
              alt="formal dress"
            />
          </div>
          <div className="w-full flex justify-between max-xl:justify-center max-xl:gap-5 max-lg:flex-wrap">
            <Image
              width={684}
              height={289}
              className="max-w-[684px] max-md:max-w-[310px] max-md:min-h-[190px] object-cover object-left rounded-[20px] max-xl:max-w-[580px] max-xl:w-full"
              src="/assets/images/party-dress-img.webp"
              alt="party dress"
            />
            <Image
              width={407}
              height={289}
              className="max-w-[407px] max-h-[289px] max-md:max-w-[310px] max-md:max-h-[190px] rounded-[20px] max-lg:max-h-[244px] object-top object-cover max-xl:max-w-[350px] max-xl:w-full max-lg:max-w-[580px]"
              src="/assets/images/gym-dress-img.webp"
              alt="gym dress"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DressStyle;
