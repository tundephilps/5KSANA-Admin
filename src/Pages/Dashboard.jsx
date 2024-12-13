import React, { useState } from "react";
import PlacedItems from "../components/PlacedItems";
import { AiOutlinePlus } from "react-icons/ai";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Placed");

  const tabs = [
    { name: "Placed", component: <PlacedItems /> },
    { name: "Auction", component: <div>Auction Content</div> },
    { name: "Sold", component: <div>Sold Content</div> },
    { name: "Deleted", component: <div>Deleted Content</div> },
  ];
  return (
    <div className="bg-black text-white lg:px-[80px] px-4 py-12">
      <div className="flex items-center justify-between">
        <p className="text-2xl font-bold">Items</p>
        <Link
          to="/additems"
          className="text-[#fcc800] font-bold inline-flex items-center gap-3 cursor-pointer"
        >
          Add New <AiOutlinePlus />
        </Link>
      </div>
      <div className="flex flex-col ">
        {/* Tab Buttons */}
        <div className="flex space-x-4 py-8">
          {tabs.map((tab) => (
            <button
              key={tab.name}
              onClick={() => setActiveTab(tab.name)}
              className={`px-4 py-2 rounded-full ${
                activeTab === tab.name
                  ? "bg-[#fcc800] text-black font-bold"
                  : "bg-gray-800 text-white"
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Render Active Tab Content */}
        <div className="w-full  rounded-lg">
          {tabs.find((tab) => tab.name === activeTab)?.component}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
