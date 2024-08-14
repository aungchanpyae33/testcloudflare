import { RefObject } from "react";
import type { LinkProps } from "next/link";
function ArrowNavi(
  e: React.KeyboardEvent,

  dataInc: React.MutableRefObject<number>,
  refs: React.MutableRefObject<RefObject<HTMLAnchorElement>[]>
) {
  if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
    e.preventDefault();
    e.stopPropagation();
    console.log(dataInc.current);
    if (e.key === "ArrowRight") {
      dataInc.current >= 6 ? (dataInc.current = 6) : dataInc.current++;
    }
    if (e.key === "ArrowLeft") {
      dataInc.current <= 0 ? (dataInc.current = 0) : dataInc.current--;
    }

    refs.current[dataInc.current].current!.focus();
    refs.current[dataInc.current].current!.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  }
}
export default ArrowNavi;
