import Hls from "hls.js";
let requestedFragments = [];

function PlaySong(url, audioElement) {
  // console.log(url, audioElement);
  if (Hls.isSupported() && audioElement) {
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(audioElement);
    // do only when chache is not has
    hls.on(Hls.Events.FRAG_LOADING, function (_, data) {
      requestedFragments.push(+data.frag.sn);
      // console.log(requestedFragments);
    });
    hls.on(Hls.Events.BUFFER_EOS, function () {
      // console.log("End of stream reached");
      // console.log(requestedFragments.every((x, i) => i === x));
    });
  }
}
export default PlaySong;
