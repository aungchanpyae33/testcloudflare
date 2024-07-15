import React from "react";

export const fetchSegement = (
  url: string,
  sourceBuffer: React.MutableRefObject<SourceBuffer | null>,
  segNum: number | undefined = undefined
) => {
  const outputUrl = segNum ? url.replace("init.mp4", `seg-${segNum}.m4s`) : url;
  console.log(outputUrl);
  fetch(outputUrl)
    .then((response) => response.arrayBuffer())
    .then((buf) => {
      sourceBuffer.current!.appendBuffer(buf);
    });
};
