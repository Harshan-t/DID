import React from "react";

function Card({ className, children }) {
  return (
    <div className={`p-4 bg-white shadow-md rounded-2xl ${className}`}>
      {children}
    </div>
  );
}

function CardContent({ children }) {
  return <div className="p-4">{children}</div>;
}

export { Card, CardContent };