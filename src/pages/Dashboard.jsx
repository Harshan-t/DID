import React from "react";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

function Dashboard() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-1 py-1.5">
        <Sidebar />
        <div className="p-6 flex-1">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Dashboard</h2>
          
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
