import React from "react";
import Navbar from "./Navbar";
import Button from "../utility/Button";
// import mobileScreen from "./assets/mobile.png";

const HeroSection = () => {
  return (
    <>
      <div className="bg-hero ">
        <Navbar />
        <div className="tablet:w-10/12 laptop:w-7/12 text-white mx-auto text-center py-20 mobile:w-11/12 py-10">
          <h1 className="laptop:text-7xl font-effra-heavy mobile:text-4xl tablet:text-6xl w-full">
            Minimize Your tabs.
            <br />
            Find the Trends!
          </h1>
          <p className="py-8 font-effra-medium text-[#8B8B8B] w-8/12 mx-auto mobile:w-11/12">
            Don’t let your computer memories consumes all of those browser tabs.
            Findtrend let you gathers all of your favorite website into one
            place.
          </p>
          <Button variant={"primary-btn"}> Get Started 🔥</Button>
        </div>
        <div className="laptop:w-8/12 mx-auto pb-16">
          <img
            src="./assets/tab/btn-hero-socmed.svg "
            className="mobile:hidden tablet:inline-block"
          />
          <img
            src="./assets/tab/col-hero.png "
            className="tablet:hidden mobile:mx-auto"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
