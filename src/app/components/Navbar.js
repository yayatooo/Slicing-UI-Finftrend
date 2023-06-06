"use client";
import React, { useState } from "react";
import Link from "next/link";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [hideSidebar, setHideSidebar] = useState(false);
  return (
    <>
      <div className="w-10/12 flex justify-between items-center py-8 font-effra-reguler mx-auto">
        <img src="./assets/logo-color.svg" alt="logo" />
        <div>
          <ul className=" laptop:flex gap-10 text-white mobile:hidden">
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
          </ul>
          <img
            src="./assets/humberger-menu.svg"
            className="laptop:hidden"
            onClick={() => setHideSidebar(true)}
          />
        </div>
        <div className="laptop:flex gap-10 text-white mobile:hidden ">
          <button>Login</button>
          <button className="py-2 px-6 rounded-full bg-white text-black">
            Register
          </button>
        </div>
      </div>
      <Sidebar hideSidebar={hideSidebar} setHideSidebar={setHideSidebar} />
    </>
  );
};

export default Navbar;
