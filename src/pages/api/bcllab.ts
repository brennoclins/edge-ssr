import type { NextRequest } from "next/server";

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(request: NextRequest) {
  return new Response(
    JSON.stringify({
      name: 'Dev Meditation',
    }),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1200, stale-while-revalidate=600',
      },
    }
  )
}