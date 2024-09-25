import React from "react";
export const fetchSegement = (
  url: string,
  sourceBuffer: React.MutableRefObject<SourceBuffer | null>,
  segNum: number | undefined = undefined,
  abortController: AbortController | null //need to get the data from other side ,so not use current
) => {
  const outputUrl = segNum ? url.replace("init.mp4", `seg-${segNum}.m4s`) : url;
  // console.log(outputUrl);
  fetch(
    ` https://jolly-sun-bbad.bubblemusic990.workers.dev/api?url=${outputUrl}`,
    {
      signal: abortController!.signal,
      next: { revalidate: 35000 },
    }
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`failed to fetch the song segements sege-${segNum}`);
      }
      return response.arrayBuffer();
    })
    .then((buf) => {
      if (sourceBuffer.current && !sourceBuffer.current.updating) {
        sourceBuffer.current!.appendBuffer(buf);
      }
    })
    .catch((err) => {
      if (err.name === "AbortError") {
        console.log(`the song segements sege-${segNum} fetching is aborted`);
      } else {
        console.error(`Error fetching segements sege-${segNum}`, err);
      }
    });
};
