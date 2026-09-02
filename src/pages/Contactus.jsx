import React from "react";
import ContactusImg from "../assets/contactus.jpg";
const Contactus = () => {
  return (
    <div className=" relative flex flex-col text-black items-center justify-center w-full h-[78vh] ">
      <img
        src={ContactusImg}
        alt="Contact Us"
        className="w-full h-full object-cover  "
      />
      <div className="absolute flex px-5 rounded-full bg-white/0 backdrop-blur-sm ">
        <h1 className=" text-[4rem] md:text-[7rem] font-bold mb-4 text-white">
          Contact Us
        </h1>
      </div>
    </div>
  );
};

export default Contactus;
