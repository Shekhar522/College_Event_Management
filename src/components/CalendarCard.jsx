import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarCard() {
  const [date, setDate] = useState(new Date());

  return (
    <div className="bg-white rounded-lg shadow p-2 ">
      <h2 className="text-sm font-bold mb-3">Event Calendar</h2>

      <div className="">
        <Calendar onChange={setDate} value={date} />
      </div>

      <div >
        <ul className="flex flex-row justify-between pl-2 pt-1">
            <li className="text-[10px] text-orange-600 flex flex-row items-center gap-1">
                <h2 className="bg-orange-600 rounded-full h-1 w-1"></h2>
                Upcoming Events
            </li>
            <li className="text-[10px] text-green-600 flex flex-row items-center gap-1">
                <h2 className="bg-green-600 rounded-full h-1 w-1"></h2>
                Today
            </li>
            <li className="text-[10px] text-violet-600 flex flex-row items-center gap-1">
                <h2 className="bg-violet-600 rounded-full h-1 w-1"></h2>
                Others
            </li>
        </ul>
      </div>
    </div>
  );
}

export default CalendarCard;
