import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const chat = await kv.keys("*");
  return NextResponse.json(chat);
}

export async function POST(req: NextRequest) {
  const { num, message } = await req.json();
  const messageKV = await kv.rpush(
    `chat:${num}`,
    `{"type" : "receive", "text" : "${message}"}`
  );
  return NextResponse.json(messageKV);
}
