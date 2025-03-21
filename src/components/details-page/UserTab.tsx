"use client";
import React from "react";
import Reviews from "./Reviews";
import Link from "next/link";
import { USER_TAB_LIST } from "@/utils/helper";
import { useRouter, useSearchParams } from "next/navigation";

const UserTab = () => {
  const searchParams = useSearchParams();
  const tab = searchParams.get("tab") || "rating-and-reviews";
  const router = useRouter();
  return (
    <>
      <div className="flex mx-auto relative max-w-[1240px]">
        <div className="w-full h-[1px] bg-[#0000001A] absolute bottom-0"></div>
        {USER_TAB_LIST.map((obj, i) => {
          const itemSlug = obj
            .toLocaleLowerCase()
            .replaceAll(" ", "-")
            .replace("&", "and");
          const isActive = tab === itemSlug;

          return (
            <div
              key={i}
              className={`max-w-[414px] flex justify-center pb-5 border-b-2  relative w-full ${
                isActive ? " border-black" : "border-transparent"
              }`}
            >
              <Link
                href={`?tab=${itemSlug}`}
                onClick={(e) => {
                  e.preventDefault();
                  router.push(`?tab=${itemSlug}`, { scroll: false });
                }}
                className={`text-center text-xl max-sm:text-base max-md:text-lg whitespace-nowrap leading-[100%] ${
                  isActive && "font-medium"
                }`}
              >
                {obj}
              </Link>
            </div>
          );
        })}
      </div>

      {tab === "rating-and-reviews" ? (
        <Reviews />
      ) : (
        <div className="mt-4">
          <h2 className="text-2xl font-integral text-center font-bold uppercase">
            coming soon
          </h2>
        </div>
      )}
    </>
  );
};

export default UserTab;
