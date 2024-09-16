import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyAppointment() {
  const { cabinRoomList } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <table className="w-full table-fixed">
        <thead className=" bg-gray-700 text-white sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start ">Name</th>
            <th className="px-3 py-2 text-start ">Room number</th>
            <th className="px-3 py-2 text-start ">Assigned Nurse</th>
            <th className="px-3 py-2 text-start ">Supervising Doctor</th>
            <th className="px-3 py-2 text-start ">Case Summary</th>
            <th className="px-4 py-2 text-start ">Bill</th>
          </tr>
        </thead>
      </table>

      <div className="overflow-auto flex-grow">
        <table className="w-full bg-white table-fixed">
          <tbody>
            {cabinRoomList.map((cabin, index) => (
              <tr key={index}>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {cabin.name}
                </td>
                <td className="border-b-2 px-3 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {cabin.roomNumber}
                </td>
                <td className="border-b-2 px-3 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {cabin.assignedNurse}
                </td>
                <td className="border-b-2 px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {cabin.supervisingDoctor}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {cabin.caseSummary}
                </td>
                <td className="border-b-2 px-5 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {cabin.bill}
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
