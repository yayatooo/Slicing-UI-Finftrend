import React from "react";
import Brands from "../utility/Brands";

const PartnerSection = () => {
  return (
    <div className="py-28">
      <h1 className="text-6xl font-effra-heavy py-16 text-center mobile:text-4xl w-11/12 mx-auto">
        Findtrend make +1000 Startup grow
      </h1>
      <div className="w-10/12 flex flex-wrap justify-center gap-8 mx-auto">
        <Brands>{"./assets/brands/brand1.svg"}</Brands>
        <Brands>{"./assets/brands/brand2.svg"}</Brands>
        <Brands>{"./assets/brands/brand3.svg"}</Brands>
        <Brands>{"./assets/brands/brand4.svg"}</Brands>
        <Brands>{"./assets/brands/brand5.svg"}</Brands>
        <Brands>{"./assets/brands/brand6.svg"}</Brands>
        <Brands>{"./assets/brands/brand7.svg"}</Brands>
        <Brands>{"./assets/brands/brand8.svg"}</Brands>
        <Brands>{"./assets/brands/brand9.svg"}</Brands>
        <Brands>{"./assets/brands/brand10.svg"}</Brands>
        <Brands>{"./assets/brands/brand11.svg"}</Brands>
        <Brands>{"./assets/brands/brand12.svg"}</Brands>
        <Brands>{"./assets/brands/brand13.svg"}</Brands>
        <Brands>{"./assets/brands/brand14.svg"}</Brands>
        <Brands>{"./assets/brands/brand15.svg"}</Brands>
        <Brands>{"./assets/brands/brand16.svg"}</Brands>
      </div>
    </div>
  );
};

export default PartnerSection;
