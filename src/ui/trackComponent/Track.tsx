"use client";

import ToggleElement from "../Footer/audio/ToggleElement";

function Track({
  name,
  duration,
  item,
  url,
}: {
  name: string;
  duration: string;
  item: string;
  url: string;
}) {
  console.log(" render track");

  return (
    <div
      className=" p-3 border border-black shadow-md mx-3 flex justify-between mb-2"
      tabIndex={0}
      // onKeyDown={(e) => {
      //   if (e.key === "Enter") {
      //     updateSong({ song_name: url });
      //   }
      // }}
    >
      <p>{item}</p>
      <span>{name}</span>
      <span>{duration}</span>
      <ToggleElement url={url} />
    </div>
  );
}

export default Track;
