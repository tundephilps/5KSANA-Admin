import React, { useState } from "react";
import Bitcoin from "../assets/bitcoin2.png";

const AddItems = () => {
  const [selectedOption, setSelectedOption] = useState("Usual");
  return (
    <div className="bg-black text-white lg:px-[80px] px-4 py-12">
      <p className="text-2xl font-bold">Items Adding</p>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 pt-8">
        {/* Upload Pix */}
        <div className="flex ">
          <div className="lg:w-80 w-full h-80 flex border-gray-600 border-dashed rounded-lg flex-col justify-center bg-[#2B2B2B] items-center border-2 ">
            <>
              <label
                htmlFor="fileInput"
                className="text-white text-3xl cursor-pointer mb-2"
              >
                +
              </label>
              <p className="text-gray-400">Load image or drag and drop</p>
              <input type="file" className="hidden" id="fileInput" />
            </>
          </div>
        </div>
        {/* Form */}
        <div>
          <div className="mb-4">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              placeholder="Painting Embroidery Unknown Bitcoins"
              className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium mb-2"
            >
              Price
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="0.00013"
                className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
                required
              />
              <img src={Bitcoin} className="absolute right-2 top-2" />
            </div>
          </div>
          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium mb-2">
              Size *
            </label>
            <select
              placeholder="30/40"
              className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
              required
            >
              <option value="">Select Size</option>
              <option value="usa">30/40</option>
              <option value="canada">60/70</option>
              <option value="uk">100/120</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-sm font-medium mb-2">
              Delivery *
            </label>
            <select
              placeholder="International Free"
              className="bg-[#212121] border-[#212121] text-sm rounded-md focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
              required
            >
              <option value="usa">International Free</option>
              <option value="canada">Standard</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-sm font-medium mb-2">
              Description
            </label>
            <textarea
              placeholder="Order notes"
              className="bg-[#212121] border-[#212121] text-sm rounded-md h-44 focus:outline-none focus:ring-2 focus:ring-[#fccb00] focus:border-[#fccb00] block w-full p-2.5"
            />
          </div>

          <div className="bg-black text-white pt-4 rounded-lg w-full">
            {/* Options */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <label htmlFor="usual" className=" text-sm">
                  Usual
                </label>

                <input
                  type="radio"
                  id="usual"
                  name="option"
                  value="Usual"
                  checked={selectedOption === "Usual"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="accent-yellow-500"
                />
              </div>
              <div className="flex items-center  justify-between mb-4">
                <label htmlFor="auction" className=" text-sm">
                  Auction
                </label>
                <input
                  type="radio"
                  id="auction"
                  name="option"
                  value="Auction"
                  checked={selectedOption === "Auction"}
                  onChange={(e) => setSelectedOption(e.target.value)}
                  className="accent-yellow-500"
                />
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-between gap-4">
              <button
                className="bg-white text-black w-full py-2 rounded-full text-sm font-medium"
                onClick={() => alert("Canceled")}
              >
                Cancel
              </button>
              <button
                className="bg-yellow-500 text-black w-full py-2 rounded-full text-sm font-medium"
                onClick={() => alert(`Saved: ${selectedOption}`)}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddItems;
