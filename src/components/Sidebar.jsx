import { FaCalendarCheck } from "react-icons/fa";
import { LuLayoutDashboard } from "react-icons/lu";
import { BsCalendar3Event } from "react-icons/bs";
import { MdAppRegistration } from "react-icons/md";
import { IoPersonSharp } from "react-icons/io5";
import { GiPublicSpeaker } from "react-icons/gi";
import { MdCategory } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { GrAnnounce } from "react-icons/gr";
import { IoIosStats } from "react-icons/io";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";

import businessImg from "../assets/business.png";
import manImg from "../assets/man.png";

function Sidebar({ isOpen, setIsOpen }) {
  return (
    <div>
      <div
        className={`
        fixed lg:static
        top-0 left-0 z-50
        w-[200px] h-screen
        bg-slate-900 text-white p-5
        flex flex-col
        transform transition-transform duration-300
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0
      `}
      >
        {/* <div className="flex justify-end p-4 lg:hidden">
        <button
          onClick={() => setIsOpen(false)}
          className="text-3xl text-gray-600 hover:text-red-500"
        >
          <IoClose />
        </button>
      </div> */}
        {/* Sidebar Content */}

        <div className="flex items-center justify-between gap-2 ">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <img className="w-7 h-8 flex-shrink-0" src={businessImg} alt="" />
          </div>
          <div className="flex flex-col min-w-0">
            <h1 className="text-sm md:text-base font-bold truncate">College Event</h1>
            <p className="text-[11px] md:text-xs text-gray-400 truncate">Management System</p>
          </div>
          <div className="flex justify-end p-2 lg:hidden">
            <button
              onClick={() => setIsOpen(false)}
              className="lg:hidden flex-shrink-0 text-xl text-gray-600 hover:text-red-500"
            >
              <IoClose />
            </button>
          </div>
        </div>

        <ul className="mt-15 space-y-2 text-[12px]">
          {/* <li className="flex items-center gap-2">
          <LuLayoutDashboard />
          Dashboard
        </li> */}
          <NavLink to="/" className="flex items-center gap-2">
            <LuLayoutDashboard />
            Dashboard
          </NavLink>
          <NavLink to="/events" className="flex items-center gap-2">
            <BsCalendar3Event />
            Events
          </NavLink>
          <li className="flex items-center gap-2">
            <MdAppRegistration />
            Registration
          </li>
          <li className="flex items-center gap-2">
            <IoPersonSharp />
            Attendees
          </li>
          <li className="flex items-center gap-2">
            <GiPublicSpeaker />
            Speakers
          </li>
          <li className="flex items-center gap-2">
            <MdCategory />
            Categories
          </li>
          <li className="flex items-center gap-2">
            <CiLocationOn />
            Venues
          </li>
          <li className="flex items-center gap-2">
            <GrAnnounce />
            Announcements
          </li>
          <li className="flex items-center gap-2">
            <IoIosStats />
            Reports
          </li>
          <li className="flex items-center gap-2">
            <IoSettingsOutline />
            Settings
          </li>
        </ul>

        <div className="mt-auto p-1 flex items-center justify-between rounded-lg border-[1.2px] border-slate-100">
          <img className="w-6 h-6 " src={manImg} alt="" />
          <div className="flex flex-col justify-center">
            <h3 className="text-[14px]">SHEKHAR</h3>
            <h5 className="text-[12px]">Admin</h5>
          </div>
          <div className="ml">
            <IoIosArrowDown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
