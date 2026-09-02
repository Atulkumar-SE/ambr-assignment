import React from "react";
import Topbar from "./Topbar";
import Navbar from "./Navbar";
import logo from "../../../assets/logo.png";
import { CiSearch } from "react-icons/ci";
import { GoHeart } from "react-icons/go";
import { BsCart2 } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainHeader = () => {
  return (
    <div>
      <Topbar />
      {/* ---------------Main Header------------- */}
      <div className="flex items-center justify-between border-b-1 border-gray-200 py-2 px-5 md:px-10 lg:px-30 transition-all duration-300">
        <Link
          to="/"
          className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto hover:scale-105 transition-all duration-300"
        >
          <img src={logo} alt="logo" />
        </Link>
        <div className="w-2/5 lg:w-2/5 border-1 border-gray-400 rounded-full flex justify-between items-center p-2">
          <input
            type="text"
            name="searchbox"
            id="searchbox"
            placeholder="Search"
            className=" outline-none w-full"
          />
          <CiSearch className="text-2xl text-red-900" />
        </div>
        <div className="flex gap-3 items-center justify-center ">
          <div className="flex gap-2 items-center justify-center">
            <svg
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="11"
                cy="11"
                r="10.6"
                stroke="black"
                stroke-width="0.8"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.7566 7.08264C13.0837 6.33776 12.1342 5.92704 11.0261 5.92704C9.91806 5.92704 8.96848 6.33776 8.29563 7.08264C7.6233 7.82695 7.25422 8.87497 7.25422 10.0962C7.25422 11.7404 7.91196 12.8001 8.72601 13.4363C8.88422 13.5598 9.04772 13.6671 9.21266 13.7596C8.30293 14.0316 7.56425 14.5059 6.96284 15.0943C6.01187 16.0244 5.42246 17.2212 5.02537 18.2929C4.95343 18.487 5.03971 18.7078 5.21809 18.7861C5.39646 18.8644 5.59937 18.7705 5.67131 18.5764C6.04927 17.5564 6.58908 16.479 7.4284 15.658C8.25929 14.8453 9.40195 14.2654 11.0261 14.2654C12.5445 14.2654 13.6406 14.7722 14.4542 15.4994C15.2747 16.2328 15.8272 17.2078 16.2231 18.1717C16.4872 18.8148 16.0237 19.5717 15.2961 19.5717H7.26009C7.06776 19.5717 6.91185 19.7414 6.91185 19.9507C6.91185 20.16 7.06776 20.3297 7.26009 20.3297H15.2961C16.4468 20.3297 17.3613 19.0856 16.859 17.8625C16.4387 16.8391 15.8308 15.7488 14.8963 14.9136C14.3416 14.4179 13.6785 14.0181 12.8846 13.7732C13.3092 13.5177 13.6583 13.1786 13.936 12.7942C14.537 11.9625 14.798 10.9302 14.798 10.0962C14.798 8.87497 14.4289 7.82695 13.7566 7.08264ZM13.26 7.61407C13.7859 8.19632 14.1015 9.04339 14.1015 10.0962C14.1015 10.7783 13.8832 11.6411 13.3886 12.3255C12.9035 12.9969 12.1465 13.5074 11.0261 13.5074C10.573 13.5074 9.79116 13.3354 9.13223 12.8205C8.49123 12.3195 7.95071 11.4842 7.95071 10.0962C7.95071 9.04339 8.26635 8.19632 8.7923 7.61407C9.31772 7.03239 10.0799 6.68508 11.0261 6.68508C11.9723 6.68508 12.7345 7.03239 13.26 7.61407Z"
                fill="black"
              />
            </svg>
            <span className="hidden lg:block">Profile</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <GoHeart className="text-[22px]" />
            <span className="hidden lg:block">Wishlist</span>
          </div>
          <div className="flex gap-2 items-center justify-center">
            <BsCart2 className="text-[22px]" />
            <span className="hidden lg:block">Cart</span>
          </div>
        </div>
      </div>

      <Navbar />
    </div>
  );
};

export default MainHeader;
