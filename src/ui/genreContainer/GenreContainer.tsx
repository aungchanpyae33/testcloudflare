import Image from "next/image";
import Link from "next/link";

function GenreContainer({ description }: { description: string }) {
  return (
    <Link
      href={`genre/${description}`}
      className="col-span-6 md:col-span-4 lg:col-span-3 bg-blue-600 shrink-0 relative h-[200px]"
    >
      <Image
        src="https://s3.tebi.io/test1345/giraffe-8584272_640.png"
        fill={true}
        alt="this is image element"
        className="w-full h-full rounded-md object-cover"
      />
    </Link>
  );
}

export default GenreContainer;
