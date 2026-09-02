import React from "react";
import footerBG from "../../../assets/footerBG.png";
import FooterLogo from "../../../assets/footerLogo.png";
import FooterQR from "../../../assets/footerQR.png";
import { PiCopyright } from "react-icons/pi";
import { FaFacebookF } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <footer
      className="w-full bg-cover bg-center bg-no-repeat flex flex-col justify-between text-white mt-10"
      style={{ backgroundImage: `url(${footerBG})` }}
    >
      <div className="flex flex-col justify-center w-full px-5 md:px-10 lg:px-30 gap-16 py-12 md:py-20 ">
        {/* -----------------Newsletter---------------- */}
        <Newsletter />

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr_1fr]  gap-10 w-full text-white">
          <div>
            <Link
              to="/"
              className="inline-block w-auto h-auto hover:scale-105 transition-all duration-300 "
            >
              <img src={FooterLogo} alt="Footer Logo" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <ul className="[&_a]:inline-block [&_a]:hover:scale-110 [&_a]:transition-all [&_a]:duration-300">
              <li className="font-bold mb-5 uppercase">Explore</li>
              <li>
                <Link to="/men">Men</Link>
              </li>
              <li>
                <Link to="/women">Women</Link>
              </li>
              <li>
                <Link to="/ethnic-wear">Ethnic Wear</Link>
              </li>
            </ul>
            <ul className="[&_a]:inline-block [&_a]:hover:scale-110 [&_a]:transition-all [&_a]:duration-300">
              <li className="font-bold mb-5 uppercase">Information</li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/faq">Store</Link>
              </li>
              <li>
                <Link to="/faq">Blog</Link>
              </li>
            </ul>
            <ul className="[&_a]:inline-block [&_a]:hover:scale-110 [&_a]:transition-all [&_a]:duration-300">
              <li className="font-bold mb-5 uppercase">Policies</li>
              <li>
                <Link to="/men">Cancellation Policy</Link>
              </li>
              <li>
                <Link to="/women">Privacy Policy</Link>
              </li>
              <li>
                <Link to="/ethnic-wear">Terms of Conditions</Link>
              </li>
            </ul>
            <div className="[&_a]:inline-block [&_a]:hover:scale-110 [&_a]:transition-all [&_a]:duration-300 [&_a]:border-1 [&_a]:border-white [&_a]:rounded-full [&_a]:p-2">
              <h2 className="font-bold mb-5 ">Connect with us</h2>
              <div className="flex gap-2 text-[1rem]">
                <Link to="/men" className="hover:text-[#4267B2]">
                  <FaFacebookF />
                </Link>
                <Link to="/women" className="hover:text-[#1DA1F2]">
                  <BsTwitterX />
                </Link>
                <Link to="/ethnic-wear" className="hover:text-[#FF0000]">
                  <FaYoutube />
                </Link>
                <Link to="/ethnic-wear" className="hover:text-[#0077B5]">
                  <FaLinkedinIn />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3">
            <img src={FooterQR} alt="Footer QR Code" />
            <p className="text-2xl font-playfair">Scan and follow us</p>
          </div>
        </div>
      </div>

      <div className="flex items-center text-center justify-center bg-[#021332] text-white gap-2 py-2 font-playfair">
        <PiCopyright />
        <span>2026</span> <p>GAUSTRA All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
