import type { NextRequest } from "next/server";

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(request: NextRequest) {
  return new Response(
    JSON.stringify({
      name: 'Fire Kaue',
      youtubeChannel: 'youtube.com/@firekaue',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
      },
    }
  )
}