import React, { createContext, RefObject } from "react";
export interface prop {
  dataAudio: React.MutableRefObject<HTMLAudioElement | null>;
  duration: number;

  loadNextSegment: () => void;
  segNum: React.MutableRefObject<number>;
  maxSegNum: number | undefined;
}

const DataContext = createContext<prop>({
  dataAudio: { current: null },
  segNum: { current: 1 },
  loadNextSegment: () => {},
  duration: 0,
  maxSegNum: undefined,
});
export default DataContext;
