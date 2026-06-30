"use client";

import { useState } from "react";
import Link from "next/link";

type Post = {
  id: string;
  title: string;
  content: string;
  image?: string;
  createdAt?: string;
};

export default function SearchClient({ posts }: { posts: Post[] }) {
  const [search, setSearch] = useState("");

  const filtered = posts.filter((post) =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="max-w-6xl mx-auto px-6 pb-20">
      
      {/* SEARCH */}
      <div className="mb-10">
        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full p-4 rounded-2xl border border-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-black/10 focus:border-gray-400 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* EMPTY STATE */}
      {filtered.length === 0 && (
        <div className="text-center py-20">
          <p className="text-gray-400 text-lg">
            No blogs found 😕
          </p>
          <p className="text-gray-300 text-sm mt-2">
            Try searching something else
          </p>
        </div>
      )}

      {/* GRID */}
      <div className="grid gap-8 md:grid-cols-2">
        {filtered.map((post) => (
          <Link key={String(post.id)} href={`/posts/${post.id}`}>
            
            <article className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">

              {/* IMAGE */}
              {post.image && (
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* CONTENT */}
              <div className="p-6">
                
                <h2 className="text-xl font-bold text-gray-900 group-hover:text-black transition">
                  {post.title}
                </h2>

                <p className="text-gray-600 mt-3 leading-relaxed">
                  {post.content.slice(0, 110)}...
                </p>

                <div className="mt-5 flex items-center justify-between">
                  <span className="text-xs text-gray-400">
                    {post.createdAt}
                  </span>

                  <span className="text-xs text-black font-medium opacity-0 group-hover:opacity-100 transition">
                    Read more →
                  </span>
                </div>

              </div>
            </article>

          </Link>
        ))}
      </div>
    </section>
  );
}