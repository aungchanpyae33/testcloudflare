import { useEffect, useState } from "react";

const useBodyScrollLock = (): [
  boolean,
  React.Dispatch<React.SetStateAction<boolean>>
] => {
  const [open, setopen] = useState(false);
  const [scrolY, setScrollY] = useState(0);
  useEffect(() => {
    if (open && window.document.body.scrollHeight >= window.innerHeight) {
      console.log("isruntwice");
      window.document.body.style.overflow = "hidden";
      // Prevent content jump
      window.document.body.style.top = `-${scrolY}px`;

      console.log(scrolY);
      window.document.body.classList.add("scrolllock");
    } else {
      // console.log("it is ok");
      // console.log(scrolY);
      window.document.body.classList.remove("scrolllock");
      window.document.body.style.overflow = "";
      window.scrollTo(0, scrolY); //reslove back to top after close menubar
      window.document.body.style.top = "";
    }
    const handleScrollLock = () => {
      !open && setScrollY(window.scrollY);
    };

    window.addEventListener("scrollend", handleScrollLock); // Update scroll position on scroll

    return () => window.removeEventListener("scrollend", handleScrollLock);
  }, [open, scrolY]);

  return [open, setopen];
};
export default useBodyScrollLock;
