import { toStringByFormatting } from "@/common/utils/dateFormat";
import { getUrlMeta } from "@/common/utils/webScrapping";
import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const code = req.nextUrl.searchParams.get("code");
  const post = await kv.lrange(`comment:${code}`, 0, -1);
  return NextResponse.json(post);
}

export async function POST(req: NextRequest) {
  const { code, idKey, comment } = await req.json();
  const messageKV = await kv.rpush(
    `comment:${code}`,
    `{"idKey": "${idKey}", "comment":"${comment}", "date":"${toStringByFormatting(
      new Date(),
      "."
    )}"}`
  );
  return NextResponse.json(messageKV);
}
