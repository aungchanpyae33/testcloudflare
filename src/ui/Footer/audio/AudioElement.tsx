import { TimeFormat } from "@/lib/TimeFormat";
import { ReactNode, useContext, useRef, useState } from "react";
import DataContext from "@/lib/MediaSource/ContextMedia";
import AudioSeekBar from "./AudioSeekBar";
import TimeIndicatorCur from "./TimeIndicatorCur";
export interface PropTime {
  cur: number;
  durationTime: number | undefined;
}
function AudioElement({
  firstChild,
  secondChild,
}: {
  firstChild: ReactNode;
  secondChild: ReactNode;
}) {
  const dataInput = useRef<HTMLInputElement>(null);

  const [bottom, setBottom] = useState(true);
  const dataCur = useRef<HTMLSpanElement>(null);
  const { dataAudio, duration } = useContext(DataContext);
  console.log("render audioELement");
  return (
    <>
      <audio
        ref={dataAudio}
        autoPlay
        hidden
        onLoadedMetadata={() => {
          console.log(dataAudio.current?.duration);
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
      <div className="flex justify-between">
        {firstChild}
        <TimeIndicatorCur dataCur={dataCur} />
        <AudioSeekBar
          dataCur={dataCur}
          bottom={bottom}
          setBottom={setBottom}
          duration={duration}
          dataInput={dataInput}
        />
        {secondChild}
      </div>
    </>
  );
}

export default AudioElement;
