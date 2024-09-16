import Image from "next/image";

function AudioDisplayFooter({ urlImage }: { urlImage: string }) {
  return (
    <div className="h-full bg-black w-[45px]">
      <Image
        src={urlImage}
        width={300}
        height={300}
        alt="test image"
        className="w-full h-full"
        priority={true}
      />
    </div>
  );
}

export default AudioDisplayFooter;
