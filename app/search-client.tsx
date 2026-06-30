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
      
      {/* Search */}
      <div className="mx-auto mb-20 w-full max-w-3xl">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-full border border-slate-200 bg-white py-5 px-6 text-lg shadow-lg transition-all duration-300 outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
          />
        </div>
      </div>

      {/* Empty */}
      {filtered.length === 0 && (
        <div className="py-20 text-center">
          <div className="text-6xl">📚</div>

          <h2 className="mt-6 text-2xl font-bold text-slate-800">
            No articles found
          </h2>

          <p className="mt-2 text-slate-500">
            Try searching with another keyword.
          </p>
        </div>
      )}

      {/* Cards */}
      <div className="grid gap-10 md:grid-cols-2">
        {filtered.map((post) => (
          <Link key={post.id} href={`/posts/${post.id}`} className="group">
            <article className="overflow-hidden rounded-3xl bg-white shadow-sm ring-1 ring-slate-200 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              
              {/* Image */}
              {post.image && (
                <div className="overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              {/* Content */}
              <div className="p-7">
                <div className="mb-4">
                  <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                    {post.createdAt
                      ? new Date(post.createdAt).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })
                      : "Recent"}
                  </span>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-slate-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h2>

                <p className="mt-4 line-clamp-3 text-slate-600">
                  {post.content}
                </p>

                <div className="mt-8 flex items-center justify-between">
                  <span className="text-sm font-semibold text-blue-600 transition group-hover:translate-x-1">
                    Read article →
                  </span>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-500">
                    Blog
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