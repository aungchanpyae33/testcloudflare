import { TimeFormat } from "@/lib/TimeFormat";
import AudiosContainer from "@/ui/albumContainer/Album";
// import Track from "@/ui/trackComponent/Track";
export const runtime = "edge";
const url = [
{
    url: "https://tebi.bubblemusic.us.kg/init.mp4",
    sege: 24,
    name: "gonenewtest",
    duration: 239.467,
  },

  {
    url: "https://tebi.bubblemusic.us.kg/bob/init.mp4",
    sege: 24,
    name: "paper lady",
    duration: 239.467,
  },
];

function page({ params }: { params: { album: string } }) {
  return <AudiosContainer url={url} description={params.album} />;
}

export default page;
