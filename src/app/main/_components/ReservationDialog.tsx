"use client";

import useReservation from "@/hooks/useReservation";
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
  roomId: string;
  span: string;
  name: string;
  phone: string;
  email: string;
  setValue: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function ReservationDialog({
  open,
  onClose,
  date,
  room,
  roomId,
  span,
  time,
  name,
  phone,
  email,
  setValue,
}: ReservationDialogprops) {
  const { deleteReservation } = useReservation();
  const handleDelete = async() => {
    await deleteReservation(roomId, date, span, email, room, name);
    alert("預約紀錄成功刪除!請重新送出查詢！");
    onClose();
    setValue(false);
  }

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
            <button
              className="w-full px-12 py-4 rounded-md font-medium text-white bg-red-800 hover:bg-gray-500"
              onClick={handleDelete}
            >
              刪除
            </button>
          </div>
        </div>
      </DialogActions>
    </Dialog>
  );
}
