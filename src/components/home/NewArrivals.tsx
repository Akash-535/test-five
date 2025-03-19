import React from "react";
import CustomSwiper from "../common/CustomSwiper";
import { NEW_ARRIVALS_LIST } from "@/utils/helper";

const NewArrivals = () => {
  return (
    <div>
      <CustomSwiper headingText="NEW ARRIVALS" list={NEW_ARRIVALS_LIST} />
    </div>
  );
};

export default NewArrivals;
