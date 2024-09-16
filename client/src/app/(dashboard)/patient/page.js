"use client";
import React, { useState } from "react";
import CreateAppointment from "@/component/Patient/CreateAppoinment";
import MyAppointment from "@/component/Patient/MyAppointment";
import AllDoctor from "@/component/Patient/AllDoctor";
import MyReport from "@/component/Patient/MyReport";
import CabinRoomList from "@/component/Patient/CabinRoomList";
import WardRoomList from "@/component/Patient/WardRoomList";
import AvailableTest from "@/component/Patient/AvailableTest";
import Ambulance from "@/component/Patient/Ambulance";
import EmergencyContact from "@/component/Patient/EmergencyContact";

function Patient() {
  const [activeComponent, setActiveComponent] = useState("");

  return (
    <div className="h-full w-full flex space-x-2 bg-violet-500 ">
      <div className="w-1/5 flex flex-col h-full bg-green-300 p-2 border-2 border-black space-y-2">
        <div className="h-auto bg-black flex justify-center items-center rounded-xl p-4 space-x-2">
          <h1 className="text-white font-bold text-2xl ">Rakib</h1>
          <span className="text-white">(Patient)</span>
        </div>
        <div className="flex flex-col h-0 flex-grow bg-yellow-300 rounded-xl justify-between ">
          <div className="flex justify-center underline items-center h-auto font-bold bg-sky-400 rounded-t-lg px-4 py-2">
            Service name
          </div>
          <div className="bg-pink-400 flex-grow p-4 overflow-y-auto ">
            <button
              onClick={() => setActiveComponent("createAppointment")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Create Appointment
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("myAppointments")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                My Appointments
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("allDoctors")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                All Doctors
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("myReport")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                My Report
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("cabinRoomList")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Cabin Room List
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("wardRoomList")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Ward Room List
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("availableTest")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Available Test
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("ambulance")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Ambulance
              </span>
            </button>
            <button
              onClick={() => setActiveComponent("emergencyContact")}
              className="w-full relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-black rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
            >
              <span className="w-full relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
              Emergency Contact
              </span>
            </button>
          </div>
          <div className="">
            <button className="rounded-b-lg w-full px-4 py-2 bg-black text-white font-bold hover:bg-white hover:text-black">
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="w-4/5 bg-red-500 p-6 space-y-2">
        <div className="h-1/6 bg-lime-400 rounded-xl p-2 text-4xl font-bold flex justify-center items-center">Header</div>

        <div className="h-5/6 bg-teal-300 rounded-xl flex flex-col">
          {activeComponent === "createAppointment" && (
            <CreateAppointment onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "myAppointments" && (
            <MyAppointment onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "allDoctors" && (
            <AllDoctor onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "myReport" && (
            <MyReport onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "cabinRoomList" && (
            <CabinRoomList onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "wardRoomList" && (
            <WardRoomList onClose={() => setActiveComponent("")} />
          )}
            {activeComponent === "availableTest" && (
            <AvailableTest onClose={() => setActiveComponent("")} />
          )}
          {activeComponent === "ambulance" && (
            <Ambulance onClose={() => setActiveComponent("")} />
          )}
           {activeComponent === "emergencyContact" && (
            <EmergencyContact onClose={() => setActiveComponent("")} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Patient;
