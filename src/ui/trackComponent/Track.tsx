"use client";

import { TimeFormat } from "@/lib/TimeFormat";
import ToggleElement from "../Footer/audio/ToggleElement";

function Track({
  name,
  duration,
  item,
  url,
  sege,
}: {
  name: string;
  duration: number;
  item: string;
  url: string;
  sege: number;
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
      <span>{TimeFormat(duration)}</span>
      <ToggleElement url={url} sege={sege} duration={duration} />
    </div>
  );
}

export default Track;
