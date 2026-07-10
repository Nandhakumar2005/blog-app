import { getPost } from "@/lib/api";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const post = await getPost(id);

  if (!post) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }

  return Response.json(post);
}
