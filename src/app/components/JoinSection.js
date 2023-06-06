import React from "react";
import Button from "../utility/Button";

const JoinSection = () => {
  return (
    <div className="bg-primary w-full">
      <div className="w-10/12 mx-auto py-28 flex flex-col justify-center ">
        <h1 className="laptop:text-7xl font-effra-heavy text-center text-black mobile:text-4xl ">
          Join us on email
        </h1>
        <h1 className="laptop:text-7xl font-effra-heavy text-center text-[#87D322] mobile:text-4xl">
          More trending topic
        </h1>
        <div className="pt-10 mx-auto">
          <Button variant={"black-btn"}>Join Now</Button>
        </div>
      </div>
    </div>
  );
};

export default JoinSection;
