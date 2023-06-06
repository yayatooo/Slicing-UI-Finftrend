"use client";
import React, { useState } from "react";
import classNames from "classnames";

export default function Switch() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <div className="flex items-center gap-x-4">
        <p
          className={classNames("text-white font-bold text-xl", {
            "text-gray-500": isChecked,
          })}
        >
          Monthly
        </p>
        <div
          onClick={() => {
            setIsChecked(!isChecked);
          }}
          className={classNames(
            "flex w-24 h-12 p-2 bg-gray-4 rounded-full items-center transition-all duration-500",
            {
              "bg-gray-4": isChecked,
            }
          )}
        >
          <span
            className={classNames("w-10 h-10 bg-primary rounded-full", {
              "ml-10": isChecked,
            })}
          />
        </div>
        <p
          className={classNames("text-white font-bold text-xl", {
            "text-gray-500": !isChecked,
          })}
        >
          Yearly
        </p>
      </div>
    </>
  );
}
