import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyAppointment() {
  const { doctorInfo } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <table className="w-full table-fixed">
        <thead className=" bg-gray-700 text-white sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start w-[20%] ">Name</th>
            <th className="px-4 py-2 text-start ">Dept</th>
            <th className="px-4 py-2 text-start ">Qualification</th>
            <th className="px-4 py-2 text-start ">Age</th>
            <th className="px-4 py-2 text-start ">Gender</th>
            <th className="px-4 py-2 text-start ">Specialist</th>
            <th className="px-4 py-2 text-start w-[20%]">Number</th>
          </tr>
        </thead>
      </table>

      <div className="overflow-auto flex-grow">
        <table className="w-full bg-white table-fixed">
          <tbody>
            {doctorInfo.map((doctor, index) => (
              <tr key={index}>
                <td className="border-b-2 px-4 py-2 text-start w-[20%] overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.name}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.dept}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.qualification}
                </td>
                <td className="border-b-2 px-4 py-2 text-start ">
                  {doctor.age}
                </td>
                <td className="border-b-2 px-4 py-2 text-start ">
                  {doctor.gender}
                </td>
                <td className="border-b-2 px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.specialist}
                </td>
                <td className="border-b-2 px-4 py-2 text-start w-[20%] overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.number}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyAppointment;
