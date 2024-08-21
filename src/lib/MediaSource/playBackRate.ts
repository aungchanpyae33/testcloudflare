import React from "react";
export interface eventProp {
  e:
    | React.MouseEvent<HTMLInputElement>
    | React.TouchEvent<HTMLInputElement>
    | React.KeyboardEvent<HTMLInputElement>;
}
interface prop extends eventProp {
  dataAudio: React.MutableRefObject<HTMLAudioElement | null>;
  maxSegNum: number | undefined;
}
export function playBackRate({ dataAudio, e, maxSegNum }: prop) {
  dataAudio.current!.currentTime = +e.currentTarget.value;
  const audioDu = dataAudio.current!.duration;
  const audioCu = dataAudio.current!.currentTime;
  const audioPosition = Math.floor((audioCu / audioDu) * 100);
  const segPosition = Math.floor((maxSegNum! * audioPosition) / 100);

  return segPosition;
}
