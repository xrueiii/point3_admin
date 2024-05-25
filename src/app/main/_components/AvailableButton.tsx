"use client"

import { useState } from "react"

export default function AvailableButton() {
    const [chosen, setChosen] = useState<boolean>(false);

    return (
        <>
        {chosen ? (
            <button className="lg:text-lg text-sm h-[15%] flex justify-center items-center rounded-md w-full text-white text-center bg-red-800 hover:before:content-['取消'] hover:after:content-[''] after:content-['已選擇'] hover:bg-red-500" onClick={() => setChosen(false)}></button>
            ) : (<button className="lg:text-lg text-sm h-[15%] flex justify-center items-center rounded-md w-full text-center bg-amber-100 hover:before:content-['選擇'] hover:after:content-[''] after:content-['可預約'] hover:bg-amber-200" onClick={() => setChosen(true)}></button>)}
        </>   
    );
}