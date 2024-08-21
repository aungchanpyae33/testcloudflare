import { Song, SongFunction } from "@/lib/zustand";
import React, { useEffect, useRef, useState } from "react";
import type { SongDetail } from "@/lib/zustand";
export function Component1() {
  return <p>hi</p>;
}

export function Component2() {
  return <p>hello</p>;
}

const ToggleElement = ({ url, sege, duration }: SongDetail) => {
  const Isplay = SongFunction((state: any) => state.Isplay[url || ""]);
  const songCu = Song((state: any) => state.songCu[url || ""]);
  const setPlay = SongFunction((state: any) => state.setPlay);
  const updateSongCu = Song((state: any) => state.updateSongCu);

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

            updateSongCu({ [url || ""]: url, sege, duration });
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
};

export default ToggleElement;
