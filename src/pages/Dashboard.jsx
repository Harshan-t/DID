// import React from 'react'

// const Dashboard = () => {
//   return (
//     <div>Dashboard</div>
//   )
// }

// export default Dashboard


import React from "react";
import Sidebar from "../components/sidebar";
import { FaUser, FaMapMarkerAlt, FaClipboardCheck, FaTimesCircle } from "react-icons/fa";


function Dashboard() {


    return (
        <div className="dashboard flex bg-gray-100 min-h-screen">
            <Sidebar />
            <div className="flex flex-col p-6 w-full lg:w-4/5">
                <h2 className="text-3xl font-bold text-gray-700 mb-8">Dashboard</h2>



                

                
            </div>
        </div>
    );
}

export default Dashboard;