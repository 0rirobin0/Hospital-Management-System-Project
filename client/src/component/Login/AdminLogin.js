import { useState } from 'react';
import Link from "next/link";

export default function DoctorLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Doctor login logic here
    console.log('Doctor Username:', username);
    console.log('Doctor Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="Doctor-username" className="block text-gray-700">Doctor phone</label>
        <input
          type="text"
          id="Doctor-phone"
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your phone"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Doctor-password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="Doctor-password"
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="font-bold w-full bg-green-600 text-white p-2 rounded-lg hover:bg-green-700 transition-colors">
        Sign in as Doctor
      </button>
    
    </form>
  );
}
