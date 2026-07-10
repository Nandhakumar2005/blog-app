"use client";

import { useState } from "react";

import Navbar from "./components/Navbar";
import BlogGrid from "./components/BlogGrid";
import type { Post } from "@/types/post";

export default function SearchClient({ posts }: { posts: Post[] }) {
  const [filteredPosts, setFilteredPosts] = useState(posts);

  return (
    <main className="w-full">
      <section
        id="latest-articles"
        className="mx-auto w-full max-w-screen-2xl px-4 py-12 sm:px-6 sm:py-16 lg:px-12 lg:py-20 xl:px-16"
      >
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 lg:mb-16">
          <span className="inline-block rounded-full bg-blue-100 px-3 py-1.5 text-xs font-semibold text-blue-700 sm:px-4 sm:py-2 sm:text-sm dark:bg-blue-900/40 dark:text-blue-300">
            Latest Articles
          </span>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:mt-6 sm:text-4xl lg:text-5xl dark:text-white">
            Explore Our Collection
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 dark:text-slate-400">
            Discover tutorials, practical guides and expert insights on React,
            Next.js, TypeScript, AI, APIs and modern web development.
          </p>
        </div>

        <div className="mb-8 sm:mb-10 lg:mb-14">
          <Navbar posts={posts} onFilter={setFilteredPosts} />
        </div>

        <BlogGrid posts={filteredPosts} />
      </section>
    </main>
  );
}
