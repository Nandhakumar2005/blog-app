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
    <main className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 transition-colors duration-300">

      {/* Full-width container */}
      <div className="w-full px-6 lg:px-10 xl:px-14">

        {/* NAVBAR */}
        <Navbar posts={posts} onFilter={setFilteredPosts} />

        {/* BLOG GRID */}
        <section className="mt-8">
          <BlogGrid posts={filteredPosts} />
        </section>

      </div>

    </main>
  );
}