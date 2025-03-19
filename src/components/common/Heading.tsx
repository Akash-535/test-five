import React from "react";
import { text } from "stream/consumers";
interface HeadingData {
  text?: string;
  myClass?: string;
}
const Heading = ({ text, myClass }: HeadingData) => {
  return (
    <h2
      className={`text-5xl font-integral uppercase leading-[100%] text-center max-lg:text-4xl max-md:text-[32px] ${myClass}`}
    >
      {text}
    </h2>
  );
};

export default Heading;
