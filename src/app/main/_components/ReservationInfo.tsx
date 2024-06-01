"use client";

import { useState } from "react";
import ReservationDialog from "./ReservationDialog";
import { useRouter } from "next/navigation";
type ReservationProps = {
  name: string;
  phone: string;
  email: string;
  date: string;
  room: string;
  roomId: string;
  span: string;
  refresh: () => void;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ReservationInfo({ name, phone, email, date, room, span, roomId, setValue}: ReservationProps) {
  const [dialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();

  return (
    <div className="w-full h-[25%]">
      <button
        onClick={() => setDialogOpen(true)}
        className="lg:text-base text-sm h-full items-center rounded-md w-full text-black text-left p-2 bg-[#FFE900] border-[#FFE900] border-2"
      >
        <p>姓名：</p>
        <p>{name}</p>
        <p>電話：</p>
        <p>{phone}</p>
      </button>
      <ReservationDialog
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        date={date}
        room={room}
        roomId={roomId}
        time={`${span + 10}:00~${span + 11}:00`}
        span={span}
        name={name}
        phone={phone}
        email={email}
        setValue={setValue}
      />
    </div>
  );
}
