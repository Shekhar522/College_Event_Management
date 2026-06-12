// src/data/stats.js

import { FaCalendarCheck } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import { IoStatsChartSharp } from "react-icons/io5";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaArrowUpLong } from "react-icons/fa6";



export const stats = [
  {
    id: 1,
    bgcolor: "bg-blue-100",
    iconcolor: "text-blue-600",
    icon: "calendar",
    title: "Total Events",
    number: "24",
    arwcolor: "text-green-600",
    arrow: "uparrow",
    percent: "12%",
    para: "from last month",
  },
  {
    id: 2,
    bgcolor: "bg-green-100",
    iconcolor: "text-green-600",
    icon: "people",
    title: "Total Registrations",
    number: "1256",
    arwcolor: "text-green-600",
    arrow: "uparrow",
    percent: "18%",
    para: "from last month",
  },
  {
    id: 3,
    bgcolor: "bg-yellow-100",
    iconcolor: "text-yellow-600",
    icon: "stats",
    title: "Today's Events",
    number: "2",
    percent: "",
    para: "View today's schedule",
  },
  {
    id: 4,
    bgcolor: "bg-purple-100",
    iconcolor: "text-purple-600",
    icon: "peoplegrp",
    title: "Total Attendees",
    number: "924",
    arwcolor: "text-green-600",
    arrow: "uparrow",
    percent: "15%",
    para: "from last month",
  },
];