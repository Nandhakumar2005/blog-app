"use client";

import { useState, useEffect, useMemo } from "react";
import type { Post } from "./BlogCard";

type Props = {
  posts: Post[];
  onFilter: (posts: Post[]) => void;
};

export default function Navbar({ posts, onFilter }: Props) {
  const [searchOpen, setSearchOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");
  const [showMore, setShowMore] = useState(false);

  const getTagsArray = (tags?: string) =>
    tags ? tags.split(" ").filter(Boolean) : [];

  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => getTagsArray(post.tags));
    return ["All", ...Array.from(new Set(allTags))];
  }, [posts]);

  const visibleTags = tags.slice(0, 6);
  const moreTags = tags.slice(6);

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
          post.content.toLowerCase().includes(q)
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
    <nav className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-xl transition-all duration-300 dark:border-slate-700 dark:bg-slate-900">

      <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">

        {/* TAGS */}
        <div className="flex flex-wrap items-center gap-4">

          {visibleTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`rounded-full px-6 py-3 text-base font-semibold transition-all duration-300 ${
                activeTag === tag
                  ? "bg-blue-600 text-white shadow-lg"
                  : "bg-slate-100 text-slate-700 hover:bg-blue-100 hover:text-blue-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              }`}
            >
              {tag}
            </button>
          ))}

          {moreTags.length > 0 && (
            <div className="relative">

              <button
                onClick={() => setShowMore(!showMore)}
                className="rounded-full bg-slate-100 px-6 py-3 text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700"
              >
                More ▾
              </button>

              {showMore && (
                <div className="absolute left-0 top-full z-20 mt-3 w-60 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl dark:border-slate-700 dark:bg-slate-900">

                  {moreTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`block w-full px-5 py-3 text-left text-base transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
                        activeTag === tag
                          ? "font-semibold text-blue-600"
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

        {/* SEARCH */}
        <div>
          {searchOpen ? (
            <input
              autoFocus
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search articles..."
              className="
                w-96
                rounded-full
                border
                border-slate-300
                bg-white
                px-7
                py-3.5
                text-base
                text-slate-900
                shadow-sm
                outline-none
                transition-all
                duration-300
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-200
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
                dark:focus:ring-blue-900/40
              "
            />
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="
                rounded-full
                bg-blue-600
                px-7
                py-3.5
                text-base
                font-semibold
                text-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-blue-700
                hover:shadow-xl
              "
            >
              🔍 Search Articles
            </button>
          )}
        </div>

      </div>
    </nav>
  );
}