import React from "react";
import SearchBar from "@/ui/searchBar/SearchBar";

import { getData } from "@/database/data";
import { validateRequest } from "@/auth/auth";
async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  const c = performance.now();
  const { user } = await validateRequest();
  const endb = performance.now() - c;
  const v = performance.now();
  const data = await getData(query);
  const endv = performance.now() - v;

  return (
    <div className="bg-red-50">
      <p>
        {endv} {endb}
      </p>
      <SearchBar data={data} />
    </div>
  );
}
export default page;
