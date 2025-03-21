"use client";
import {
  ALSO_LIKE_LIST,
  COLOR_LIST,
  DETAILS_SIDE_IMG,
  NEW_ARRIVALS_LIST,
  SIZE_LIST,
  TOP_SELLING_LIST,
} from "@/utils/helper";
import { MinusIcon, NextIcon, PlusIcon, RightTickIcon } from "@/utils/icons";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface SelectProduct {
  color: string | number | null;
  size: any;
  quantity: number;
  image: any;
  title: string;
  price: string;
}

const DetailsData = () => {
  const [clicked, setClicked] = useState<any>(0);
  const [size, setSize] = useState<any>(2);
  const [selectImg, setSelectImg] = useState<string>();
  const [count, setCount] = useState<number>(1);
  const { slug } = useParams();
  const arr = [...TOP_SELLING_LIST, ...NEW_ARRIVALS_LIST, ...ALSO_LIKE_LIST];
  const [cart, setCart] = useState<any>([]);
  const handleAddToCart = () => {
    const selectedProduct: SelectProduct = {
      color: COLOR_LIST[clicked],
      size: SIZE_LIST[size],
      quantity: count,
      image: newShop.image,
      title: newShop.title,
      price: newShop.price,
    };
    const added = cart.some(
      (item: SelectProduct) =>
        item.color === selectedProduct.color &&
        item.size === selectedProduct.size &&
        item.title === selectedProduct.title
    );
    if (!added) {
      const updatedCart = [...cart, selectedProduct];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      toast.success("successfully Added");
    } else {
      toast.error("Already Added");
    }
  };
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      setCart(JSON.parse(cartData));
    }
  }, []);

  const shopArray = arr.filter(
    (obj) =>
      obj &&
      obj.title &&
      obj.title.toLowerCase().replace(/\s+/g, "-").replace("&", "%26") === slug
  );

  const checkHandler = (index: number) => {
    setClicked(clicked === index ? null : index);
  };
  const sizeHandler = (index: number) => {
    setSize(size === index ? null : index);
  };

  const newShop: any = shopArray.length ? shopArray[0] : null;
  return (
    <>
      <ToastContainer position="top-center" />
      <div className="max-w-[1250px] mx-auto pt-6 px-4">
        <p className="flex items-center text-[#00000099] leading-[100%]">
          Home{" "}
          <span className="pl-2 pr-3">
            <NextIcon />
          </span>{" "}
          Shop{" "}
          <span className="pl-2 pr-3">
            <NextIcon />
          </span>{" "}
          Men{" "}
          <span className="pl-2 pr-3">
            <NextIcon />
          </span>{" "}
          <span className="text-black">T-shirts</span>
        </p>
        <div className="pt-9 pb-20 max-md:pb-[50px] max-lg:pb-16 max-md:pt-5 flex justify-between items-center gap-10 w-full max-xl:flex-wrap max-xl:justify-center max-lg:gap-8 max-md:gap-5">
          <div className="flex gap-3.5 items-center w-6/12 xl:max-w-[610px] max-lg:flex-wrap-reverse max-xl:w-full max-xl:justify-center">
            <div className="flex flex-col gap-3.5 max-lg:flex-row">
              {DETAILS_SIDE_IMG.map((obj, i) => (
                <div
                  key={i}
                  className={`w-[152px] h-[167px] max-lg:w-full max-sm:max-w-[111px] max-sm:h-[106px] max-w-[152px] cursor-pointer overflow-hidden border border-transparent hover:border-black duration-300 ease-linear rounded-[20px] `}
                >
                  <Image
                    onClick={() => setSelectImg(i === 0 ? newShop.image : obj)}
                    width={152}
                    height={167}
                    className="max-w-[152px] min-h-[167px] max-sm:max-w-[111px] max-sm:min-h-[106px] w-full object-cover cursor-pointer hover:scale-110 duration-300 ease-linear"
                    src={i === 0 ? newShop.image : obj}
                    alt="new image"
                  />
                </div>
              ))}
            </div>
            <Image
              width={444}
              height={530}
              className="max-w-[444px] object-cover min-h-[530px] max-lg:max-w-[484px] max-h-[530px] rounded-[20px] max-md:min-h-[290px] max-md:max-w-none max-xl:w-full"
              src={selectImg ? selectImg : newShop.image}
              alt="image"
            />
          </div>
          <div className="w-6/12 max-lg:w-8/12 max-md:w-full">
            <h2 className="text-[40px] font_numeric leading-[100%] max-lg:text-3xl max-md:text-2xl">
              {newShop.title}
            </h2>
            <div className="flex gap-3 py-3.5 items-center">
              <div>{newShop.ratingStar}</div>
              <p>
                {newShop.ratingText}
                <span className="opacity-60">5</span>
              </p>
            </div>
            <div className="flex gap-2.5 items-center">
              <p className="satoshi-bold leading-[100%] text-[32px] max-md:text-2xl">
                {newShop.price}
              </p>
              <p className="line-through opacity-40 leading-[100%] text-[32px] max-md:text-2xl">
                {newShop.prevPrice}
              </p>
              <p
                className={
                  newShop.discount &&
                  "bg-[#FFEBEB] rounded-full py-1.5 px-[13.5px] text-[#FF3333] text-xs satoshi-medium"
                }
              >
                {newShop.discount}
              </p>
            </div>
            <p className="pt-5 pb-6 leading-[137%] opacity-60">
              This graphic t-shirt which is perfect for any occasion. Crafted
              from a soft and breathable fabric, it offers superior comfort and
              style.
            </p>
            <div className="w-full h-[1px] bg-[#0000001A]"></div>
            <div className="py-6">
              <p className="opacity-60 leading-[100%] pb-4">Select Colors</p>
              <div className="flex gap-4">
                {COLOR_LIST.map((obj, i) => (
                  <div
                    onClick={() => checkHandler(i)}
                    key={i}
                    className={`size-[37px] rounded-full cursor-pointer flex justify-center items-center ${
                      i === 0
                        ? "bg-[#4F4631]"
                        : i === 1
                        ? "bg-[#314F4A]"
                        : "bg-[#31344F]"
                    }`}
                  >
                    <div className={`${clicked === i ? "block" : "hidden"}`}>
                      <RightTickIcon />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#0000001A]"></div>
            <div className="py-6">
              <p className="opacity-60 leading-[100%] pb-4">Choose Size</p>
              <div className="flex gap-3 max-md:gap-2">
                {SIZE_LIST.map((obj, i) => (
                  <div
                    onClick={() => sizeHandler(i)}
                    key={i}
                    className={`cursor-pointer py-3 px-6 max-md:py-2.5 max-md:px-4 rounded-full border max-md:border-0 border-transparent hover:border-black duration-300 ease-linear ${
                      size === i ? "bg-black" : "bg-[#F0F0F0]"
                    }`}
                  >
                    <p
                      className={`leading-[100%] ${
                        size === i
                          ? "text-white satoshi-medium max-md:text-sm"
                          : "opacity-60"
                      }`}
                    >
                      {obj}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <div className="w-full h-[1px] bg-[#0000001A]"></div>
            <div className="pt-6 flex gap-5 max-md:gap-3">
              <div className="flex max-w-[170px] max-md:max-w-[110px] rounded-full w-full items-center justify-between bg-[#F0F0F0] py-3.5 px-5 max-md:py-3 max-md:px-4">
                <button
                  onClick={() => setCount(Math.max(count - 1, 1))}
                  className="cursor-pointer"
                >
                  <MinusIcon />
                </button>
                <p className="text-black satoshi-medium leading-[100%]">
                  {count}
                </p>
                <button
                  onClick={() => setCount(count + 1)}
                  className="cursor-pointer"
                >
                  <PlusIcon />
                </button>
              </div>
              <button
                onClick={handleAddToCart}
                className="w-full bg-black text-white rounded-full cursor-pointer border border-transparent hover:border-[#0000001A] satoshi-medium py-[17px] leading-[100%] hover:bg-transparent hover:text-black duration-300 ease-linear"
              >
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DetailsData;
