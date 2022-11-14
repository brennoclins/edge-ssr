import type { NextRequest, NextResponse } from "next/server";

// export default function handler (request: NextRequest, response: NextResponse) {
//   return new Response(`Hello, from ${request.url} I'm now an Edge API Routes!`)
// }

// export const config = {
//   runtime: 'experimental-edge',
// }

export const config = {
  runtime: 'experimental-edge',
}

export default (req: NextRequest) => {
  return new Response('Hello I am Dev Meditation!')
} 