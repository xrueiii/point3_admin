"use client"

import { useState } from "react";
import ReservationDialog from "./ReservationDialog";

export default function ReservationButton() {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <>
            <button className="bg-orange-500 px-8 py-2 rounded-md hover:bg-gray-300 text-white lg:text-lg text-sm" onClick={() => setDialogOpen(true)}>確認預約</button>
            <ReservationDialog open={dialogOpen} onClose={() => setDialogOpen(false)} date="2024/5/22" room="練團室 108" time="12:00 ~ 13:00"/>
        </>
    );
} 