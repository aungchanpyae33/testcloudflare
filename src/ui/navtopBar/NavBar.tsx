import Link from "next/link";

function NavBar() {
  return (
    <nav className="navBarContainer flex w-full fixed  top-0  bg-red-500 z-10 h-[50px] items-center">
      <div className="w-[50px]"></div>
      <div className="logo flex-1 pl-2">
        <Link href="/">Bubble</Link>
      </div>

      <ul className="navLinkContainer w-[40%] flex flex-wrap   bg-green-500 justify-around">
        <li className="cursor-pointer">
          <a href="">About</a>
        </li>
        <li className="cursor-pointer">
          <Link href={"/logout"}>sing out</Link>
        </li>
        <li className="cursor-pointer">
          <Link href={"/login"}>sign in</Link>
        </li>
        <li className="cursor-pointer">
          <a href="">github</a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
