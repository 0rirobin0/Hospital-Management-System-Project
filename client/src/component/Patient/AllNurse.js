import React from "react";
import { useDataContext } from "@/context/DataContext";

function AllNurse() {
  const { nurseInfo } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <table className="w-full table-fixed">
        <thead className=" bg-gray-700 text-white sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start ">Name</th>
            <th className="px-4 py-2 text-start ">Gender</th>
            <th className="px-4 py-2 text-start ">Allocation</th>
            <th className="px-4 py-2 text-start ">Address</th>
            <th className="px-4 py-2 text-start ">Number</th>
          </tr>
        </thead>
      </table>

      <div className="overflow-auto flex-grow">
        <table className="w-full bg-white table-fixed">
          <tbody>
            {nurseInfo.map((doctor, index) => (
              <tr key={index}>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.name}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.gender}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.allocation}
                </td>
                <td className="border-b-2 px-4 py-2 text-start   overflow-hidden whitespace-nowrap text-ellipsis">
                  {doctor.address}
                </td>
                <td className="border-b-2 px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
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

export default AllNurse;
