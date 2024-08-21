import { TimeFormat } from "@/lib/TimeFormat";
import Track from "@/ui/trackComponent/Track";

const url = [
  {
    urlSong: "https://s3.tebi.io/test1345/new/init.mp4",
    sege: 28,
    duration: 52.199,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/gd/init.mp4",
    sege: 25,
    duration: 232.896,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/hello/init.mp4",
    sege: 28,
    duration: 52.199,
  },
  {
    urlSong: "https://s3.tebi.io/test1345/another/init.mp4",
    sege: 37,
    duration: 215.766,
  },
  {
    urlSong: " https://s3.tebi.io/test1345/some/init.mp4",
    sege: 34,
    duration: 226.155,
  },
];

function page({ params }: { params: { album: string } }) {
  return (
    <div>
      this is {params.album}
      {url.map((item, index) => (
        <Track
          key={item.urlSong}
          name="supanaova"
          duration={url[index].duration}
          item={"hi"}
          sege={url[index].sege}
          url={url[index].urlSong}
        />
      ))}
    </div>
  );
}

export default page;
