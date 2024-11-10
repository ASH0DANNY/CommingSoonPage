import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, e.g., send email to backend
    console.log("Email:", email);
    setEmail(""); // Clear the email input after submission
  };

  return (
    <>
      <Navbar />
      <div className="bg-primary pt-[50px] min-h-screen grid grid-cols-1 lg:grid-cols-3 items-center">
        <div className="hidden lg:block p-2 -rotate-90">
          <p className="text-sm text-gray-500 text-right">
            Embrace the heritage of Kondapalli
          </p>
        </div>
        <div className="max-w-md w-full">
          <div className="text-center mb-8">
            <div className="grid grid-rows-3">
              <div className="h-[2px] w-[50px] bg-black"></div>
              <div className="text-2xl lg:text-3xl mb-2 lg:mb-4">COMING SOON</div>
              <div className="h-[2px] w-[50px] bg-black"></div>
            </div>

            <h1 className="text-5xl md:text-6xl lg:mt-20 font-bold">
              Get Notified When We Launch
            </h1>
            <div className="p-6 mt-5">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-primary rounded-full p-3 pr-10 border border-gray-300 mb-4"
                />
                <button
                  type="submit"
                  className="absolute ml-[-115px] mt-[4.5px] bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Notify Me
                </button>
              </form>
            </div>
            <div className="mt-5">
              <p className="text-xs lg:text-sm">
                We're currently working on creating something fantastic{" "}
              </p>
              <p className="text-xs lg:text-sm">
                We'll be here soon, subscribe to be notified
              </p>
            </div>
          </div>
        </div>
        <div className="lg:block hidden p-2 rotate-90">
          <span className="text-sm text-gray-500">@2024</span>
          <p className="text-sm text-gray-500 text-right">
            Experience the Magic of Handmade Artistry
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default HomePage;
