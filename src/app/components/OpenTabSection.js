import React from "react";

const OpenTabSection = () => {
  return (
    <>
      <div className="bg-primary w-full">
        <div className="flex flex-col w-10/12 mx-auto items-center py-28 mobile:w-11/12 mx-auto">
          <h1 className="text-7xl font-effra-heavy py-16 mobile:text-4xl">
            Open new tabs is sh*t
          </h1>
          <div className="laptop:w-5/12 py-16 px-12 bg-gray-3 rounded-xl mobile: w-full py-8 px-6 tablet:w-10/12">
            <img src="./assets/tab/tab5.svg" className="mx-auto" />
          </div>
          <p className="py-16 font-effra-medium text-black w-6/12 mx-auto text-center mobile:w-11/12">
            A solution for your browser tabs and don’t make your device get
            slower over time. Get ease and faster to discover a trend with just
            one tab.
          </p>
        </div>
      </div>
    </>
  );
};

export default OpenTabSection;
