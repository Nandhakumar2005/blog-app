export type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
  tags?: string;
  category?: string;
};

export function getTagsArray(tags?: string): string[] {
  return tags ? tags.split(" ").filter(Boolean) : [];
}

export function getExcerpt(content: string, maxLength = 160): string {
  const plain = content.replace(/\s+/g, " ").trim();
  if (plain.length <= maxLength) return plain;
  return `${plain.slice(0, maxLength).trimEnd()}…`;
}

export function getReadingTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
