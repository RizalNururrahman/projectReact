import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold font-sans">PELNI</h1>
        <ul className="flex gap-4">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/todo" className="hover:text-gray-300">
              Todo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
