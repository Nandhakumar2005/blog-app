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
    <main className="min-h-screen w-full bg-slate-50 transition-colors duration-300 dark:bg-slate-950">

      <div
        id="latest-articles"
        className="w-full px-6 py-16 lg:px-10 xl:px-14"
      >
        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold text-slate-900 dark:text-white">
            Latest Articles
          </h2>

          <p className="mt-3 text-lg text-slate-600 dark:text-slate-400">
            Browse the latest tutorials, guides and insights on modern web
            development.
          </p>
        </div>

        {/* Navbar */}
        <Navbar posts={posts} onFilter={setFilteredPosts} />

        {/* Space */}
        <div className="h-16"></div>

        {/* Blog Grid */}
        <BlogGrid posts={filteredPosts} />
      </div>

    </main>
  );
}