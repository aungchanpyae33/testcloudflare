import { Movie } from "@/database/data";
import React, { useEffect, useState } from "react";

interface NaviState {
  run: boolean;
  number: number; // Allow null for no selection
}
function useTest(
  initialState: NaviState,
  inputRef: React.MutableRefObject<HTMLInputElement | null>,
  data: Movie[]
): [NaviState, React.Dispatch<React.SetStateAction<NaviState>>] {
  const [navi, setnavi] = useState(initialState);

  useEffect(() => {
    const copyRef = inputRef.current;

    function naviGateTB(e: string) {
      const searchData = data?.length;
      if (searchData && searchData > 0) {
        if (e === "ArrowUp") {
          setnavi((pre) => ({
            run: false,
            number: pre.number === -1 ? searchData - 1 : pre.number - 1,
          }));
        } else if (e === "ArrowDown") {
          setnavi((pre) => ({
            run: false,
            number: pre.number === searchData - 1 ? -1 : pre.number + 1,
          }));
        }
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => naviGateTB(e.key);
    copyRef?.addEventListener("keydown", handleKeyDown);

    return () => {
      setnavi({ run: true, number: -1 });
      copyRef?.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return [navi, setnavi];
}
export default useTest;
