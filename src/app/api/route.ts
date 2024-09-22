export const runtime = "edge";
import { type NextRequest } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query: string | null = searchParams.get("q");
  if (query) {
    const fetchData = await fetch(query, {
      cf: {
        cacheTtl: 36000,
        cacheEverything: true,
      },
    });
    return fetchData;
  }
}
