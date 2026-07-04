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

      {/* FEATURED / TRENDING ARTICLE */}
      <section className="w-full px-4 py-20 sm:px-6 lg:px-10 xl:px-14">
        <div className="h-16"></div>
        <TrendingArticle post={posts[0]} />
      </section>

      {/* LATEST ARTICLES */}
      <section className="w-full px-4 pt-20 pb-16 sm:px-6 lg:px-10 xl:px-14">
        <div className="h-16"></div>
        <SearchClient posts={posts} />
      </section>

    </main>
  );
}