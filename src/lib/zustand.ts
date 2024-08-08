import { create } from "zustand";

export const Song = create((set) => ({
  song: {
    song_name: "",
  },
  updateSong: (newSong: any) =>
    set((state: any) => ({
      song: { ...state.song, ...newSong },
    })),
}));
