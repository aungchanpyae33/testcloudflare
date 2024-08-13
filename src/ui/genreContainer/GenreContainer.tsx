import Link from "next/link";

function GenreContainer({ description }: { description: string }) {
  return (
    <Link
      href={`genre/${description}`}
      className="col-span-6 md:col-span-4 lg:col-span-3 bg-blue-600 h-[200px]"
    >
      {description}
    </Link>
  );
}

export default GenreContainer;
