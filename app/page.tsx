import Header from "./components/Header";
import TrendingArticle from "./components/TrendingArticle";
import SearchClient from "./search-client";
import { getPosts } from "@/lib/api";

export default async function Home() {
  let posts: Awaited<ReturnType<typeof getPosts>> = [];

  try {
    posts = await getPosts();
  } catch {
    return (
      <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
        <Header />
        <section className="mx-auto flex min-h-[60vh] w-full max-w-lg flex-col items-center justify-center px-6 text-center">
          <div className="text-5xl">⚠️</div>
          <h2 className="mt-6 text-2xl font-bold text-slate-900 dark:text-white">
            Unable to load articles
          </h2>
          <p className="mt-3 text-slate-600 dark:text-slate-400">
            Could not connect to MockAPI. Please check your connection and try again.
          </p>
        </section>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      <Header />

      {posts.length > 0 && (
        <section className="mx-auto w-full max-w-screen-2xl px-4 py-10 text-center sm:px-6 sm:py-14 lg:px-12 lg:py-16 xl:px-16">
          <TrendingArticle post={posts[0]} />
        </section>
      )}

      <section className="w-full">
        <SearchClient posts={posts} />
      </section>
    </main>
  );
}
