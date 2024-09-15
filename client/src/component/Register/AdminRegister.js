"use client";
import { useState } from "react";
import Link from "next/link";

export default function AdminRegister() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [department, setDepartment] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for Admin registration
    console.log("Admin Registration:", {
      name,
      phone,
      age,
      department,
      gender,
      password,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-2">
        <label htmlFor="name" className="block text-gray-700">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>

      <div className="mb-2">
        <label htmlFor="phone" className="block text-gray-700">
          Phone
        </label>
        <input
          type="text"
          id="phone"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Enter your phone number"
        />
      </div>

      <div className="flex mb-2 space-x-6">
        <div className="flex-1">
          <label htmlFor="age" className="block text-gray-700">
            Age
          </label>
          <input
            type="number"
            id="age"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:border-green-500"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            placeholder="Enter your age"
          />
        </div>

        <div className="flex-1">
          <label htmlFor="gender" className="block text-gray-700">
            Gender
          </label>
          <select
            id="gender"
            className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:border-green-500"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <option value="">Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>

      <div className="mb-2">
        <label htmlFor="department" className="block text-gray-700">
          Department
        </label>
        <input
          type="text"
          id="department"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          placeholder="Enter your department"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="password" className="block text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="w-full mt-1 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        Register as Admin
      </button>
      <div className="text-sm text-black text-center mt-5">
        <p>
          Already have an account?
          <Link
            href="/login"
            className="text-white font-semibold hover:underline"
            onClick={() => router.push("/login")}
          >
            Sign in
          </Link>
        </p>
      </div>
    </form>
  );
}
