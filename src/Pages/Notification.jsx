import React, { useState } from "react";

const Notification = () => {
  const [settings, setSettings] = useState({
    email: true,
    telegram: false,
    purchases: false,
    auctionBids: false,
    auctionEnds: true,
  });

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };
  return (
    <div className="bg-black w-full">
      <div className=" text-white p-4 rounded-lg w-96 flex flex-col  mx-auto">
        <p className="text-2xl font-bold py-12">Notification</p>
        <div className="space-y-4 items-start justify-start flex flex-col text-sm">
          {/* Email Notification */}
          <div className="flex flex-row-reverse justify-start items-center gap-4">
            <span>Email notification</span>
            <button
              onClick={() => toggleSetting("email")}
              className={`w-10 h-6 flex items-center rounded-full p-1 ${
                settings.email ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full transform ${
                  settings.email ? "translate-x-4" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Telegram Notification */}
          <div className="flex flex-row-reverse justify-start items-center gap-4">
            <span>Telegram notification</span>
            <button
              onClick={() => toggleSetting("telegram")}
              className={`w-10 h-6 flex items-center rounded-full p-1 ${
                settings.telegram ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full transform ${
                  settings.telegram ? "translate-x-4" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Purchase Notifications */}
          <div className="flex flex-row-reverse justify-start items-center gap-4">
            <span>Receive notifications about purchases</span>
            <button
              onClick={() => toggleSetting("purchases")}
              className={`w-10 h-6 flex items-center rounded-full p-1 ${
                settings.purchases ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full transform ${
                  settings.purchases ? "translate-x-4" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Auction Bids Notifications */}
          <div className="flex flex-row-reverse justify-start items-center gap-4">
            <span>Receive notifications about new auction bids</span>
            <button
              onClick={() => toggleSetting("auctionBids")}
              className={`w-10 h-6 flex items-center rounded-full p-1 ${
                settings.auctionBids ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full transform ${
                  settings.auctionBids ? "translate-x-4" : ""
                }`}
              ></div>
            </button>
          </div>

          {/* Auction Ends Notifications */}
          <div className="flex flex-row-reverse justify-start items-center gap-4">
            <span>Receive notifications when an auction ends</span>
            <button
              onClick={() => toggleSetting("auctionEnds")}
              className={`w-10 h-6 flex items-center rounded-full p-1 ${
                settings.auctionEnds ? "bg-yellow-500" : "bg-gray-500"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full transform ${
                  settings.auctionEnds ? "translate-x-4" : ""
                }`}
              ></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notification;
