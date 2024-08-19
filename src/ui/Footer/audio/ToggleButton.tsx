import DataContext from "@/lib/MediaSource/ContextMedia";
import { Song } from "@/lib/zustand";
import { useContext, useEffect } from "react";

function ToggleButton() {
  const { dataAudio } = useContext(DataContext);

  // Get the first key-value pair from Isplay
  const [firstKey, firstIsplay] = Song(
    (state: any) => Object.entries(state.Isplay)[0] || []
  );
  const setPlay = Song((state: any) => state.setPlay);
  console.log("render togglebutton");
  useEffect(() => {
    if (dataAudio.current?.readyState) {
      if (firstIsplay) {
        dataAudio.current.play();
      } else {
        dataAudio.current.pause();
      }
    }
  }, [firstIsplay, dataAudio]);

  return (
    <button
      className="w-[50px] bg-red-300"
      id="play-icon"
      onClick={() => {
        setPlay(firstKey, undefined); // Use the first key to toggle the state
      }}
    >{`${firstIsplay ? "pause" : "play"}`}</button>
  );
}

export default ToggleButton;
