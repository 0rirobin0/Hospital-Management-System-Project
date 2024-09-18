import React from "react";

function PatientInfo() {
  return (
    <div className="h-full">
      <div className="flex justify-center p-4 text-white tracking-widest text-2xl border-b-8 mb-4">
        Patient Info
      </div>
      <div className="p-4 text-lg text-white tracking-wider">
        <table className="w-full">
          <tbody>
            <tr className="border-b">
              <td className="p-2">Patient ID:</td>
              <td className="p-2 text-right">P-5739</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Name:</td>
              <td className="p-2 text-right">Md. xyz</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Age:</td>
              <td className="p-2 text-right">30</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Mobile Number:</td>
              <td className="p-2 text-right">+880 177493272</td>
            </tr>
            <tr className="border-b">
              <td className="p-2">Gender:</td>
              <td className="p-2 text-right">Female</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PatientInfo;