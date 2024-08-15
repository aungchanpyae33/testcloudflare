import { boolean } from "drizzle-orm/mysql-core";
import { MutableRefObject } from "react";
import { create } from "zustand";
interface SongState {
  song: {
    song_name: string;
  };
  updateSong: (newSong: { song_name: string }) => void;
  play: boolean;
  setPlay: () => void;
}
export const Song = create<SongState>((set) => ({
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
