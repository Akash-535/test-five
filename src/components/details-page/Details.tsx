"use client";
import { NEW_ARRIVALS_LIST, TOP_SELLING_LIST } from "@/utils/helper";
import { useParams } from "next/navigation";
import React from "react";
import SignUp from "../common/SignUp";
import Header from "../common/Header";
import DetailsData from "./DetailsData";

const Details = () => {
  const { slug } = useParams();
  const arr = [...TOP_SELLING_LIST, ...NEW_ARRIVALS_LIST];
  const shopArray = arr.filter(
    (obj) =>
      obj &&
      obj.title &&
      obj.title.toLowerCase().replace(/\s+/g, "-").replace("&", "%26") === slug
  );

  const newShop: any = shopArray.length ? shopArray[0] : null;
  return (
    <div>
      {newShop ? (
        <div>
          <SignUp />
          <Header />
          <DetailsData />
          <div className="max-w-[1240px] mx-auto w-full h-[1px] bg-[#0000001A] px-4"></div>
        </div>
      ) : (
        <div className="min-h-screen bg-black flex justify-center items-center">
          <div className="text-transparent font-integral text-5xl bg-gradient-to-r from-red-400 via-red-600 to-red-900 bg-clip-text">
            PAGE NOT FOUND
          </div>
        </div>
      )}
    </div>
  );
};

export default Details;
