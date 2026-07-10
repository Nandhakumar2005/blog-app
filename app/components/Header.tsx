"use client";

import { useState } from "react";
import { useTheme } from "./ThemeProvider";

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToTop = () => {
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToArticles = () => {
    setMenuOpen(false);
    document
      .getElementById("latest-articles")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md transition-colors duration-300 dark:border-slate-700/80 dark:bg-slate-900/80">
      <div className="mx-auto flex w-full max-w-screen-2xl items-center justify-between px-4 py-4 sm:px-6 sm:py-5 lg:px-12 xl:px-16">
        <div className="flex items-center gap-4 sm:gap-8 lg:gap-14">
          <h1
            onClick={scrollToTop}
            className="cursor-pointer bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-2xl font-black tracking-tight text-transparent transition duration-300 hover:from-blue-600 hover:to-blue-800 sm:text-3xl lg:text-4xl dark:from-white dark:to-blue-300 dark:hover:from-blue-300 dark:hover:to-blue-100"
          >
            Blogzera
          </h1>

          <nav className="hidden items-center gap-8 md:flex">
            <button
              onClick={scrollToTop}
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-blue-600 lg:text-base dark:text-slate-300"
            >
              Home
            </button>
            <button
              onClick={scrollToArticles}
              className="text-sm font-medium text-slate-600 transition duration-300 hover:text-blue-600 lg:text-base dark:text-slate-300"
            >
              Articles
            </button>
          </nav>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="flex items-center gap-2 rounded-full border border-slate-300 bg-white px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-100 hover:shadow-md sm:gap-3 sm:px-5 sm:py-3 sm:text-sm dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800"
          >
            {theme === "light" ? (
              <>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-900 text-sm text-white sm:h-8 sm:w-8">
                  ☀
                </span>
                <span className="hidden sm:inline">Light</span>
              </>
            ) : (
              <>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm text-slate-900 sm:h-8 sm:w-8">
                  🌙
                </span>
                <span className="hidden sm:inline">Dark</span>
              </>
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 transition hover:bg-slate-100 md:hidden dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {menuOpen ? (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="border-t border-slate-200 bg-white px-4 py-4 md:hidden dark:border-slate-700 dark:bg-slate-900">
          <div className="flex flex-col gap-2">
            <button
              onClick={scrollToTop}
              className="rounded-xl px-4 py-3 text-left text-base font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Home
            </button>
            <button
              onClick={scrollToArticles}
              className="rounded-xl px-4 py-3 text-left text-base font-medium text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800"
            >
              Articles
            </button>
          </div>
        </nav>
      )}
    </header>
  );
}
