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
        <label htmlFor="Doctor-username" className="block text-white tracking-wide">Doctor phone</label>
        <input
          type="text"
          id="Doctor-phone"
          className="w-full mt-2 p-2 border border-black rounded-lg focus:border-2  focus:border-black"
          placeholder="Enter your phone"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="Doctor-password" className="block text-white tracking-wide">Password</label>
        <input
          type="password"
          id="Doctor-password"
          className="w-full mt-2 p-2 border border-black rounded-lg focus:border-2  focus:border-black"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit" className="font-bold w-full bg-black text-white p-2 rounded-lg hover:bg-white hover:text-black transition-colors tracking-wider">
        Sign in as Doctor
      </button>
    
    </form>
  );
}
