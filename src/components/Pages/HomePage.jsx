import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
const toyImage1 =
  "https://s3-alpha-sig.figma.com/img/98ec/022a/d847d570bc347d7efbac5703c9b828f8?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=WoBaUDX6Ym8Xl19wu2yrgfjShyp92BbtRBTLHZaTTWOcB2c03iUwBXMC1hUCZ2qLh3GMIk2rvEv1c9DhPELyPIWJBEv0nCLMUT5704RSCsT6tXeZUs7CK3ZhLF~00DPQcfT-Qypq1-lB3KeUCDstq8BBNWyns-jAswNu43VCSqe3yQ~DP~E3rPrSY6WaJ7xWeBZZ1DR77jzvMDPeZC-gZ5ayAlqug7HOOAZpP21MklVm5E1PWFFGWUtl-N1klUmeozfocAEPo2naOxzZ0jsd3lPm0S2uej~~RMg1NpSN3qk-16db6e1idFg6mHocqg9hO6n8C6uiQeHWuhGVFmvl8w__";
const toyImage2 =
  "https://s3-alpha-sig.figma.com/img/74d3/e703/42d730d1a37d90f6c3cac26b67ca83c4?Expires=1732492800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=n1ezist~ReSwM7g-3IF9ksuMPfuJ~1AYPwTioYIJlD0g95lV0PofS9X7lfRP0oe7ENCFl1gpdFmxd4qMIwvFz~zlt3knAT6tRd276E0rgdnbQna-mofQepb2orrddCVr2tp5pWKuc2y8vkCdN7N3xtRR1OpoEDvMbsEhHrEmawHERdbEaLWysCvoWSAC3~t3sH4MjnEZctKUbKQer3hgQDLs6gB4j84fp58BLEtP0gxg9D5rStBF2a9t6~Y~OQ84A6L2ZyfGYJmpKdqkj3KheUVgaR9W-yVeRt97pDj817121wZ8mlMvIToGGITXvCCmVBEFnyBd4UnRLrTaOuyQXg__";

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
        <div className="w-full lg:w-[60%] lg:flex justify-center items-center">
          <div
            id="Ellipse27"
            className="absolute bg-ellipse27 blur-xl h-[326px] w-[326px] z-30 -left-[170px] bottom-[30px] rounded-full"
          ></div>
          <div
            id="Ellipse28"
            className="absolute bg-ellipse28 blur-3xl h-[326px] w-[326px] z-30 -right-[180px] top-[40px] rounded-full"
          ></div>

          <div className="text-center mt-5 lg:mt-1 mb-2 lg:mb-16">
            <div className="inline-flex items-center justify-center space-x-3 mb-1 lg:mb-5">
              <div className="h-[2px] w-[50px] bg-black"></div>
              <div className="text-lg lg:text-2xl mb-1 lg:mb-2">
                COMING SOON
              </div>
              <div className="h-[2px] w-[50px] bg-black"></div>
            </div>

            <div className="flex flex-col justify-center items-center">
              <div className="font-syne w-full lg:w-[80%] mt-8 lg:mt-28 flex items-center justify-center">
                <p className="text-5xl font-bold md:text-[64px]">
                <img
                    src={toyImage2}
                    alt="toy_image"
                    className="absolute lg:hidden w-[41px] h-[67px] top-[120px] left-[82px] rotate-[-11.75deg]"
                  />
                  <span className="pl-10 pr-10 lg:pl-0 lg:pr-40">Get</span>
                  <img
                    src={toyImage1}
                    alt="toy_image"
                    className="absolute w-[41px] lg:w-[152.98px] h-[67px] lg:h-[240.59px] top-[120px] left-[240px] lg:top-[114px] lg:left-[540px] rotate-[11.75deg]"
                  />{" "}
                  Notified When We Launch
                </p>
              </div>
              <div className="w-full lg:w-2/3 p-3 mt-1">
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
                    className="absolute z-10 ml-[-110px] lg:ml-[-115px] mt-[5px] bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-full"
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
        </div>
        <div className="lg:block w-[20%] hidden p-2 ">
          <p className="text-sm text-gray-500 text-center">@2024 </p>
          <p className="absolute bottom-[250px] right-[60px] text-sm text-gray-500 text-right rotate-90">
            Experience the Magic of Handmade Artistry
          </p>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
