import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const num = req.nextUrl.searchParams.get("num");
  console.log(num);
  const user = await kv.lrange(`chat:${num}`, 0, -1);
  console.log(user);
  return NextResponse.json(user);
}

export async function POST(req: NextRequest) {
  const { num, message } = await req.json();
  const messageKV = await kv.rpush(
    `chat:${num}`,
    `{"type" : "send", "text" : "${message}"}`
  );
  return NextResponse.json(messageKV);
}
