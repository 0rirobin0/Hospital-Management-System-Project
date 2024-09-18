import { useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function DoctorLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

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
      setError('Invalid phone or password');
    }
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
