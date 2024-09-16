import React from "react";
import { useDataContext } from "@/context/DataContext";

function MyBill() {
  const { myBillList } = useDataContext();

  return (
    <div className="h-full flex flex-col rounded-lg overflow-hidden">
      <table className="w-full table-fixed">
        <thead className=" bg-gray-700 text-white sticky top-0">
          <tr>
            <th className="px-4 py-2 text-start ">Bill_ID</th>
            <th className="px-2 py-2 text-start ">Date</th>
            <th className="px-4 py-2 text-start ">Amount</th>
            <th className="px-2 py-2 text-start w-[30%]">Description</th>
            <th className="px-2 py-2 text-start ">Payment Status</th>
            <th className="px-4 py-2 text-start ">Method</th>
          </tr>
        </thead>
      </table>
      {/* overflow-y-auto */}
      <div className="overflow-auto flex-grow">
        <table className="w-full bg-white table-fixed">
          <tbody>
            {myBillList.map((bill, index) => (
              <tr key={index}>
                <td className="border-b-2 px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.bill_ID}
                </td>
                <td className="border-b-2 px-2 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.date}
                </td>
                <td className="border-b-2 px-4 py-2 text-start  overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.amount}
                </td>
                <td className="border-b-2 px-2 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis w-[30%]">
                  {bill.description}
                </td>
                <td className="border-b-2 px-2 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis">
                  {bill.payment_Status}
                </td>
                <td className="border-b-2 px-4 py-2 text-start overflow-hidden whitespace-nowrap text-ellipsis ">
                  {bill.method}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyBill;
