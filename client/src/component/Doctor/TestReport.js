"use client";
import React, { useState } from "react";
import { useDataContext } from "@/context/DataContext";

const TestReport = () => {
  const { testReportList } = useDataContext();

  const [searchTerm, setSearchTerm] = useState("");

  const filteredHistory = testReportList.filter((row) =>
    row.patient_id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="rounded-xl bg-gray-300">
      <div className="mb-4 border-2 border-black rounded-xl">
        <input
          type="text"
          className="border border-gray-400 rounded-xl p-2 w-full"
          placeholder="Search by Patient ID..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <table className="w-full">
        <thead className="bg-black text-white rounded-t-xl">
          <tr className="flex w-full">
            <th className="px-4 py-2 w-1/5" style={{ textAlign: "left" }}>Full texts</th>
            <th className="px-4 py-2 w-1/5" style={{ textAlign: "left" }}>Report Id</th>
            <th className="px-4 py-2 w-1/5" style={{ textAlign: "left" }}>Test name</th>
            <th className="px-4 py-2 w-1/5" style={{ textAlign: "left" }}>Result</th>
            <th className="px-4 py-2 w-1/5" style={{ textAlign: "left" }}>Amount</th>
            <th className="px-4 py-2 w-1/5" style={{ textAlign: "left" }}>Comment</th>
            <th className="px-4 py-2 w-1/5" style={{ textAlign: "left" }}>Patient Id</th>
          </tr>
        </thead>
        <tbody className="flex flex-col overflow-auto w-full border-2 border-black" style={{ height: "100vh" }}>
          {filteredHistory.length > 0 ? (
            filteredHistory.map((row, index) => (
              <tr key={index} className="flex w-full">
                <td className="px-4 py-2 border-b-2 border-black w-1/5">{row.fullText}</td>
                <td className="px-4 py-2 border-b-2 border-black w-1/5">{row.report_id}</td>
                <td className="px-4 py-2 border-b-2 border-black w-1/5">{row.test_name}</td>
                <td className="px-4 py-2 border-b-2 border-black w-1/5">{row.result}</td>
                <td className="px-4 py-2 border-b-2 border-black w-1/5">{row.amount}</td>
                <td className="px-4 py-2 border-b-2 border-black w-1/5">{row.comment}</td>
                <td className="px-4 py-2 border-b-2 border-black w-1/5">{row.patient_id}</td>
              </tr>
            ))
          ) : (
            <tr className="flex w-full">
              <td className="px-4 py-2 w-full text-center" colSpan="7">
                No patients found with the given ID.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default TestReport;
