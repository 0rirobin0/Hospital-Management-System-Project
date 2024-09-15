import Image from "next/image";
import PatientLogin from "./components/PatientsLogin";

export default function Home() {
  return (
    <div className="flex  bg-red-800 flex-col ">
      <p className="text-white">Hi</p>
      <PatientLogin/>
    </div>
  );
}
