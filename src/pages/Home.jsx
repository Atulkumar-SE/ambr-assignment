import React from "react";
import Hero from "../component/home/Hero";
import EthnicWearCardSlider from "../component/home/EthnicWearCardSlider";
import EthnicB1 from "../assets/banner/ethnicB1.png";
import MenB1 from "../assets/banner/menB2.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Hero />
      <EthnicWearCardSlider />
      <div className="px-5 md:px-10 lg:px-30 transition-all ease-in-out duration-600">
        <img src={EthnicB1} alt="Ethnic Banner" />
      </div>
      <div className="relative px-5 md:px-10 lg:px-30 transition-all ease-in-out duration-600 font-playfair">
        <img src={MenB1} alt="Men Banner" />
        <div className="absolute bottom-[10%] lg:bottom-[30%]  flex flex-col items-center left-[15%]">
          <p className="uppercase text-1xl md:text-2xl lg:text-4xl font-bold text-white mb-2 lg:mb-5">
            Class that speaks
          </p>
          <Link
            to="/men"
            className="bg-linear-to-b from-[#432B08] to-[#A96C14] text-white text-[10px] md:text-[16px] lg:text-[20px] px-1 lg:px-4 py-1 lg:py-2 rounded-md hover:bg-red-800 transition-colors duration-300"
          >
            SHOP NOW
          </Link>
        </div>
      </div>
          
    </div>
  );
};

export default Home;
