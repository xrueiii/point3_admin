import Image from "next/image";
import Selectors from "./_components/Selectors";
import Timetable from "./_components/Timetable";
import SignOutButton from "./_components/SignOutButton";

export default async function ReservationPage() {
  return (
    <>
      <div className="bg-black min-h-screen w-screen text-xl">
        <div className="w-full py-8 bg-amber-100 flex px-16 justify-between">
          <h1 className="font-serif text-2xl lg:text-5xl font-medium">0.3 練團室後台管理系統</h1>
          <SignOutButton/>
        </div>
        <Selectors/>
        <div className="py-10 px-16 w-full">
          <p className="text-amber-100 bg-column1 text-center px-2 py-1 lg:text-lg text-xs">請點擊下方時間表選擇預約時段</p>

        </div>
        <div className="lg:w-3/4 w-full flex gap-4 px-8 lg:px-32 py-2 mx-auto h-20">
                <div className="w-1/6 flex justify-center rounded-md text-yellow-500 text-center font-semibold lg:text-2xl sm:text-base items-center">練團室 108</div>
                <div className="flex justify-center rounded-md bg-column2 w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/22</div>
                <div className="flex justify-center rounded-md  bg-column1 w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/23</div>
                <div className="flex justify-center rounded-md bg-column1  w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/24</div>
                <div className="flex justify-center rounded-md bg-column1  w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/25</div>
                <div className="flex justify-center rounded-md bg-column1  w-1/6 text-white text-center items-center lg:text-lg text-sm break-all">2024/5/26</div>
        </div>     
        <Timetable/>    
      </div>
    </>
  )
}
