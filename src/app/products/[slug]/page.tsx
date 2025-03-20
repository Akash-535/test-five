import Footer from "@/components/common/Footer";
import AlsoLike from "@/components/details-page/AlsoLike";
import Details from "@/components/details-page/Details";
import Reviews from "@/components/details-page/Reviews";
import UserTab from "@/components/details-page/UserTab";
import React, { Suspense } from "react";

const page = () => {
  return (
    <div>
      <Details />
      <Suspense>
        <UserTab />
      </Suspense>
      <AlsoLike />
      <Footer />
    </div>
  );
};

export default page;
