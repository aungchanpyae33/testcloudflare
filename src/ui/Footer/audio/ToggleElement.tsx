import { Song } from "@/lib/zustand";

interface propToggle {
  play: boolean;
  setPlay: () => void;
  audioBar: boolean;
  url: string;
}
function ToggleElement({ play, setPlay, audioBar, url }: propToggle) {
  const updateSong = Song((state: any) => state.updateSong);

  return (
    <button
      aria-label="Play or Pause Audio"
      onClick={() => {
        if (audioBar) {
          updateSong({ song_name: url });
        }
        setPlay();
      }}
      className="w-[50px] bg-red-300"
      id="play-icon"
    >{`${play ? "pause" : "play"}`}</button>
  );
}

export default ToggleElement;
