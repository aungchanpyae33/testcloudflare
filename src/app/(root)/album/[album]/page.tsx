import Track from "@/ui/trackComponent/Track";

const dataforAlbum = ["one", "two", "three", "four", "five", "six"];
function page({ params }: { params: { album: string } }) {
  return (
    <div>
      this is {params.album}
      {dataforAlbum.map((item) => (
        <Track key={item} name="supanaova" duration="3:60" />
      ))}
    </div>
  );
}

export default page;
