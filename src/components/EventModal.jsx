import React from "react";
import { useState } from "react";
function EventModal({ onClose, onSave, initialData }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    category: initialData?.category || "",
    date: initialData?.date || "",
    time: initialData?.time || "",
    venue: initialData?.venue || "",
    capacity: initialData?.capacity || "",
    subtitle: initialData?.subtitle || "",
    description: initialData?.description || "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSave(formData);
  };
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-2 w-full max-w-lg">
        <div className="flex justify-between mb-1 bg-white shadow px-2 py-1 rounded-t-md">
          <h2  className="text-xl font-bold">{initialData ? "Edit Event" : "Create Event"}</h2>

          <button onClick={onClose}>✕</button>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSave(formData);
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-1"
        >
          {/* Event Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Event Name
            </label>

            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter event name"
              className="w-full rounded-lg border border-gray-300 px-4 py-1
              focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>

            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-1
              focus:outline-none focus:ring-1 focus:ring-indigo-500"
            >
              <option>Technical</option>
              <option>Sports</option>
              <option>Cultural</option>
              <option>Workshop</option>
            </select>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>

            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-1
      focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Time
            </label>

            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full rounded-lg border border-gray-300 px-4 py-1
      focus:outline-none focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Venue */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Venue
            </label>

            <input
              type="text"
              name="venue"
              value={formData.venue}
              onChange={handleChange}
              placeholder="Main Auditorium"
              className="w-full rounded-lg border border-gray-300 px-4 py-1
      focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Capacity */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Capacity
            </label>

            <input
              type="number"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              placeholder="500"
              className="w-full rounded-lg border border-gray-300 px-4 py-1
      focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Description */}
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subtitle
            </label>

            <input
              // rows="3"
              name="subtitle"
              value={formData.subtitle}
              onChange={handleChange}
              placeholder="Enter event details..."
              className="w-full rounded-lg border border-gray-300 px-4 py-1
      resize-none focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />
          </div>

          {/* Footer */}
          <div className="md:col-span-2 border-t pt-2 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-1 rounded-lg border border-gray-300
      text-gray-700 hover:bg-gray-100 transition"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="px-5 py-1 rounded-lg bg-indigo-700 text-white
      hover:bg-indigo-800 transition"
            >{initialData ? "Update Event" : "Save Event"}
              
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EventModal;
