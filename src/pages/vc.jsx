import React from "react";
import Header from "../components/header";
import { CheckCircle } from "lucide-react";
import Sidebar from "../components/sidebar";

const VerifiedCredential = () => {
  const files = [
    {
      id: "VC-123456",
      name: "Bitcoin Whitepaper",
      type: "PDF",
      holder: "Satoshi Nakamoto",
      issuer: "Bitcoin Foundation",
      issuedDate: "October 31, 2008",
      expires: "N/A",
      status: "Verified",
      attributes: {
        "DID": "did:web:example.com:satoshi",
        "Email": "satoshi@example.com",
        "Role": "Creator",
        "Organization": "Bitcoin Foundation",
      },
    },
    {
      id: "VC-654321",
      name: "Ethereum Whitepaper",
      type: "PDF",
      holder: "Vitalik Buterin",
      issuer: "Ethereum Foundation",
      issuedDate: "November 27, 2013",
      expires: "N/A",
      status: "Verified",
      attributes: {
        "DID": "did:web:example.com:vitalik",
        "Email": "vitalik@example.com",
        "Role": "Creator",
        "Organization": "Ethereum Foundation",
      },
    },
    {
        id: "VC-654321",
        name: "Ethereum Whitepaper",
        type: "PDF",
        holder: "Vitalik Buterin",
        issuer: "Ethereum Foundation",
        issuedDate: "November 27, 2013",
        expires: "N/A",
        status: "Verified",
        attributes: {
          "DID": "did:web:example.com:vitalik",
          "Email": "vitalik@example.com",
          "Role": "Creator",
          "Organization": "Ethereum Foundation",
        },
      },
    // Add more files as needed
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <div className="container mx-auto px-4 md:px-6 py-16 flex-1">
          <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
            Verified Files
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {files.map((file) => (
              <div key={file.id} className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-center text-gray-800 mb-4">
                  {file.name}
                </h3>
                <div className="flex items-center justify-center mb-4">
                  <CheckCircle className="text-green-500 w-8 h-8" />
                  <span className="ml-2 text-lg font-medium text-green-600">
                    {file.status}
                  </span>
                </div>
                <div className="border border-gray-300 rounded-lg p-4 bg-gray-50">
                  <p className="text-lg font-semibold text-gray-700">
                    File Type:{" "}
                    <span className="text-gray-900">{file.type}</span>
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    Holder:{" "}
                    <span className="text-gray-900">{file.holder}</span>
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    Issuer:{" "}
                    <span className="text-gray-900">{file.issuer}</span>
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    Issued Date:{" "}
                    <span className="text-gray-900">{file.issuedDate}</span>
                  </p>
                  <p className="text-lg font-semibold text-gray-700">
                    Expiry Date:{" "}
                    <span className="text-gray-900">{file.expires}</span>
                  </p>
                  <div className="mt-4">
                    <h4 className="text-xl font-semibold text-gray-800 mb-2">
                      Attributes
                    </h4>
                    <ul className="bg-white border border-gray-200 rounded-lg p-4">
                      {Object.entries(file.attributes).map(([key, value]) => (
                        <li key={key} className="text-gray-700 text-lg">
                          <span className="font-semibold">{key}:</span> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-8 text-center">
                  <button className="bg-[#b5b25c] hover:bg-[#9a9a4f] text-white text-lg py-2 px-6 rounded-lg transition-all">
                    Download {file.type}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerifiedCredential;
