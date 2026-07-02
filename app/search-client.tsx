"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import BlogGrid from "./components/BlogGrid";
import { Post } from "./components/BlogCard";

export default function SearchClient({
  posts,
}: {
  posts: Post[];
}) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <main className="mx-auto max-w-7xl px-6 transition-colors duration-300">

      {/* NAVBAR */}
      <Navbar posts={posts} onFilter={setFilteredPosts} />

      {/* BLOG GRID */}
      <section className="mt-8 rounded-3xl bg-slate-100 dark:bg-slate-900 transition-colors duration-300 p-8">
        <BlogGrid posts={filteredPosts} />
      </section>

    </main>
  );
}