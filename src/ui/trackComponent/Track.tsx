"use client";
import { Song } from "@/lib/zustand";
import ToggleButton from "../Footer/audio/ToggleButton";

function Track({ name, duration }: { name: string; duration: string }) {
  const song = Song((state: any) => state.song);
  const url = "https://s3.tebi.io/test1345/init.mp4";

  const updateSong = Song((state: any) => state.updateSong);
  const play = Song((state: any) => state.play);
  const setPlay = Song((state: any) => state.setPlay);
  return (
    <div
      className=" p-3 border border-black shadow-md mx-3 flex justify-between mb-2"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          updateSong({ song_name: url });
        }
      }}
    >
      <span>{name}</span>
      <span>{duration}</span>
      <button
        onClick={() => {
          console.log("be");
          updateSong({ song_name: url });
          setPlay({ play: !play });
          console.log(song.song_name);
        }}
      >
        {play ? "pause" : "play"}
      </button>
    </div>
  );
}

export default Track;
