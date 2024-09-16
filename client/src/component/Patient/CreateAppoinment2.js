import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa";

export default function CreateAppointment({ onClose }) {
  const [doctor, setDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Appointment Created:", { doctor, appointmentDate });
    onClose(); // Close the modal after submission
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-gray-300 rounded-lg shadow-lg w-96">
        {/* Header */}
        <div className="bg-black text-white text-center py-3 rounded-t-lg">
          <h2 className="text-lg font-semibold">Create Appointment</h2>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4 p-6">
          {/* Doctor Dropdown */}
          <div>
            <select
              className="w-full p-2.5 text-black bg-blue-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={doctor}
              onChange={(e) => setDoctor(e.target.value)}
            >
              <option value="" disabled>
                Select Doctor
              </option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
            </select>
          </div>

          {/* Date Input */}
          <div className="relative">
            <input
              type="date"
              className="w-full p-2.5 text-black bg-blue-200 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Select Your Date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              required
            />
            <FaCalendarAlt className="absolute top-3 right-3 text-gray-500" />
          </div>

          {/* Buttons */}
          <div className="flex justify-around p-4 bg-gray-100 rounded-b-lg">
            <button
              type="button"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
