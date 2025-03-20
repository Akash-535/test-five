import Footer from "@/components/common/Footer";
import AlsoLike from "@/components/details-page/AlsoLike";
import Details from "@/components/details-page/Details";
import Reviews from "@/components/details-page/Reviews";
import React from "react";

const page = () => {
  return (
    <div>
      <Details />
      <Reviews />
      <AlsoLike />
      <Footer />
    </div>
  );
};

export default page;
