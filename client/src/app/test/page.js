"use client"
import React, { useState } from 'react';

const CreateAppointmentForm = ({ onCancel, onConfirm }) => {
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle appointment creation logic
    console.log({ selectedDoctor, appointmentDate });
    onConfirm({ selectedDoctor, appointmentDate });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6">Create Appointment</h2>
        <form onSubmit={handleSubmit}>
          {/* Doctor Name Dropdown */}
          <div className="mb-4">
            <label htmlFor="doctor" className="block text-gray-700">
              Doctor Name
            </label>
            <select
              id="doctor"
              value={selectedDoctor}
              onChange={(e) => setSelectedDoctor(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="" disabled>Select a Doctor</option>
              {/* Sample doctor names */}
              <option value="Dr. Alice Johnson">Dr. Alice Johnson</option>
              <option value="Dr. Bob Smith">Dr. Bob Smith</option>
              <option value="Dr. Carol Williams">Dr. Carol Williams</option>
              <option value="Dr. David Brown">Dr. David Brown</option>
              <option value="Dr. Eva Davis">Dr. Eva Davis</option>
            </select>
          </div>

          {/* Date Input */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700">
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

          {/* Buttons */}
          <div className="flex justify-between">
            <button
              type="button"
              onClick={onCancel}
              className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
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
