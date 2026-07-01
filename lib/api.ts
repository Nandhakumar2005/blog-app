const BASE_URL = "https://6a43c3da6dba791499ab59d7.mockapi.io/posts";

export async function getPosts() {
  const res = await fetch(BASE_URL);
  return res.json();
}

export async function getPost(id: string) {
  const res = await fetch(`${BASE_URL}/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) return null;

  return res.json();
}