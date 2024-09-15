import { useState } from "react";
import Link from "next/link";

export default function PatientLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle patient login logic here
    console.log("Patient Username:", username);
    console.log("Patient Password:", password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="patient-username" className="block text-gray-700">
          Patient phone
        </label>

        <input
          type="text"
          id="patient-phone"
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your phone"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="patient-password" className="block text-gray-700">
          Password
        </label>
        <input
          type="password"
          id="patient-password"
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button
        type="submit"
        className="font-bold w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors"
      >
        Sign in as patient
      </button>
      <div className="text-sm text-black text-center mt-5">
        <p>
          Don't have an account?
          <Link
            href="register"
            className="text-white font-semibold hover:underline ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
