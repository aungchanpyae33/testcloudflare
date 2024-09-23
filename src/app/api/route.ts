export const runtime = "edge";
import { type NextRequest, NextResponse } from "next/server";
import { getRequestContext } from "@cloudflare/next-on-pages";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query: string | null = searchParams.get("with");
  if (query) {
    const fetchData = await fetch(query, {
      cf: {
        cacheTtl: 36000,
        cacheEverything: true,
      },
    });

    // Create a new NextResponse based on the original fetchData response
    const response = new NextResponse(fetchData.body, {
      status: fetchData.status,
      headers: fetchData.headers,
    });

    response.headers.set("Cache-Control", "public, max-age=0,max-age=36000");

    return response;
  }

  return NextResponse.json(
    { error: "Query parameter 'with' is missing" },
    { status: 400 }
  );
}
