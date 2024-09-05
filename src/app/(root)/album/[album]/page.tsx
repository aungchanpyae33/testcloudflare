import { TimeFormat } from "@/lib/TimeFormat";
import AudiosContainer from "@/ui/albumContainer/Album";
// import Track from "@/ui/trackComponent/Track";

const url = [
  {
    urlSong: "https://s3.tebi.io/test1345/new/init.mp4",
    sege: 27,
    duration: 52.199,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/gd/init.mp4",
    sege: 24,
    duration: 232.896,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/hello/init.mp4",
    sege: 27,
    duration: 52.199,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/another/init.mp4",
    sege: 36,
    duration: 215.766,
  },
  {
    urlSong: " https://s3.tebi.io/test1345/some/init.mp4",
    sege: 33,
    duration: 226.155,
  },
];

function page({ params }: { params: { album: string } }) {
  return <AudiosContainer url={url} description={params.album} />;
}

export default page;
