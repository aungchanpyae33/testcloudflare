import Link from "next/link";
import NavSideBar from "./NavSideBar";
import clsx from "clsx";
function NavBar() {
  return (
    <nav className="navBarContainer flex w-full sticky top-0 bg-red-500  z-50 h-[10vh] items-center">
      <Link href="/" className="Logo flex-1">
        Bubble
      </Link>
      <ul className="navLinkContainer w-[40%] flex   bg-green-500 justify-around">
        <li className="cursor-pointer">
          <a href="">About</a>
        </li>
        <li className="cursor-pointer">
          <Link href={"/login"}>sing up</Link>
        </li>
        <li className="cursor-pointer">
          <Link href={"/login"}>sing in</Link>
        </li>
        <li className="cursor-pointer">
          <a href="">github</a>
        </li>
      </ul>
      <NavSideBar />
    </nav>
  );
}

export default NavBar;
