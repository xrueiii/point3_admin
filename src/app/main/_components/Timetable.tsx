import AvailableButton from "./AvailableButton";

export default function Timetable() {
    return (
        <div className="lg:w-3/4 w-full flex gap-4 px-8 lg:px-32 py-8 mx-auto h-full overflow-scroll">
            <div className="grid-cols-12 w-1/6 space-y-4 col lg:text-lg text-sm items-center">
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">10:00 ~ 11:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">11:00 ~ 12:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">12:00 ~ 13:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">13:00 ~ 14:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">14:00 ~ 15:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">15:00 ~ 16:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">16:00 ~ 17:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">17:00 ~ 18:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">18:00 ~ 19:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">19:00 ~ 20:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">20:00 ~ 21:00</div>
                <div className="h-[15%] flex justify-center rounded-md w-full text-white text-center border-white border-2 items-center">21:00 ~ 22:00</div>
            </div>
            <div className="flex-cols w-1/6 space-y-4">
                <AvailableButton/>
            </div>
            <div className="flex-cols gap-2 w-1/6">
            </div>
            <div className="flex-cols gap-2 w-1/6">
            </div>
            <div className="flex-cols gap-2 w-1/6">
            </div>
            <div className="flex-cols gap-2 w-1/6">
            </div>
        </div>     
    );
}