import React from "react";
// import womanImg1 from "../assets/woman_4140038.png";
// // import manImg1 from "../assets/man_4140037.png";
// import womanImg2 from "../assets/woman_4140038.png";

// const registrations = [
//   {
//     id: 1,
//     studentName: "Rahul Kumar",
//     eventName: "TechnoVision 2025",
//     regDate: "20 May, 2025",
//     email: "rahul12@gmail.com",
//     branch: "CSE",
//     status: "Confirmed",
//     img: womanImg1,
//   },

//   {
//     id: 2,
//     studentName: "Anjali Singh",
//     eventName: "Hackathon 2025",
//     regDate: "22 May, 2025",
//     email: "anjali212@gmail.com",
//     branch: "ECE",
//     status: "Pending",
//     img: womanImg2,
//   },

//   // {
//   //   id: 3,
//   //   studentName: "Aman Verma",
//   //   eventName: "Cultural Night",
//   //   regDate: "23 May, 2025",
//   //   email: "aman112@gmail.com",
//   //   branch: "ME",
//   //   status: "Confirmed",
//   //   img: manImg1,
//   // },
// ];

import { registrations } from "../data/registration";

const Recent_regis = () => {
  return (
    <div className="bg-white w-full flex flex-col justify-around rounded-lg shadow">
      <div className="flex flex-row p-2 justify-between items-center ">
        <h2 className="text-[14px] font-bold ">Recent Registration</h2>
        <h3 className="text-[12px] font-medium text-violet-600 hover:text-violet-700">
          View All Registration
        </h3>
      </div>

      <div className="hidden md:grid bg-gray-100 p-2 grid-cols-[1.5fr_1.5fr_1fr_2fr_1fr] items-center text-[12px] text-gray-600 font-semibold">
        <h3>Name</h3>
        <h3>Event</h3>
        <h3>Date</h3>
        <h3>Email</h3>
        <h3>Status</h3>
      </div>

      {/* <div  className="grid grid-cols-[1fr_1fr_1fr_2fr_1fr] p-2 items-center text-[12px]">

        <div>
            <img src={womanImg1} alt="" />
            <h2>Sarah Wilson</h2>
        </div>

        <div>
            <h2>TechnoVision 2025</h2>
        </div>

        <div>
            <h2>20 May, 2025</h2>
        </div>

        <div>
            <h2>sarah14@gmail.com</h2>
        </div>

        <div>
            <span>Confirmed</span>
        </div>
      </div> */}

      {registrations.map((registration) => (
        <div
          key={registration.id}
          
        >
          <div className="hidden md:grid p-2.5 grid-cols-[1.5fr_1.5fr_1fr_2fr_1fr] items-center text-[12px] ">
            <div className="flex gap-1 items-center">
              <img
                className="h-6 w-6 rounded-sm"
                src={registration.img}
                alt=""
              />
              <div className="flex flex-col ">
                <h2 className="text-[12px] font-semibold ">
                  {registration.studentName}
                </h2>
                <p className="text-[10px] text-gray-600">
                  {registration.branch}
                </p>
              </div>
            </div>

            <div>
              <h2>{registration.eventName}</h2>
            </div>

            <div>
              <h2>{registration.regDate}</h2>
            </div>

            <div className="truncate">
              <h2>{registration.email}</h2>
            </div>

            <div>
              <span className="bg-violet-100 text-violet-600 px-3 py-1 rounded-full">
                {registration.status}
              </span>
            </div>
          </div>

          {/* mobile */}

          <div className="md:hidden p-3 border-t">
            <div className="flex items-center gap-3">
              <img
                className="h-10 w-10 rounded-full"
                src={registration.img}
                alt=""
              />

              <div>
                <h2 className="font-semibold text-sm">
                  {registration.studentName}
                </h2>

                <p className="text-xs text-gray-500">{registration.branch}</p>
              </div>
            </div>

            <div className="mt-2 text-xs space-y-1">
              <p>
                <strong>Event:</strong> {registration.eventName}
              </p>

              <p>
                <strong>Date:</strong> {registration.regDate}
              </p>

              <p className="break-all">
                <strong>Email:</strong> {registration.email}
              </p>

              <span className="inline-block mt-1 bg-violet-100 text-violet-600 px-3 py-1 rounded-full">
                {registration.status}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recent_regis;
