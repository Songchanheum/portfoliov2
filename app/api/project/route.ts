import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const user = await kv.lrange(`project`, 0, -1);
  return NextResponse.json(user);
}
