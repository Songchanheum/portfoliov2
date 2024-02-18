import { NextResponse } from "next/server";
import { getPosts } from "./post";

export type TPostStatus = "Private" | "Public" | "PublicOnDetail";
export type TPostType = "Post" | "Paper" | "Page";

export type TPost = {
  id: string;
  date: { start_date: string };
  type: TPostType[];
  slug: string;
  tags?: string[];
  category?: string[];
  summary?: string;
  author?: {
    id: string;
    name: string;
    profile_photo?: string;
  }[];
  title: string;
  status: TPostStatus[];
  createdTime: string;
  fullWidth: boolean;
  thumbnail?: string;
};

type FilterPostsOptions = {
  acceptStatus?: TPostStatus[];
  acceptType?: TPostType[];
};

const initialOption: FilterPostsOptions = {
  acceptStatus: ["Public"],
  acceptType: ["Post"],
};
const current = new Date();
const tomorrow = new Date(current);
tomorrow.setDate(tomorrow.getDate() + 1);
tomorrow.setHours(0, 0, 0, 0);

function filterPosts(
  posts: TPost[],
  options: FilterPostsOptions = initialOption
) {
  const { acceptStatus = ["Public"], acceptType = ["Post", "Paper"] } = options;
  const filteredPosts = posts
    // filter data
    .filter((post) => {
      const postDate = new Date(post?.date?.start_date || post.createdTime);
      if (!post.title || !post.slug || postDate > tomorrow) return false;
      return true;
    })
    // filter status
    .filter((post) => {
      const postStatus = post.status[0];
      return acceptStatus.includes(postStatus);
    })
    // filter type
    .filter((post) => {
      const postType = post.type[0];
      return acceptType.includes(postType);
    });
  return filteredPosts;
}

export async function GET() {
  const data = await getPosts();
  return NextResponse.json(data ? filterPosts(data) : []);
}
