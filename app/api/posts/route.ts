import { posts } from "@/data/mock-posts";

export async function GET() {
  return Response.json(posts);
}