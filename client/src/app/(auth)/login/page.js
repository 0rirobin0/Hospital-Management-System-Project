"use client";
import { useState } from "react";
import AdminLogin from "@/component/Login/AdminLogin";
import PatientLogin from "@/component/Login/PatientLogin";

export default function LoginPage() {
  const [accountType, setAccountType] = useState("patient"); 

  return (
    <div className="bg-gray-300 p-6 rounded-3xl shadow-lg w-full max-w-96 border-2 border-black">
      <div className="flex justify-around mb-4 border-b">
        
        <button
          className={`py-2 px-4 w-full text-center ${
            accountType === "patient"
              ? "text-green-600 border-b-2 border-green-600 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setAccountType("patient")}
        >
          Patient
        </button>
        <button
          className={`py-2 px-4 w-full text-center ${
            accountType === "Doctor"
              ? "text-green-600 border-b-2 border-green-600 font-bold"
              : "text-gray-500"
          }`}
          onClick={() => setAccountType("Doctor")}
        >
          Doctor
        </button>
      </div>

      {/* Conditionally render the login form based on account type */}
      {accountType === "Doctor" ? <AdminLogin /> : <PatientLogin />}
    </div>
  );
}