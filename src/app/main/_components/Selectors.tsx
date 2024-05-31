"use client";

import { useState } from "react";
import ReservationButton from "./ReservationButton";

export default function Selectors() {
  const [drumroom, setDrumroom] = useState("");

  return (
    <div className="flex justify-center items-center">
      <div className="lg:flex flex-col lg:space-y-0 space-y-4 px-4 lg:px-8 py-4 mt-4 justify-between w-3/5">
        <div className="flex flex-col lg:flex-row gap-6 items-center w-full">
          <select
            onChange={(e) => setDrumroom(e.target.value)}
            className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white lg:text-lg text-sm focus:outline-none focus:border-[#FFE900] transition-all duration-300 flex-1 mb-4 lg:mb-0"
          >
            <option value="">請選擇欲預約的練團室</option>
            <option value="108">鼓房 108</option>
            <option value="111">鼓房 111</option>
            <option value="115">鼓房 115</option>
          </select>

          <input
            className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white lg:text-lg text-sm focus:outline-none focus:border-[#FFE900] transition-all duration-300 flex-1 mb-4 lg:mb-0"
            type="date"
          />

          <button className="bg-white px-8 py-3 rounded-md font-medium hover:bg-gray-300 text-black lg:text-lg text-sm focus:outline-none transition-all duration-300">
            送出查詢
          </button>
          <ReservationButton />
        </div>
      </div>
    </div>
  );
}
