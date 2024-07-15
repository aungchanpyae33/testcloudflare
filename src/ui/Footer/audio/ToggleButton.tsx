import DataContext from "@/lib/MediaSource/ContextMedia";
import { useContext } from "react";

function ToggleButton({ text1, text2 }: { text1: string; text2: string }) {
  const { dataAudio, play, setPlay } = useContext(DataContext);
  return (
    <button
      aria-label="Play or Pause Audio"
      onClick={() => {
        if (!play) {
          dataAudio.current?.play();
          setPlay(true);
        } else {
          dataAudio.current?.pause();
          setPlay(false);
        }
      }}
      className="w-[50px] bg-red-300"
      id="play-icon"
    >{`${play ? text2 : text1}`}</button>
  );
}

export default ToggleButton;
