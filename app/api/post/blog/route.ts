import { NextResponse } from "next/server";
import { filterPosts, getPosts } from "./post";

export async function GET() {
  const data = await getPosts();
  return NextResponse.json(data ? filterPosts(data) : []);
}
