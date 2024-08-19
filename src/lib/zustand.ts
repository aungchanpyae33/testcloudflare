import { create } from "zustand";
interface SongState {
  songCu: Record<string, string>;
  Isplay: Record<string, boolean>;
}

interface SongActions {
  updateSongCu: (newSong: SongState["songCu"]) => void;
  setPlay: (key: string, play: boolean) => void;
}
export const Song = create<SongState & SongActions>((set) => ({
  songCu: {},
  updateSongCu: (newSong: any) =>
    set(() => ({
      songCu: { ...newSong },
    })),
  Isplay: {},
  setPlay: (key: string, play: boolean) =>
    set((state: any) => ({
      Isplay: {
        [key]: play !== undefined ? play : !state.Isplay[key],
      },
    })),
}));
