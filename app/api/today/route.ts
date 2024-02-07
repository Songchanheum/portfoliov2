import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";
import { toStringByFormatting } from "@/common/utils/dateFormat";

export async function GET(_req: NextRequest) {
  const date = toStringByFormatting(new Date());

  const result = await getCount(date);

  return NextResponse.json(result);
}

export async function POST(req: NextRequest) {
  const { key } = await req.json();
  const date = toStringByFormatting(new Date());
  const todayCount = await kv.llen(`today:${date}`);
  if (todayCount <= 0) {
    const tdays = await kv.keys("today:*");
    await kv.del(...tdays);
  }
  const today = await kv.rpush(`today:${date}`, key);
  const total = await kv.incr("total");

  return NextResponse.json({ today, total });
}

async function getCount(date: string) {
  const today = await kv.llen(`today:${date}`);
  const total = await kv.get("total");

  return { today, total };
}
