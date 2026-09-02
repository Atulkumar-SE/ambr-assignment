import React, { useState } from "react";
import { PiPaperPlaneRightFill } from "react-icons/pi";
import emailjs from "@emailjs/browser";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setMessage("");

    const templateParams = {
      user_email: email, 
    };

    emailjs
      .send(
        "service_zpzhpg4", 
        "template_k7v75ao", 
        templateParams,
        "emhUwCMkRF6ZIMxKR", 
      )
      .then(
        () => {
          setMessage("Thank you for connecting! Please check your inbox.");
          setEmail("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          setMessage("Something went wrong. Please try again.");
        },
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="flex flex-col lg:flex-row gap-4 lg:gap-0  lg:justify-between items-center lg:items-center pt-10 lg:pt-5 px-5 md:15 lg:px-20 w-full h-50 lg:h-40 rounded-xl bg-[#9A9085] text-white ">
      <div>
        <h1 className="text-2xl md:text-4xl lg:text-3xl font-bold font-playfair">
          Get More Discount up to 40%
        </h1>
        <p>Save money buy more</p>
      </div>
      <div className="flex gap-4 w-full md:w-[60%] lg:w-1/3">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full p-1 lg:p-3 border border-white rounded-lg focus:outline-none bg-white text-black placeholder:text-gray-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          className="bg-[#021332] text-white px-8 rounded-lg hover:bg-[#021332] transition-colors duration-300"
          onClick={handleSubscribe}
          disabled={loading}
        >
          <PiPaperPlaneRightFill />
        </button>
        {message && (
          <p className="mt-3 text-xs md:text-sm text-amber-200 font-medium">
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default Newsletter;
