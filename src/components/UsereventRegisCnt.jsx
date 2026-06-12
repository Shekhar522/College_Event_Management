import React from "react";

import {
  HiOutlineTicket,
  HiCheckCircle,
  HiOutlineClock,
  HiOutlineXCircle,
} from "react-icons/hi";

const UsereventRegisCnt = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-1 mt-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Registrations */}
        <div className="flex items-center gap-4 py-1 px-2 rounded-2xl bg-violet-50 hover:shadow-md transition">
          <div className="h-6 w-6 rounded-full bg-violet-100 flex items-center justify-center">
            <HiOutlineTicket className="text-xl text-violet-600" />
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-800">4</h2>
            <p className="text-xs text-gray-500">Total Registrations</p>
          </div>
        </div>

        {/* Confirmed */}
        <div className="flex items-center gap-4 py-1 px-2 rounded-2xl bg-green-50 hover:shadow-md transition">
          <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
            <HiCheckCircle className="text-xl text-green-600" />
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-800">3</h2>
            <p className="text-xs text-gray-500">Confirmed</p>
          </div>
        </div>

        {/* Upcoming */}
        <div className="flex items-center gap-4 py-1 px-2 rounded-2xl bg-yellow-50 hover:shadow-md transition">
          <div className="h-6 w-6 rounded-full bg-yellow-100 flex items-center justify-center">
            <HiOutlineClock className="text-xl text-yellow-600" />
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-800">1</h2>
            <p className="text-xs text-gray-500">Upcoming</p>
          </div>
        </div>

        {/* Cancelled */}
        <div className="flex items-center gap-4 py-1 px-2 rounded-2xl bg-red-50 hover:shadow-md transition">
          <div className="h-6 w-6 rounded-full bg-red-100 flex items-center justify-center">
            <HiOutlineXCircle className="text-xl text-red-600" />
          </div>

          <div className="flex items-center gap-2">
            <h2 className="text-xl font-bold text-gray-800">0</h2>
            <p className="text-xs text-gray-500">Cancelled</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsereventRegisCnt;
