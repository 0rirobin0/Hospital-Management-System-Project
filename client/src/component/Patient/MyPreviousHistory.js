import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyPreviousHistory() {
  const { myPreviousHistory } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <div className="overflow-y-auto">
        <table className="w-full table-auto">
          <thead className="sticky top-0 bg-gray-700 text-white ">
            <tr>
              <th className="px-4 py-2 text-start w-1/6">Date</th>
              <th className="px-4 py-2 text-start w-1/6">Treatment</th>
              <th className="px-4 py-2 text-start w-1/6">Doctor</th>
              <th className="px-4 py-2 text-start w-1/6">Previous medicine</th>
              <th className="px-4 py-2 text-start w-2/6">Case summary</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {myPreviousHistory.map((history, index) => (
              <tr key={index} className="border-b">
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.date}
                </td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.treatment}
                </td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.doctor}
                </td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.previous_medicine}
                </td>
                <td className="px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {history.case_summary}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyPreviousHistory;
