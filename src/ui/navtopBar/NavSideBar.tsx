"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useState } from "react";
function NavSideBar() {
  const [open, setopen] = useState(false);
  return (
    <div>
      <ul
        className={clsx(
          "absolute bottom-0 duration-500  text-center left-0  translate-y-[99.9%] h-[80svh]  flex flex-col items-center  rounded-b-sm bg-green-900",
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
        <Link href={"/three"}>three</Link>
        <li>four</li>
      </ul>
    </div>
  );
}

export default NavSideBar;
