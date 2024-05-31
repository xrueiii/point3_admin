"use client";

import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";

export default function AvailableButton() {
  const [chosen, setChosen] = useState<boolean>(false);

  return (
    <>
      {chosen ? (
        <div className="relative w-full h-[10%]">
          <button
            className="lg:text-lg text-sm h-full flex justify-center items-center rounded-md w-full text-black text-center bg-[#FFE900] border-[#FFE900] border-2 hover:before:content-['取消'] hover:after:content-[''] after:content-['已選擇'] hover:border-red-500 hover:bg-transparent hover:text-red-500"
            onClick={() => setChosen(false)}
          ></button>
          <button className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-300 rounded-full p-1 hover:bg-red-500 w-6 h-6 flex items-center justify-center">
            <ClearIcon />
          </button>
        </div>
      ) : (
        <div className="relative w-full h-[10%]">
          <button
            className="lg:text-lg text-sm h-full flex justify-center items-center rounded-md w-full text-center text-[#FFE900] border-[#FFE900] border-2 hover:before:content-['可預約'] hover:after:content-[''] after:content-['可預約'] hover:bg-[#FFE900] hover:bg-opacity-20"
            onClick={() => setChosen(true)}
          ></button>
          <button className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-300 rounded-full p-1 hover:bg-red-500 w-6 h-6 flex items-center justify-center">
            <ClearIcon />
          </button>
        </div>
      )}
    </>
  );
}
