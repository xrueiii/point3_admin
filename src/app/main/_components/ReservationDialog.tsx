"use client"

import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import { useRef } from "react";

type ReservationDialogprops = {
    open:boolean;
    onClose: () => void;
    date: string;
    time: string;
    room: string;
}
export default function ReservationDialog( { open, onClose, date, room, time }: ReservationDialogprops) {
    const NameRef = useRef<HTMLInputElement>(null);
    const PhoneRef = useRef<HTMLInputElement>(null);
    const EmailRef = useRef<HTMLInputElement>(null);
    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle className="text-center text-xl">
                預約確認
            </DialogTitle>
            <DialogContent>
                <div className="flex-col space-y-10 px-16 py-8">
                    <p className="text-xl">預約練團室： {room}</p>
                    <p className="text-xl">預約日期： {date}</p>
                    <p className="text-xl">預約時段：{time}</p>
                    <div className="w-full flex bg-column1 text-amber-100 px-2 rounded-md items-center">
                        <PersonIcon/>
                        <input type="text" className="w-full rounded-md bg-column1 text-xl p-2 text-amber-100 placeholder-amber-100" placeholder="請輸入預約人姓名" ref={NameRef}/>
                    </div>
                    <div className="w-full flex bg-column1 text-amber-100 px-2 rounded-md items-center">
                        <PhoneIcon/>
                        <input type="text" className="w-full rounded-md bg-column1 overflow-scroll text-xl p-2 text-amber-100 placeholder-amber-100" placeholder="請輸入預約人電話" ref={PhoneRef}/>
                    </div>
                    <div className="w-full flex bg-column1 text-amber-100 px-2 rounded-md items-center">
                        <EmailIcon/>
                        <input type="text" className="w-full rounded-md bg-column1 overflow-scroll text-xl p-2 text-amber-100 placeholder-amber-100" placeholder="請輸入預約人Email" ref={EmailRef}/>
                    </div>        
                </div>
            </DialogContent>
            <DialogActions>
                <div className="flex justify-end gap-4 px-16 py-4">
                    <button className="w-full px-8 py-2 rounded-md text-white bg-column2 hover:bg-gray-500" onClick={onClose}>
                        取消
                    </button>
                    <button className="w-full py-2 px-8 rounded-md text-white bg-column1 hover:bg-gray-500">
                        確認
                    </button>
                </div>
            </DialogActions>
        </Dialog>

    );
}