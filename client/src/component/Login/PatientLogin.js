import Link from "next/link";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function PatientLogin() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState('');

  const router = useRouter();

  // Check if session exists
  useEffect(() => {
    const patientsession = localStorage.getItem('patient');
    const doctorsession = localStorage.getItem('doctor');

    if (patientsession && !doctorsession) {
      // Redirect to patient profile if session exists
      router.push('/patient');
    } else if (!patientsession && doctorsession) {
      // Redirect to doctor profile if session exists
      router.push('/doctor');
    }
  }, [router]);

  // console.log(process.env.NEXT_PUBLIC_BACKEND_URL);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any previous errors

 
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACKEND_URL}/patients/login`, {
        phone,
        password,
      }, {
        withCredentials: true, // Ensure cookies are sent and received
      });

      if (response.status === 200) {
        const { id, name, phone, age } = response.data;

        // Save the patient data to localStorage
        localStorage.setItem('patient', JSON.stringify({ id, name, phone, age }));

        console.log('Login successful:');

        // Redirect to profile after successful login
        router.push('/patient');
      } else {
        setError(response.data.error || 'Invalid phone or password');
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError('An error occurred during login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="patient-phone" className="block text-gray-700">
          Phone
        </label>
        <input
          type="text"
          id="patient-phone"
          className="w-full mt-2 p-2 border rounded-lg focus:outline-none focus:border-green-500"
          placeholder="Enter your phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
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
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded w-full"
      >
        Sign in
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      <div className="text-sm text-black text-center mt-5">
        <p>
          Don't have an account?
          <Link
            href="/register"
            className="text-blue-500 font-semibold hover:underline ml-1"
          >
            Sign up
          </Link>
        </p>
      </div>
    </form>
  );
}
