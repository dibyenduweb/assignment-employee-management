

const Data = () => {
    return(
        <div>
           <h1 className="px-72 text-4xl font-bold text-center py-4">@ Welcome Back <span className="bg-emerald-400 text-white p-1 rounded-sm">Admin</span></h1>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">Admin Dashboard</h2>

          {/* Cards */}
          <div className="px-72 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Your card components */}
            <div className="bg-red-500 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-white-600">1000</p>
            </div>
            <div className="bg-red-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-white-600">1000</p>
            </div>
            <div className="bg-amber-400 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-white-600">1000</p>
            </div>
            <div className="bg-lime-700 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-white-600">1000</p>
            </div>
            <div className="bg-teal-400 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-white-600">1000</p>
            </div>
            <div className="bg-lime-500 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-white-600">1000</p>
            </div>
            <div className="bg-cyan-500 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Total Users</h3>
              <p className="text-white-600">1000</p>
            </div>
            <div className="bg-fuchsia-500 rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold mb-2">Total Orders</h3>
              <p className="text-white-600">500</p>
            </div>
            {/* Add more cards as needed */}
          </div>

          {/* Other dashboard content */}
          <div className="mt-8">
            <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
            <ul>
              <li>User A registered.</li>
              <li>User B placed an order.</li>
             
            </ul>
          </div>
        </div>
        </div>
    )}
export default Data;