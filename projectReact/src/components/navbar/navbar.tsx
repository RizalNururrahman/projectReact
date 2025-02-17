import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const userName = "Rizal Nururrahman"; // username
  const userImage = "/images/wajah.png"; // link yg untuk menampilkan gambar

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    // Handle logout logic here, e.g., clearing session
    console.log("User logged out");
  };

  return (
    <nav className="bg-blue-950 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold font-sans">PELNI</h1>
        <div className="relative">
          <button onClick={toggleMenu} className="focus:outline-none">
            {userName}
          </button>
          {isMenuOpen && (
            <div className="absolute right-0 mt-2 w-68 bg-white text-black rounded-md shadow-lg z-10">
              <div className="p-4 flex items-center">
                {/* Image Avatar */}
                <img
                  src={userImage}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full mr-2"
                />
                <div>
                  <p className="font-bold">Hello, {userName}</p>
                  <p className="text-sm">Staff Enterprise System Ops</p>
                </div>
              </div>
              <Link to="/profile" className="block px-4 py-2 hover:bg-gray-200">
                Profile
              </Link>
              <button
                onClick={handleLogout}
                className="block w-full text-left px-4 py-2 hover:bg-gray-200"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
