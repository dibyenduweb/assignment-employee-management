import { useEffect, useState } from "react";
import axios from "axios";
import Home from "../Home/Home";

const Employees = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
  
    axios
      .get("/emlist.json")
      .then((response) => {
        setEmployees(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <Home />
      <div className="px-72 grid grid-cols-1 md:grid-cols-3 gap-6">
        {employees.map((employee) => (
          <div
            key={employee._id}
            className="max-w-md bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          >
            <div className="flex flex-col items-center pb-10">
              <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src="https://cdn3d.iconscout.com/3d/premium/thumb/profile-6335655-5220669.png?f=webp"
                alt="Bonnie image"
              />
              <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                {employee.name}
              </h5>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {employee.employeeType}
              </span>
              <p className="text-gray-600 dark:text-gray-300 mt-2">
                Email: {employee.email}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Phone: {employee.phoneNumber}
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                Date: {new Date(employee.datetime).toLocaleDateString()}
              </p>
              <div className="flex mt-4 md:mt-6">
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Edit
                </a>
                <a
                  href="#"
                  className="py-2 px-4 ms-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employees;
