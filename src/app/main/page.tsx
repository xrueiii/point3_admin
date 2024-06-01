import { db } from "@/db";
import Selectors from "./_components/Selectors";
import SignOutButton from "./_components/SignOutButton";
import Timetable from "./_components/Timetable";
import { RoomInfoTable } from "@/db/schema";

export default async function ReservationPage() {
  const rooms = await db.select({roomName: RoomInfoTable.roomName, roomId: RoomInfoTable.roomId}).from(RoomInfoTable).execute();
  return (
    <>
      <div className="bg-black min-h-screen w-screen text-xl pt-28">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-md w-full max-w-3xl flex justify-center h-14 items-center fixed top-8 z-50 gap-x-10 rounded-full px-4 lg:px-8">
            <div className="text-xl lg:text-2xl font-medium">
              0.3 練團室後台管理系統
            </div>
            <SignOutButton />
          </div>
        </div>
        <div>
          <Selectors rooms={rooms}/>
        </div>
      </div>
    </>
  );
}
