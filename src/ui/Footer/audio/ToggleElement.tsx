import { Song } from "@/lib/zustand";
import React, { useEffect, useRef, useState } from "react";

interface propToggle {
  url: string | undefined;
}

export function Component1() {
  return <p>hi</p>;
}

export function Component2() {
  return <p>hello</p>;
}

const ToggleElement = React.memo(({ url }: propToggle) => {
  const Isplay = Song((state: any) => state.Isplay[url || ""]);
  const songCu = Song((state: any) => state.songCu[url || ""]);
  const setPlay = Song((state: any) => state.setPlay);

  const updateSongCu = Song((state: any) => state.updateSongCu);
  const updateSong = Song((state: any) => state.updateSong);
  console.log("render toggleElement");
  return (
    <>
      <button
        aria-label="Play or Pause Audio"
        onClick={() => {
          // console.log("erro");
          if (url === songCu) {
            // console.log("a");
            setPlay(url || "", undefined); // Toggle play state for current song
          } else {
            // console.log("b");
            updateSong({ song_name: url });
            updateSongCu({ [url || ""]: url });
            // Update song and play
            setPlay(url || "", true);
          }
        }}
        className="w-[50px] bg-red-300"
        id="play-icon"
      >
        <p>{url === songCu && Isplay ? "pause" : "play"}</p>
      </button>
    </>
  );
});

export default ToggleElement;
