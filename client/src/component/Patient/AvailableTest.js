import React from "react";
import { useDataContext } from "@/context/DataContext";

function AvailableTest() {
  const { availableTest } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <table className="w-full table-fixed">
        <thead className=" bg-gray-700 text-white sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start ">Test Name</th>
            <th className="px-4 py-2 text-start ">Amount</th>
            <th className="px-4 py-2 text-start ">Available Time</th>
          </tr>
        </thead>
      </table>

      <div className="overflow-auto flex-grow">
        <table className="w-full bg-white table-fixed">
          <tbody>
            {availableTest.map((test, index) => (
              <tr key={index}>
                <td className="border-b-2 px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {test.name}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {test.amount}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {test.time}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AvailableTest;
