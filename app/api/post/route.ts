import { getUrlMeta } from "@/common/utils/webScrapping";
import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

interface metaType {
  title: string;
  image?: string;
  desc?: string;
  url?: string;
}
export async function GET() {
  const post = await kv.lrange(`post`, 0, -1);
  const result = await Promise.all(
    post?.map(async (e) => {
      const meta: metaType =
        e !== "undefined" ? await getUrlMeta(e) : { title: e };
      meta.url = e;
      return meta;
    })
  );
  console.log(result);
  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { url } = await req.json();
  const messageKV = await kv.rpush(`post`, `"${url}"`);
  return NextResponse.json(messageKV);
}
