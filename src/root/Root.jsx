import { Outlet } from "react-router-dom";
import Home from "../components/Home/Home";



const Root = () => {
    return(
        <div>
             <Outlet >
            <Home/>
             </Outlet>
        </div>
    )}

    
export default Root;