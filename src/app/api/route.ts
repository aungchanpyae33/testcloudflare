import { NextResponse } from "next/server";

export async function GET() {
  const audioUrl = "https://s3.tebi.io/test1345/bom.mp3";
  const res = await fetch(audioUrl, {
    cf: {
      // Always cache this fetch regardless of content type
      // for a max of 5 seconds before revalidating the resource
      cacheTtl: 36000,
      cacheEverything: true,
      //Enterprise only feature, see Cache API for other plans
    },
  });
  const audioBuffer = await res.arrayBuffer();

  return new NextResponse(audioBuffer, {
    headers: {
      "Content-Type": "audio/mpeg",
      "Cache-Control": "public, max-age=3600, s-maxage=3600",
    },
  });
}
