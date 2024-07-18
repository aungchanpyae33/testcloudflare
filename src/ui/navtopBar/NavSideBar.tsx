"use client";
import clsx from "clsx";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import NavSideLink from "./NavSideLink";

import MenuItem from "./MenuItem";
import OverLay from "./OverLay";
import CloseFunctoion from "@/lib/CloseFunction";
function NavSideBar() {
  const DivRef = useRef<HTMLUListElement | null>(null);
  const [open, setopen] = useState(false);

  // CloseFunctoion(open, setopen, DivRef);
  return (
    <div>
      <ul
        ref={DivRef}
        className={clsx(
          "fixed top-0 z-50 box-border transition-[width] duration-300 text-center left-0 h-[100%] overflow-auto  flex flex-col bg-green-500  rounded-b-sm  ",
          {
            "w-[50px]": open === false,
            "w-[200px]": open === true,
          }
        )}
      >
        <li className=" min-h-[50px] sticky top-0 z-50 flex items-center">
          <p onClick={() => setopen(!open)} className=" w-[50px] z-50">
            open
          </p>
          <MenuItem open={open}>
            <Link href={"/"}>Bubble</Link>
          </MenuItem>
        </li>
        <NavSideLink
          url={"/search"}
          icon="search"
          desp="search bar"
          open={open}
        />
        <NavSideLink
          url={"/search"}
          icon="search"
          desp="search bar"
          open={open}
        />
        <NavSideLink
          url={"/search"}
          icon="search"
          desp="search bar"
          open={open}
        />{" "}
        <NavSideLink
          url={"/search"}
          icon="search"
          desp="search bar"
          open={open}
        />{" "}
        <NavSideLink
          url={"/search"}
          icon="search"
          desp="search bar"
          open={open}
        />
      </ul>{" "}
      {open && <OverLay setopen={setopen} />}
    </div>
  );
}

export default NavSideBar;
