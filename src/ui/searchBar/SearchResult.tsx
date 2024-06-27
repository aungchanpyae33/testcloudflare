import React, { useEffect, useState } from "react";
import { Movie } from "@/database/data";
interface NaviState {
  run: boolean;
  number: number; // Allow null for no selection
}
interface SetNavi {
  (newState: React.SetStateAction<NaviState>): void; //doesnot return not anything expect from navistate
}
interface prop {
  // show: boolean;
  // setshow: React.Dispatch<React.SetStateAction<boolean>>;
  data: Movie[] | [];
  inputRef: React.MutableRefObject<HTMLInputElement | null>;
}
function SearchResult({ data, inputRef }: prop) {
  const [navi, setnavi] = useState<NaviState>({
    run: true,
    number: -1,
  });
  useEffect(() => {
    const copyRef = inputRef?.current;
    function naviGateTB(e: string) {
      console.log("render navi", e);
      const searchData = data?.length;

      if (searchData > 0) {
        if (e === "ArrowUp") {
          setnavi((pre) => {
            if (pre.number === -1) {
              return { run: false, number: searchData - 1 };
            } else {
              return { run: false, number: pre.number - 1 };
            }
          });
        } else if (e === "ArrowDown") {
          setnavi((pre) => {
            if (pre.number === searchData - 1) {
              return { run: false, number: -1 };
            } else {
              return { run: false, number: pre.number + 1 };
            }
          });
        }
      }
    }
    const handleKeyDown = (e: KeyboardEvent) => naviGateTB(e.key);
    copyRef?.addEventListener("keydown", handleKeyDown);

    return () => {
      console.log("unsed");
      setnavi({
        run: true,
        number: -1,
      });
      copyRef?.removeEventListener("keydown", handleKeyDown);
    };
  }, [data?.length, inputRef]);
  return (
    <div className="SearchResult w-full absolute bg-white rounded-b-md border-none shadow-md shadow-overlay">
      {data?.map((item: Movie, index: number) => (
        <div
          className={`pl-9
          ${index === navi.number && !navi.run && "bg-red-600"}
          ${navi.run && "hover:bg-red-600"}
          `}
          style={{ cursor: "pointer" }}
          key={item.year}
          onMouseMove={() => {
            if (navi.number !== index) {
              setnavi({
                run: true,
                number: index,
              });
            }
          }}
        >
          <a
            href="
            "
          >
            {item.year}
          </a>
        </div>
      ))}
    </div>
  );
}

export default SearchResult;
