import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/Home/Home";
import CreateEmployee from "../components/Employees/CreateEmployee";
import Employees from "../components/Employees/Employees";
import Holidays from "../components/Employees/Holidays";
import LeavesAdmin from "../components/Employees/LeavesAdmin";
import LeavesEmployee from "../components/Employees/LeavesEmployee";
import LeavesSetting from "../components/Employees/LeavesSetting";
import AttendanceAdmin from "../components/Employees/AttendanceAdmin";
import AttendanceEmployee from "../components/Employees/AttendanceEmployee";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children:[{
        path:"/",
        element:<Home/>
      },
      {
        path:"/create",
        element:<CreateEmployee/>
      },
      {
        path:"/emlist",
        element:<Employees/>
      },
      {
        path:"/holidays",
        element:<Holidays/>
      },
      {
        path:"/adminleaves",
        element:<LeavesAdmin/>
      },
      {
        path:"/emleaves",
        element:<LeavesEmployee/>
      },
      {
        path:"/leavesetting",
        element:<LeavesSetting/>
      },
      {
        path:"/adminattendance",
        element:<AttendanceAdmin/>
      },
      {
        path:"/emattendance",
        element:<AttendanceEmployee/>
      }
    
    ]
    },
  ]);