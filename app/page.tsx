import SearchClient from "./search-client";
import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white flex items-start justify-center">
      <div className="w-full max-w-5xl px-6 flex flex-col items-center text-center space-y-20">

        {/* HERO */}
        <section className="relative overflow-hidden w-full mb-10">
          <div className="absolute inset-0" />
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl" />
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 h-80 w-80 rounded-full bg-indigo-200/20 blur-3xl" />

          <div className="relative pt-20 pb-6 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-slate-900">
              Discover Stories
            </h1>

            <p className="mt-6 max-w-2xl text-lg md:text-xl leading-8 text-slate-600">
              Read insightful articles about web development,
              programming, modern technologies, and software engineering.
            </p>
          </div>
        </section>

        {/* SEARCH */}
        <section className="w-full flex justify-center">
          <div className="w-full max-w-2xl">
            <SearchClient posts={posts} />
          </div>
        </section>

      </div>
    </main>
  );
}