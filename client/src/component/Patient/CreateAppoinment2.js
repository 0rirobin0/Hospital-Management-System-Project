"use client";
import React, { useState } from "react";
import { GiConfirmed } from "react-icons/gi";

const CreateAppointmentForm = () => {
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment creation logic
    console.log({
      selectedDoctor,
      appointmentDate,
      appointmentTime,
      description,
    });
  };

  return (
    <div className=" flex items-center justify-center bg-gray-100 h-full">
      <div className="bg-black shadow-md rounded-3xl p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-white border-b-2 tracking-widest">
          Create Appointment
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="doctor" className="block text-white tracking-wide">
              Doctor Name
            </label>
            <select
              id="doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>
                Select a Doctor
              </option>
              <option value="Dr. Alice Johnson">Dr. Alice Johnson</option>
              <option value="Dr. Bob Smith">Dr. Bob Smith</option>
              <option value="Dr. Carol Williams">Dr. Carol Williams</option>
              <option value="Dr. David Brown">Dr. David Brown</option>
              <option value="Dr. Eva Davis">Dr. Eva Davis</option>
            </select>
          </div>

          {/* Date Input */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-white tracking-wide">
              Appointment Date
            </label>
            <input
              type="date"
              id="date"
              value={appointmentDate}
              onChange={(e) => setAppointmentDate(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="time" className="block text-white tracking-wide">
              Select a Time
            </label>
            <input
              type="time"
              id="time"
              value={appointmentTime}
              onChange={(e) => setAppointmentTime(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            />
          </div>

          {/* Description Input */}
          <div className="mb-4">
            <label htmlFor="description" className="block text-white tracking-wide">
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              rows="3"
              placeholder="Enter appointment details or description"
              required
            />
          </div>

          <div className="flex w-full">
            
            <button
              type="submit"
              className="bg-blue-600 font-bold tracking-wider w-full text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAppointmentForm;
