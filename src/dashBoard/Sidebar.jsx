import logo from "../assets/images/logo.png"

const Sidebar = () => {
    return(
        <div className= "w-64 bg-gray-800 fixed h-full px-4 py-2">
            <div className="my-2 mb-4">
               <img src={logo} alt="" />
            </div>
            <hr />
            <ul className="mt-3 text-white font-bold">
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="/" className="px-3">
                        Home
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="/create" className="px-3">
                        Create Employee
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="/emlist" className="px-3">
                        Employees
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="" className="px-3">
                        Holidays
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="" className="px-3">
                        Leaves Admin
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="" className="px-3">
                        Leaves Employee
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="" className="px-3">
                        Leave Settings
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="" className="px-3">
                        Attendance Admin
                    </a>
                </li>
                <li className="mb-2 rounded hover:shadow hover:bg-blue-500 py-2">
                    <a href="" className="px-3">
                        Attendance Employee
                    </a>
                </li>
            </ul>
        </div>

    )}
export default Sidebar;