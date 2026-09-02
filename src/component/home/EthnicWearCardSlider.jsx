import React from "react";
import Ethnic1 from "../../assets/ethnic/ec1.png";
import Ethnic2 from "../../assets/ethnic/ec2.png";
import Ethnic3 from "../../assets/ethnic/ec3.png";
import Ethnic4 from "../../assets/ethnic/ec4.png";
import Ethnic5 from "../../assets/ethnic/ec5.png";

const EthnicWearCardSlider = () => {
  const cardData = [
    { id: 1, image: Ethnic1, title: "Long Kurti" },
    { id: 2, image: Ethnic2, title: "Short Kurti" },
    { id: 3, image: Ethnic3, title: "Co-ord Sets" },
    { id: 4, image: Ethnic4, title: "Gown" },
    { id: 5, image: Ethnic5, title: "Sharara Set" },
  ];

  return (
    <div className=" w-full px-5 md:px-10 lg:px-30 transition-all ease-in-out duration-600 font-playfair">
      <div className="flex items-center mb-5 relative">
        <svg
          width="35"
          height="39"
          viewBox="0 0 35 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.9791 19.4697C33.7529 27.7699 29.8618 43.0838 9.87058 36.8845C-2.2534 32.1932 -4.81303 9.51713 15.555 5.13257C16.3784 5.00441 17.9022 3.9576 17.4101 0.795671L28.2139 5.18639L19.2556 12.6529L18.6404 8.7005C18.5123 7.87708 17.5424 6.84733 14.688 9.31566"
            stroke="#562E16"
          />
        </svg>
        <h1 className="text-red-900 absolute left-2 text-[1.5rem] lg:text-[1.8rem] font-bold">
          Women Ethnic Wear
        </h1>
      </div>

      <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] py-4 lg:py-0 ">
        {cardData.map((card) => (
          <div
            key={card.id}
            className="shrink-0 snap-start w-[calc((100%-2rem)/3)] lg:w-auto relative flex flex-col items-center justify-center p-3 rounded-xl bg-white shadow-[0_0_15px_rgba(0,0,0,0.3)]"
          >
            <div className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden relative flex items-center justify-center">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover hover:scale-110 transition-all ease-in-out duration-600 cursor-pointer"
              />

              <div className="absolute w-[100%] text-center rounded bg-gray-200/70 backdrop-blur-xs py-0.5">
                <h3 className="font-semibold text-[10px] sm:text-xs md:text-sm text-gray-900 truncate px-1">
                  {card.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthnicWearCardSlider;
