import React from "react";
import Link from "next/link";
import classNames from "classnames";

const Sidebar = ({ hideSidebar, setHideSidebar }) => {
  return (
    <div
      className={classNames(
        "bg-black fixed w-full h-full z-10  right-0 opacity-95 transition-all",
        hideSidebar ? "top-0" : "-top-full"
      )}
    >
      <div className="w-full flex justify-between p-4">
        <img src="./assets/Fav-256px.svg" className="w-1/12" />
        <img src="./assets/close.svg" onClick={() => setHideSidebar(false)} />
      </div>
      <ul className=" absolute w-full flex flex-col gap-10 text-white text-center justify-center py-8">
        <li>
          <Link href={"/"}>About</Link>
        </li>
        <li>
          <Link href={"/"}>How It Work</Link>
        </li>
        <li>
          <Link href={"/"}>Pricing</Link>
        </li>
        <li>
          <Link href={"/"}>Solution</Link>
        </li>
        <li>
          <Link href={"/"}>Features</Link>
        </li>
        <li>
          <Link href={"/"}>Login</Link>
        </li>
        <li className="py-2 px-6 rounded-full bg-white text-black w-4/12 mx-auto">
          <Link href={"/"}>Register</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
