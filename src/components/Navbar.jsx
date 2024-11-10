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
      <nav className="fixed z-30 h-[50px] w-full bg-white border-b border-gray-200 p-1">
        <div className="mx-auto px-4 py-2 inline-flex lg:flex justify-center items-center space-x-20">
          <div className="visible lg:hidden">
            {open ? (
              <CloseIcon onClick={handleMenuBar} />
            ) : (
              <MenuIcon onClick={handleMenuBar} />
            )}
          </div>
          <div className="font-bold text-xl w-[35%]">
            {/* <Link to={"/"}>Kondapalli</Link> */}
            <Link to={"/"}><img className="w-[188px] h-[27px]" src="https://s3-alpha-sig.figma.com/img/5281/5318/255a7504d5cda463870f2d6fd7ff3203?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nrupf3p6Ip9reOZmZWdxDhcgs3Vvy3LqSbXkWm1fcRQwUCKMdteZ-XAU2ECvwPkPOZP8sKYbvixBlcUnKvOc536iP4ISgWZsfGsqeculWYcxegYK2WlluXKFHYLu0nF6vrHE3pRHZoGO1wNvy-Qx0bh5tgZxPPY-FyNJuZ6dc71m7fXiyUXd5ZqKltOCz~L05r6npIPbnAYo~RyDAPFDeO7guAAgwkEUg7zeX-atIux2-I1oKvLlS8Gq-1n4ahMdUGqRAUV8582XU58Cpmyey7KksSUBAfuUoT9pv~T6fk6qdJdeZyJ3DKzGiIGefpBoDr6hu0WhlPefe6Q0EZLr3g__" /></Link>
          </div>

          {open ? (
            <div className="bg-white w-[75%] h-screen absolute z-30 -left-[80px] top-[50px] lg:hidden px-5 py-5">
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
