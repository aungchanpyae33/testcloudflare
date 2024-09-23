import { TimeFormat } from "@/lib/TimeFormat";
import AudiosContainer from "@/ui/albumContainer/Album";
// import Track from "@/ui/trackComponent/Track";
export const runtime = "edge";
const url = [
  {
    urlSong: "new/init.mp4",
    sege: 27,
    name: "gone",
    duration: 52.199,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/gd/init.mp4",
    sege: 24,
    name: "never",
    duration: 232.896,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/hello/init.mp4",
    sege: 27,
    name: "gone",
    duration: 52.199,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/another/init.mp4",
    sege: 36,
    name: "paper lady",
    duration: 215.766,
  },
  {
    urlSong: " https://s3.tebi.io/test1345/some/init.mp4",
    sege: 33,
    name: "pann",
    duration: 226.155,
  },
  {
    urlSong: "  https://s3.tebi.io/test1345/testsmall/init.mp4",
    sege: 88,
    name: "pannsmall",
    duration: 263.19,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/anbb/init.mp4",
    sege: 92,
    name: "pannsmallleak",
    duration: 200.619,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/finalcdn/init.mp4",
    sege: 92,
    name: "pannsmallleak",
    duration: 200.619,
  },
];

function page({ params }: { params: { album: string } }) {
  return <AudiosContainer url={url} description={params.album} />;
}

export default page;
