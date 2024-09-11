import React from "react";
import SearchBar from "@/ui/searchBar/SearchBar";
import { getData } from "@/database/data";
import PlaylistContainer from "@/ui/playlist/PlaylistContainer";
import Container from "@/ui/albumContainer/Container";
import { Song } from "@/lib/zustand";
import ParentComponent from "@/ui/albumContainer/Container";
import GenreContainer from "@/ui/genreContainer/GenreContainer";

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
      <div className="grid grid-cols-12 gap-5  p-5  bg-yellow-600">
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"sheesh"} />
        <GenreContainer description={"livemylife"} />
        <GenreContainer description={"nova"} />
        <GenreContainer description={"betterup"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
        <GenreContainer description={"supanova"} />
      </div>
    </div>
  );
}
export default page;
