// "use client";
import Link from "next/link";
import React from "react";
// import { validateRequest } from "@/auth/auth";
// import { turso } from "@/database/turso";
// import { Movie } from "@/database/data";
// import { redirect } from "next/navigation";
// import PlaylistContainer from "@/ui/playlist/PlaylistContainer";
// import { Song } from "@/lib/zustand";
// import Album from "@/ui/albumContainer/Album";
// async function get() {
//   const user = await validateRequest();
//   return user;
// }

async function page() {
  // const updateSong = Song((state: any) => state.updateSong);
  // console.time("b");
  // // const { rows } = await turso.execute("SELECT year FROM movies");
  // // console.timeEnd("b");
  // // const data: Movie[] = rows.map((row: any) => ({
  // //   year: row.year,
  // }));
  return (
    <div>
      <button className="bg-blue-700">play song</button>
      <Link href={"genre/supanova"}>hello</Link>
      <Link href={"album/supanova"}>hello album</Link>
    </div>
  );
}
export default page;
