"use client";

import { useState } from "react";
import ReservationDialog from "./ReservationDialog";

export default function ReservationButton() {
  const [dialogOpen, setDialogOpen] = useState(false);
  return (
    <>
      <button
        className="border-[#FFE900] hover:bg-[#FFE900] hover:bg-opacity-20 border-2 px-8 py-3 rounded-md text-[#FFE900] lg:text-lg text-sm focus:outline-none transition-all duration-300"
        onClick={() => setDialogOpen(true)}
      >
        確認預約
      </button>
      <ReservationDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        date="2024/5/22"
        room="練團室 108"
        time="12:00 ~ 13:00"
      />
    </>
  );
}
