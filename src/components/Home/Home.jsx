// eslint-disable-next-line no-unused-vars
import React from "react";
import Sidebar from "../../dashBoard/Sidebar";
import Dashboard from "../../dashBoard/Dashboard";

const Home = () => {
  return (
   <>
    <div className="flex">
      <Sidebar />
      <Dashboard />
    </div>
        
   </>
  );
};


export default Home;
