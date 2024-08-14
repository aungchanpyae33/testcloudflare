import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

interface prop {
  songs: string[];
  description: string;
  inputRef: React.RefObject<HTMLAnchorElement>;
}

function PlaylistContainer({ songs, description, inputRef }: prop) {
  return (
    <Link
      href={"album/supanova"}
      tabIndex={-1}
      ref={inputRef}
      className={clsx(
        "containerPlaylist p-3 md:p-4 lg:p-5       hover:bg-green-600 hover:shadow-lg rounded-md bg-green-500 shadow-md"
      )}
    >
      <div className="flex imageContainer rounded-md w-[145px] md:w-[155px] lg:w-[175px] before:block before:pb-[100%]">
        <Image
          src="/ok.jpg"
          width={100}
          height={100}
          alt="this is image element"
          className="w-full h-full rounded-md"
        />
      </div>
      <p>{description}</p>
    </Link>
  );
}

export default PlaylistContainer;
