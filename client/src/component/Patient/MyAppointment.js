import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyAppointment() {
  const { appointments } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
  <table className="w-full table-fixed">
    <thead className="bg-gray-700 text-white sticky top-0">
      <tr>
        <th className="px-4 py-2 text-start w-[30%]">Doctor</th>
        <th className="px-4 py-2 text-start w-[25%]">Date</th>
        <th className="px-4 py-2 text-start w-[20%]">Time</th>
        <th className="px-4 py-2 text-start w-[15%]">Type</th>
        <th className="px-4 py-2 text-start w-[10%]">Status</th>
      </tr>
    </thead>
  </table>

  <div className="overflow-auto flex-grow">
    <table className="w-full bg-white table-fixed">
      <tbody>
        {appointments.map((appointment, index) => (
          <tr key={index}>
            <td className="border-b-2 px-4 py-2 text-start w-[30%] overflow-hidden whitespace-nowrap text-ellipsis">
              {appointment.name}
            </td>
            <td className="border-b-2 px-4 py-2 text-start w-[25%] overflow-hidden whitespace-nowrap text-ellipsis">
              {appointment.owner}
            </td>
            <td className="border-b-2 px-4 py-2 text-start w-[20%] overflow-hidden whitespace-nowrap text-ellipsis">
              {appointment.year}
            </td>
            <td className="border-b-2 px-4 py-2 text-start w-[15%]">
              {appointment.type}
            </td>
            <td className="border-b-2 px-4 py-2 text-start w-[10%]">
              {appointment.mark}
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
