import React from "react";
import { FaEnvelope } from "react-icons/fa";
import Logo from "../assets/Logo.png";

import Pay1 from "../assets/Pay1.png";

import Pay2 from "../assets/Pay2.png";
import Pay3 from "../assets/Pay3.png";
import Pay4 from "../assets/Pay4.png";
import Pay5 from "../assets/Pay5.png";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="lg:px-[80px] mx-auto flex lg:flex-row flex-col lg:items-center items-start justify-between md:grid-cols-3 gap-8 px-8">
        {/* Left Section */}
        <div>
          <img src={Logo} />
          <p className="text-gray-100 mt-2">2024 © 5Ksana</p>
          <p className="text-gray-100">Privacy policy</p>
        </div>

        {/* Center Section */}
        <div>
          <ul className="space-y-2">
            <li className="hover:text-gray-300 cursor-pointer">SHOP</li>
            <li className="hover:text-gray-300 cursor-pointer">
              BITCOIN ART GALLERY
            </li>
            <li className="hover:text-gray-300 cursor-pointer">CONTACT</li>
            <li className="hover:text-gray-300 cursor-pointer">ABOUT ME</li>
          </ul>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Information</h3>
          <div className="flex items-center space-x-2">
            <FaEnvelope className="text-yellow-500" />
            <p className="text-gray-400">info@5ksana.art</p>
          </div>

          <h3 className="text-lg font-bold mt-4 mb-2">Payments</h3>
          <div className="flex space-x-2">
            <img
              src={Pay1}
              className="text-2xl text-gray-400 hover:text-white"
            />{" "}
            <img
              src={Pay2}
              className="text-2xl text-gray-400 hover:text-white"
            />{" "}
            <img
              src={Pay3}
              className="text-2xl text-gray-400 hover:text-white"
            />{" "}
            <img
              src={Pay4}
              className="text-2xl text-gray-400 hover:text-white"
            />{" "}
            <img
              src={Pay5}
              className="text-2xl text-gray-400 hover:text-white"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
