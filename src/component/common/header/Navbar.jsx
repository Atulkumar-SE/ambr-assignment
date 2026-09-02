import React from "react";
import { Link } from "react-router-dom";
import { SlLocationPin } from "react-icons/sl";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import NavLogo from "../../../assets/navLogo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex justify-between items-center py-2 px-5 md:px-10 lg:px-30 transition-all duration-300">
      <div className="hidden lg:block">
        <nav className=" flex gap-5 [&>a]:inline-block [&>a]:text-gray-700 [&>a]:hover:text-red-900 [&>a]:transition-all [&>a]:duration-300">
          <Link to="/men">Men</Link>
          <Link to="/women">Women</Link>
          <Link to="/ethnic-wear">Ethnic Wear</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/contact-us">Contact Us</Link>
        </nav>
      </div>
      <RxHamburgerMenu
        onClick={() => setIsOpen(true)}
        className="block lg:hidden text-3xl cursor-pointer"
      />

      <Link
        to="/"
        className="w-28 sm:w-36 md:w-44 lg:w-52 h-auto hover:scale-105 transition-all duration-300 "
      >
        <img src={NavLogo} alt="logo" />
      </Link>
      <div className="flex items-center gap-4 ">
        <div className="flex items-center gap-2 text-gray-700">
          <SlLocationPin />
          <span className=" text-gray-700 hover:text-red-900 transition-all duration-300">
            Store Location
          </span>
        </div>
        <Link
          to="/track-order"
          className="hidden lg:block text-gray-700 hover:text-red-900 transition-all duration-300"
        >
          Track your order
        </Link>
        <Link
          to="/my-blogs"
          className="hidden lg:block text-gray-700 hover:text-red-900 transition-all duration-300"
        >
          My Blogs
        </Link>
      </div>
      {/* --------------------Toggle Menu----------------- */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/30 z-40 lg:hidden"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-screen w-1/2 bg-white z-50 p-5 shadow-2xl transition-transform duration-300 ease-in-out lg:hidden ${isOpen ? "translate-x-0" : "-translate-x-full"} relaitive `}
      >
        <div className="flex justify-end mb-6">
          <IoMdClose
            onClick={() => setIsOpen(false)}
            className="text-2xl cursor-pointer text-gray-700 hover:text-black"
          />
        </div>
        <nav className="flex flex-col  font-medium text-lg [&>a]:hover:border-l-5 [&>a]:border-red-900 [&>a]:p-4 [&>a]:hover:text-red-900 [&>a]:transition-all [&>a]:duration-100">
          <Link to="/men" onClick={() => setIsOpen(false)}>
            Men
          </Link>
          <Link to="/women" onClick={() => setIsOpen(false)}>
            Women
          </Link>
          <Link to="/ethnic-wear" onClick={() => setIsOpen(false)}>
            Ethnic Wear
          </Link>
          <Link to="/about-us" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/contact-us" onClick={() => setIsOpen(false)}>
            Contact Us
          </Link>
        </nav>
        <div className='absolute p-5 bottom-0 left-0 w-full'>
         <img src="https://img.magnific.com/free-vector/shubh-diwali-sale-offer-banner-with-realistic-diya-vector_1017-40358.jpg?t=st=1788229979~exp=1788233579~hmac=d581f0a89cbadd39a5b09eeafaa0d2107b7ec853694fd91187bdc423ff6ad6fb&w=1480" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
