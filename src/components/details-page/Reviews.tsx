"use client";
import { REVIEWS_LIST } from "@/utils/helper";
import { DownArrowIcon, GreenTickIcon, ThreeDotIcon } from "@/utils/icons";
import React, { useState } from "react";

const Reviews = () => {
  const [sortOption, setSortOption] = useState("Oldest");
  const [sortedReviews, setSortedReviews] = useState([...REVIEWS_LIST]);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    const option: string = e.target.value;
    setSortOption(option);

    const sortedList = [...REVIEWS_LIST].sort((a, b) => {
      const dateA: Date = new Date(a.date.split("Posted on ")[1]);
      const dateB: Date = new Date(b.date.split("Posted on ")[1]);
      return option === "Latest"
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });
    setSortedReviews(sortedList);
  };
  return (
    <div className="flex flex-col justify-center items-center max-xl:px-4 max-w-[1240px] mx-auto">
      <div className="flex w-full items-center justify-between pb-[29px] pt-4">
        <div className="flex gap-2 items-center justify-center">
          <h3 className="satoshi-bold text-2xl leading-[100%]">All Reviews</h3>
          <p className="leading-[100%] text-black/60 text-base">
            ({REVIEWS_LIST.length})
          </p>
        </div>
        <div className="flex w-full max-w-[120px] pr-5 bg-[#F0F0F0] cursor-pointer rounded-full items-center">
          <select
            className="outline-none rounded-full appearance-none cursor-pointer px-5 py-3.5 satoshi-medium"
            value={sortOption}
            onChange={handleSortChange}
          >
            <option>Oldest</option>
            <option>Latest</option>
          </select>
          <DownArrowIcon />
        </div>
      </div>
      <div className="mx-auto flex flex-wrap justify-between gap-y-5">
        {sortedReviews.map((obj, i) => (
          <div
            key={i}
            className="max-w-[610px] max-xl:mx-auto w-full border border-[#0000001A] py-7 px-8 max-lg:p-6 rounded-[20px]"
          >
            <div className="flex justify-between w-full items-center">
              {obj.ratingStar}
              <div className="cursor-pointer">
                {" "}
                <ThreeDotIcon />
              </div>
            </div>
            <div className="flex gap-1 pt-[15px] pb-3 items-center max-md:pb-2">
              <h3 className="satoshi-bold text-xl leading-[22px] max-md:text-base">
                {obj.name}
              </h3>
              <GreenTickIcon />
            </div>
            <p className="opacity-60 leading-[22px] max-md:text-sm max-md:leading-5">
              "{obj.description}"
            </p>
            <p className="pt-6 opacity-60 satoshi-medium leading-[22px] max-md:pt-4 max-md:text-sm max-md:leading-5">
              {obj.date}
            </p>
          </div>
        ))}
      </div>
      <button className="text-base satoshi-medium leading-[100%] py-[17px] px-11 mt-9 cursor-pointer border border-[#0000001A] rounded-full">
        Load More Reviews
      </button>
    </div>
  );
};

export default Reviews;
