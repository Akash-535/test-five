import React from "react";
import CustomSwiper from "../common/CustomSwiper";
import { TOP_SELLING_LIST } from "@/utils/helper";

const TopSelling = () => {
  return (
    <div>
      <CustomSwiper
        headingText="top selling"
        list={TOP_SELLING_LIST}
        parentClass="pt-16 pb-20 flex justify-center lg:items-center flex-col overflow-hidden px-4 max-lg:pt-12 max-md:pt-10"
      />
    </div>
  );
};

export default TopSelling;
