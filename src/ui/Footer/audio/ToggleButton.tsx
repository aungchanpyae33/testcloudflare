import DataContext from "@/lib/MediaSource/ContextMedia";
import { Song } from "@/lib/zustand";
import { useContext, useEffect } from "react";
import ToggleElement from "./ToggleElement";

function ToggleButton() {
  const { dataAudio } = useContext(DataContext);
  const play = Song((state: any) => state.play);
  const setPlay = Song((state: any) => state.setPlay);
  useEffect(() => {
    if (dataAudio.current?.readyState) {
      if (play) {
        dataAudio.current.play();
      } else {
        dataAudio.current.pause();
      }
    }
  }, [play, dataAudio]);
  return (
    <ToggleElement play={play} setPlay={setPlay} audioBar={false} url={""} />
  );
}

export default ToggleButton;
