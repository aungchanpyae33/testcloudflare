import React, { createContext, RefObject } from "react";
import { PropTime } from "@/ui/Footer/AudioPLayer";
export interface prop {
  dataAudio: React.MutableRefObject<HTMLAudioElement | null>;
  setDuration: React.Dispatch<React.SetStateAction<PropTime>>;
  bottom: boolean;
  dataInput: React.MutableRefObject<HTMLInputElement | null>;
  dataCur: React.MutableRefObject<HTMLSpanElement | null>;
  duration: PropTime;
  setBottom: React.Dispatch<React.SetStateAction<boolean>>;
  loadNextSegment: () => void;
  segNum: React.MutableRefObject<number>;
  // play: boolean;
  // setPlay: React.Dispatch<React.SetStateAction<boolean>>;
}
const defaultDuration: PropTime = {
  cur: 0,
  durationTime: undefined,
};
const DataContext = createContext<prop>({
  dataAudio: { current: null },
  setDuration: () => {},
  bottom: true,
  dataInput: { current: null },
  dataCur: { current: null },
  segNum: { current: 1 },
  loadNextSegment: () => {},
  setBottom: () => {},
  duration: defaultDuration,
  // play: false,
  // setPlay: () => {},
});
export default DataContext;
