import type { NextRequest } from "next/server";

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const email = searchParams.get('email')
  return new Response(email)
}