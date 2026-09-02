import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  // ---------------hide top bar-------------------
  if (!isVisible) return null;

  return (
    <div className="bg-black px-5 md:px-10 lg:px-30 py-2 text-[10px] lg:text-[1rem] text-white flex justify-between items-center transition-all duration-600 ease-in-out">
      <h6>Support (+91) 9522474600</h6>
      <h6>Free Shipping over Rs 1000</h6>
      <div className="flex gap-3 items-center justify-center">
        <Link to="/login">Login</Link>
        <select name="language" id="lang">
          <option value="english">Eng</option>
          <option value="hindi">Hin</option>
          <option value="chinese">Chi</option>
          <option value="japanese">Jap</option>
        </select>
        <IoMdClose
          onClick={() => setIsVisible(false)}
          className="hidden md:block text-[1rem] lg:text-2xl cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Topbar;
