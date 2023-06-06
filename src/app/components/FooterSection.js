import React from "react";

const FooterSection = () => {
  return (
    <div className="bg-white">
      <div className="w-10/12 p-4 mx-auto flex flex-row justify-between items-center mobile:flex-col items-center laptop:flex-row">
        <img src="./assets/logo-dark.svg" />
        <ul className=" flex gap-4 font-effra-medium mobile:flex-col items-center py-6 laptop:flex-row">
          <li>Privacy Policy</li>
          <li>Terms & Condition</li>
          <li>Contact us</li>
          <li>Careers</li>
        </ul>
      </div>
    </div>
  );
};

export default FooterSection;
