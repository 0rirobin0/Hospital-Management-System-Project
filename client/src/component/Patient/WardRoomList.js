import React from "react";
import { useDataContext } from "@/context/DataContext";

function WardRoomList() {
  const { wardRoomList } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <table className="w-full table-fixed">
        <thead className=" bg-gray-700 text-white sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start ">Ward Name</th>
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
            {wardRoomList.map((ward, index) => (
              <tr key={index}>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {ward.name}
                </td>
                <td className="border-b-2 px-3 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {ward.roomNumber}
                </td>
                <td className="border-b-2 px-3 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {ward.assignedNurse}
                </td>
                <td className="border-b-2 px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {ward.supervisingDoctor}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {ward.caseSummary}
                </td>
                <td className="border-b-2 px-5 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {ward.bill}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default WardRoomList;
