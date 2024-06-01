"use client";

import ClearIcon from "@mui/icons-material/Clear";
import ReservationDialog from "./ReservationDialog";
import { useState } from "react";
import { useRouter } from "next/navigation";
type ReservationProps = {
  name: string;
  phone: string;
  email: string;
  date: string;
  room: string;
  span: string;
  refresh: () => void;
}

export default function ReservationInfo({ name, phone, email, date, room, span, refresh}: ReservationProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  return (
      <div className="w-full h-[25%]">
        <button
          onClick={() => setDialogOpen(true)}
          className="lg:text-lg text-sm h-full items-center rounded-md w-full text-black text-left p-2 bg-[#FFE900] border-[#FFE900] border-2"
        >
          <p>姓名：</p>
          <p>{name}</p>
          <p>電話：</p>
          <p>{phone}</p>
          <p>信箱：</p>
          <p className="break-all">{email}</p>
        </button>
        <ReservationDialog onClose={() => {refresh(); setDialogOpen(false);}} open={dialogOpen} date={date} room={room} time={`${span+10}:00~${span+11}:00`} name={name} phone={phone} email={email}/>
        
        {/* <button className="absolute top-0 right-0 -mt-2 -mr-2 bg-red-300 rounded-full p-1 hover:bg-red-500 w-6 h-6 flex items-center justify-center">
          <ClearIcon />
        </button> */}
      </div>
  );
}
