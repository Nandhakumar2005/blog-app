import Header from "./components/Header";
import SearchClient from "./search-client";
import { getPosts } from "@/lib/api";

export default async function Home() {
  const posts = await getPosts();

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-100 via-slate-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 transition-colors duration-300">

      {/* HERO */}
      <Header />

      {/* BLOG APP */}
      <SearchClient posts={posts} />

    </main>
  );
}