import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <>
      <nav className="fixed h-[50px] w-full bg-white border-b border-gray-200 p-1">
        <div className="contain5r mx-auto px-4 py-2 flex justify-center items-center space-x-20">
          <div className="font-bold text-xl">
            <Link to={"/"}>Kondapalli</Link>
          </div>
          <div className="hidden lg:flex space-x-16">
            <Link
              to={"/"}
              className={` hover:underline ${
                currentPath === "/" ? "underline tracking-wide" : ""
              }`}
            >
              HOME
            </Link>
            <Link
              to={"/about"}
              className={`hover:underline ${
                currentPath === "/about" ? "underline tracking-wide" : ""
              }`}
            >
              About
            </Link>
            <Link
              to={"/contact"}
              className={`hover:underline ${
                currentPath === "/contact" ? "underline tracking-wide" : ""
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
