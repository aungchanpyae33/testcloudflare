export const runtime = "edge";
import { type NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export async function GET(request: NextRequest) {
  const query: string | null = "https://words.dev-apis.com/word-of-the-day";
  const fetchData = await fetch(query, {
    cf: {
      cacheTtl: 36000,
      cacheEverything: true,
    },
  });
  const response = new NextResponse(fetchData.body, {
    status: fetchData.status,
    headers: fetchData.headers,
  });
  response.headers.set("Cloudflare-CDN-Cache-Control", "public,max-age=36000");
  return response;
}
