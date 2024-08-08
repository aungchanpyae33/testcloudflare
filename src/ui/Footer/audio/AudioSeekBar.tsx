import DataContext from "@/lib/MediaSource/ContextMedia";
import { playBackRate } from "@/lib/MediaSource/playBackRate";
import { TimeFormat } from "@/lib/TimeFormat";
import { useContext } from "react";
import { eventProp } from "@/lib/MediaSource/playBackRate";
function AudioSeekBar() {
  const {
    dataInput,
    duration,
    dataAudio,
    setBottom,
    bottom,
    dataCur,
    loadNextSegment,
    segNum,
  } = useContext(DataContext);

  function seekFunction(e: eventProp["e"]) {
    if (!bottom) {
      segNum.current = playBackRate({ dataAudio, e });
      loadNextSegment();
    }
    setBottom(true);
  }
  return (
    <input
      type="range"
      id="seek-slider"
      ref={dataInput}
      max={duration.durationTime}
      className="w-[50%]"
      onKeyUp={(e) => {
        seekFunction(e);
      }}
      onMouseUp={(e) => {
        seekFunction(e);
      }}
      onTouchEnd={(e) => {
        seekFunction(e);
      }}
      // prevent timeupdate
      onTouchStart={() => setBottom(false)}
      onMouseDown={() => setBottom(false)}
      onKeyDown={() => setBottom(false)}
      // show changeDuration while seeking without effecting the audio
      onInput={(e) => {
        dataCur.current!.textContent = TimeFormat(+e.currentTarget.value);
      }}
    />
  );
}

export default AudioSeekBar;
