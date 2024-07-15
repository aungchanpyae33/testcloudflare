import { TimeFormat } from "@/lib/TimeFormat";
import { useContext } from "react";
import DataContext from "@/lib/MediaSource/ContextMedia";

function AudioElement() {
  const { dataAudio, setDuration, bottom, dataInput, dataCur } =
    useContext(DataContext);
  return (
    <audio
      hidden
      ref={dataAudio}
      autoPlay
      onLoadedMetadata={() => {
        setDuration({ cur: 0, durationTime: dataAudio.current?.duration });
      }}
      onTimeUpdate={(e) => {
        if (bottom) {
          dataInput.current!.value = e.currentTarget.currentTime.toString();
          dataCur.current!.textContent = TimeFormat(
            +e.currentTarget.currentTime
          );
        }
      }}
    ></audio>
  );
}

export default AudioElement;
