import React from "react";

import { FaCircleCheck } from "react-icons/fa6";
import Art from "../assets/Art.png";
import { MdOutlineEdit } from "react-icons/md";
import { FaRegTrashAlt } from "react-icons/fa";
import Bitcoin from "../assets/bitcoin.png";

const Card = () => {
  return (
    <div className="flex items-center border border-[#44404d]  justify-between bg-[#18151d] text-white px-[16px] py-[8px] rounded-xl shadow-lg w-full">
      {/* Image Section */}
      <div className="flex items-center space-x-4">
        <img
          src={Art}
          alt="Painting"
          className="w-20 h-20 rounded-md object-cover"
        />
        {/* Details Section */}
        <div className="space-y-6">
          <p className="text-sm font-bold font-bricolage">
            Painting-Embroidery «Unknown Bitcoin»
          </p>
          <div className="flex items-center gap-5 ">
            <span className="text-gray-100 text-sm inline-flex gap-2 items-center bg-[#29282a] px-2 py-1 rounded-full">
              {" "}
              <img src={Bitcoin} className="text-3xl " /> 0.1000BTC
            </span>
            <div className="flex items-center bg-[#29282a] text-white px-2 py-1 rounded-full">
              <FaCircleCheck className="w-4 h-4 mr-2 text-[#54de32]" />
              <span className="text-base ">Placed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Date and Icons Section */}
      <div className="flex flex-col items-center justify-between space-y-8">
        <div className="flex items-center gap-8">
          <MdOutlineEdit
            className="hover:
hover:text-gray-400 text-white cursor-pointer"
          />
          <FaRegTrashAlt
            className="hover:
hover:text-gray-400 text-white cursor-pointer"
          />
        </div>

        <p className="text-sm text-gray-400">12.12.2012</p>
      </div>
    </div>
  );
};

export default Card;
