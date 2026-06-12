import React from "react";
// import { events } from "../data/event";
import { useState } from "react";
const RegisterModal = ({ event, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    rollNo: "",
    branch: "",
    year: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
  e.preventDefault();

  onSubmit({
    ...formData,
    // ..events,
    eventId: event.id,
    eventTitle: event.title,

    registrationDate: new Date().toLocaleDateString(),

    status: "Confirmed",
  });
};
  
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4 py-4">
      <div className="bg-white w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-indigo-500 px-6 py-2 flex items-center justify-between">
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-white text-xl font-bold">Register for Event</h2>

            <p className="text-indigo-100 text-sm mt-1">{event?.title}</p>
          </div>

          <button
            onClick={onClose}
            className="text-white text-2xl hover:text-red-200 transition"
          >
            ✕
          </button>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          onSubmit={(e) => {
            e.preventDefault();

            onSubmit({
              ...formData,
              eventId: event.id,
              eventTitle: event.title,
            });

            onClose();
          }}
          className="max-h-[75vh] overflow-y-auto px-4 py-4
             grid grid-cols-1 sm:grid-cols-2 gap-4 "
        >
          {/* Full Name */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Full Name
            </label>

            <input
              type="text"
              value={formData.fullName}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  fullName: e.target.value,
                })
              }
              placeholder="Shekhar Suman"
              className="w-full rounded-xl border border-gray-300
               px-4 py-3 text-sm
               focus:outline-none focus:ring-2
               focus:ring-indigo-500"
               required
            />
          </div>

          {/* Roll Number */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Roll Number
            </label>

            <input
              type="text"
              value={formData.rollNo}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  rollNo: e.target.value,
                })
              }
              placeholder="23EC101"
              className="w-full rounded-xl border border-gray-300 px-4 py-1
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Branch */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Branch
            </label>

            <input
              type="text"
              value={formData.branch}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  branch: e.target.value,
                })
              }
              placeholder="ECE"
              className="w-full rounded-xl border border-gray-300 px-4 py-1
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Year */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Year
            </label>

            <select
              className="w-full rounded-xl border border-gray-300 px-4 py-1
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              <option>Select Year</option>
              <option>1st Year</option>
              <option>2nd Year</option>
              <option>3rd Year</option>
              <option>4th Year</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Email
            </label>

            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  email: e.target.value,
                })
              }
              placeholder="shekhar@gmail.com"
              className="w-full rounded-xl border border-gray-300 px-4 py-1
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-xs font-medium text-gray-700 mb-1">
              Phone Number
            </label>

            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({
                  ...formData,
                  phone: e.target.value,
                })
              }
              placeholder="9876543210"
              className="w-full rounded-xl border border-gray-300 px-4 py-1
          focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          {/* Buttons */}
          <div className="md:col-span-2 flex flex-col sm:flex-row justify-end gap-3 pt-2 border-t">
            <button
              onClick={onClose}
              type="button"
              className="px-6 py-1 rounded-xl border border-gray-300
          text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-6 py-1 rounded-xl bg-indigo-600 text-white
          font-medium hover:bg-indigo-700 transition"
            >
              Confirm Registration
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
