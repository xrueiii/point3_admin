"use client";

import EmailIcon from "@mui/icons-material/Email";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import { useRef } from "react";

type ReservationDialogprops = {
  open: boolean;
  onClose: () => void;
  date: string;
  time: string;
  room: string;
};
export default function ReservationDialog({
  open,
  onClose,
  date,
  room,
  time,
}: ReservationDialogprops) {
  const NameRef = useRef<HTMLInputElement>(null);
  const PhoneRef = useRef<HTMLInputElement>(null);
  const EmailRef = useRef<HTMLInputElement>(null);
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-center text-xl mt-4 font-semibold">
        預約確認
      </DialogTitle>
      <DialogContent>
        <div className="flex-col space-y-8 px-16 py-4 font-normal">
          <p className="text-xl">預約練團室： {room}</p>
          <p className="text-xl">預約日期： {date}</p>
          <p className="text-xl">預約時段：{time}</p>
          <div className="w-full flex border-black border-2 text-black rounded-md items-center px-2">
            <PersonIcon />
            <input
              type="text"
              className="w-full rounded-md text-xl p-2 text-black placeholder-gray-500"
              placeholder="預約人姓名"
              ref={NameRef}
            />
          </div>
          <div className="w-full flex px-2 border-black border-2 text-black placeholder-gray-30 rounded-md items-center">
            <PhoneIcon />
            <input
              type="text"
              className="w-full rounded-md overflow-scroll text-xl p-2 text-black placeholder-gray-500"
              placeholder="預約人電話"
              ref={PhoneRef}
            />
          </div>
          <div className="w-full flex px-2 border-black border-2 text-black placeholder-gray-30 rounded-md items-center">
            <EmailIcon />
            <input
              type="text"
              className="w-full rounded-md overflow-scroll text-xl p-2 text-black placeholder-gray-500"
              placeholder="預約人Email"
              ref={EmailRef}
            />
          </div>
        </div>
      </DialogContent>
      <DialogActions>
        <div className="w-full h-full flex justify-center">
          <div className="flex gap-4 py-12">
            <button
              className="w-full px-12 py-4 rounded-md font-medium text-white bg-gray-300 hover:bg-gray-500"
              onClick={onClose}
            >
              取消
            </button>
            <button className="w-full py-4 px-12 rounded-md font-medium text-black bg-[#FFE900] hover:bg-yellow-400">
              確認
            </button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}
