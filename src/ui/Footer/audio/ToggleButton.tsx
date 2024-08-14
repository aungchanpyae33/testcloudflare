import DataContext from "@/lib/MediaSource/ContextMedia";
import { Song } from "@/lib/zustand";
import { useContext, useEffect } from "react";

function ToggleButton({ text1, text2 }: { text1: string; text2: string }) {
  const { dataAudio } = useContext(DataContext);
  const play = Song((state: any) => state.play);
  const setPlay = Song((state: any) => state.setPlay);
  useEffect(() => {
    if (dataAudio.current) {
      if (play) {
        dataAudio.current.play();
      } else {
        dataAudio.current.pause();
      }
    }
  }, [play, dataAudio]);
  return (
    <button
      aria-label="Play or Pause Audio"
      onClick={() => {
        console.log(play);
        if (!play) {
          dataAudio.current?.play();
          setPlay({ play: true });
        } else {
          dataAudio.current?.pause();
          setPlay({ play: false });
        }
      }}
      className="w-[50px] bg-red-300"
      id="play-icon"
    >{`${play ? text2 : text1}`}</button>
  );
}

export default ToggleButton;
