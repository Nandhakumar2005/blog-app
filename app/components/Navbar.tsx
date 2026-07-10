"use client";

import { useState, useEffect, useMemo } from "react";
import type { Post } from "@/types/post";
import { getTagsArray } from "@/types/post";

type Props = {
  posts: Post[];
  onFilter: (posts: Post[]) => void;
};

export default function Navbar({ posts, onFilter }: Props) {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => getTagsArray(post.tags));
    return ["All", ...Array.from(new Set(allTags))];
  }, [posts]);

  const visibleTags = tags.slice(0, 5);
  const moreTags = tags.slice(5);

  const applyFilters = (tag: string, query: string) => {
    let filtered = [...posts];

    if (tag !== "All") {
      filtered = filtered.filter((post) =>
        getTagsArray(post.tags).includes(tag)
      );
    }

    if (query.trim()) {
      const q = query.toLowerCase();
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(q) ||
          post.content.toLowerCase().includes(q) ||
          getTagsArray(post.tags).some((t) => t.toLowerCase().includes(q))
      );
    }

    onFilter(filtered);
  };

  const handleTagClick = (tag: string) => {
    setActiveTag(tag);
    applyFilters(tag, search);
    setShowMore(false);
  };

  const handleSearch = (value: string) => {
    setSearch(value);
    applyFilters(activeTag, value);
  };

  useEffect(() => {
    onFilter(posts);
  }, [posts, onFilter]);

  return (
    <nav className="w-full rounded-2xl border border-slate-200/80 bg-white/90 p-4 shadow-lg backdrop-blur-sm transition-all duration-300 sm:rounded-3xl sm:p-6 lg:p-8 dark:border-slate-700/80 dark:bg-slate-900/90">
      <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
        <div className="flex flex-wrap items-center gap-2 sm:gap-3">
          {visibleTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`rounded-full px-4 py-2 text-sm font-semibold capitalize transition-all duration-300 sm:px-5 sm:py-2.5 sm:text-base ${
                activeTag === tag
                  ? "bg-blue-600 text-white shadow-md shadow-blue-600/25"
                  : "bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {tag}
            </button>
          ))}

          {moreTags.length > 0 && (
            <div className="relative">
              <button
                onClick={() => setShowMore(!showMore)}
                className="rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200 sm:px-5 sm:py-2.5 sm:text-base dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                More ▾
              </button>

              {showMore && (
                <div className="absolute left-0 top-full z-20 mt-2 w-52 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl sm:w-60 dark:border-slate-700 dark:bg-slate-900">
                  {moreTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`block w-full px-4 py-2.5 text-left text-sm capitalize transition hover:bg-slate-100 sm:px-5 sm:py-3 sm:text-base dark:hover:bg-slate-800 ${
                        activeTag === tag
                          ? "font-semibold text-blue-600 dark:text-blue-400"
                          : "text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

        <div className="relative w-full lg:max-w-xs">
          <svg
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            value={search}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search articles..."
            className="w-full rounded-full border border-slate-300 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 shadow-sm outline-none transition-all duration-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-100 sm:py-3 sm:pl-11 sm:pr-5 sm:text-base dark:border-slate-700 dark:bg-slate-800 dark:text-white dark:focus:ring-blue-900/40"
          />
        </div>
      </div>
    </nav>
  );
}
