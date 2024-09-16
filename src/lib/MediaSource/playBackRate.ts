import React from "react";
export interface eventProp {
  e:
    | React.MouseEvent<HTMLInputElement>
    | React.TouchEvent<HTMLInputElement>
    | React.KeyboardEvent<HTMLInputElement>;
}
interface prop extends eventProp {
  dataAudio: React.MutableRefObject<HTMLAudioElement | null>;
  sege: number | undefined;
}
export function playBackRate({ dataAudio, e, sege }: prop) {
  dataAudio.current!.currentTime = +e.currentTarget.value;
  const audioDu = dataAudio.current!.duration;
  const audioCu = dataAudio.current!.currentTime;
  const audioPosition = Math.floor((audioCu / audioDu) * 100);
  const segPosition = Math.floor((sege! * audioPosition) / 100);

  return segPosition;
}
