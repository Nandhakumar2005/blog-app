import Header from "./components/Header";
import TrendingArticle from "./components/TrendingArticle";
import SearchClient from "./search-client";
import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white transition-colors duration-300 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950">
      {/* HEADER */}
      <Header />

      {/* TRENDING ARTICLE */}
      <section className="mx-auto w-full max-w-screen-2xl px-6 py-16 text-center sm:px-8 lg:px-12 lg:py-20 xl:px-16">
        <TrendingArticle post={posts[0]} />
      </section>

      {/* LATEST ARTICLES */}
      <section className="w-full py-16 lg:py-20">
        <SearchClient posts={posts} />
      </section>
    </main>
  );
}
