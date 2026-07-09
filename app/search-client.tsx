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
    <main className="w-full">
      <section
        id="latest-articles"
        className="mx-auto w-full max-w-screen-2xl px-6 py-16 sm:px-8 lg:px-12 lg:py-20 xl:px-16"
      >
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center lg:mb-20">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700 dark:bg-blue-900/40 dark:text-blue-300">
            Latest Articles
          </span>

          <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Explore Our Collection
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-600 sm:text-xl sm:leading-10 dark:text-slate-400">
            Discover tutorials, practical guides and expert insights on React,
            Next.js, TypeScript, Artificial Intelligence, APIs and modern web
            development.
          </p>
        </div>

        {/* Filter/Navbar */}
        <div className="mb-12 flex justify-center lg:mb-16">
          <Navbar posts={posts} onFilter={setFilteredPosts} />
        </div>

        {/* Blog Grid */}
        <BlogGrid posts={filteredPosts} />
      </section>
    </main>
  );
}
