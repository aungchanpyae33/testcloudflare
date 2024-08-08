import React from "react";
import SearchBar from "@/ui/searchBar/SearchBar";
import { getData } from "@/database/data";
import PlaylistContainer from "@/ui/playlist/PlaylistContainer";
import Container from "@/ui/albumContainer/Container";
import { Song } from "@/lib/zustand";
import ParentComponent from "@/ui/albumContainer/Container";
const playlist = ["one", "two"];
async function page({
  searchParams,
}: {
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";

  const data = await getData(query);

  return (
    <div className="w-full">
      <SearchBar data={data} />
      <Container songs={playlist} description={"hi this is song"} />
      <Container songs={playlist} description={"hi"} />{" "}
      <Container songs={playlist} description={"hi"} />{" "}
      <Container songs={playlist} description={"hi"} />{" "}
      <Container songs={playlist} description={"hi"} />{" "}
      <Container songs={playlist} description={"hi"} />{" "}
      <Container songs={playlist} description={"hi"} />{" "}
      <Container songs={playlist} description={"hi"} />
    </div>
  );
}
export default page;
