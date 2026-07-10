import { getPosts } from "@/lib/api";

export async function GET() {
  try {
    const posts = await getPosts();
    return Response.json(posts);
  } catch {
    return Response.json({ error: "Failed to fetch posts" }, { status: 500 });
  }
}
