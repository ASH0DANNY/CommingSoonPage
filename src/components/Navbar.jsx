import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <nav className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="font-bold text-xl">Kondapalli</div>
          <div className="flex space-x-4">
            <Link
              to={"/"}
              className={`hover:underline ${
                currentPath === "/" ? "underline" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              to={"/about"}
              className={`hover:underline ${
                currentPath === "/about" ? "underline" : ""
              }`}
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className={`hover:underline ${
                currentPath === "/contact" ? "underline" : ""
              }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
