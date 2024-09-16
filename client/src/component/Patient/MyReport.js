import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyReport() {
  const { myReports } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <table className="w-full table-fixed">
        <thead className=" bg-gray-700 text-white sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start w-[40%] ">Test Name</th>
            <th className="px-4 py-2 text-start ">Result</th>
            <th className="px-4 py-2 text-start ">Amount</th>
            <th className="px-4 py-2 text-start ">Comment</th>
           
          </tr>
        </thead>
      </table>

      <div className="overflow-auto flex-grow">
        <table className="w-full bg-white table-fixed">
          <tbody>
            {myReports.map((report, index) => (
              <tr key={index}>
                <td className="border-b-2 px-4 py-2 text-start w-[40%] overflow-hidden whitespace-nowrap text-ellipsis">
                  {report.testName}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {report.result}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {report.amount}
                </td>
                <td className="border-b-2 px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {report.comment}
                </td>
               
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyReport;
