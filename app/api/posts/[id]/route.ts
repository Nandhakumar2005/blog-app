import { posts } from "@/data/mock-posts";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const post = posts.find((p) => p.id === params.id);

  if (!post) {
    return new Response("Not found", { status: 404 });
  }

  return Response.json(post);
}