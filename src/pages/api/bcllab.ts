import type { NextRequest } from "next/server";

export const config = {
  runtime: 'experimental-edge',
}

export default async function handler(req: NextRequest) {
  const authorization = req.cookies.get('authorization')?.value

  if(!authorization) {
    throw new Error({message: 'Authorization Fail!'})
  }

  return fetch('https://edge-ssr-devmeditation.vercel.app/api/bcllab', {
    method: req.method,
    headers: {
      authorization,
    },
    redirect: 'manual',
  })
}