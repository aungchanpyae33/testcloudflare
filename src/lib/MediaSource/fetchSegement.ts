import React from "react";

export const fetchSegement = (
  url: string,
  sourceBuffer: React.MutableRefObject<SourceBuffer | null>,
  segNum: number | undefined = undefined,
  abortController: AbortController | null //need to get the data from other side ,so not use current
) => {
  const outputUrl = segNum ? url.replace("init.mp4", `seg-${segNum}.m4s`) : url;
  // console.log(outputUrl);
  fetch(`api/${outputUrl}`, { signal: abortController!.signal }).then(
    (response) => {
      console.log(response);
    }
  );
};
