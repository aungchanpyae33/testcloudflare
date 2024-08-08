import React, { useEffect } from "react";

function CloseFunctoion(
  funvalue: boolean,
  fun: React.Dispatch<React.SetStateAction<boolean>>,
  TargetElement: React.MutableRefObject<HTMLDivElement | null>
) {
  useEffect(() => {
    function closeSearch(e: MouseEvent | TouchEvent) {
      if (TargetElement.current && funvalue) {
        // console.log("men");
        // console.log(e.target);
        fun(TargetElement.current?.contains(e.target as Node));
      }
    }
    window.addEventListener("click", closeSearch);
    return () => {
      return window.removeEventListener("click", closeSearch);
    };
  }, [TargetElement, fun, funvalue]);
}

export default CloseFunctoion;
