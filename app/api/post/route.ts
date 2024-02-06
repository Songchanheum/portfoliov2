import { getUrlMeta } from "@/common/utils/webScrapping";
import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const post = await kv.lrange(`post`, 0, -1);
  return NextResponse.json(post);
}

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  const meta: MetaType = await getUrlMeta(url);
  const messageKV = await kv.lpush(
    `post`,
    `{"title": "${meta.title.replaceAll(
      '"',
      ""
    )}", "image":"${meta.image?.replaceAll(
      '"',
      ""
    )}", "desc":"${meta.desc?.replaceAll('"', "")}", "url":"${url}"}`
  );
  return NextResponse.json(messageKV);
}
