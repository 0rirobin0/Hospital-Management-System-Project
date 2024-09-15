import { useState } from 'react';

export default function AdminLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle admin login logic here
    console.log('Admin Username:', username);
    console.log('Admin Password:', password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4">
        <label htmlFor="admin-username" className="block text-gray-700">Admin Username</label>
        <input
          type="text"
          id="admin-username"
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="admin-password" className="block text-gray-700">Password</label>
        <input
          type="password"
          id="admin-password"
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