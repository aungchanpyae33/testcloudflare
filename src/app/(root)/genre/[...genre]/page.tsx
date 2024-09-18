export const runtime = "edge";
export default function Page({ params }: { params: { genre: string } }) {
  return <div>My Post: {params.genre}</div>;
}
