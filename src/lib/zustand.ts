import { MutableRefObject } from "react";
import { create } from "zustand";

export const Song = create((set) => ({
  song: {
    song_name: "",
  },
  updateSong: (newSong: any) =>
    set((state: any) => ({
      song: { ...state.song, ...newSong },
    })),
  play: false,
  setPlay: () => set((state: any) => ({ play: !state.play })),
}));
