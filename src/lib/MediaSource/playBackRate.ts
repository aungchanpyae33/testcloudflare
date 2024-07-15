import React from "react";

interface prop {
  dataAudio: React.MutableRefObject<HTMLAudioElement | null>;
  e: React.MouseEvent<HTMLInputElement> | React.TouchEvent<HTMLInputElement>;
}
export function playBackRate({ dataAudio, e }: prop) {
  dataAudio.current!.currentTime = +e.currentTarget.value;
  const audioDu = dataAudio.current!.duration;
  const audioCu = dataAudio.current!.currentTime;
  const audioPosition = Math.floor((audioCu / audioDu) * 100);
  const segPosition = Math.floor((27 * audioPosition) / 100);

  return segPosition;
}
