"use client"
import { useState } from "react";
import ReservationButton from "./ReservationButton";

export default function Selectors() {
    const [drumroom, setDrumroom] = useState("");
    return (
        <div className="lg:flex space-y-4 px-8 lg:px-32 mt-4 py-8 justify-between w-full">
            <div className="flex gap-12 justify-between">
                <select onChange={e => setDrumroom(e.target.value)} className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white lg:text-lg text-sm">
                    <option value={0}>請選擇欲預約的練團室</option>
                    <option value={1}>鼓房 108</option>
                    <option value={2}>鼓房 111</option>
                    <option value={3}>鼓房 115</option>
                </select>
                
                <input className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white lg:text-lg text-sm" type="date"/>
            </div>
            <div className="flex justify-between w-full lg:ml-12">
                <button className="bg-column2 px-8 py-2 rounded-md hover:bg-gray-500 text-white lg:text-lg text-sm">送出查詢</button>
                <ReservationButton/>
            </div>
        </div>
    );
}