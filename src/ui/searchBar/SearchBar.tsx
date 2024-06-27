"use client";
import React, { useRef } from "react";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import SearchResult from "./SearchResult";
import { Movie } from "@/database/data";

function SearchBar({ data }: { data: Movie[] }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }
  return (
    <div className="SearchContainer w-[70%] z-10 mx-auto relative ">
      <div className="  max-w-[600px] w-[100%] mx-auto ">
        <label className="">
          <span className="sr-only">Search</span>
          <input
            className="placeholder:text-slate-400 block bg-white w-full   border border-slate-300  py-2 pl-9  shadow-sm focus:outline-none sm:text-sm"
            placeholder="Search for song and artist"
            type="search"
            name="search"
            autoComplete="off"
            ref={inputRef}
            // prevent up and down for displaying search list
            onKeyDown={(e) => {
              if (e.key === "ArrowUp") {
                e.preventDefault();
              }
            }}
            onChange={(e) => {
              handleSearch(e.target.value);
            }}
          />
        </label>
        <SearchResult data={data} inputRef={inputRef} />
      </div>
    </div>
  );
}

export default SearchBar;
