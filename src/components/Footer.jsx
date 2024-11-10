import React from "react";

const Footer = () => {
  return (
    <>
      <div className="absolute bottom-0 bg-white text-gray-500 w-full flex flex-col-reverse lg:grid lg:grid-cols-3 p-2 justify-items-center">
        <div className="hidden lg:block"></div>
        <div className="w-full flex items-center justify-center" >
          <span className="hidden lg:inline-block text-xs">Website by</span>
          <span className="text-xs mx-2">Kandapalli</span>
          <p className="text-xs">&copy;2024 "All Roght Reserved" </p>
        </div>
        <div className="w-full flex items-center justify-center"></div>
      </div>
    </>
  );
};

export default Footer;
