import { currentPlayList, Song, SongFunction } from "@/lib/zustand";
import { urlProp } from "@/ui/albumContainer/Album";

function AudioFunctionButton({
  functionality,
  url,
}: {
  functionality: string;
  url: string;
}) {
  const playListArray = currentPlayList(
    (state: any) => state.playListArray
  ) as urlProp[];
  console.log(playListArray);
  const setPlay = SongFunction((state: any) => state.setPlay);
  const updateSongCu = Song((state: any) => state.updateSongCu);
  const urlSongs = playListArray.flatMap(({ urlSong }) => urlSong);
  console.log(urlSongs);
  const currentIndex = urlSongs.indexOf(url);

  function songFunctionPre() {
    if (currentIndex <= 0) return;
    const url = playListArray[currentIndex - 1].urlSong;
    const sege = playListArray[currentIndex - 1].sege;
    const duration = playListArray[currentIndex - 1].duration;
    updateSongCu({ [url || ""]: url, sege, duration });
    // url is also  keyName
    setPlay(url || "", true);
  }

  function songFunctionNext() {
    if (currentIndex >= urlSongs.length - 1) return;
    const url = playListArray[currentIndex + 1].urlSong;
    const sege = playListArray[currentIndex + 1].sege;
    const duration = playListArray[currentIndex + 1].duration;
    updateSongCu({ [url || ""]: url, sege, duration });
    // url is js keyName
    setPlay(url || "", true);
  }
  const data = functionality;
  if (data === "pre") {
    return <button onClick={() => songFunctionPre()}>pre</button>;
  } else {
    return <button onClick={() => songFunctionNext()}>nex</button>;
  }
}

export default AudioFunctionButton;
