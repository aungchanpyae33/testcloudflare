import { getData, getRecom } from "@/database/data";

export default async function Page({
  params,
  searchParams,
}: {
  params: { test: string };
  searchParams?: {
    query?: string;
  };
}) {
  const query = searchParams?.query || "";
  console.time("hi");
  const data = await getRecom(query);
  console.timeEnd("hi");
  return (
    <div>
      My Post: {params.test}
      {data?.map((item) => (
        <p key={item.title}>{item.title}</p>
      ))}
    </div>
  );
}
