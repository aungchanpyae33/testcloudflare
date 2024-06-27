"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
function NavSideBar() {
  const [open, setopen] = useState(true);
  return (
    <div>
      <ul
        className={clsx(
          "absolute bottom-0 duration-500  text-center left-0  translate-y-[99.9%] h-[80.1svh] flex flex-col items-center bg-red-500 z-50",
          {
            "w-[10%]": open === false,
            "w-[40%]": open === true,
          }
        )}
      >
        <li
          className="bg-blue-500"
          onClick={() => {
            setopen(!open);
          }}
        >
          {open ? "close" : "open"}
        </li>
        <Link href={"/search"}>Song</Link>
        <li>three</li>
        <li>four</li>
      </ul>
    </div>
  );
}

export default NavSideBar;
