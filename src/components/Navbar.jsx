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

  const menuBarItems = [
    { titele: "HOME", link: "/" },
    { titele: "About", link: "/about" },
    { titele: "Contact Us", link: "/contact" },
  ];

  return (
    <>
      <nav className="fixed top-0 z-30 h-[50px] w-full bg-white border-b border-gray-200 p-1">
      {open ? (
            <div className="bg-white w-[75%] h-screen absolute z-30 top-[50px] lg:hidden px-5 py-5">
              <ul>
                {menuBarItems.map((item) => (
                  <Link to={item.link}>
                    <li
                      key={item}
                      className={`py-2 ${currentPath === `${item.link}`? "underline tracking-wide" : "" }`}
                    >
                      {item.titele}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          ) : (
            ""
          )}
        <div className="mx-auto px-5 py-1 inline-flex lg:flex -center space-x-14">
          <div className="visible lg:hidden">
            {open ? (
              <CloseIcon fontSize="large" onClick={handleMenuBar} />
            ) : (
              <MenuIcon fontSize="large" onClick={handleMenuBar} />
            )}
          </div>
          <div className="text-xl w-[35%]">
            {/* <Link to={"/"}>Kondapalli</Link> */}
            <Link to={"/"} className="font-syne font-bold">Maoorubomma</Link>
          </div>

          <div className="hidden lg:flex space-x-16 w-[65%]">
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
