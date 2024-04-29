/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import Home from "../Home/Home";

const AttendanceEmployee = () => {
  const [attendanceData, setAttendanceData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const attendanceResponse = await fetch("/adminAttendance.json");
        const attendanceData = await attendanceResponse.json();
        setAttendanceData(attendanceData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Home />
      <div className="container mx-auto px-72 py-4">
        <h1 className="text-4xl text-center font-bold mb-2">
          Attendance Employee
        </h1>

        <h2 className="text-lg font-bold mb-2">Attendance Data</h2>
        <table className="min-w-full bg-white border rounded-lg overflow-hidden mb-4">
          <thead className="bg-yellow-800 text-white">
            <tr>
              <th className="px-2 py-1">ID</th>
              <th className="px-2 py-1">Name</th>
              <th className="px-2 py-1">Employee Type</th>
              <th className="px-2 py-1">Work Hours</th>
              <th className="px-2 py-1">Half Day</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {attendanceData.map((employee) => (
              <tr key={employee.id}>
                <td className="px-2 py-1">{employee.id}</td>
                <td className="px-2 py-1">{employee.name}</td>
                <td className="px-2 py-1">{employee.employeeType}</td>
                <td className="px-2 py-1">{employee.workHours}</td>
                <td className="px-2 py-1">{employee.halfDay ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};


export default AttendanceEmployee;
