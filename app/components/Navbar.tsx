"use client";

import { useState, useEffect, useMemo } from "react";
import { useTheme } from "./ThemeProvider";
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

  const { theme, toggleTheme } = useTheme();

  // Convert "react nextjs ai" → ["react","nextjs","ai"]
  const getTagsArray = (tags?: string) => {
    return tags ? tags.split(" ").filter(Boolean) : [];
  };

  // Build unique tag list
  const tags = useMemo(() => {
    const allTags = posts.flatMap((post) => getTagsArray(post.tags));
    return ["All", ...Array.from(new Set(allTags))];
  }, [posts]);

  // Show first 5 tags after All
  const visibleTags = tags.slice(0, 6);
  const moreTags = tags.slice(6);

  // Filter posts
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
  }, [posts]);

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
      <div className="flex w-full items-center justify-between px-6 py-4 lg:px-10 xl:px-14">
        
        {/* LEFT - TAGS */}
        <div className="flex items-center gap-2">

          {visibleTags.map((tag) => (
            <button
              key={tag}
              onClick={() => handleTagClick(tag)}
              className={`rounded-full px-3 py-1 text-sm transition ${
                activeTag === tag
                  ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900"
                  : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
              }`}
            >
              {tag}
            </button>
          ))}

          {moreTags.length > 0 && (
            <div className="relative">

              <button
                onClick={() => setShowMore(!showMore)}
                className="rounded-full px-3 py-1 text-sm text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                More ▾
              </button>

              {showMore && (
                <div className="absolute left-0 top-full mt-2 w-48 rounded-xl border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900">

                  {moreTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => handleTagClick(tag)}
                      className={`block w-full px-4 py-2 text-left text-sm transition hover:bg-slate-100 dark:hover:bg-slate-800 ${
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

        {/* CENTER - SEARCH */}
        <div>
          {searchOpen ? (
            <input
              autoFocus
              value={search}
              onChange={(e) => handleSearch(e.target.value)}
              placeholder="Search articles..."
              className="
                w-64 rounded-full
                border border-slate-300
                bg-white
                px-4 py-2
                text-sm
                text-slate-900
                placeholder:text-slate-500
                shadow-sm
                outline-none
                focus:ring-2
                focus:ring-blue-300
                dark:border-slate-700
                dark:bg-slate-800
                dark:text-white
                dark:placeholder:text-slate-400
              "
            />
          ) : (
            <button
              onClick={() => setSearchOpen(true)}
              className="text-sm text-slate-600 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white"
            >
              🔍 Search
            </button>
          )}
        </div>

        {/* RIGHT - THEME */}
        <button
          onClick={toggleTheme}
          className="
            flex items-center gap-2
            rounded-full
            border
            border-slate-300
            bg-white
            px-4 py-2
            text-sm
            font-medium
            text-slate-800
            transition
            hover:bg-slate-100
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
            dark:hover:bg-slate-800
          "
        >
          {theme === "light" ? (
            <>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-white">
                ☀
              </span>
              Light
            </>
          ) : (
            <>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-slate-900">
                🌙
              </span>
              Dark
            </>
          )}
        </button>

      </div>
    </nav>
  );
}