"use client";
import { useState } from 'react';

export default function PatientLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle patient login logic here
    console.log('Patient Username:', username);
    console.log('Patient Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="patient-username" className="block text-gray-700">Patient Username</label>
        <input
          type="text"
          id="patient-username"
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="patient-password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="patient-password"
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
        Sign in
      </button>
    </form>
  );
}