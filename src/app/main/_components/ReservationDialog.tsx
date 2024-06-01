"use client";

import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";

type ReservationDialogprops = {
  open: boolean;
  onClose: () => void;
  date: string;
  time: string;
  room: string;
  name: string;
  phone: string;
  email: string;
};
export default function ReservationDialog({
  open,
  onClose,
  date,
  room,
  time,
  name,
  phone,
  email,
}: ReservationDialogprops) {

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle className="text-center text-xl mt-4 font-semibold">
        預約資訊
      </DialogTitle>
      <DialogContent>
        <div className="flex-col space-y-8 px-16 py-4 font-normal">
          <p className="text-xl">預約練團室： {room}</p>
          <p className="text-xl">預約日期： {date}</p>
          <p className="text-xl">預約時段：{time}</p>
          <p className="text-xl">預約人姓名： {name}</p>
          <p className="text-xl">預約人電話： {phone}</p>
          <p className="text-xl">預約人信箱：{email}</p>
          
        </div>
      </DialogContent>
      <DialogActions>
        <div className="w-full h-full flex justify-center">
          <div className="flex gap-4 py-12">
            <button
              className="w-full px-12 py-4 rounded-md font-medium text-white bg-gray-300 hover:bg-gray-500"
              onClick={onClose}
            >
              返回
            </button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}
