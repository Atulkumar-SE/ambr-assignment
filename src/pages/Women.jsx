import React from "react";
import WomenImg from "../assets/women.jpg";

const women = () => {
  return (
    <div className=" relative flex flex-col text-black items-center justify-center w-full h-[78vh] ">
      <img
        src={WomenImg}
        alt="Women"
        className="w-full h-full object-cover  "
      />
      <div className="absolute top-1/3 left-1/5">
        <h1 className=" text-[4rem] md:text-[7rem] font-bold mb-4">Women</h1>
      </div>
    </div>
  );
};

export default women;
