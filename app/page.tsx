import SearchClient from "./search-client";

type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
};

async function getPosts(): Promise<Post[]> {
  const res = await fetch(
    "https://6a43c3da6dba791499ab59d7.mockapi.io/posts",
    { cache: "no-store" }
  );

  if (!res.ok) throw new Error("Failed to fetch posts");

  return res.json();
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
      
      {/* HERO */}
      <section className="text-center py-20 px-6">
        <h1 className="text-6xl font-extrabold text-gray-900 tracking-tight">
          Modern Blog
        </h1>
        <p className="text-gray-600 mt-4 text-lg">
          Discover articles, ideas, and insights
        </p>

        <div className="mt-6">
          <span className="px-4 py-2 bg-black text-white rounded-full text-sm">
            Next.js • Tailwind • MockAPI
          </span>
        </div>
      </section>

      {/* CONTENT */}
      <SearchClient posts={posts} />
    </main>
  );
}