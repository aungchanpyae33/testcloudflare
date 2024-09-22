import React from "react";
import { getRequestContext } from "@cloudflare/next-on-pages";
export const fetchSegement = (
  url: string,
  sourceBuffer: React.MutableRefObject<SourceBuffer | null>,
  segNum: number | undefined = undefined,
  abortController: AbortController | null //need to get the data from other side ,so not use current
) => {
  const { cf } = getRequestContext();
  const outputUrl = segNum ? url.replace("init.mp4", `seg-${segNum}.m4s`) : url;
  // console.log(outputUrl);
  fetch(outputUrl, {
    signal: abortController!.signal,
    cf: {
      cacheTtl: 36000,
      cacheEverything: true,
    },
  })
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
