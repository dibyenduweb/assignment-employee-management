import Home from "../Home/Home";

const LeavesEmployee = () => {
  return (
    <>
      <Home />
      <div className="ml-64 bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="bg-white p-8 rounded shadow-md">
          <h1 className="text-2xl font-bold mb-4">Leaves Employee</h1>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-200">
                  <th className="py-2 px-4 border">Employee Name</th>
                  <th className="py-2 px-4 border">Leave Type</th>
                  <th className="py-2 px-4 border">From</th>
                  <th className="py-2 px-4 border">To</th>
                  <th className="py-2 px-4 border">No Of Days</th>
                  <th className="py-2 px-4 border">Reason</th>
                  <th className="py-2 px-4 border">Status</th>
                  <th className="py-2 px-4 border">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white">
                  <td className="py-2 px-4 border">John Doe</td>
                  <td className="py-2 px-4 border">Medical Leave</td>
                  <td className="py-2 px-4 border">27 Feb 2023</td>
                  <td className="py-2 px-4 border">27 Feb 2023</td>
                  <td className="py-2 px-4 border">1 day</td>
                  <td className="py-2 px-4 border">Going to Hospital</td>
                  <td className="py-2 px-4 border text-center">
                    <span className="inline-block bg-yellow-200 text-yellow-800 py-1 px-2 rounded-full text-xs">
                      Pending
                    </span>
                  </td>
                  <td className="py-2 px-4 border">
                    <button className="bg-green-500 hover:bg-blue-700 text-white py-1 px-2 rounded">
                      Approve
                    </button>
                    <button className="bg-red-500 hover:bg-red-700 text-white py-1 px-2 rounded ml-2">
                      Reject
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default LeavesEmployee;
