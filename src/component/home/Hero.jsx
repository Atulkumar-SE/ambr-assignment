import React, { useState, useEffect } from "react";
import Hero1 from "../../assets/herobg1.png";
import Hero2 from "../../assets/herobg2.jpg";
import Hero3 from "../../assets/herobg3.jpg";
import HeroGirl from "../../assets/heroGirl.png";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: Hero1,
      image2: HeroGirl,
      title: "GAURASTRA",
      subtitle: "Up to 50% Off on Ethnic Wear",
      subtitle2: "FOCUS ON YOURSELF",
    },
    {
      id: 2,
      image: Hero2,
      image2: "",
      title: "New Winter Collection",
      subtitle: "Discover Premium Jackets & Coats",
    },
    {
      id: 3,
      image: Hero3,
      title: "Exclusive Designer Fits",
      subtitle: "Crafted for Modern Elegance",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  // Auto-slide effect (changes slide every 3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);
  return (
    <div className="relative w-full  mx-auto overflow-hidden  shadow-xl transition-all ease-in-out duration-600 ">
      <div
        className="flex transition-transform duration-700 ease-in-out font-playfair "
        style={{ transform: `translateX(-${currentIndex * 100}%) ` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="relative w-full flex-shrink-0 aspect-[16/7] md:aspect-[16/6] "
          >
            {/* -------------------------Slide Image------------------------ */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />

            {/* Sliding Text Overlay */}
            <div className="absolute inset-0 top-1 lg:top-12  flex flex-col items-center p-6 md:p-6 text-white">
              <p className="text-sm md:text-lg text-gray-200">
                {slide.subtitle}
              </p>
              <h2 className="text-[2rem] md:text-[4rem] lg:text-[6rem]  font-bold transition-all duration-700 ease-in-out">
                {slide.title}
              </h2>

              <img
                src={slide.image2}
                alt="Hero Girl"
                className="h-[80%] bottom-0 absolute"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t  from-red-900 via-red/500  to-transparent">
        <p className="text-lg md:text-xl font-semibold text-center w-full text-black bottom-0 absolute text-gray-200 bg-gradient-to-t from-red-900 via-red/500  to-transparent font-playfair">
          FOCUS ON YOURSELF
        </p>
        {/* ---------------------Pagination Indicators (Dots)----------------------- */}
        <div className="absolute bottom-4 right-10 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === index ? "bg-white w-8" : "bg-white/50 w-2.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      {isVisible ? (
        <div className="absolute bg-white rounded-lg px-2 lg:px-5 -rotate-90 py-2 lg:py-3  bottom-1/2 left-5 -translate-x-1/2 flex gap-2 z-10 cursor-pointer">
          <Link to="/women">SHOP NOW</Link>
          <IoMdClose
            onClick={() => setIsVisible(false)}
            className="absolute text-2xl bg-black text-white rounded-full -bottom-3 -right-3 p-1 "
          />
        </div>
      ) : null}
    </div>
  );
};
90;

export default Hero;
