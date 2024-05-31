import Selectors from "./_components/Selectors";
import SignOutButton from "./_components/SignOutButton";
import Timetable from "./_components/Timetable";

export default async function ReservationPage() {
  return (
    <>
      <div className="bg-black min-h-screen w-screen text-xl pt-28">
        <div className="flex justify-center items-center">
          <div className="bg-white shadow-md w-full max-w-2xl flex justify-center h-14 items-center fixed top-8 z-50 gap-x-10 rounded-full px-4 lg:px-8">
            <div className="text-xl lg:text-2xl font-medium">
              0.3 練團室後台管理系統
            </div>
            <SignOutButton />
          </div>
        </div>
        <div>
          <Selectors />
        </div>
        <div className="py-10 px-16 w-full flex items-center justify-center">
          <p className="text-xs lg:text-lg w-2/3 bg-white rounded-full text-white bg-opacity-20 text-center px-2 py-1">
            ⬇️ 請點擊下方時間表選擇預約時段 ⬇️
          </p>
        </div>
        <div className="lg:w-3/4 w-full flex gap-4 px-8 lg:px-32 py-2 mx-auto h-20">
          <div className="w-1/6 flex items-center justify-center rounded-md text-[#FFE900] font-semibold text-center lg:text-2xl sm:text-base">
            練團室 108
          </div>
          <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
            2024/5/22
          </div>
          <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
            2024/5/23
          </div>
          <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
            2024/5/24
          </div>
          <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
            2024/5/25
          </div>
          <div className="flex justify-center items-center w-1/6 rounded-md bg-black text-white text-center lg:text-lg text-sm break-all">
            2024/5/26
          </div>
        </div>
        <Timetable />
      </div>
    </>
  );
}
