import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/Home/Home";
import CreateEmployee from "../components/Employees/CreateEmployee";
import Employees from "../components/Employees/Employees";


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
    
    ]
    },
  ]);