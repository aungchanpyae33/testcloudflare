import { TimeFormat } from "@/lib/TimeFormat";
function TimeIndicatorCur({
  dataCur,
}: {
  dataCur: React.MutableRefObject<HTMLSpanElement | null>;
}) {
  console.log("render timeindicator");
  return (
    <span ref={dataCur} className="time">
      {TimeFormat(0)}
    </span>
  );
}

export default TimeIndicatorCur;
