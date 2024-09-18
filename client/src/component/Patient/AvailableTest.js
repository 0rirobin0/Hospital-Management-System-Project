import React from "react";
import { useDataContext } from "@/context/DataContext";

function AvailableTest() {
  const { availableTest } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
    <div className="overflow-auto flex-grow">
      <table className="w-full bg-white table-fixed border-collapse border border-black">
        <thead className="bg-gray-700 text-black sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start border border-black">Test Name</th>
            <th className="px-4 py-2 text-start border border-black">Amount</th>
            <th className="px-4 py-2 text-start border border-black">Available Time</th>
          </tr>
        </thead>
        <tbody>
          {availableTest.map((test, index) => (
            <tr key={index} className="text-black">
              <td className="border-b-2 px-4 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {test.test_name}
              </td>
              <td className="border-b-2 px-4 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {test.amount}
              </td>
              <td className="border-b-2 px-4 py-2 text-start border border-black overflow-hidden whitespace-nowrap text-ellipsis">
                {test.available_time}
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
