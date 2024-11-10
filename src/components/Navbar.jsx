import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);
  const handleMenuBar = () => {
    console.log("open: " + open);
    open ? setOpen(false) : setOpen(true);
  };
  return (
    <>
      <nav className="fixed z-30 h-[50px] w-full bg-white border-b border-gray-200 p-1">
        <div className="contain5r mx-auto px-4 py-2 inline-flex lg:flex justify-center items-center space-x-20">
          <div className="visible lg:hidden">
            {open ? (
              <CloseIcon onClick={handleMenuBar} />
            ) : (
              <MenuIcon onClick={handleMenuBar} />
            )}
          </div>
          <div className="font-bold text-xl">
            <Link to={"/"}>Kondapalli</Link>
          </div>

          {open?
            <div className="bg-white w-[75%] h-screen absolute z-30 -left-[80px] top-[50px] lg:hidden"></div>
          :""}

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
