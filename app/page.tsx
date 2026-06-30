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
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white">

      {/* HERO */}
      <section className="relative overflow-hidden">

        {/* Background decoration */}
        <div className="absolute inset-0" />
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
        <div className="absolute -top-16 right-0 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-6 pt-28 pb-10 text-center">

          <span className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-5 py-2 text-sm font-medium text-blue-700">
            🚀 Modern Blog Platform
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-black tracking-tight text-slate-900">
            Discover Stories
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl leading-8 text-slate-600">
            Read insightful articles about web development,
            programming, modern technologies, and software engineering.
          </p>

        </div>
      </section>

      {/* SEARCH SECTION (separate = IMPORTANT FIX) */}
      <section className="px-6 pb-10">
        <SearchClient posts={posts} />
      </section>

    </main>
  );
}