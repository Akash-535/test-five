import { BRANDS_ICON_LIST } from "@/utils/helper";
import Link from "next/link";
import React from "react";

const ProductBrands = () => {
  return (
    <div className="bg-black py-[42px] max-md:py-10">
      <div className="max-w-[1238px] mx-auto flex items-center justify-between max-lg:flex-wrap px-4 max-lg:justify-center max-lg:gap-7 max-md:gap-5">
        {BRANDS_ICON_LIST.map((obj, i) => (
          <Link
            key={i}
            href={obj.link}
            target="_blank"
            className={`${
              i === 0
                ? "versace-icon"
                : i === 1
                ? "zara-icon"
                : i === 2
                ? "gucci-icon"
                : i === 3
                ? "prada-icon"
                : "ck-icon"
            }`}
          >
            {obj.icon}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductBrands;
