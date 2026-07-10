export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white transition-colors duration-300 sm:mt-28 lg:mt-36 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-12 px-4 py-16 sm:gap-16 sm:px-6 sm:py-20 lg:flex-row lg:justify-between lg:gap-20 lg:px-12 lg:py-24 xl:px-16">
        <div className="max-w-lg">
          <h2 className="bg-gradient-to-r from-slate-900 to-blue-700 bg-clip-text text-3xl font-black tracking-tight text-transparent sm:text-4xl dark:from-white dark:to-blue-300">
            Blogzera
          </h2>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:mt-6 sm:text-lg sm:leading-8 dark:text-slate-400">
            Discover insightful articles on React, Next.js, TypeScript,
            Artificial Intelligence, Cybersecurity, APIs and modern web
            development.
          </p>

          <p className="mt-6 text-xs text-slate-500 sm:mt-8 sm:text-sm dark:text-slate-500">
            Built with Next.js, Tailwind CSS & MockAPI.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-lg font-bold text-slate-900 sm:mb-6 sm:text-xl dark:text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 sm:gap-4">
            <a
              href="/"
              className="text-sm text-slate-600 transition duration-300 hover:text-blue-600 sm:text-base dark:text-slate-400 dark:hover:text-blue-400"
            >
              Home
            </a>
            <a
              href="/#latest-articles"
              className="text-sm text-slate-600 transition duration-300 hover:text-blue-600 sm:text-base dark:text-slate-400 dark:hover:text-blue-400"
            >
              Articles
            </a>
          </div>
        </div>

        <div className="space-y-3 sm:space-y-4 lg:text-right">
          <h3 className="text-lg font-bold text-slate-900 sm:text-xl dark:text-white">
            Developer
          </h3>

          <p className="text-base text-slate-600 sm:text-lg dark:text-slate-400">
            Nandhakumar K S
          </p>

          <div className="pt-4 text-xs text-slate-500 sm:pt-6 sm:text-sm dark:text-slate-500">
            <p>© {new Date().getFullYear()} Blogzera.</p>
            <p className="mt-1 sm:mt-2">All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
