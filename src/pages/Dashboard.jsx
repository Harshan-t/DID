import React from "react";
import { FaIdBadge, FaFileAlt, FaLock, FaShieldAlt, FaUserShield, FaRedo } from "react-icons/fa";
import Header from "../components/header";
import Sidebar from "../components/sidebar";

const featuresData = [
  {
    icon: <FaIdBadge size={30} />, 
    title: "Decentralized Identity",
    description: "Create and manage your digital identity using WebID and Solid Pods without relying on a blockchain."
  },
  {
    icon: <FaFileAlt size={30} />, 
    title: "Secure Data Storage",
    description: "Store and manage your personal data securely in Solid Pods with full control over access permissions."
  },
  {
    icon: <FaLock size={30} />, 
    title: "End-to-End Encryption",
    description: "Ensure data confidentiality with end-to-end encryption, leveraging decentralized key management."
  },
  {
    icon: <FaShieldAlt size={30} />, 
    title: "Access Control & Privacy",
    description: "Define and enforce fine-grained access control rules for your identity data using Web Access Control (WAC)."
  },
  {
    icon: <FaUserShield size={30} />, 
    title: "WebID-Based Authentication",
    description: "Authenticate securely with WebID and Solid, ensuring a decentralized and user-controlled login mechanism."
  },
  {
    icon: <FaRedo size={30} />, 
    title: "Identity Recovery System",
    description: "Recover your identity securely with decentralized backup mechanisms and encrypted key recovery options."
  }
];

function Dashboard() {
  return (
    <div className="flex flex-col bg-gray-100 min-h-screen">
      <Header />
      <div className="flex flex-1 py-1.5">
        <Sidebar />
        <div className="p-6 flex-1">
          <h2 className="text-3xl font-bold text-gray-700 mb-8">Dashboard</h2>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuresData.map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-md flex flex-col items-center text-center h-40">
                <div className="text-blue-500 mb-2">{feature.icon}</div>
                <p className="text-lg font-semibold">{feature.title}</p>
                <p className="text-sm text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
