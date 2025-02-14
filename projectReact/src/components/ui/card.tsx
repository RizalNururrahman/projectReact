import React from "react";

export const Card: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">{children}</div>
  );
};
