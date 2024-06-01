"use client";

import { useState } from "react";
import Timetable from "./Timetable";
import useReservation from "@/hooks/useReservation";
import { roomType } from "@/lib/types";
// import ReservationButton from "./ReservationButton";
type selectorProps = {
  rooms: {
    roomName: string;
    roomId: string;
}[]
}

export default function Selectors({ rooms }: selectorProps) {
  const [room, setRoom] = useState<string>("");
  const [date, setDate] = useState<string>();
  const [timetableDate, setTimeTableDate] = useState<string[]>();
  const [reserveTable, setReserveTable] = useState<roomType[][]>([]);
  const [reservation, setReservation] = useState<string[]>([]);
  const [isSend, setIsSend] = useState(false);
  
  const {getReservedRooms} = useReservation()

  const handleFindReserved = async(e: React.MouseEvent<HTMLButtonElement>) =>{
    e.preventDefault()
    if (!room) {
      alert("請先選擇練團室！")
      return;
    }

    if (!date) {
      alert("請先選擇日期！")
      return;
    }

    const dateSeries:string[] = [];
    const reserved:roomType[][] = new Array(5);

  
    for (let i = 0; i < 5; i++){
      reserved[i] = new Array(12).fill({displayName: ""});
      const chosenDate = new Date(date);
      var nextDate = new Date(chosenDate);
      nextDate.setDate(chosenDate.getDate() + i);
      const nextDateStr = nextDate.toISOString().substring(0,10);
      dateSeries.push(nextDateStr);

      const reservedRooms:roomType[] = await getReservedRooms(room.split(",")[0], nextDateStr);
      for (let j = 0; j < reservedRooms.length; j++) {
        reserved[i][parseInt(reservedRooms[j].span)] = reservedRooms[j];
      }
    }

    
    setReservation([]);
    setReserveTable(reserved);
    setTimeTableDate(dateSeries);
  }

  return (
    <div>
      <div className="flex justify-center items-center">
        <div className="lg:flex flex-col lg:space-y-0 space-y-4 px-4 lg:px-8 py-4 mt-4 justify-between w-3/5">
          <div className="flex flex-col lg:flex-row gap-6 items-center w-full">
            <select
              onChange={(e) => setRoom(e.target.value)}
              className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white lg:text-lg text-sm focus:outline-none focus:border-[#FFE900] transition-all duration-300 flex-1 mb-4 lg:mb-0"
            >
              <option value={room}>請選擇欲查看的練團室</option>
              {rooms.map((room) => [
                <option value={room.roomId + ',' +room.roomName} key={room.roomId}>{room.roomName}</option>
              ])}
            </select>

            <input
              className="bg-transparent text-white rounded-lg px-4 py-2 border-2 border-white lg:text-lg text-sm focus:outline-none focus:border-[#FFE900] transition-all duration-300 flex-1 mb-4 lg:mb-0"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />

            <button 
              className="bg-white px-8 py-3 rounded-md font-medium hover:bg-gray-300 text-black lg:text-lg text-sm focus:outline-none transition-all duration-300"
              onClick={(e) => handleFindReserved(e)}
            >
              送出查詢
            </button>
            {/* <ReservationButton /> */}
          </div>
        </div>
      </div>
      {timetableDate && room && <>
        <Timetable date={timetableDate} room={room} reserveTable={reserveTable} setValue={setReservation} value={reservation}/>
      </>}
    </div>
  );
}
