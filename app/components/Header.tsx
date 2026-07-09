"use client";

import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToArticles = () => {
    document
      .getElementById("latest-articles")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-700 dark:bg-slate-900/80">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-6 py-5 lg:px-12 xl:px-16">

        {/* LEFT */}
        <div className="flex items-center gap-14">

          {/* Logo */}
          <h1
            onClick={scrollToTop}
            className="cursor-pointer text-4xl font-black tracking-tight text-slate-900 transition duration-300 hover:text-blue-600 dark:text-white"
          >
            Blogzera
          </h1>

          {/* Navigation */}
          <nav className="hidden items-center gap-10 md:flex">
            <button
              onClick={scrollToTop}
              className="text-base font-medium text-slate-600 transition duration-300 hover:text-blue-600 dark:text-slate-300"
            >
              Home
            </button>

            <button
              onClick={scrollToArticles}
              className="text-base font-medium text-slate-600 transition duration-300 hover:text-blue-600 dark:text-slate-300"
            >
              Articles
            </button>
          </nav>

        </div>

        {/* RIGHT - Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="
            flex items-center gap-3
            rounded-full
            border border-slate-300
            bg-white
            px-5 py-3
            text-sm
            font-semibold
            text-slate-800
            shadow-sm
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-slate-100
            hover:shadow-md
            dark:border-slate-700
            dark:bg-slate-900
            dark:text-white
            dark:hover:bg-slate-800
          "
        >
          {theme === "light" ? (
            <>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-white">
                ☀
              </span>
              Light
            </>
          ) : (
            <>
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-slate-900">
                🌙
              </span>
              Dark
            </>
          )}
        </button>

      </div>
    </header>
  );
}