import { create } from "zustand";
export interface SongDetail {
  url: string;
  sege: number;
  duration: number;
}
interface SongState {
  songCu: Record<string, SongDetail>;
}

interface SongActions {
  updateSongCu: (newSong: SongState["songCu"]) => void;
}
interface SongFunctionState {
  Isplay: Record<string, boolean>;
}

interface SongFunctionActions {
  setPlay: (key: string, play: boolean) => void;
}
export const Song = create<SongState & SongActions>((set) => ({
  songCu: {},
  updateSongCu: (newSong: any) =>
    set(() => ({
      songCu: { ...newSong },
    })),
}));

export const SongFunction = create<SongFunctionState & SongFunctionActions>(
  (set) => ({
    Isplay: {},
    setPlay: (key: string, play: boolean) =>
      set((state: any) => ({
        Isplay: {
          [key]: play !== undefined ? play : !state.Isplay[key],
        },
      })),
  })
);
