"use client";

import { headerListItem } from "@/constants";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { IoCloseSharp } from "react-icons/io5";
import { motion, useReducedMotion } from "framer-motion";

const Header = () => {
  const [active, setActive] = useState("");
  const [showMenu, setShowMenu] = useState(false);

  const pathName = usePathname();

  useEffect(() => {
    setActive(pathName);
  }, [pathName]);

  return (
    <div className="w-full h-20 border-b-[1px] border-gray-500 px-2 bg-white">
      <div className="h-full max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href={"/"} className="relative group overflow-hidden">
          <p className="text-2xl font-bold">LOGO Text/IMG</p>
          <span className="absolute bottom-0 w-full h-[2px] inline-block bg-primeColor -translate-x-[100%] group-hover:translate-x-0 transition-transform duration-700"></span>
        </Link>
        {/* Logo */}

        {/* Small Logo  */}
        <div
          onClick={() => setShowMenu(true)}
          className="w-7 h-5 group lg:hidden flex flex-col justify-between overflow-hidden cursor-pointer"
        >
          <span className="w-full h-[3px] bg-gray-500 inline-flex group-hover:bg-primeColor -translate-x-1 group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500 group-hover:bg-primeColor -translate-x-[40%] group-hover:translate-x-0 transition-transform duration-500"></span>
          <span className="w-full h-[3px] bg-gray-500  group-hover:bg-primeColor "></span>
        </div>

        {/* Small Scree Menu */}
        {showMenu && (
          <div className="w-full h-screen fixed lg:hidden top-0 left-0 bg-darkGreen bg-opacity-90 z-50">
            <div
              initial={{ x: 10, opacity: 0 }}
              animate={{ x: 0, opactiy: 1 }}
              transition={{ duration: 0.2 }}
              className="w-[70%] h-full bg-darkGreen p-4 relative"
            >
              <span
                onClick={() => setShowMenu(false)}
                className="absolute right-2 top-8 text-3xl text-red-400 hover:text-red-600 cursor-pointer duration-300"
              >
                <IoCloseSharp />
              </span>
              <Link href={"/"} onClick={() => setShowMenu(false)}>
                <p className="text-2xl font-bold text-white mb-4">North Wave</p>
              </Link>
              <ul className="flex flex-col text-gray-300 uppercase text-sm font-semibold gap-3">
                {headerListItem.map((item) => (
                  <Link key={item._id} href={item.link}>
                    <li
                      onClick={() => setShowMenu(false)}
                      className="hover:text-white cursor-pointer duration-300"
                      key={item._id}
                    >
                      {item.title}
                    </li>
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        )}

        {/* Items */}
        <div className="hidden lg:inline-flex items-center gap-8 text-sm uppercase font-semibold tracking-wide">
          <ul className="flex gap-8">
            {headerListItem.map((item) => (
              <Link href={item.link}>
                <li
                  className={`${active === item.link && "text-primeColor"}
                  text-gray-600 hover:text-primeColor cursor-pointer duration-300 group relative`}
                  key={item._id}
                >
                  {item.title}
                  <span
                    className={`${
                      active === item.link && "scale-100"
                    } absolute w-full scale-0 group-hover:scale-100 inline-block h-[2px] -bottom-[1px] left-0 bg-primeColor duration-500`}
                  ></span>
                </li>
              </Link>
            ))}
          </ul>
          <button className="w-36 h-10 bg-darkGreen text-white uppercase rou hover:bg-primeColor duration-300 tracking-wide">
            Hire Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
