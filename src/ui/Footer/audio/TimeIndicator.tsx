import DataContext from "@/lib/MediaSource/ContextMedia";
import { TimeFormat } from "@/lib/TimeFormat";
import { useContext } from "react";
function TimeIndicator({ data }: { data: string }) {
  const { dataCur, duration } = useContext(DataContext);
  return (
    <span
      ref={data === "currentTime" ? dataCur : null}
      id={data}
      className="time bg-red-500 w-[3rem] text-center"
    >
      {TimeFormat(
        data === "currentTime" ? duration.cur : duration.durationTime
      )}
    </span>
  );
}

export default TimeIndicator;
