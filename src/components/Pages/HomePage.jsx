import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const toyImage =
  "https://s3-alpha-sig.figma.com/img/98ec/022a/d847d570bc347d7efbac5703c9b828f8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WoBaUDX6Ym8Xl19wu2yrgfjShyp92BbtRBTLHZaTTWOcB2c03iUwBXMC1hUCZ2qLh3GMIk2rvEv1c9DhPELyPIWJBEv0nCLMUT5704RSCsT6tXeZUs7CK3ZhLF~00DPQcfT-Qypq1-lB3KeUCDstq8BBNWyns-jAswNu43VCSqe3yQ~DP~E3rPrSY6WaJ7xWeBZZ1DR77jzvMDPeZC-gZ5ayAlqug7HOOAZpP21MklVm5E1PWFFGWUtl-N1klUmeozfocAEPo2naOxzZ0jsd3lPm0S2uej~~RMg1NpSN3qk-16db6e1idFg6mHocqg9hO6n8C6uiQeHWuhGVFmvl8w__";

const HomePage = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    setEmail("");
  };

  return (
    <>
        <Navbar />
      <div className="bg-primary pt-[50px] min-h-screen flex flex-row">
        <div className="hidden w-[20%] lg:inline-flex p-2">
          <p className="absolute text-sm text-gray-500 top-[210px] left-[50px] -rotate-90">
            Embrace the heritage of Kondapalli
          </p>
        </div>
        <div className="w-[60%] flex justify-center items-center">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center space-x-3">
              <div className="h-[2px] w-[50px] bg-black"></div>
              <div className="text-2xl lg:text-2xl mb-1 lg:mb-2">
                COMING SOON
              </div>
              <div className="h-[2px] w-[50px] bg-black"></div>
            </div>

            <h1 className="font-syne w-[80%] mt-28">
              <span className="text-5xl font-bold md:text-[64px] lg:mt-32 pr-[120px]">
                Get
              </span>
              <span>
                <img
                  src={toyImage}
                  className="absolute w-[152.98px] h-[248.59px] top-[104px] left-[540px] rotate-[11.75deg]"
                />
              </span>
              <span className="text-5xl font-bold md:text-[64px] lg:mt-32">
                Notified When We Launch
              </span>
            </h1>
            <div className="w-2/3 p-6 mt-5">
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
                  className="absolute z-10 ml-[-115px] mt-[4.5px] bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
                >
                  Notify Me
                </button>
              </form>
            </div>
            <div className="mt-1">
              <p className="text-xs lg:text-sm">
                We're currently working on creating something fantastic
              </p>
              <p className="text-xs lg:text-sm">
                We'll be here soon, subscribe to be notified
              </p>
            </div>
          </div>
        </div>
        <div className="lg:block w-[20%] hidden p-2 ">
          <p className="text-sm text-gray-500 text-center">@2024 </p>
          <p className="absolute top-[480px] text-sm text-gray-500 text-right rotate-90">
            Experience the Magic of Handmade Artistry
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
