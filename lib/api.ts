import type { Post } from "@/types/post";

const BASE_URL =
  process.env.MOCKAPI_BASE_URL ??
  "https://6a43c3da6dba791499ab59d7.mockapi.io/posts";

function normalizeTags(tags: unknown): string {
  if (typeof tags === "string") return tags;
  if (Array.isArray(tags)) return tags.map(String).join(" ");
  return "";
}

function normalizeImage(image: string | undefined, id: string): string {
  if (!image) {
    return `/images/blog${id}.png`;
  }
  return image;
}

function getCategoryFromTags(tags: string): string {
  const first = tags.split(" ")[0];
  if (!first) return "Technology";
  return first.charAt(0).toUpperCase() + first.slice(1);
}

function normalizePost(raw: Record<string, unknown>): Post {
  const tags = normalizeTags(raw.tags);
  return {
    id: String(raw.id),
    title: String(raw.title ?? ""),
    content: String(raw.content ?? ""),
    createdAt: raw.createdAt ? String(raw.createdAt) : undefined,
    tags,
    category: raw.category
      ? String(raw.category)
      : getCategoryFromTags(tags),
    image: normalizeImage(raw.image as string | undefined, String(raw.id)),
  };
}

export async function getPosts(): Promise<Post[]> {
  const res = await fetch(BASE_URL, { next: { revalidate: 60 } });

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }

  const data = await res.json();
  const items = Array.isArray(data) ? data : [];
  return items.map((item) => normalizePost(item));
}

export async function getPost(id: string): Promise<Post | null> {
  const res = await fetch(`${BASE_URL}/${id}`, { cache: "no-store" });

  if (!res.ok) return null;

  const data = await res.json();
  return normalizePost(data);
}
