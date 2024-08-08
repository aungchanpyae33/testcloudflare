"use client";
import { Song } from "@/lib/zustand";

function Track({ name, duration }: { name: string; duration: string }) {
  const song = Song((state: any) => state.song);
  const url = "https://s3.tebi.io/test1345/init.mp4";

  const updateSong = Song((state: any) => state.updateSong);
  return (
    <div
      className=" p-3 border border-black shadow-md mx-3 flex justify-between mb-2"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          updateSong({ song_name: url });
        }
      }}
      onClick={() => {
        console.log("be");
        updateSong({ song_name: url });
        console.log(song.song_name);
      }}
    >
      <span>{name}</span>
      <span>{duration}</span>
    </div>
  );
}

export default Track;
