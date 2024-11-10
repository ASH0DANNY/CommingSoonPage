import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <>
      <div className="absolute bottom-0 bg-primary text-gray-500 w-full flex flex-col-reverse lg:grid lg:grid-cols-3 p-4 justify-items-center">
        <div className="hidden lg:block"></div>
        <div className="w-full flex flex-col items-center justify-center">
          <p>
            <span className="hidden lg:inline-block text-xs">Website by</span>
            <span className="text-xs mx-2">Kandapalli</span>
          </p>
          <p className="text-xs">&copy;2024 "All Roght Reserved" </p>
        </div>
        <div className="w-full my-2 flex items-center justify-center space-x-3">
          <FacebookRoundedIcon fontSize="large" />
          <InstagramIcon fontSize="large" />
        </div>
      </div>
    </>
  );
};

export default Footer;
