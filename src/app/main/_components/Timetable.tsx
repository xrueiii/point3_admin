"use client";

import { useState } from "react";
import { roomType } from "@/lib/types";
import ReservationInfo from "./ReservationInfo";
import { IconButton } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import EditDialog from "./EditDialog";
import { useRouter } from "next/navigation";

type timeTableProps = {
  date: string[];
  room: string;
  reserveTable: roomType[][];
  roomContent: string;
}

export default function Timetable({ date, room, reserveTable, roomContent }: timeTableProps) {
  const roomInfo = room.split(",");
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();
  
  
  return (
    <>
    <div className="lg:w-3/4 w-full text-white gap-4 mx-auto px-8 lg:px-32 py-8 flex-col flex my-8">
      <div className="flex justify-between">
        <p className="text-2xl">練團室資訊：</p>
        <button className="text-white flex gap-2 border rounded-md p-2 hover:bg-white hover:text-black" onClick={() => setDialogOpen(true)}>
          <EditIcon></EditIcon>
          <p>編輯</p>
        </button>
      </div>
      <EditDialog open={dialogOpen} onClose={() => setDialogOpen(false)} roomName={roomInfo[1]} roomId={roomInfo[0]} roomContent={roomContent}/>
      <p className="ml-4">練團室名稱：{roomInfo[1]}</p>
      <p className="ml-4">練團室內容：{roomContent}</p>
    </div>
    <div className="lg:w-3/4 w-full flex gap-4 px-8 lg:px-32 py-2 mx-auto h-20">
        <div className="w-1/6 flex items-center justify-center rounded-md text-[#FFE900] font-semibold text-center lg:text-2xl sm:text-base">
          {roomInfo[1]}
        </div>
        {date.map((d) =>
          <div key={d} className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
            {d}
          </div>
        )}
        
        
      </div>
    <div className="lg:w-3/4 w-full flex gap-4 px-8 lg:px-32 py-4 mx-auto h-full overflow-scroll">
      <div className="grid-cols-12 w-1/6 space-y-4 col lg:text-lg text-sm items-center">
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          10:00 ~ 11:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          11:00 ~ 12:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          12:00 ~ 13:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          13:00 ~ 14:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          14:00 ~ 15:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          15:00 ~ 16:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          16:00 ~ 17:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          17:00 ~ 18:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          18:00 ~ 19:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          19:00 ~ 20:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          20:00 ~ 21:00
        </div>
        <div className="h-[25%] flex justify-center rounded-md w-full text-white text-center border-[#333] border-2 items-center bg-[#333]">
          21:00 ~ 22:00
        </div>
      </div>

      {reserveTable.map((d, dateIndex) => 
          <div className="flex-cols w-1/6 space-y-4">
            {d.map((r, roomIndex) => (
                r.displayName !== ""  ? <ReservationInfo name={r.displayName} phone={r.phone} email={r.email} date={r.date} span={r.span} room={roomInfo[1]} refresh={() => router.refresh()}/>:<div className="h-[25%] flex justify-center items-center rounded-md w-full bg-[#333] text-white">暫無預約</div>
            ))}
        </div>)}
    </div>
    </>
  );
}
